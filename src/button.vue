<template>
    <button class="g-button" :class="`icon-${iconPosition}`">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#${icon}`"></use>
        </svg>
       <div class="content">
           <slot></slot>
       </div>
    </button>
</template>

<script>
    export default {
        name: "button",
        props: {
            icon:String,
            iconPosition: {
                type:String,
                default: "left",
                validator(value) {
                    return ["left","right"].includes(value)
                }
            }
        }
    }
</script>

<style scoped>
    .g-button {
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size);
        height: var(--button-height);
        background-color: var(--button-bg);
        border-radius: var(--border-radius);
        padding: 0 1em;
        color: var(--color);
        border: 1px solid var(--border-color);
    }
    .g-button:hover {
        border-color: var(--border-color-hover);
    }
    .g-button:active {
        background-color: var(--button-active-bg);
    }
    .g-button:focus {
        outline: none;
    }

    .icon-right > .content {
        order: 1;
    }

    .icon-right > .icon {
        order: 2;
    }

    .icon-left > .content {
        order: 2;
    }

    .icon-left > .icon {
        order: 1;
    }

</style>