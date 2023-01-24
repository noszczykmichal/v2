/* eslint-disable no-unused-vars */

import "./About.scss";

function About() {
  const one = <h1>Hi, my name is </h1>;
  const two = <h2>Michał Noszczyk.</h2>;
  const three = <h3>I&apos;m an aspiring Junior Frontend Developer.</h3>;
  const four = (
    <p>
      I&apos;m passionate about learning new things. Every free moment, I spend
      on practising my skills, building my own projects and having fun while
      programming.
    </p>
  );

  const content = [one, two, three, four];

  return <div className="about">{content.map((el) => el)}</div>;
}

export default About;
