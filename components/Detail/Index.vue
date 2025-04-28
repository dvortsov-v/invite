<script setup lang="ts">
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
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-detail__background invite-detail__background--1">
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-detail__background invite-detail__background--2">
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
        width: 1090px;
        position: absolute;
        z-index: -1;
        opacity: 0.5;

        &--1 {
            top: 0;
            transform: translateX(-50%) rotate(-90deg);
            left: 0;
        }
        &--2 {
            top: 20%;
            transform: translateX(45%) rotate(-90deg);
            right: 0;
        }
    }

    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
    }

    &__subtitle {
        position: relative;
        font-size: 20px;
        font-family: 'PlayfairDisplay';
        max-width: 700px;
        text-transform: uppercase;
        text-align: center;
        color: #9151d4;
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
