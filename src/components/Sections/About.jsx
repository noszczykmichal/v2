import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import "./About.scss";
import usePrefersReducedMotion from "../../utils/hooks/usePrefersReducedMotion";
import { srConfig } from "../../utils/config";
import StyledPic from "../UI/StyledPic/StyledPic";

function About() {
  const revealContainer = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    return ScrollReveal().reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className="about" id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner-wrapper">
        <div>
          <p>
            Hello! My name is Michal, and I'm a Frontend Developer. Back in the
            past, for nine years, I was connected with the financial sector.
            During that time, I developed soft skills that I now apply in my
            tech career.
          </p>
          <p>
            Since the start of my journey in the IT sector, I’ve already had the
            chance to work with major brands such as Cheil and Publicis. I
            started at&nbsp;
            <a
              href="https://cheil.uk/?languages=en&regionNm=United+Kingdom"
              target="_blank"
              rel="noreferrer"
            >
              Cheil
            </a>
            , where I had the opportunity to work on projects for&nbsp;
            <a
              href="https://www.samsung.com/uk/"
              target="_blank"
              rel="noreferrer"
            >
              Samsung
            </a>
            , taking part in the promotion of their most critical, cutting-edge
            products. Later, at&nbsp;
            <a
              href="https://publicisgroupe.pl/"
              target="_blank"
              rel="noreferrer"
            >
              Publicis
            </a>
            , I contributed to a project for&nbsp;
            <a
              href="https://www.pfizer.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Pfizer
            </a>
            , helping to develop solutions used by thousands of specialists
            around the world.
          </p>
          <p>
            Most recently, as a freelance developer, I’ve been supporting
            clients in building seamless digital experiences and ensuring the
            successful delivery of applications.
          </p>
          <p>
            If you feel I might be a good match for your team, feel free to grab
            my resume from the navigation bar or check out my skills and recent
            projects.
          </p>
        </div>
        <StyledPic imagePath="/my-image" />
      </div>
    </section>
  );
}

export default About;
