import { Col, Layout, Row } from 'antd';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import ContentPlaceHolder from "../components/ContentPlaceHolder";
import SideMenu from "../components/SideMenu";
import TopMenuEn from "../components/TopMenuEn";
import styled from 'styled-components'; 


const { Header, Content, Footer, Sider } = Layout;

interface Props {
}
interface StateProps {
  language: string;
}

const En = () => {

  return (
        <Content style={{zIndex:-1}}>
        {/* <Content style={{zIndex:-1}} className="main-content"> */}
        <TopMenuEn />
          <Row justify="center">
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 19, offset: 2 }}>
              <div>
                <Switch>
                  <Route path="/">
                    <ContentPlaceHolder />
                </Route>
                </Switch>
              </div>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 2, offset: 1 }}>
            <SideMenu />
            </Col>
          </Row>

        </Content>
      
  );

}

export default En;

