import './userCaption.styles.scss';

const UserCaption = ({title, subtitle}) => {
      console.log(subtitle);
      console.log("object");
  return <div className="user-caption">
      <p className="title">{title}</p>
     { subtitle ? <p className="subtitle">{subtitle}</p> : null
}

      </div>;
};
export default UserCaption;
