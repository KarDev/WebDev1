<template>
    <div>
        <NavBar @show-form-var="handleForm"  />

        <div>
            <h1 class="mx-8 mt-8 text-2xl font-sans">Active Boards</h1>
            <Boards :boards="boards" />
        </div>
        <div v-show="showForm" class="z-10">
            <CreateBoardForm :showForm="showForm" @toggle-form="handleForm" @add-board="addBoardItem($event)"/>
        </div>
    </div>
</template>

<script setup>


const showForm = ref(false);

const handleForm = () => {
    showForm.value = !showForm.value;
    // console.log(showForm.value)
};

// console.log(showForm.value)

let countBoardId = 7;
const boards = ref([
    {
        "id": 1,
        "title": "Project Title",
        "description": " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        "id": 2,
        "title": "Project Title",
        "description": " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",


    },
    {
        "id": 3,
        "title": "Project Title",
        "description": " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",


    },
    {
        "id": 4,
        "title": "Project Title",
        "description": " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",

    },
    {
        "id": 5,
        "title": "Project Title",
        "description": " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",

    },
    {
        "id": 6,
        "title": "Project Title",
        "description": " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",

    }
])

const addBoardItem = (data) => {
    const {name,desc} = data;
    boards.value.push({"id" : countBoardId++, "title" : name, "description" : desc})
    // console.log(boards.value)
}
</script>
<style scoped></style>