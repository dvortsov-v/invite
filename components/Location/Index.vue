<script setup lang="ts">

</script>

<template>
    <Section class="invite-location">
        <template #background>
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-location__background invite-location__background--1">
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-location__background invite-location__background--2">
        </template>
        <template #title>
            Локация
        </template>
        <div class="invite-location__description">
            <p class="invite-location__text">
                Свадебное торжество пройдёт в
            </p>
            <p class="invite-location__place">
                Первом доме торжеств
            </p>
            <p class="invite-location__address">
                по адрессу: г. Брянск 2-я Почепская ул., 35А
            </p>
        </div>
        <InviteLink href="https://yandex.ru/maps/-/CHfOBC0J" target="_blank" class="invite-location__map">Открыть карту</InviteLink>
        <svg-icon name="constellation_1" class="invite-location__constellation"/>
    </Section>
</template>

<style scoped lang="scss">
.invite-location {
    &__background {
        width: 1090px;
        position: absolute;
        top: -30%;
        z-index: -1;
        opacity: 0.2;

        &--1 {
            left: 0;
            transform: translateX(-50%);
        }
        &--2 {
            right: 0;
            transform: translateX(50%) rotate(90deg);
        }
    }
    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5vh;
    }

    &__description {
        margin-top: 70px;
    }

    &__text {
        position: relative;
        font-size: 25px;
        font-family: 'PlayfairDisplay';
        max-width: 700px;
        text-align: center;
    }

    &__place {
        position: relative;
        font-size: 30px;
        font-family: 'PlayfairDisplay';
        max-width: 700px;
        text-align: center;
        text-transform: uppercase;
        margin-top: 20px;
    }

    &__address {
        position: relative;
        font-size: 25px;
        font-family: 'PlayfairDisplay';
        max-width: 700px;
        text-align: center;
        margin-top: 20px;
    }

    &__constellation {
        width: 250px;
        height: 90px;
        margin-top: 50px;
    }
}

</style>
