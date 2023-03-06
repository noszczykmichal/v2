import { email } from "../../utils/config";
import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
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
