import { products } from "../Data/Data";

const getSelleds  = products.reduce((acc,el)=>
    acc.concat(el.data.selled) ,[]
);

const maxSelleds = (getSelleds.sort(function(a, b){return b - a})).slice(0,6);

//Aux array
const allRecomended = []
const getId = (a)=> products.find((el)=>{
    if(a === el.data.selled && !allRecomended.includes(el.id)){
        allRecomended.push(el.id);
        return el
    }
})

const ids = maxSelleds.reduce((acc,el)=>
    acc.concat(getId(el)), [])
export const getRecomended  = ids
