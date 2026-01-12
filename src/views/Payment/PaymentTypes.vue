<template>
    <div class=" h-screen flex flex-col justify-center items-center">
        <div class=" bg-white p-6 rounded-2xl border-2 border-[#e4e4e4] h-[125px] overflow-hidden">
            <h1>Payment Types</h1>
            <input ref="inputRef" type="text">
            <Button text="Show Modal" width=" w-[250px]" @handle-click="focusInput" />
            <Modal :open="showModal" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import Button from '@/components/ui/Button.vue';
import { useFetchPaymentDetails } from '@/composables/useFetchPaymentDetails';
import { onMounted, ref, watchEffect } from 'vue';
import Modal from '@/components/ui/Modal.vue';

const { loading, data } = useFetchPaymentDetails();
const showModal = ref(false)
const inputRef = ref(null);

function toggleModal() {
    showModal.value = !showModal.value
}

function focusInput() {
    inputRef.value?.focus()
}

watchEffect(() => {
    console.log("*** payment details", loading.value, data.value)
})

</script>

<style></style>