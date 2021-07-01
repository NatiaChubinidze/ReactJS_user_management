import "../../styles/home/Pagination.css";
import Arrow from "../../assets/icons/down-arrow.png";

function Pagination(props) {
  return (
    <div className="pagination-footer">
      <div className="pagination-wrapper">
        <p className="pagination-title">Records on page</p>
        <div className="pagination-dropdown">
          <button className="btn light-btn">5</button>
          <img src={Arrow} alt="Arrow" className="pagination-arrow" />
          <ul className="pagination-dropdown-menu">
            <li className="dropdown-item">
              3
            </li>
            <li className="dropdown-item">
              5
            </li>
            <li className="dropdown-item">
              10
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
