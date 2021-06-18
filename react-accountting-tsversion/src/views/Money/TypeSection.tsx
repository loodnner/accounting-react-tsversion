import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
type MoneyType = 'consume'|'earn'

type Props = {
  type: MoneyType,
  onChange:(type: MoneyType)=>void
}

const TypeSection:React.FunctionComponent<Props> = (props)=>{
  const typeMap = {
    'consume':'支出',
    'earn':'收入'
  }
  type Keys = keyof typeof typeMap
  const [typeList] = useState<Keys[]>(['consume','earn'])
  // 将typeList的类型收缩
  const type = props.type
  return(
    <Wrapper>
      <ul>
          {typeList.map(t=>
           <li key={t} className={type===t?'selected':''}
           onClick={()=>{props.onChange(t)}}>
             {typeMap[t]}
           </li>
            )} 
      </ul>   
    </Wrapper>
  )
}

export {TypeSection}