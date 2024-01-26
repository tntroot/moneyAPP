<script>
import LeftView from "../components/Left.vue";
import ExAndIn from "../components/ExAndIn.vue"
import BgAddView from "../components/BgAdd.vue";
import BgDeleteViex from "../components/BgDelete.vue";

import {mapState,mapActions} from "pinia";
// 自己的 Pinia 資料庫
import indexStore from "../store/indexstore";

export default{
  components:{
    LeftView,ExAndIn,BgAddView,BgDeleteViex
  },
  data() {
    return {
      account:"",  // 帳號
      countArray:[],  // 把 localstorage 存進 array

      bg_color:false, // 背景
      bg_add:false,bg_delete:false,  // 新增 刪除 按鈕

      dekey:"" // 要刪除的key
    }
  },
  methods:{
    ...mapActions(indexStore,["setgreenMoney","setredMoney","setallMoney"]),

    /* addArr(index){  // 新增數據
      const value=JSON.parse(localStorage.getItem(index));
      this.countArray.push([index,value]);
    }, */

    allArr(){
      this.countArray=[];  // 重製 Array 避免重複新增
      indexStore().$reset();  // 重製 status 狀態，避免重複新增
      try {
        Object.entries(localStorage).forEach(([key,value])=>{
        if(key!=='thisAccount'){  // 跳過 帳號 的 key
          value=JSON.parse(value);

          if(value.color==="red"){
            this.setredMoney(value.name);
          }else{
            this.setgreenMoney(value.name);
          }
          this.setallMoney();   // 計算總數

          this.countArray.push([key,value]);
        }
      })
      } catch (error) {
        localStorage.removeItem(localStorage);
      }
      
    }

  },
  computed:{
    ...mapState(indexStore,["greenInfo","redInfo","allInfo"])
  },
  created(){
    // 檢測是否為登入狀態
    const thisAcPasswork=JSON.parse(localStorage.getItem("thisAccount"));
    if(thisAcPasswork===null){
      this.$router.push('/login');
    }else{
      this.account=thisAcPasswork.name
    }

  },
  mounted(){
    this.allArr();
  }
}
</script>

<template>
  <div class="flex">
    <LeftView :account="account" :money="allInfo" />
      <div class="mx-auto mt-24 w-[50rem] text-center font-bold">
        <ExAndIn :income="greenInfo" :expense="redInfo" />
        <button type="button" class="block bg-[#3C7FA5] rounded-lg text-white py-2 px-6 mt-20 mb-14 mx-auto hover:scale-105 active:scale-95" @click="bg_color=true;bg_add=true">Add transaction</button>
        
        <div class=" w-full max-h-[350px] overflow-auto">
          <div v-for="(item,index) in countArray" :key="index" class="flex py-2 px-6 border-2 border-[#3C7FA5] justify-between items-center my-4 mx-6 rounded-lg">
            <p class="text-[#3C7FA5]">{{ item[0] }}</p>
            <div class="flex items-center">
              <p :class="{'text-red-600  mx-6':item[1].color==='red', 'text-green-600 mx-6':item[1].color==='green' }">$ {{ item[1].name }}</p>
              <button type="button" class="bg-[#3C7FA5] rounded-lg text-white py-2 px-6 hover:scale-105 active:scale-95" @click="bg_color=true;bg_delete=true;dekey=item[0]">Delete</button>
            </div>
          </div>
        </div>

      </div>
  </div>

  <div v-if="bg_color" class="bg-[#0B354DB2] w-screen h-screen absolute top-0 left-0 flex items-center justify-center">
    <BgAddView v-if="bg_add" @event="bg_color=this.ss;bg_add=this.ss" @newArr="allArr" />
    <BgDeleteViex v-if="bg_delete" @event="bg_color=this.ss;bg_delete=this.ss" :deletkey="dekey" @newArr="allArr" />
  </div>
  
</template>

<style lang="scss" scoped>
  .money{
    width: 480px;
    display: block;
    border: 2px #3C7FA5 solid;
    padding: 0.75rem;
    border-radius: 0.75rem;

    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button{
      appearance: none;
    }
  }
</style>
