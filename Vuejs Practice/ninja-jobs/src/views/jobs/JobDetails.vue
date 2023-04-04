<template>
  <h1>Job Details Page</h1>
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>   {{job.details}}    </p>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
  <p>The Job ID is {{id1}} and prop value is {{ id }}</p>

</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            id1: this.$route.params.id,
            job: null

            // Another way except v-if else div
            // job: {}        

        }
    },
    mounted() {
       fetch('http://localhost:3000/jobs/' + this.id) // It is async and returns a promise
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err))
    }
}
</script>

<style>

</style>