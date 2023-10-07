import { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  })

  const showDifferentPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "scream at the computer" })
    setPerson({ ...person, name: "susan", age: 12 })
    // setPerson("dang")
  }
  const { name, age, hobby } = person
  return (
    <div>
      {name && <h4>Name: {name}</h4>}
      {age && <h4>Age: {age}</h4>}
      {hobby && <h4>Enjoys: {hobby}</h4>}
      <button className="btn" onClick={showDifferentPerson}>
        Refresh
      </button>
    </div>
  )
}

export default UseStateObject
