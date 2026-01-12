<template>
    <div className=" p-4 text-secondary border-[1.5px] border-[#e4e4e4] rounded-2xl">
        <div className=" flex flex-row justify-between items-center flex-wrap gap-x-3 gap-y-1.5">
            <p className=" text-[15px] font-medium">{{ title }}</p>
            <p className=" text-mediumGray text-[14px] font-medium">
                {{ createdOn }}
            </p>
        </div>
        <p className=" text-[14px] mt-3">{{ body }}</p>

        <div v-show="isRead"
            className=" bg-primary w-[50px] h-6 rounded-1 text-white font-medium text-[13px] ml-auto flex justify-center items-center">
            New
        </div>
    </div>
</template>

<script setup lang='ts'>
defineProps({
    title: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})
</script>

<style></style>