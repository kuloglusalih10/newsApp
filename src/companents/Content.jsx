import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/slices/news';
import { useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { Divider, Spin } from 'antd';
import { Card } from 'antd';




export const Content = () => {

    let { category } = useParams();
    const dispatch = useDispatch();
    const {news, isSuccess, isLoading} = useSelector(state => state.news);
    const navigate = useNavigate();
    const { Meta } = Card;

    useEffect(()=>{
        dispatch(fetchNews(category));
    },[navigate]);
    
    const slideElements = function (count){
        
        const slides = [];
        
        {
             for (let i = 0; i < count; i++) {

                
            
                slides.push(
                    <SwiperSlide >
                        <img className='w-full hover:scale-110 duration-700' src={news[i]['elements'][5]['attributes']['url']} alt="test" />
                        <div className='absolute px-4 bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black flex items-end pb-10 justify-center'>
                                <h3 className='poppins-light text-white text-4xl'>{news[i]['elements'][0]['elements'][0]['cdata']} </h3>
                        </div>
                    </SwiperSlide>
                )
                
            }
            
        }
        return slides
        
    }

    const smallSlide = function (count){
        
        const slides = [];
        
        {
             for (let i = 0; i < count; i++) {

                
            
                slides.push(
                    <SwiperSlide className='flex w-[300px] h-full  justify-start  items-center  mx-2 flex-col'>
                        {/* <img className=' duration-700 w-full h-[70%]' src={news[i]['elements'][5]['attributes']['url']} alt="test" />
                        <div className='flex mt-2 flex-col items-center justify-center text-center'>
                            <h3 className='poppins-light text-black text-xl'>{news[i]['elements'][0]['elements'][0]['cdata']} </h3>
                        </div> */}

                        <Card
                            hoverable
                            style={{
                            width: 300,
                            height: '100%'
                            }}
                            className='h-max text-center'
                            
                            cover={
                            <img alt="example" src={news[i]['elements'][5]['attributes']['url']} className='w-full h-[200px]' />
                        }
                        >
                            {
                                (news[i]['elements'][0]['elements'][0]['cdata']).length > 100 
                                
                                    ? 

                                (news[i]['elements'][0]['elements'][0]['cdata']).substring(0,100)+ "..."

                                    :

                                news[i]['elements'][0]['elements'][0]['cdata']
                            }  
                        </Card>
                      
                    </SwiperSlide>
                )
                
            }
            
        }
        return slides
        
    }

    return (
        <div className='content-center flex-1 items-center justify-center'>
            {
                isLoading  ? 
                    
                    <Spin tip="Loading" fullscreen size="large">
                        <div className="content" />
                     </Spin>
                    
                : 
                   <>
                   
                        <div className='grid grid-cols-1 grid-rows-1 max-h-[90vh]'>
                            
                            <Swiper className='w-full relative ' modules={[Autoplay]} autoplay={{ delay: 9000, disableOnInteraction: false, }} speed={3000} loop={true} slidesPerView={1} >
                                {
                                    slideElements(3)
                                } 
                            </Swiper>


                            
                        
                        </div>

                        <div className='grid grid-cols-1 grid-rows-1 '>                           
                        
                               <Swiper className='w-full py-2 relative h-[305px]' modules={[Autoplay]} autoplay={{ delay: 500, disableOnInteraction: false, }} speed={5000} loop={true} slidesPerView={4}>
                                    {
                                        smallSlide(10)
                                    }
                               </Swiper>
                        </div>
                   </> 
                    

            }
            
        </div>
    )
}
