import Aside from "../Aside/Aside";
import { email } from "../../../utils/config";
import "./Email.scss";

function Email() {
  return (
    <Aside orientation="right">
      <div className="email-container">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </Aside>
  );
}

export default Email;
