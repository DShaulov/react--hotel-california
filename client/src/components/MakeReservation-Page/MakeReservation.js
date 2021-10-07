import './styles/MakeReservation.css';
import { useState } from 'react';
import axios from 'axios';

function MakeReservation(props) {
    const [reservationMade, setReservationMade] = useState(false);
    const [rooms, setRooms] = useState([]);
    const updateNumRooms = (e) => {
        let roomArray = [];
        for (let i = 1; i <= e.target.value; i++) {
            roomArray.push(i);
        }
        setRooms(roomArray);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        let email = e.target[1].value;
        let checkin = e.target[2].value;
        let checkout = e.target[3].value;
        let adults = e.target[4].value;
        let children = e.target[5].value;
        let roomsNum = e.target[6].value;
        let targetIndex = 7;
        let roomTypes = []
        while (e.target[targetIndex].className !== 'make-reservation-div__make-reservation-btn') {
            roomTypes.push(e.target[targetIndex][e.target[targetIndex].selectedIndex].innerText)
            targetIndex += 1;
        }
        let id = Date.now().toString();
        axios.post('/reservation', {
            id: id,
            name: name,
            email: email,
            checkin: checkin,
            checkout: checkout,
            adults: adults,
            children: children,
            roomsNum: roomsNum,
            roomTypes: roomTypes,
        }).then( success => {
            console.log(success);
        }).catch( error => {
            console.log(error);
        })

    }
    return (
        <div className="make-reservation-div">
            <h2 className="make-reservation-div__title">Make A Reservation</h2>
            <form action="POST" onSubmit={handleSubmit} className="make-reservation-div__form" id="reservation-form">
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
            <button type="submit" form="reservation-form" className="make-reservation-div__make-reservation-btn">Make Reservation</button>
        </div>
    )
}
export default MakeReservation;