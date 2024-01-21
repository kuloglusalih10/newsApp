import React from 'react'
import {useParams} from 'react-router-dom'


export const Content = () => {

    let { category } = useParams();

    return (
        <div>
            {category}
        </div>
    )
}
