import {React,useState} from 'react'

export default function Home() {
    const [active, setActive] = useState("");
    const handleClick = (event) => {
        setActive(event.target.id);
    } 
    return (
        <div className={active === "1" ? "active" : undefined} id={"1"} onClick={handleClick}>Home</div>
    )
}
