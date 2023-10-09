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
      {/* {if(text){"won't work"}} */}
      <h2>Falsy OR: {name || "hi"}</h2>
    </div>
  )
}

export default ShortCircuitExamples
