import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import FunctionContextComponent from "../Components/FunctionContextComponent"
import { ThemeProvider } from "../CustomHooks/contextHooks/ThemeContext"
import DebounceComponent from "../CustomHooks/useDebounce/DebounceComponent"
import TimeoutComponent from "../CustomHooks/useTimeout/TimeoutComponent"
import ToggleComponent from "../CustomHooks/useToggle/ToggleComponent"
import UpdateEffectComponent from "../CustomHooks/useUpdateEffect/useUpdateEffectComponent"
import { customUseState } from "../TypeScript/generics"
import { testPromiseAll } from "../TypeScript/promises"


export function Closure () {


  const [likes, setLike] = useState(0)

  //HERE WE WILT TRY TO ADD DOUBLE LIKES IN ONE CLICK
  function handleAddLike () {

    /*
    setLike(likes + 1)  //the likes state context equals 0
    setLike(likes + 1) //on the same render, the likes state context ALSO equals 0 and not 1 (SAME EXECUTION CONTEXT!!!)
    // Tryng to update this state like this adding another 'setLike' will not work, because state is based on a context 
    */


    /*
      const auxLikes = likes +1  
      setLike(auxLikes + 1)
      // this will work // 2,4,8,10...
    */


    //this will work too (RECOMMENDED)
    setLike((state) => {  //state refers to the state that belongs to the 'set...'
      return state + 1
    })

    setLike((state) => {  
      return state + 1
    })

    
    /*
    on the last example above, using the function we create 
    a queue of updates of the state ON THE SAME CONTEXT
    */

    /*
    SEMPRE QUE FOR ATUALIZAR UMA INFORMAÇÃO, 
    A QUAL ELA DEPENDE DO VALOR QUE ELA TINHA ANTERIORMENTE (OU SEJA, DELA MESMA)
    UTILIZE ESSE PADRÃO DE FUNÇÕES, criando a FILA DE EXECUÇÃO para o MESMO CONTEXTO
    */


    
  }

  return (

    <>
      <h1>LIKES AMOUNT</h1>
      <h2>{likes}</h2>
      <button onClick={handleAddLike}>Add Like</button>
    </>
  )
}    


