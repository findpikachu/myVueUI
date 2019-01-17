const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input",() => {
    it('存在', function () {
        expect(Input).to.exist
    });
    describe('props', function () {
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(function () {
            vm.$destroy()
        });
        it('接收value', function () {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector("input")
            expect(inputElement.value).to.equal("1234")
        });
        it('接收disabled', function () {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector("input")
            expect(inputElement.disabled).to.equal(true)
        });
        it('接收readonly', function () {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector("input")
            expect(inputElement.readOnly).to.equal(true)
        });
        it('接收error', function () {
            vm = new Constructor({
                propsData: {
                    error: "error"
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMessage = vm.$el.querySelector(".errorMessage");
            expect(errorMessage.textContent).to.equal("error")
        });

    });
    describe('events', function () {
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(function () {
            vm.$destroy()
        });
        it('支持 change/input/focus/blur 事件', function () {

            ["change","input","focus","blur"].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发事件
                const event= new Event(eventName);
                Object.defineProperty(
                    event, 'target', {
                        value: {value: 'hi'}, enumerable: true
                    }
                )
                const inputElement = vm.$el.querySelector("input")
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith("hi")

            })
        });
    });
})