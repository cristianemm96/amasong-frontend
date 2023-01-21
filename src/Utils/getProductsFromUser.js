import axios from "axios";
import { server } from "./vars";


export const getProductsFromUser = async (sells, token) => {
    return await Promise.all(sells.map(async (sell)=>{
        return await axios.get(`${server}/products/${sell.productID}`,{
            headers:{
                "x-access-token": `${token}`
            }
        }).then(res=>res.data)
    }))
};

