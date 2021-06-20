import React, { useContext, useEffect } from 'react'
import { AppContext } from './_app'
import {  GoogleLogout } from 'react-google-login'
import router from 'next/router'

const Content:React.FC = () => {
  const { email,setEmail, name,setName,isLogin,setIsLogin } = useContext(AppContext)
  const onSuccess = () => {
    setEmail('')
    setName('')
    setIsLogin(false)
  }
  useEffect(() => {
    if(!isLogin){ router.push('/')}
  },[isLogin])
    return ( 
    <>
    <div className=" min-h-full flex justify-center items-center flex-wrap"> 
    <div className=" w-72 bg-background text-primary rounded-2xl p-6 my-6">
    <div className="w-full text-center mb-2"><h3 className="p-2">歡迎光臨：{name}</h3></div>
    <div className="w-full text-center mb-2"><h3 className="p-2">您現在是用<br /> {email} <br />信箱登入</h3></div>
    <div className="flex justify-center">
    <GoogleLogout
    clientId="848369820531-99mrj1ejd7i1qai3f9e0s0peuvkisbv7.apps.googleusercontent.com"
    buttonText="登出 Google 帳號"
    onLogoutSuccess={onSuccess}
    />
    </div>
    </div>
  </div>
  </>)
} 

export default Content