import Input from "components/Input";
import React, { ChangeEventHandler, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  
`;

type Props = {
  notes:string,
  onChange:(notes:string)=>void
}

const NoteSection:React.FC<Props> = (props)=>{
  const note = props.notes
  const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
    props.onChange(e.target.value)
  }
  // drts上面这个onChange不是很清晰

  return(
    <Wrapper>
       <Input label = "备注" type="text" placeholder="请输入" value={note} onChange={onChange}/>
    </Wrapper>
  )
}


export {NoteSection}
