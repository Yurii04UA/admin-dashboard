import { Link } from 'react-router-dom';
import './AuthWindow.scss';

const AuthWindowFooter =() => {
    return(
        <div className="footer">
            <div>Don't have an account?</div>
            <Link className='reg-link' to='/registration'> Sing up</Link>
        </div>
    )
}

export default AuthWindowFooter;