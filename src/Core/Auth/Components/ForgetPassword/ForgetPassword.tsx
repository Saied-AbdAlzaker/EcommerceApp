import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH } from '../../../../Constants/END_POINTS';
import axios from 'axios';
import { emailValidation, resetCodeValidation } from '../../../../Constants/VALIDATIONS';
import { ForgetPass, ResetCode } from '../../Models/Auth';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PulseLoader } from 'react-spinners';

export default function ForgetPassword() {
  let [errMesg, setErrMesg] = useState(null)
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  let { register, handleSubmit, formState: { errors } } = useForm<ForgetPass>({ mode: "onBlur" });
  let { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm<ResetCode>({ mode: "onBlur" });

  let submitForm = async (value: ForgetPass) => {
    try {
      setIsLoading(true)
      let { data } = await axios.post(AUTH.forgetPassword, value)
      setIsLoading(false)
      setOpen(true);
    }
    catch (error: any) {
      setErrMesg(error.response.data.message)
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  let submitCode = async (value: ResetCode) => {
    try {
      setIsLoading(true)
      let { data } = await axios.post(AUTH.verifyCode, value)
      setOpen(false);
      if (data.status === 'Success') {
        setIsLoading(false)
        navigate('/resetPassword')
      }
    } catch (error: any) {
      setErrMesg(error.response.data.message)
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className='signup my-3'>
        <h1 className='text-main text-center'>Forget Password!</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="row gy-2 w-50 bg-light shadow p-3 m-auto">
            <div className="col-md-12">
              <label htmlFor="userEmail">Email:</label>
              <input type="email" className='form-control' id='userEmail' {...register("email", emailValidation)} />
              {errors.email && (
                <span className='text-danger'>{errors?.email?.message}</span>
              )}
            </div>
            <p className='text-danger'>{errMesg}</p>
            <div className='d-flex justify-content-between'>
              <p className="text-main">
                Already have an account?
                <Link className="underline ms-1 cursor-pointer" to="/signin">Signin</Link>
              </p>
              {isLoading ?
                <button type='submit' className='btn bg-main text-light'><PulseLoader size={5} color="#fff" /></button>
                :
                <button type='submit' className='btn bg-main text-light'>Send</button>
              }
            </div>
          </div>
        </form>
      </section>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ٍVerify Code</DialogTitle>
        <DialogContent sx={{ padding: 5 }}>
          <DialogContentText>
            To subscribe to this website, please enter your code here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit1(submitCode)}>
            <label htmlFor="userCode">Code:</label>
            <input type="text" className='form-control' id='userCode' {...register1("resetCode", resetCodeValidation)} />
            {errors1.resetCode && (
              <span className='text-danger'>{errors1?.resetCode?.message}</span>
            )}

            <p className='text-danger'>{errMesg}</p>
            <div className='d-flex justify-content-between'>
              <button onClick={handleClose} className='btn bg-main text-light'>Cancel</button>
              {isLoading ?
                <button type='submit' className='btn bg-main text-light'><PulseLoader size={5} color="#fff" /></button>
                :
                <button type='submit' className='btn bg-main text-light'>Send</button>
              }
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>

  )
}
