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

const TypeSection:React.FunctionComponent = ()=>{
  return(
    <Wrapper>
      <ul>
          <li className="selected">支出</li>
          <li>收入</li>
      </ul>   
    </Wrapper>
  )
}

export {TypeSection}