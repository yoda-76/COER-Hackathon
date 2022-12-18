import './Plugin.css';
import './TouristCard.css'

function TouristCard(props){
    return (
        <div className='touristcard flex flex-row'>
            <div className="touristcard-img"></div>
            <div className="touristcard-info   flex flex-col">
                <div className="touristcard-info-name fs-600 text-dark">{props.name}</div>
                <div className="touristcard-info-desc text-dark">{props.desc}</div>
                <div className="touristcard-info-area text-dark">{props.area}</div>

            </div>

        </div>
    );
}
export default TouristCard;