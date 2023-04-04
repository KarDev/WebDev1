<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  <!-- /* eslint-disable */ -->
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up now</a>
        <a href="#">More Info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p> 
    </Modal>
  </div>
  <Teleport v-if="showModalTwo" to=".modals">
    <Modal  @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">Sign Up now 2</a>
        <a href="#">More Info 2</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p> 
    </Modal>
  </Teleport>
  <p>Welcome to the world of Modals...</p>
  <button @click="toggleModal">Show Modal 1</button>
  <button @click.shift="toggleModal">Show Modal 1(shift)</button>
  <button @click.right="toggleModal">Show Modal 1(right)</button>
  <br>
  <button @click="toggleModalTwo">Show Modal 2</button>



</template>

<script>

import Modal from './components/Modal1.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: `My First Vue App`,
      header: 'Sign up for the Giveaway',
      text: "Grab your favorite product for half price.",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add(`active`)
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals  {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
  color: rgb(80, 156, 156);
}
/* a {
  margin: 10px;
  padding: 10px;
} */
</style>
