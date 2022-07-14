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


export function UseEffect () {

  const [name, setName] = useState('initial state')
  const [list, setList] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  function apiCall () {
    console.log('API CALLED!!! - FUNCTION INSIDE COMPONENT!')
  }

  // apiCall() // Executed on every render

  useEffect(() => {
    apiCall()  //Executed only on first render or if variable in array changes
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielrsp/repos')
      .then(response => response.json())
      .then(data => {
        setList(data.map((item: any) => item.full_name))
      })
  }, [])

  function handleAddItem () {
    setList((state) => [...list, 'new item'])
  }

  const filteredList = list.filter(item => item.includes(filter))
  /**
   * Como o onChange do input altera o estado, consequentemente 
   * ocorre novamente o fluxo de renderização, e a variável filteredList
   * obrigatoriamente será ATUALIZADA pois está SOLTA dentro do componente
   *
   * OBS: Aqui não é preciso criar um outro estado para armazenar os resultados
   * filtrados, pois eu teria que ATUALIZAR OUTRO ESTADO, OCASIONANDO 
   * OUTRA RENDERIZAÇÃO (ex: setFilteredList em um useEffect)
   * o que seria desnecessário
   
  !-> DIFICILMENTE UTILIZAMOS USE EFFECT PRA ATUALIZAR ESTADO DE FORMA SINCRONA!!!
  * */ 

  return (
    <>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
      <button onClick={handleAddItem}>ADD ITEM</button>

      <input
        type="text"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {
          filteredList.map((item: any) => <li>{item}</li>)
        }
      </ul>

    </>
  )
}