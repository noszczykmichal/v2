import Icon from "../Layout/Icon/Icon";
import { socialMedia } from "../../utils/config";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="icons-container">
        <ul className="social-icons--footer">
          {socialMedia.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={social.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p>Built by Michal Noszczyk</p>
    </footer>
  );
}

export default Footer;
