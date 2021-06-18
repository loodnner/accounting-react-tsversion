import useUpdate from 'hooks/useUpdate';
import createId from 'lib/createId';
import {useEffect, useRef, useState} from 'react';
import Tags from 'views/Tags';


type TagItem = {
  id:number,
  name:string
}
// 这几个读写数据的时机我分不清楚drts
const useTags = () => { 
  // 封装一个自定义hooks
  const [tags, setTags] = useState<TagItem[]>([]);
  
  useEffect(()=>{
   let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
   if(localTags.length===0){
      localTags = [
        {id:createId(),name:'衣服'},
        {id:createId(),name:'食物'},
        {id:createId(),name:'住宿'},
        {id:createId(),name:'交通'}
      ]}
  setTags(localTags)
   },[]);//组件挂载时执行

  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags]);
  


  const findTag = (id:number)=>{
    return tags.filter(t=>t.id===id)[0]
  } 
  const updateTag = (tag:TagItem,name:string)=>{
    setTags(tags.map(t=>t.id===tag.id ? {id:tag.id,name:name } : t))
    // drts修改成重复值应该避免
  }
  const deleteTag = (tag:TagItem)=>{
    setTags(tags.filter(t=>t.id!==tag.id))
  }
  const addTag = ()=>{
    const tagName = window.prompt('新标签的名称为')
    //不能重复新增标签
    if(tagName!==''&& tagName!==null){
      if(tags.filter(t=>t.name===tagName).length>0){
        window.alert('标签名不能重复')
      }else{
      setTags([...tags,{id:createId(),name:tagName}])
    }
    }
  }

  return {tags,addTag,findTag,updateTag,deleteTag};
};

export {useTags};