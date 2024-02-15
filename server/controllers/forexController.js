const axios = require('axios');


const getForexs = async (req,res) => {


    try{
        
        let config = {
            method: 'get',
            url: 'https://api.genelpara.com/embed/doviz.json',
            headers: { }
        };
        
        
        const response  = await axios.get('https://api.genelpara.com/embed/doviz.json');
 

        
        response.send(response);

    }catch(error){
        
        res.send(error);
        
       // console.log(error);
    }
}

module.exports ={
    getForexs
}