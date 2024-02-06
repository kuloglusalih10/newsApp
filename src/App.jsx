import './App.css'
import { Layout } from './companents/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from './companents/Content';
import { NotFound } from './companents/NotFound';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/:category' element={<Layout/>}>
              <Route index={true} element={<Content/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Provider>
          
      </BrowserRouter>
      
    </>
  )
}

export default App
