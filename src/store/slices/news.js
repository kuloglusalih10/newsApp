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
            const response = await axios.request({
                method:'GET',
                url:`https://rss.haberler.com/rss.asp?kategori=${category}`
            })

            const stringValue = convert.xml2js(response.data);

            if((stringValue['elements'][0]['elements'][0]['elements']).length > 6){

                return ((stringValue['elements'][0]['elements'][0]['elements']).slice(6))

            }
            else{

                return rejectWithValue('reject hata');
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
            console.log('rejected');
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