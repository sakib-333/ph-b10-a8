export const AddToWishList = (wishList, setWishList, productID) => {
  if (!wishList.includes(productID)) {
    setWishList((currIDs) => [...currIDs, productID]);
  }
};
