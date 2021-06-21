import styled from "styled-components";
import {useTags} from 'hooks/useTag';


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

type Props = {
  selectedTagsId:number[],
  onChange:(selectedTagsId:number[])=>void
}

const TagsSection:React.FunctionComponent<Props> = (props)=>{
  const {tags,addTag} = useTags()
  const selectedTagsId = props.selectedTagsId
  const onToggleTag = (tagsId:number)=>{
    if(selectedTagsId.indexOf(tagsId)>=0){
      props.onChange((selectedTagsId.filter(t=>t!==tagsId)))
    }else{
      props.onChange([...selectedTagsId,tagsId])
    }
  }
  return(
    <Wrapper>
      <ol>
          {tags.map(tag=>(
          <li key={tag.id} onClick= {()=>{onToggleTag(tag.id)}} className={selectedTagsId.indexOf(tag.id)>=0 ? 'selected':''}>
            {tag.name}
          </li>
          ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export  {TagsSection};