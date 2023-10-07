import { useState } from "react"

const ErrorExample = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1922",
    color: "blue",
  })

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, brand: "Tesla" }
    })
  }

  return (
    <div>
      <h2>{car.brand}</h2>
      <button type="button" className="btn" onClick={updateColor}>
        Click
      </button>
    </div>
  )
}

export default ErrorExample
