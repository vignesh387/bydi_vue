<script setup>
  defineProps({
    text:{
        type: String,
        required: true
    },
    width:{
        type: String
    },
    btnType: String
  })
  const emit = defineEmits(['handleClick']);
</script>
<template>
    <button 
      :class="[width ?? ' w-full', ' bg-blue-900 text-white py-2 rounded-xl']"
      @click="$emit('handleClick')"
      :type="btnType || 'button'"
      >
      {{ text }}
    </button>
</template>
<style scoped></style>