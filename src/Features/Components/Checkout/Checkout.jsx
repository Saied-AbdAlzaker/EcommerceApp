import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../../Core/Context/CartContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

export default function Checkout() {
    let { checkoutPayment, getCart } = useContext(cartContext)
    let [errMesg, setErrMesg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [cartId, setCartId] = useState('')

    let { register, handleSubmit, formState: { errors } } = useForm();

    async function payment(val) {
        let data = await checkoutPayment(cartId, val)
        console.log(data);
        if (data.data.status == "success") {
            window.location = data.data.session.url
        }
    }

    useEffect(() => {
        (async () => {
            let { data } = await getCart()
            setCartId(data.cartId)
        })()
    }, [])

    return (
        <section className='signup my-3'>
            <h1 className='text-main text-center'>Payment Now</h1>
            <form onSubmit={handleSubmit(payment)}>
                <div className="row gy-2 w-50 bg-light shadow p-3 m-auto">
                    <div className="col-md-12">
                        <label htmlFor="urDetails">Details:</label>
                        <input type="text" className='form-control' id='urDetails' {...register("details", { require: true })} />
                        {errors.details && (
                            <span className='text-danger'>{errors?.email?.message}</span>
                        )}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="urPhone">Phone:</label>
                        <input type="tel" className='form-control' id='urPhone' {...register("phone", { require: true })} />
                        {errors.phone && (
                            <span className='text-danger'>{errors?.email?.message}</span>
                        )}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="urCity">City:</label>
                        <input type="tel" className='form-control' id='urCity' {...register("city", { require: true })} />
                        {errors.city && (
                            <span className='text-danger'>{errors?.email?.message}</span>
                        )}
                    </div>
                    <p className='text-danger'>{errMesg}</p>
                    <div className='text-end'>
                        {isLoading ?
                            <button className='btn bg-main text-light'><PulseLoader size={5} color="#fff" /></button> :
                            <button className='btn bg-main text-light'>Pay</button>}
                    </div>
                </div>
            </form>
        </section>
    )
}
