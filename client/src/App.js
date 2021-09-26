import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AvailabilityContainer from './components/Home-Page/AvailabilityContainer';
import SidebarNav from './components/Navbar/SidebarNav';
import RoomsContainer from './components/Rooms-Page/RoomsContainer';
import ContactPage from './components/Contact-Page/ContactPage';
import MakeReservation from './components/MakeReservation-Page/MakeReservation';
import MyBooking from './components/My-Booking-Page/MyBooking';

function App() {
    const HOME = "Home", CONTACT = "Contact", ROOMS = 'Rooms', MY_BOOKING="My-Booking", MAKE_RESERVATION="Make A Reservation";
    const [currentPage, setCurrentPage] = useState(HOME);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    
    const toggleSidebarVisibility = () => {
        setSidebarVisible(!sidebarVisible);
    }
    const switchPage = (e) => {
        let newPage = e.currentTarget.children[0].innerHTML;
        setSidebarVisible(false);
        setCurrentPage(newPage);
    }
    const homePage = () => {
        return (
            <>
                <div className="main-home-page-div">
                    <div className="app__slogan-container">
                        <h1 className="app__slogan-container__slogan">Make Memories With Us</h1>
                    </div>
                    <AvailabilityContainer/>
                    <div className="app__spacer-div">

                    </div>
                </div>
            </>
        )
    }
    const roomsPage = () => {
        return (
            <div className="main-rooms-page-div">
                <div className="rooms-page-div">
                    <RoomsContainer/>
                </div>
            </div>
                
        )
    }
    const contactPage = () => {
        return (
            <div className="main-contact-page-div">
                <div className="contact-page-div">
                    <ContactPage/>
                </div>
            </div>
        )
    }
    const myBookingPage = () => {
        return (
            <div className="main-booking-page-div">
                <div className="my-booking-page-div">
                    <MyBooking/>
                </div>
            </div>
        )
    }
    const makeReservationPage = () => {
        return (
            <div className="main-make-reservation-page-div">
                <div className="make-reservation-page-div">
                    <MakeReservation/>
                </div>
            </div>
        )
    }
    return (
        <div className="app">
            <Navbar toggleSidebarVisibility={toggleSidebarVisibility} switchPage={switchPage}/>
            {sidebarVisible ? <div className="app__sidebar-div"><SidebarNav switchPage={switchPage}/></div>
            : null}
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
    )
}

export default App;
