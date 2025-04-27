<script setup lang="ts">
useHead({
    title: "Приглашение на свадьбу",
});
</script>

<template>
    <div class="invite">
        <div class="invite__wrapper">
            <Intro class="invite__intro"/>
            <Welcome class="invite__time"/>
            <Location class="invite__location"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.invite {
    overflow: hidden;
}
</style>
