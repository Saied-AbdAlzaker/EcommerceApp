import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light mt-5 w-100 px-5 py-3">
      <strong className="block text-gray sm:text-2xl">
        Get The FreshCart App
      </strong>
      <p className="mt-2 text-gray">We will send you a link, open it on your phone to download the app</p>
      <form className="mt-6">
        <div className="position-relative">
          <label className="sr-only" htmlFor="email"> Email </label>
          <input className="form-control w-75 d-inline-block p-2" id="email" type="email" placeholder="Email" />
          <button className="position-absolute end-1 top-1 bg-main text-white rounded-3 p-2">
            Share App Link
          </button>
        </div>
      </form>

      <hr className='text-gray' />
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className="mx-3 text-center text-gray">
            Payment Partners
          </p>
          <i className="fa-brands fa-cc-paypal"></i>
          <i className="fa-brands fa-amazon-pay mx-2"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
        </div>
        <div className="d-flex">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube mx-2"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin mx-2"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-tiktok mx-2"></i>
        </div>
      </div>
      <hr className='text-gray' />
    </footer>
  )
}
