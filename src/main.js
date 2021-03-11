import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import NestedElement from "./components/form/NestedElement.vue";
import OutputElement from "./components/output/OutputElement.vue";
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
  Modal,
  Button,
  Popconfirm,
  message,
  Checkbox,
  Steps,
  Badge,
  Pagination,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.component("NestedElement", NestedElement);
Vue.component("OutputElement", OutputElement);
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
Vue.use(Modal);
Vue.use(Button);
Vue.use(Popconfirm);
Vue.use(message);
Vue.use(Checkbox);
Vue.use(Steps);
Vue.use(Badge);
Vue.use(Pagination);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
