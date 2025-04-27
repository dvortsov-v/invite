<script setup lang="ts">
const list = [
    {
        svg: 'glass',
        time: '15:00',
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
<div class="invite-programm">
    <Container class="invite-programm__container">
        <h3 class="invite-programm__title">
            Программа дня
        </h3>
        <ul class="invite-programm__list">
            <li v-for="item in list" class="invite-programm__item">
                <div class="invite-programm__box">
                    <svg-icon v-if="item.svg" :name="item.svg" class="invite-programm__icon"/>
                    <img v-else-if="item.img" :src="item.img" alt="" class="invite-programm__img">
                    <div class="invite-programm__time">{{item.time}}</div>
                </div>
                <div class="invite-programm__text">{{item.text}}</div>
            </li>
        </ul>
    </Container>
</div>
</template>

<style scoped lang="scss">
.invite-programm {
    position: relative;
    color: #292929;
    padding-bottom: 100px;

    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5vh;
    }

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
}

</style>
