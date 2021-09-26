import './styles/MyBooking.css';

function MyBooking(props) {
    return (
        <div className="my-booking-div">
            <h2 className="my-booking-div__title">My Booking</h2>
            <p className="my-booking-div__paragraph">Fill in your reservation ID:</p>
            <form action="" className="my-booking-div__booking-id-form">
                <input name="input-id" type="text" placeholder="Reservation ID"/>
            </form>
        </div>
    )
}

export default MyBooking;
