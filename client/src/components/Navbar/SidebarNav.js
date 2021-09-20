import './styles/SidebarNav.css';

function SidebarNav(props) {
    return (
        <div className="sidebar-nav-div">
            <h1>spacer</h1>
            <div className="sidebar-nav-div__make-reservation-div" onClick={props.switchPage}>
                <h3>Make A Reservation</h3>
            </div>
            <div className="sidebar-nav-div__home-div" onClick={props.switchPage}>
                <h3>Home</h3>
            </div>
            <div className="sidebar-nav-div__rooms-div" onClick={props.switchPage}>
                <h3>Rooms</h3>
            </div>
            <div className="sidebar-nav-div__contact-div" onClick={props.switchPage}>
                <h3>Contact</h3>
            </div>
            <div className="sidebar-nav-div__my-booking-div" onClick={props.switchPage}>
                <h3>My-Booking</h3>
            </div>
        </div>
    )
}
export default SidebarNav;