import './userCaption.styles.scss';

const UserCaption = ({messages}) => {
    console.log(messages);
  return <div className="user-caption">
      <p className="title">{messages[0].from}</p>
      <p className="subtitle">{messages[0].text.substr(0, 20)}</p>


      </div>;
};
export default UserCaption;
