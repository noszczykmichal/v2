import { useState, useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion";

import "./About.scss";
import WithCssTransition from "./WithCssTransition/WithCssTransition";

function About() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
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
                <WithCssTransition
                  classes="fadeup"
                  animStart={isMounted}
                  delayFactor={index}
                  key={key}
                >
                  {element}
                </WithCssTransition>
              );
            })}
        </TransitionGroup>
      )}
    </section>
  );
}

export default About;
