import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../styles/App.css";
import {USERS} from '../shared/data';
import Home from "../components/home/Home";
import Settings from "../components/settings/Settings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeUser: {},
      users: [...USERS],
    };
    this.setActiveUser = this.setActiveUser.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.deleteConcreteUser = this.deleteConcreteUser.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.modifyUserInArray=this.modifyUserInArray.bind(this);
  }

  setActiveUser(user) {
    // this.setState({ activeUser: user });
  }

  addNewUser(newUser) {
    console.log("adding new user to the database...");
    let clonedUsers = [...this.state.users];
    clonedUsers.unshift(newUser);
    this.setState({ users: [...clonedUsers] });
  }

  deleteConcreteUser(userToDelete) {
    this.setState((prevState) => {
      const mappedUsers = prevState.users.map((user) => {
        if (user.id === userToDelete.id) {
          return;
        }
        return { ...user };
      });
      return { users: mappedUsers };
    });
  }

  toggleState(selectedUser) {
    // let newStatus = selectedUser.status === "active" ? "disabled" : "active";
    // this.setState((prevState) => {
    //   const updatedUsers = prevState.users.map((user) => {
    //     if (user.id == selectedUser.id) {
    //       return { ...user, status: newStatus };
    //     }
    //     return user;
    //   });
    //   return { users: updatedUsers };
    // });
    // console.log("updated users array", this.state.users);
  }

  // setUsersArray(newArray){
  //   this.setState({users:[...newArray]});
  // }

  modifyUserInArray(newUser){
    // this.setState(prevState=>{
    //   const newArray=prevState.users.map(user=>{
    //     if(user.id===newUser.id){
    //       return {...newUser}
    //     }
    //     return user;
    //   })
    //   return {users:newArray}
    // })
    
  }
  render() {
    return (
      <Router>
        <Route exact path="/" render={(props) => <Home users={this.state.users} deleteConcreteUser={this.deleteConcreteUser} toggleState={this.toggleState} addNewUser={this.addNewUser} setActiveUser={this.setActiveUser} activeUser={this.state.activeUser}{...props} />}   />

        <Route path="/settings" render={(props) => <Settings toggleState={this.toggleState} modifyUserInArray={this.modifyUserInArray} activeUser={this.state.activeUser}{...props} />} />
      </Router>
    );
  }
}

export default App;
