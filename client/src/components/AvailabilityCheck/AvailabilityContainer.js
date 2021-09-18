import './styles/AvailabilityContainer.css';
import CheckInCard from './CheckInCard';
import CheckOutCard from './CheckOutCard';
import GuestsCard from './GuestsCard';
import RoomsCard from './RoomsCard';

function AvailabilityContainer(props) {
    return (
        <div className="availability-container">
            <h2 className="availability-container__title">Check Availability</h2>
            <div className="availability-container__card-div">
                <CheckInCard/>
                <CheckOutCard/>
                <GuestsCard/>
                <RoomsCard/>
                <button className="availability-container__card-div__go-btn">Go</button>
            </div>
        </div>
    )
}
export default AvailabilityContainer;