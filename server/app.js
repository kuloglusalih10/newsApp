const express = require('express');



const app = express();
const port = 3000;

// Cors Setting

const cors=require("cors");

app.use(cors());
app.options('*', cors());



// params setting

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes

const newsRouter = require('./routes/newsRouter');

app.use('/news', newsRouter);


app.use('*',(req,res)=>{
    res.send('Sayfa Bulunamadı');
} )



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});