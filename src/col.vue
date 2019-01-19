<template>
    <div class="col"
         :class="colClasses"
         :style="colStyles"
    >

           <slot></slot>

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
        },
        computed: {
            colStyles() {
                const {gutter} = this
                return {paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}
            },
            colClasses() {
                const {span,offset} = this
                return [span && `col-${span}`,offset && `offset-${offset}`]
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