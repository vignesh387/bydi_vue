<script setup lang='ts'>
import { ImageUrl } from '@/assets/images/ImageUrl';
import Image from '@/components/ui/CustomImage.vue';
import Textfield from '@/components/ui/CustomTextfield.vue';
import Button from '@/components/ui/CustomButton.vue';
import { useForm } from 'vee-validate';
import { SignUpSchema } from './schema';

const { handleSubmit } = useForm({
    validationSchema: SignUpSchema
})

const onSubmit = handleSubmit((values) => {
    console.log("values", values)
})


</script>


<template>
    <main class=" h-screen flex flex-col justify-center items-center bg-white gap-5">
        <form class=" max-sm:mx-4 sm:w-[500px] p-5 rounded-3xl border-[1.5px] border-[#e4e4e4]"
            @submit.prevent="onSubmit">
            <h1 class=" text-center text-2xl my-6">Register</h1>
            <div class=" flex justify-center mb-7">
                <Image :url="ImageUrl.BydiLogoUrl" width=" w-[250px]" alt="bydi-logo" />
            </div>
            <div class=" flex flex-col gap-4">
                <Textfield id="name" input-type="text" placeholder="Enter name" label="Full Name" name="fullName" />
                <Textfield id="mob-no" input-type="tel" placeholder="Enter mobile no" label="Mobile No"
                    name="mobileNo" />
                <Textfield id="password" input-type="password" placeholder="Enter password" label="Password"
                    name="password" />
                <Textfield id="password" input-type="password" placeholder="Enter confirm password"
                    label="Confirm Password" name="confirmPassword" />
                <Button text="Register" width="w-full" btn-type="submit" />
            </div>
        </form>
    </main>
</template>



<style></style>