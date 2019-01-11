<template>
    <button class="g-button">按钮</button>
</template>

<script>
    export default {
        name: "button"
    }
</script>

<style scoped>
    .g-button {
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
</style>