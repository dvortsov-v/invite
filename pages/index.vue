<script setup lang="ts">
useHead({
    title: "Приглашение на свадьбу",
});
</script>

<template>
    <div class="invite">
        <div class="invite__wrapper">
            <Intro class="invite__section"/>
            <Welcome class="invite__section"/>
            <Location class="invite__section"/>
            <Programm class="invite__section"/>
            <Dresscode class="invite__section"/>
            <Detail class="invite__section"/>
            <Questionnaire class="invite__section"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.invite {
    overflow: hidden;

    &__section {
        margin-top: 40px;

        &:first-child {
            margin-top: 0;
        }
    }
}
</style>
