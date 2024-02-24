import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import convert from 'xml-js';

const initialState = {
    categories : ['sondakika', 'magazin', 'spor', 'dünya', 'yerel','ekonomi'],
    news: [],
    isSuccess: false,
    isLoading : true,
    cities: [
        {
            "value": "Adana",
            "label": "Adana"
        },
        {
            "value": "Adıyaman",
            "label": "Adıyaman"
        },
        {
            "value": "Afyonkarahisar",
            "label": "Afyonkarahisar"
        },
        {
            "value": "Ağrı",
            "label": "Ağrı"
        },
        {
            "value": "Amasya",
            "label": "Amasya"
        },
        {
            "value": "Ankara",
            "label": "Ankara"
        },
        {
            "value": "Antalya",
            "label": "Antalya"
        },
        {
            "value": "Artvin",
            "label": "Artvin"
        },
        {
            "value": "Aydın",
            "label": "Aydın"
        },
        {
            "value": "Balıkesir",
            "label": "Balıkesir"
        },
        {
            "value": "Bilecik",
            "label": "Bilecik"
        },
        {
            "value": "Bingöl",
            "label": "Bingöl"
        },
        {
            "value": "Bitlis",
            "label": "Bitlis"
        },
        {
            "value": "Bolu",
            "label": "Bolu"
        },
        {
            "value": "Burdur",
            "label": "Burdur"
        },
        {
            "value": "Bursa",
            "label": "Bursa"
        },
        {
            "value": "Çanakkale",
            "label": "Çanakkale"
        },
        {
            "value": "Çankırı",
            "label": "Çankırı"
        },
        {
            "value": "Çorum",
            "label": "Çorum"
        },
        {
            "value": "Denizli",
            "label": "Denizli"
        },
        {
            "value": "Diyarbakir",
            "label": "Diyarbakir"
        },
        {
            "value": "Edirne",
            "label": "Edirne"
        },
        {
            "value": "Elazığ",
            "label": "Elazığ"
        },
        {
            "value": "Erzincan",
            "label": "Erzincan"
        },
        {
            "value": "Erzurum",
            "label": "Erzurum"
        },
        {
            "value": "Eskişehir",
            "label": "Eskişehir"
        },
        {
            "value": "Gaziantep",
            "label": "Gaziantep"
        },
        {
            "value": "Giresun",
            "label": "Giresun"
        },
        {
            "value": "Gümüşhane",
            "label": "Gümüşhane"
        },
        {
            "value": "Hakkari",
            "label": "Hakkari"
        },
        {
            "value": "Hatay",
            "label": "Hatay"
        },
        {
            "value": "Isparta",
            "label": "Isparta"
        },
        {
            "value": "Mersin",
            "label": "Mersin"
        },
        {
            "value": "İstanbul",
            "label": "İstanbul"
        },
        {
            "value": "İzmir",
            "label": "İzmir"
        },
        {
            "value": "Kars",
            "label": "Kars"
        },
        {
            "value": "Kastamonu",
            "label": "Kastamonu"
        },
        {
            "value": "Kayseri",
            "label": "Kayseri"
        },
        {
            "value": "Kırklareli",
            "label": "Kırklareli"
        },
        {
            "value": "Kırşehir",
            "label": "Kırşehir"
        },
        {
            "value": "Kocaeli",
            "label": "Kocaeli"
        },
        {
            "value": "Konya",
            "label": "Konya"
        },
        {
            "value": "Kütahya",
            "label": "Kütahya"
        },
        {
            "value": "Malatya",
            "label": "Malatya"
        },
        {
            "value": "Manisa",
            "label": "Manisa"
        },
        {
            "value": "Kahramanmaraş",
            "label": "Kahramanmaraş"
        },
        {
            "value": "Mardin",
            "label": "Mardin"
        },
        {
            "value": "Muğla",
            "label": "Muğla"
        },
        {
            "value": "Muş",
            "label": "Muş"
        },
        {
            "value": "Nevşehir",
            "label": "Nevşehir"
        },
        {
            "value": "Niğde",
            "label": "Niğde"
        },
        {
            "value": "Ordu",
            "label": "Ordu"
        },
        {
            "value": "Rize",
            "label": "Rize"
        },
        {
            "value": "Sakarya",
            "label": "Sakarya"
        },
        {
            "value": "Samsun",
            "label": "Samsun"
        },
        {
            "value": "Siirt",
            "label": "Siirt"
        },
        {
            "value": "Sinop",
            "label": "Sinop"
        },
        {
            "value": "Sivas",
            "label": "Sivas"
        },
        {
            "value": "Tekirdağ",
            "label": "Tekirdağ"
        },
        {
            "value": "Tokat",
            "label": "Tokat"
        },
        {
            "value": "Trabzon",
            "label": "Trabzon"
        },
        {
            "value": "Tunceli",
            "label": "Tunceli"
        },
        {
            "value": "Şanlıurfa",
            "label": "Şanlıurfa"
        },
        {
            "value": "Uşak",
            "label": "Uşak"
        },
        {
            "value": "Van",
            "label": "Van"
        },
        {
            "value": "Yozgat",
            "label": "Yozgat"
        },
        {
            "value": "Zonguldak",
            "label": "Zonguldak"
        },
      ]
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
                url: 'https://haberler-com-api.onrender.com/news',
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