<script setup>
import useFetchCar from '~/composables/useFetchCar';

const route = useRoute();
// const { cars } = useCars();

const {data:car}=await useFetchCar(route.params.id)

const { toTitleCase } = useUtilities();
useHead({
  title: toTitleCase(car.value.name),
});

// definePageMeta({
//   validate({ params }) {
//     const { cars } = useCars();
//     const car = cars.find((c) => c.id === parseInt(params.id));
//     if (!car) {
//       throw createError({
//         statusCode: 404,
//         message: `Car with ID of ${route.params.id} does not exist`,
//       });
//     }
//   },
// });

// const car = computed(() => {
//   return cars.find((c) => {
//     return c.id === parseInt(route.params.id);
//   });
// });

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>