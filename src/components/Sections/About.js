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
            Hello! My name is Michal, and I am aspiring Junior Frontend
            Developer. For 9 years, I&apos;ve worked in various financial
            institutions, assisting entrepreneurs in acquiring financing for
            their businesses. At some point, I&apos;ve decided I want to start
            something new and here I am.
          </p>
          <p>
            Currently, I work at{" "}
            <a
              href="https://cheil.uk/?languages=en&regionNm=United+Kingdom"
              target="_blank"
              rel="noreferrer"
            >
              Cheil Poland
            </a>{" "}
            as a Web Publisher, where I collaborate with{" "}
            <a
              href="https://www.samsung.com/uk/"
              target="_blank"
              rel="noreferrer"
            >
              Samsung
            </a>{" "}
            on building, updating, and maintaining its websites. Yet, in my free
            time, I devote every moment to acquiring new skills and mastering
            the ones I currently have by building my own projects. At the
            moment, I am practicing the use of TypeScript in React projects.
          </p>
          <p>
            Grasp my resume through the button at the navigation bar, or check
            my skills and recent projects.
          </p>
          <p>Feel free to reach out to me at any time through LinkedIn.</p>
        </div>
        <StyledPic imagePath="/my-image" />
      </div>
    </section>
  );
}

export default About;
