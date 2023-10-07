import { useState } from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  const clearAllItems = () => {
    setPeople([])
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        )
      })}
      <button className="btn" onClick={clearAllItems}>
        Remove All
      </button>
    </div>
  )
}

export default UseStateArray
