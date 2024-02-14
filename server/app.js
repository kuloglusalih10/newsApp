const express = require('express');



const app = express();
const port = 3000;

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