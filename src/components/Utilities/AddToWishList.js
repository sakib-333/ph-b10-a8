import { ShowToastMessage } from "./ShowToastMessage";

export const AddToWishList = (wishList, setWishList, productID) => {
  if (!wishList.includes(productID)) {
    setWishList((currIDs) => [...currIDs, productID]);
    ShowToastMessage(true, "Gadget added to wishlist");
  } else {
    ShowToastMessage(false, "Gadget already in wishlist");
  }
};
