import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    let timeout;

    const startTimer = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            alert('Session expired due to inactivity.');
            navigate('/login');
            // Optionally, call a logout API to end the session on the backend
        }, 30 * 60 * 1000); // 30 minutes
    };

    useEffect(() => {
        startTimer();
        window.addEventListener('mousemove', startTimer);
        window.addEventListener('keypress', startTimer);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('mousemove', startTimer);
            window.removeEventListener('keypress', startTimer);
        };
    }, []);

    return (
        // Your app component code
    );
}

export default App;
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            alert('Session expired. Please log in again.');
            navigate('/login');
        }
        return Promise.reject(error);
    }
);
