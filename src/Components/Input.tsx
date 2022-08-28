import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
}

// ForwardRefRenderFunction -> Encaminhamento da Ref pra dentro desse elemento

// recebe no generic 2 parametros: tipo do elemento que vai receber a ref e as props

// OBS: A ref aqui é passada como segundo parametro da função do componente!!!!

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...props}, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      
      <input 
        ref={ref} 
        type="text" 
        {...props}
      />


    </div>
  )
}

export default forwardRef(Input)