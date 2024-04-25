import React from "react";
import logo from "./logo.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Modules/Layout/Component/Navbar";
import image from "./Assets/dashboard.png";
function App() {
  const handlePop = () => {
    toast("Hello World", {
      icon: "ℹ",
    });

    toast("Hello World", {
      icon: "⚠",
    });
    // toast.error("sjhakj");
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="container home-one-container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="heading">Manager Your Expense</h1>
            <h1>
              <strong className="sub-heading">Control your Money</strong>
            </h1>
            <p className="para">
              Start Creating your budget and save ton of money
            </p>
            <button className="btn-custom2">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container home-two-container">
        <div className="row">
          <div className="col-sm-12">
            <img src={image} className="image" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
