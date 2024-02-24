import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom';






export const Content = () => {

    

    // let { category } = useParams();
    const location = useLocation();
    const pathname = location.pathname;
    const category = pathname.split('/')[1];
    
    console.log(category);

    const [openModal, setOpenModal] = useState(false)
    const [selectedImg, setSelectedImg] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedDesc, setSelectedDesc] = useState('');
    const [selectedLink, setSelectedLink] = useState('');


    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.news);
    const navigate = useNavigate();
    

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
        <div className='content-center bg-light-gray w-[100%]'>
            {
                isLoading ? 
                    
                    <Spin tip="Loading" fullscreen size="large">
                        <div className="content" />
                     </Spin>
                    
                : 
                   <>
                        <HeroSlide count={5} setModal={setModal} setOpenModal={setOpenModal}/>

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
                                        <img alt="example" src={selectedImg} className='object-fill w-full h-[200px]' />
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
