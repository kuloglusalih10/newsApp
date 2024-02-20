import React, { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'
import { Drawer,Select } from 'antd';
import { useNavigate } from 'react-router-dom';

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

  const iller = [
    {
        "value": "Adana",
        "label": "Adana"
    },
    {
        "value": "Adıyaman",
        "label": "Adıyaman"
    },
    {
        "value": "Afyonkarahisar",
        "label": "Afyonkarahisar"
    },
    {
        "value": "Ağrı",
        "label": "Ağrı"
    },
    {
        "value": "Amasya",
        "label": "Amasya"
    },
    {
        "value": "Ankara",
        "label": "Ankara"
    },
    {
        "value": "Antalya",
        "label": "Antalya"
    },
    {
        "value": "Artvin",
        "label": "Artvin"
    },
    {
        "value": "Aydın",
        "label": "Aydın"
    },
    {
        "value": "Balıkesir",
        "label": "Balıkesir"
    },
    {
        "value": "Bilecik",
        "label": "Bilecik"
    },
    {
        "value": "Bingöl",
        "label": "Bingöl"
    },
    {
        "value": "Bitlis",
        "label": "Bitlis"
    },
    {
        "value": "Bolu",
        "label": "Bolu"
    },
    {
        "value": "Burdur",
        "label": "Burdur"
    },
    {
        "value": "Bursa",
        "label": "Bursa"
    },
    {
        "value": "Çanakkale",
        "label": "Çanakkale"
    },
    {
        "value": "Çankırı",
        "label": "Çankırı"
    },
    {
        "value": "Çorum",
        "label": "Çorum"
    },
    {
        "value": "Denizli",
        "label": "Denizli"
    },
    {
        "value": "Diyarbakir",
        "label": "Diyarbakir"
    },
    {
        "value": "Edirne",
        "label": "Edirne"
    },
    {
        "value": "Elazığ",
        "label": "Elazığ"
    },
    {
        "value": "Erzincan",
        "label": "Erzincan"
    },
    {
        "value": "Erzurum",
        "label": "Erzurum"
    },
    {
        "value": "Eskişehir",
        "label": "Eskişehir"
    },
    {
        "value": "Gaziantep",
        "label": "Gaziantep"
    },
    {
        "value": "Giresun",
        "label": "Giresun"
    },
    {
        "value": "Gümüşhane",
        "label": "Gümüşhane"
    },
    {
        "value": "Hakkari",
        "label": "Hakkari"
    },
    {
        "value": "Hatay",
        "label": "Hatay"
    },
    {
        "value": "Isparta",
        "label": "Isparta"
    },
    {
        "value": "Mersin",
        "label": "Mersin"
    },
    {
        "value": "İstanbul",
        "label": "İstanbul"
    },
    {
        "value": "İzmir",
        "label": "İzmir"
    },
    {
        "value": "Kars",
        "label": "Kars"
    },
    {
        "value": "Kastamonu",
        "label": "Kastamonu"
    },
    {
        "value": "Kayseri",
        "label": "Kayseri"
    },
    {
        "value": "Kırklareli",
        "label": "Kırklareli"
    },
    {
        "value": "Kırşehir",
        "label": "Kırşehir"
    },
    {
        "value": "Kocaeli",
        "label": "Kocaeli"
    },
    {
        "value": "Konya",
        "label": "Konya"
    },
    {
        "value": "Kütahya",
        "label": "Kütahya"
    },
    {
        "value": "Malatya",
        "label": "Malatya"
    },
    {
        "value": "Manisa",
        "label": "Manisa"
    },
    {
        "value": "Kahramanmaraş",
        "label": "Kahramanmaraş"
    },
    {
        "value": "Mardin",
        "label": "Mardin"
    },
    {
        "value": "Muğla",
        "label": "Muğla"
    },
    {
        "value": "Muş",
        "label": "Muş"
    },
    {
        "value": "Nevşehir",
        "label": "Nevşehir"
    },
    {
        "value": "Niğde",
        "label": "Niğde"
    },
    {
        "value": "Ordu",
        "label": "Ordu"
    },
    {
        "value": "Rize",
        "label": "Rize"
    },
    {
        "value": "Sakarya",
        "label": "Sakarya"
    },
    {
        "value": "Samsun",
        "label": "Samsun"
    },
    {
        "value": "Siirt",
        "label": "Siirt"
    },
    {
        "value": "Sinop",
        "label": "Sinop"
    },
    {
        "value": "Sivas",
        "label": "Sivas"
    },
    {
        "value": "Tekirdağ",
        "label": "Tekirdağ"
    },
    {
        "value": "Tokat",
        "label": "Tokat"
    },
    {
        "value": "Trabzon",
        "label": "Trabzon"
    },
    {
        "value": "Tunceli",
        "label": "Tunceli"
    },
    {
        "value": "Şanlıurfa",
        "label": "Şanlıurfa"
    },
    {
        "value": "Uşak",
        "label": "Uşak"
    },
    {
        "value": "Van",
        "label": "Van"
    },
    {
        "value": "Yozgat",
        "label": "Yozgat"
    },
    {
        "value": "Zonguldak",
        "label": "Zonguldak"
    },
  ];

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
                  <NavLink key={index} to={link.link}  className="text-white hover:text-white  poppins-bold p-2">
                    {link.title}
                  </NavLink>
                ))
            }
           </div>
          </Drawer>
        </div>
        <div className='sm:pr-4 mr-auto sm:mr-0 sm:ml-0 ml-3 sm:-translate-x-1/4'>
            <Select style={{width:'200px', height:'35px', borderRadius:'none'}} showSearch placeholder="Şehrinizin Haberleri" optionFilterProp="children" onChange={onChange} filterOption={filterOption}
                options={iller}
            />
        </div>
        <div className='p-4 lg:hidden'>
          <MenuOutlined className='text-white text-2xl lg:hidden' onClick={showDrawer}/>
        </div>
      </div>
    </div>
  );
};
