import React, {Component} from 'react';
import '../../styles/home/HomeHeader.css';
import searchIcon from '../../assets/icons/search.png';

class HomeHeader extends Component {
  render(){
  return (
    <div className="header-box">
    <div className="home-header">
      <div className="home-header-wrapper">
        <h1 className="header-title">Project Access</h1>
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
    <div className="plus" onClick={()=>this.props.toggleAddUsersVisibility()}>+</div>
  </div>
  )
  }
}
  

export default HomeHeader;

