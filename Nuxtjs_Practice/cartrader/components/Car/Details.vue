<template>
    <div>

        <!-- Car Detail Page -->

            <CarDetailHero :car="car"/>

            <CarDetailAttributes :features="car.features"/>
            
            <CarDetailDescription :description="car.description"/>

            <CarDetailContact />



        <!-- Car Detail Page -->




    </div>
</template>

<script setup>
const props = defineProps(['car'])

</script>

<style scoped></style>