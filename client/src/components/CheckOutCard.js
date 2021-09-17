import './styles/CheckOutCard.css'

function CheckOutCard(props) {
    return (
        <div className="checkout-card-div">
            <label htmlFor="Check-out">Check-out:</label>
            <input id="Check-in" type="date"/>
        </div>
    )
}
export default CheckOutCard;