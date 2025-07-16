import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH } from '../../../../Constants/END_POINTS';
import { ResetPass } from '../../Models/Auth';
import { emailValidation, passwordValidation } from '../../../../Constants/VALIDATIONS';
import { PulseLoader } from 'react-spinners';

export default function ResetPassword() {
  let [errMesg, setErrMesg] = useState(null)
  const [showPassword, setShowPassword] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  let { register, handleSubmit, formState: { errors } } = useForm<ResetPass>({ mode: "onBlur" });

  let submitForm = async (value: ResetPass) => {
    try {
      setIsLoading(true)
      let { data } = await axios.put(AUTH.resetPassword, value)
      setIsLoading(false)
      navigate('/signin')
    }
    catch (error: any) {
      setErrMesg(error.response.data.message)
      setIsLoading(false)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <section className='signup my-3'>
      <h1 className='text-main text-center'>Reset Password Now</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row gy-2 w-50 bg-light shadow p-3 m-auto">
          <div className="col-md-12">
            <label htmlFor="userEmail">Email:</label>
            <input type="email" className='form-control' id='userEmail' {...register("email", emailValidation)} />
            {errors.email && (
              <span className='text-danger'>{errors?.email?.message}</span>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="userPassword">New Password:</label>
            <div className='position-relative'>
              <input type={showPassword ? 'password' : 'text'} className='form-control' id='userPassword' {...register("newPassword", passwordValidation)} />
              <span onClick={togglePassword} className='position-absolute top-0 end-0 p-2 cursor-pointer'>
                {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
              </span>
            </div>
            {errors.newPassword && (
              <span className='text-danger'>{errors?.newPassword?.message}</span>
            )}
          </div>
          <p className='text-danger'>{errMesg}</p>
          <div className='text-end'>
            {isLoading ? <button className='btn bg-main text-light'><PulseLoader size={5} color="#fff" /></button>
              : <button className='btn bg-main text-light'>Save</button> }
          </div>
        </div>
      </form>
    </section>
  )
}
