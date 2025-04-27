<script setup lang="ts">
useHead({
    title: "Приглашение на свадьбу",
});
</script>

<template>
    <div class="invite">
        <div class="invite__wrapper">
            <img src="/picture/main.png" alt="" class="invite__background">
            <Intro class="invite__intro"/>
            <Welcome class="invite__time"/>
        </div>
    </div>
</template>

<style scoped lang="scssgu">
.invite {
    position: relative;
    &__background {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        z-index: -1;
    }
}
</style>
