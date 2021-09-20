import './styles/RoomCard.css';

function RoomCard(props) {
    return(
        <div className="room-card-div">
            <img src={props.details["image_url"]} alt="" className="room-card-div__img"/>
            <div className="rooms-card-div__description-div">
                <h3>{props.details["type"]}</h3>
                <p>{props.details["description"]}</p>
            </div>
            <div className="room-card-div__details-div">
                <ul>
                    <li>floor: {props.details["floor"]}</li>
                    <li>view: {props.details["view"]}</li>
                    <li>size: {props.details["size"]}</li>
                    <li>occupancy: {props.details["occupancy"]}</li>
                    <li>rate: {props.details["rate"]}</li>
                </ul>
                <button className="room-card-div__details-div__reserve-btn">Reserve</button>
            </div>
        </div>
    )
}
export default RoomCard;