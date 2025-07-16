import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import CategorySlider from '../CategorySlider/CategorySlider'
import Products from '../Products/Products'

export default function Home() {
    return (
        <div>
            <HomeSlider />
            <h2>Shop Popular Categories</h2>
            <CategorySlider />
            <h2>Featured Products</h2>
            <Products />
        </div>
    )
}
