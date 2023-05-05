<template>
    <div>
        <header class="sticky top-0 flex justify-between items-center p-4 shadow-md">
            <NuxtLink class="ml-4 text-slate-500 text-3xl font-sans cursor-pointer" to="/">Task Board</NuxtLink>
            <div>
                <NuxtLink class="mr-5 p-2.5 bg-slate-400 cursor-pointer text-white" @click="emit('showFormVar')">+ New Board</NuxtLink>
            </div>
        </header>
    </div>
</template>

<script setup>

// const showForm = ref('true');

const emit = defineEmits(['showFormVar']);

</script>
