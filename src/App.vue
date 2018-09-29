<template>
  <div id="app">
    <ai-marking :key="incId" :selectedContentCagegory="contentCategory" :readOnly="readOnly" :wordClassList='wordClassList' :text="text" :markedJson="markedJson" :markedList="markedList" :contentCategoryList="contentCategoryList" @submit="submit"></ai-marking>
  </div>
</template>

<script>
import AiMarking from "./marking/";
export default {
  name: "app",
  components: {
    AiMarking
  },
  data() {
    return {
      readOnly: false, //是否只读
      incId: "1", //改变incId，刷新组件
      wordClassList: [
        //词类
        { name: "fffA", id: 1 },
        { name: "fffB", id: 2 },
        { name: "fffC", id: 3 }
      ],
      text: `生活星期天早上和朋友一起聊天，朋友说了一个他们听过的故事：“一尊佛像前有一条铺着石板的路，人们每天都踏着这一阶一阶的石板去膜拜佛像。石阶看着人们踏着自己去膜拜佛像，心里很不舒服。石阶心里想，自己和佛本来就来自同一块石头，为什么自己要成为踏脚石，让人们踩着自去去膜拜它呢！它对佛抱怨说这样太不公平！佛像说：这没有什么不公平，你们成为台阶只需挨了四刀，而我是挨了千刀万剐才成了人们膜拜的佛像。”
　　他说这个故事给留下非常深刻的印象——人确实需要磨练才能成才，不一样的付出，当然收获不一样的结果。
　　“自古雄才多磨难，从来纨绔少伟男，”“宝剑锋从磨砺出，梅花香自苦寒来，“一个人要想成为人上之人，必须吃得苦中之苦。只要有抱负，就去努力。不努力不付出，石阶永远不可能变成佛像的！`, //
      contentCategoryList: [
        {
          id: "1",
          name: "内容1"
        },
        {
          id: "2",
          name: "内容2"
        },
        {
          id: "3",
          name: "内容3"
        }
      ],
      contentCategory: "3",
      markedJson: "type:textContent|12$14$1$note1$",
      markedList: [
        {
          text: "聊天",
          wordClass: {
            id: 1,
            name: "fffA"
          }
        }
      ]
    };
  },
  methods: {
    submit(data) {
      /**
       *{
        markingJson //标记信息json
        text//标记前的内容
        markeList //标记结果列表（关键字和词的对应）
        contentCagegory //当前的内容分类id
        markeText//标记后的内容
      }
       */
      console.log(data, "submit data");
    }
  }
};
</script>