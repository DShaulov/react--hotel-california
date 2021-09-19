import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AvailabilityContainer from './components/Home-Page/AvailabilityContainer';
import SidebarNav from './components/Navbar/SidebarNav';
import ContactUserInfo from './components/Contact-Page/ContactUserInfo';

function App() {
    const HOME = "Home", CONTACT = "Contact", ROOMS = 'Rooms', MY_BOOKING="My-Booking", MAKE_RESERVATION="Make A Reservation";
    const [currentPage, setCurrentPage] = useState(HOME);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    
    const toggleSidebarVisibility = () => {
        setSidebarVisible(!sidebarVisible);
    }
    const switchPage = (e) => {
        let newPage = e.currentTarget.children[0].innerHTML;
        setCurrentPage(newPage)
    }
    const homePage = () => {
        return (
            <>
                <div className="app__slogan-container">
                    <h1 className="app__slogan-container__slogan">Make Memories With Us</h1>
                </div>
                <AvailabilityContainer/>
            </>
        )
    }
    const roomsPage = () => {
        return (
            <>
                <div className="rooms-page-div">

                </div>
                
            </>
        )
    }
    const contactPage = () => {
        return (
            <>
                <div className="contact-page-div">
                    <ContactUserInfo/>
                </div>
                
            </>
        )
    }
    const myBookingPage = () => {
        return (
            <>
                <div className="my-booking-page-div">
                    <h1>MY BOOKING</h1>
                </div>
                
            </>
        )
    }
    const makeReservationPage = () => {
        return (
            <>
                <div className="make-reservation-page-div">
                    <h1>Reservation</h1>
                </div>
                
            </>
        )
    }
    return (
        <div className="app">
            <Navbar toggleSidebarVisibility={toggleSidebarVisibility} switchPage={switchPage}/>
            {sidebarVisible ? <div className="app__sidebar-div"><SidebarNav/></div>
            : null}
            <div className="app__main-page-div">
                {(() => {
                    switch(currentPage) {
                        case ROOMS : return roomsPage();
                        case CONTACT : return contactPage();
                        case MY_BOOKING: return myBookingPage();
                        case MAKE_RESERVATION: return makeReservationPage();
                        default: return homePage();
                    }
                })()}
            </div>
        </div>
    )
}

export default App;
