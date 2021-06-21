import Layout from '../components/Layout';
import React, { useState } from 'react';
import day from 'dayjs'
import { TypeSection } from './Money/TypeSection';
import styled from 'styled-components';
import { useRecord } from 'hooks/useRecord';
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

function Statistics() {
  const [type,setType] = useState<'consume'|'earn'>('consume')
  const {records} = useRecord()
  const {getTagName} = useTags()
  return (
    <Layout>
      <TypeWrapper>
      <TypeSection  type = {type}
                   onChange = {(type)=>setType(type)}/>
     </TypeWrapper>
      <div>
          {records.map(r=>{
            return(
              <Item>
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
            {/* {day(r.createDate).format('YYYY-MM-DD')} */}
            </Item>
            )
          })
          }
      </div>
    </Layout>
  );
}


export default Statistics;
