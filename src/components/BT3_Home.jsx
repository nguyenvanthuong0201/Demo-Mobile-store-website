import React, { Component } from "react";
import Header from "./BT3_Header";//gọi từ BT3_Header qua để đẩy dự liệu vô...cách này dày hơn
import Data from "../data.json";
///truyền thẳng data vô và không cần phải gọi contrustor
export default class BT3_Home extends Component {
  renderTable = () => {
    return Data.map((user, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Header img={user.img}></Header>
          <Header title={user.title}></Header>
          <Header p={user.p}></Header>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderTable()}</div>
      </div>
    );
  }
}
