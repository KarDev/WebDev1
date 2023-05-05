<template>
    <div class="bg-slate-300 h-[90vh] mt-14 mx-8 rounded-md">
        <div class="bg-stone-400 rounded-t-md">
            <h1 class="text-2xl text-center text-white p-2">{{ list.listName }} {{ list.id }}</h1>
        </div>

        <draggable v-model="props.list.Ilist" group="my-people" @start="drag = true" @end="drag = false" item-key="id" >
            <template #item="{ element : listItem }">
                <div class="bg-white border-b-2 border-black p-2 rounded-sm">
                    <h3>{{ listItem.description }}</h3>
                </div>
            </template>
        </draggable>

        <div v-if="showForm" class="bg-white pt-1 rounded-md">
            <textarea v-model="itemDesc" class="p-2 border rounded-md w-full" rows="3"
                placeholder="Enter your item description"></textarea>
                <div class="text-center p-1">
                    <button class="bg-white p-1 mx-2 border cursor-pointer text-gray-400 rounded-md hover:bg-gray-200 hover:text-white" @click="toggleForm(true)">Save</button>
                    <button class="bg-white p-1 mx-2 border cursor-pointer text-gray-400 rounded-md hover:bg-gray-200 hover:text-white" @click="toggleForm(null)">Cancel</button>
                </div>
            
        </div>
        <div v-else class="bg-white p-2 rounded-md" @click="toggleForm(null)">
            <h3 class="text-center"> + New Item</h3>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['list']);

const emit = defineEmits(['addItem']);

let showForm = ref(false);
const itemDesc = ref("");

const toggleForm = (bool) => {
    if(bool) {
        emit('addItem',itemDesc.value);
    }
    showForm.value = !showForm.value;
    itemDesc.value = '';
    // console.log(showForm)
}

// console.log(props.list, toRaw(props.list))

</script>

<style scoped></style>