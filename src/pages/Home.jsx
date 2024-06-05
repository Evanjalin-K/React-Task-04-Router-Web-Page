import { Link, Outlet } from "react-router-dom";
import "../component/Home.css";
const Home = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="guvi d-flex align-items-center">
            <Link className="navbar-brand" to="#">
              <img
                src="https://asset.brandfetch.io/id3BHBKuok/id86bsKcFH.jpeg?updated=1710768345759"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
            </Link>
            <h4 className="m-0">GUVI</h4>
          </div>
          <form className="d-flex">
            <input
              className="inputBox me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="searchbtn btn" type="submit">
              Search
            </button>
          </form>
          <div>
            <button className="login btn">Login</button>
            <button className="signup btn">Sign up</button>
          </div>
        </div>
      </nav>
      <hr />
      <div className="navSec">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="navLink nav-link active" to="/">All</Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="navLink nav-link active"to="/fullstackdevelopement">Full Stack Development
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navLink nav-link active" to="/datascience"> 
                    Data Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navLink nav-link active" to="/cybersecurity">
                    Cyber Security
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navLink nav-link active" to="/career">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>      
      <Outlet/>
      </div>
      </div>


  );
};


export default Home;