<script setup>
  defineProps({
    url:{
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    width:{
        type: String,
        required: true
    }
  })
</script>
<template>
    <img :src="url" :alt :class="[width]">
</template>
<style scoped></style>