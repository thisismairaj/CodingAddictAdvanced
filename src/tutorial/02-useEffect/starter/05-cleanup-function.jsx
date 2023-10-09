import { useState, useEffect } from "react"

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log("render")
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
    const someFunc = () => {
      console.log("s")
    }
    window.addEventListener("scroll", someFunc)
    return () => {
      window.removeEventListener("scroll", someFunc)
    }
  }, [])
  return <h2>Toggled!</h2>
}

export default CleanupFunction
