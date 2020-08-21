///Bài tập về vòng lập
// Sử dụng map

import React, { Component } from "react";
import data from "../data.json"; // tạo dữ liệu và import vào component

export default class Baitap2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phim: data,
    };
  }
  renderPhim = () => {
    return this.state.phim.map((user, index1) => {
      return (
        <div className="col-sm-4 text-center" key={index1}>
          <img src={user.img} alt="" />
          <title>{user.title}</title>
          <p>{user.p}</p>
        </div>
      );
    });
  };
  render() {
    return <div className="container">
        <div className="row">
            {this.renderPhim()}
        </div>
    </div>;
  }
}
