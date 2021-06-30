import React, { Component } from "react";
import "../../styles/settings/UserPermission.css";
import Arrow from "../../assets/icons/permission_arrow.png";
import ToggleButton from "../../shared/components/ToggleButton";

class UserPermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission_1_visibility: false,
      permission_2_visibility: false,
      permission_3_visibility: false,
      permission_group_1: true,
      permission_group_2: true,
      permission_group_3: true,
      superAdmin: false,
    };
    this.setPermissionGroupStatus();
    this.setSuperAdmin();
  }
  togglePermissionOne() {
    this.permission_1_visibility = !this.permission_1_visibility;
  }
  togglePermissionTwo() {
    this.permission_2_visibility = !this.permission_2_visibility;
  }
  togglePermissionThree() {
    this.permission_3_visibility = !this.permission_3_visibility;
  }
  toggleSuperAdmin() {
    this.setState((prevState) => {
      return { superAdmin: !prevState.superAdmin };
    });

    console.log("toggle super admin", this.superAdmin);
    if (this.state.superAdmin == true) {
      this.setState({
        permission_group_1: true,
        permission_group_2: true,
        permission_group_3: true,
      });
    } else {
      this.setState({
        permission_group_1: false,
        permission_group_2: false,
        permission_group_3: false,
      });
    }
    this.setPermissions(this.props.user);
    this.props.modifyUserInArray();
  }
  toggleGroupPermission(group) {
    switch (group) {
      case "group_1":
        //   this.setState(prevState=>{
        //       return {permission_group_1:!prevState.permission_group_1}
        //   })
        
        this.setPermissions();
        this.setSuperAdmin();
        return;

      case "group_2":
        // this.setState(prevState=>{
        //     return {permission_group_2:!prevState.permission_group_2}
        // })       
        this.setPermissions();
        this.setSuperAdmin();
        return;
      case "group_3":
        // this.setState(prevState=>{
        //     return {permission_group_3:!prevState.permission_group_3}
        // })
        this.setPermissions();
        this.setSuperAdmin();
        return;
    }
    this.setSuperAdmin();
    this.props.modifyUserInArray();
  }
  togglePermissions(permissionName, permission_group) {
    // if (this.props.user[permission_group][permissionName] == "true") {
    //   this.props.user[permission_group][permissionName] = "false";
    // } else {
    //   this.props.user[permission_group][permissionName] = "true";
    // }
    this.setPermissionGroupStatus();
    this.setSuperAdmin();
    this.props.modifyUserInArray();
  }
  setSuperAdmin() {
    if (
      this.state.permission_group_1 &&
      this.state.permission_group_2 &&
      this.state.permission_group_3
    ) {
    //   this.setState({ superAdmin: true });
    } else {
    //   this.setState({ superAdmin: false });
    }
  }
  setPermissionGroupStatus() {
    console.log("set permission group status");
    // this.setState({
    //   permission_group_1: true,
    //   permission_group_2: true,
    //   permission_group_3: true,
    // });

    for (const item in this.props.user.per_group_1) {
      if (this.props.user.per_group_1[item] == "false") {
        this.setState({ permission_group_1: false });
      }
    }

    for (const item in this.props.user.per_group_2) {
      if (this.props.user.per_group_2[item] == "false") {
        this.setState({ permission_group_2: false });
      }
    }

    for (const item in this.props.user.per_group_3) {
      if (this.props.user.per_group_3[item] == "false") {
        this.setState({ permission_group_3: false });
      }
    }
  }
  setPermissions() {
    console.log("set permissions");
    if (this.state.permission_group_1 == true) {
      for (const item in this.props.user.per_group_1) {
        /////////////////////////////
        this.props.user.per_group_1[item] = "true";
      }
    } else {
      for (const item in this.props.user.per_group_1) {
        //////////////////////////////
        this.props.user.per_group_1[item] = "false";
      }
    }
    if (this.state.permission_group_2 == true) {
      for (const item in this.props.user.per_group_2) {
        /////////
        this.props.user.per_group_2[item] = "true";
      }
    } else {
      for (const item in this.props.user.per_group_2) {
        //////////
        this.props.user.per_group_2[item] = "false";
      }
    }
    if (this.state.permission_group_3 == true) {
      for (const item in this.props.user.per_group_3) {
        ///////////////
        this.props.user.per_group_3[item] = "true";
      }
    } else {
      for (const item in this.state.user.per_group_3) {
        ///////////////
        this.state.user.per_group_3[item] = "false";
      }
    }
  }

  render() {
    return (
      <div className="user-permission-wrapper">
        <h3 className="user-permission-h3">Permissions</h3>
        <span className="user-permission-role-title">{this.props.user.role}</span>
        <div className="user-permission-super-admin">
          <p className="user-permission-p">Super Admin</p>
          <div className="user-permission-toggleBtn">
            <ToggleButton
              toggleChecked={this.state.superAdmin == true ? true : false}
              onClick={this.toggleSuperAdmin}
            />
          </div>
        </div>
        <hr className="hr"/>

        <div className="user-permission-permission_group">
          <div className="user-permission-title-line">
            <img className="user-permission-img" src={Arrow} />
            <div className="user-permission-permission-title">
              <button className="user-permission-dropbtn" onClick={this.togglePermissionOne}>
                Permission Group 1
              </button>
            </div>
            <div className="user-permission-toggleBtn">
              <ToggleButton
                toggleChecked={this.state.permission_group_1 ? true : false}
                onClick={this.toggleGroupPermission("group_1")}
              />
            </div>
          </div>
          <div className="user-permission-dropdown-content">
            <div
              className="user-permission-flex-box"
              //   v-for="(value, name) in user.per_group_1"
              //   :key="value"
            >
              <div className="user-permission-flex-wrapper">
                <div className="user-permission-circle"></div>
                <p className="user-permission-p">{"name"}</p>
              </div>
              <div className="user-permission-toggleBtn">
                <ToggleButton
                  toggleChecked={"value" == "true" ? true : false}
                  onClick={this.togglePermissions("name", "per_group_1")}
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="hr"/>
        <div className="user-permission-permission_group">
          <div className="user-permission-title-line">
            <img className="user-permission-img" src={Arrow} />
            <div className="user-permission-permission-title">
              <button className="user-permission-dropbtn" onClick={this.togglePermissionTwo}>
                Permission Group 2
              </button>
            </div>
            <div className="user-permission-toggleBtn">
              <ToggleButton
                toggleChecked={this.state.permission_group_2 === true ? true : false}
                onClick={this.toggleGroupPermission("group_2")}
              />
            </div>
          </div>
          <div className="user-permission-dropdown-content">
            <div className="user-permission-flex-box">
              <div className="user-permission-flex-wrapper">
                <div className="user-permission-circle"></div>
                <p className="user-permission-p">{"name"}</p>
              </div>
              <div className="user-permission-toggleBtn">
                <ToggleButton
                  toggleChecked={"value" == "true" ? true : false}
                  onClick={this.togglePermissions("name", "per_group_2")}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr"/>
        <div className="user-permission-permission_group">
          <div className="user-permission-title-line">
            <img className="user-permission-img" src={Arrow} />
            <div className="user-permission-permission-title">
              <button className="user-permission-dropbtn" onClick={this.togglePermissionThree}>
                Permission Group 3
              </button>
            </div>
            <div className="user-permission-toggleBtn">
              <ToggleButton
                toggleChecked={this.state.permission_group_3 ? true : false}
                onClick={this.toggleGroupPermission("group_3")}
              />
            </div>
          </div>
          <div className="user-permission-dropdown-content">
            <div className="user-permission-flex-box">
              <div className="user-permission-flex-wrapper">
                <div className="user-permission-circle"></div>
                <p className="user-permission-p">{"name"}</p>
              </div>
              <div className="user-permission-toggleBtn">
                <ToggleButton
                  toggleChecked={"value" == "true" ? true : false}
                  onClick={this.togglePermissions("name", "per_group_13")}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr"/>
      </div>
    );
  }
}

export default UserPermission;
