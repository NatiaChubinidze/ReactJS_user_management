import React, { Component } from "react";
import "../../styles/home/Home.css";
import HomeHeader from "../home/HomeHeader";
import UsersTable from "../home/UsersTable";
import Pagination from "../home/Pagination";
import Invitation from "../home/Invitation";
import DeleteUser from "../home/DeleteUser";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeletionWindow: false,
      showAddUsers: false,
      filterTerm: "",
      usersClone: [...this.props.users],
    };
    this.toggleDeletionPopUp = this.toggleDeletionPopUp.bind(this);
    this.changeAddUserOption = this.changeAddUserOption.bind(this);
    this.setFilterTerm = this.setFilterTerm.bind(this);
    this.deleteConcreteUser = this.deleteConcreteUser.bind(this);
    this.toggleAddUsersVisibility = this.toggleAddUsersVisibility.bind(this);
  }

  toggleDeletionPopUp() {
    this.setState((prevState) => {
      return { showDeletionWindow: !prevState.showDeletionWindow };
    });
  }
  changeAddUserOption(showHide) {
    this.setState({ showAddUsers: showHide });
  }
  setFilterTerm(searchTerm) {
    this.setState({ filterTerm: searchTerm });
  }

  deleteConcreteUser(user) {
    this.props.deleteConcreteUser(user);
    this.toggleDeletionPopUp();
  }
  toggleAddUsersVisibility() {
    this.setState((prevState) => {
      return { showAddUsers: !prevState.showAddUsers };
    });
  }
  render() {
    return (
      <div
        className={
          this.state.showDeletionWindow || this.state.showAddUsers
            ? "home background-grey"
            : "home"
        }
      >
        <div
          className={
            this.state.showDeletionWindow || this.state.showAddUsers
              ? "home-wrapper toBack"
              : "home-wrapper"
          }
        >
          <HomeHeader
            addNewUser={this.props.addNewUser}
            user={this.props.user}
            toggleAddUsersVisibility={this.toggleAddUsersVisibility}
            setFilterTerm={this.setFilterTerm}
          />
          <UsersTable
            users={this.props.users}
            user={this.props.activeUser}
            filterTerm={this.state.filterTerm}
            setActiveUser={this.props.setActiveUser}
            toggleDeletionPopUp={this.toggleDeletionPopUp}
            setUsersArray={this.props.setUsersArray}
            toggleState={this.props.toggleState}
          />
          <Pagination />
        </div>
        <Invitation
          addNewUser={this.props.addNewUser}
          activeUser={this.props.activeUser}
          showAddUsers={this.state.showAddUsers}
          toggleAddUsersVisibility={this.toggleAddUsersVisibility}
        />
        <DeleteUser
          user={this.props.activeUser}
          deleteConcreteUser={this.deleteConcreteUser}
          showDeletionWindow={this.state.showDeletionWindow}
          toggleDeletionPopUp={this.toggleDeletionPopUp}
        />
      </div>
    );
  }
}

export default Home;
