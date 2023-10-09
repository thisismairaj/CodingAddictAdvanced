import { useState } from "react"

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("")
  // truthy
  const [name, setName] = useState("susan")
  const [user, setUser] = useState({ name: "john" })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>{text || "Default"}</h2>
      {!text && (
        <div>
          <h2>Name: {user.name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2>Divider</h2>

      {isEditing ? <SomeComponent name={user.name} /> : "You cant edit"}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return <button className="btn">Edit {name}</button>
}

export default ShortCircuitExamples
