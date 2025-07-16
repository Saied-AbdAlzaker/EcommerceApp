import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DASHBOARD } from '../../../Constants/END_POINTS'
import { HashLoader } from 'react-spinners'
import { cartContext } from '../../../Core/Context/CartContext'
import toast from 'react-hot-toast'

export default function ProductDetails() {
    let params = useParams()
    let productId = params.productId
    const [productDetails, setProductDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    let { addToCart, setCartNumber } = useContext(cartContext)

    async function getSpecificProduct() {
        setIsLoading(true)
        let { data } = await axios.get(`${DASHBOARD.products}/${productId}`)
        setIsLoading(false)
        setProductDetails(data.data)
    }

    // Add My Cart
    async function addToMyCart(id) {
        let { data } = await addToCart(id)
        if (data.status) {
            toast.success(data.message)
            setCartNumber(data.numOfCartItems)
        }
    }

    useEffect(() => {
        getSpecificProduct()
    }, [])

    return (
        <>
            {isLoading ? <div className="vh-100 d-flex justify-content-center align-items-center">
                <HashLoader color='#0aad0a' size={100} />
            </div>
                :
                <div className='container my-3'>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={productDetails?.imageCover} alt={productDetails?.title} className='w-100' />
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-around">
                            <div>
                                <h3>{productDetails?.title}</h3>
                                <p>{productDetails?.description}</p>
                            </div>
                            <div>
                                <h5>{productDetails?.category.name}</h5>
                                <div className="d-flex justify-content-between align-content-center">
                                    <p><span className='text-main'>Price:</span>{productDetails?.price}</p>
                                    <p><span className='text-main'>Rating:</span>{productDetails?.ratingsAverage} <i className="fa-solid fa-star rating-color"></i> </p>
                                </div>
                                <button onClick={() => { addToMyCart(productDetails._id) }} className='btn bg-main text-light w-100'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
