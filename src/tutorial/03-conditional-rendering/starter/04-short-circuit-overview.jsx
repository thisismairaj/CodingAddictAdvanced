import { useState } from "react"

const ShortCircuitOverview = () => {
  const [name, setName] = useState("")
  const [text, setText] = useState("susan")
  return (
    <div>
      {/* {if(text){"won't work"}} */}
      <h2>Falsy &&: {name && "hi"}</h2>
      <h2>Falsy OR: {name || "hi"}</h2>
      <h2>Truthy &&: {text && "hi"}</h2>
      <h2>Truthy OR: {text || "hi"}</h2>
    </div>
  )
}
export default ShortCircuitOverview
