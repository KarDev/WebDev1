<template>
    <div>
        <NavBar @show-form-var="handleForm" />

        <div>
            <h1 class="mx-8 mt-8 text-2xl font-sans">Active Boards</h1>
            <Boards />
        </div>
        <div v-show="showForm" class="z-10">
            <CreateBoardForm :showForm="showForm" @toggle-form="handleForm" />
        </div>
    </div>
</template>

<script setup>


const showForm = ref(false);

const handleForm = () => {
    showForm.value = !showForm.value;
    console.log(showForm.value)
};

console.log(showForm.value)

</script>
<style scoped></style>