<script setup lang="ts">
</script>

<template>
    <Section class="invite-dresscode">
        <template #background>
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-dresscode__background invite-dresscode__background--1">
            <img src="/picture/background-welcome.jpg" alt="bg" class="invite-dresscode__background invite-dresscode__background--2">
        </template>
        <template #title>
            Дресс-код
        </template>
        <div class="invite-dresscode__description">
            <p class="invite-dresscode__text">
                Определенного дресс-кода на нашем торжестве нет, но мы будем благодарны, если девушки выберут вечерние наряды, а мужчины - классические костюмы
            </p>
        </div>
    </Section>
</template>

<style scoped lang="scss">
.invite-dresscode {
    &__background {
        width: 1090px;
        position: absolute;
        top: -100%;
        z-index: -1;
        opacity: 0.5;

        &--1 {
            left: 0;
            transform: translateX(-50%) rotate(-90deg);
        }
        &--2 {
            right: 0;
            transform: translateX(50%) rotate(90deg);
        }
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
}

</style>
