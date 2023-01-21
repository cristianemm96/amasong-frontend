import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartProdMinContainer } from "./CartProdMinContainer";
import { Link } from "react-router-dom";
import { clearCart } from "../../../../Redux/Cart/CartActions/cartActions";
import '../style.css'
import { OpenCartStyled } from "../../../../StyledComponents/Containers/OpenCartStyled";

const OpenCart = () => {
  const carrito = useSelector((state) => state.cart.productsInCart);
  const totalPrice = carrito.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const dispatch= useDispatch()
  return (
    <OpenCartStyled>
      <h2>Productos agregados: {carrito.length} </h2>
      {carrito.length > 0 && (
        <div className="allProducts">
          {carrito.map((p) => (
            <div key={Math.random()}>
              <CartProdMinContainer
                id={p.id}
                name={p.name}
                img={p.img}
                desc={p.desc}
                price={p.price}
                quantity={p.quantity}
              />
            </div>
          ))}
        </div>
      )}
      {carrito.length > 0 && (
        <div className="productsInMinCart">
          <div>Total: ${totalPrice}</div>
          <button onClick={()=>{dispatch(clearCart())}}>Limpiar carrito</button>
          <Link to="/fullcart" className="endBuy">Finalizar compra</Link>
        </div>
      )}
    </OpenCartStyled>
  );
};

export default OpenCart;
