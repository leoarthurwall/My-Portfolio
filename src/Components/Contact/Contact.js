import '../Contact/contact.scss' 

function Contact () {
    return(
        <div className="contact-container">
            <div className="contact-header">
                <h2 className="contact-header-wording">Contact<em>.</em></h2>
            </div>
            <div className="contact-main">
                <h1 className="contact-main-get-in-touch">Get in Touch<em>!</em></h1>
                <h3 className="contact-main-summary"><em>Thank you</em> for viewing my portfolio. I hope you enjoyed your time here. If you feel I could be a great fit within your team, or you'd simply like to have a chat, please <em>feel free to reach out</em>. </h3>
                <button className="contact-main-button">Contact</button>
            </div>


        </div>
    )
}
export default Contact