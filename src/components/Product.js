import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
          .<div className="container">
          <div className="row">
          <div className="col-sm-6">
            <div className="card text-white bg-primary">
              <img
                className="card-img-top img-fluid"
                src="images/logo.png"
                alt="Iphone"
                style={{ height: "500px" }}
              />
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="card-body">
                    <h4 className="card-title">IPHONE 12 PRO</h4>
                    <p className="card-text">30.000.000 VNĐ</p>
                  </div>
                </div>
                <div className="col-sm-6">
                    <button type="button" className="btn btn-outline-warning">Mua Hàng</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-white bg-primary">
              <img
                className="card-img-top img-fluid"
                src="https://didongviet.vn/pub/media/catalog/product//o/p/oppo-reno-4-xanh-didongviet-1_1_1.jpg"
                alt="Iphone"
                style={{ height: "500px" }}
              />
                 <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="card-body">
                    <h4 className="card-title">OPPO RENO 4 PRO</h4>
                    <p className="card-text">11.000.000 VNĐ</p>
                  </div>
                </div>
                <div className="col-sm-6">
                    <button type="button" className="btn btn-outline-warning">Mua Hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
    );
  }
}
