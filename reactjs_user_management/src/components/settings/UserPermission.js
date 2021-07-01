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
    this.togglePermissionOne = this.togglePermissionOne.bind(this);
    this.togglePermissionTwo = this.togglePermissionTwo.bind(this);
    this.togglePermissionThree = this.togglePermissionThree.bind(this);
    this.toggleSuperAdmin = this.toggleSuperAdmin.bind(this);
    this.toggleGroupPermission = this.toggleGroupPermission.bind(this);
    this.togglePermissions = this.togglePermissions.bind(this);
    this.setSuperAdmin = this.setSuperAdmin.bind(this);
    this.setPermissionGroupStatus = this.setPermissionGroupStatus.bind(this);
    this.setPermissions = this.setPermissions.bind(this);
  }
  componentDidMount() {
    const permissions = this.setPermissionGroupStatus();
    this.setState({
      permission_group_1: permissions.permission_group_1,
      permission_group_2: permissions.permission_group_2,
      permission_group_3: permissions.permission_group_3,
    });
    setTimeout(() => {
      console.log(this.state.permission_group_1);
      this.setSuperAdmin();
    }, 50);
  }
  togglePermissionOne() {
    this.setState((prevState) => {
      return { permission_1_visibility: !prevState.permission_1_visibility };
    });
  }
  togglePermissionTwo() {
    this.setState((prevState) => {
      return { permission_2_visibility: !prevState.permission_2_visibility };
    });
  }
  togglePermissionThree() {
    this.setState((prevState) => {
      return { permission_3_visibility: !prevState.permission_3_visibility };
    });
  }
  toggleSuperAdmin(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return { superAdmin: !prevState.superAdmin };
    });
    setTimeout(() => {
      console.log("toggle super admin", this.state.superAdmin);
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
      const newUser = this.setPermissions();
      this.props.modifyUserInArray(newUser);
    }, 50);
  }
  toggleGroupPermission(event, group) {
    event.preventDefault();
    switch (group) {
      case "group_1":
        this.setState((prevState) => {
          return { permission_group_1: !prevState.permission_group_1 };
        });
        setTimeout(() => {
          const newUser = this.setPermissions();
          this.props.modifyUserInArray(newUser);
        }, 10);
        setTimeout(() => {
          this.setSuperAdmin();
        }, 10);

        return;

      case "group_2":
        this.setState((prevState) => {
          return { permission_group_2: !prevState.permission_group_2 };
        });
        setTimeout(() => {
          const newUser = this.setPermissions();
          this.props.modifyUserInArray(newUser);
        }, 10);
        setTimeout(() => {
          this.setSuperAdmin();
        }, 10);
        return;

      case "group_3":
        this.setState((prevState) => {
          return { permission_group_3: !prevState.permission_group_3 };
        });
        setTimeout(() => {
          const newUser = this.setPermissions();
          this.props.modifyUserInArray(newUser);
        }, 10);
        setTimeout(() => {
          this.setSuperAdmin();
        }, 10);
        return;
    }
  }

  togglePermissions(event, permissionName, permission_group) {
    event.preventDefault();
    let newPermissionUser = {};
    if (this.props.user[permission_group][permissionName] == "true") {
      const newpermissionGroup = {
        ...this.props.user[permission_group],
        [permissionName]: "false",
      };
      newPermissionUser = {
        ...this.props.user,
        [permission_group]: { ...newpermissionGroup },
      };
    } else {
      const newpermissionGroup = {
        ...this.props.user[permission_group],
        [permissionName]: "true",
      };
      newPermissionUser = {
        ...this.props.user,
        [permission_group]: { ...newpermissionGroup },
      };
    }
    console.log("new toggled permission user", newPermissionUser);
    this.props.modifyUserInArray(newPermissionUser);
    setTimeout(() => {
      const permissions = this.setPermissionGroupStatus();
      this.setState({
        permission_group_1: permissions.permission_group_1,
        permission_group_2: permissions.permission_group_2,
        permission_group_3: permissions.permission_group_3,
      });
    }, 50);

    setTimeout(() => {
      console.log(this.state.permission_group_1);
      this.setSuperAdmin();
    }, 50);
  }

  setSuperAdmin() {
    if (
      this.state.permission_group_1 &&
      this.state.permission_group_2 &&
      this.state.permission_group_3
    ) {
      this.setState({ superAdmin: true });
    } else {
      this.setState({ superAdmin: false });
    }
  }
  setPermissionGroupStatus() {
    console.log("set permission group status");

    let permissions = {
      permission_group_1: true,
      permission_group_2: true,
      permission_group_3: true,
    };
    for (const item in this.props.user.per_group_1) {
      console.log(this.props.user.per_group_1[item] == "false");
      if (this.props.user.per_group_1[item] == "false") {
        permissions.permission_group_1 = false;
        break;
      }
    }

    for (const item in this.props.user.per_group_2) {
      console.log(this.props.user.per_group_1[item] == "false");
      if (this.props.user.per_group_2[item] == "false") {
        permissions.permission_group_2 = false;
        break;
      }
    }

    for (const item in this.props.user.per_group_3) {
      if (this.props.user.per_group_3[item] == "false") {
        permissions.permission_group_3 = false;
        break;
      }
    }
    return permissions;
  }
  setPermissions() {
    console.log("set permissions");
    let clonedActiveUser = { ...this.props.user };
    if (this.state.permission_group_1 == true) {
      for (const item in clonedActiveUser.per_group_1) {
        clonedActiveUser.per_group_1[item] = "true";
      }
    } else {
      for (const item in clonedActiveUser.per_group_1) {
        clonedActiveUser.per_group_1[item] = "false";
      }
    }
    if (this.state.permission_group_2 == true) {
      for (const item in clonedActiveUser.per_group_2) {
        clonedActiveUser.per_group_2[item] = "true";
      }
    } else {
      for (const item in clonedActiveUser.per_group_2) {
        clonedActiveUser.per_group_2[item] = "false";
      }
    }
    if (this.state.permission_group_3 == true) {
      for (const item in clonedActiveUser.per_group_3) {
        clonedActiveUser.per_group_3[item] = "true";
      }
    } else {
      for (const item in clonedActiveUser.per_group_3) {
        clonedActiveUser.per_group_3[item] = "false";
      }
    }
    return clonedActiveUser;
  }

  render() {
    const mappedPermissionGroup_1 = Object.entries(
      this.props.user.per_group_1
    ).map(([ObKey, value]) => {
      return (
        <div className="user-permission-flex-box" key={`${ObKey}${value}`}>
          <div className="user-permission-flex-wrapper">
            <div className="user-permission-circle"></div>
            <p className="user-permission-p">{ObKey}</p>
          </div>
          <div
            className="user-permission-toggleBtn"
            onClick={(e) => this.togglePermissions(e, ObKey, "per_group_1")}
          >
            <ToggleButton
              toggleChecked={value == "true" ? true : false}
              toggleState={this.props.toggleState}
              user={this.props.user}
            />
          </div>
        </div>
      );
    });
    const mappedPermissionGroup_2 = Object.entries(
      this.props.user.per_group_2
    ).map(([ObKey, value]) => {
      return (
        <div className="user-permission-flex-box" key={`${ObKey}${value}`}>
          <div className="user-permission-flex-wrapper">
            <div className="user-permission-circle"></div>
            <p className="user-permission-p">{ObKey}</p>
          </div>
          <div
            className="user-permission-toggleBtn"
            onClick={(e) => this.togglePermissions(e, ObKey, "per_group_2")}
          >
            <ToggleButton
              toggleChecked={value == "true" ? true : false}
              toggleState={this.props.toggleState}
              user={this.props.user}
            />
          </div>
        </div>
      );
    });
    const mappedPermissionGroup_3 = Object.entries(
      this.props.user.per_group_3
    ).map(([ObKey, value]) => {
      return (
        <div className="user-permission-flex-box" key={`${ObKey}${value}`}>
          <div className="user-permission-flex-wrapper">
            <div className="user-permission-circle"></div>
            <p className="user-permission-p">{ObKey}</p>
          </div>
          <div
            className="user-permission-toggleBtn"
            onClick={(e) => this.togglePermissions(e, ObKey, "per_group_3")}
          >
            <ToggleButton
              toggleChecked={value == "true" ? true : false}
              toggleState={this.props.toggleState}
              user={this.props.user}
            />
          </div>
        </div>
      );
    });
    return (
      <div className="user-permission-wrapper">
        <h3 className="user-permission-h3">Permissions</h3>
        <span className="user-permission-role-title">
          {this.props.user.role}
        </span>
        <div className="user-permission-super-admin">
          <p className="user-permission-p">Super Admin</p>
          <div
            className="user-permission-toggleBtn"
            onClick={this.toggleSuperAdmin}
          >
            <ToggleButton
              toggleChecked={this.state.superAdmin == true ? true : false}
              toggleState={this.props.toggleState}
              user={this.props.user}
            />
          </div>
        </div>
        <hr className="hr" />

        <div className="user-permission-permission_group">
          <div className="user-permission-title-line">
            <img className="user-permission-img" src={Arrow} />
            <div className="user-permission-permission-title">
              <button
                className="user-permission-dropbtn"
                onClick={() => this.togglePermissionOne()}
              >
                Permission Group 1
              </button>
            </div>
            <div
              className="user-permission-toggleBtn"
              onClick={(e) => this.toggleGroupPermission(e, "group_1")}
            >
              <ToggleButton
                toggleChecked={this.state.permission_group_1 ? true : false}
                toggleState={this.props.toggleState}
                user={this.props.user}
              />
            </div>
          </div>
          <div
            className={
              this.state.permission_1_visibility
                ? "user-permission-dropdown-content"
                : "d-none"
            }
          >
            {mappedPermissionGroup_1}
          </div>
        </div>

        <hr className="hr" />
        <div className="user-permission-permission_group">
          <div className="user-permission-title-line">
            <img className="user-permission-img" src={Arrow} />
            <div className="user-permission-permission-title">
              <button
                className="user-permission-dropbtn"
                onClick={() => this.togglePermissionTwo()}
              >
                Permission Group 2
              </button>
            </div>
            <div
              className="user-permission-toggleBtn"
              onClick={(e) => this.toggleGroupPermission(e, "group_2")}
            >
              <ToggleButton
                toggleChecked={
                  this.state.permission_group_2 === true ? true : false
                }
                toggleState={this.props.toggleState}
                user={this.props.user}
              />
            </div>
          </div>
          <div
            className={
              this.state.permission_2_visibility
                ? "user-permission-dropdown-content"
                : "d-none"
            }
          >
            {mappedPermissionGroup_2}
          </div>
        </div>
        <hr className="hr" />
        <div className="user-permission-permission_group">
          <div className="user-permission-title-line">
            <img className="user-permission-img" src={Arrow} />
            <div className="user-permission-permission-title">
              <button
                className="user-permission-dropbtn"
                onClick={() => this.togglePermissionThree()}
              >
                Permission Group 3
              </button>
            </div>
            <div
              className="user-permission-toggleBtn"
              onClick={(e) => this.toggleGroupPermission(e, "group_3")}
            >
              <ToggleButton
                toggleChecked={this.state.permission_group_3 ? true : false}
                toggleState={this.props.toggleState}
                user={this.props.user}
              />
            </div>
          </div>
          <div
            className={
              this.state.permission_3_visibility
                ? "user-permission-dropdown-content"
                : "d-none"
            }
          >
            {mappedPermissionGroup_3}
          </div>
        </div>
        <hr className="hr" />
      </div>
    );
  }
}

export default UserPermission;
