import './userCaption.styles.scss';

const UserCaption = ({title, subtitle}) => {
  return <div className="user-caption">
      <p className="title">{title}</p>
     { subtitle ? <p className="subtitle">{subtitle}</p> : null
}

      </div>;
};
export default UserCaption;
