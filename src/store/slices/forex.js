import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    forexs: [],
    isSuccess: false,
    isLoading : true,
}

export const fetchForex = createAsyncThunk(
    'forex/fetchForex',
    async (a,{rejectWithValue})=>{

        console.log('okeokeoke');


        

        try{

            let config = {
                method: 'get',
                url: 'https://api.genelpara.com/embed/doviz.json',
                headers: { }
            };
            
            
            const response  = await axios.request(config);

            
            if(response.data){

                
                return (response.data)

            }
            else{

                return rejectWithValue('reject hata');
            } 
        }
        catch(error){
            console.log(error)
            return rejectWithValue(error);
        }
    }
)

const forexSlice = createSlice({
    name:'forex',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchForex.rejected, (state,action)=>{

            state.isLoading = false;
            state.isSuccess = false;
            // sadece satus değeri ile yönetilebilir
        }),
        builder.addCase(fetchForex.pending, (state, action)=>{

            state.isLoading = true;
            state.isSuccess = false;
        }),

        builder.addCase(fetchForex.fulfilled, (state,action)=>{
            state.forexs = action.payload;
            state.isSuccess = true;
            state.isLoading = false;
        })
       
    }
});

export default forexSlice.reducer;