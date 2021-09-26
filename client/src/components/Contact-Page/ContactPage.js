import './styles/ContactPage.css';

function ContactPage(props) {
    return (
        <div className="contact-div">
            <h2 className="contact-div__title">Contact Us</h2>
            <p className="contact-div__paragraph">Please fill in the information and one of our respresentatives will contact you.</p>
            <form action="" className="contact-div__form">
                <input type="text" placeholder="Name" className="contact-div__form__name"/>
                <input type="text" placeholder="Email" className="contact-div__form__email"/>
                <input type="text" placeholder="Phone" className="contact-div__form__phone"/>
                <label htmlFor="select-subject" className="contact-div__form__subject-label">Subject:</label>
                <select name="select-subject" id="" defaultValue="select" className="contact-div__form__select">
                    <option value="select">-- Select --</option>
                    <option value="group-booking">Group Booking</option>
                    <option value="comments-and-feedback">Comments & Feedback</option>
                    <option value="website-feedback">Website Feedback</option>
                    <option value="technical-support">Technical Support</option>
                </select>
                <textarea name="" id="" cols="30" rows="10" className="contact-div__form__comment" placeholder="Comment"></textarea>
            </form>
        </div>
    )
}
export default ContactPage;