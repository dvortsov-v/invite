<script setup lang="ts">

</script>

<template>
    <a v-bind="$attrs" target="_blank" class="invite-link"><slot></slot></a>
</template>

<style scoped lang="scss">

.invite-link {
    margin: rem(40, 16) auto 0;
    min-height: rem(40, 16);
    min-width: rem(250, 16);
    background-image: linear-gradient(90deg, #aa82d4 50%, #e0c8f7);
    border-radius: rem(20, 16);
    padding: rem(15, 16);
    color: #fff;
    text-align: center;
    display: inline-block;
    font-style: italic;
    font-family: 'TrajanPro3';
}
</style>
