import React, {Component} from 'react';
import '../../styles/home/Home.css';
import HomeHeader from '../home/HomeHeader';
import UsersTable from '../home/UsersTable';
import Pagination from '../home/Pagination';
import Invitation from '../home/Invitation';
import DeleteUser from '../home/DeleteUser';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      showDeletionWindow:false,
      showAddUsers:false,
      filterTerm:'',
    }
    this.changeDeletionPopUp=this.changeDeletionPopUp.bind(this);
    this.closeDeletionPopUp=this.closeDeletionPopUp.bind(this);
    this.changeAddUserOption=this.changeAddUserOption.bind(this);
    this.setFilterTerm=this.setFilterTerm.bind(this);
    this.deleteConcreteUser=this.deleteConcreteUser.bind(this);
  }
  changeDeletionPopUp(user) {
    // this.setState({showDeletionWindow:true});
    // this.props.setActiveUser(user);
  }
  closeDeletionPopUp(showHide) {
    this.setState({showDeletionWindow: showHide});
  }
  changeAddUserOption(showHide) {
   this.setState({showAddUsers:showHide});
  }
  setFilterTerm(searchTerm) {
    this.setState({filterTerm:searchTerm});
  }
 
  deleteConcreteUser(user){
    this.props.deleteConcreteUser(user);
    this.closeDeletionPopUp(false);
  }
  
  render(){
  return (
    <div
    className={
      this.state.showDeletionWindow || this.state.showAddUsers ? 'home background-grey' : 'home'
    }
  >
    <div
     className={
        this.props.showDeletionWindow || this.props.showAddUsers ? 'home-wrapper toBack' : 'home-wrapper'
     }
    >
      <HomeHeader addNewUser={this.props.addNewUser} user={this.props.user}/>
      <UsersTable users={this.props.users} user={this.props.activeUser} filterTerm={this.state.filterTerm} setActiveUser={this.props.setActiveUser} changeDeletionPopUp={this.changeDeletionPopUp} toggleState={this.props.toggleState} />
      <Pagination/>
      <Invitation  addNewUser={ this.props.addNewUser} activeUser={this.props.activeUser}/>
      {/* <DeleteUser user={this.props.activeUser} deleteConcreteUser={this.props.deleteConcreteUser} closeDeletionPopUp={this.props.closeDeletionPopUp}/> */}
    
    </div>
    </div>
  );
  }
}

export default Home;

