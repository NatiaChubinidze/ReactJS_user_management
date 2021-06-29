import '../../styles/home/Pagination.css';
import Arrow from '../../assets/icons/down-arrow.png';

function Pagination(props){
    return(<div className="pagination-footer">
    <div className="wrapper">
      <p className="mt-1">Records on page</p>
      <div className="dropdown">
        <button className="btn light">5</button>
        <img src={Arrow} class="arrow" />
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">3</a></li>
          <li><a className="dropdown-item" href="#">5</a></li>
          <li><a className="dropdown-item" href="#">10</a></li>
        </ul>
      </div>
    </div>
  </div>);
}

export default Pagination;