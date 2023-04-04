<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ad voluptas vitae quisquam deleniti doloremque eos voluptatum possimus. Soluta assumenda, officiis rem quam quasi et cum odit ea distinctio! Amet.</p> -->
            

            <slot>Default Content</slot>
            <div class="actions">
                <slot name="links"></slot> 
            </div>
            <div class="actions">
                <slot name="links"></slot> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            // Emit to the parent 
            this.$emit('close')
        }
    }
}
</script>
<!--  If <style scoped> is used then all the inherited slots will be having the css of Parent not the current modal -->

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: rgb(207, 220, 146);
        border-radius: 10px;
    }
    .backdrop {
        top:0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal p {
        font-style: normal;
    }
    .modal .actions {
        text-align: center;
        margin:30px 0 10px 0;
        
    }
    .modal .actions a {
        color:#333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }
    
    .modal.sale .actions {
        color: white;
    } 
    .modal.sale .actions a {
        color: white;
    }
</style>