<template>
  <div class="home">

    <h1>Home</h1> 
    <div v-if="error"> {{error}}</div>
    <PostList :posts="posts" v-if="showPosts"/>
    <button @click="showPosts = !showPosts">Toggle Post</button>
    <button @click="posts.pop()">Delete last post</button>
    <hr>
    
    <p ref='p'>My name is {{ name }} and my age is {{ age}} </p>
    <button @click="handleClick">Click me!</button>
    <button @click="++age">Increment age</button>
    <input type="text" v-model="name">
    
    <hr>

    <h2>Refs</h2>
    <p> {{ninjaOne.name}} - {{ninjaOne.age}} </p>
    <button @click="updateNinjaOne">Update ninja one</button>
    
    <h2>Reactive</h2>
    <p> {{ninjaTwo.name}} - {{ninjaTwo.age}} </p>
    <button @click="updateNinjaTwo">Update ninja one</button>

    <hr>

    <h2>Computed</h2>
    <p> {{cname}} </p>
    <input type="text" v-model="search">
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleWClick">Stop Watching</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue';
import getPosts from '../composibles/getPosts'
export default {
  name: "HomeView",
  components : {PostList},
  setup() {
    
    console.log("setup");


    const showPosts = ref(true)
    // Use of props...

    // const posts = ref([])
    // const error = ref(null)
    // // Async and await

    // const load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:3000/posts')
    //     console.log(data)
    //     if(!data.ok) {
    //       throw Error("No data available")
    //     }
    //     posts.value = await data.json()
    //   }
    //   catch(err) {
    //     error.value = err.message
    //     console.log(error.value)
    //   }
    // }
    const {posts, error, load} = getPosts()
    load()


    // Computed
    const cname = computed(() => {
      return 'shawn'
    })

    const search = ref('')

    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    //  Watch & watch effect
    const stopWatch = watch(search, () => {
      console.log('Watch function run')
    })

    const stopWatchEffect = watchEffect(() => {
      console.log("Watcheffect func run")
    })
    const stopWatchEffect2 =  watchEffect(() => {
      console.log("Watcheffect func2 run" + search.value)
    })

    const handleWClick = () => {
      stopWatch()
      stopWatchEffect()
      stopWatchEffect2()
    }


    // Reactive vs ref

    const ninjaOne = ref({name:'mario', age:30})
    const ninjaTwo = reactive({name:'luigi', age: 35})


    // Reactive don't work with primitive values
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40
    }




    const p = ref(null)

    const name = ref("mario");
    const age = ref(30);


    const handleClick = () => {
      // console.log('You clicked me')
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = "Hey guys..."
      name.value = "Luigi"
      age.value = 42
    } 
    return { name, age, handleClick , p, ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo, cname, names, search, matchingNames, handleWClick, posts, showPosts, error};
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
