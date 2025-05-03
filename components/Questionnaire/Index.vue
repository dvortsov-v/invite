<script setup lang="ts">

</script>

<template>
    <Section class="invite-detail">
        <template #background>
            <img src="/picture/heart-star.png" alt="bg" class="invite-detail__star">
        </template>
        <template #title>
            Анкета гостя
        </template>
        <h4 class="invite-detail__subtitle">
            Подтвердите, пожалуйста, свое присутствие до 01.07.2025
        </h4>
        <InviteLink href="https://yandex.ru/maps/-/CHfOBC0J" target="_blank" class="invite-detail__wish">Заполнить анкету</InviteLink>
        <p class="invite-detail__text">
            С любовью Борис и Анна
        </p>
    </Section>
</template>

<style scoped lang="scss">
.invite-detail {
    &__star {
        width: 300px;
        position: absolute;
        z-index: -1;
        opacity: 0.36;
        bottom: 0;
        transform: translateX(-50%) rotate(-9deg);
        left: 18%;
    }

    &__subtitle {
        position: relative;
        font-size: 20px;
        font-family: 'TrajanPro3';
        max-width: 550px;
        text-transform: uppercase;
        text-align: center;
        margin-top: 70px;
    }
    &__text {
        position: relative;
        font-size: 14px;
        font-family: 'TrajanPro3';
        max-width: 400px;
        text-align: center;
        margin-top: 15px;
    }
}

</style>
