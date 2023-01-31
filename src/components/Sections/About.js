import "./About.scss";

function About() {
  return (
    <section className="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner-wrapper">
        <div>
          <p>
            Hello! My name is Michal and I am aspiring Junior Frontend
            Developer. For 9 years I&apos;ve worked in various financial
            institutions helping entrepreneurs acquire financing for their
            businesses. At some point, I&apos;ve decided I want to start
            something new and here I am.
          </p>
          <p>
            Currently, I work at Cheil Poland as a Web Publisher, where I
            co-operate with Samsung upon building, updating and administration
            of its sites. Yet, every free moment I devote to acquiring new
            skills and mastering the ones I currently have through building my
            own projects.
          </p>
          <p>
            Grasp my resume through the button at the navigation bar or check my
            skills and latest projects.
          </p>
          <p>
            Feel free to contact me any time through Linkedin or the contact
            form attached at the bottom of the page!{" "}
          </p>
        </div>
        {/* <div className="wrap"> */}
        <div className="image-wrapper" />
        {/* </div> */}
      </div>
    </section>
  );
}

export default About;
