/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion";

import "./About.scss";

function About() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

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

  return (
    <section className="about">
      {prefersReducedMotion ? (
        <>{content.map((element) => element)}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            content.map((element, index) => {
              return (
                <CSSTransition timeout={2000} classNames="fadeup" key={index}>
                  <div style={{ transitionDelay: `${index + 1}00ms` }}>
                    {element}
                  </div>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      )}
    </section>
  );
}

export default About;
