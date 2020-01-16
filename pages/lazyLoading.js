import React,{ useState } from "react";
import Dynamic from "next/dynamic";

const componentPathName = "../components/Customer.js";

const Time = ()=>{
    const [time,setTime] = useState(Date.now());
    const Customer = Dynamic(import(componentPathName));
    const ChangeTime = async ()=>{
        const moment = await import("moment");
        setTime(moment.default(Date.now()).format());
    }
    return <div>
        <span>loading Customer Component!</span>
        <Customer/>
        <br/>
        <span>{time}</span>
        <br/>
        <button onClick={ChangeTime}>Click Change Time!</button>
    </div>
}

export default Time;