import React, {Component} from 'react';
import '../../styles/home/Home.css';
import HomeHeader from '../home/HomeHeader';
import UsersTable from '../home/UsersTable';
import Pagination from '../home/Pagination';
import Invitation from '../home/Invitation';
import DeleteUser from '../home/DeleteUser';

class Home extends Component {
  render(){
  return (
    <div >
      <HomeHeader/>
      <UsersTable/>
      <Pagination/>
      <Invitation/>
      <DeleteUser/>
    
    </div>
  );
  }
}

export default Home;

