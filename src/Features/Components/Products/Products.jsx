import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DASHBOARD } from '../../../Constants/END_POINTS'
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../Core/Context/CartContext'
import toast from 'react-hot-toast'

export default function Products() {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  let {addToCart,setCartNumber} = useContext(cartContext)

  // All Products
  async function getProducts() {
    setIsLoading(true)
    let { data } = await axios.get(DASHBOARD.products)
    setProductList(data.data)
    setIsLoading(false)
  }

  // Add My Cart
  async function addToMyCart(id){
    let {data} = await addToCart(id)
    if(data.status){
      toast.success(data.message)
      setCartNumber(data.numOfCartItems)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="row">
      {isLoading ? <div className="vh-100 d-flex justify-content-center align-items-center">
        <HashLoader color='#0aad0a' size={100} />
      </div> : <>
        {productList.map((product) => {
          return <div className='col-md-3' key={product._id}>
            <div className='product p-3 shadow rounded-5'>
              <Link to={`/product/${product._id}`}>
                <img src={product.imageCover} alt={product.title} className='w-100' />
                <p className='text-main'>{product.category.name}</p>
                <h5>{product.title}</h5>
                <div className="d-flex justify-content-between">
                  <p>{product.price} EGP</p>
                  <p><i className="fa-solid fa-star rating-color"></i>{product.ratingsAverage}</p>
                </div>
              </Link>
              <button onClick={()=>{addToMyCart(product._id)}} className='btn bg-main text-light w-100'>Add to cart</button>
            </div>
          </div>
        })}</>}
    </div>
  )
}
