import './styles/MakeReservation.css';
import { useState } from 'react';

function MakeReservation(props) {
    const [rooms, setRooms] = useState([]);
    const updateNumRooms = (e) => {
        let roomArray = [];
        for (let i = 1; i <= e.target.value; i++) {
            roomArray.push(i);
        }
        setRooms(roomArray);
    }
    return (
        <div className="make-reservation-div">
            <h2 className="make-reservation-div__title">Make A Reservation</h2>
            <p className="make-reservation-div__paragraph">Please fill in the information and one of our respresentatives will contact you.</p>
            <form action="" className="make-reservation-div__form">
                <div className="make-reservation-div__form__info-div">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Name"/>
                    <label htmlFor="Check-in">Email:</label>
                    <input id="email" type="text" placeholder="Email"/>
                    <label htmlFor="Check-in">Check-in:</label>
                    <input id="Check-in" type="date"/>
                    <label htmlFor="Check-out">Check-out:</label>
                    <input id="Check-in" type="date"/>
                    <div className="make-reservation-div__form__info-div__guests-label-div">
                        <label htmlFor="adult" className="make-reservation-div__form__info-div__guests-label-div__adult-label">Adult</label>
                        <label htmlFor="children" className="make-reservation-div__form__info-div__guests-label-div__children-label">Children</label>
                    </div>
                    <div className="make-reservation-div__form__info-div__guests-input-div">
                        <input type="number" defaultValue="0" min="0" id="adult" className="guests-card-div__adult-input"/>
                        <input type="number" defaultValue="0" min="0" id="children" className="guests-card-div__children-input"/>
                    </div>
                </div>
                <div className="make-reservation-div__form__room-div">
                    <div className="make-reservation-div__form__room-div__select-div">
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
                    <div>
                        { rooms.map((num) => {
                            return (
                                <>
                                    <label htmlFor="rooms-type">Room { num } Type</label>
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
            </form>
            <button className="make-reservation-div__make-reservation-btn">Make Reservation</button>
        </div>
    )
}
export default MakeReservation;