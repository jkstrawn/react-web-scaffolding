import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import Sidebar from './components/sideBar';
import './styles/main.scss';
import { ThemeProvider, createTheme } from '@mui/material';
import Environment from './utility/environment';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#cfd8fc',
            dark: '#abb5e0',
            contrastText: '#000000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },

});

Environment.init();

const App: React.FC = () => {
    return <ThemeProvider theme={theme}>
        <Navigation />
    </ThemeProvider>
}

export default App
