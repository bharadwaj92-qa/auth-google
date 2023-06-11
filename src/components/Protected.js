import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

export default function Protected() {

    const { user } = UserAuth()


    useEffect(() => {

        console.log(user)

    }, [])


    return user ? < Outlet /> : <Navigate to='/signin' />
}
