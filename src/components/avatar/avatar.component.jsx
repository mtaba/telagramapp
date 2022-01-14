import './avatar.styles.scss';
const Avatar = ({imageUrl})=>{
    return (
      <img src={imageUrl? imageUrl : "./avatar/avatar.jpg"} alt="avatar" className="avatar" />
    )
}

export default Avatar;