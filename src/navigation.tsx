import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './resources/routes';
import NotePage from './pages/notePage';
import NotFoundPage from './pages/notFoundPage';
import HomePage from './pages/homePage';
import Sidebar from './components/sideBar';

export default class Navigation extends Component {
    render() {
        return <>
            <Router>
                <Sidebar />
                <div className='content'>
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path={ROUTES.homePage} element={<HomePage />} />
                        <Route path={ROUTES.notePage()} element={<NotePage />} />
                    </Routes>
                </div>
            </Router>
        </>
    }
}
