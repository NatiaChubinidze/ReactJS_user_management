import '../../styles/ToggleButton.css';

function ToggleButton(props) {
  return (
    <div className="cont">
    <label className="switch">
      <input type="checkbox" checked={props.toggleChecked} />
      <span className="slider"></span>
    </label>
  </div>
  );
}

export default ToggleButton;
