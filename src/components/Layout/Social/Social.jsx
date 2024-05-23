import Aside from "../Aside/Aside";
import Icon from "../Icon/Icon";
import { socialMedia, linkAnalyticsHandler } from "../../../utils/config";
import "./Social.scss";

function Social() {
  return (
    <Aside orientation="left">
      <ul className="social-icons">
        {socialMedia.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
              onClick={linkAnalyticsHandler("side_navigation", social.name)}
            >
              <Icon name={social.name} />
            </a>
          </li>
        ))}
      </ul>
    </Aside>
  );
}

export default Social;
