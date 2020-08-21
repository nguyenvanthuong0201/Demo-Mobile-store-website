import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Baitap1 from './components/Baitap1';
import Header from "./components/Header";
// import BTVongLap from "./components/BTVongLap";
// import Baitap2 from "./components/Baitap2";
// import BT3_Home from "./components/BT3_Home";

import Main_top from "./components/Main_top";
import Main_DSSanPham from "./components/Main_DSSanPham";
import Footer from "./components/Footer";
// import BT3_Header from "./components/BT3_Header";
// import Product from "./components/Product";
// import Databingding from "./components/Databinding";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <Main_top/>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {/* <BTVongLap /> */}
          <Main_DSSanPham/>
        </div>
        <div className="col-sm-12 mt-4">
          <Footer/> 
        </div>
      </div>
    </div>
  );
}

export default App;
