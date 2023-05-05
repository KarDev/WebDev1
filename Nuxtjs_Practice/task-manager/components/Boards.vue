<template>
    <div class="flex flex-wrap items-center">
        <Board v-for="board in boards" :key="board.id"/>
    </div>
</template>
<script setup>

const {boards} = useBoards() 

</script>