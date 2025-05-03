<script setup lang="ts">

</script>

<template>
    <div class="calendar">
        <h4 class="calendar__title">Август</h4>
        <ul class="calendar__numbers">
            <li
                v-for="num in 31"
                :class="`calendar__item--${num}`"
                class="calendar__item"
            >
                <svg-icon v-if="num === 8" name="ring" class="calendar__icon"/>
                <span class="calendar__number">{{ num }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@keyframes rotating {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    25% {
        transform: translate(-50%, -50%) rotate(-10deg);
    }
    75% {
        transform: translate(-50%, -50%) rotate(10deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
}

.calendar {
    $self: &;
    &__title {
        font-family: 'AgoniaLyubvi';
        font-size: rem(40, 16);
        text-align: center;
    }

    &__numbers {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-gap: rem(10, 16);
        margin-top: rem(70, 16);
    }

    &__item {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &--1 {
            grid-column-start: 5;
        }
    }

    &__icon {
        position: absolute;
        top: 28%;
        left: 50%;
        width: rem(30, 16);
        height: rem(30, 16);
        transform: translate(-50%, -50%);
        animation: rotating 3s linear forwards infinite;
        opacity: 0.65;
        fill: #72489e;
    }

    &__number {
        position: relative;
        font-size: rem(20, 16);
        font-family: 'TrajanPro3';
        font-weight: 400;
        text-align: center;
    }
}
</style>
