<template>
    <div>
        <header class="sticky top-0 flex justify-between items-center p-4 shadow-md w-full">
            <NuxtLink class="ml-4 text-slate-500 text-3xl font-sans cursor-pointer" to="/">Task Board <span class="text-indigo-900">: Project Title</span></NuxtLink>
            <div>
                <NuxtLink class="mr-5 p-2.5 bg-slate-400 cursor-pointer text-white" @click="emit('showArchive')">Archived Lists (0)</NuxtLink>
                <NuxtLink class="mr-5 p-2.5 bg-slate-400 cursor-pointer text-white" @click="emit('toggleList')">+ New List</NuxtLink>
            </div>
        </header>
    </div>
</template>

<script setup>

const emit = defineEmits(['showArchive','toggleList']);

</script>
