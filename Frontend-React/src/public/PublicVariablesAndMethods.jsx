// general data for all app
let productView = 2;
const changeProductView = (data) => {
  productView = data;

  return productView;
};

export { productView, changeProductView };