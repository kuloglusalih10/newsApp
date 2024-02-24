import React from 'react'
import { Nav } from '../sections/Nav'
import { Outlet } from 'react-router-dom'
import { Modal } from 'antd'



export const Layout = ({children}) => {


  return (
    <>
        <Nav/>
        <div className='mx-auto w-full bg-light-gray 2xl:px-20'>
          <Outlet/>
        </div>
    </>
  )
}
