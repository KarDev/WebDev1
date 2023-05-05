<template>
    <div>
        
        <draggable v-model="props.lists" group="people" @start="drag = true" @end="drag = false" item-key="id" class="flex" style="    flex-direction: row;
    flex-wrap: nowrap;">
            <template #item="{ element : list }">
                <div class="w-1/4 min-w-[25%]">
                    <ListCard :list="list" @add-item="addItemEm($event,list.id)" draggable="true" /> 
                    
                </div>
            </template>
        </draggable>
 
    </div>
</template>

<script setup>

const emit = defineEmits(['addListItem']);

const props = defineProps(['lists']);
// console.log(props.lists)

const addItemEm = (data,id) => {
    emit('addListItem',{itemDesc : data, listId : id});
    // console.log('cards emit sent')
}

</script>