import React, { useState,useEffect } from "react";
import "../../styles/home/Invitation.css";
import CancelIcon from '../../assets/icons/cancel.png';
import BoyIcon from '../../assets/icons/boy.png';
import ArrobaIcon from '../../assets/icons/arroba.png';
import KeyIcon from '../../assets/icons/role_key.png';
import ArrowIcon from '../../assets/icons/down-arrow.png';

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
          name: `${invitedUser.firstName} ${invitedUser.lastName}`,
          email: invitedUser.email,
          role: invitedUser.role,
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
      props. addNewUser(userToAdd);
        toggleVisibility();
        // setInvitedUser({ invitedUser:{
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   role: "",
        // }});
       
      }
      function setRole(event) {
        if (event.target.tagName == "A") {
          document.getElementById("dropbtn").innerText = event.target.innerText;
          // setInvitedUser(event.target.innerText.toLowerCase());
          // invitedUser.role = event.target.innerText.toLowerCase();
          console.log(this.invitedUser.role);
        }
      }
      function validateForm() {
        if (
         emailIsValid() &&
          firstNameIsValid() &&
          lastNameIsValid() &&
          roleIsValid()
        ) {
          // setFormIsValid(true)
        //  formIsValid = true;
          return true;
        }
        // setFormIsValid(false);
        // formIsValid = false;
        return false;
      }
      function emailIsValid() {
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            invitedUser.email
          )
        ) {
          return true;
        }
        return false;
      }
      function firstNameIsValid() {
        if (invitedUser.firstName.length > 1) {
          return true;
        }
        return false;
      }
      function lastNameIsValid() {
        if (invitedUser.lastName.length > 1) {
          return true;
        }
        return false;
      }
      function roleIsValid() {
        if (invitedUser.role !== "") {
          return true;
        }
        return false;
      }
    


  return (
    <div className="invitation-invite">
      <div className="invitation-box-invite">
        <img
          src={CancelIcon}
          className="invitation-cancel"
          onClick={toggleVisibility}
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
               
                required
              />
              <input
                type="text"
                className="input invitation-lastName"
                placeholder="* Last Name"
                
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
                <div className="invitation-dropdown-content" onClick={setRole}>
                  <a href="#">Admin</a>
                  <a href="#">User</a>
                </div>
              </div>
              <div className="invitation-invisible"></div>
            </div>

            <div className="invitation-final-section">
              <button
                className="invitation-submit-btn"
                onClick={submitInvitation}
                disabled={validateForm() ? false : true}
              >
                Send Invitation
              </button>
              <div
                className={validateForm() ? 'invitation-info-div green-text' : 'invitation-info-div red-text'}
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
