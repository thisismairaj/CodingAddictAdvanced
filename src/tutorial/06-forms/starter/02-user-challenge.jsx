import { useState } from "react"
import { data } from "../../../data"

const UserChallenge = () => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return

    const fakeId = Date.now()

    const newUser = { id: fakeId, name }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName("")
  }

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Registered Users</h2>
      {users.map((person, index) => {
        return (
          <div key={index}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removeUser(person.id)}>
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
