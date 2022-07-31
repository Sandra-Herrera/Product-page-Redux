import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isModalVisible:false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.products
        },
        addProduct: (state,  action ) => {
            state.products = [...state.products, action.payload.product]
        },
    
        setVibilityModal:(state, action)=>{
            state.isModalVisible = action.payload.isModalVisible;
        }
    }
});
export const {setProducts, addProduct, setVibilityModal} = productsSlice.actions;
