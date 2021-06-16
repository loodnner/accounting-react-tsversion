import React from "react"
import "../styles/icon.scss"

type Props={
    iconName:string;
}

const Icon = (props:Props)=>{
    return(
        <div className="icon">
        <span className={props.iconName}></span>
        </div>
    )
}

export default Icon;
