import "./Plugin.css";
import "./UserProfile.css";
import dp from "../assests/profileUploads/dp.webp";

import post from "../assests/profilePhotos/post.jpg";
import like from "../assests/images/like-pending.png";

import dislike from "../assests/images/unlike-pending.png";

function UserProfile(props) {
  


  return (
    <div className="userprofile flex align-center text-dark justify-center flex-col">
      <div className="userprofile-info flex flex-row">
        <div className="userprofile-dp">
          <div style={{ backgroundImage: `url(${props.dp})` }} />
        </div>
        <div className="userprofile-info flex flex-col justify-center ">
          <div className="userprofile-info-name ff-pay">{props.name}</div>
          <div className="userprofile-info-city ff-mons ">{props.city}</div>
        </div>
      </div>
      <div className="uploaderbuttons flex flex-row">
        <div className="uploaderbuttons-like"><div style={{ backgroundImage: `url(${like})` }}/></div>
        <div className="uploaderbuttons-dislike"><div style={{ backgroundImage: `url(${dislike})` }}/></div>

      </div>
        <div className="userprofile-info-credit ff-mons flex flex-row align-center">
          <div className="userprofile-info-credit-box ">Credit-{props.credit}</div>
        </div>
    </div>
  );
}
export default UserProfile;
