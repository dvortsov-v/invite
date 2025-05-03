<template>
    <h3 class="invite-title">
        <slot></slot>
    </h3>
</template>

<style scoped lang="scss">
.invite-title {
    position: relative;
    font-size: rem(50, 16);
    font-family: 'AgoniaLyubvi';

    @media (max-width: 640px) {
        font-size: rem(42, 16);
    }

    @media (max-width: 414px) {
        font-size: rem(40, 16);
    }
}
</style>
