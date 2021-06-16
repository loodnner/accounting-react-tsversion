import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #FFFFFF; 
  padding: 10px 12px;
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start;
  >ol{
      margin:0 -12px;
      >li{
       background: #D9D9D9; 
       border-radius: 18px;
       display:inline-block; 
       padding: 3px 18px; 
       font-size: 14px; 
       margin: 6px 10px;

       &.selected {
         color: #FFFFFF;
      }
      }
     
  }
  >button{
    background:none; 
    border: none; 
    padding: 2px 4px;
    border-bottom: 1px solid #333; 
    color: #666;
    margin-top: 8px;
  }
`

// drts 正常的函数组件+CSS咋安排。。

const TagsSection:React.FunctionComponent = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const onAddTag = ()=>{
    const tagName = window.prompt('新标签的名称为')
    //不能重复新增标签
    if(tagName!==null){
      if(tags.indexOf(tagName)>=0){
        window.alert('标签名不能重复')
      }else{
      setTags([...tags,tagName])
    }
    }
  }
  const [selectedTags,onSelectTag] = useState<string[]>([])
  const onToggleTag = (tag:string)=>{
    if(selectedTags.indexOf(tag)>=0){
      onSelectTag((selectedTags.filter(t=>t!==tag)))
    }else{
      onSelectTag([...selectedTags,tag])
    }
  }
  return(
    <Wrapper>
      <ol>
          {tags.map(tag=>(
          <li key={tag} onClick= {()=>{onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected':''}>
            {tag}
          </li>
          ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export  {TagsSection};