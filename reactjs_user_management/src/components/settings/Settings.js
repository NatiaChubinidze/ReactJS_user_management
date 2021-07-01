import React, { Component } from "react";
import "../../styles/settings/Settings.css";
import SettingsHeader from "../settings/SettingsHeader";
import UserInfo from "../settings/UserInfo";
import UserDetails from "../settings/UserDetails";
import UserPermission from "../settings/UserPermission";

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="settings-about">
        <SettingsHeader />
        <div className="settings-flex-wrapper">
          <div className="settings-userInfo">
            <UserInfo user={this.props.activeUser} />
          </div>
          <div className="settings-userDetails">
            <UserDetails
              toggleState={this.props.toggleState}
              user={this.props.activeUser}
              modifyUserInArray={this.props.modifyUserInArray}
            />
          </div>
          <div className="settings-userPermissions">
            <UserPermission
              user={this.props.activeUser}
              toggleState={this.props.toggleState}
              modifyUserInArray={this.props.modifyUserInArray}
              user={this.props.activeUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
