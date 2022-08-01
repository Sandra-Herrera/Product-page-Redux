import { setProducts, addProduct, removeDeleteProduct, setConfirmDelete } from "./productsSlice";
import Moment from 'moment';

export const getProducts = () => {
  return async (dispatch, getState) => {
    const resp = await fetch(`https://62e795c993938a545bd49913.mockapi.io/products`);
    const data = await resp.json();
    dispatch(setProducts({ products: data }));
  };
};

export const postProducts = (product) => {
  return async (dispatch, getState) => {
    fetch(`https://62e795c993938a545bd49913.mockapi.io/products`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((addedProduct) => {
        //if (addedProduct?.message?.toLowerCase() === "product added") {//change when api return object added
          //product.created_at = Moment().format('DD/MM/YYYY');
          dispatch(addProduct({ product: addedProduct }));//change when api return object added
        //}
      });
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch, getState) => {
    fetch("https://62e795c993938a545bd49913.mockapi.io/products/"+productId.productId, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((addedProduct) => {
        //if (addedProduct?.message?.toLowerCase() === "product deleted!") {//change when api return object added
          dispatch(setConfirmDelete({ confirmDelete: true }));  
          dispatch(removeDeleteProduct( {product:addedProduct} ));//change when api return object added
          
        //}
      });
  };
};

