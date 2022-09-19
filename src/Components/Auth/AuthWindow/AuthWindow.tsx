import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './AuthWindow.scss';


interface IAuthWindow {
  children: React.ReactNode
}

const AuthWindow = ({ children }: IAuthWindow) => {
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
      </div>
      </>
  )
}


export default AuthWindow