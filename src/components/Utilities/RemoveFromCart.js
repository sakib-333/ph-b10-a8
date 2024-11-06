import { ShowToastMessage } from "./ShowToastMessage";

export const RemoveFromCart = (setCart, setTotalPrice, productPrice, indx) => {
  setCart((currCart) => currCart.filter((item, i) => i !== indx));

  setTotalPrice((currPrice) => {
    let total = currPrice - productPrice;
    total = total.toFixed(2);
    total = Number(total);
    return total;
  });
  ShowToastMessage(true, "Gadget removed from cart");
};
