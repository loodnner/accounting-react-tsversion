import { useEffect, useState } from "react"
import useUpdate from "./useUpdate"

export type RecordItem = {
    tagsId:number[],
     notes:string,
     type:'consume'|'earn',
     amount:number,
     createDate:string //ISO 8601
}

type newRecordItem = Omit<RecordItem,'createDate'>

export const useRecord = ()=>{
const [records,setRecords] = useState<RecordItem[]>([])
// 初次渲染，fetch数据
useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') ||'[]'))
},[])
// 监听数据变化 drts不加括号就会warning，监听的对象不能变化
useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
},[records])


const addRecord =(newRecord:newRecordItem)=>{
    if(newRecord.amount===0){return false;}
    if(newRecord.tagsId.length===0){
        alert('选择一个标签可以帮助更好的分类哦')
        return false;
    }
    const record = {...newRecord,createDate:(new Date()).toISOString()}
    setRecords([...records,record])
    return true;
 }
 return {records,addRecord}
}
