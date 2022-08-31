"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ENSCard = _interopRequireDefault(require("./ENSCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useLocation } from 'react-router-dom';
const ENSContainer = _ref => {
  let {
    setEnsOpen,
    setDashboardOpen,
    asset,
    wAddress
  } = _ref;
  // const location = useLocation();
  // const ensName = location.state.asset;
  // const walletAddress = location.state.walletAddress;
  const ensName = asset;
  const walletAddress = wAddress;

  const showENSCard = () => {
    // console.log(ensName.length);
    if (ensName !== 0) {
      return ensName.map((ens, index) => {
        return /*#__PURE__*/_react.default.createElement(_ENSCard.default, {
          ens: ens,
          key: index,
          walletAddress: walletAddress,
          setEnsOpen: setEnsOpen,
          setDashboardOpen: setDashboardOpen
        });
      });
    }

    console.log('No ENS found');
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "head-text"
    }, "No ENS Tokens");
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Account: ", walletAddress), /*#__PURE__*/_react.default.createElement("div", {
    className: "head-text"
  }, "Select ENS Token For Authentication"), /*#__PURE__*/_react.default.createElement("div", {
    className: "ens-container"
  }, showENSCard()));
};

var _default = ENSContainer;
exports.default = _default;