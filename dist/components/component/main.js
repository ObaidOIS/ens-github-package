"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { useNavigate } from 'react-router-dom';
const Main = _ref => {
  let {
    setMainOpen,
    setEnsOpen,
    setAsset,
    setWalAddress
  } = _ref;
  // const navigate = useNavigate();
  const [ensName, setEnsName] = (0, _react.useState)([]);
  const [walletAdddress, setWalletAddress] = (0, _react.useState)(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setWalletAddress(accounts[0]);
    } else {
      console.log('MetaMask is not installed!');
      alert('Please install MetaMask extension! or any other wallet');
    }
  };

  const filterENS = ens_data => {
    const ens_list = ens_data.filter(ens => {
      if (!ens.meta) return;
      return ens.meta.name.includes('eth');
    });
    return ens_list;
  };

  const getENSData = async () => {
    if (!walletAdddress) return;
    console.log('walletAdddress', walletAdddress); // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAdddress}`)

    const response = await fetch("https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x57df94268b69fe62bc5925c79d2e1b799acc4e23");
    const data = await response.json();
    console.log("Owned Assets: ", data.items);
    const filteredData = filterENS(data.items);
    console.log("ENS Tokens: ", filteredData);
    setEnsName([data]); // navigate('/ens', { state: { asset: filteredData, walletAddress: walletAdddress } });

    setAsset(filteredData);
    setWalAddress(walletAdddress);
    setMainOpen(false);
    setEnsOpen(true);
  };

  (0, _react.useEffect)(() => {
    getENSData();
  }, [walletAdddress]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "connect-button",
    onClick: connectWallet
  }, "Connect Wallet"));
};

var _default = Main;
exports.default = _default;