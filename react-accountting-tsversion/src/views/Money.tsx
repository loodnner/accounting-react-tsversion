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
    <MyLayout>
      <TagsSection selectedTagsId = {selectedRecord.tagsId}
                   onChange = {tagsId=>onChange({tagsId})}/>       
      <NoteSection  notes = {selectedRecord.notes}
                   onChange = {notes=>onChange({notes})}/>
      <TypeSection  type = {selectedRecord.type}
                   onChange = {type=>onChange({type})}/>
      <NumberPadSection  amount = {selectedRecord.amount}
                   onChange = {amount=>onChange({amount})}
                   onOk = {submit}/>
    </MyLayout>
    // numberpad的onchange用的是string的类型
  );
}

export default Money;