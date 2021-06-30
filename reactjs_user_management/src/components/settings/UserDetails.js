import "../../styles/settings/UserDetails.css";
import Arrow from '../../assets/icons/down-arrow.png';
import ToggleButton from "../../shared/components/ToggleButton";

function UserDetails(props) {
    function changeUserState() {
        if(props.user.status=='active'){
          props.user.status='disabled'
          } else {
            props.user.status='active';
            }
        console.log("changing the value",this.user);
        props.toggleState();
      }
  return (
    <div className="user-details-wrapper">
    <h3 className="user-details-h3">Details</h3>
    <div className="user-details-flex-box">
      <div className="user-details-toggleButton">
        <ToggleButton
          toggleChecked={props.user.status === 'active' ? true : false}
         onClick={changeUserState}
        />
      </div>
      <p>
        The user is
        <span>{ props.user.status === 'active' ? 'Active' : 'Inactive' }</span>
      </p>
    </div>
    <form className="user-details-form">
      <div className="user-details-line">
        <label htmlFor="firstName">*First Name</label>
        <input
          type="text"
          className="user-details-input user-details-firstName"
          id="firstName"
          
        />
      </div>
      <div className="user-details-line">
        <label htmlFor="lastName">*Last Name</label>
        <input type="text" className="user-details-input user-details-lastName" id="lastname"/>
      </div>
      <div className="user-details-line">
        <label htmlFor="role">*Role</label>
        <div className="user-details-dropdown" id="role">
          <button className="user-details-dropbtn">{ props.user.role }</button>
          <img src={Arrow} className="user-details-arrow" />
          <div className="user-details-dropdown-content">
            <a href="#">Admin</a>
            <a href="#">User</a>
          </div>
        </div>
      </div>
    </form>
    <button className="user-details-save">Save Changes</button>
  </div>
  );
}

export default UserDetails;
