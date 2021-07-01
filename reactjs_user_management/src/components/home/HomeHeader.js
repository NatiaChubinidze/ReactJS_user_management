import React from "react";
import "../../styles/home/HomeHeader.css";
import searchIcon from "../../assets/icons/search.png";

function HomeHeader(props){
    return (
      <div className="header-box">
        <div className="home-header">
          <div className="home-header-wrapper">
            <h1 className="header-title">Project Access</h1>
            <div>
              <input
                type="text"
                className="search"
                placeholder="Type to filter the table"
                onChange={(e) => props.setFilterTerm(e.target.value)}
              />
              <img src={searchIcon} alt="Search Icon" className="search-icon" />
            </div>
          </div>
        </div>
        <div
          className="plus"
          onClick={() => props.toggleAddUsersVisibility()}
        >
          +
        </div>
      </div>
    );
  }


export default HomeHeader;
