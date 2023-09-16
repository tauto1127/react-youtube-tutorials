import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}//文字列だけだったら、型はstringでいい
//ReactNodeだと、HTML要素を渡すことができる

const Alert = ({children}: Props) => {
    return ( 
        <div className="alert alert-primary">{children}</div>
    )
}
export default Alert;