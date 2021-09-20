import './styles/RoomsContainer.css';
import RoomCard from './RoomCard';

function RoomsContainer(props) {
    const rooms = {
        single: {
            type: "Single",
            description: "Modern & comfortably design with comfortable sitting area"
             + "Facing the new city. Some with balconies. Connected rooms upon request",
            floor: "1-4",
            view: "Facing The City",
            size: "24m^2",
            design: "Modern",
            occupancy: "Max 1",
            rate: "$500 Per Night",
            image_url: "/assets/images/single-room-image.jpeg"
        },
        double: {
            type: "Double",
            description: "Newly designed with a modern & indulging look," +
             " Facing the city with comfortable sitting area and handmade parquet floor.",
            floor: "1-4",
            view: "Facing The City",
            size: "30m^2",
            design: "Modern",
            occupancy: "Max 3",
            rate: "$1000 Per Night",
            image_url: "/assets/images/double-room-image.jpeg"
        },
        king: {
            type: "King",
            description: "Spacious, comfortable & luxurious design," + 
            " overlooking the hotel's gardens with breathtaking view of the sea",
            floor: "1-4",
            view: "Facing The Sea",
            size: "34m^2",
            design: "Classic",
            occupancy: "Max 3",
            rate: "$2000 Per Night",
            image_url: "/assets/images/king-room-image.jpeg"
        },
        queen: {
            type: "Queen",
            description: "Well-designed living room facing the Old City with a separate bedroom," + 
            " bathroom includes a jacuzzi bath",
            floor: "1-4",
            view: "Facing The Sea",
            size: "40m^2",
            design: "Classic",
            occupancy: "Max 3",
            rate: "$2500 Per Night",
            image_url: "/assets/images/queen-room-image.jpeg"
        },
        mastersuite: {
            type: "Master-Suite",
            description: "Well-designed suite, with a spacious layout facing the Old City." + 
            " Bedroom and separate living room with a private balcony, bathroom include a jacuzzi bath, guest powder room and more.",
            floor: "5",
            view: "Facing The Sea",
            size: "50m^2",
            design: "Exclusive Classic",
            occupancy: "Max 4",
            rate: "$5000 Per Night",
            image_url: "/assets/images/master-suite-image.jpeg"
        }
    }
    const buildRoomCards = () => {
        let cardArray = [];
        let id = 0;
        for (let key in rooms) {
            cardArray.push(<RoomCard details={rooms[key]} key={id}/>)
            id += 1;
        }
        return cardArray;
    }
    return (
        <div className="rooms-container-div">
            <h2 className="rooms-container-div__title">Our Rooms</h2>
            {buildRoomCards()}
        </div>
    )
}
export default RoomsContainer;