import { useState } from "react";
export default function Dark() {
    const [Dark,SetDark] = useState(false)
    const Handler = () =>{
        SetDark(!Dark)
        console.log(Dark);
    }
    return (
        <>
        </>
    )
    
}