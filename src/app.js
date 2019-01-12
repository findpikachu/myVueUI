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

//单元测试
import chai from "chai";
import spies from "chai-spies";
chai.use(spies)
const expect = chai.expect;
{

    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
        propsData: {
            icon: "icon-setting"
        }
    }).$mount();
    const useElement = vm.$el.querySelector("use");
    const href = useElement.getAttribute("xlink:href")
    expect(href).to.equal("#icon-setting")

}

{
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
        propsData: {
            icon: "icon-setting",
            loading: true
        }
    }).$mount();
    const useElement = vm.$el.querySelector("use");
    const href = useElement.getAttribute("xlink:href")
    expect(href).to.equal("#icon-loading")
}

{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
        propsData: {
            icon: "icon-setting"
        }
    }).$mount(div);
    const svgElement = vm.$el.querySelector("svg");
    const {order} = window.getComputedStyle(svgElement)
    expect(order).to.equal("1")
    vm.$el.remove();
    vm.$destroy()

}

{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
        propsData: {
            icon: "icon-setting",
            iconPosition: "right"
        }
    }).$mount(div);
    const svgElement = vm.$el.querySelector("svg");
    const {order} = window.getComputedStyle(svgElement)
    expect(order).to.equal("2")
    vm.$el.remove();
    vm.$destroy()


}

{
    const Construtor = Vue.extend(Button);
    const vm = new Construtor({
        propsData: {
            icon: "icon-setting"
        }
    }).$mount();
    const spy = chai.spy(() => {})
    vm.$on("click",spy);
    vm.$el.click()
    expect(spy).to.have.been.called()
}
