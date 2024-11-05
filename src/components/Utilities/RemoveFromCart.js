export const RemoveFromCart = (setCart, productID) => {
  setCart((currCart) => currCart.filter((id) => id !== productID));
};
