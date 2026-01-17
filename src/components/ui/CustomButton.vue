<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100px'
  },
  btnType: {
    type: String,
    default: 'button'
  }
})

const emits = defineEmits(['handleClick'])

</script>

<template>

  <button
:class="[width ?? ' w-full', ' bg-blue-900 text-white py-2 rounded-xl']" :type="btnType"
    @click="emits('handleClick')">
    {{ text }}
  </button>

</template>

<style scoped></style>