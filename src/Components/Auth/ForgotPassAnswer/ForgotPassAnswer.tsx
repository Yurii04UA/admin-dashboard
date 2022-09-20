import React from 'react'
import { Link } from 'react-router-dom';
import AuthBodyTitle from '../AuthWindow/AuthBodyTitle';
import AuthWindow from '../AuthWindow/AuthWindow';

const ForgotPassAnswer = () => {
  return (
    <>
      <AuthWindow isFooter={false}>
         <AuthBodyTitle title='Forgot password?' subTitle='Link to change your password has been sent to provided email if we have it inside our system'/>
         <Link to="/reset-password"> Do you want to reset password? Click!</Link>
      </AuthWindow>
    </>
  )
}

export default ForgotPassAnswer