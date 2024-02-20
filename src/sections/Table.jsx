import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchForex } from '../store/slices/forex';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import classNames from 'classnames';


export const Table = () => {

  let forexs = useSelector(state => state.forex.forexs);
  const {isSuccess, isLoading} = useSelector(state => state.forex);

  useEffect(()=>{
    console.log(forexs);
  },[forexs])

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchForex());

  },[])

  return (
      <div className=''>
        {
            isLoading 

                ?

              <div>yükleniyor...</div> 
                
                : 

              <div className=' flex flex-col items-center overflow-hidden  justify-center px-4 md:px-10 lg:px-52  pt-2'>
                  <table className='w-full rounded-t border-[#4a72d7] border overflow-hidden'>
                    <thead className='bg-[#4a72d7]   text-white '>
                      <tr className='border-[#4a72d7] border rounded-t overflow-hidden'>
                        <td className='rounded-tl p-2 text-center'>Hisse</td>
                        <td className='text-center p-2'>Yön</td>
                        <td className='text-center p-2'>Alış</td>
                        <td className='text-center p-2'>Satış</td>
                        <td className='text-center rounded-tr p-2'>Değişim</td>
                      </tr>
                    </thead>
                    <tbody className='bg-white'>

                      {
                        forexs.map((forex,index) => {
                          return (
                            <tr key={forex.title} className={classNames('', {'bg-slate-100' : index % 2 == 0})}>
                              <td className='border border-slate-300 px-1 py-2 text-center'>{forex.title}</td>
                              <td className='text-center border border-slate-300'>
                                <div className='w-full h-full flex items-center justify-center'>
                                  {
                                      forex.Değişim[1] == '-' 
                                        ?
                                      <img src="https://www.haberler.com/finans/static/img/financeDown.png" />
                                        :
                                      <img src="https://www.haberler.com/mstatic/assets/img/kucuk_ok_artis.png" />
                                  }
                                  
                                </div>
                              </td>
                              <td className='text-center border border-slate-300 px-1'>{forex.Alış}</td>
                              <td className='text-center border border-slate-300 px-1'>{forex.Satış}</td>
                              <td className='text-center border border-slate-300'>{forex.Değişim}</td>
                            </tr>
                          )
                        })
                      }
                      
                    </tbody>

                  </table>

                  <a href="https://www.haberler.com/finans/"  className='w-full  p-4 bg-[#4a72d7] rounded-md text-center text-white font-semibold mt-4'>
                      Finans Sayfasına Git
                  </a>
              </div>
          }
    </div>
  )

  
 
}
