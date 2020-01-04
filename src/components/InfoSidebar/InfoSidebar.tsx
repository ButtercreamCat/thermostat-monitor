import React, { Component } from "react";
import "./InfoSidebar.scss";
import { Link } from "react-router-dom";

interface InfoSidebarProps {
  id: string;
  url: string;
}

class InfoSidebar extends Component<InfoSidebarProps> {
  state = {
    section: "Thermostat"
  };

  render() {
    const { id, url } = this.props;
    const { section } = this.state;
    return (
      <section className="unitInfo_sidebar">
        <Link to="/" className="button button-withoutBorder-withIcon">
          <span className="icon-back"></span>
          Back
        </Link>
        <div className="unitInfo_sidebar_header">
          <img
            src="/images/room.jpg"
            alt="header"
            className="unitInfo_sidebar_header_pic"
          ></img>
          <div className="unitInfo_sidebar_header_overlay"></div>
          <h1 className="unitInfo_sidebar_header_title">Unit {id}</h1>
        </div>
        <div className="unitInfo_sidebar_btns">
          <Link
            to={`${url}/thermostat`}
            className={`button button-rect-withIcon ${
              section === "Thermostat" ? "button-active" : ""
            }`}
            onClick={() => {
              this.setState({ section: "Thermostat" });
            }}
          >
            <span className="icon-thermostat"></span>
            <div>Thermostat</div>
          </Link>
          <Link
            to={`${url}/chart`}
            className={`button button-rect-withIcon ${
              section === "Chart" ? "button-active" : ""
            }`}
            onClick={() => {
              this.setState({ section: "Chart" });
            }}
          >
            <span className="icon-chart"></span>
            <div>Chart</div>
          </Link>
        </div>
        <img
          className="unitInfo_sidebar_logo"
          src="/images/logo.svg"
          alt="logo"
        ></img>
      </section>
    );
  }
}

export default InfoSidebar;
