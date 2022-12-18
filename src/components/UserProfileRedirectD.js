import './Plugin.css';
import './UserProfileRedirect.css'
import dp8 from "../assests/profileUploads/dp8.jpeg";
import dp9 from "../assests/profileUploads/dp9.jpeg";
import dp10 from "../assests/profileUploads/dp10.jpeg";
import UserProfile from './UserProfile';
import Blogs from './Blogs';
function UserProfileRedirectD(props){
    console.log("testttt",props.city)
    return (
        <div className='userprofileredirect flex flex-col justify-content align-center'>
            <h3>{props.city}</h3>
            
            <UserProfile name="shradha" credit="89" city={props.city} dp={dp8}></UserProfile>
            <UserProfile name="sam" credit="32" city={props.city} dp={dp9}></UserProfile>
            <UserProfile name="shrishti" credit="58" city={props.city} dp={dp10}></UserProfile>

            
        </div>
    );
}
export default UserProfileRedirectD;