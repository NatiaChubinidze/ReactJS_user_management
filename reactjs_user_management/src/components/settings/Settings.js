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
        <div class="settings-flex-wrapper">
          <div class="settings-userInfo">
            <UserInfo user={this.props.activeUser} />
          </div>
          <div class="settings-userDetails">
            <UserDetails
              toggleState={this.props.toggleState}
              user={this.props.activeUser}
              modifyUserInArray={this.props.modifyUserInArray}
            />
          </div>
          <div class="settings-userPermissions">
            <UserPermission
              user={this.props.activeUser}
              toggleState={this.props.toggleState}
              modifyUserInArray={this.props.modifyUserInArray}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
