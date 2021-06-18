import Button from "components/Button"
import Center from "components/Center"
import Icon from "components/Icon"
import Input from "components/Input"
import Layout from "components/Layout"
import Space from "components/Space"
import React, { ChangeEventHandler } from "react"
import { useParams,useHistory } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "hooks/useTag"
type Params = {
    id:string
}

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;

const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const EditTag:React.FC=()=>{
    const { id:idString } = useParams<Params>()
    const { findTag,updateTag,deleteTag } = useTags()
    const tag = findTag(parseInt(idString))
    // 关于解构复制，参数不相等，怎么对应到右边返回的三个呢drts

    const tagContent = (tag:{id:number,name:string})=>{
        return(
            <div>
        <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名"
               value={tag.name} onChange={ (e)=>{
                    updateTag(tag,e.target.value)}}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={()=>{deleteTag(tag)}}>删除标签</Button>
    </Center>
    </div>
        )
    }
    const history = useHistory()
    const onClickBack = ()=>{
        history.goBack()
    }

    return(
    <Layout>
      <Topbar>
        <Icon iconName="iconfont icon-left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon iconName=''/>
      </Topbar>
      {tag? tagContent(tag):(<Center><Space/><Space/>标签不存在</Center>)}
      {/* react的html模块可以加各种js，很灵活 */}
    </Layout>
    )
}

export default EditTag