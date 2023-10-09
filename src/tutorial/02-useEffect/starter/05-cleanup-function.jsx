import { useState, useEffect } from "react"

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <SecondComponent />}
    </div>
  )
}

const SecondComponent = () => {
  useEffect(() => {
    console.log("this interesting")
  }, [])
  return <h2>Toggled!</h2>
}

export default CleanupFunction
