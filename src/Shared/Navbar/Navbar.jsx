import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../../Core/Context/TokenContext'
import { cartContext } from '../../Core/Context/CartContext'
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export default function Navbar() {
  let { userToken, setUserToken } = useContext(userContext)
  let { cartNumber, getCart, setCartNumber } = useContext(cartContext)
  const [open, setOpen] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    (async () => {
      let { data } = await getCart()
      setCartNumber(data.numOfCartItems)
    })()
  }, [])

  function logout() {
    localStorage.removeItem('userToken');
    setUserToken(null)
    setOpen(false)
    navigate('/signin')
  }

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand text-main" to="/"><i className="fa-solid fa-cart-shopping mx-1"></i>FreshCart</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {userToken !== null ?
              <>
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="products">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="categories">Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="brands">Brands</Link>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item d-flex justify-content-between align-items-center gap-4">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </li>
                  <li className="nav-item mx-3 position-relative">
                    <Link className="nav-link" to="cart">
                      <i className="fa-solid fa-cart-shopping text-main"></i>
                      <span className='badge bg-main text-light position-absolute bottom-50'>{cartNumber}</span></Link>
                  </li>
                  <li onClick={handleOpen} className="nav-item ms-3">
                    <span className="cursor-pointer">SignOut</span>
                  </li>
                </ul>
              </>
              : <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="signin">Signin</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="signup">Signup</Link>
                </li>
              </ul>}
          </div>
        </div>
      </nav>

      <Dialog open={open} onClose={handleClose} sx={{ padding: 3, width: '40%', margin: 'auto' }} >
        <DialogTitle>LOGOUT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure you want to log out ? if you are sure just click on log out
          </DialogContentText>
          <div className='d-flex justify-content-between mt-3'>
            <button onClick={handleClose} className='btn bg-main text-light'>Cancel</button>
            <button onClick={() => logout()} type='submit' className='btn bg-main text-light'>Logout</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
