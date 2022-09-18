import Logo from '../../Logo/Logo';
import './AuthWindow.scss';


interface IAuthWindow{
   children: React.ReactNode
}

const AuthWindow = ({children}: IAuthWindow) => {
   return (
      <div className='auth'>
        <div className='auth-box'>
          <Logo />
          {children}
        </div>
      </div>
    )
}


export default AuthWindow