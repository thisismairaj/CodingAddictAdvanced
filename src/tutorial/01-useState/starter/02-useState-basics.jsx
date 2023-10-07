import { useState } from "react"
import React from "react"

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <React.Fragment>
      <h2>Clicked {count} times</h2>
      <button className="btn" onClick={() => setCount(13 + 1)}>
        Click Me
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
