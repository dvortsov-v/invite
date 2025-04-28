<script setup lang="ts">
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
        margin-top: 70px;
    }
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &::after {
            content: '';
            display: block;
            width: 2px;
            background: #292929;
            height: 35px;
            margin-top: 5px;
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
        margin-top: 70px;
    }

    &__text {
        position: relative;
        font-size: 25px;
        font-family: 'PlayfairDisplay';
        max-width: 700px;
        text-align: center;
    }

    &__time {
        position: relative;
        font-size: 30px;
        font-family: 'PlayfairDisplay';
        max-width: 700px;
        text-align: center;
        text-transform: uppercase;
        color: #9151d4;
    }

    &__icon,
    &__img {
        width: 35px;
        height: 35px;
        fill: #9151d4;
        margin-right: 10px;
    }

    &__icon {
        &--time {
            width: 25px;
            height: 25px;
        }
    }
}

</style>
