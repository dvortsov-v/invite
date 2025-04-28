<script setup lang="ts">

</script>

<template>
    <Section class="invite-detail">
        <template #background>
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-detail__background">
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
    &__background {
        width: 1090px;
        position: absolute;
        z-index: -1;
        opacity: 0.5;
        top: 90%;
        transform: translateX(-50%) rotate(-90deg);
        left: 50%;
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
