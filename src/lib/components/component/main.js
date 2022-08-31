import React from 'react'
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const Main = ({ setMainOpen, setEnsOpen, setAsset, setWalAddress }) => {
    // const navigate = useNavigate();
    const [ensName, setEnsName] = useState([]);
    const [walletAdddress, setWalletAddress] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
        }
        else {
            console.log('MetaMask is not installed!');
            alert('Please install MetaMask extension! or any other wallet');
        }
    }

    const filterENS = (ens_data) => {
        const ens_list = ens_data.filter((ens) => {
            if (!ens.meta) return;
            return ens.meta.name.includes('eth')
        }
        )
        return ens_list;
    }

    const getENSData = async () => {

        if (!walletAdddress) return;
        console.log('walletAdddress', walletAdddress);
        // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAdddress}`)
        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x57df94268b69fe62bc5925c79d2e1b799acc4e23`)
        const data = await response.json();
        console.log("Owned Assets: ", data.items);
        const filteredData = filterENS(data.items);
        console.log("ENS Tokens: ", filteredData);
        setEnsName([data]);
        // navigate('/ens', { state: { asset: filteredData, walletAddress: walletAdddress } });
        setAsset(filteredData);
        setWalAddress(walletAdddress);
        setMainOpen(false);
        setEnsOpen(true);
    }

    useEffect(() => {

        getENSData();


    }, [walletAdddress]);
    return (
        <div className="App">
            <button className='connect-button' onClick={connectWallet}>
                Connect Wallet
            </button>
        </div>
    );
}
export default Main;