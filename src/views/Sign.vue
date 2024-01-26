<script>
import { RouterLink, RouterView } from 'vue-router';

import {mapActions} from "pinia";
// 自己的 Pinia 資料庫
import indexStore from "../store/indexstore";

export default{
    components:{
        RouterLink
    },
    data() {
        return {
            passwordType:"password",passwordType2:"password",
            passwordIcon:"fa-solid fa-eye", passwordIcon2:"fa-solid fa-eye",

            account:"",
            password:"",repassword:"",
            check:false,check_text:""
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
        changeType2(){
            if(this.passwordType2==="password"){
                this.passwordType2="text";
                this.passwordIcon2="fa-solid fa-eye-slash";
            }else{
                this.passwordType2="password";
                this.passwordIcon2="fa-solid fa-eye";
            }
        },
        loginSave(){
            if(this.password==="" || this.repassword==="" || this.account===""){
                this.check=true;
                this.check_text="尚有欄位未輸入"
            }else if(this.password!==this.repassword){
                this.check=true;
                this.check_text="密碼與確認密碼不相符"
            }else{
                this.check=false;
                localStorage.setItem("thisAccount",JSON.stringify({name:this.account,pass:this.password}));
                this.$router.push('/login');
            }
        }
    }
}
</script>

<template>
  <div class="w-full h-screen bg-[#3C7FA5] flex justify-center items-center">
    <div class="w-fit p-6 ">
        <h1 class="text-4xl text-white mb-10 text-center">Expense Tracker</h1>
        <div>
            <p class="my-3 text-white">Account</p>
            <input type="text" class="w-[480px] block border-2 border-[#AFB1B6] p-3 rounded-xl" placeholder="Placeholder/Input text" v-model="account" oninput="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'');">
        </div>
        <div class="relative">
            <p class="my-3 text-white">Password</p>
            <input :type="passwordType" class="w-[480px] block border-2 border-[#AFB1B6] p-3 rounded-xl" placeholder="Placeholder/Input text" v-model="password" oninput="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'');">
            <i :class="passwordIcon +' fa-xl absolute top-[3.9rem] right-[1rem] cursor-pointer hover:scale-105 active:scale-95'" @click="changeType"></i>
        </div>
        <div class="relative">
            <p class="my-3 text-white">Repeat Password</p>
            <input :type="passwordType2" class="w-[480px] block border-2 border-[#AFB1B6] p-3 rounded-xl" placeholder="Placeholder/Input text" v-model="repassword" oninput="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'');">
            <i :class="passwordIcon2 +' fa-xl absolute top-[3.9rem] right-[1rem] cursor-pointer hover:scale-105 active:scale-95'" @click="changeType2"></i>
        </div>
        <div class="mx-auto w-fit my-10">
            <RouterLink to="/" ><button type="button" class="bg-[#A1B9C7] text-white px-10 py-3 rounded-lg mr-5 font-bold hover:scale-105 active:scale-95">Cancel</button></RouterLink>
            <button type="button" class="bg-white text-[#3C7FA5] px-10 py-3 rounded-lg mr-5 font-bold hover:scale-105 active:scale-95" @click="loginSave">Log In</button>
        </div>
        <h1 class="text-[red] text-3xl text-center font-bold" v-if="check">{{ check_text }}</h1>
    </div>
    
    
  </div>
</template>

<style lang="scss" scoped>
    
</style>
