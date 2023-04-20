import React from "react";
import "./About.css";
import Navbar from "../Components/Navbar";
function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className="about-me">
        <br></br>
        <h1>About Me</h1>
        <p>
          Hi, I'm Bartosz! I'm a student based in Denamrk. I enjoy coding, and
          I'm passionate about AI.
        </p>
        <p>
          I have experience in coding, and I'm always eager to learn new things
          and take on new challenges. When I'm not working, you can find me in
          the gym.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
