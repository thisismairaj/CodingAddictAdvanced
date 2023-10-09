import { useState } from "react"

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)
  const toggleAlert = (alert) => {
    setShowAlert(!alert)
  }
  return (
    <div>
      <button className="btn" onClick={() => toggleAlert(showAlert)}>
        {showAlert ? "Un-alert" : "Alert"} Soldiers
      </button>
      <Alert status={showAlert} />
    </div>
  )
}

const Alert = ({ status }) => {
  if (!status) {
    return <div className="alert alert-success">Success, alarm turned off!</div>
  }
  return (
    <div className="alert alert-danger">
      Emergency rung! Alarm alarm alarm!!!
    </div>
  )
}

export default ToggleChallenge
