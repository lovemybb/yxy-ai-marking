<template>
  <div id="app">sfsdfsdfsdfsdf sdfsdfsdfsdsdfsdf sdfsdfsdfsdsdfsdf sd fffffff fffsss sdfsdfsdfsdsdfsds sdfsdfsdfsdsdfsdsds sdfsdfsdfsdsdf

    <ai-making :wordClassList='wordClassList' :text="text" :contentCategoryList="contentCategoryList"></ai-making>
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
      msg: "Welcome to Your Vue.js App",
      wordClassList: [
        { shortcut_key: "A", name: "fffA", id: 1 },
        { shortcut_key: "B", name: "fffB", id: 2 },
        { shortcut_key: "C", name: "fffC", id: 3 },
        { shortcut_key: "D", name: "fffD", id: 4 },
        { shortcut_key: "E", name: "fffE", id: 5 },
        { shortcut_key: "F", name: "fffF", id: 6 },
        { shortcut_key: "G", name: "fffG", id: 7 },
        { shortcut_key: "H", name: "fffH", id: 8 },
        { shortcut_key: "I", name: "fffI", id: 9 },
        { shortcut_key: "J", name: "fffJ", id: 10 },
        { shortcut_key: "K", name: "fffK", id: 11 },
        { shortcut_key: "L", name: "fffL", id: 12 },
        { shortcut_key: "M", name: "fffM", id: 13 },
        { shortcut_key: "N", name: "fffN", id: 14 },
        { shortcut_key: "O", name: "fffO", id: 15 },
        { shortcut_key: "P", name: "fffP", id: 16 },
        { shortcut_key: "Q", name: "fffQ", id: 17 },
        { shortcut_key: "R", name: "fffR", id: 18 },
        { shortcut_key: "S", name: "fffS", id: 19 },
        { shortcut_key: "T", name: "fffT", id: 20 },
        { shortcut_key: "U", name: "fffU", id: 21 },
        { shortcut_key: "V", name: "fffV", id: 22 },
        { shortcut_key: "W", name: "fffW", id: 23 },
        { shortcut_key: "X", name: "fffX", id: 24 },
        { shortcut_key: "Y", name: "fffY", id: 25 },
        { shortcut_key: "Z", name: "fffZ", id: 26 }
      ],
      text:
        "sdfsdfsdfsdsdfsdfsdfsdf sdsdfsdfsdfsdfsds dfsdfsdfsdfsdsdfsdfs dfsdfsdsdfsdfs dfsdfsdsdf sdfsdfsdfsd sdfsdf sdfsdfsdsdfsdfsdf sdfsdsdfsdfsdfsdfsds dfsdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>sdfsdfsdfsdsdf<br>",
      contentCategoryList: [
        {
          id: 1,
          name: "内容1"
        }
      ]
    };
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
