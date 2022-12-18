
import './GuideFormRedirect.css';
import './Plugin.css';
import ToggleModes from './ToogleModes';
import RouteForm from './RouteForm';
import ModeCard from './ModeCard';
import GuideForm from './GuideForm';
import UserProfile from './UserProfile';
import UserProfileRedirect from './UserProfileRedirect';
import UserProfileRedirectA from './UserProfileRedirectA';
import UserProfileRedirectD from './UserProfileRedirectD';
import { useState } from 'react';
function GuideFormRedirect(props){
    // const city=props.city;
    // const data=[{
    //     name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    {name:'Ajay',
    //      city:"Jaipur",
    //      credit:'53'
    //    },
    //    ]
      //  const i=Math.floor(Math.random() * 10);
    //   const [city,setCity]=useState()
    const city=props.guides.inputText;
    // console.log(props.guides.inputText);
    // setCity(props.guides.inputText);
    
    // const changePageStatus=(status)=>{
    //   setCity(status.inputText)
    // }

    return (
        
    <div className="guideformredirect flex flex-col justify-center align-center fs-500">
        <p className="ff-pay ">Guide</p>

        <GuideForm></GuideForm>
        {/* <GuideForm changePageStatus={changePageStatus}></GuideForm> */}
        
        {city==="jaipur"&&<UserProfileRedirect city={city}></UserProfileRedirect>}
        {city==="agra"&&<UserProfileRedirectA city={city} ></UserProfileRedirectA>}
        {city==="delhi"&&<UserProfileRedirectD city={city}></UserProfileRedirectD>}

        
    </div>
    
    );
}
export default GuideFormRedirect;