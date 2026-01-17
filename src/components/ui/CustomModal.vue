<script setup>

defineProps({
    open: {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <Teleport to="body">
        <div v-if="open" class=" fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.25)]">
            <div class=" w-[250px] h-[250px] bg-white flex flex-col justify-center items-center rounded-3xl">
                <h1 class=" text-2xl">Modal</h1>
            </div>
        </div>
    </Teleport>
</template>

<style></style>