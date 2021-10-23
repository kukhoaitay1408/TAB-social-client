// libs
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
// components
import LoginForm from './Form'
import AuthPage from '../AuthPage'
// models
import { LoginAccount, LoginGoogle } from 'Models'
// hooks
import { useGetAuth, useLogin, useLoginWithGoogle } from '../hooks'
// constants
import { navName } from 'constants/navName'

const Login: React.FC = () => {
  const history = useHistory()

  const [onFetch] = useLogin()

  const [onLoginGoogle] = useLoginWithGoogle()

  const { token, isLoading, user } = useGetAuth()

  const handleSubmitForm = (data: LoginAccount) => {
    onFetch(data)
  }

  const handleLoginGoogle = (data: LoginGoogle) => {
    onLoginGoogle(data)
  }

  useEffect(() => {
    if (token) {
      if (user?.password) {
        history.push(navName.HOME)
      } else {
        history.push(navName.ADD_PASSWORD)
      }
    }
  }, [token, history])

  return (
    <AuthPage>
      <LoginForm
        handleSubmitForm={handleSubmitForm}
        handleLoginGoogle={handleLoginGoogle}
        title="Đăng nhập"
        text="Chào mừng bạn đã đến với TAB !"
        isLoading={isLoading}
      />
    </AuthPage>
  )
}

export default Login
