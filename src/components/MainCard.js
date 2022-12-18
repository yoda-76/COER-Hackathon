import React, { useState } from "react";
import "./MainCard.css";
import "./Plugin.css";
import GuideForm from "./GuideForm";
import RouteForm from "./RouteForm";
import ToggleModes from "./ToogleModes";
import GuidePromoCard from "./GuidePromoCard";
import Guideinfo from "./Guideinfo";

function MainCard(props) {
  const [toggle, setToggle] = useState({
    route: true,
    guide: false,
  });
  const changePageStatus=(status)=>{
    console.log("test3")
    console.log(status)
    props.changePageStatus(status)
    
  }

  return (
    <div className="maincard align-center justify-center flex flex-col">
      <div className="toggleModes align-center justify-center flex flex-row">
        <p className="ff-pay ">Way-Finder</p>

      </div>
      <RouteForm changePageStatus={changePageStatus}></RouteForm>
      <div className="toggleModes align-center justify-center flex flex-row">

      <p className="ff-pay">Travel-Saathi</p>
      </div>
      <GuideForm changePageStatus={changePageStatus}></GuideForm>
      {/* <Guideinfo/> */}
      
    </div>
  );
}
export default MainCard;
