import { useState, useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion";
import { srConfig, skillsTabs } from "../../utils/config";
import tabHeight from "../../sassStyles/_variables.scss";
import Icon from "../Layout/Icon/Icon";
import "./Skills.scss";

function Skills() {
  const [activeTabId, setActiveTabId] = useState(0);
  const tab = tabHeight.tabHeight;
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
    <section className="skills" ref={revealContainer}>
      <h2 className="numbered-heading">What I&apos;ve learnt</h2>
      <div className="tab">
        <div className="tab__list">
          {skillsTabs.map((element, index) => (
            <button
              type="button"
              key={`${element.name.split(" ").join("")}`}
              onClick={() => setActiveTabId(index)}
              id={index}
              is-active={(activeTabId === index).toString()}
            >
              {element.name}
            </button>
          ))}
          <div
            className="tab__highlight"
            style={{
              transform: `translateY(${activeTabId * tab.substring(0, 2)}px)`,
            }}
          />
        </div>

        <div className="tab__panels">
          <div className="tab__panel">
            {skillsTabs[activeTabId].contents.map((element) => (
              <div key={element.subHeading}>
                <Icon name={element.iconName} animate={false} alt="noname" />
                <p>{element.subHeading}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
