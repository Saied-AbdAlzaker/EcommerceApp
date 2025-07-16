import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { DASHBOARD } from '../../../Constants/END_POINTS';
import { ICategory } from '../../Models/Products';

export default function CategorySlider() {
    const [categoryList, setCategoryList] = useState([])

    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    async function getCategories() {
        let { data } = await axios.get(DASHBOARD.categories)
        setCategoryList(data.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <Slider {...settings}>
            {categoryList.map((category) => {
                return <div key={category._id}>
                    <img src={category.image} alt={category.name} height={200} className='m-0' />
                    <p className='text-main'>{category.name}</p>
                </div>
            })}
        </Slider>
    )
}
