import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isModalVisible:false,
        confirmDelete:false
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.products
        },
        addProduct: (state,  action ) => {
            state.products = [...state.products, action.payload.product]
        },
        removeDeleteProduct: (state,  action ) => {
            state.products = state.products.filter((product)=>product.sku !== action.payload.product.sku)
        },
    
        setVibilityModal:(state, action)=>{
            state.isModalVisible = action.payload.isModalVisible;
            state.confirmDelete = false;
        },
        setConfirmDelete:(state, action)=>{
            state.confirmDelete = action.payload.confirmDelete;
        }
    }
});
export const {setProducts, addProduct, setVibilityModal, removeDeleteProduct, setConfirmDelete} = productsSlice.actions;
