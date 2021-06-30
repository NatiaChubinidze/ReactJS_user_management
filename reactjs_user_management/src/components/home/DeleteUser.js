import "../../styles/home/DeleteUser.css";
import CancelIcon from '../../assets/icons/cancel.png';
import BoyIcon from '../../assets/icons/boy.png';

function DeleteUser(props) { 
  return (
    <div className={props.showDeletionWindow ? "delete" : 'd-none'}>
    <div className="delete-box">
      <img
        src={CancelIcon}
        className="delete-cancel"
        onClick={()=>props.toggleDeletionPopUp()}
      />
      <h3 className="delete-h3">Delete User</h3>

      <div className="delete-form-wrapper">
        <div className="delete-line">
          <div className="delete-icon">
            <img src={BoyIcon} />
          </div>
          <div className="delete-userInfo">
            <button className="delete-dropbtn">
              <span> { props.user.name } </span>
            </button>
          </div>
          <div className="delete-activeUser">
            <span>{
              props.user.status === "active" ? "Active User" : "Inactive User"
            }</span>
          </div>
        </div>

        <div className="delete-final-section">
          <button className="delete-user-btn" onClick={()=>props.deleteConcreteUser(props.user)}>Delete User</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DeleteUser;
