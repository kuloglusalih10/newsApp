import { configureStore } from "@reduxjs/toolkit"; 
import newsReducers from './slices/news';
import forexReducers from './slices/forex'

const store = configureStore({
    reducer:{
        news: newsReducers,
        forex:forexReducers
    }

})

export default store;