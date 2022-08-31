"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("../axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useNavigate } from 'react-router-dom';
const ENSCard = _ref => {
  let {
    ens,
    walletAddress,
    setEnsOpen,
    setDashboardOpen
  } = _ref;

  // const navigate = useNavigate();
  const Regis_func = () => {
    _axios.default.post("user/register/", {
      ens_name: ens.meta.name,
      password: ens.tokenId,
      wallet_address: walletAddress,
      contract_address: ens.contract
    }).then(res => {
      // console.log(res);
      login_func();
    });
  };

  const login_func = () => {
    _axios.default.post("token/", {
      ens_name: ens.meta.name,
      password: ens.tokenId
    }).then(res => {
      // console.log(res);
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      _axios.default.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token'); // navigate('/dashboard/');

      setDashboardOpen(true);
      setEnsOpen(false); // debugger;
    });
  }; // if (!ens.meta) return;
  // let pattern = /.eth/g;
  // if (!(pattern.test(ens.meta.name))) return;


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card ens-card",
    onClick: Regis_func
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card content-item"
  }, "Contract Address"), /*#__PURE__*/_react.default.createElement("div", {
    className: "card address"
  }, ens.contract), /*#__PURE__*/_react.default.createElement("div", {
    className: "card content-item"
  }, "Token id"), /*#__PURE__*/_react.default.createElement("div", {
    className: "card address"
  }, ens.tokenId), /*#__PURE__*/_react.default.createElement("div", {
    className: "card content-item"
  }, "ENS Name"), /*#__PURE__*/_react.default.createElement("div", {
    className: "card address"
  }, ens.meta.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "card content-item"
  }, "Collection Description"), /*#__PURE__*/_react.default.createElement("p", {
    className: "card"
  }, ens.meta.description)));
};

var _default = ENSCard;
exports.default = _default;