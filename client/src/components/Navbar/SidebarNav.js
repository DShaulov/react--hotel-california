import './styles/SidebarNav.css';

function SidebarNav(props) {
    return (
        <div className="sidebar-nav-div">
            <h1>spacer</h1>
            <div className="sidebar-nav-div__make-reservation-div">
                <h3>Make A Reservation</h3>
            </div>
            <div className="sidebar-nav-div__home-div">
                <h3>Home</h3>
            </div>
            <div className="sidebar-nav-div__rooms-div">
                <h3>Rooms</h3>
            </div>
            <div className="sidebar-nav-div__contact-div">
                <h3>Contact</h3>
            </div>
            <div className="sidebar-nav-div__my-booking-div">
                <h3>Contact</h3>
            </div>
        </div>
    )
}
export default SidebarNav;