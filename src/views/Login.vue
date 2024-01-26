<script>
import { RouterLink, RouterView } from 'vue-router';
export default{
    components:{
        RouterLink
    },
    data() {
        return {
            passwordType:"password",
            passwordIcon:"fa-solid fa-eye",

            account:"",
            password:"",
            check:false
        }
    },
    methods:{
        changeType(){
            if(this.passwordType==="password"){
                this.passwordType="text";
                this.passwordIcon="fa-solid fa-eye-slash";
            }else{
                this.passwordType="password";
                this.passwordIcon="fa-solid fa-eye";
            }
        },

        login(){
            const thisAcPasswork=JSON.parse(localStorage.getItem("thisAccount"));
            console.log(thisAcPasswork);
            if(thisAcPasswork.name===this.account && thisAcPasswork.pass===this.password){
                this.check=false;
                this.$router.push('/')
            }else{
                this.check=true;
            }
        }
    }
}
</script>

<template>
  <div class="w-full h-screen bg-white flex justify-center items-center">
    <div class="w-fit p-6 ">
        <h1 class="text-4xl text-[#3C7FA5] mb-10 text-center">Expense Tracker</h1>
        <div>
            <p class="my-3">Account</p>
            <input type="text" class="w-[480px] block border-2 border-[#AFB1B6] p-3 rounded-xl" placeholder="Placeholder/Input text" v-model="account" oninput="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'');">
        </div>
        <div class="relative">
            <p class="my-3">Password</p>
            <input :type="passwordType" class="w-[480px] block border-2 border-[#AFB1B6] p-3 rounded-xl" placeholder="Placeholder/Input text" v-model="password" oninput="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'');">
            <i :class="passwordIcon +' fa-xl absolute top-[3.9rem] right-[1rem] cursor-pointer hover:scale-105 active:scale-95'" @click="changeType"></i>
        </div>
        <div class="mx-auto w-fit my-10">
            <RouterLink to="/sign" ><button type="button" class="bg-[#A1B9C7] text-white px-10 py-3 rounded-lg mr-5 font-bold hover:scale-105 active:scale-95">Sign Up</button></RouterLink>
            <button type="button" @click="login" class="bg-[#3C7FA5] text-white px-10 py-3 rounded-lg mr-5 font-bold hover:scale-105 active:scale-95">Log In</button>
        </div>
        <h1 class="text-[red] text-3xl text-center font-bold" v-if="check">帳號密碼輸入錯誤</h1>
    </div>
    
    
  </div>
</template>
