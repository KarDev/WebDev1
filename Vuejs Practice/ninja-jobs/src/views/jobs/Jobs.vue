<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{name:'jobDetails', params: {id: job.id}}">
        <h2> {{job.title}} </h2> 
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
          jobs: []

            // jobs: [
            //     {title: 'Ninja UX  Designer', id: 1, details: 'lorem'},
            //     {title: 'Ninja Web  Developer', id: 2, details: 'lorem'},
            //     {title: 'Ninja Vue  Developer', id: 3, details: 'lorem'}
            // ]
        }
    },
    mounted() {
      fetch('http://localhost:3000/jobs') // It is async and returns a promise
      .then(res => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err))
    }
}
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color:#444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a {
    text-decoration: none;
  }
</style>