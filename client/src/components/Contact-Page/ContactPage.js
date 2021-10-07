import './styles/ContactPage.css';
import axios from 'axios';
import { useState } from 'react';

function ContactPage(props) {
    const [notAllFilled, setNotAllFilled] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        let email = e.target[1].value;
        let phone = e.target[2].value;
        let subject = e.target[3].value;
        let text = e.target[4].value;
        if( text === '' || email === '' || phone === '' || subject === 'select' || text === '') {
            setNotAllFilled(true);
            return;
        }
        setNotAllFilled(false);
        axios.post('/contact', {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            text: text
        }).then( success => {

        }).catch( error => {
            console.log(error);
        }) 
    }
    return (
        <div className="contact-div">
            <h2 className="contact-div__title">Contact Us</h2>
            <p className="contact-div__paragraph">Please fill in the information and one of our respresentatives will contact you.</p>
            <form action="POST" className="contact-div__form" id="contact-form" onSubmit={handleSubmit}>
                {notAllFilled ? <p className="contact-div__form__fill-message">Please fill all fields</p> : null}
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
                <button type="submit" form="contact-form" className="contact-div__form__submit-btn">Submit</button>
            </form>
        </div>
    )
}
export default ContactPage;