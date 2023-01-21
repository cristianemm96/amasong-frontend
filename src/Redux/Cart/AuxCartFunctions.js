export const addProductToCart = (cartElements, prod) => {
  const prodId = cartElements.find((p) => p.id === prod.id);
  if (prodId) {
    return cartElements.map((elem) =>
      elem.id === prod.id ? { ...elem, quantity: elem.quantity + 1 } : elem
    );
  }
  return [...cartElements, { ...prod, quantity: 1 }];
};

export const deleteProductsFromCart = (cartElements, prod)=>{
  const product = cartElements.find((p)=>p.id === prod)
  if(product.quantity > 1){
  return cartElements.map((elem) =>
    elem.id === prod? { ...elem, quantity: elem.quantity - 1  } : elem
  );
  }else{
    const indexProd = cartElements.findIndex(ob=>{
      return ob.id === prod
    })
    return [...cartElements.slice(0, indexProd), ...cartElements.slice(indexProd + 1)]
  }
  
}