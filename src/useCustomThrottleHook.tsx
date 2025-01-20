import { useEffect, useRef, useState } from "react";

export const useCustomThrottleHook = (val , delay) => {
    let timer;
    const [value, setValue] = useState(val);
    const lastCalled = useRef(new Date().getTime());
    console.log(lastCalled , 'lastCalled');
    useEffect(() => {
        if(new Date().getTime() - lastCalled.current > delay){
            lastCalled.current = new Date().getTime();
            setValue(val);
        }
        else {
        timer = setTimeout(()=>{
           lastCalled.current = new Date().getTime();
           setValue(val);
        },delay)
        }
        // will be called at cleanup before the new useEffect runs we will clear as previous timer if we have
        return ()=>{clearTimeout(timer)}
    }, [val])
    return value;
}