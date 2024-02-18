import React from 'react'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Modal } from 'antd'



export const Layout = ({children}) => {


  return (
    <>
        <Nav/>
        <div className='mx-auto w-3/5'>
          <Outlet/>
        </div>
    </>
  )
}
