import { setProducts, addProduct, removeDeleteProduct, setConfirmDelete } from "./productsSlice";
import Moment from 'moment';

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
        if (addedProduct?.message?.toLowerCase() === "product added") {//change when api return object added
          product.created_at = Moment().format('DD/MM/YYYY');
          dispatch(addProduct({ product: product }));//change when api return object added
        }
      });
  };
};

export const deleteProduct = (product) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:3000/products/${product.sku}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((addedProduct) => {
        if (addedProduct?.message?.toLowerCase() === "product deleted!") {//change when api return object added
          dispatch(removeDeleteProduct( product ));//change when api return object added
          dispatch(setConfirmDelete({ confirmDelete: true }));
        }
      });
  };
};

