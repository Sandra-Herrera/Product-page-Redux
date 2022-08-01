import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        breadcrumbItem: [{displayPath:'Productos',path:'#'},{displayPath:'Productos especializados', path:'/product-page-redux/#/specialProducts'}],
        products: [],
        allProducts: [],
        isModalVisible:false,
        confirmDelete:false
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.products;
            state.allProducts = action.payload.products;
        },
        addProduct: (state,  action ) => {
            state.products = [...state.products, action.payload.product];
            state.allProducts = [...state.allProducts, action.payload.product];
        },
        removeDeleteProduct: (state,  action ) => {
            state.products = state.products.filter((product)=>product.id !== action.payload.product.id)
            state.allProducts = state.allProducts.filter((product)=>product.id !== action.payload.product.id)
        },
    
        setVibilityModal:(state, action)=>{
            state.isModalVisible = action.payload.isModalVisible;
            state.confirmDelete = false;
        },
        setConfirmDelete:(state, action)=>{
            state.confirmDelete = action.payload.confirmDelete;
        },
        rFilterBySku:(state,  action ) => {
            state.products = state.allProducts.filter((product)=>{
                return product.sku.includes(action.payload.sku)
            });
        },
        addRouteBreadCrumb:(state,  action ) => {
            state.breadcrumbItem = [...state.breadcrumbItem,action.payload.breadCrumbItem];
        },
        removeRouteBreadCrumb:(state,  action ) => {
            state.breadcrumbItem = state.breadcrumbItem.filter((item)=> item.path !== action.payload.breadCrumbItem.path );
        },
    }
});
export const {setProducts, addProduct, setVibilityModal, removeDeleteProduct, setConfirmDelete, rFilterBySku, addRouteBreadCrumb, removeRouteBreadCrumb} = productsSlice.actions;
