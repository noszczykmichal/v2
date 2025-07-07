import Aside from "@/components/Layout/Aside/Aside";
import { email, linkAnalyticsHandler } from "@/utils/config";
import "@/components/Layout/Email/Email.scss";

export default function Email() {
  return (
    <Aside orientation="right">
      <div className="email-container">
        <a
          href={`mailto:${email}`}
          onClick={linkAnalyticsHandler("side_navigation", "email")}
        >
          {email}
        </a>
      </div>
    </Aside>
  );
}
