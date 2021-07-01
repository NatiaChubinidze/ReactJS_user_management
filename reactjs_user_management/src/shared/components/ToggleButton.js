import '../../styles/ToggleButton.css';
import {useEffect} from 'react';

function ToggleButton(props) {
  
  return (
    <div className="toggle-cont">
    <label className="toggle-switch">
      <input type="checkbox" checked={props.toggleChecked} onChange={()=>props.toggleState(props.user)} />
      <span className="toggle-slider"></span>
    </label>
  </div>
  );
}

export default ToggleButton;
