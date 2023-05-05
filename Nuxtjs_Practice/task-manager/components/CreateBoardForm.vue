<template>
    <div class="overlay" @click.self="emit('toggleForm')"></div>

    <div class="fixed top-1/2 left-1/2 my-0 mx-auto tns card" >
        <div class="flex-column justify-items-center m-auto p-auto bg-white rounded-md">
            <h1 class="text-2xl p-4">Create new board</h1>
            <div class="form-control">
                <input class="w-4/5	p-2 m-4 mt-0 border rounded-md" type="text" placeholder="Enter your board name">
            </div>
            <div class="form-control">
                <textarea class="w-4/5 p-2 m-4 mt-0 border rounded-md" rows="3"
                placeholder="Enter your board description"></textarea>
            </div>    
            <!-- <input class="w-4/5	px-2 m-2 mt-0 h-20 leading-3" type="text" placeholder="Enter your board description"> -->
            <div class="m-4">
                <NuxtLink class=" bg-gray-400 p-2 border cursor-pointer text-white rounded-md">Save Board</NuxtLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #00000070;
}
.tns {
    transform: translate(-50%,-50%);
}
.card{
    min-height: 19rem;
    width: 50%;
}
.card>div{
    min-height: 18rem;
}

.form-control{
    padding: 0 15px;
}
input,textarea,select{
    width: 100%;
    margin: auto 0;
    margin-bottom: 10px;
}
</style>
<script setup>
const emit = defineEmits(['toggleForm']);
const props = defineProps(['showForm']);
console.log("Inside comp",props.showForm)
</script>