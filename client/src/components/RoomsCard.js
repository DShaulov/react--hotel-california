import "./styles/RoomsCard.css"

function RoomsCard(props) {
    return (
        <div className="rooms-card-div">
            <div>
                <label htmlFor="rooms-num">Rooms</label>
                <input type="number" defaultValue="0" min="0" id="rooms-num"/>
            </div>
            <div>
                <label htmlFor="rooms-type">Room Type</label>
                <select name="" id="rooms-type">
                    <option value="">Single</option>
                    <option value="">Double</option>
                    <option value="">Queen</option>
                    <option value="">King</option>
                    <option value="">Master-Suite</option>
                </select>
            </div>
        </div>
    )
}
export default RoomsCard;