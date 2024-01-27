import React from 'react'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'



export const Layout = ({children}) => {
  return (
    <div className='flex h-screen max-w-full flex-wrap'>
        <Nav/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
