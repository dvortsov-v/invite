<template>
    <div class="invite-section">
        <slot name="background"></slot>
        <Container class="invite-section__container">
            <SectionTitle v-if="$slots.title" class="invite-section__title">
                <slot name="title"></slot>
            </SectionTitle>
            <slot></slot>
        </Container>
    </div>
</template>

<style scoped lang="scss">
.invite-section {
    position: relative;
    color: #292929;
    padding-bottom: rem(100, 16);

    @media (max-width: 1024px) {
        padding-bottom: rem(35, 16);
    }
    @media (max-width: 768px) {
        padding-bottom: rem(50, 16);
    }
    @media (max-width: 640px) {
        padding-bottom: rem(15, 16);
    }

    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: rem(54, 16);
    }
}
</style>
