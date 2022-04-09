import { useState } from "react"

export default function useToggle(defaultValue: Boolean) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value?: Boolean) {
    setValue((currentValue: Boolean) =>  typeof(value) === 'boolean' ? value : !currentValue )
  }

  return [value, toggleValue]
}