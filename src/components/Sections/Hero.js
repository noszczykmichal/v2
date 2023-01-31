import { useState, useEffect, useRef } from "react";
import { TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion";

import "./Hero.scss";
import { navDelay } from "../../utils/config";
import TransitionWrapper from "../UI/TransitionWrapper/TransitionWrapper";

function About() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is </h1>;
  const two = <h2 className="heading--big">Michal Noszczyk.</h2>;
  const three = (
    <h3 className="heading--big">
      I&apos;m an aspiring Junior Frontend Developer.
    </h3>
  );
  const four = (
    <p className="subheading">
      I&apos;m passionate about learning new things. Every free moment, I spend
      on practising my skills, building my own projects and having fun while
      programming.
    </p>
  );

  const content = [one, two, three, four];

  return (
    <section className="hero">
      {prefersReducedMotion ? (
        <>
          {content.map((element) => {
            const key = element.props.children.substring(
              element.props.children.length - 4,
            );
            return <div key={key}>{element}</div>;
          })}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            content.map((element, index) => {
              const key = element.props.children.substring(
                element.props.children.length - 4,
              );

              return (
                <TransitionWrapper
                  classes="fadeup"
                  animStart={isMounted}
                  delayFactor={index}
                  key={key}
                >
                  {element}
                </TransitionWrapper>
              );
            })}
        </TransitionGroup>
      )}
    </section>
  );
}

export default About;
