import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FullCartProduct } from "./FullCartProduct";
import { useNavigate } from "react-router-dom";
import { addProductsToUser } from "../../../../Utils/addProductsToUser";
import { clearCart } from "../../../../Redux/Cart/CartActions/cartActions";
import '../style.css'
import axios from 'axios'
import { server } from "../../../../Utils/vars";

export const FullCart = ({id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const token = user.user.token
  const carrito = useSelector((state) => state.cart.productsInCart);
  const totalPrice = carrito.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const buy = () => {
    carrito.map(async p=>{
      await axios.put(`${server}/products/add-sell/${p.id}`,{},{
        headers:{
          "x-access-token": `${token}`
        }
      })
    })
    addProductsToUser(id, carrito, token)
    dispatch(clearCart())
    navigate("/")
    /*
      addProductsToUser(id, carrito)---NO BORRAR--
      dispatch(clearCart()) ---NO BORRAR--
      navigate("/");---NO BORRAR--
    });*/
  };
  return (
    <div className="fullCartContainer">
      {carrito.map((p) => (
        <FullCartProduct
          key={p.id}
          name={p.name}
          imgR={p.img}
          price={p.price}
          quantity={p.quantity}
        />
      ))}
      <h4>Total: {totalPrice}</h4>
      <button onClick={()=>buy()} className="buyButton">Realizar Pedido</button>
    </div>
  );
};
