<script setup>
const props = defineProps({
    animated: {type: Boolean, default: false},
});

   const classes = computed(() => ({'invite-link--animated': props.animated}))
</script>
<template>
    <a v-bind="$attrs" target="_blank" :class="classes" class="invite-link"><slot></slot></a>
</template>

<style scoped lang="scss">
@keyframes glowing {
    0% {
        box-shadow: 0 0 5px #ad87d7;
    }
    50% {
        box-shadow: 0 0 20px #ad87d7;
    }
    100% {
        box-shadow: 0 0 5px #ad87d7;
    }
}
.invite-link {
    position: relative;
    margin: rem(40, 16) auto 0;
    min-height: rem(40, 16);
    min-width: rem(250, 16);
    background-image: linear-gradient(90deg, #aa82d4 50%, #e0c8f7);
    border-radius: rem(20, 16);
    padding: rem(15, 16);
    color: #fff;
    text-align: center;
    display: inline-block;
    font-style: italic;
    font-family: 'TrajanPro3';

    @media (max-width: 414px) {
        margin-top: rem(25, 16);
    }

    &--animated {
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            animation: glowing 1000ms infinite;
            border-radius: rem(20, 16);
            z-index: -1;
            box-shadow: 0 0 15px #ad87d7;
        }
    }
}
</style>
