import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthProtectedRoute(myProps: any) {

    if (localStorage.getItem('userToken') == null) {
        return myProps.children
    } else {
        return <Navigate to={'/'} />
    }
    
}
