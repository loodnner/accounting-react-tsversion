import Layout from '../components/Layout';
import React, { useState } from 'react';
import day from 'dayjs'
import { TypeSection } from './Money/TypeSection';
import styled from 'styled-components';
import { RecordItem, useRecord } from 'hooks/useRecord';
import { useTags } from 'hooks/useTag';

// 支出收入组件
// 拿数据record和tag drts
//先展示基础数据，每个record一条记录；然后再把时间提出来，造一个新的hash数据结构。

const TypeWrapper = styled.div`
background:#FFF;
`

const Item = styled.div`
display: flex;
justify-content: space-between;
font-size: 18px;
background-color: white;
line-height:20px;
padding:10px 16px;
> .notes{
margin-right:auto;
margin-left:16px;
font-size: 14px;
color:#999;
}
`
const Header = styled.h3`
  font-weight:normal;
  font-size: 18px;
  line-height: 20px;
  padding:10px 16px;
`

function Statistics() {
  const [type,setType] = useState<'consume'|'earn'>('consume')
  const {records} = useRecord()
  const {getTagName} = useTags()
  const hash:{[K:string]:RecordItem[]} = {}
  const selectedRecords = ()=>{
    return records.filter(r=>r.type===type)
  }
  selectedRecords().map(r=>{
    const key = day(r.createDate).format('YYYY年MM月DD日')
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(r)
  })

  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0
    if(a[0]>b[0]) return -1
    if(a[0]<b[0]) return 1 
    return 0
  })

  return (
    <Layout>
      <TypeWrapper>
      <TypeSection  type = {type}
                   onChange = {(type)=>setType(type)}/>
     </TypeWrapper>
    {
      array.map(([date,records])=><div>
        <Header>
          {date}
        </Header>
        <div>
          {records.map(r=>{
            return(
              <Item key={r.createDate}>
                <div className="tags">
                  {r.tagsId.map(r=>getTagName(r)).join('/')}
                </div>
                {r.notes && <div className="notes">
                  {r.notes}
                </div>
                }
                <div className="amount">
                ￥{r.amount}
                </div>
            </Item>
            )
          })
          }
      </div>
      </div>)
    }
    </Layout>
  );
}


export default Statistics;
