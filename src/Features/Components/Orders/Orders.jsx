import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DASHBOARD } from '../../../Constants/END_POINTS'
import { jwtDecode } from 'jwt-decode'

export default function Orders() {
  let [orders, setOrders] = useState([])

  async function getAllOrders(id) {
    let { data } = await axios.get(`${DASHBOARD.orders}/${id}`)
    setOrders(data)
    console.log(data);

  }

  useEffect(() => {
    let { id } = jwtDecode(localStorage.getItem('userToken'))
    console.log(id);

    getAllOrders(id)
  }, [])

  return (
    <div className='container'>
      <h2>Your Orders</h2>
      {orders.map((order) => {
        return <div className='shadow-md my-3 p-3' key={order.id}>
          <div className="d-flex justify-content-center">
            <h2 className='fw-bold'>#{order.id}</h2>
            <h4 className='text-blue mx-4'>Processing</h4>
          </div>
          <p>You have ordered {order.cartItems.length} items.</p>
          <div className="d-flex">
            {order.cartItems.map((item) => {
              return <div className='d-flex flex-column shadow-md'>
                <img key={item.id} src={item.product.imageCover} style={{ width: 150 }} alt={item.product.title} className='mx-1 p-1 shadow-md' />
                <p>{item.product.title.split(" ").slice(0,2).join(" ")}</p>
              </div>
            })}
          </div>
          <hr />
          <p><strong>Total amount: </strong>{order.totalOrderPrice} EGP</p>
        </div>
      })}
    </div>
  )
}
