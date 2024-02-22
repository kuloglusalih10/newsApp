import React from 'react'
import { Autoplay } from 'swiper/modules'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Card } from 'antd';
import classNames from 'classnames';

export const SubSlide = ({setModal, setOpenModal}) => {


    const {news, isSuccess, isLoading} = useSelector(state => state.news);

    const smallSlide = function (count){
        
        const slides = [];
        
        {
             for (let i = 0; i < count; i++) {

                let img = true;

                news[i].image.startsWith('https://kuloglusalih10.com.tr/') ? img = false : ''
            
                slides.push(
                    <SwiperSlide key={i} onClick={() => {setModal(news[i].image,news[i].title,news[i].description,news[i].link); setOpenModal(true)}} className='flex items-center flex-col'>

                        <Card
                            hoverable
                            style={{
                            
                            height: '100%'
                            }}
                            className='h-max text-center '
                            
                            cover={
                            <img alt="example" src={news[i].image} className={classNames('object-contain h-[200px]', {'object-fill': img})} />
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

  return (
    <div className=' grid mt-8  h-[380px] w-full'>                           
                        
                                
                               <Swiper className='w-full py-6 relative h-full flex items-center' modules={[Autoplay]} autoplay={{ delay: 500, disableOnInteraction: false, }} speed={5000} loop={true} slidesPerView={4} breakpoints={{
                                    
                                    // when window width is >= 480px
                                    180: {
                                        slidesPerView: 1,
                                        spaceBetween:15
                                    },
                                    730: {
                                        slidesPerView: 2,
                                        spaceBetween:15
                                    },
                                    800: {
                                        slidesPerView: 3,
                                        spaceBetween:15
                                    },
                                    // when window width is >= 640px
                                    1040: {
                                        slidesPerView: 4,
                                        spaceBetween:15
                                    }
                                }}>
                                    {
                                        
                                        smallSlide(10)
                                    }
                               </Swiper>
    </div>
  )
}
