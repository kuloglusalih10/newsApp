import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchNews } from '../store/slices/news';


export const Content = () => {

    let { category } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchNews(category));
    });
    
    return (
        <div>
            {category}
        </div>
    )
}
