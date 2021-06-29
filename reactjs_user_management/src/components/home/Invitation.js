import React, { useState } from "react";
import "../../styles/home/Invitation.css";

function Invitation(props) {
    const [invitedUser, setInvitedUser]=useState({invitedUser: {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      }})
    
      const [formIsValid, setFormIsValid]=useState(false);
    function toggleVisibility() {
      
      }
      function  submitInvitation(event) {
        event.preventDefault();
        let userToAdd = {
          name: `${this.invitedUser.firstName} ${this.invitedUser.lastName}`,
          email: this.invitedUser.email,
          role: this.invitedUser.role,
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
        this.$emit("inviteUser", userToAdd);
        this.toggleVisibility();
        this.invitedUser = {
          firstName: "",
          lastName: "",
          email: "",
          role: "",
        };
      }
      function setRole(event) {
        if (event.target.tagName == "A") {
          document.getElementById("dropbtn").innerText = event.target.innerText;
          this.invitedUser.role = event.target.innerText.toLowerCase();
          console.log(this.invitedUser.role);
        }
      }
      function validateForm() {
        if (
          this.emailIsValid() &&
          this.firstNameIsValid() &&
          this.lastNameIsValid() &&
          this.roleIsValid()
        ) {
          this.formIsValid = true;
          return true;
        }
        this.formIsValid = false;
        return false;
      }
      function emailIsValid() {
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            this.invitedUser.email
          )
        ) {
          return true;
        }
        return false;
      }
      function firstNameIsValid() {
        if (this.invitedUser.firstName.length > 1) {
          return true;
        }
        return false;
      }
      function lastNameIsValid() {
        if (this.invitedUser.lastName.length > 1) {
          return true;
        }
        return false;
      }
      function roleIsValid() {
        if (this.invitedUser.role !== "") {
          return true;
        }
        return false;
      }
    

  return (
    <div className="invitation">
      <div className="invitation-box">
        <img
          src="../../assets/icons/cancel.png"
          className="cancel"
          onClick={toggleVisibility}
        />
        <h3>Invite New User</h3>
        <form>
          <div className="form-wrapper">
            <div className="line">
              <div className="icon">
                <img src="../../assets/icons/boy.png" className="img" />
              </div>
              <input
                type="text"
                className="firstName"
                placeholder="* First Name"
               
                required
              />
              <input
                type="text"
                className="lastName"
                placeholder="* Last Name"
                
                required
              />
            </div>
            <div className="line">
              <div className="icon">
                <img src="../../assets/icons/arroba.png" className="img" />
              </div>
              <input
                type="email"
                className="email"
                placeholder="* Email"
                
                required
              />
            </div>
            <div className="line">
              <div className="icon">
                <img src="../../assets/icons/role_key.png" />
              </div>
              <div className="dropdown">
                <button className="dropbtn" id="dropbtn" disabled>
                  * Role
                </button>
                <img src="../../assets/icons/down-arrow.png" className="arrow" />
                <div className="dropdown-content" onClick={setRole($event)}>
                  <a href="#">Admin</a>
                  <a href="#">User</a>
                </div>
              </div>
              <div className="invisible"></div>
            </div>

            <div className="final-section">
              <button
                className="submit-btn"
                onClick="submitInvitation"
                disabled="validateForm() ? false : true"
              >
                Send Invitation
              </button>
              <div
                className="info-div"
                className="validateForm() ? 'green-text' : 'red-text'"
              >
                {validateForm() ? "Good to go" : "Fill in all the fields"}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Invitation;
