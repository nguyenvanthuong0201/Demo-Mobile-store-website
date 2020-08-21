import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <a className="navbar-brand" href="#"><img src="images/phonelogo.png"/></a>
              <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation" ><span className="navbar-toggler-icon"/></button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-4 text-center">
                <li className="nav-item dropdown ml-4 active" >
                    <a className="nav-link dropdown-toggle text-uppercase" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Điện thoại</a>
                    <div className="dropdown-menu text-center" aria-labelledby="dropdownId">
                      <a className="dropdown-item" href="#">Samsung</a>
                      <a className="dropdown-item" href="#">VsMart</a>
                      <a className="dropdown-item" href="#">Oppo</a>
                      <a className="dropdown-item" href="#">Nokia</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown ml-4">
                    <a className="nav-link dropdown-toggle text-uppercase" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">apple iphone</a>
                    <div className="dropdown-menu text-center" aria-labelledby="dropdownId">
                      <a className="dropdown-item" href="#">I Phone 12- 12plus</a>
                      <a className="dropdown-item" href="#">I Phone 11- 11plus</a>
                      <a className="dropdown-item" href="#">I Phone 10- 10plus</a>
                      <a className="dropdown-item" href="#">I Phone 8- 8plus</a>
                    </div>
                  </li>
                  <li className="nav-item">
                            <a className="nav-link text-uppercase" href="#">phụ kiện</a>
                    </li>
                  <li className="nav-item">
                            <a className="nav-link text-uppercase" href="#">tablet</a>
                    </li>
                  <li className="nav-item">
                            <a className="nav-link text-uppercase" href="#">macbook</a>
                    </li>
                </ul>
                <ul className="form-inline-block my-2 my-lg-0 text-center ">
                  {/* <button className="btn btn-primary my-2 my-sm-0 text-center" type="submit">Đăng ký</button>
                  <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit">Đăng nhập</button> */}
                  <Button variant="contained" color="primary">Đăng ký</Button>
                  <Button variant="contained" color="secondary">Đăng nhập</Button>
                </ul>
              </div>
            </nav>
        );
    }
}
