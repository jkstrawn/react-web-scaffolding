import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../resources/routes';
import { Button } from '@mui/material';
import Environment from '../utility/environment';

export default class HomePage extends Component {

    render() {
        return <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            <h1 style={{ fontSize: '4em' }}>Server {Environment.serverUrl}</h1>
            <Button variant="contained" onClick={() => this.test()}>Test</Button>
            <Link to={ROUTES.notePage("10")}>Note 10</Link>
        </div>
    }

    test() {
        console.log("test");
    }
} 