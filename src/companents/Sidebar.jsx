import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchForex } from '../store/slices/forex';
import { useSelector } from 'react-redux';

export const Sidebar = () => {

  const forexs = useSelector(state => state.forex.forexs);

  // useEffect(()=>{
  //   console.log(forexs);
  // },[forexs])

  // const dispatch = useDispatch();

  // useEffect(()=>{

  //   console.log('forex effect');
  //   dispatch(fetchForex());

  // },[])
  return (
    <div className=' w-[25%] bg-slate-100 h-[90vh] fixed top-[10vh]'>Sidebar</div>
  )
}
