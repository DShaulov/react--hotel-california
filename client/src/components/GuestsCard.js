import './styles/GuestsCard.css';

function GuestsCard(props) {
    return (
        <div className="guests-card-div">
            <div>
                <label htmlFor="adult">Adult</label>
                <input type="number" defaultValue="0" min="0" id="adult" className="guests-card-div__adult-input"/>
            </div>
            <div>
                <label htmlFor="children">Children</label>
                <input type="number" defaultValue="0" min="0" id="children" className="guests-card-div__children-input"/>
            </div>
        </div>
    )
}
export default GuestsCard;