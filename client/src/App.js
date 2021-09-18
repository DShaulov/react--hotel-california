import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AvailabilityContainer from './components/AvailabilityCheck/AvailabilityContainer';
import { CSSTransition } from 'react-transition-group';

function App() {
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebarVisibility = () => {
        setSidebarVisible(!sidebarVisible);
    }
    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then(
            (result) => {
                setData(result);
            },
            (error) => {
                setError(true);
            }
        )
    })
    if (sidebarVisible) {
        return (
            <div className="app">
                <div className="app__sidebar-div sidebar-enter">
    
                </div>
                <Navbar toggleSidebarVisibility={toggleSidebarVisibility}/>
                <div className="app__slogan-container">
                    <h1 className="app__slogan-container__slogan">Make Memories With Us</h1>
                </div>
                <AvailabilityContainer/>
            </div>
        )
    }
    else {
        return (
            <div className="app">
                <Navbar toggleSidebarVisibility={toggleSidebarVisibility}/>
                <div className="app__slogan-container">
                    <h1 className="app__slogan-container__slogan">Make Memories With Us</h1>
                </div>
                <AvailabilityContainer/>
            </div>
        )
    }
    
}

export default App;
