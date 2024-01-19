import React from 'react'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'


export const Layout = ({children}) => {
  return (
    <div className='flex h-screen flex-wrap'>
        <Nav/>
        <Sidebar/>
        {children}
    </div>
  )
}
