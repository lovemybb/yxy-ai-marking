import Marking from './components/marking/index.js';

const components = [ //组件
  Marking
]

const filters = [ //过滤器
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
  filters.map(filter => {
    Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// let exportArr = [...components, ...filters]
// let exportObj = {}



export {
  install,
  AiMarking
};

export default {
  install,
  AiMarking
};
