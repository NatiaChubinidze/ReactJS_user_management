import React from "react";
import "../../styles/settings/Settings.css";
import SettingsHeader from "../settings/SettingsHeader";
import UserInfo from "../settings/UserInfo";
import UserDetails from "../settings/UserDetails";
import UserPermission from "../settings/UserPermission";

function Settings (props) {
    return (
      <div className="settings-about">
        <SettingsHeader />
        <div className="settings-flex-wrapper">
          <div className="settings-userInfo">
            <UserInfo user={props.activeUser} />
          </div>
          <div className="settings-userDetails">
            <UserDetails
              toggleState={props.toggleState}
              user={props.activeUser}
              modifyUserInArray={props.modifyUserInArray}
            />
          </div>
          <div className="settings-userPermissions">
            <UserPermission
              user={props.activeUser}
              toggleState={props.toggleState}
              modifyUserInArray={props.modifyUserInArray}
            />
          </div>
        </div>
      </div>
    );
  }


export default Settings;
