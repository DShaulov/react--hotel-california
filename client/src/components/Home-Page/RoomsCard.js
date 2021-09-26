import "./styles/RoomsCard.css";
import { useState } from 'react';
 
function RoomsCard(props) {
    const [rooms, setRooms] = useState([]);
    const updateNumRooms = (e) => {
        let roomArray = [];
        for (let i = 1; i <= e.target.value; i++) {
            roomArray.push(i);
        }
        setRooms(roomArray);
    }
    return (
        <div className="rooms-card-div">
            <div>
                <label htmlFor="rooms-num">Rooms</label>
                <select name="rooms-num" id="" onChange={ updateNumRooms }>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="rooms-card-div__room-type-div">
                { rooms.map((num) => {
                    return (
                        <>
                            <label htmlFor="rooms-type">Room { num }</label>
                            <select name="" id="rooms-type">
                                <option value="">Single</option>
                                <option value="">Double</option>
                                <option value="">Queen</option>
                                <option value="">King</option>
                                <option value="">Master-Suite</option>
                            </select>
                        </>
                    )
                }) }
            </div>
        </div>
    )
}
export default RoomsCard;