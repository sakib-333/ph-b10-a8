export const FetchSelectedGadget = async (id) => {
  let allGadgets = await fetch("/data/gadgets.json");
  allGadgets = await allGadgets.json();

  const selectedGadget = allGadgets.find(
    (gadget) => gadget.product_id === id.gadgetID
  );
  return selectedGadget;
};
