import React from "react";
import "./About.css";
import Navbar from "../Components/Navbar";
function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className="about-me">
        <h1>Who was in Paris?</h1>
        <p>
          Paris syndrome (French: syndrome de Paris; Japanese: パリ症候群,
          romanized: Pari shōkōgun) is a sense of extreme disappointment
          exhibited by some individuals when visiting Paris, who feel that the
          city was not what they had expected. The condition is commonly viewed
          as a severe form of culture shock.
        </p>
        <p>
          The syndrome is characterized by a number of psychiatric symptoms such
          as acute delusional states, hallucinations, feelings of persecution
          (perceptions of being a victim of prejudice, aggression, hostility
          from others), derealization, depersonalization, anxiety, as well as
          psychosomatic manifestations such as dizziness, tachycardia, sweating
          most notably, but also others, such as vomiting. While the syndrome
          has been particularly noted among Japanese tourists, it has also
          affected other travellers or temporary residents from East and
          Southeast Asia, such as those from China, South Korea, and Singapore.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
