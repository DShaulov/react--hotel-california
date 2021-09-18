import './styles/Navbar.css'
import { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';

function Navbar(props) {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        }
    });
    const updateDimensions = () => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    if (dimensions['width'] >= 850) {
        return (
            <nav className="navbar">
                <div className="navbar__title-div">
                    <h2>Hotel California</h2>
                    <p>Hotel & Spa</p>
                </div>
                <div className="navbar__home-div">
                    <h3>Home</h3>
                </div>
                <div className="navbar__rooms-div">
                    <h3>Rooms</h3>
                </div>
                <div className="navbar__contact-div">
                    <h3>Contact</h3>
                </div>
                <div className="navbar__my-booking-div">
                    <h3>My-Booking</h3>
                </div>
                <div className="navbar__make-reservation-div">
                    <h3 className="navbar__make-reservation__header">Make A Reservation</h3>
                </div>
            </nav>
        )
    }
    else {
        return(
            <nav className="navbar">
                <div className="navbar__hamburger-div" onClick={props.toggleSidebarVisibility}>
                    <div className="navbar__hamburger-div__bars"></div>
                    <div className="navbar__hamburger-div__bars"></div>
                    <div className="navbar__hamburger-div__bars"></div>
                </div>
                <div className="mobile-navbar__title-div">
                    <h2>Hotel California</h2>
                </div>
                <div className="navbar__spacing-div">
                </div>
            </nav>
        )
    }
    
}

export default Navbar;