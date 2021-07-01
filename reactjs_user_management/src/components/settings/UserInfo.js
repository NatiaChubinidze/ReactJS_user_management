import "../../styles/settings/UserInfo.css";
import profilePic from '../../assets/icons/profile-pic.png';
import key from '../../assets/icons/key.png';

function UserInfo(props) {
  return (
    <div className="user-info-wrapper">
    <div className="user-info-box">
      <img src={profilePic} alt="Profile" className="user-info-profile-pic" />
      <div className="user-info-admin-div">
        <img src={key} alt="Key"/>
      </div>
    </div>
    <span>Upload a Photo</span>
    <p className="user-info-name">{ props.user.name }</p>
    <p className="user-info-email">{ props.user.email }</p>
    <button className="user-info-submit-btn">Resend the invite</button>
  </div>
  );
}

export default UserInfo;
