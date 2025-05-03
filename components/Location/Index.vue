<template>
    <Section class="invite-location">
        <template #background>
            <img src="/picture/background-welcome.png" alt="bg" class="invite-location__background invite-location__background--1">
            <img src="/picture/background-welcome.png" alt="bg" class="invite-location__background invite-location__background--2">
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
        width: rem(1090, 16);
        position: absolute;
        top: -30%;
        z-index: -1;
        opacity: 0.2;
        @media (max-width: 640px) {
            top: 0;

        }
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
        padding-top: rem(54, 16);
    }

    &__description {
        margin-top: rem(70, 16);

        @media (max-width: 414px) {
            margin-top: rem(35, 16);
        }
    }

    &__text {
        position: relative;
        font-size: rem(25, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;
    }

    &__place {
        position: relative;
        font-size: rem(30, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;
        text-transform: uppercase;
        margin-top: rem(20, 16);
    }

    &__address {
        position: relative;
        font-size: rem(25, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;
        margin-top: rem(20, 16);
    }

    &__constellation {
        width: rem(250, 16);
        height: rem(90, 16);
        margin-top: rem(50, 16);

        @media (max-width: 640px) {
            height: rem(120, 16);
            margin-top: rem(20, 16);
        }

        @media (max-width: 414px) {
            height: rem(80, 16);
        }
    }
}

</style>
