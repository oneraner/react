import React, { useState,useContext, useReducer  } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Header  from '../components/Header'
import Footer from '../components/Footer'

interface ILogin {
  isLogin:boolean,
  email:string,
  name:string,
  setEmail:any,
  setName:any,
  setIsLogin:any
}
const initialLogin = {
  isLogin:false,
  email:'',
  name:'',
  setEmail: () =>{},
  setName: () =>{},
  setIsLogin:() =>{}
}

export const AppContext = React.createContext<ILogin>(initialLogin);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin,setIsLogin] = useState(false)
  const [email, setEmail] = useState('null')
  const [name, setName] = useState('null')

  return(
  <AppContext.Provider value={{email, setEmail,name, setName,isLogin,setIsLogin}}>
    <Header/>
    <Component {...pageProps} />
    <Footer />
  </AppContext.Provider>)
}
export default MyApp
