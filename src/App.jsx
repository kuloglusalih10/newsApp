import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './companents/Nav';
import { Layout } from './companents/Layout'
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
        <Layout>
            <div>test</div>
          </Layout>
      </BrowserRouter>
      
    </>
  )
}

export default App
