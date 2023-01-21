export const getProductsFrom = (category, products) => {
  return products.filter((p) => p.categorie === category);
};
