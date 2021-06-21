import { useState } from 'react'
import generateOutput from './NumberPadSection/generateOutput'
import {Wrapper} from './NumberPadSection/Wrapper'

type Props = {
  amount:number,
  onChange:(amount:number)=>void
  onOk?:()=>void
}
// 输入小数点后，amount是number所以展示不清晰的问题木有解决
const NumberPadSection:React.FunctionComponent<Props> = (props)=>{
  const [output,_setOutput] = useState(props.amount.toString())
  const setOutput = (output:string)=>{
    let newOutput:string
    if(output.length>=16){
      newOutput = output.slice(0,16)
    }else if(output.length===0){
      newOutput = '0'
    }else {
      newOutput = output
    }
    _setOutput(newOutput)
    props.onChange(parseFloat(newOutput))
    }

  const onButtonClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'OK') {
      if (props.onOk) {props.onOk();}
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }}

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
