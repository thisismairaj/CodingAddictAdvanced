import { useEffect, useState } from "react"

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  const manageLogin = () => {
    if (!isLogin) {
      setUser({ name: "John" })
      setIsLogin(true)
      return
    }
    setUser(null)
    setIsLogin(false)
  }

  return (
    <div>
      <button className="btn" onClick={() => manageLogin()}>
        {isLogin ? "Log Out" : "Log In"}
      </button>
      {isLogin ? (
        <div>
          <h2>You are logged in, {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>You are not logged.</h2>
        </div>
      )}
    </div>
  )
}

export default UserChallenge
