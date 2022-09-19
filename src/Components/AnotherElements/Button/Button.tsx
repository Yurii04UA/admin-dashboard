import { useNavigate } from 'react-router-dom';
import './Button.scss';
interface IButtonProps {
    children: React.ReactNode;
};



const Button = ({ children }: IButtonProps) => {
  
    return (
        <>
            <button type='submit' className="btn" >{children}</button>
        </>
    );
};

export default Button