export const SortCartGadgets = (products, setCart) => {
  products.sort((p1, p2) => p2.price - p1.price);
  setCart(() => products.map((item) => item.product_id));
};
