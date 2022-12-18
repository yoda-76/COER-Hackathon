import './Plugin.css';
import './UserProfileRedirect.css'
import dp from "../assests/profileUploads/dp.webp";
import dp2 from "../assests/profileUploads/dp2.jpeg";
import dp3 from "../assests/profileUploads/dp3.jpeg";
import UserProfile from './UserProfile';
import Blogs from './Blogs';
function UserProfileRedirect(props){
    console.log("testttt",props.city)
    return (
        <div className='userprofileredirect flex flex-col justify-content align-center'>
            <h3>{props.city}</h3>
            
            <UserProfile name="yoda" credit="53" city={props.city} dp={dp}></UserProfile>
            <UserProfile name="vic" credit="25" city={props.city} dp={dp3}></UserProfile>
            <UserProfile name="vishakha" credit="66" city={props.city} dp={dp2}></UserProfile>

            
        </div>
    );
}
export default UserProfileRedirect;