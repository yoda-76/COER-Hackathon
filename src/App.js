import Background from "./components/Background";
import Blogs from "./components/Blogs";
import GuideForm from "./components/GuideForm";
import Guideinfo from "./components/Guideinfo";
import ModeCard from "./components/ModeCard";
import Navbar from "./components/Navbar";
import RouteForm from "./components/RouteForm";
import Tourist from "./components/Tourist";
import UserProfile from "./components/UserProfile";
import "./App.css"
import RouteFormRedirect from "./components/RouteFormRedirect";
import { createContext, useState } from "react";
import GuideFormRedirect from "./components/GuideFormRedirect";
import UserProfileRedirect from "./components/UserProfileRedirect";
import CityInput from "./components/CityInput";

const pageContext=createContext({
  page:"",
  setPage:()=>{}
});
function App() {
  const [routesFetched,setRoutesFetched]=useState({});
  const [guidesFetched,setGuidesFetched]=useState({});
  // const [guides,setGuides]=useState({});
  const [pageStatus,setPageStatus]=useState({st:"home",routes:[],guides:[]});
  const [page,setPage]=useState("home");
  const value={page,setPage};
  const changePageStatus=(status)=>{
      console.log("test",status);
      setPageStatus(status);

      setGuidesFetched(status);
      console.log("guides fetched",guidesFetched);
      setRoutesFetched(status.routes);
      console.log("route fetched",routesFetched);


      
    }
  return (
    <div className="app ">
    <pageContext.Provider value={value}>
      <Navbar></Navbar>
      
      {pageStatus.st==="home"&&<Background changePageStatus={changePageStatus}/>}

      {pageStatus.st==="guide"&&<GuideFormRedirect guides={guidesFetched}/>}

      {pageStatus.st==="profile"&&<UserProfileRedirect/>}
      
      {pageStatus.st==="route"&&<RouteFormRedirect routes={routesFetched}/>}
    </pageContext.Provider>
    </div>
  );
}

export default App;
export {pageContext};
