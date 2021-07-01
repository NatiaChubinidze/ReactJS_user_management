import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home/UsersTable.css";
import ToggleButton from "../../shared/components/ToggleButton";
import Arrow from "../../assets/icons/down-arrow.png";
import GrayArrow from "../../assets/icons/gray_arrow.png";
import UserIcon from "../../assets/icons/user.png";
import DisabledUser from "../../assets/icons/user_disabled.png";
import KeyIcon from "../../assets/icons/key.png";
import DisabledKey from "../../assets/icons/key_disabled.png";
import SettingsIcon from "../../assets/icons/settings.png";
import RecycleIcon from "../../assets/icons/recycle.png";

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByUser: false,
      sortByRole: false,
      sortByStatus: false,
      sortByUserAsc: true,
      sortByRoleAsc: true,
      sortByStatusAsc: true,
      usersArray: [...this.props.users],
    };
    this.sortByUser = this.sortByUser.bind(this);
    this.sortByRole = this.sortByRole.bind(this);
    this.sortByStatus = this.sortByStatus.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.filterTerm !== this.props.filterTerm) {
      this.filter();
    }
    if (prevProps.users !== this.props.users) {
      this.setState({ usersArray: [...this.props.users] });
    }
    
  }
  sortByUser() {
    this.setState({ sortByUser: true, sortByRole: false, sortByStatus: false });
    let clonedArray = [...this.state.usersArray];
    clonedArray.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    if (!this.state.sortByUserAsc) {
      clonedArray.reverse();
    }
    this.setState((prevState) => {
      return {
        sortByUserAsc: !prevState.sortByUserAsc,
        usersArray: [...clonedArray],
      };
    });
    this.props.setUsersArray(clonedArray);
  }
  sortByRole() {
    this.setState({ sortByUser: false, sortByRole: true, sortByStatus: false });
    let clonedArray = [...this.state.usersArray];
    clonedArray.sort((a, b) =>
      a.role > b.role ? 1 : b.role > a.role ? -1 : 0
    );
    if (!this.state.sortByRoleAsc) {
      clonedArray.reverse();
    }
    this.setState((prevState) => {
      return {
        sortByRoleAsc: !prevState.sortByRoleAsc,
        usersArray: [...clonedArray],
      };
    });

    this.props.setUsersArray(clonedArray);
  }
  sortByStatus() {
    this.setState({ sortByUser: false, sortByRole: false, sortByStatus: true });
    let clonedArray = [...this.state.usersArray];
    clonedArray.sort((a, b) =>
      a.status > b.status ? 1 : b.status > a.status ? -1 : 0
    );
    if (!this.state.sortByStatusAsc) {
      clonedArray.reverse();
    }

    this.setState((prevState) => {
      return {
        sortByStatusAsc: !prevState.sortByStatusAsc,
        usersArray: [...clonedArray],
      };
    });
    this.props.setUsersArray(clonedArray);
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

      this.setState({ usersArray: [...filteredArray] });
    } else {
      this.setState({ usersArray: [...this.props.users] });
    }
  }
  render() {
    const tableContent = this.state.usersArray.map((user) => {
      return (
        <tr key={user.id}>
          <td className="thumbnail">
            <img src={user.status==="active" ? UserIcon : DisabledUser} alt="User Icon" />
          </td>
          <td>
            <div className="user-info">
              <span>{user.name}</span>
              <p>{user.email}</p>
            </div>
          </td>
          <td>
            <div className="td-role">
              <div
                className={user.role === "admin" && user.status ==="active" ? "table-admin-div" : "d-none"}
              >
                <img src={KeyIcon} className="admin-key" alt="Key Icon" />
              </div>
              <div className="disabled-img">
              <img src={DisabledKey} alt="Disabled Key" className={user.role === "admin"&&user.status!=="active"?"disabledKey" : "d-none"}/>
              </div>
              <p>{user.role}</p>
            </div>
          </td>
          <td className="td-status">
            <div className="status-toggle-wrapper">
              <div className="toggle-btn">
                <ToggleButton
                  toggleChecked={user.status === "active" ? true : false}
                  toggleState={this.props.toggleState}
                  user={user}
                />
              </div>
            </div>
          </td>
          <td className="td-actions">
            <div className="cont-wrapper">
              <div className="actions">
                <Link to="/settings">
                  <img
                    className={user.status === "active"?"settings-img":"d-none"}
                    src={SettingsIcon}
                    alt="Settings Icon"
                    onClick={() => this.props.setActiveUser(user)}
                  />
                </Link>

                <img
                  className="recycleBin-img"
                  src={RecycleIcon}
                  alt="Recycle Bin"
                  onClick={() => {
                    this.props.setActiveUser(user);
                    this.props.toggleDeletionPopUp();
                  }}
                />
              </div>
            </div>
          </td>
        </tr>
      );
    });
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th scope="col" className="th-thumbnail"></th>
              <th scope="col" className="th-user">
                <span className={this.state.sortByUser ? "active-cell":null} onClick={() => this.sortByUser()}>
                  User{" "}
                  <img src={this.state.sortByUser ? Arrow : GrayArrow} alt="Arrow" className="sort-arrow"/>
                </span>
              </th>
              <th scope="col" className="th-role">
                <span className={this.state.sortByRole ? "active-cell":null} onClick={() => this.sortByRole()}>
                  Role  <img src={this.state.sortByRole ? Arrow : GrayArrow} alt="Arrow" className="sort-arrow"/>
                </span>
              </th>
              <th scope="col" className="th-status">
                <span className={this.state.sortByStatus ? "active-cell":null} onClick={() => this.sortByStatus()}>
                  Status  <img src={this.state.sortByStatus ? Arrow : GrayArrow} alt="Arrow" className="sort-arrow"/>
                </span>
              </th>
              <th scope="col" className="th-actions">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
