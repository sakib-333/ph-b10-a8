export const FilterGadgets = (products, category, setProducts) => {
  if (category === "all product") {
    setProducts(() => products);
  } else {
    setProducts(() =>
      products.filter((product) => product.category === category)
    );
  }
};
