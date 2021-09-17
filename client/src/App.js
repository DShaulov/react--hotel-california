import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AvailabilityContainer from './components/AvailabilityContainer';

function App() {
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
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
    return (
        <div className="app">
            <Navbar/>
            <div className="slogan-container">
                <h1 className="slogan">Make Memories With Us</h1>
            </div>
            <AvailabilityContainer/>
        </div>
    )
}

export default App;
