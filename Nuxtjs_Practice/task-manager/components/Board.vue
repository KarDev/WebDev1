<template>
    <div class="w-1/4 min-w-min">
        <div class="card-wrapper bg-gray-300 border rounded-md shadow-sm">
            <div class="p-5">
            <div class="flex justify-between">
                <h5 class="text-xl/10">{{ board.title }} {{ board.id }}</h5>
                <span>...</span>
            </div>

            <p class="mt-5">{{ board.description }}</p>

        </div>
        <div class="flex border-t">
            <NuxtLink class="m-3 px-3 py-2 bg-gray-400 rounded-md cursor-pointer text-white hover:bg-gray-500 hover:text-white" to="/boards/1">View</NuxtLink>
            <NuxtLink class="m-3 px-3 py-2 bg-red-500 rounded-md cursor-pointer text-white hover:bg-red-600 hover:text-white">Archive</NuxtLink>
        </div>
        </div>
    </div>
</template>
<style>
.card-wrapper{
    margin-left: 10px;
    margin-bottom: 20px;
}
</style>
<script setup>
const props = defineProps(['board']);

</script>