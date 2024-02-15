const axios = require('axios');
const convert = require('xml-js')

const getAllnews = async (req ,res)=>{

    try{

        let category = req.body.category;

        const response = await axios.request({
            method:'GET',
            url:`https://rss.haberler.com/rss.asp?kategori=${category}`,
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        })

        const stringValue = convert.xml2js(response.data);


        if((stringValue['elements'][0]['elements'][0]['elements']).length > 6){

            let stringNews =  (stringValue['elements'][0]['elements'][0]['elements']).slice(6);


            let parsedNews =  []; 

            stringNews.forEach(element => {
                let news = {};

                news.title = element['elements'][0]['elements'][0]['cdata'];
                news.link = element['elements'][1]['elements'][0]['text'];
                news.date = (element['elements'][3]['elements'][0]['text']).substring(0,22);
                news.description = element['elements'][4]['elements'][0]['cdata'];
                news.image = ( element['elements'][5]['attributes'] && element['elements'][5]['attributes']['url'] !== undefined) ?  element['elements'][5]['attributes']['url'] : 'https://kuloglusalih10.com.tr/assets/1759492.png' ;

                parsedNews.push(news);

            });

            res.send(
                {
                    'rsp' : true,
                    'message': 'Success !',
                    'data' : parsedNews     
                }
            );

        }
        else{
            res.send({
                'rsp' : false,
                'message' : 'Server Error !',
                'data' : null
            })
        }
    }
    catch (error) {
        res.send({
            'rsp' : false,
            'data' : null,
            'message': error.message
        })
    }
}


module.exports = {
    getAllnews
}