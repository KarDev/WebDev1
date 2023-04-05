import { ref } from 'vue'
import getPosts from './getPosts'

const getPost = (id) => {
    const post = ref([])
    const error = ref(null)
    // Async and await

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/' + id)
        console.log(data)
        if(!data.ok) {
          throw Error("No data available")
        }
        post.value = await data.json()
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { post, error, load}
}



// const getPost = (id) => {

//     const {posts, error, load} = getPosts()

//     return {posts, error, load}
// }
export default getPost