import "./Header.scss";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="main-header">
      <div>Overview</div>
      <div className="login">
        <Link to='/authorisation'>Log in</Link>
      </div>
    </div>
  );
};

export default Header;
