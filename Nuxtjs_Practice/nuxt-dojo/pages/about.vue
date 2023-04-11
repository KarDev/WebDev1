<template>
   
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis reiciendis voluptatum eos fuga quis similique nulla cumque perferendis inventore!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum odit iste molestiae natus nemo nostrum voluptatibus nam repellat facere?</p>
    <div>H - {{ data }}</div>
    </div>
  </template>
  
  <script setup>
    // const {data} = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: {age: 30}
    // })
    const {data} = await useFetch('/api/currency/INR')

    // console.log(data)
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