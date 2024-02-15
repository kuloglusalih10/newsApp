const express = require('express');



const app = express();
const port = 3000;

// Cors Setting

const cors=require("cors");
// const corsOptions ={
//    origin:true, 
//    credentials:true,            
//    optionSuccessStatus:200,
  
// }

// app.use(cors(corsOptions));
app.use(cors());
app.options('*', cors());



// params setting

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes

const newsRouter = require('./routes/newsRouter');
const forexRouter = require('./routes/forexRouter')

app.use('/news', newsRouter);

app.use('/forexs',forexRouter)

app.use('*',(req,res)=>{
    res.send('Sayfa Bulunamadı');
} )



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});