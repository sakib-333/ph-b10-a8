import { ShowToastMessage } from "./ShowToastMessage";

export const RemoveFromCart = (
  setCart,
  productID,
  setTotalPrice,
  productPrice
) => {
  setCart((currCart) => currCart.filter((id) => id !== productID));
  setTotalPrice((currPrice) => {
    let total = currPrice - productPrice;
    total = total.toFixed(2);
    total = Number(total);
    return total;
  });
  ShowToastMessage(true, "Gadget removed from cart");
};
