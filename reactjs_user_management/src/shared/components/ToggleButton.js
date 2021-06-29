import '../styles/ToggleButton.css';

function ToggleButton() {
  return (
    <div class="cont">
    <label class="switch">
      <input type="checkbox" checked={this.props.toggleChecked} />
      <span class="slider"></span>
    </label>
  </div>
  );
}

export default ToggleButton;
