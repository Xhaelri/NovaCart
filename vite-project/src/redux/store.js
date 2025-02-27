import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import favReducer from './slices/favSlice'
import productsSlice from './slices/productsSlice'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer,
        fav:favReducer,
        products:productsSlice,
        auth:authReducer,
        user:userReducer,
    },

})

export default store