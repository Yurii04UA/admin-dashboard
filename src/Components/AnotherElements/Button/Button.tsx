import { useNavigate } from 'react-router-dom';
import './Button.scss';
interface IButtonProps {
    children: React.ReactNode;
    url?:string;
    
};


const Button = ({ children,url }: IButtonProps) => {
    const navigate = useNavigate();
    const redirectHandler = (link:string) => {
        navigate(link)

    }
  
    return (
        <>
            <button onClick={() => url? redirectHandler(url): null} type='submit' className="btn" >{children}</button>
        </>
    );
};

export default Button;