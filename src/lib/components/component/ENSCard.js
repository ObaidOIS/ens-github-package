import React from 'react'
// import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';


const ENSCard = ({ ens, walletAddress, setEnsOpen, setDashboardOpen }) => {
    // const navigate = useNavigate();
    const Regis_func = () => {
        axiosInstance
            .post(`user/register/`, {
                ens_name: ens.meta.name,
                password: ens.tokenId,
                wallet_address: walletAddress,
                contract_address: ens.contract
            })
            .then((res) => {
                // console.log(res);
                login_func();
            });
    };
    const login_func = () => {
        axiosInstance
            .post(`token/`, {
                ens_name: ens.meta.name,
                password: ens.tokenId,
            })
            .then((res) => {
                // console.log(res);
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                // navigate('/dashboard/');
                setDashboardOpen(true);
                setEnsOpen(false);
                // debugger;

            });
    };

    // if (!ens.meta) return;
    // let pattern = /.eth/g;
    // if (!(pattern.test(ens.meta.name))) return;
    return (
        <div className='card ens-card' onClick={Regis_func}>
            <div className='card content'>
                <div className='card content-item'>
                    Contract Address
                </div>
                <div className='card address'>
                    {ens.contract}
                </div>
                <div className='card content-item'>
                    Token id
                </div>
                <div className='card address'>
                    {ens.tokenId}
                </div>
                <div className='card content-item'>
                    ENS Name
                </div>
                <div className='card address'>
                    {ens.meta.name}
                </div>
                <div className='card content-item'>
                    Collection Description
                </div>
                <p className='card'>
                    {ens.meta.description}
                </p>
            </div>
        </div>
    )
}

export default ENSCard
