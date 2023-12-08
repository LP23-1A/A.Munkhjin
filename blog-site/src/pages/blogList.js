import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Card } from "@/components/Article"
import axios from "axios"
import { useRef, useState } from "react"
let api = axios.get("")
export default function BlogList() {
    // const [data, setData] =useState([])
    let valueH = useRef('')
    const valueInput = (value) =>{
        valueH.current = value
        console.log(value);
    }

    return (
        <div className="flex flex-col w-[200px]">
        <input onChange={(e)=>valueInput(e.target.value,) } className="bg-gray " placeholder="t1"/>
        <input onChange={(e)=>valueInput(e.target.value) }  className="bg-gray " placeholder="d2"/>
        <input onChange={(e)=>valueInput(e.target.value) }  className="bg-gray " placeholder="ta3"/>
        <input onChange={(e)=>valueInput(e.target.value) }  className="bg-gray " placeholder="h4"/>
        <button>create</button>
        </div>
    )
    
}