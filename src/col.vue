<template>
    <div class="col"
         :class="colClasses"
         :style="colStyles"
    >

           <slot></slot>

    </div>
</template>

<script>
    function validator(value) {
        Object.keys(value).forEach(v => {
            if (!["span", "offset"].includes(v)) return false
        })
        return true
    }
    export default {
        name: "col",
        props: {
            span: [Number,String],
            offset: [Number,String],
            phone: {
                type: Object,
                validator:validator
            },
            ipad: {
                type: Object,
                validator:validator
            },
            narrowPc: {
                type: Object,
                validator:validator
            },
            pc: {
                type: Object,
                validator:validator
            },
            widePc: {
                type: Object,
                validator:validator
            }
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

                const {span,offset,phone,ipad,narrowPc,pc,widePc} = this
                const devices = {phone,ipad,"narrow-pc":narrowPc,pc,"wide-pc":widePc};
                const deviceSpanClasses = Object.entries(devices).map(([devicesString,device]) => {
                    return device  && device.span && `col-${devicesString}-${device.span}`
                })
                const deviceOffsetClasses = Object.entries(devices).map(([devicesString,device]) => {
                    return device && device.offset && `offset-${devicesString}-${device.offset}`
                })
                return[span && `col-${span}`,offset && `offset-${offset}`].concat(deviceSpanClasses).concat(deviceOffsetClasses)

            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        /*background: gray;*/
        /*border: 1px solid red;*/
        /*width: 50%;*/
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
        @media (max-width: 576px) {
            $class-prefix:col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: $n / 24 * 100%;
                }
            }
            $class-prefix:offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: $n / 24 * 100%;
                }
            }
        }
        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 577px) and (max-width: 768px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) and (max-width: 992px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) and (max-width: 1200px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

    }


</style>