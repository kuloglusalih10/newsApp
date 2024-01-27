import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/slices/news';
import { useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Spin } from 'antd';
import {Card, CardFooter, Image, Button, Spinner} from "@nextui-org/react";
import img from '../assets/notFound2.png'


export const Content = () => {

    let { category } = useParams();
    const dispatch = useDispatch();
    const {news, isSuccess, isLoading} = useSelector(state => state.news);
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchNews(category));
        console.log(news);
    },[navigate]);
    
    const slideElements = function (count){
        
        const slides = [];
        
        {
             for (let i = 0; i < count; i++) {

                
            
                slides.push(
                    <SwiperSlide >
                        <img className='w-full hover:scale-110 duration-700 ' src={news[i]['elements'][5]['attributes']['url']} alt="test" />
                        <div className='absolute px-4 bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black flex items-end pb-10 justify-center'>
                                <h3 className='poppins-light text-white text-4xl'>{news[i]['elements'][0]['elements'][0]['cdata']} </h3>
                        </div>
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
                    
                    <div className='grid grid-cols-1 grid-rows-1 max-h-[90vh]'>
                        
                        <Swiper className='w-full relative' autoplay slidesPerView={1} >
                            {
                                slideElements(3)
                            } 
                        </Swiper>
                       
                    </div>

            }
            
        </div>
    )
}
