import { defineStore } from "pinia";

// 兩個參數 1.資料庫名稱 2.資料庫內容
export default defineStore("indexStatus",{

    // date
    // state 要 return 物件時，要用()包起來，不然會被當成JS程式
    state:()=>({
        greenMoney:0,
        redMoney:0,
        allMoney:0
    }),

    getters:{
        
        greenInfo:(state)=>{ return `$  ${state.greenMoney}`},
        redInfo:(state)=>{ return `$  ${state.redMoney}`},
        allInfo:(state)=>{ return `$  ${state.allMoney}`}
    },

    // methods
    // 有 this
    actions:{
        // getLocation(state){
        //     console.log(this.location);
        // },
        setgreenMoney(num){
            this.greenMoney +=num;
        },
        setredMoney(num){
            this.redMoney +=num;
        },
        setallMoney(num){
            this.allMoney=this.greenMoney-this.redMoney;
        }
    },
    persist: {
        enabled: true , // 这个配置代表存储生效，而且是整个store都存储
    }
})