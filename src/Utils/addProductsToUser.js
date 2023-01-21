import axios from "axios";
import { server } from "./vars";

export const addProductsToUser = async(userId, products, token) => {
  console.log(products)
  products.map(async(p)=>{
    await axios.post(`${server}/sell`,{
      userID: userId,
      product: p},{
        headers:{
          "x-access-token": `${token}`
        }
      })
  })
};
