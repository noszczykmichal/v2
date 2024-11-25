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
            past, for nine years, I was connected with the financial sector,
            which greatly impacted my career and allowed me to develop soft
            skills.
          </p>
          <p>
            Though my experience in the IT sector covers only two companies, I
            have already had the privilege of working for big brands. Previously
            at{" "}
            <a
              href="https://cheil.uk/?languages=en&regionNm=United+Kingdom"
              target="_blank"
              rel="noreferrer"
            >
              Cheil
            </a>
            , I had the opportunity to work for{" "}
            <a
              href="https://www.samsung.com/uk/"
              target="_blank"
              rel="noreferrer"
            >
              Samsung
            </a>{" "}
            and took part in the promotion of their most critical cutting-edge
            products in the tech industry. At{" "}
            <a
              href="https://publicisgroupe.pl/"
              target="_blank"
              rel="noreferrer"
            >
              Publicis
            </a>
            , in my current position, I work for a big player in the medical
            industry, where I take part in developing solutions used by
            thousands of specialists all over the world.
          </p>
          <p>
            In the meantime, I also contribute to internal projects, where I am
            developing an automation tool that is used daily by peer developers
            to speed up their work.
          </p>
          <p>
            If you feel I might be a good match for your team, grab my resume
            through the navigation bar or check my skills and recent projects.
          </p>
        </div>
        <StyledPic imagePath="/my-image" />
      </div>
    </section>
  );
}

export default About;
