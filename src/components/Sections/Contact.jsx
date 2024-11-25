import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { email, srConfig, linkAnalyticsHandler } from "../../utils/config";
import usePrefersReducedMotion from "../../utils/hooks/usePrefersReducedMotion";
import "./Contact.scss";

function Contact() {
  const revealContainer = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    ScrollReveal().reveal(revealContainer.current, srConfig());

    return () => {};
  }, []);

  return (
    <section id="contact" className="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What&apos;s Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        At present, I&apos;m open to new job opportunities, preferably in the
        position of React Frontend Developer. If you feel that I could be a good
        fit for your team, I&apos;m open to any job inquiries.
      </p>

      <a
        className="email-link"
        href={`mailto:${email}?subject=Re: Say Hello`}
        onClick={linkAnalyticsHandler("contact_section", "say_hello_button")}
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
