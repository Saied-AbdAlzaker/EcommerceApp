import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../../Core/Context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  let { getCart, setCartNumber, deleteCart, updateCart } = useContext(cartContext)
  let [cartInfo, setCartInfo] = useState([])
  let [cartPrice, setCartPrice] = useState([])

  // Get MyCart
  async function getMyCart() {
    let { data } = await getCart()
    setCartInfo(data.data.products)
    setCartPrice(data.data.totalCartPrice)
    setCartNumber(data.data.numOfCartItems)
  }
  // Update Item
  async function updateMyCart(id, count) {
    if (count == 0) {
      deleteMyCart(id)
    } else {
      let data = await updateCart(id, count)
      getMyCart()
    }
  }
  // Delete Item
  async function deleteMyCart(id) {
    let data = await deleteCart(id)
    getMyCart()
  }

  useEffect(() => {
    getMyCart()
  }, [])

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="text-end">
        <Link to={'/checkout'} >
          <button className='btn bg-main text-light'>Online Payment</button>
        </Link>
      </div>
      <div className='bg-main-light shadow p-5 my-3 m-auto'>
        <h4><span className='text-main fw-bold me-2'>Total Price:</span>{cartPrice}</h4>
        {cartInfo.map((productItem) => {
          return <div className='row border-bottom py-3' key={productItem.product._id}>
            <div className="col-md-1">
              <img src={productItem.product.imageCover} alt={productItem.product.title} className='w-100' />
            </div>
            <div className="col-md-11">
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <h4>{productItem.product.title}</h4>
                  <p><span className='text-main me-2'>Price:</span>{productItem.price}</p>
                  <button onClick={() => { deleteMyCart(productItem.product._id) }} className="btn btn-outline-danger"> <i className='fa-regular fa-trash-can me-2'></i>Remove</button>
                </div>
                <div>
                  <button onClick={() => { updateMyCart(productItem.product._id, productItem.count + 1) }} className="btn btn-outline-success">+</button>
                  <span className='mx-2'>{productItem.count}</span>
                  <button onClick={() => { updateMyCart(productItem.product._id, productItem.count - 1) }} className="btn btn-outline-success">-</button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
