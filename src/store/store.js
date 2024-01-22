import { configureStore } from "@reduxjs/toolkit"; 
import newsReducers from './slices/news';

const store = configureStore({
    reducer:{
        news: newsReducers
    }
})

export default store;