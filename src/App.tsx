import { useEffect, useRef, useState } from 'react'
import TimeoutComponent from './CustomHooks/useTimeout/TimeoutComponent'
import ToggleComponent from './CustomHooks/useToggle/ToggleComponent'

function App() {

  const [name, setName] = useState('initial state')
  const [count, setCount] = useState(0)

 // ----- REFS ------ //   
 /* Refs are usefull for: 
  * not cause additional re-renders
  * accessing dom elements without querySelector(#someTagId)
  * persisting values across renders without causing re-renders !!!!!!!
 */
  const renderCount = useRef(0) as any  // this returns just an object with a current property { current : 0 } 
  // WHEN WE UPDATE THAT current property of useRef, that's what gets persisted between different renders 
  // the property current from useRef is not monitored by the reconciliation algorithm !!!!!!!
  const inputRef = useRef() as any
  const prevName = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    // setCount(prevCount => prevCount + 1)  // infinite loop
  })


  // Storing previous value of a state
  useEffect(() => {
    prevName.current = name
  }, [name]) // só vai rodar quando for alterado, ou seja, na primeira esse useEffect não roda pois apenas inicializou


  function focus () {
   inputRef.current.focus()  // Ao passar inputRef na prop ref de uma tag, o valor de current = tag 
    // é como utilizar o document.querySelector para pegar a referencia de uma tag na dom
   
    //SAME AS
    // console.log(document.querySelector("#lei"))
    // document.querySelector<HTMLInputElement>("#lei")?.focus()
  }



  return (
    <>
      {/* <div className="App">
        <h1>ToggleComponent</h1>
        <ToggleComponent/>
        <h1>Timeout Component</h1>
        <TimeoutComponent/>
      </div> */}
    
      <hr />
      <strong>USE REF STUDIES</strong> <br/>

      <input  ref={inputRef}  id="lei" value={name} onChange={(e) => setName(e.target.value)} />
      <div>my name is {name} and it use to be {prevName.current} </div>

      <button onClick={focus}> FOCUS </button>

      <div>I rendered {renderCount.current} times</div>

    </>
  )
}

export default App
