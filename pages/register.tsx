import React, { useContext, useEffect } from 'react'
import router from 'next/router'
import { GoogleLogin } from 'react-google-login'
import { AppContext } from './_app'

const refreshSetToken = async (res: any) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse()
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
    console.log('newAuthRes', newAuthRes)
    console.log('newAuthResToken', newAuthRes.id_token)
    setTimeout(refreshToken, refreshTiming)
  }

  setTimeout(refreshToken, refreshTiming)
}

const Register = () => {
  const { setEmail, setName, isLogin, setIsLogin } = useContext(AppContext)

  const responseSuccess = (res: any) => {
    setEmail(res.profileObj.email)
    setName(res.profileObj.name)
    setIsLogin(true)
    router.push('content')
    refreshSetToken(res)
  }

  const responseFailure = (res: any) => {
    console.log('loginFailure', res)
    setEmail('')
    setName('')
    setIsLogin(false)
  }

  useEffect(() => {
    if (isLogin) {
      router.push('/content')
    }
  }, [isLogin])
  return (
    <>
      <div className=" w-72 bg-background text-primary rounded-2xl p-6 my-6">
        <p> E-mail</p>
        <input className="w-full border-second border-2 p-2 mb-2" placeholder="請輸入E-mail" />
        <p> Password</p>
        <input className="w-full border-second border-2 p-2 mb-2" placeholder="請輸入密碼" />
        <div className="flex justify-center mb-2 ">
          <button
            className=" w-6/12 h-9 bg-primary text-text rounded-md p-2"
            onClick={() => {
              alert('目前不提供註冊')
            }}
          >
            註冊
          </button>
        </div>
        <div className=" flex justify-center mb-2">
          <GoogleLogin
            clientId="848369820531-99mrj1ejd7i1qai3f9e0s0peuvkisbv7.apps.googleusercontent.com"
            buttonText="使用 Google 帳號登入"
            onSuccess={responseSuccess}
            onFailure={responseFailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        </div>
        <div className="text-center">Tips:只能用 Google 帳號登入</div>
      </div>
    </>
  )
}
export default Register
