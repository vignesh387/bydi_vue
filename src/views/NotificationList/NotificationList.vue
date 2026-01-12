<template>
    <div className=" lg:w-[860px] mx-4 lg:mx-auto my-4 gap-3 flex flex-col">
        <NotificationListItem v-for="item in notificationList" :title="item.title" :body="item.body"
            :created-on="item.createdOn" :is-read="item.isRead" />
    </div>
    <Spinner v-show="isLoading" />
</template>

<script setup lang='ts'>
import Api from '@/api/api';
import { NotificationListApi } from '@/utils/api-details';
import { onMounted, ref, watch } from 'vue';
import NotificationListItem from './NotificationListItem.vue';
import { toast } from 'vue3-toastify';
import Spinner from '@/components/ui/Spinner.vue';
import { DATA_FETCH_NOT_SUCCESSFULL } from '@/utils/constants';

const notificationList = ref([]);
const isLoading = ref(false);

async function getNotifications() {
    try {
        isLoading.value = true;
        const response = await Api({
            url: NotificationListApi.uri,
            method: NotificationListApi.method,
            securedHeader: NotificationListApi.securedHeader
        })
        isLoading.value = false
        notificationList.value = response.data;

    } catch (error) {
        isLoading.value = false
        toast.error(DATA_FETCH_NOT_SUCCESSFULL)
    }
}

onMounted(() => {
    getNotifications()
})
</script>

<style></style>