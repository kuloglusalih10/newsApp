import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchForex } from '../store/slices/forex';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { Tab } from '@headlessui/react'
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { AiFillGold } from "react-icons/ai";
import CurrencyFlag from 'react-currency-flags';
import gold from '../assets/gold-bars.png'
import silver from '../assets/bars.png'
import { useAutoAnimate } from '@formkit/auto-animate/react'


export const Table = () => {

  let forexs = useSelector(state => state.forex.forexs);
  let goldens = useSelector(state => state.forex.goldens);
  const {isSuccess, isLoading} = useSelector(state => state.forex);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchForex());

  },[])

  return (
      <>
        {
            isLoading 

                ?

              <div>yükleniyor...</div> 
                
                : 

              <>

                <Tab.Group >
                  <Tab.List className="flex rounded-lg bg-blue-900/20   mx-auto lg:w-[50%] px-4">
                    <Tab className={({ selected }) =>
                        classNames(
                          'w-full border rounded-l-lg flex items-center justify-center py-5 text-sm font-medium leading-5',
                          '  focus:outline-none ',
                          selected
                            ? ' bg-dark-gray text-white shadow'
                            : 'text-blue-100 bg-white'
                        )
                      }>
                        <FaMoneyBill1Wave size={25} color='green' className='mr-2'/>  Para
                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                          'w-full border rounded-r-lg flex items-center justify-center py-2.5 text-sm font-medium leading-5',
                          '   focus:outline-none ',
                          selected
                            ? 'bg-dark-gray text-white shadow'
                            : 'text-blue-100  bg-white'
                        )
                      }>
                       <AiFillGold  size={25} color='orange' className='mr-2'/> Altın
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-2" ref={parent}>
                      <Tab.Panel className={classNames('rounded-xl bg-white p-3','ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}>
                          <div className=' flex flex-col items-center overflow-hidden  justify-center px-4 md:px-10  pt-2'>
                            <table className='w-full rounded-t border overflow-hidden'>
                              <thead className='bg-slate-100   text-dark-gray '>
                                <tr className=' rounded-t overflow-hidden'>
                                  <td className='rounded-tl py-7 font-semibold text-center'>Sembol</td>
                                  <td className='font-semibold text-center'>İsim</td>
                                  <td className='text-center font-semibold'>Yön</td>
                                  <td className='text-center font-semibold'>Alış</td>
                                  <td className='text-center font-semibold'>Satış</td>
                                  <td className='text-center rounded-tr font-semibold'>Değişim</td>
                                </tr>
                              </thead>
                              <tbody className='bg-white'>

                                {
                                  forexs.map((forex,index) => {
                                    return (
                                      <tr key={forex.title} className="hover:bg-slate-100 cursor-pointer">
                                        <td className='border-t  px-1  py-8 text-center flex items-center justify-center '>
                                          <CurrencyFlag currency={forex.sembol} size="xl" className="mr-3" />{forex.sembol}
                                        </td>
                                        <td className=' border-t  px-1 text-center'>{forex.title}</td>
                                        <td className=' text-center border-t '>
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
                                        <td className='text-center border-t  px-1'>{forex.Alış}</td>
                                        <td className='text-center border-t  px-1'>{forex.Satış}</td>
                                        <td className='text-center border-t  px-1'>{forex.Değişim}</td>
                                      </tr>
                                    )
                                  })
                                }
                                
                              </tbody>

                            </table>

                            {/* <a href="https://www.haberler.com/finans/"  className='w-full  p-4 bg-[#4a72d7] rounded-md text-center text-white font-semibold mt-4'>
                                Finans Sayfasına Git
                            </a> */}
                          </div>

                      </Tab.Panel>
                      <Tab.Panel className={classNames('rounded-xl bg-white p-3','ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}>

                          <div className=' flex flex-col items-center overflow-hidden  justify-center px-4 md:px-10  pt-2'>
                            <table className='w-full rounded-t border overflow-hidden'>
                              <thead className='bg-slate-100   text-dark-gray '>
                                <tr className=' rounded-t overflow-hidden'>
                                  <td className='rounded-tl py-8 font-semibold text-center'>Sembol</td>
                                  <td className='font-semibold text-center'>İsim</td>
                                  <td className='text-center font-semibold'>Yön</td>
                                  <td className='text-center font-semibold'>Alış</td>
                                  <td className='text-center font-semibold'>Satış</td>
                                  <td className='text-center rounded-tr font-semibold'>Değişim</td>
                                </tr>
                              </thead>
                              <tbody className='bg-white'>

                                {
                                  goldens.map((forex,index) => {
                                    return (
                                      <tr key={forex.title} className="hover:bg-slate-100 cursor-pointer">
                                        <td className='border-t border-b-slate-300 px-1 gap-x-4 py-8 text-center flex items-center justify-center '>
                                          <img  src={forex.sembol == "gumus" ? silver : gold} className=" mr-3 w-[50px]" />{forex.sembol}
                                        </td>
                                        <td className=' border-t  px-1 text-center'>{forex.title}</td>
                                        <td className=' text-center border-t px-1'>
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
                                        <td className='text-center border-t  px-1'>{forex.Alış}</td>
                                        <td className='text-center border-t  px-1'>{forex.Satış}</td>
                                        <td className='text-center border-t  px-1'>{forex.Değişim}</td>
                                      </tr>
                                    )
                                  })
                                }
                                
                              </tbody>

                            </table>

                            {/* <a href="https://www.haberler.com/finans/"  className='w-full  p-4 bg-[#4a72d7] rounded-md text-center text-white font-semibold mt-4'>
                                Finans Sayfasına Git
                            </a> */}
                          </div>
                      </Tab.Panel>

                  </Tab.Panels>
                </Tab.Group>

                  {/* bg-slate-100 */}
              
                  

              </>

              
          }
    </>
  )

  
 
}
