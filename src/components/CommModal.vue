<template>

    <Teleport to="body">
        <div v-if="modelValue" class="commModal">
            <div class="modalBg" @click="close"></div>
            <div class="modalBox">
                <div class="modalTit flex alc justy_btw">
                    <div class="tit gb fs32 fwtbold">
                        <slot name="title">{{ title }}</slot>
                    </div>
                    <button class="closeBtn img" @click="close">
                        <img src="/img/sub/ic_modal_close.svg" alt="닫기버튼">
                    </button>
                </div>

                <!-- 모달 내용 (페이지마다 다른 부분) -->
                <slot />
            </div>
        </div>
    </Teleport>

</template>

<script setup>
import { watch, onUnmounted } from 'vue';

const props = defineProps({
    modelValue: { type: Boolean, default: false }, // v-model (열림 상태)
    title: { type: String, default: '' },
});
const emit = defineEmits(['update:modelValue']);

const close = () => emit('update:modelValue', false);

// ESC 로 닫기
const onKeydown = (e) => {
    if (e.key === 'Escape') close();
};

// 열려있는 동안 body 스크롤 잠금 + ESC 리스너 등록
watch(
    () => props.modelValue,
    (open) => {
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) document.addEventListener('keydown', onKeydown);
        else document.removeEventListener('keydown', onKeydown);
    },
);

onUnmounted(() => {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
});
</script>
