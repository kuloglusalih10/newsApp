import React, { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'
import { Drawer } from 'antd';

export const Nav = () => {


  console.log("navbar yeniden yüklendi");
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


  return (
    <div className='bg-dark-red w-full h-[10vh] flex items-center'>
      <div className='flex items-center justify-between w-full'>
        <div className='p-4 poppins-bold text-white'>News App</div>
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
          <Drawer title="News App" styles={{body:{backgroundColor:'#C91A25'}, }} placement='left' onClose={onClose} open={open}>
           <div className='flex flex-col w-full text-black gap-3 '>
            {
                navLinks.map((link, index) => (
                  <NavLink key={index} to={link.link}  className="hover:text-white poppins-bold text-white mx-2 p-2">
                    {link.title}
                  </NavLink>
                ))
              }
           </div>
          </Drawer>
        </div>
        <div className='p-4'>
          <MenuOutlined className='text-white text-2xl lg:hidden' onClick={showDrawer}/>
        </div>
      </div>
    </div>
  );
};
