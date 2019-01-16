<template>
    <div class="wrapper">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <g-icon icon="icon-error" class="error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from "./icon";

    export default {
        name: "input",
        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: String

        }
    }
</script>

<style scoped>
    .wrapper > input {
        height: var(--button-height);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 0 8px;
    }

    .wrapper > input:hover {
        border-color: var(--border-color-hover);
    }

    .wrapper > input:focus {
        box-shadow: inset 0 1px 3px var(--box-shadow-color);
        outline: none;
    }

    .wrapper > input[disabled], .wrapper > input[readonly] {
        cursor: not-allowed;
    }
    .error {
        fill: red;
    }
    .errorMessage {
        color: red;
    }
    .wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
</style>