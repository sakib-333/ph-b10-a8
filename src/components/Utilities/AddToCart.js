export const AddToCart = (cart, setCart, product) => {
  if (!cart.includes(product)) {
    setCart((c) => [...c, product]);
  }
};
