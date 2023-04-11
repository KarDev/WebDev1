<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops...</p>
        <p class="mt-7 text-l">{{ error.message }}</p>
        <p class="mt-7 text-xl">Would you like to go back to the home page?</p>
        
        <!-- <NuxtLink to="/" class="font-bold">
            <p class="btn my-7"> Go Home </p>
        </NuxtLink> -->
        <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>

</style>