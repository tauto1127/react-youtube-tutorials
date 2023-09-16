import React from 'react'

interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    //ユニオン型を使うことで、使える文字列を制限できる！
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
  )
}

export default Button