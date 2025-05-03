<script setup lang="ts">

</script>

<template>
    <Section class="invite-questionnaire">
        <template #background>
            <img src="/picture/heart-star.png" alt="bg" class="invite-questionnaire__star">
        </template>
        <template #title>
            Анкета гостя
        </template>
        <h4 class="invite-questionnaire__subtitle">
            Подтвердите, пожалуйста, свое присутствие до 01.07.2025
        </h4>
        <InviteLink href="https://yandex.ru/maps/-/CHfOBC0J" target="_blank" class="invite-questionnaire__wish">Заполнить анкету</InviteLink>
        <p class="invite-questionnaire__text">
            С любовью Борис и Анна
        </p>
    </Section>
</template>

<style scoped lang="scss">
.invite-questionnaire {
    &__star {
        width: rem(300, 16);
        position: absolute;
        z-index: -1;
        opacity: 0.36;
        bottom: 0;
        transform: translateX(-50%) rotate(-9deg);
        left: 18%;
    }

    &__subtitle {
        position: relative;
        font-size: rem(20, 16);
        font-family: 'TrajanPro3';
        max-width: rem(550, 16);
        text-transform: uppercase;
        text-align: center;
        margin-top: rem(70, 16);
        font-weight: 600;
    }
    &__text {
        position: relative;
        font-size: rem(14, 16);
        font-family: 'TrajanPro3';
        max-width: rem(400, 16);
        text-align: center;
        margin-top: rem(15, 16);
        font-weight: 600;
    }
}

</style>
