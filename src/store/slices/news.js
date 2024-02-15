import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import convert from 'xml-js';

const initialState = {
    categories : ['sondakika', 'magazin', 'spor', 'güncel', 'yerel'],
    news: [],
    isSuccess: false,
    isLoading : true,
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (category,{rejectWithValue})=>{
        try{

            let data = JSON.stringify({
                "category": category
              });

              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/news',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };

            const parsedRes = await axios.request(config);
            

            if(parsedRes.data.rsp){

                return (parsedRes.data.data);

            }
            else{

                return rejectWithValue(parsedRes.data.message);
            } 
        }
        catch(error){
            
            return rejectWithValue(error);
        }
    }
)

const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchNews.rejected, (state,action)=>{
            console.log(action.error.message);
            state.isLoading = false;
            state.isSuccess = false;
            // sadece satus değeri ile yönetilebilir
        }),
        builder.addCase(fetchNews.pending, (state, action)=>{
            console.log('pending');
            state.isLoading = true;
            state.isSuccess = false;
        }),

        builder.addCase(fetchNews.fulfilled, (state,action)=>{
            state.news = action.payload;
            console.log(action.payload);
            state.isSuccess = true;
            state.isLoading = false;
        })
       
    }
});

export default newsSlice.reducer;