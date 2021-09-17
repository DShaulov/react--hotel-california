import './AvailabilityContainer.css';
import CheckInCard from './CheckInCard';
import CheckOutCard from './CheckOutCard';

function AvailabilityContainer(props) {
    return (
        <div className="availability-container">
            <h2 className="availability-container__title">Check Availability</h2>
            <div className="availability-container__card-div">
                <CheckInCard/>
                <CheckOutCard/>
            </div>
        </div>
    )
}
export default AvailabilityContainer;