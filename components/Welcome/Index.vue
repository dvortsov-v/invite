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
        <Calendar class="invite-welcome__calendar"/>
    </Section>
</template>

<style scoped lang="scss">
.invite-welcome {
    &__background {
        width: rem(1090, 16);
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

    &__description {
        margin-top: rem(70, 16);
    }

    &__text {
        position: relative;
        font-size: rem(25, 16);
        font-family: 'PlayfairDisplay';
        max-width: rem(700, 16);
        text-align: center;

        &:nth-child(n + 2) {
            margin-top: rem(40, 16);
        }
    }

    &__constellation {
        position: absolute;
        width: rem(300, 16);
        height: rem(340, 16);

        &--1 {
            left: 23%;
            top: 54%;
            transform: rotate(45deg);

            @media (max-width: 1024px) {
                left: 13%;
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        &--2 {
            right: 16%;
            top: 4%;

            @media (max-width: 1024px) {
                right: 6%;
            }
            @media (max-width: 768px) {
                width: rem(200, 16);
                height: rem(226, 16);
            }
            @media (max-width: 414px) {
                display: none;
            }
        }
    }

    &__calendar {
        margin-top: rem(70, 16);
    }
}

</style>
