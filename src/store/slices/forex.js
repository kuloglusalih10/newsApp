import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    forexs: [],
    isSuccess: false,
    isLoading : true,
    updatedTime : '',
    items : [
        {"title": "USD", "value": "Dolar"},
        {"title": "EUR", "value": "Euro"},
        {"title": "GBP", "value": "Sterlin"},
        {"title": "RUB", "value": "Ruble"},
        {"title": "gram-altin", "value": "Gram"},
        {"title": "ceyrek-altin", "value": "Çeyrek"},
        {"title": "yarim-altin", "value": "Yarim"},
        {"title": "tam-altin", "value": "Tam"},
        {"title": "cumhuriyet-altini", "value": "Cumhuriyet"},
        {"title": "ata-altin", "value": "Ata"},
        {"title": "14-ayar-altin", "value": "14 Ayar"},
        {"title": "18-ayar-altin", "value": "18 Ayar"},
        {"title": "22-ayar-bilezik", "value": "22 Ayar"},
        {"title": "gumus", "value": "Gümüş"}
    ]
}

export const fetchForex = createAsyncThunk(
    'forex/fetchForex',
    async (a,{rejectWithValue})=>{

        console.log('okeokeoke');


        

        try{

            let config = {
                method: 'get',
                url: 'https://finans.truncgil.com/today.json',
                headers:{
                    
                }
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

            state.forexs = [];
            let data = action.payload;
            state.items.map((item)=>{
                data[item.title]['title'] = item.value; 
                state.forexs.push(data[item.title]);
            });

            state.updatedTime = data['Update_Date'];

            state.isSuccess = true;
            state.isLoading = false;
        })
       
    }
});

export default forexSlice.reducer;