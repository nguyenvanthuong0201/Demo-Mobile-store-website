import React, { Component } from 'react'

export default class Databingding extends Component {
    // // Start Databingding
    // renderProduct = () =>{
    //     let title="Nguyễn Văn Thương";
    //     let productName="Front-end develope";
        
    //     return (
    //         <div className="text-center">
    //             {title}
    //             <br/>
    //             <p><b>{productName}</b></p>
    //         </div>
    //     )
    // }
    // render() {
    //     return(
    //         <div className="Product">
    //         {this.renderProduct()}
    //     </div>
    //     )
    // }
    // // End Databingding

    // Start Event
    // handleOnclick=(message)=>{
    //     console.log(message);
    // }
    // render() {
    //     return (
    //         <div>
    //             <button type="button" className="btn btn-secondary" onClick={()=>this.handleOnclick('Hi Thương')}>Show Message</button>
    //         </div>
    //     );
    // }
    // // End Event

    // // Start Lệnh điều kiện trong jsx

    // isLogin=false;
    // username="Thương";
    // renderContent =()=>{
    //     if(this.isLogin)
    //     {
    //         return <b>Chào bạn {this.username}</b>
    //     }
    //     return <button> Đăng nhập </button>
    // }
    // render() {
    //     return (
    //         <div>
    //             {this.renderContent()}
    //         </div>
    //     );
    // }
    // // End Lệnh điều kiện trong jsx


    //Start re-render với State trong react
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    login=()=>{
        this.setState({
            isLogin:true
        })
    }
    username="Thương Nguyễn";
    render() {
        return (
            <div>
                {this.state.isLogin? <b>Hello {this.username}</b>: <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>}
            </div>
        )
    }
    
    //End re-render với State trong react


}
