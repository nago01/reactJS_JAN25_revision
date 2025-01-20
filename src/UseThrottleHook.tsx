import { useEffect, useRef } from "react";

export const UseThrottleHook = (delay: number , text: string , setRenderCount , renderCount) => {
   
    let lastCall = useRef(new Date().getTime());
    
    useEffect(() => {
        let currCall = new Date().getTime();
        if(currCall - lastCall.current>delay){
            lastCall.current = currCall;
            setRenderCount(renderCount + 1);
            return text;
        }
    },[text])
       
}