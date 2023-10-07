import { useState } from "react"

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  })

  const showDifferentPerson = () => {
    // setPeople({ name: "john", age: 28, hobby: "scream at the computer" })
    setPeople({ ...people, name: "susan", age: 12 })
  }

  return (
    <div>
      <h4>{people.name}</h4>
      <h4>{people.age}</h4>
      <h4>Enjoys: {people.hobby}</h4>
      <button className="btn" onClick={showDifferentPerson}>
        Refresh
      </button>
    </div>
  )
}

export default UseStateObject
