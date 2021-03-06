import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'hooks/useTag';
import styled from 'styled-components';
import Icon from "../components/Icon"
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Center from 'components/Center';
import Space from 'components/Space';

// import React from 'react';drts 这边都不需要引入react了么

const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    a{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;
    }
      border-bottom: 1px solid #d5d5d9;
      line-height: 20px;
      margin: 0px 14px 0px 16px ; 
  }
`;


  function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id}>
            <span className="oneLine">{tag.name}</span>
            <Icon iconName = "iconfont icon-right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;