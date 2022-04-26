import MailChimpSubscribe from 'react-mailchimp-subscribe'
import Form from './Form'


const NewsletterSub = () => {



    const action = 'https://bellefu.us7.list-manage.com/subscribe/post?u=500989ddbb1252dfed8f35378&amp;id=bad07acb72'

    return (
        <MailChimpSubscribe
            url={action}
            render={({ subscribe, status, message }) => (
                <div>
                    <Form

                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)} />

                    {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                    {status === "success" && <div style={{ color: "green" }}>Thank you for Subscribing !</div>} */}
                </div>
            )
            }


        />




    )
}
export default NewsletterSub