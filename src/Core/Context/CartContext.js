import axios from "axios";
import { createContext, useState } from "react";
import { DASHBOARD } from "../../Constants/END_POINTS";


export let cartContext = createContext();

export default function CartContextProvider(props) {
    let [cartNumber, setCartNumber] = useState(0)
    let header = { token: localStorage.getItem('userToken') }

    // Add to cart
    function addToCart(id) {
        return axios.post(DASHBOARD.cart, {
            productId: id
        }, {
            headers: header
        })
    }
    // Get myCart
    function getCart(id) {
        return axios.get(DASHBOARD.cart, {
            headers: header
        })
    }
    // update myCart
    function updateCart(id, count) {
        return axios.put(`${DASHBOARD.cart}/${id}`, {
            count: count
        }, {
            headers: header
        })
    }
    // delete myCart
    function deleteCart(id) {
        return axios.delete(`${DASHBOARD.cart}/${id}`, {
            headers: header
        })
    }
    // Checkout
    function checkoutPayment(id, formData) {
        return axios.post(`${DASHBOARD.checkout}/${id}?url=http://localhost:3000`, {
            shippingAddress: formData
        },
            {
                headers: header
            })
    }

    return <cartContext.Provider value={{ addToCart, cartNumber, setCartNumber, getCart, deleteCart, updateCart, checkoutPayment }}>
        {props.children}
    </cartContext.Provider>
}