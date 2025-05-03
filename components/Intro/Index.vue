<script setup lang="ts">

</script>

<template>
<div class="invite-intro">
    <img src="/picture/star.png" alt="звезда" class="invite-intro__star" />
    <Container>
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

    @media (max-width: 414px) {
        background-size: 150% 100%;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: rem(270, 16);

        @media (max-width: 1024px) {
            padding-top: rem(200, 16);
        }

        @media (max-width: 640px) {
            padding-top: rem(120, 16);
        }
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

        @media (max-width: 1024px) {
            flex-direction: column;
            width: 100%;
        }
    }

    &__name {
        font-size: rem(100, 16);
        font-family: 'AgoniaLyubvi';
        display: inline-block;

        @media (max-width: 640px) {
            font-size: rem(80, 16);
        }
        @media (max-width: 414px) {
            font-size: rem(65, 16);
        }

        &--man {
            margin-top: rem(-50, 16);

            @media (max-width: 1024px) {
                margin-top: 0;
                align-self: flex-start;
            }
        }
        &--woman {
            margin-top: rem(50, 16);

            @media (max-width: 1024px) {
                align-self: flex-end;
            }
        }
    }
    &__and {
        font-size: rem(100, 16);
        font-family: 'AgoniaLyubvi';

        @media (max-width: 1024px) {
            margin-top: rem(50, 16);
            text-align: center;
        }
        @media (max-width: 640px) {
            font-size: rem(80, 16);
        }
        @media (max-width: 414px) {
            font-size: rem(65, 16);
        }
    }

    &__subtitle {
        font-size: rem(50, 16);
        max-width: rem(945, 16);
        font-family: 'PlayfairDisplay';
        font-style: italic;
        text-align: center;
        margin-top: rem(70, 16);

        @media (max-width: 414px) {
            margin-top: rem(40, 16);
            font-size: rem(40, 16);
        }
    }

    &__icon {
        width: rem(300, 16);
        height: rem(82, 16);
        margin-top: auto;
    }

    &__title {
        margin-top: rem(120, 16);

        @media (max-width: 414px) {
            margin-top: rem(80, 16);
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

        &:nth-child(n + 2) {
            margin-top: rem(40, 16);
        }
    }
}
</style>
