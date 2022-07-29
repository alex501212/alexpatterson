import React from "react";
import "./Sidebar.scss";
import { SocialIcon } from "react-social-icons";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul>
        <li className="flex pt-8">
          <p className="description text-center text-[#AAABB6] font-main text-lg">
            <strong className="text-white"> Hi I'm Alex Patterson,</strong> a 22
            year old final year Computer Science student from Northern Ireland.
            I am currently open to frontend and fullstack developer
            opportunites.
          </p>
        </li>
        <li className="flex pt-8 justify-center">
          <img
            className="image"
            src="images/profile.jpg"
            alt="Alex Patterson"
          />
        </li>
        <li className="flex pt-72 justify-evenly">
          <SocialIcon
            className="icons"
            fgColor="white"
            url="https://www.linkedin.com/in/alex501212/"
            target="_blank"
          />
          <SocialIcon
            className="icons"
            fgColor="white"
            url="https://github.com/alex501212"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            className="icons"
            fgColor="white"
            url="mailto: patterson-a34@ulster.ac.uk"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
