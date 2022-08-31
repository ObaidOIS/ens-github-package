import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

const Logout = ({ setDashboardOpen, setMainOpen }) => {
    // const navigate = useNavigate();
    useEffect(() => {
        console.log("obaid");
        const response = axiosInstance.post('user/logout/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        // navigate('/');

        setMainOpen(true);
        setDashboardOpen(false);
    });
    return (
        <>
            <div>Logout</div>
        </>

    )
}
export default Logout