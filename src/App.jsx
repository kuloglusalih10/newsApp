import './App.css'
import { Layout } from './companents/Layout'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Content } from './sections/Content';
import { NotFound } from './sections/NotFound';

import { useDispatch, useSelector } from 'react-redux';


function App() {

  const {categories} = useSelector(state => state.news);
  const {cities} = useSelector(state => state.news);

  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Navigate to="/sondakika" replace />} />
            </Route>
            {categories.map(category => (
              <Route key={category} path={`/${category}`} element={<Layout/>}>
                <Route index={true} element={<Content/>}/>
              </Route>
            ))}
            {cities.map(city => (
              <Route key={city} path={`/${city.value}`} element={<Layout/>}>
                <Route index={true} element={<Content/>}/>
              </Route>
            ))}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
