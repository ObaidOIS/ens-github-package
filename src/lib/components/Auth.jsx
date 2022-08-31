import './auth.css';
import react from 'react';
import Main from './component/main';
import ENSContainer from './component/ENSContainer';
import Dashboard from './component/dashboard';
import { useState } from 'react';

const Auth = () => {
  const [mainOpen, setMainOpen] = useState(true);
  const [ensOpen, setEnsOpen] = useState(false);
  const [DashboardOpen, setDashboardOpen] = useState(false);
  const [walAddress, setWalAddress] = useState(null);
  const [asset, setAsset] = useState([]);


  return (
    <>
      {mainOpen && <Main
        setMainOpen={setMainOpen}
        setEnsOpen={setEnsOpen}
        setAsset={setAsset}
        setWalAddress={setWalAddress} />}
      {ensOpen && <ENSContainer
        setEnsOpen={setEnsOpen}
        setDashboardOpen={setDashboardOpen}
        asset={asset}
        wAddress={walAddress} />}
      {DashboardOpen && <Dashboard
        setDashboardOpen={setDashboardOpen}
        setMainOpen={setMainOpen} />}
    </>
  );
}

export default Auth;
