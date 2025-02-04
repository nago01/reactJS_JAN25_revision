import { useState } from "react";


export const FileManager = (props) => {
    const { intialData } = props;
    const [data, setData] = useState(intialData);
    return <div>
        File Manager
        {data.map((item , index) => {
            return <div style={{"display" : "flex" , "flexDirection": "column" , "background": "yellow", "paddingLeft" : "10px"}} onClick={()=>{
                let newArr = [...data];
                item.isOpen = !item.isOpen;
                newArr[index] = item;
                setData(newArr);
            }}>
              {item.name}
              {item.isOpen && item.type == "folder" && <FileManager intialData = {item.children}/> }  
            </div>
        })}
    </div>
}