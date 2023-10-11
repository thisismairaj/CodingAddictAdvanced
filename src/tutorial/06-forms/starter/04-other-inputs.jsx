import { useState } from "react"
const frameworks = ["react", "angular", "vue", "svelte"]
const OtherInputs = () => {
  const [framework, setFramework] = useState("react")
  const [shipping, setShipping] = useState(false)

  const frameworks = ["react", "vue", "angular", "swelte"]

  const handleShipping = (e) => {
    console.log(e.target.checked)
    setShipping(e.target.checked)
  }
  const handleFramework = (e) => {
    console.log(e.target.value)
    setFramework(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(framework, shipping)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <select
            id="framework"
            name="framework"
            onChange={handleFramework}
            value={framework}
          >
            {frameworks.map((option, index) => {
              return <option key={index}>{option}</option>
            })}
          </select>

          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
