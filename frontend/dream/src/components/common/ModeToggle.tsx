import React from "react";

import '../../style/css/modeToggle.css'


const ModeToggle = () => {
  return (
    <>
      <label className="switch">
        <input className="switch__input" type="checkbox"/>
        <span className="switch__background">
          <span className="switch__toggle">
            <span className="switch__moon"></span>
          </span>
          <span className="switch__stars"></span>
          <span className="switch__clouds"></span>
        </span>
      </label>
    </>
  )
}

export default ModeToggle