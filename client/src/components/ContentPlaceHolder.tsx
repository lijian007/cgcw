import { Layout } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useLocation, Link, Route, Switch } from "react-router-dom";
import { InitialState, RootDispatcher } from "../store/root-reducer";
import '../App.css';




const { Header, Content, Footer } = Layout;

interface StateProps {
    language: string;
}


const ContentPlaceHolder = () => {
    let location = useLocation();
    return (
        <div className="content-place-holder">
            <p>content place holder</p>
            <p>path: {location.pathname}</p>
        </div>

    );
}

export default ContentPlaceHolder;


