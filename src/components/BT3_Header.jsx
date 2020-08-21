import React, { Component } from "react";

export default class BT3_Header extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <title>{this.props.title}</title>
        <p>{this.props.p}</p>
      </div>
    );
  }
}
