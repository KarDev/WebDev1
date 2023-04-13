<template>
    <div>
        <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[12rem]" >
            <img class="absolute w-7 right-5 top-2 z-20" :src="favored ? heartFilled : heartOutline" @click="favored = !favored">
            <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
                <NuxtImg :src="car.url" alt="" class="w-[15rem] h-full" />
                <div class="p-4 flex flex-col">
                    <div>
                        <h1 class="text-2xl text-blue-700">{{car.name}}</h1>
                        <p class="text-gray-700 text-sm">{{ car.description }}</p>
                    </div>
                    <h1 class="mt-auto text-xl">${{ car.price }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import heartFilled from "@/assets/heartFilled.png"
import heartOutline from "@/assets/heartOutline.png"


const props = defineProps(['car'])

// Setting a unique state for each card aby adding props

const favored = useState(`favored-${props.car.id}`, ()=> {
    return false
})

</script>

<style scoped></style>