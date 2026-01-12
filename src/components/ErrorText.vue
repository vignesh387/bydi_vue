<template>
       <p class=" text-center text-red-500 mt-1.5">{{ text }}</p> 
</template>
    
<script setup lang='ts'>
    defineProps({
        text:{
            type: String,
            required: true
        }
    })
</script>