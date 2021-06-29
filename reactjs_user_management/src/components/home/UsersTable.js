import React, { Component } from "react";
import "../../styles/home/UsersTable.css";
import ToggleButton from "../../shared/components/ToggleButton";
import Arrow from "../../assets/icons/down-arrow.png";
import UserIcon from "../../assets/icons/user.png";
import KeyIcon from "../../assets/icons//key.png";
import SettingsIcon from "../../assets/icons/settings.png";
import RecycleIcon from "../../assets/icons/recycle.png";

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByUserDesc: true,
      sortByRoleDesc: true,
      sortByStatusDesc: true,
      filteredArray:[...this.props.users]
    };
  }
  sortByUser() {
    this.props.users.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    if (!this.sortByUserDesc) {
      this.users.reverse();
    }
    this.sortByUserDesc = !this.sortByUserDesc;
  }
  sortByRole() {
    this.props.users.sort((a, b) => (a.role > b.role ? 1 : b.role > a.role ? -1 : 0));
    if (!this.sortByRoleDesc) {
      this.users.reverse();
    }
    this.sortByRoleDesc = !this.sortByRoleDesc;
  }
  sortByStatus() {
    this.props.users.sort((a, b) =>
      a.status > b.status ? 1 : b.status > a.status ? -1 : 0
    );
    if (!this.sortByStatusDesc) {
      this.users.reverse();
    }
    this.sortByStatusDesc = !this.sortByStatusDesc;
  }
  changeState(user) {
      this.props.toggleState(user);
  }
  navigate(user) {
      this.props.setActiveUser(user);
    this.$router.push("/settings");
  }
  toggleDeletionOption(user) {
      this.props.changeDeletionPopUp(user);
  }
  setfilteredArray(newArray){
this.setState({filteredArray:[...newArray]});
  }
  filter() {
    if (this.props.filterTerm) {
      let clonedArray = [...this.props.users];
      const searchTerm = this.props.filterTerm.toLowerCase();
      let filteredArray = clonedArray.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm) ||
          user.role.toLowerCase().includes(searchTerm) ||
          user.status.toLowerCase().includes(searchTerm)
        );
      });
     this.setFilteredArray(filteredArray);
      console.log("this users", this.users);
    } else {
        this.setFilteredArray(this.props.users);
    }
  }
  render() {
    return (
      <div className="wrapper">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th scope="col" className="th-thumbnail"></th>
              <th scope="col" className="th-user">
                <span onClick={this.sortByUser}>
                  User <img src={Arrow} />
                </span>
              </th>
              <th scope="col" className="th-role">
                <span onClick={this.sortByRole}>
                  Role <img src={Arrow} />
                </span>
              </th>
              <th scope="col" className="th-status">
                <span onClick={this.sortByStatus}>
                  Status <img src={Arrow} />
                </span>
              </th>
              <th scope="col" className="th-actions">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="thumbnail">
                <img src={UserIcon} />
              </td>
              <td>
                <div className="user-info">
                  <span>{this.props.user.name}</span>
                  <p>{this.props.user.email}</p>
                </div>
              </td>
              <td>
                <div className="td-role">
                  <div className="admin-div">
                    <img src={KeyIcon} />
                  </div>
                  <p>{this.props.user.role}</p>
                </div>
              </td>
              <td className="td-status">
                <div className="toggle-wrapper">
                  <div className="toggle-btn">
                    <ToggleButton
                      toggleChecked={
                        this.props.user.status === "active" ? true : false
                      }
                      onClick={this.changeState(this.props.user)}
                    />
                  </div>
                </div>
              </td>
              <td className="td-actions">
                <div className="cont-wrapper">
                  <div className="actions">
                    <img
                      className="settings-img"
                      src={SettingsIcon}
                      onClick={this.navigate(this.props.user)}
                    />
                    <img
                      className="recycleBin-img"
                      src={RecycleIcon}
                      onClick={this.toggleDeletionOption(this.props.user)}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
