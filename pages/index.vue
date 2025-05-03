<script setup>
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

<style lang="scss">
@import "assets/styles/functions.scss";
</style>
<style scoped lang="scss">
.invite {
    overflow: hidden;

    &__section {
        margin-top: rem(40, 16);

        &:first-child {
            margin-top: 0;
        }

        @media (max-width: 768px) {
            margin-top: rem(20, 16);
        }
        @media (max-width: 414px) {
            margin-top: 0;
        }
    }
}
</style>
