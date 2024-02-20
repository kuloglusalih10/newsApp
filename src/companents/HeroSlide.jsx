import React from 'react'
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide} from 'swiper/react';
import classNames from 'classnames';
import { Autoplay } from 'swiper/modules'

    


    export const HeroSlide = ({ count,setModal, setOpenModal }) => {

        const slideElements = function (count){
        
            const slides = [];
     
            {
                 for (let i = 0; i < count; i++) {
    
                    let img = true;
    
                    news[i].image.startsWith('https://kuloglusalih10.com.tr/') ? img = false : ''
    
                    slides.push(
                        <SwiperSlide key={i} onClick={() => {setModal(news[i].image,news[i].title,news[i].description,news[i].link); setOpenModal(true)}} className='w-full md:h-[90vh] sm:h-[70vh] h-[50vh]'>
                            <img className={classNames('w-full h-full hover:scale-110 duration-700 object-contain', {'object-cover': img})} src={news[i].image}  />
                            <div className='absolute px-1 text-center md:px-4 bottom-0 left-0 right-0 md:h-[45vh] sm:h-[35vh] h-[25vh] bg-gradient-to-t from-black flex items-end pb-20 justify-center'>
                                    <h3 className='poppins-light text-white text-xl md:text-4xl sm:text-2xl '>{news[i].title} </h3>
                            </div>
                        </SwiperSlide>
                    )
                    
                }
                
            }
            return slides
            
        }


        const { news } = useSelector(state => state.news);
   

        return (
            <Swiper  className=' w-full relative ' modules={[Autoplay]} autoplay={{ delay: 9000, disableOnInteraction: false, }} speed={3000} loop={true} slidesPerView={1}
            >
                
                {
                    
                    slideElements(count)
                   
                }
                
            </Swiper>
        )

    };
    