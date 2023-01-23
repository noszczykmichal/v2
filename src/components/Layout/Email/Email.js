import Aside from "../Aside/Aside";
import { email } from "../../../utils/config";

function Email() {
  return (
    <Aside>
      <div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </Aside>
  );
}

export default Email;
