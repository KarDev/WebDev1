<template>
    <div v-if="car">
        <!-- <NavBar /> -->
        <CarDetails :car="car"/>
    </div>
</template>

<script setup>
const route = useRoute()

const {toTitleCase} = useUtilities()
const {cars} = useCars()
const car = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(route.params.id)
    })
})

if(!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exist.`
    })
}

useHead({
    title: `Cartrader | ${toTitleCase(route.params.name)}`
})

definePageMeta({
    layout:"custom"
})
</script>

<style scoped>

</style>