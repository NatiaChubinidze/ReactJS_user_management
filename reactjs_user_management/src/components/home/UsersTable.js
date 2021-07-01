import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
      usersArray: [...this.props.users],
    };
    this.sortByUser = this.sortByUser.bind(this);
    this.sortByRole = this.sortByRole.bind(this);
    this.sortByStatus = this.sortByStatus.bind(this);
    this.filter = this.filter.bind(this);
  }
 componentDidUpdate(prevProps){
   if(prevProps.filterTerm!==this.props.filterTerm){
     this.filter();
   }
   
   if(prevProps.users.length!==this.props.users.length){
    this.setState({usersArray:[...this.props.users]});
   }
 }
  sortByUser() {
    let clonedArray = [...this.state.usersArray];
   
    clonedArray.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    if (!this.state.sortByUserDesc) {
      clonedArray.reverse();
    }
    this.setState((prevState) => {
      return { sortByUserDesc: !prevState.sortByUserDesc,
        usersArray:[...clonedArray] };
    });
    this.props.setUsersArray(clonedArray);
  }
  sortByRole() {
    console.log('sorting');
    let clonedArray = [...this.state.usersArray];
    clonedArray.sort((a, b) =>
      a.role > b.role ? 1 : b.role > a.role ? -1 : 0
    );
    if (!this.state.sortByRoleDesc) {
      clonedArray.reverse();
    }
    
    this.setState((prevState) => {
      return { sortByRoleDesc: !prevState.sortByRoleDesc,
        usersArray:[...clonedArray] };
    });
    
    this.props.setUsersArray(clonedArray);
  }
  sortByStatus() {
    let clonedArray = [...this.state.usersArray];
    clonedArray.sort((a, b) =>
      a.status > b.status ? 1 : b.status > a.status ? -1 : 0
    );
    if (!this.state.sortByStatusDesc) {
      console.log("reverse");
      clonedArray.reverse();
    }
   
    this.setState((prevState) => {
      return { sortByStatusDesc: !prevState.sortByStatusDesc,
        usersArray:[...clonedArray] };
    });
    console.log(clonedArray);
    this.props.setUsersArray(clonedArray);
  }

  filter() {
    console.log("filter function");
    console.log(this.props.filterTerm);
   
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
     
      this.setState({usersArray:[...filteredArray]});

    } else {
      
      this.setState({usersArray:[...this.props.users]});
    }
  }
  render() {
    
    const tableContent = this.state.usersArray.map((user) => {
      return (
        <tr key={user.id}>
          <td className="thumbnail">
            <img src={UserIcon} />
          </td>
          <td>
            <div className="user-info">
              <span>{user.name}</span>
              <p>{user.email}</p>
            </div>
          </td>
          <td>
            <div className="td-role">
              <div className={user.role==='admin' ? "table-admin-div" : 'd-none'}>
                <img src={KeyIcon} />
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
                    className="settings-img"
                    src={SettingsIcon}
                    onClick={()=>this.props.setActiveUser(user)}
                  />
                </Link>

                <img
                  className="recycleBin-img"
                  src={RecycleIcon}
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
                <span onClick={()=>this.sortByUser()}>
                  User <img src={Arrow} />
                </span>
              </th>
              <th scope="col" className="th-role">
                <span onClick={()=>this.sortByRole()}>
                  Role <img src={Arrow} />
                </span>
              </th>
              <th scope="col" className="th-status">
                <span onClick={()=>this.sortByStatus()}>
                  Status <img src={Arrow} />
                </span>
              </th>
              <th scope="col" className="th-actions">
                Actions
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
