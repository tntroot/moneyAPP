<script>
export default {
    props:["income","expense"]
}
</script>
<template>
    <div class="flex justify-evenly text-2xl ">
        <div class=" text-green-400">
        <p class="mb-6">INCOME</p>
        <p>{{ income }}</p>
        </div>
        <div class=" text-red-400">
        <p class="mb-6">EXPENSE</p>
        <p>{{ expense }}</p>
        </div>
    </div>  
</template>

<style>
    
</style>