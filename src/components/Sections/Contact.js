import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { email, srConfig } from "../../utils/config";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion";
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
        At present, I&apos;m seeking a place where I can gain my first
        commercial experience, preferably in the position of Intern/Junior React
        Developer. If you feel that I could be a good fit for your team,
        I&apos;m open to any job inquiries. However, if you just have a question
        or want to say hi, feel free to contact me. I&apos;ll do my best to get
        back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
