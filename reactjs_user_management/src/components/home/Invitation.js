import React, { Component } from "react";
import "../../styles/home/Invitation.css";
import CancelIcon from "../../assets/icons/cancel.png";
import BoyIcon from "../../assets/icons/boy.png";
import ArrobaIcon from "../../assets/icons/arroba.png";
import KeyIcon from "../../assets/icons/role_key.png";
import ArrowIcon from "../../assets/icons/down-arrow.png";

class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    };
    this.submitInvitation = this.submitInvitation.bind(this);
    this.setRole = this.setRole.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.emailIsValid = this.emailIsValid.bind(this);
    this.firstNameIsValid = this.firstNameIsValid.bind(this);
    this.lastNameIsValid = this.lastNameIsValid.bind(this);
    this.roleIsValid = this.roleIsValid.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleFirstnameChange(event) {
    this.setState({ firstName: event.target.value });
  }
  handleLastnameChange(event) {
    this.setState({ lastName: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  submitInvitation(event) {
    event.preventDefault();
    let userToAdd = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      role: this.state.role,
      id: Math.round(Math.random() * 1000),
      status: "active",
      per_group_1: {
        permission_11: "true",
        permission_12: "true",
        permission_13: "true",
        permission_14: "false",
        permission_15: "false",
      },
      per_group_2: {
        permission_16: "true",
        permission_17: "true",
        permission_18: "true",
      },
      per_group_3: {
        permission_19: "true",
        permission_20: "true",
        permission_21: "true",
      },
    };

    console.log("add this user", userToAdd);
    this.props.addNewUser(userToAdd);
    this.props.toggleAddUsersVisibility();
    this.setState({
      firstName: "",
      lastName: "",
      status: "",
      role: "",
    });
  }
  setRole(event) {
    if (event.target.tagName == "A") {
      document.getElementById("dropbtn").innerText = event.target.innerText;
      this.setState({ role: event.target.innerText.toLowerCase() });
    };
    const ans=this.emailIsValid();
    console.log(ans);
  }
  validateForm() {
    if (
      this.emailIsValid() &&
      this.firstNameIsValid() &&
      this.lastNameIsValid() &&
      this.roleIsValid()
    ) {
      return true;
    }

    return false;
  }
  emailIsValid() {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email
      )
    ) {
      return true;
    }
    return false;
  }
  firstNameIsValid() {
    if (this.state.firstName.length > 1) {
      return true;
    }
    return false;
  }
  lastNameIsValid() {
    if (this.state.lastName.length > 1) {
      return true;
    }
    return false;
  }
  roleIsValid() {
    if (this.state.role !== "") {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className={this.props.showAddUsers ? "invitation-invite" : "d-none"}>
        <div className="invitation-box-invite">
          <img
            src={CancelIcon}
            className="invitation-cancel"
            onClick={() => this.props.toggleAddUsersVisibility()}
          />
          <h3 className="invitation-h3">Invite New User</h3>
          <form className="invitation-form">
            <div className="invitation-form-wrapper">
              <div className="invitation-line">
                <div className="invitation-icon">
                  <img src={BoyIcon} className="invitation-img" />
                </div>
                <input
                  type="text"
                  className="input invitation-firstName"
                  placeholder="* First Name"
                  onChange={this.handleFirstnameChange}
                  required
                />
                <input
                  type="text"
                  className="input invitation-lastName"
                  placeholder="* Last Name"
                  onChange={this.handleLastnameChange}
                  required
                />
              </div>
              <div className="invitation-line">
                <div className="invitation-icon">
                  <img src={ArrobaIcon} className="invitation-img" />
                </div>
                <input
                  type="email"
                  className="input invitation-email"
                  placeholder="* Email"
                  onChange={this.handleEmailChange}
                  required
                />
              </div>
              <div className="invitation-line">
                <div className="invitation-icon">
                  <img src={KeyIcon} />
                </div>
                <div className="invitation-dropdown">
                  <button className="invitation-dropbtn" id="dropbtn" disabled>
                    * Role
                  </button>
                  <img src={ArrowIcon} className="invitation-arrow" />
                  <div
                    className="invitation-dropdown-content"
                    onClick={this.setRole}
                  >
                    <a href="#">Admin</a>
                    <a href="#">User</a>
                  </div>
                </div>
                <div className="invitation-invisible"></div>
              </div>

              <div className="invitation-final-section">
                <button
                  className="invitation-submit-btn"
                  onClick={this.submitInvitation}
                  disabled={this.validateForm() ? false : true}
                >
                  Send Invitation
                </button>
                <div
                  className={
                    this.validateForm()
                      ? "invitation-info-div green-text"
                      : "invitation-info-div red-text"
                  }
                >
                  {this.validateForm()
                    ? "Good to go"
                    : "Fill in all the fields"}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Invitation;
