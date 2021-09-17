import './styles/Navbar.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar__title">
                <h2>Hotel California</h2>
                <p>Hotel & Spa</p>
            </div>
            <div className="navbar__home">
                <h3>Home</h3>
            </div>
            <div className="navbar__rooms">
                <h3>Rooms</h3>
            </div>
            <div className="navbar__about">
                <h3>About</h3>
            </div>
            <div className="navbar__contact">
                <h3>Contact</h3>
            </div>
            <div className="navbar__make-reservation">
                <h3 className="navbar__make-reservation__header">Make A Reservation</h3>
            </div>
        </nav>
    )
}

export default Navbar;