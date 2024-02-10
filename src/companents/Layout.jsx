import React from 'react'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Modal } from 'antd'



export const Layout = ({children}) => {


  return (
    <>
        <Nav/>
        <Sidebar/>
        <div className='flex-1 ml-[25%]'>
          <Outlet/>
        </div>
    </>
  )
}
