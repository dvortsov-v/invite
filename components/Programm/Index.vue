<script setup>
const list = [
    {
        svg: 'glass',
        time: '16:40',
        text: 'Сбор гостей',
    },
    {
        svg: 'heart-main',
        time: '17:00',
        text: 'Свадебный ужин',
    },
    {
        img: '/picture/disco.png',
        time: '22:00',
        text: 'Дискотека',
    },
    {
        svg: 'time',
        time: '00:00',
        text: 'Завершение',
    },
]
</script>

<template>
    <Section class="invite-programm">
        <template #title>
            Программа дня
        </template>
        <ul class="invite-programm__list">
            <li v-for="item in list" class="invite-programm__item">
                <div class="invite-programm__box">
                    <svg-icon
                        v-if="item.svg"
                        :name="item.svg"
                        :class="`invite-programm__icon--${item.svg}`"
                        class="invite-programm__icon"
                    />
                    <img v-else-if="item.img" :src="item.img" alt="" class="invite-programm__img">
                    <div class="invite-programm__time">{{item.time}}</div>
                </div>
                <div class="invite-programm__text">{{item.text}}</div>
            </li>
        </ul>
    </Section>
</template>

<style scoped lang="scss">
.invite-programm {
    &__list {
        margin-top: rem(70, 16);

        @media (max-width: 414px) {
            margin-top: rem(40, 16);
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &::after {
            content: '';
            display: block;
            width: rem(2, 16);
            background: #292929;
            height: rem(35, 16);
            margin-top: rem(5, 16);
        }

        &:last-child {
            &::after {
                content: none;
            }
        }
    }
    &__box {
        display: flex;
        align-items: center;
    }


    &__description {
        margin-top: rem(70, 16);
    }

    &__text {
        position: relative;
        font-size: rem(25, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;
    }

    &__time {
        position: relative;
        font-size: rem(30, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;
        text-transform: uppercase;
        color: #9151d4;
    }

    &__icon,
    &__img {
        width: rem(35, 16);
        height: rem(35, 16);
        fill: #9151d4;
        margin-right: rem(10, 16);
    }

    &__icon {
        &--time {
            width: rem(25, 16);
            height: rem(25, 16);
        }
    }
}

</style>
