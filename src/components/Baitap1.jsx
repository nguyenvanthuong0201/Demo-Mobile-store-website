
///Xử lý thay đổi ảnh bằng state/setState
// Thay đổi Ảnh bằng click chuột

import React, { Component } from "react";
class Baitap1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xam: true,
      blue: false,
      while:false
    };
  }
  chooseGray = () => {
    this.setState({
      xam: true,
      blue: false,
      while:false

    });
  };
  chooseBlue = () => {
    this.setState({
      xam: false,
      blue: true,
      while:false
    });
  };
  chooseWhite = () => {
    this.setState({
      xam: false,
      blue: false,
      while:true
    });
  };

  render() {
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    {this.state.blue?<img src="https://www.cstatic-images.com/car-pictures/main/usd10kis082e021001.png" alt=""/> : ""}
                    {this.state.xam?<img src="https://www.cstatic-images.com/car-pictures/main/usd10chs082d021001.png" alt=""/> : ""}
                    {this.state.while?<img src=" https://www.cstatic-images.com/car-pictures/main/usd10vws052i021001.png" alt=" "/> : ""}
                </div>
                <div className="col-sm-6">
                    <button type="button" className="btn btn-primary" onClick={this.chooseBlue}>Xanh</button>
                    <button type="button" className="btn btn-secondary" onClick={this.chooseGray}>Xám</button>
                    <button type="button" className="btn btn-light" onClick={this.chooseWhite}>Bạc</button>
                </div>
            </div>
        </div>
       
           </div>;
  }
}

export default Baitap1;
