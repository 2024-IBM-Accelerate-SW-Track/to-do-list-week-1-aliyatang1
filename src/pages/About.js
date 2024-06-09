import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_name}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Aliya Tang</div>
            <div className="brief_description">
              Hi everyone! My name is Aliya Tang, a rising junior at Barnard College studying Computer Science. I am interested 
              in computer vision and robotics. In the future, I hope to explore a role in Software Engineering!
            </div>
          </div>
        </div>
      </div>
    )
  }
}
