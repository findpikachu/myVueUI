<template>
    <div class="col"
         :class="[`col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"
    >
       <div style="border: 1px solid green">
           <slot></slot>
       </div>
    </div>
</template>

<script>
    export default {
        name: "col",
        props: {
            span: [Number,String],
            offset: [Number,String]
        },
        data() {
            return {
                gutter:0
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        /*background: gray;*/
        /*border: 1px solid red;*/
        width: 50%;
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: $n / 24 * 100%;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: $n / 24 * 100%;
            }
        }

    }
</style>