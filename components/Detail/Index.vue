<script setup>
const list = [
    {
        subtitle: 'Подарки',
        text: 'Главное для нас - Ваше внимание. А радость доставит любой подарок в конверте или из нашего вишлиста',
    },
    {
        subtitle: 'Цветы',
        text: 'Будем признательны за альтернативу букетам в форме бутылочки вина или другого приятного напитка и записки о событии, к которому нам приурочить ее открытие.',
    },
]
</script>

<template>
    <Section class="invite-detail">
        <template #background>
            <img src="/picture/background-welcome.png" alt="bg" class="invite-detail__background invite-detail__background--1">
            <img src="/picture/background-welcome.png" alt="bg" class="invite-detail__background invite-detail__background--2">
        </template>
        <template #title>
            Детали
        </template>
        <div v-for="item in list" class="invite-detail__box">
            <h4 class="invite-detail__subtitle">
                {{ item.subtitle }}
            </h4>
            <p class="invite-detail__text">
                {{ item.text }}
            </p>
            <InviteLink v-if="item.subtitle === 'Подарки'" href="https://yandex.ru/maps/-/CHfOBC0J" target="_blank" class="invite-detail__wish">Wish list</InviteLink>
        </div>
    </Section>
</template>

<style scoped lang="scss">
.invite-detail {
    &__background {
        width: rem(1090, 16);
        position: absolute;
        z-index: -1;
        opacity: 0.5;

        &--1 {
            top: -50%;
            transform: translateX(-50%) rotate(-90deg);
            left: 0;

            @media (max-width: 640px) {
                left: -4%;
            }
        }
        &--2 {
            top: 20%;
            transform: translateX(45%) rotate(-99deg);
            right: 0;

            @media (max-width: 1200px) {
                transform: translateX(45%)  scale(-1, 1);
            }

            @media (max-width: 640px) {
                top: 0;
                right: -15%;
            }
        }
    }

    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: rem(70, 16);

        @media (max-width: 414px) {
            margin-top: rem(40, 16);
        }
    }

    &__subtitle {
        position: relative;
        font-size: rem(25, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-transform: uppercase;
        text-align: center;
        color: #9151d4;
        font-weight: 600;
    }
    &__text {
        position: relative;
        font-size: rem(20, 16);
        font-family: 'TrajanPro3';
        max-width: rem(400, 16);
        text-align: center;
        margin-top: rem(15, 16);
        font-weight: 600;

        @media (max-width: 1200px) {
            max-width: rem(600, 16);
        }
    }
}

</style>
