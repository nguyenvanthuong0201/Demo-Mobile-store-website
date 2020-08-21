import React, { Component } from "react";

export default class BTVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhanvien: [
        { id: 1, name: "Hoàng Văn Việt Anh", year: "22", salary: 112 },
        { id: 2, name: "Nguyễn Văn Thương", year: "22", salary: 100 },
        { id: 3, name: "Nguyễn Duy Hiếu", year: "22", salary: 100 },
        { id: 4, name: "Trần Nhựt Thanh Thanh", year: "22", salary: 130 },
        { id: 5, name: "Nguyễn Trọng Nghĩa", year: "22", salary: 100 },
      ],
    };
  }

  renderTable = () => {
    return this.state.nhanvien.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.salary}</td>
          <td>{user.year}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-hover table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Year</th> 
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
