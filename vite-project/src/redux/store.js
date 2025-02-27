import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import favReducer from './slices/favSlice'
import productsSlice from './slices/productsSlice'
import authReducer from './slices/authSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer,
        fav:favReducer,
        products:productsSlice,
        auth:authReducer,
    },

})

export default store