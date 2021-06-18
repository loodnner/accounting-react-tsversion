import React from "react"
import "../styles/icon.scss"

type Props={
    iconName:string;
}& React.BaseHTMLAttributes<HTMLBaseElement>
// drts 解决封装后的组件没有普通属性的问题

const Icon = (props:Props)=>{
    const {iconName,children,className,...rest} = props
    return(
        <div className="icon">
        <span className={props.iconName} {...rest}></span>
        </div>
    )
}

export default Icon;
