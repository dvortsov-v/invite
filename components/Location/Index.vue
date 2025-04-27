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
        <a href="https://yandex.ru/maps/-/CHfOBC0J" target="_blank" class="invite-location__map">Открыть карту</a>
    </Container>
</div>
</template>

<style scoped lang="scss">
.invite-location {
    position: relative;
    color: #292929;
    padding-bottom: 100px;

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
        min-height: 40px;
        min-width: 250px;
        background-image: linear-gradient(90deg, #aa82d4 50%, #e0c8f7);
        border-radius: 20px;
        padding: 15px;
        color: #fff;
        text-align: center;
        display: inline-block;
    }
}

</style>
