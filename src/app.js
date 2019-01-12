import Button from "./button";
import Icon from "./icon";
import Vue from "vue";
import ButtonGroup from "./button-group";

Vue.component("g-button",Button);
Vue.component("g-icon",Icon);
Vue.component("g-button-group",ButtonGroup);
new Vue({
    el: "#app",
    data: {
        loading:true
    }
})
