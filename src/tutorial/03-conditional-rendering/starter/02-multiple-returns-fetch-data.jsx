import { useEffect, useState } from "react"
const url = "https://api.github.com/user1s/thisismairaj"

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const user = await response.json()
      setUser(user)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    setTimeout(() => {
      fetchData()
      setIsLoading(false)
    }, 3000)
  }, [])
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error</h2>
  }
  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Bio {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
