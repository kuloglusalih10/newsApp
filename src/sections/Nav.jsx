import React, { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'
import { Drawer,Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
    {"link": '/güncel', "title": 'Güncel'},
    {"link": '/spor', "title": 'Spor'},
    {"link": '/ekonomi', "title": 'Ekonomi'},
    {"link": '/magazin', "title": 'Magazin'},

  ];

  const {cities} = useSelector(state => state.news);

  const onChange = (value) => {
    navigation('/'+value)
  };

  const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <div className='bg-dark-red w-full h-[10vh] sticky top-0 z-10 flex items-center'>
      <div className='flex items-center justify-between w-full'>
        <div className='p-4 hidden sm:inline lg:ml-8 poppins-bold text-white'>News App</div>
        <div className='p-4 hidden lg:inline lg:relative'>
          {
            navLinks.map((link, index) => (
              <NavLink key={index} to={link.link}  className="poppins-regular text-white mx-2 p-2">
                {link.title}
              </NavLink>
            ))
          }

        </div>
        <div className='lg:hidden'>
          <Drawer title="News App" styles={{body:{backgroundColor:'#C91A25', color:'white'}, }} placement='left' onClose={onClose} open={open}>
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
        <div className='sm:pr-4 mr-auto sm:mr-0 sm:ml-0 ml-3 sm:-translate-x-1/4'>
            <Select style={{width:'200px', height:'35px', borderRadius:'none'}} showSearch placeholder="Şehrinizin Haberleri" optionFilterProp="children" onChange={onChange} filterOption={filterOption}
                options={cities}
            />
        </div>
        <div className='p-4 lg:hidden'>
          <MenuOutlined className='text-white text-2xl lg:hidden' onClick={showDrawer}/>
        </div>
      </div>
    </div>
  );
};
