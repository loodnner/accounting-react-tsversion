import Layout from '../components/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import { useRecord } from 'hooks/useRecord';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
const TypeWrapper = styled.div`
  background-color: #c4c4c4;
`

type MoneyType = 'consume'|'earn'

const defaultRecordValue = {
  tagsId:[] as number[],
  notes:'',
  type:'consume' as MoneyType,
  amount:0
}

function Money() {
 const [selectedRecord,setRecord] = useState(defaultRecordValue)

 const {addRecord} = useRecord()
//  引入record数据管理

 type RecordItem = typeof selectedRecord
 const onChange = (obj:Partial<RecordItem>) =>{
   setRecord({
    ...selectedRecord,
    ...obj}
 )}

 const submit = ()=>{
   if(addRecord(selectedRecord)){
     setRecord(defaultRecordValue)
   }

 }

  return (
    <MyLayout scrollTop = {9999}>
      <TagsSection selectedTagsId = {selectedRecord.tagsId}
                   onChange = {tagsId=>onChange({tagsId})}/>       
      <NoteSection  notes = {selectedRecord.notes}
                   onChange = {notes=>onChange({notes})}/>
      <TypeWrapper>
      <TypeSection  type = {selectedRecord.type}
                   onChange = {type=>onChange({type})}/>
      </TypeWrapper>
      <NumberPadSection  amount = {selectedRecord.amount}
                   onChange = {amount=>onChange({amount})}
                   onOk = {submit}/>
    </MyLayout>
    // numberpad的onchange用的是string的类型;drts这边ok没有清空数据！因为value已经set了
  );
}

export default Money;