import './Plugin.css';
import './Guideinfo.css'
import guideimg from "../assests/guide-img.jpg";
function Guideinfo(){
    return (
        <div className="guideinfo flex flex-row align-center justify-center">
            <div className="guideinfo-text flex flex-col ">
            <p className="fs-500 ff-serif ">Become a Guide</p>
            <p className="fs-300 ff-serif ">Guide others for the best experience and earn the rewards</p>
            <button className='text-white'>Become a guide</button>
            </div>
            <div className="guideinfo-img"  />

        </div>
    );
}
export default Guideinfo;