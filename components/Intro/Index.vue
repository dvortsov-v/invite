<script setup lang="ts">

</script>

<template>
<div class="invite-intro">
    <img src="/picture/star.png" alt="звезда" class="invite-intro__star" />
    <Container class="invite-intro__container">
        <div class="invite-intro__wrapper">
            <div class="invite-intro__names">
                <span class="invite-intro__name invite-intro__name--man">Борис</span>
                <span class="invite-intro__and">&</span>
                <span class="invite-intro__name invite-intro__name--woman">Анна</span>
            </div>
            <h3 class="invite-intro__subtitle">
                08.08.2025
            </h3>
            <SectionTitle class="invite-intro__title">
                Дорогие гости
            </SectionTitle>
            <div class="invite-intro__description">
                <p class="invite-intro__text">
                    Приглашаем Вас разделить с нами радость особенного для нас события и стать частью  нашей семейной истории!
                </p>
                <p class="invite-intro__text">
                    Ждём Вас
                </p>
            </div>
        </div>
    </Container>
</div>
</template>

<style scoped lang="scss">
@keyframes fly {
    0% {
        top: 0;
        right: 0;
    }
    100% {
        top: 60%;
        right: 100%;
    }
}
.invite-intro {
    position: relative;
    background: #fff url('public/picture/bg-intro.png') center center no-repeat;
    background-size: 100% 100%;
    color: #292929;

    &__container {
        height: 100%;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-top: rem(270, 16);
        padding-bottom: rem(54, 16);
    }

    &__star {
        position: absolute;
        right: 0;
        top: 0;
        animation: fly 1.8s linear forwards;
    }

    &__names {
        display: flex;
        justify-content: center;
        position: relative;
    }

    &__name {
        font-size: rem(100, 16);
        font-family: 'AgoniaLyubvi';
        display: inline-block;

        &--man {
            margin-top: -rem(50, 16);
        }
        &--woman {
            margin-top: rem(50, 16);
        }
    }
    &__and {
        //color: #d0bb71;
        font-size: rem(100, 16);
        font-family: 'AgoniaLyubvi';
    }

    &__subtitle {
        font-size: rem(50, 16);
        max-width: rem(945, 16);
        font-family: 'PlayfairDisplay';
        font-style: italic;
        text-align: center;
        //color: #d0bb71;
        margin-top: rem(70, 16);
    }

    &__icon {
        width: rem(300, 16);
        height: rem(82, 16);
        margin-top: auto;
    }

    &__title {
        margin-top: rem(120, 16);
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
}
</style>
