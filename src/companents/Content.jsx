import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import news, { fetchNews } from '../store/slices/news';
import { useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { Divider, Spin } from 'antd';
import { Card } from 'antd';
import {Modal} from 'antd';
import { link } from '@nextui-org/react';
import defImage from '../assets/1759492.png'
import classNames from 'classnames';
import { fetchForex } from '../store/slices/forex';
import { Sidebar } from './Sidebar';






export const Content = () => {

    let { category } = useParams();
    const dispatch = useDispatch();
    const {news, isSuccess, isLoading} = useSelector(state => state.news);
    const navigate = useNavigate();
    const { Meta } = Card;
    
    

    const [openModal, setOpenModal] = useState(false)
    const [selectedImg, setSelectedImg] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedDesc, setSelectedDesc] = useState('');
    const [selectedLink, setSelectedLink] = useState('');

    

    useEffect(()=>{
        
        dispatch(fetchNews(category));

    },[navigate]);
    
    const slideElements = function (count){
        
        const slides = [];
        
        
        {
             for (let i = 0; i < count; i++) {

                let img = true;

                news[i].image.startsWith('https://kuloglusalih10.com.tr/') ? img = false : ''

                slides.push(
                    <SwiperSlide key={i} onClick={() => {setModal(news[i].image,news[i].title,news[i].description,news[i].link); setOpenModal(true)}}>
                        <img className={classNames('w-full h-full hover:scale-110 duration-700 object-contain', {'object-cover': img})} src={news[i].image}  />
                        <div className='absolute px-4 bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black flex items-end pb-10 justify-center'>
                                <h3 className='poppins-light text-white text-4xl'>{news[i].title} </h3>
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

                let img = true;

                news[i].image.startsWith('https://kuloglusalih10.com.tr/') ? img = false : ''
            
                slides.push(
                    <SwiperSlide key={i} onClick={() => {setModal(news[i].image,news[i].title,news[i].description,news[i].link); setOpenModal(true)}} className='flex  justify-start  items-center flex-col'>

                        <Card
                            hoverable
                            style={{
                            
                            height: '100%'
                            }}
                            className='h-max text-center'
                            
                            cover={
                            <img alt="example" src={news[i].image} className={classNames('object-contain h-[200px]', {'object-cover': img})} />
                        }
                        >
                            {
                                (news[i].title).length > 100 
                                
                                    ? 

                                (news[i].title).substring(0,100)+ "..."

                                    :

                                news[i].title
                            }  
                        </Card>
                      
                    </SwiperSlide>
                )
                
            }
            
        }
        return slides
        
    }

    const bottomList = function(){

        let news_bottom = news.slice(10);
        const list = [];

        for (let i = 0; i < news_bottom.length; i++) {


            
            list.push(

                <div key={i} onClick={() => {setModal(news_bottom[i].image,news_bottom[i].title,news_bottom[i].description,news_bottom[i].link); setOpenModal(true)}} className='cursor-pointer m-2 col-span-1 grid-rows-1 h-[200px] rounded border-2 border-solid bg-slate-100'>
                    <div className='flex items-start justify-start w-full h-full'>
                        <div className='flex-1 h-full rounded'>
                            <img src={news_bottom[i].image}  className='rounded-tl rounded-bl w-full h-full object-center' />
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
                                    news_bottom[i].date
                                }

                            </p>
                        </div>
                        

                    </div>

                </div>

            )

        }

    
        return list
    }

    const setModal = function (image, title, description, link){

        setSelectedImg(image);
        setSelectedDesc(description);
        setSelectedLink(link);
        setSelectedTitle(title);
    }

    return (
        <div className='content-center w-[100%]'>
            {
                isLoading ? 
                    
                    <Spin tip="Loading" fullscreen size="large">
                        <div className="content" />
                     </Spin>
                    
                : 
                   <>
                   
                        
                        <div className=' w-full max-h-[90vh]'>
                            
                            <Swiper  className='w-full relative ' modules={[Autoplay]} autoplay={{ delay: 9000, disableOnInteraction: false, }} speed={3000} loop={true} slidesPerView={1}
                            >
                                {
                                    slideElements(3)
                                } 
                            </Swiper>
                        </div>
                            
                        
                        

                        <div className=' grid grid-cols-1 grid-rows-1 mt-8 h-[330px]'>                           
                        
                                
                               <Swiper className='w-full py-2 relative h-full flex items-center' modules={[Autoplay]} autoplay={{ delay: 500, disableOnInteraction: false, }} speed={5000} loop={true} slidesPerView={4} breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween:40
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween:40
                                    }
                                }}>
                                    {
                                        
                                        smallSlide(10)
                                    }
                               </Swiper>
                        </div>

                        {
                            category == 'ekonomi'  && <Sidebar/>
                        }
                        

                        <Divider style={{color: 'red'}} className='text-white'>Geçmiş Haberler</Divider>

                        <div className='grid grid-cols-3 row-auto w-full mt-4 h-max'>
                           
                            {
                                openModal && 
                                <Modal wrapClassName="vertical-center-modal" open={openModal} onCancel={() => setOpenModal(false)}
                                      okType='link' okText='Detaylar' okButtonProps={{href: selectedLink, target: '_blank'}}
                                                                  >
                                    <Card style={{ height: '100%' }} className='h-max text-center'
                                        cover={
                                        <img alt="example" src={selectedImg} className='object-cover w-full h-[200px]' />
                                        }
                                    >
                                        {
                                            selectedDesc
                                        }  
                                    </Card>
                                </Modal>
                            }

                            {
                                bottomList()
                            }

                        </div>
                   </> 
                    

            }
            
        </div>
    )
}
