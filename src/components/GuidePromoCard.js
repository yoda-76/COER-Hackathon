import './GuidePromoCard.css';
import './Plugin.css';

function GuidePromoCard(){
    return(
        <div className="guidepromocard flex flex-col text-white justify-center align-center">
            <p className="heading fs-500">Become a Guide</p>
            <p className="subheading fs-300">Help Others For their best journey</p>
            <button className='bg-dark text-white'>Register Now</button>
        </div>
    );
}
export default GuidePromoCard;