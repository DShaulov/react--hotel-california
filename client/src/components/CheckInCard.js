import './styles/CheckInCard.css'

function CheckInCard(props) {
    return (
        <div className="checkin-card-div">
            <label htmlFor="Check-in">Check-in:</label>
            <input id="Check-in" type="date"/>
        </div>
    )
}
export default CheckInCard;
