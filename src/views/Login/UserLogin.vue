<script setup>
import Textfield from '@/components/ui/CustomTextfield.vue';
import Button from '@/components/ui/Button.vue';
import Image from '@/components/ui/Image.vue';
import { ImageUrl } from '@/assets/images/ImageUrl'
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Api from '@/api/api';
import { LoginDetailsApi } from '@/utils/api-details';
import { ApiMethods } from '@/types/common.types';
import Spinner from '@/components/ui/Spinner.vue';
import { useProfileStore } from '@/store/profile';
import { useRouter, useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';
import { DATA_FETCH_NOT_SUCCESSFULL } from '@/utils/constants';

const loading = ref(false);

const profileStore = useProfileStore();
const router = useRouter();
const route = useRoute();

const { handleSubmit } = useForm({
  validationSchema: yup.object().shape({
    mobNo: yup.string().test('len', 'Mobile no should start with 05', (val) => val.startsWith('05')).required('Mobile no required'),
    password: yup.string().required('password is required').min(8, 'password should contains atleast 8 characters')
  })
});

const onSubmit =
  handleSubmit(async (values) => {
    try {
      loading.value = true;
      const response = await Api({
        url: LoginDetailsApi.uri,
        securedHeader: false,
        method: ApiMethods.POST,
        data: {
          username: values.mobNo,
          password: values.password,
        }
      })
      loading.value = false;
      profileStore.setProfileData({
        name: response.name ?? null,
        email: response.email ?? null,
        mobNo: response.userName ?? null,
        accessToken: response.accessToken ?? null,
        refreshToken: response.refreshToken ?? null,
        profilePic: response.profilePicUri ?? null
      });
      router.replace(route.query.redirectTo || '/payment-types')
    } catch {
      loading.value = false;
      toast.error(DATA_FETCH_NOT_SUCCESSFULL)
    }
  })


</script>
<template>
  <main class=" h-screen flex justify-center items-center">
    <form class=" max-sm:mx-4 sm:w-[500px] p-5 rounded-3xl border-[1.5px] border-[#e4e4e4]" @submit.prevent="onSubmit">
      <h1 class=" text-2xl font-medium text-center my-6">Login</h1>
      <div class=" flex justify-center mb-7">
        <Image :url="ImageUrl.BydiLogoUrl" width=" w-[250px]" alt="bydi-logo" />
      </div>

      <div class=" flex flex-col gap-4">
        <Textfield id="mobile-no" label="Mobile No" placeholder="Enter username" name="mobNo" input-type="tel" />
        <Textfield id="password" label="Password" placeholder="Enter password" input-type="password" name="password" />
        <Button text="Login" width="w-full" btn-type="submit" />
      </div>
      <Spinner v-show="loading" />
    </form>

  </main>
</template>
<style scoped></style>