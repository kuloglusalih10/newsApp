import React, { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'
import { Drawer,Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/newsLogo.png';
import { ImLinkedin } from "react-icons/im";
import { FaDizzy, FaGithubSquare } from "react-icons/fa";

export const Nav = () => {

  const navigation = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navLinks = [
    {"link": '/sondakika', "title": 'Son Dakika'},
    {"link": '/dünya', "title": 'Dünya'},
    {"link": '/spor', "title": 'Spor'},
    {"link": '/ekonomi', "title": 'Ekonomi'},
    {"link": '/magazin', "title": 'Magazin'},

  ];

  const social = <>
    <div className='flex w-full justify-center items-center gap-x-3'>
      <a href="https://www.linkedin.com/in/salih-kulo%C4%9Flu-7201a6241/" target='_blank'>
        <ImLinkedin color='#1c1e23' size={25} />
      </a>

      <a href="https://github.com/kuloglusalih10" target='_blank'>
        <FaGithubSquare color='#1c1e23' size={28.5}  />
      </a>
      
      
    </div>
  </>

  const {cities} = useSelector(state => state.news);

  const onChange = (value) => {
    navigation('/'+value)
  };

  const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <div className='bg-dark-gray w-full h-[10vh] sticky top-0 z-10 flex items-center'>
      <div className='flex items-center justify-between w-full px-8 h-[10vh]'>
        <div className='inline  poppins-bold text-white'>
          <img src={logo} alt="Logo" width={145} style={{height:'10vh', objectFit:'cover'}} />
        </div>
        <div className='p-4 hidden lg:inline lg:relative'>
          {
            navLinks.map((link, index) => (
              <NavLink key={index} to={link.link}  className="poppins-regular text-[16px] text-white mx-2 p-2">
                {link.title}
              </NavLink>
            ))
          }

        </div>
        <div className='lg:hidden'>
          <Drawer title="News App" styles={{body:{backgroundColor:'#1c1e23', color:'white'}, }} placement='left' onClose={onClose} open={open} footer={social} >
           <div className='flex flex-col  text-white gap-3 '>
            {
                navLinks.map((link, index) => (
                  <NavLink key={index} to={link.link} onClick={()=>setOpen(false)}  className="text-white hover:text-white  poppins-bold p-2">
                    {link.title}
                  </NavLink>
                ))
            }
           </div>
           
          </Drawer>
        </div>
        <div className='sm:pr-4 mr-auto hidden lg:inline sm:mr-0 sm:ml-0 ml-3 '>
            {/* <Select style={{width:'200px', height:'35px', borderRadius:'none'}} showSearch placeholder="Şehrinizin Haberleri" optionFilterProp="children" onChange={onChange} filterOption={filterOption}
                options={cities}
            /> */}
            <div className='flex w-full items-center gap-x-3'>
              <a href="https://www.linkedin.com/in/salih-kulo%C4%9Flu-7201a6241/" target='_blank'>
                <ImLinkedin color='white' size={25} />
              </a>

              <a href="https://github.com/kuloglusalih10" target='_blank'>
                <FaGithubSquare color='white' size={28.5}  />
              </a>
              
              
            </div>
            
        </div>
        <div className='p-4 lg:hidden'>
          <MenuOutlined className='text-white text-2xl lg:hidden' onClick={showDrawer}/>
        </div>
      </div>
    </div>
  );
};
