<template>
  <div class="main">
    <div class="content">
      <div class=" title">标注区域</div>
      <div class=" middle" id="makeText">
        <iframe src="" frameborder="0" style="width:100%;height:97%" id="makeTextIframe"></iframe>
      </div>
      <div class=" word-category-list">
        <div v-for="item in data_wordClassList" :key="item.id" @click="noteSelectedText(item)">
          <label for="">{{item.shortcut_key}}</label>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="content-category-list">
      <div class=" title">分类</div>
      <div class=" middle">
        <select v-model="contentCagegory">
          <option v-for="item in contentCategoryList" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <button @click="removeAllHighlights" v-if="!readOnly">取消所有标注</button>
      <button class="submit-btn" @click="submit" v-if="!readOnly">保存标注内容</button>
    </div>
  </div>
</template>
<script>
import rangy from "rangy";
import rangyClassApplier from "rangy/lib/rangy-classapplier";
import rangyTextRange from "rangy/lib/rangy-textrange";
import rangyHighlighter from "rangy/lib/rangy-highlighter";
import rangySerializer from "rangy/lib/rangy-serializer";
import rangySaveRestore from "rangy/lib/rangy-selectionsaverestore";
export default {
  name: "aiMarking",
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    contentCategoryList: {
      //内容分类数据[{id,name}]
      type: Array,
      default() {
        return [];
      }
    },
    selectedContentCagegory: {
      //默认选中的内容分类
      type: String,
      default: ""
    },
    markedJson: {
      //已标记内容的位置信息
      type: String,
      default: ""
    },
    markedList: {
      //标记过的词信息[{text: string,wordClass: object}]
      type: Array,
      default() {
        return [];
      }
    },
    wordClassList: {
      //词分类数据[{id,name,shortcut_key}]
      type: Array,
      default() {
        return [];
      }
    },
    text: {
      //待标记的内容
      type: String,
      default: ""
    }
  },
  data() {
    return {
      highlighter: null,
      markingJson: "",
      contentCagegory: "",
      data_markedList: null,
      data_wordClassList: null
    };
  },
  created() {
    rangy.init();
  },
  mounted() {
    let _self = this;
    this.data_markedList = JSON.parse(JSON.stringify(this.markedList));
    this.contentCagegory =
      this.selectedContentCagegory ||
      (this.contentCategoryList &&
        this.contentCategoryList.length &&
        this.contentCategoryList[0].id);
    document.getElementById(
      "makeTextIframe"
    ).contentWindow.document.body.innerHTML = this.text; //给iframe赋值
    this.highlighter = rangy.createHighlighter(
      document.getElementById("makeTextIframe").contentWindow.document
    ); //获取荧光棒对象
    this.data_wordClassList = JSON.parse(JSON.stringify(this.wordClassList));
    this.data_wordClassList = this.data_wordClassList.map(item => {
      item.shortcut_key = item.shortcut_key || item.id;
      return item;
    });
    this.data_wordClassList.forEach(item => {
      //初始化标记
      this.highlighter.addClassApplier(
        rangy.createClassApplier("note" + item.shortcut_key, {
          ignoreWhiteSpace: true,
          elementTagName: "a",
          elementProperties: {
            href: "javascript:;",
            title: "标注为：" + item.name,
            onclick: function() {
              let highlight = _self.highlighter.getHighlightForElement(this);
              if (confirm("确定要删除标注吗?")) {
                console.log(highlight, "highlight");
                _self.highlighter.removeHighlights([highlight]);
                let index = _self.data_markedList.findIndex(item => {
                  console.log(item, highlight.id);
                  return item.markingId == highlight.id;
                });
                if (index >= 0) _self.data_markedList.splice(index, 1); //删除标记list
              }
              return false;
            }
          }
        })
      );
    });
    if (this.markedJson) this.highlighter.deserialize(this.markedJson); //回显已标记
  },
  methods: {
    noteSelectedText(obj) {
      if (this.readOnly) return;
      //点击标注
      let makingString = rangy
        .getSelection(document.getElementById("makeTextIframe"))
        .toString();

      let highlight = this.highlighter.highlightSelection(
        "note" + obj.shortcut_key
      );
      if (makingString)
        this.data_markedList.push({
          text: makingString,
          wordClass: obj,
          markingId: highlight[0].id
        });
    },
    removeAllHighlights() {
      this.data_markedList = [];
      this.highlighter.removeAllHighlights();
    },
    submit() {
      this.markingJson = this.highlighter.serialize();
      this.$emit("submit", {
        markingJson: this.markingJson, //标记json
        text: this.text, //标记前内容
        markeList: this.data_markedList, //标记结果列表（关键字和词的对应）
        contentCagegory: this.contentCagegory, //当前的内容分类id
        markeText: document.getElementById("makeTextIframe").contentWindow
          .document.body.innerHTML
      });
    }
  }
};
</script>


<style lang="scss" scoped >
@import "../assets/css/rangy.css";
.main {
  width: 100%;

  .content {
    height: 300px;
    border: 1px solid #eee;
    .title {
      float: left;
      width: 3%;
      height: 100%;
      margin: 130px 3px 0 3px;
    }
    .middle {
      float: left;
      border: 1px solid #333;
      height: 280px;
      width: 77%;
      text-align: left;
      padding: 10px;
      line-height: 30px;
      font-size: 20px;
      overflow-y: auto;
    }
    .word-category-list {
      float: left;
      height: 100%;
      width: 17%;
      overflow-y: auto;
      div {
        margin: 10px;
        cursor: pointer;
        label {
          display: inline-block;
          border: 1px solid;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          margin-right: 10px;
        }
        span {
        }
      }
      div:hover {
        background: #eee;
      }
      div:active {
        background: #ddd;
      }
    }
  }
  .content-category-list {
    margin-top: 20px;
    .title {
      float: left;
      width: 10%;
    }
    .middle {
      float: left;
      select {
        width: 150px;
        padding: 2px;
      }
    }
    button {
      width: 150px;
      margin-left: 10px;
      display: inline-block;
    }
  }
}
</style>
