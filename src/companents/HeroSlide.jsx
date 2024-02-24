import React from 'react'
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide} from 'swiper/react';
import classNames from 'classnames';
import { Autoplay } from 'swiper/modules'
import { timeAgo } from '../hooks/day';
import { MdUpdate } from "react-icons/md";
import { motion } from "framer-motion"

    


    export const HeroSlide = ({ count,setModal, setOpenModal }) => {

        const slideElements = function (count){
        
            const slides = [];
     
            {
                 for (let i = 3; i < count; i++) {
    
                    let img = true;
    
                    news[i].image.startsWith('https://kuloglusalih10.com.tr/') ? img = false : ''
    
                    slides.push(
                        <SwiperSlide key={i} onClick={() => {setModal(news[i].image,news[i].title,news[i].description,news[i].link); setOpenModal(true)}} className='w-full md:h-[90vh] sm:h-[70vh] h-[50vh] relative overflow-hidden'>
                            <img className={classNames(' w-full h-full  hover:scale-110 duration-700 object-contain', {'object-fill': img})} src={news[i].image}  />
                            <div className='absolute pointer-events-none px-1 text-center md:px-4 bottom-0 left-0 right-0 md:h-[45vh] sm:h-[35vh] h-[25vh] bg-gradient-to-t from-black flex items-end pb-20 justify-center'>
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
            <div className='2xl:grid 2xl:pt-5 pb-2 grid-cols-2 grid-rows-1 gap-x-2 w-full 2xl:h-[90vh]'>
                <Swiper  className='w-full h-full rounded-md row-span-1 col-span-1  ' modules={[Autoplay]} autoplay={{ delay: 4000, disableOnInteraction: false, }} speed={5000} loop={true} slidesPerView={1}
                >
                    
                    {
                        
                        slideElements(count)
                    
                    }
                    
                </Swiper>
                <div className='mt-4 2xl:mt-0 row-span-1 col-span-1 px-2 2xl:pl-5 gap-y-4 grid grid-cols-1 grid-rows-3'>

                    {
                        news.slice(1,4).map((news, index)=>{
                            
                            return (
                                <motion.div className='col-span-1 rounded-md  row-span-1 flex items-center border bg-white'
                                    initial={{ opacity: 0, x:  "100px" }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{ duration: 0.5, delay: index / 3 }} 
                                    viewport={{ once: true }}
                                >
                                    <div className='w-3/5 h-full  px-4 flex flex-col items-start justify-between gap-y-2 pt-1 pb-3'>
                                        <h2 className='text-dark-gray w-full line-clamp-2 text-wrap truncate text-ellipsis font-semibold lg:text-2xl md:text-xl text-base font-sans'>
                                            {news.title}
                                        </h2>
                                        <p className='text-[#818389] text-wrap truncate text-ellipsis line-clamp-2 lg:line-clamp-3'>
                                            {news.description}
                                        </p>
                                        <div className='flex items-center gap-x-2 '>
                                            <MdUpdate size={25} color='orange'/>
                                            <p className=''>
                                                {
                                                timeAgo(news.date)
                                                }
                                            </p>
                                                
                                            
                                        </div>
                                    </div>
                                    <div className='w-2/5 h-full rounded-md'>
                                        <img className='w-full h-full rounded-r-md object-cover' src={news.image} alt="news photo" />
                                        {/* <img alt="example" src={news.image} className={classNames('object-contain h-[200px]', {'object-fill': img})} /> */}
                                    </div>
                                </motion.div>
                            )
                        })
                    }

                </div>
            </div>
        )

    };
    