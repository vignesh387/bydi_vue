<script setup>
import { watchEffect } from 'vue';
import ErrorText from '../ErrorText.vue';
import { useField } from 'vee-validate';

const props = defineProps({
    placeholder:{
        type: String
    },
    inputType: String,
    id:{
        required: true,
        type: String
    },
    label:{
        type: String
    },
    name: String
  })
  // const emit = defineEmits(['update:modelValue'])
  const {value, handleChange, errorMessage} = useField(()=> props.name);

  watchEffect(()=>{
    console.log("watch effect", errorMessage.value);
  })

</script>
<template>
    <div>
      <label :id class=" mb-1.25 block">{{ label }}</label>  
    <input 
      :type="inputType || 'text'" 
      class=" w-full px-2 py-2.5 border-[1.5px] border-[#e4e4e4] rounded-xl" 
      :placeholder
      @input="handleChange"
      :value
      />
      <ErrorText v-if="errorMessage" :text="errorMessage" />
    </div>
</template>