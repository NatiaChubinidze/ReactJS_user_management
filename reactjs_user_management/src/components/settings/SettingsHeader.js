import "../../styles/settings/SettingsHeader.css";
import settingsIcon from "../../assets/icons/settings_white.png";

function SettingsHeader() {
  return (
    <div className="settings-header-box">
      <div className="settings-header">
        <div className="settings-header-wrapper">
          <h1 className="settings-header-title">User Setup</h1>
        </div>
      </div>
      <div className="header-settings-gear">
        <img src={settingsIcon} alt="Settings Icon"/>
      </div>
    </div>
  );
}

export default SettingsHeader;
