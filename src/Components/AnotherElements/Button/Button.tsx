import { useNavigate } from 'react-router-dom';
import './Button.scss';
interface IButtonProps {
    children: React.ReactNode;
    url:string;
    isCorrect:boolean;
};



const Button = ({ children,url,isCorrect }: IButtonProps) => {
    const navigate = useNavigate();
    const redirectHandler = (link:string ='/') => {
      if(isCorrect){
        navigate(link)
      }
    }
    return (
        <>
            <button type='submit' onClick={() => redirectHandler(url)} className="btn" >{children}</button>
        </>
    );
};

export default Button