import React from "react";
import "./headerOptions.css";
import { Avatar } from "@mui/material";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="header_option">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
