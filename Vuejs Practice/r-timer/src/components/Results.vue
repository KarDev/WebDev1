<template>
  <div class="block">
       <p class="rank sc"> Your reflex time is {{ score }}. </p>
        <p class="rank">{{rank}}</p>
  </div>
  
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 250){
            this.rank = "Ninja Fingers"
        } else if(this.score < 400) {
            this.rank = "Rapid Reflexes"
        } else {
            this.rank = "Snail pace..."
        }
    }
}
</script>

<style scoped>
    .block {
        width:400px;
        border-radius: 20px;
        background: rgb(214, 210, 95);
        color:white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
    .sc {
        color:rgb(213, 121, 0);
    }
</style>