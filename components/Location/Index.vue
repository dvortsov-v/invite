<script setup lang="ts">

</script>

<template>
<div class="invite-location">
    <img src="/picture/background-welcome.jpg" alt="bg" class="invite-location__background invite-location__background--1">
    <img src="/picture/background-welcome.jpg" alt="bg" class="invite-location__background invite-location__background--2">
    <Container class="invite-location__container">
        <h3 class="invite-location__title">
            Локация
        </h3>
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
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1dddafe32065a4a7fbcecc4e0919f583e3a7eeef3577c2d6a7da3632c76ea7f&amp;source=constructor"
            width="100%"
            height="450"
            frameborder="0"
            class="invite-location__map"
        ></iframe>
    </Container>
</div>
</template>

<style scoped lang="scss">
.invite-location {
    height: 100vh;
    position: relative;
    color: #292929;

    &__background {
        width: 1090px;
        position: absolute;
        top: 0;
        z-index: -1;
        opacity: 0.2;

        &--1 {
            left: 0%;
            transform: translateX(-50%);
        }
        &--2 {
            right: 0%;
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

    &__title {
        position: relative;
        font-size: 50px;
        font-family: 'AgoniaLyubvi';

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

    &__map {
        margin-top: 40px;
    }
}

</style>
