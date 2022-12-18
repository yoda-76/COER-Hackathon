import './RouteForm.css';
import './Plugin.css';
import ToggleModes from './ToogleModes';
import {useContext, useState } from 'react';

function RouteForm(props){
    const [toSearch, setToSearch]=useState({
        from:props.from,
        to:props.to
    })
    // const uId=useContext(useridContext);


    const data={}
    fetch("https://test-58ca9-default-rtdb.firebaseio.com//user.json").then(blob=>blob.json()).then(d=>{
        for(const k in d){
            data[k]=d[k]
        }
    });


    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log(toSearch)
        
        
        const matchedRouteList=[];
        for(const key in data){
            const user=data[key];
            const routes=user.routes;
            console.log(routes);
            for(const k in routes){
                
                console.log(routes[k])
                if(routes[k].from===toSearch.from && routes[k].to===toSearch.to){
                    matchedRouteList.push(routes[k]);
                }
                
            }
        }
        console.log(matchedRouteList);
        
        // const matchedRoutes=data.filter(route=>{
            //     return (toSearch.from===route.from && toSearch.to===route.to);
            // });
            console.log("possible routes",matchedRouteList);
            props.changePageStatus({
                st:"route",
                routes:matchedRouteList
                });
            
    }


    const changeHandler=(event)=>{
        // event.preventDefault();
        const name=event.target.name;
        const value=event.target.value;
        
        setToSearch({
            ...toSearch, [name]:value 
        });
    };
    return (
        
    <div className="routeform flex flex-col justify-center align-center fs-500">
        
        <form className="flex flex-col justify-center align-center ">
        <div className="flex flex-col">
        <input  onChange={changeHandler} type="text" id="from" name="from" placeholder='from' value={props.from}/>
        
        <input onChange={changeHandler} type="text" id="to" name="to" placeholder='to' value={props.to}/>
        </div>
        <button onClick={submitHandler} className=" text-white fs-50" >SUBMIT</button>
        </form>
    </div>
    );
}
export default RouteForm;