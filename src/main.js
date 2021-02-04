import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import NestedElement from "./components/form/NestedElement";
import {
  Row,
  Col,
  Icon,
  Dropdown,
  Menu,
  Slider,
  Input,
  InputNumber,
  Radio,
  Switch,
  Select,
  Collapse,
  Tooltip,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.component("NestedElement", NestedElement);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Slider);
Vue.use(Input);
Vue.use(Radio);
Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Collapse);
Vue.use(Tooltip);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
