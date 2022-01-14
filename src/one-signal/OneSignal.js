import { useEffect } from "react";
import OneSignal from "react-onesignal";

const OneSignalComponent = () => {
  useEffect(() => {
    OneSignal.init({ appId: "6a3f2c40-c5c5-428f-bcc5-e99e91a06974" });
  }, []);

  const tagHandler = (tag)=>{
      console.log(tag);
      OneSignal.sendTag('tech', tag)
  }

  return <div>
      <p onClick={()=>tagHandler('react')}> React Subcription </p>
      <p onClick={()=>tagHandler('angular')}> Angular Subcription </p>
      <p onClick={()=>tagHandler('vue')}> Vue Subcription </p>
  </div>;
};

export default OneSignalComponent;
