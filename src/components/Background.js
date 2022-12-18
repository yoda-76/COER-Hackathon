import "./Plugin.css";
import RouteForm from "./RouteForm";
import GuideForm from "./GuideForm";
import "./Background.css";
import background from "../assests/bg-img.jpg";
import ToggleModes from "./ToogleModes";
import MainCard from "./MainCard";
import Blogs from "./Blogs";
import BlogsA from "./BlogsA";
import BlogsD from "./BlogsD";
import CityInput from "./CityInput";
import { useState } from "react";
function Background(props) {
  const data={}
  fetch("https://test-58ca9-default-rtdb.firebaseio.com/user.json").then(blob=>blob.json()).then(user=>{for(const k in user){data[k]=user[k]}})
  // console.log("data",data);
  const [citySearchInput, setCitySearchInput]=useState("");
  const [citySearch, setCitySearch]=useState("jaipur");

  const changePageStatus=(status)=>{
    console.log("test2")
    props.changePageStatus(status);
    console.log(status)
  }
  const changeHandler=(e)=>{
    e.preventDefault()
    setCitySearchInput(e.target.value)
    console.log(citySearchInput)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    setCitySearch(citySearchInput);
    
  }
  console.log(citySearch)
  return (
    <div className="background  flex flex-col">
      
      <form className="cityinput">
          <input onChange={changeHandler} 
          value={citySearchInput} placeholder="city" type="textarea"></input>
          <button onClick={submitHandler}>SEARCH</button>
          </form>
      {citySearch==="jaipur"&&<Blogs data={data}/>}
      {citySearch==="agra"&&<BlogsA data={data}/>}
      {citySearch==="delhi"&&<BlogsD data={data}/>}
      <MainCard changePageStatus={changePageStatus}/>
    </div>
  );
}
export default Background;
