<template>
    <button class="g-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :icon="icon"></g-icon>
        <g-icon icon="icon-loading" class="loading" v-if="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from "./icon";


    export default {
        name: "button",
        components: {
            "g-icon":Icon
        },
        props: {
            icon: String,
            iconPosition: {
                type: String,
                default: "left",
                validator(value) {
                    return ["left", "right"].includes(value)
                }
            },
            loading: {
                type: Boolean,
                default: false
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

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: spin 2s infinite linear;
    }


</style>