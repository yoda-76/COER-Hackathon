import './Plugin.css';
import './UserProfileRedirect.css'
import dp5 from "../assests/profileUploads/dp5.jpeg";
import dp6 from "../assests/profileUploads/dp6.jpeg";
import dp7 from "../assests/profileUploads/dp7.jpeg";
import UserProfile from './UserProfile';
import Blogs from './Blogs';
function UserProfileRedirectA(props){
    console.log("testttt",props.city)
    return (
        <div className='userprofileredirect flex flex-col justify-content align-center'>
            <h3>{props.city}</h3>
            <UserProfile name="ramesh" credit="93" city={props.city} dp={dp5}></UserProfile>
            <UserProfile name="sumesh" credit="53" city={props.city} dp={dp6}></UserProfile>
            <UserProfile name="ridhi" credit="53" city={props.city} dp={dp7}></UserProfile>

            
        </div>
    );
}
export default UserProfileRedirectA;