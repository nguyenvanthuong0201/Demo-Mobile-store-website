import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Main_SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    let { xemChiTiet } = this.props;
    // let { themGioHang } = this.props;
    return (
      <div className="card text-center">
        <img className="card-img-top" src={sanPham.img} alt={"true"} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
        <h5 className="card-title text-danger">{sanPham.giaTien}</h5>
          <button className="btn btn-primary btn-block btnXemChiTiet" onClick={()=>xemChiTiet(sanPham)}>chi tiết</button>
          {/* <button className="btn btn-danger" data-toggle="modal" data-target="#modelId" onClick={()=>themGioHang(sanPham)}>+ Giỏ hàng</button> */}
          {/* <Button variant="contained" className="btnXem" color="primary" onClick={()=>xemChiTiet(sanPham)}>Chi tiết</Button> */}
          {/* <Button variant="contained" color="secondary" data-toggle="modal" data-target="#modelId" onClick={()=>themGioHang(sanPham)}>giỏ hàng</Button> */}
        </div>
      </div>
    );
  }
}
