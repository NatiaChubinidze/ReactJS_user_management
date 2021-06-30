import "../../styles/home/Pagination.css";
import Arrow from "../../assets/icons/down-arrow.png";

function Pagination(props) {
  return (
    <div className="pagination-footer">
      <div className="pagination-wrapper">
        <p className="pagination-title">Records on page</p>
        <div className="pagination-dropdown">
          <button className="btn light-btn">5</button>
          <img src={Arrow} className="pagination-arrow" />
          <ul className="pagination-dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                3
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                5
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                10
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
