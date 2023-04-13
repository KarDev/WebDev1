<template>
    <div>
        <div class="w-full">
            <CarCard v-for="car in cars" :key="car.id" :car="car"/>
        </div>
    </div>
</template>

<script setup>
const {cars} = useCars() 
</script>

<style scoped></style>