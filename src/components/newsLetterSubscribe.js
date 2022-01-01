import MailchimpSubscribe from "react-mailchimp-subscribe";
import EarlyAccess from "./earlyAccess";

export default function NewsletterSubscribe() {
  const mailchimpUrl =
    "https://gmail.us20.list-manage.com/subscribe/post?u=003772f277fbf45252c782663&amp;id=7cd859ad95";

  return (
    <MailchimpSubscribe
      url={mailchimpUrl}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <EarlyAccess
            subscribe={subscribe}
            status={status}
            message={message}
          />
        );
      }}
    ></MailchimpSubscribe>
  );
}
