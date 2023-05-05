<template>
    <div>
        <NavBarList @toggle-list="toggleForm"/>
        <CreateListForm v-if="showListForm" @toggle-form="toggleForm" @add-list="addList($event)"/>
        <ListCards :lists="lists" v-model="lists" @add-list-item="addListItem($event)"/>
    </div>
</template>

<script setup>
// import draggable from "vuedraggable";
let counterId = 12;
let countListId = 7;

let lists = ref([
    {
        id: 1,
        listName : "TO DO",
        Ilist: [
            { description: "Build social media campaign1", id: 1 },
            { description: "Build social media campaign2", id: 2 },
            { description: "Build social media campaign3", id: 3 },
            { description: "Build social media campaign4", id: 4 }
        ]
    },
    {
        id: 2,
        listName : "TO DO",
        Ilist: [
            { description: "Build social media campaign5", id: 5 },
            { description: "Build social media campaign6", id: 6 },
            { description: "Build social media campaign7", id: 7 },
        ]
    },
    {
        id: 3,
        listName : "TO DO",
        Ilist: [
            { description: "Build social media campaign8", id: 8 },
            { description: "Build social media campaign9", id: 9 },
            { description: "Build social media campaign10", id: 10 },
            { description: "Build social media campaign11", id: 11 }
        ]
    },
    {
        id: 4,
        listName : "TO DO",
        Ilist: [
            { description: "Build social media campaign1", id: 1 },
            { description: "Build social media campaign2", id: 2 },
            { description: "Build social media campaign3", id: 3 },
            { description: "Build social media campaign4", id: 4 }
        ]
    },
    {
        id: 5,
        listName : "TO DO",
        Ilist: [
            { description: "Build social media campaign5", id: 5 },
            { description: "Build social media campaign6", id: 6 },
            { description: "Build social media campaign7", id: 7 },
        ]
    }
])

const addListItem = (data) => {
    // console.log('board emit recieved')
    const {itemDesc,listId} = data;
    if(itemDesc)
        lists.value.find((list) => list.id === listId).Ilist.push({description: itemDesc, id : counterId++})
}

const showListForm = ref(false);

const toggleForm = () => {
    showListForm.value = !showListForm.value;
    console.log(showListForm.value)
};

const addList = (data) => {
    const lName = data;
    if(lName)
        lists.value.push({id : countListId++,listName: lName, Ilist: []})
}



</script>

<style scoped></style>