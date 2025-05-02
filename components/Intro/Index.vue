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
    height: 100vh;
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
        padding-top: 25vh;
        padding-bottom: 5vh;
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
        font-size: 100px;
        font-family: 'AgoniaLyubvi';
        display: inline-block;

        &--man {
            margin-top: -50px;
        }
        &--woman {
            margin-top: 50px;
        }
    }
    &__and {
        //color: #d0bb71;
        font-size: 100px;
        font-family: 'AgoniaLyubvi';
    }

    &__subtitle {
        font-size: 50px;
        max-width: 945px;
        font-family: 'PlayfairDisplay';
        font-style: italic;
        text-align: center;
        //color: #d0bb71;
        margin-top: 70px;
    }

    &__icon {
        width: 300px;
        height: 82px;
        margin-top: auto;
    }
}
</style>
