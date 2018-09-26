<template>
  <div id="app">
    <ai-making :wordClassList='wordClassList' :text="text" :markedJson="markedJson" :markedList="markedList" :contentCategoryList="contentCategoryList" @submit="submit"></ai-making>
  </div>
</template>

<script>
import AiMaking from "./components/making";
export default {
  name: "app",
  components: {
    AiMaking
  },
  data() {
    return {
      wordClassList: [
        //词类
        { name: "fffA", id: 1 },
        { name: "fffB", id: 2 },
        { name: "fffC", id: 3 },
        { name: "fffD", id: 4 },
        { name: "fffE", id: 5 }
      ],
      text:
        "sdfsdfsdfsdsdfsdfsdfsdf sdsdfsdfsdfsdfsds dfsdfsdfsdfsdsdfsdfs dfsdfsdsdfsdfs ", //
      contentCategoryList: [
        {
          id: 1,
          name: "内容1"
        }
      ],
      markedJson: "type:textContent|17$31$1$note4$",
      markedList: [
        {
          text: "dfsdfsdsdfsdfs",
          wordClass: {
            id: 3,
            name: "fffC"
          }
        }
      ]
    };
  },
  methods: {
    submit(data) {
      console.log(data, "submit data");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
