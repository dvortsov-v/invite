<script setup lang="ts">

</script>

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
    padding-bottom: 100px;

    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5vh;
    }
}
</style>
