import "./Home.scss";

function Home() {
  return (
    <section>
      <p>
        <span className="hello">Hi, I&apos;m Michal,</span>
        <br />a junior frontend developer
      </p>
      <div className="actions">
        <button type="button">Portfolio</button>
        <button type="button">Resume</button>
      </div>
    </section>
  );
}

export default Home;
