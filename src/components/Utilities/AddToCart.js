import { ShowToastMessage } from "./ShowToastMessage";

export const AddToCart = (
  cart,
  setCart,
  product,
  setTotalPrice,
  productPrice
) => {
  if (!cart.includes(product)) {
    setCart((c) => [...c, product]);
    setTotalPrice((currPrice) => {
      let total = currPrice + productPrice;
      total = total.toFixed(2);
      total = Number(total);
      ShowToastMessage(true, "Gadget added to cart");
      return total;
    });
  } else {
    ShowToastMessage(false, "Gadget already in cart");
  }
};
