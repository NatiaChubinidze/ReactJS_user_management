import "../../styles/settings/UserDetails.css";
import Arrow from "../../assets/icons/down-arrow.png";
import ToggleButton from "../../shared/components/ToggleButton";
import React, { Component } from "react";

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-details-wrapper">
        <h3 className="user-details-h3">Details</h3>
        <div className="user-details-flex-box">
          <div className="user-details-toggleButton">
            <ToggleButton
              toggleChecked={this.props.user.status === "active" ? true : false}
              toggleState={this.props.toggleState}
              user={this.props.user}
            />
          </div>
          <p>
            The user is
            <span>
              {this.props.user.status === "active" ? "Active" : "Inactive"}
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
              defaultValue={this.props.user.name.split(" ")[0]}
            />
          </div>
          <div className="user-details-line">
            <label htmlFor="lastName">*Last Name</label>
            <input
              type="text"
              className="user-details-input user-details-lastName"
              id="lastname"
              defaultValue={this.props.user.name.split(" ")[1]}
            />
          </div>
          <div className="user-details-line">
            <label htmlFor="role">*Role</label>
            <div className="user-details-dropdown" id="role">
              <button className="user-details-dropbtn">
                {this.props.user.role}
              </button>
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
}

export default UserDetails;
