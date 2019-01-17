<template>
    <div class="col" :class="`col-${span}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "col",
        props: {
            span: [Number,String]
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        background: gray;
        border: 1px solid red;
        width: 50%;
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: $n / 24 * 100%;
            }
        }

    }
</style>