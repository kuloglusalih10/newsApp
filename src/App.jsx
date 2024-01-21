import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './companents/Nav';
import { Layout } from './companents/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from './companents/Content';
import { NotFound } from './companents/NotFound';


function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/:category' element={<Layout/>}>
              <Route index={true} element={<Content/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
