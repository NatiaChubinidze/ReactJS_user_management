import React, {Component} from 'react';
import '../../styles/settings/Settings.css';
import SettingsHeader from '../settings/SettingsHeader';
import UserInfo from '../settings/UserInfo';
import UserDetails from '../settings/UserDetails';
import UserPermission from '../settings/UserPermission';


class Settings extends Component {
  render(){
  return (
    <div>
    <SettingsHeader/>
    <UserInfo/>
    <UserDetails/>
    <UserPermission/>
    </div>
  );
  }
}

export default Settings;
