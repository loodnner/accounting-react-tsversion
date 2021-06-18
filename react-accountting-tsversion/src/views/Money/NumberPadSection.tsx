import { useState } from 'react'
import {Wrapper} from './NumberPadSection/Wrapper'

type Props = {
  amount:number,
  onChange:(amount:number)=>void
  onOk?:()=>void
}
// 输入小数点后，amount是number所以展示不清晰的问题木有解决
const NumberPadSection:React.FunctionComponent<Props> = (props)=>{
  const [output,_setOutput] = useState(props.amount.toString())
  const setOutput = (buttonText:string)=>{
    if(buttonText!=='.'){
      _setOutput(buttonText)
    props.onChange(parseFloat(buttonText))
    }
  }
  const onButtonClick = (e:React.MouseEvent)=>{
    const buttonText = (e.target as HTMLButtonElement).textContent
    if(buttonText===null){return;}
    switch(buttonText){
      case  '0':
      case  '1':
      case  '2':
      case  '3':
      case  '4':
      case  '5':
      case  '6':
      case  '7':
      case  '8':
      case  '9':
        if(output.length>=16){
          window.alert('太长长长长了，尝试减少一下位数吧')
          return;
        }
          if(output==='0'){
            setOutput(buttonText)
          }else{
            setOutput(output+buttonText)
          }
          break;
      case  '.':
        if(output.length>=16){
          window.alert('太长长长长了，尝试减少一下位数吧')
          return;
        }
          if(output.indexOf('.')>=0)
            {break}
            else{
            setOutput(output+'.')
          }
          break;
      case '删除':
          if(output.length===1){
            setOutput('0')
          }else{
            setOutput(output.slice(0,-1))
          }
          break;
      case '清空':
         setOutput('0')
         break;
      case 'OK':
        if(props.onOk)
        {props.onOk()}
        break;

    }
  }
  return(
    <Wrapper>
      <div className="output">
          {output}
        </div>
        <div className="pad clearfix" onClick={onButtonClick}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
    </Wrapper>
  )
}

export  {NumberPadSection};
