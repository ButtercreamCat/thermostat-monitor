import React, { Component } from "react";
import "./StatusButtons.scss";

const modeArr = ["Cool", "Heat", "Fan-on", "Auto", "Off"];

interface StatusButtonsProps {
  handleClick: (status: string) => void;
  status: string;
}
class StatusButtons extends Component<StatusButtonsProps> {
  render() {
    const { handleClick, status } = this.props;
    return (
      <div className="statusButtonsContainer">
        {modeArr.map(mode => (
          <button
            key={mode}
            className={`button button-square-withIcon ${status === mode &&
              "button-active"}`}
            onClick={() => {
              handleClick(mode);
            }}
          >
            <span className={`icon-${mode.toLocaleLowerCase()}`}></span>
            <div>{mode}</div>
          </button>
        ))}
      </div>
    );
  }
}

export default StatusButtons;
