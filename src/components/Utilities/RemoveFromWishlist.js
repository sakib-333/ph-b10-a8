export const RemoveFromWishlist = (setWishlist, productID) => {
  setWishlist((currWishlistIDs) =>
    currWishlistIDs.filter((id) => id !== productID)
  );
};
