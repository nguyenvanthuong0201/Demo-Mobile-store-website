import React, { Component } from "react";
import DSSanPham from "../data.json";
import Main_SanPham from "./Main_SanPham";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

export default class Main_DSSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: {
        maSP: "SP001",
        img: "images/phone1.png",
        tenSP: "Samsung Galaxy 10",
        mangHinh: "6.8 inches, 114.0 cm2 (~91.0% screen-to-body ratio)",
        heDH: "Android 9.0 (Pie); One UI",
        ram: "12GB",
        rom: "128GB",
        giaTien: "14.00.000",
        giaTienSo: 14000000,
        phuKien: "Hộp sách, sạc, cáp USB, tai nghe, cây lấy sim",
        baoHanh: "18 tháng tại Dsoft",
        nangCap: "Không có dịch vụ",
        khuVuc:
          "Phòng 12, Nhà 8, Khu Công viên Phần Mềm Quang Trung, Quận 12, TP. HCM",
      },
      value: "",
      visible: false,
      open: false,
      setOpen: false,
    };
    this.handleChange = this.handleChange.bind(this); // khởi tạo để lấy number
  }

  DSDienThoai = DSSanPham; // inport mang nằm trong file Data
  //  handleClickOpen = () => {
  //   this.setState({
  //     setOpen:true,
  //   })  };

  // handleClose = () => {
  //   this.setState({
  //     setOpen:false,
  //   })
  // };
  

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  xemChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  themGioHang = (sanPham) => {
    this.setState({
      modelChiTiet: sanPham,
    });
  };
  onClickMe(text) {
    console.log(text);
    alert(text);
  }
  onClickThongbao(text) {
    alert(text);
  }

  render() {
    let { sanPhamChiTiet } = this.state;
    // let { modelChiTiet } = this.state;
    let value = this.state;
    return (
      <div className="container">
        <h3 className="text-danger text-center">Danh sách sản phẩm</h3>
        <div className="row">
          {this.DSDienThoai.map((sanPham, index) => {
            // chạy vòng lập trong mảng sử dụng Map
            return (
              <div className="col-sm-3" key={index}>
                <Main_SanPham /// chuyển về cho component con xử lý
                  xemChiTiet={this.xemChiTiet}
                  // themGioHang={this.themGioHang}
                  sanPham={sanPham}
                />
              </div>
            );
          })}

        </div>
      {/* Start Model giỏ hàng */}
      <div      
          className="modal fade"
          id="modelId"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >           //
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thêm vào giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-hover table-inverse table-responsive">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Ảnh</th>
                      <th>info </th>
                      <th>Số lượng</th>
                      <th>Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={sanPhamChiTiet.img}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </td>
                      <td>{sanPhamChiTiet.tenSP}</td>
                      <td className="text-center">
                        {/* <input type="number" name="number"/>
                         */}
                        <input
                          className="text-center"
                          type="number"
                          value={this.state.value}
                          onChange={this.handleChange.bind(this.setState.value)}
                        />
                        {sanPhamChiTiet.giaTien} x {this.state.value}
                      </td>
                      <td>{sanPhamChiTiet.giaTienSo * this.state.value}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success">Save</button> */}
                <Button
                  variant="contained"
                  color="secondary"
                  data-dismiss="modal"
                >
                  Thoát
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  data-dismiss="modal"
                  onClick={this.onClickMe.bind(this, "Đã thêm vào giỏ hàng")}
                >
                  Lưu
                </Button>
              </div>
      {/* End Model giỏ hàng */}
            </div>
          </div>
        </div>
        <hr />
          {/* Start Thông tin chi tiết sản phẩm */}
        <div className="row viTriSP">
          {/* Start Content_left - thông tin hình ảnh */}
          <div className="col-sm-4 card">
            <div className="card-body">
              <h3 className="text-center">{sanPhamChiTiet.tenSP}</h3>
              <img
                src={sanPhamChiTiet.img}
                alt={sanPhamChiTiet.img}
                className="card-img-top img-fluid"
              />
            </div>
          </div>
          {/* End Content_left - thông tin hình ảnh */}
          {/* ------------------------------------ */}
          {/* Start Content_center -Thông tin chi tiết điện thoại */}
          <div className="col-sm-5">
            <table className="table table-hover table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <td colSpan="2">
                    <h3>Thông tin điện thoại</h3>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <b>Tên SP:</b>
                  </td>
                  <td>{sanPhamChiTiet.tenSP}</td>
                </tr>
                <tr>
                  <td>
                    <b>Giá SP:</b>
                  </td>
                  <td className="text-danger">
                    <h4>{sanPhamChiTiet.giaTien} VNĐ</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Mã SP:</b>
                  </td>
                  <td>{sanPhamChiTiet.maSP}</td>
                </tr>

                <tr>
                  <td>
                    <b>Màng hình:</b>
                  </td>
                  <td>{sanPhamChiTiet.mangHinh}</td>
                </tr>
                <tr>
                  <td>
                    <b>RAM:</b>
                  </td>
                  <td>{sanPhamChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>
                    <b>ROM:</b>
                  </td>
                  <td>{sanPhamChiTiet.rom}</td>
                </tr>
              </thead>
            </table>
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-block"
                    onClick={this.onClickThongbao.bind(
                      this,
                      "Bạn đã mua thành công"
                    )}
                  >
                    MUA NGAY
                  </button>
                </div>
                <div className="col-sm-4">
                  {/* <Button variant="contained" className="display-block" color="primary" data-toggle="modal" data-target="#modelId"> thềm vào giỏ hàng</Button> */}
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    data-toggle="modal"
                    data-target="#modelId"
                  >
                    GIỎ HÀNG
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Content_Center -Thông tin chi tiết điện thoại */}
          {/* ------------------------------------------------- */}
           {/* Start Content trái - thông tin thêm  */}
          <div className="col-sm-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fa fa-box-open"></i> <b> Phụ kiện gồm: </b>
                  {sanPhamChiTiet.phuKien}
                </li>
                <li className="list-group-item">
                  <i className="fa fa-user-shield"></i>
                  <b> Bảo hành: </b>
                  {sanPhamChiTiet.baoHanh}
                </li>
                <li className="list-group-item">
                  <i className="fa fa-cloud-upload-alt"></i>
                  <b> Nâng cấp: </b>
                  {sanPhamChiTiet.nangCap}
                </li>
              </ul>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <b>Khu vực HCM</b>
                </li>
                <li className="list-group-item text-primary">
                  <i className="fa fa-map-marker-alt"></i>
                  <b> Address: </b>
                  {sanPhamChiTiet.khuVuc}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
           {/* End Content trái - thông tin thêm  */}
          //  -------------------------------
          {/* End Thông tin chi tiết sản phẩm */}

  }
}
