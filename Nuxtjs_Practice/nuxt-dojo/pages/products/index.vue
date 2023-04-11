<template>
    
    <div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id">
          <!-- <NuxtLink :to="`/products/${p.id}`"> {{ p.title }}</NuxtLink> -->
          <ProductCard :product="p" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    definePageMeta({
        layout:'products'
    })

    //  Fetch the products from Fake store api

    const {data: products} = await useFetch('https://fakestoreapi.com/products')
    

    useHead({
      title: 'Cartella | Merch',
      meta: [
        { name: 'description', content: 'Cartella Merch'}
      ]
    })
  </script>
  
  <style scoped>
      h2 {
          margin-bottom: 20px;
          font-size: 36px;
      }
      p {
          margin: 20px 0;
      }
  </style>