import Button from "./button";
import Icon from "./icon";
import Vue from "vue";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import Sider from "./sider";
import Layout from "./layout";





Vue.component("g-button",Button);
Vue.component("g-icon",Icon);
Vue.component("g-button-group",ButtonGroup);
Vue.component("g-input",Input);
Vue.component("g-row",Row);
Vue.component("g-col",Col);
Vue.component("g-header",Header)
Vue.component("g-footer",Footer)
Vue.component("g-content",Content)
Vue.component("g-sider",Sider)
Vue.component("g-layout",Layout)
new Vue({
    el: "#app",
    data: {
        loading:true,
        message: "hi"
    }
})

