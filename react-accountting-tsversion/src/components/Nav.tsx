import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon"

const NavWrapper = styled.div`
  /* background: white; */
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul {
  display: flex;
  >li{
    width:33.3333%;
    text-align:center;
    a{
      display: flex;
      flex-direction: column-reverse;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
    .icon {
        width: 20px;      
        height: 20px;
      }
    &.selected{
      font-weight:bold;
    }
    }   
  }
}
`

const Nav = ()=>{
    return (
        <NavWrapper>
             <ul>
            <li>
              <NavLink to="/money" activeClassName="selected">记一笔
              <Icon iconName = "iconfont icon-money"/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tags" activeClassName="selected">标签
              <Icon iconName = "iconfont icon-label"/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName="selected">统计
              <Icon iconName = "iconfont icon-statistics"/>
              </NavLink>
            </li>
          </ul>
        </NavWrapper>
    )
}


export default Nav;