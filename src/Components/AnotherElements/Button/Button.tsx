import './Button.scss';
interface IButtonProps {
    children: React.ReactNode;
    url:string;
};

const Button = ({ children,url }: IButtonProps) => {

    return (
        <>
            <button onClick={() => console.log(url)} className="btn" >{children}</button>
        </>
    );
};

export default Button