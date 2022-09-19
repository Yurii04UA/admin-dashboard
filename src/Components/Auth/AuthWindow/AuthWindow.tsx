import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './AuthWindow.scss';
import AuthWindowFooter from './AuthWindowFotter';


interface IAuthWindow {
  children: React.ReactNode
  isFooter:boolean
}

const AuthWindow = ({ children,isFooter }: IAuthWindow) => {
  const navigate = useNavigate()
  const redirectHandler = () => {
    navigate('/')
  }
  return (
      <>
      <div className='auth' onClickCapture={redirectHandler} />
        <div className='auth-box'>
        <Logo />
        {children}
        {isFooter && <AuthWindowFooter />}
      </div>
      
      </>
  )
}


export default AuthWindow