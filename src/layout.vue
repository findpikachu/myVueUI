<template>
    <div class="layout" :class="{siderClass:hasSider}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                hasSider: false
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                if (vm.$options.name === "sider")
                    this.hasSider = true
            })
        }
    }
</script>

<style scoped>
    .layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border: 1px solid red;
    }
    .siderClass {
        flex-direction: row;
    }
</style>