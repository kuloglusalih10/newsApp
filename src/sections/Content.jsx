import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import  { fetchNews } from '../store/slices/news';
import { useNavigate} from 'react-router-dom';
import 'swiper/css';
import { Divider, Spin } from 'antd';
import { Card } from 'antd';
import {Modal} from 'antd';
import { Table } from './Table';
import { HeroSlide } from '../companents/HeroSlide';
import { SubSlide } from '../companents/SubSlide';
import { BottomList } from '../companents/BottomList';






export const Content = () => {

    let { category } = useParams();
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.news);
    const navigate = useNavigate();

    
    

    const [openModal, setOpenModal] = useState(false)
    const [selectedImg, setSelectedImg] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedDesc, setSelectedDesc] = useState('');
    const [selectedLink, setSelectedLink] = useState('');

    

    useEffect(()=>{
        
        dispatch(fetchNews(category));

    },[navigate]);

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
                        <HeroSlide count={3} setModal={setModal} setOpenModal={setOpenModal}/>

                        <SubSlide setModal={setModal} setOpenModal={setOpenModal}/>

                        {
                            category == 'ekonomi'  && <Table />
                        }
                        

                        <Divider style={{color: 'red'}} className='text-white'>Geçmiş Haberler</Divider>


                        {
                                openModal 
                                
                                    &&

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

                        <BottomList setModal={setModal} setOpenModal={setOpenModal}/>
                   </> 
                    

            }
            
        </div>
    )
}