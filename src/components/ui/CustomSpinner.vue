<template>
    <div class=" fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.25)] flex flex-col justify-center items-center">
        <div class=" bg-white w-[125px] h-[120px] flex flex-col justify-center items-center rounded-2xl">
            <VueSpinner size="32" color="#1c398e" />
            <p class=" text-blue-900 mt-2">Loading ...</p>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { VueSpinner } from 'vue3-spinners';


</script>

<style></style>