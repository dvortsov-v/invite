<script setup lang="ts">

</script>

<template>
    <a v-bind="$attrs" target="_blank" class="invite-link"><slot></slot></a>
</template>

<style scoped lang="scss">

.invite-link {
    margin: 40px auto 0;
    min-height: 40px;
    min-width: 250px;
    background-image: linear-gradient(90deg, #aa82d4 50%, #e0c8f7);
    border-radius: 20px;
    padding: 15px;
    color: #fff;
    text-align: center;
    display: inline-block;
    font-style: italic;
    font-family: 'TrajanPro3';
}
</style>
