
import './RouteFormRedirect.css';
import './Plugin.css';
import ToggleModes from './ToogleModes';
import RouteForm from './RouteForm';
import ModeCard from './ModeCard';
import { useState } from 'react';
function RouteFormRedirect(props){
    const [fromTo,setFromTo]=useState({
        from:"",
        to:""
    })
    const routes=props.routes;
    // console.log("t2",props.routes)
    const from=Object.values(routes)[0].from;
    const to=Object.values(routes)[0].to;

    // routes.map((route)=>{})


    return (
        
    <div className="routeformredirect flex flex-col justify-center align-center fs-500">
        <p className="ff-pay ">Route</p>

        <RouteForm from={from} to={to}></RouteForm>

        {routes.map((route)=>{
            return <ModeCard mode={route.mode} fare={route.fare}></ModeCard>
        })}
        
    </div>
    
    );
}
export default RouteFormRedirect;