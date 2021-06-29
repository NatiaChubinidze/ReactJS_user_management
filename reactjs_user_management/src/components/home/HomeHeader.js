import React, {Component} from 'react';
import '../../styles/home/HomeHeader.css';
import searchIcon from '../../assets/icons/search.png';

class HomeHeader extends Component {
  render(){
  return (
    <div className="box">
    <div className="header">
      <div className="wrapper">
        <h1 className="title">Project Access</h1>
        <div id="v-model-basic">
          <input
            type="text"
            className="search"
            placeholder="Type to filter the table"
           
          />
          <img src={searchIcon} className="search-icon" />
        </div>
      </div>
    </div>
    <div className="plus" onClick={()=>this.props.addNewUser()}>+</div>
  </div>
  )
  }
}
  

export default HomeHeader;

