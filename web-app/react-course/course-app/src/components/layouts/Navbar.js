import React from 'react';
import { Link } from 'react-router-dom';
import { UseAuth } from '../authentication/UseAuth';

export const Navbar = () => {

  const { isTokenValid, handleLogout } = UseAuth();

  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
              <small className="px-3">|</small>
              <small><i className="fa fa-envelope mr-2"></i>info@example.com</small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary rounded">
              <i className="fa fa-book-reader mr-3"></i>Edukate
            </h1>
          </Link>
          <button type="button" className="navbar-toggler rounded" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className="nav-item nav-link active rounded">Home</Link>
              <Link to="/about" className="nav-item nav-link rounded">About</Link>
              <Link to="/courses" className="nav-item nav-link rounded">Courses</Link>
              <div className="nav-item dropdown rounded">
                <Link to="#" className="nav-link dropdown-toggle rounded" data-bs-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu m-0 rounded">
                  <Link to="/course-detail" className="dropdown-item rounded">Course Detail</Link>
                  <Link to="/our-feature" className="dropdown-item rounded">Our Features</Link>
                  <Link to="/instructor" className="dropdown-item rounded">Instructors</Link>
                  <Link to="/testimonial" className="dropdown-item rounded">Testimonial</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link rounded">Contact</Link>
            </div>
            <div className="nav-item dropdown">
              <button className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }} data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user-graduate"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end text-start" style={{ transform: 'translateX(-50%)', left: '50%' }}>
                {isTokenValid === null ? (
                  <li></li>) // Hiển thị khi đang kiểm tra token, không hiện gì

                  : isTokenValid ? ( // nếu token đúng
                    <>
                      <li><Link to="/profile" className="dropdown-item d-flex align-items-center"><i className="fa-solid fa-address-card me-2"></i>Profile</Link></li>
                      <li><Link to="/deposit" className="dropdown-item d-flex align-items-center"><i className="fa-brands fa-bitcoin me-2"></i>Deposit</Link></li>
                      <li><Link to="/change-password" className="dropdown-item d-flex align-items-center"><i className="fa-solid fa-key me-2"></i>Password</Link></li>
                      <li>
                        <Link to="/logout" className="dropdown-item d-flex align-items-center" id="logout" onClick={handleLogout}>
                          <i className="fa-solid fa-sign-out-alt me-2"></i>Logout
                        </Link>
                      </li>
                    </>
                  ) : ( // token sai thì hiện Login
                    <li>
                      <Link to="/login" className="dropdown-item d-flex align-items-center" id="login">
                        <i className="fa-solid fa-sign-in-alt me-2"></i>Login
                      </Link>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

