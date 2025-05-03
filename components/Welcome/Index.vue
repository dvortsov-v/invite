<script setup lang="ts">

</script>

<template>
    <Section class="invite-welcome">
        <template #background>
            <img src="/picture/background-welcome.png" alt="bg" class="invite-welcome__background invite-welcome__background--1">
            <img src="/picture/background-welcome.png" alt="bg" class="invite-welcome__background invite-welcome__background--2">
            <svg-icon name="constellation_1" class="invite-welcome__constellation invite-welcome__constellation--1"/>
            <svg-icon name="constellation_2" class="invite-welcome__constellation invite-welcome__constellation--2"/>
        </template>
<!--        <template #title>-->
<!--            Дорогие гости-->
<!--        </template>-->
<!--        <div class="invite-welcome__description">-->
<!--            <p class="invite-welcome__text">-->
<!--                Приглашаем Вас разделить с нами радость особенного для нас события и стать частью  нашей семейной истории!-->
<!--            </p>-->
<!--            <p class="invite-welcome__text">-->
<!--                Ждём Вас-->
<!--            </p>-->
<!--        </div>-->
        <Calendar class="invite-welcome__calendar"/>
    </Section>
</template>

<style scoped lang="scss">
.invite-welcome {
    &__background {
        width: 1090px;
        position: absolute;
        opacity: 0.4;

        &--1 {
            top: -37%;
            left: 0;
            transform: translateX(-50%) rotate(21deg);
        }
        &--2 {
            top: -47%;
            right: 0;
            transform: translateX(50%) rotate(31deg);
        }
    }

    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 12vh;
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

        &:nth-child(n + 2) {
            margin-top: 40px;
        }
    }

    &__constellation {
        position: absolute;
        width: 300px;
        height: 340px;

        &--1 {
            left: 23%;
            top: 54%;
            transform: rotate(45deg);
        }
        &--2 {
            right: 16%;
            top: 4%;
        }
    }

    &__calendar {
        margin-top: 70px;
    }
}

</style>
