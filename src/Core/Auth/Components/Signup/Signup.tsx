import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Register } from '../../Models/Auth';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH } from '../../../../Constants/END_POINTS';
import { emailValidation, nameValidation, passwordValidation, phoneValidation } from '../../../../Constants/VALIDATIONS';
import { PulseLoader } from 'react-spinners';

export default function Signup() {
  let [errMesg, setErrMesg] = useState(null)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirm, setShowConfirm] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  let { register, handleSubmit, watch, formState: { errors } } = useForm<Register>();

  const password = useRef({})
  password.current = watch("password", "");

  let submitForm = async (value: Register) => {
    try {
      setIsLoading(true)
      let { data } = await axios.post(AUTH.signup, value)
      setIsLoading(false)
      navigate('/signin')
    } catch (error: any) {
      setErrMesg(error.response.data.message)
      setIsLoading(false)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  const toggleConfirm = () => {
    setShowConfirm(!showConfirm)
  }

  return (
    <section className='signup my-3'>
      <h1 className='text-main text-center'>Register Now</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row gy-2 w-50 bg-light shadow p-3 m-auto">
          <div className="col-md-12">
            <label htmlFor="userName">Name:</label>
            <input type="text" className='form-control' id='userName' {...register("name", nameValidation)} />
            {errors.name && (
              <span className='text-danger'>{errors?.name?.message}</span>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="userEmail">Email:</label>
            <input type="email" className='form-control' id='userEmail' {...register("email", emailValidation)} />
            {errors.email && (
              <span className='text-danger'>{errors?.email?.message}</span>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="userPhone">Phone:</label>
            <input type="tel" className='form-control' id='userPhone' {...register("phone", phoneValidation)} />
            {errors.phone && (
              <span className='text-danger'>{errors?.phone?.message}</span>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="userPassword">Password:</label>
            <div className='position-relative'>
              <input type={showPassword ? 'password' : 'text'} className='form-control' id='userPassword' {...register("password", passwordValidation)} />
              <span onClick={togglePassword} className='position-absolute top-0 end-0 p-2 cursor-pointer'>
                {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
              </span>
            </div>
            {errors.password && (
              <span className='text-danger'>{errors?.password?.message}</span>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="userConfirm">New password:</label>

            <div className='position-relative'>
              <input type={showConfirm ? 'password' : 'text'} className='form-control' id='userConfirm' {...register("rePassword", {
                required: "Confirm password is required",
                validate: rePassword =>
                  rePassword === password.current || "The passwords do not match"
              })} />
              <span onClick={toggleConfirm} className='position-absolute top-0 end-0 p-2 cursor-pointer'>
                {showConfirm ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
              </span>
            </div>
            {errors.rePassword && (
              <span className='text-danger'>{errors?.rePassword?.message}</span>
            )}
          </div>
          <p className='text-danger'>{errMesg}</p>
          <div className='d-flex justify-content-between'>
            <p className="text-main">
              Already have an account?
              <Link className="underline ms-1 cursor-pointer" to="/signin">Signin</Link>
            </p>
            {isLoading ? <button className='btn bg-main text-light'><PulseLoader size={5} color="#fff" /></button>
              : <button className='btn bg-main text-light'>Signup</button>}
          </div>
        </div>
      </form>
    </section>
  )
}
