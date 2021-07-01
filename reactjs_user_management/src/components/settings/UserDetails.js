import React from "react";
import "../../styles/settings/UserDetails.css";
import Arrow from "../../assets/icons/down-arrow.png";
import ToggleButton from "../../shared/components/ToggleButton";

function UserDetails (props) {
    return (
      <div className="user-details-wrapper">
        <h3 className="user-details-h3">Details</h3>
        <div className="user-details-flex-box">
          <div className="user-details-toggleButton">
            <ToggleButton
              toggleChecked={props.user.status === "active" ? true : false}
              toggleState={props.toggleState}
              user={props.user}
            />
          </div>
          <p>
            The user is
            <span>
              {props.user.status === "active" ? "Active" : "Inactive"}
            </span>
          </p>
        </div>
        <form className="user-details-form">
          <div className="user-details-line">
            <label htmlFor="firstName">*First Name</label>
            <input
              type="text"
              className="user-details-input user-details-firstName"
              id="firstName"
              defaultValue={props.user.name.split(" ")[0]}
            />
          </div>
          <div className="user-details-line">
            <label htmlFor="lastName">*Last Name</label>
            <input
              type="text"
              className="user-details-input user-details-lastName"
              id="lastname"
              defaultValue={props.user.name.split(" ")[1]}
            />
          </div>
          <div className="user-details-line">
            <label htmlFor="role">*Role</label>
            <div className="user-details-dropdown" id="role">
              <button className="user-details-dropbtn">
                {props.user.role}
              </button>
              <img src={Arrow} alt="Arrow" className="user-details-arrow" />
              <div className="user-details-dropdown-content">
                <li>Admin</li>
                <li>User</li>
              </div>
            </div>
          </div>
        </form>
        <button className="user-details-save">Save Changes</button>
      </div>
    );
  }


export default UserDetails;
