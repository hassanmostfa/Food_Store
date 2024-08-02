import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemList : [],
    totalQuantity : 0 ,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state , action) => {
            const newItem = action.payload ; 

            // check if item is in cart already or not ?
            const existingItem = state.itemList.find((item) => item.id === newItem.id) ;

            if(existingItem){
                // We have to increase the quantity
                existingItem.quantity++ ; 
                existingItem.totalPrice += newItem.price ;
            }else{
                // We have to add the item to carts
                state.itemList.push({
                    ...newItem ,
                    id : newItem.id , 
                    price : newItem.price ,
                    quantity : 1 , 
                    totalPrice : newItem.price ,
                    title : newItem.title ,
                    cover : newItem.cover ,
                    
                }) ;
                state.totalQuantity++ ;
            }
        },

        removeFromCart : (state , action) => {
            const id = action.payload ;
        
            // check if item is in cart already or not ?
            const existingItem = state.itemList.find((item) => item.id === id) ;
        
            if(existingItem){
                if(existingItem.quantity === 1){
                    state.itemList = state.itemList.filter((item) => item.id !== id) ;
                    state.totalQuantity-- ;
                }else{
                    existingItem.quantity-- ;
                    existingItem.totalPrice -= existingItem.price ;
                }
            }
        },
        clearCart : (state) => {
            state.itemList = [] ;
            state.totalQuantity = 0 ;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart , removeFromCart , clearCart } = cartSlice.actions

export default cartSlice.reducer