<template>
    <div class="flex flex-wrap items-center">
        <Board v-for="board in boards" :board="board" :key="board.id"/>
    </div>
</template>
<script setup>
const props = defineProps(['boards']);


</script>