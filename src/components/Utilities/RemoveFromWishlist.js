import { ShowToastMessage } from "./ShowToastMessage";

export const RemoveFromWishlist = (setWishlist, productID) => {
  setWishlist((currWishlistIDs) =>
    currWishlistIDs.filter((id) => id !== productID)
  );
  ShowToastMessage(true, "Gadget removed from wishlist");
};
