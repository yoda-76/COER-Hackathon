import { useState } from 'react';
import './GuideForm.css';
import './Plugin.css';

function GuideForm(props){
    const [toSearch,setToSearch]=useState("");
    const data={}
    fetch("https://test-58ca9-default-rtdb.firebaseio.com//user.json").then(blob=>blob.json()).then(d=>{
        for(const k in d){
            data[k]=d[k]
        }
    });
    // console.log(data)

    const submitHandler=(e)=>{
            e.preventDefault()
            const matchedGuideList=[];
               for(const key in data){
                // console.log(data[key].blogs.city);
                if(data[key].blogs.city===toSearch){
                    matchedGuideList.push(data[key]);
                }
            }
            console.log(matchedGuideList);
            props.changePageStatus({st:"guide", routes:[], guides:matchedGuideList, inputText:toSearch});
    }


    const changeHandler=(event)=>{
        // event.preventDefault();
        setToSearch(event.target.value);
        console.log(toSearch)
    };

    return (
    <div className="guideform flex flex-col justify-center align-center fs-500">
        <form className="flex flex-col  justify-center align-center">
        
        <input onChange={changeHandler} value={toSearch} type="text" id="from" name="from" placeholder="CITY"/>
        
        
        <button onClick={submitHandler} className=" text-white fs-50"  >SUBMIT</button>
        </form>
    </div>
    );
}
export default GuideForm;