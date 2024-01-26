<script>
export default {
    props:["deletkey"],
    data() {
        return {
            ss:false
        }
    },
    methods:{
        bgdele(){
            this.$emit("event",this.ss)
        },

        delet(){
            localStorage.removeItem(this.deletkey);

            this.$emit("newArr");

            this.$emit("event",this.ss); // 視窗清除
        }
    }
}
</script>
<template>
    <div class="p-10 px-20 bg-white font-bold rounded-xl relative">
      <p class="mb-3 mt-6 text-[#3C7FA5] text-3xl">Sure to Delete ?</p>

      <button type="button" class="block bg-[#A53C42] rounded-lg text-white py-2 px-6 mt-10 mx-auto" @click="delet">Delete</button>
      <span class=" absolute top-1 right-6 text-5xl text-[#3C7FA5] cursor-pointer hover:scale-105 active:scale-95" @click="bgdele">×</span>
    </div>
</template>

<style>
    
</style>