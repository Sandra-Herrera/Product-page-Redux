import { setProducts, addProduct, setVibilityModal} from "./productsSlice";

export const getProducts = () => {
  return async (dispatch, getState) => {
    const resp = await fetch(`http://localhost:3000/products`);
    const data = await resp.json();
    dispatch(setProducts({ products: data.products }));
  };
};

export const postProducts = (product) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((addedProduct) => {
        dispatch(addProduct({ product: addedProduct }));
        dispatch(setVibilityModal({isModalVisible:false}))
      });
  };
};

