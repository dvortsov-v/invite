<template>
    <Section class="invite-dresscode">
        <template #background>
            <img src="/picture/background-welcome.png" alt="bg" class="invite-dresscode__background invite-dresscode__background--1">
            <img src="/picture/background-welcome.png" alt="bg" class="invite-dresscode__background invite-dresscode__background--2">
        </template>
        <template #title>
            Дресс-код
        </template>
        <div class="invite-dresscode__description">
            <p class="invite-dresscode__text">
                Определенного дресс-кода на нашем торжестве нет, но мы будем благодарны, если девушки выберут вечерние наряды, а мужчины - классические костюмы
            </p>
        </div>
        <svg-icon name="constellation_2" class="invite-dresscode__constellation"/>
    </Section>
</template>

<style scoped lang="scss">
.invite-dresscode {
    &__background {
        width: rem(1090, 16);
        position: absolute;
        top: -100%;
        z-index: -1;
        opacity: 0.5;

        &--1 {
            left: 0;
            transform: translateX(-50%) rotate(-90deg);

            @media (max-width: 414px) {
                top: -80%;
            }
        }
        &--2 {
            right: 0;
            transform: translateX(50%) scale(1, -1);

            @media (max-width: 640px) {
                top: -130%;
            }
        }
    }

    &__description {
        margin-top: rem(70, 16);

        @media (max-width: 414px) {
            margin-top: rem(40, 16);
        }
    }

    &__text {
        position: relative;
        font-size: rem(25, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;
    }

    &__constellation {
        height: rem(200, 16);
        margin-top: rem(50, 16);
        transform: rotate(-15deg);

        @media (max-width: 640px) {
            height: rem(150, 16);
            margin-top: rem(20, 16);
        }
    }
}

</style>
