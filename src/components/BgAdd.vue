<script>
import {mapActions} from "pinia";
// 自己的 Pinia 資料庫
import indexStore from "../store/indexstore";

export default {
    data() {
        return {
            ss:false,  // 判別是否點擊了 X 按鈕
            check:false,  // 判別 text、amount 是否為空值

            text:"",
            amount:null
        }
    },
    methods:{
        ...mapActions(indexStore,["setgreenMoney","setredMoney","setallMoney"]), // 淺成拷貝

        bgadd(){
            this.$emit("event",this.ss)
        },
        add(){
            if(this.text==="" || this.amount===null){
                this.check=true;
            }else{
                this.check=false;
                if(this.amount>=0){
                    //this.setgreenMoney(this.amount);
                    localStorage.setItem(this.text,JSON.stringify({name:this.amount,color:'green'}));
                }else{
                   // this.setredMoney(Math.abs(this.amount));
                    localStorage.setItem(this.text,JSON.stringify({name:Math.abs(this.amount),color:'red'}));
                }
                //this.setallMoney();   // 計算總數
                
                this.$emit("newArr",this.text);  // 呼叫 CountMoney.vue addArr 函式
                
                this.$emit("event",this.ss);  // 視窗清除
                
            }
        }
    }
}
</script>
<template>
    <div class="p-10 bg-white font-bold rounded-xl relative">
      <div>
          <p class="my-3 text-[#3C7FA5]">Text</p>
          <input type="text" class="w-[480px] block border-2 border-[#3C7FA5] p-3 rounded-xl" placeholder="請輸入 花費/收入 項目" v-model="text">
      </div>
      <div>
          <p class="my-3 text-[#3C7FA5]">Amount</p>
          <input type="number" class="money" placeholder="金額 (支出請填負數)" v-model="amount">
      </div>
      <button type="button" class="block bg-[#3C7FA5] rounded-lg text-white py-2 px-6 my-10 mx-auto" @click="add">Add transaction</button>
      <h1 class="text-[red] text-3xl text-center font-bold" v-if="check">尚有欄位未輸入</h1>
      <span class=" absolute top-1 right-6 text-6xl text-[#3C7FA5] cursor-pointer hover:scale-105 active:scale-95" @click="bgadd">×</span>
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