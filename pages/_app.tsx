import React, { useState, useContext, useReducer } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface ILogin {
    isLogin: boolean
    email: string
    name: string
}
const initialLogin = {
    isLogin: false,
    email: '',
    name: '',
}

const loginReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'isLogin':
            return { ...state, isLogin: action.data }
            break
        case 'email':
            return { ...state, email: action.data }
            break
        case 'name':
            return { ...state, name: action.data }
            break
        default:
            return state
    }
}

export const AppContext = React.createContext<{
    loginState: ILogin
    dispatch: React.Dispatch<any>
}>({ loginState: initialLogin, dispatch: () => null })

function MyApp({ Component, pageProps }: AppProps) {
    const [loginState, dispatch] = useReducer(loginReducer, initialLogin)

    return (
        <AppContext.Provider value={{ loginState, dispatch }}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AppContext.Provider>
    )
}
export default MyApp
