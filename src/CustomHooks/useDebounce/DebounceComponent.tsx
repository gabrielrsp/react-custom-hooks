import { useState } from "react"
import useDebounce from "./useDebounce"


//usefull to avoid multiple requests to an api on every click on a button
export default function DebounceComponent() {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)} >Increment</button>
    </div>
  )
}