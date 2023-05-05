<template>
    <div class="overlay" @click.self="emit('toggleForm')"></div>

    <div class="fixed top-1/2 left-1/2 my-0 mx-auto tns" style="width:50%;">
        <div class="flex-column justify-items-center m-auto p-auto bg-white rounded-md" style="min-height: 11rem;">
            <h1 class="text-2xl p-4">Create new list</h1>
            <div class="form-control">
                <input v-model="listName" class="w-4/5	p-2 m-4 mt-0 border rounded-md" type="text" placeholder="Enter your list name">
            </div>

            <div class="m-4">
                <NuxtLink class=" bg-gray-400 p-2 border cursor-pointer text-white rounded-md" @click="addList">Save List</NuxtLink>
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
    transform: translate(-50%, -50%);
}

/* {min-height: 19rem;} */
.form-control {
    padding: 0 15px;
}

input,
textarea,
select {
    width: 100%;
    margin: auto 0;
    margin-bottom: 10px;
}
</style>
<script setup>
const emit = defineEmits(['toggleForm','addList']);
const props = defineProps(['showForm']);
// console.log("Inside comp", props.showForm)
const listName = ref('');

const addList = () => {
    emit('addList',listName.value);
    emit('toggleForm');
    listName.value = '';
}

</script>