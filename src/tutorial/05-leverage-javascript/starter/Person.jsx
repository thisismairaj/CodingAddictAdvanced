import avatar from "../../../assets/default-avatar.svg"

const Person = ({ name, nickName = "John Doe", images }) => {
  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar
  const img = images?.[0]?.small?.url || avatar
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h2>{name}</h2>
      <h4>Nickname: {nickName}</h4>
    </div>
  )
}
export default Person
