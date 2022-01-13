import './userCaption.styles.scss';

const UserCaption = ({messages, subtitle}) => {
  return <div className="user-caption">
      <p className="title">{messages[0].from}</p>
     { subtitle ? <p className="subtitle">{messages[0].text.substr(0, 20)}</p> : null
}

      </div>;
};
export default UserCaption;
