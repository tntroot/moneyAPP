<script>
export default {
    props:["account","money"]
}
</script>
<template>
    <div class="bg-[#3C7FA5] w-[360px] h-screen px-10 py-24 text-center text-white font-bold text-2xl">
        <h1 >Expense Tracker</h1>
        <h2 class=" mt-24">{{ account }}</h2>
        <p class=" mt-14">YOUR BALANCE</p>
        <h1 class=" mt-4">{{ money }}</h1>
    </div>
</template>

<style>
    
</style>