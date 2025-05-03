<script setup lang="ts">

</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">

.container {
    max-width: rem(1344, 16);
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1024px) {
        max-width: rem(1024, 16);
        padding-left: rem(50, 16);
        padding-right: rem(50, 16);
    }
    @media (max-width: 640px) {
        max-width: initial;
        padding-left: rem(25, 16);
        padding-right: rem(25, 16);
    }
}
</style>
