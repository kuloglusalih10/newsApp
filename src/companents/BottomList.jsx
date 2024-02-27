import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { timeAgo } from '../hooks/day';
import { motion } from "framer-motion"

export const BottomList = ({setModal, setOpenModal}) => {

    const {news, isSuccess, isLoading} = useSelector(state => state.news);

    const bottomList = function(){

        let news_bottom = news.slice(10);
        const list = [];

        for (let i = 0; i < news_bottom.length; i++) {


            
            list.push(

                <div  
                    
                    // initial={{ opacity: 0, x:  "100px" }}
                    // whileInView={{ opacity: 1, x:0 }}
                    // initial={{ opacity: 0, x: "100px", }} // Başlangıçta sağdan ekranın dışında başlar
                    // animate={{ opacity: 1, x: 0 }} // Animasyonla ekranın içine doğru hareket eder ve opaklık artar
                    // transition={{ duration: 0.5, delay: i/3 }} 
                    // viewport={{ once: true }}

                    
                    
                key={i} onClick={() => {setModal(news_bottom[i].image,news_bottom[i].title,news_bottom[i].description,news_bottom[i].link); setOpenModal(true)}} className='cursor-pointer m-2 col-span-1 grid-rows-1 h-[200px] rounded border-2 border-solid bg-white'>
                    <div className='flex items-start justify-start w-full h-full'>
                        <div className='flex-1 h-full rounded'>
                            <img src={news_bottom[i].image}  className='rounded-tl bg-dark-gray rounded-bl w-full h-full object-center' />
                        </div>
                        <div className='flex-1 h-full py-2 items-start flex flex-col justify-between pl-2'>
                            <p className='text-gray-600 text-wrap poppins-medium'>
                                {
                                    (news_bottom[i].title).length > 80 
                                        ?
                                        news_bottom[i].title.substring(0,80)+ '...'
                                        :
                                        news_bottom[i].title
                                }
                            
                            </p>

                            <p className='text-gray-500 text-sm'>
                                {

                                    timeAgo(news_bottom[i].date)
                                    //news_bottom[i].date
                                    
                                }

                            </p>
                        </div>
                        

                    </div>

                </div>

            )

        }

    
        return list
    }

    return (

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row-auto w-full mt-4 h-max'>
                            
                {
                    bottomList()
                }

            </div>
    )
}
