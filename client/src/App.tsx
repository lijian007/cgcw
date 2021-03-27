import { Layout ,Divider} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { InitialState, RootDispatcher } from "./store/root-reducer";
import './App.css';

import CgcwFooter from "./components/CgcwFooter";
import logo from './images/logo.png';
import Cn from "./views/Cn";
import En from "./views/En";





const { Header, Content, Footer } = Layout;

interface StateProps {
  language: string;
}


const App = () => {
  const { language } = useSelector<InitialState, StateProps>((state: InitialState) => {
    return {
      language: state.language
    }
  });
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  return (
    <Layout className="layout">
      <Router basename={process.env.PUBLIC_URL}>
        <Header>
          <div className="header-row" >
            <div className="logo-container">
              <img className="logo-image" src={logo} alt="吾思德基督福音教會 : Christian Gospel Church in Worcester" />
            </div>
            <div className="language-selection-zone">
          
              <Link className="language-selection-text" to={language=="English"?"/cn":"/en"}  ><span onClick={() => { rootDispatcher.updateLanguage() }}>{language}</span></Link>
            </div>
          </div>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div>
            <Switch>
              <Route path="/en">
                <En />
              </Route>
              <Route path="/cn">
                <Cn />
              </Route>
              <Route path="/">
                <En />
              </Route>
            </Switch>
          </div>
        </Content>
        <Divider className="page-divider"/>
        <Footer className="footer-box" >
            <CgcwFooter />
        </Footer>
      </Router>
    </Layout>

  );
}

export default App;


