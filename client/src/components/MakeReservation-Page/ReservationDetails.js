import './styles/ReservationDetails.css'

function ReservationDetails(props) {
    let name = props.name;
    let email = props.email;
    let checkin = props.checkin;
    let checkout = props.checkout;
    let adults = props.adults;
    let children = props.children;
    let roomsNum = props.roomsNum;
    let roomTypes = props.roomTypes;
    return (
        <div className="reservation-details">
            <p className="reservation-details__paragraph">Reservation Details:</p>
            <div className="reservation-details__details-div">
                <div className="reservation-details__details-div__div-1">
                    <p>{ name }</p>
                    <p>{ email }</p>
                    <p>{ checkin }</p>
                    <p>{ checkout }</p>
                </div>
                <div className="reservation-details__details-div__div-2">
                    <p>{ adults }</p>
                    <p>{ children }</p>
                    <p>{ roomsNum }</p>
                    { roomTypes }
                </div>
            </div>
        </div>
    )
}
export default ReservationDetails;