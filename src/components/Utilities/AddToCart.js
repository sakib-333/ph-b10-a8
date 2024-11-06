import { ShowToastMessage } from "./ShowToastMessage";

export const AddToCart = (setCart, product, setTotalPrice, productPrice) => {
  setCart((c) => [...c, product]);
  setTotalPrice((currPrice) => {
    let total = currPrice + productPrice;
    total = total.toFixed(2);
    total = Number(total);
    return total;
  });
  ShowToastMessage(true, "Gadget added to cart");
};
