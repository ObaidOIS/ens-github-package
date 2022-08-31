import React from 'react'
import ENSCard from './ENSCard'
// import { useLocation } from 'react-router-dom';

const ENSContainer = ({ setEnsOpen, setDashboardOpen, asset, wAddress }) => {
    // const location = useLocation();
    // const ensName = location.state.asset;
    // const walletAddress = location.state.walletAddress;
    const ensName = asset;
    const walletAddress = wAddress;

    const showENSCard = () => {
        // console.log(ensName.length);
        if (ensName !== 0) {
            return ensName.map((ens, index) => {
                return <ENSCard
                    ens={ens}
                    key={index}
                    walletAddress={walletAddress}
                    setEnsOpen={setEnsOpen}
                    setDashboardOpen={setDashboardOpen} />
            }
            )
        }
        console.log('No ENS found');
        return <div className='head-text'>No ENS Tokens</div>
    }

    return (
        <>
            <div className='text'>
                Account: {walletAddress}
            </div>
            <div className='head-text'>
                Select ENS Token For Authentication
            </div>
            <div className='ens-container'>
                {showENSCard()}
            </div>
        </>

    )
}

export default ENSContainer