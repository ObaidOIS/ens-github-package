"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _axios = _interopRequireDefault(require("../axios"));

var _logout = _interopRequireDefault(require("./logout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { useNavigate } from 'react-router-dom';
const Home = _ref => {
  let {
    setDashboardOpen,
    setMainOpen
  } = _ref;
  // const navigate = useNavigate();
  const [ensName, setEnsName] = (0, _react.useState)();
  const [contractddress, setContractAddress] = (0, _react.useState)(null);
  const [userid, setUserid] = (0, _react.useState)(null);

  const getUserId = () => {
    var accessToken = localStorage.getItem('access_token');
    var decoded = (0, _jwtDecode.default)(accessToken);
    var user_id = decoded.user_id;
    setUserid(user_id);
    getUserDetail();
  };

  const getUserDetail = () => {
    _axios.default.get("user/".concat(userid, "/")).then(res => {
      // console.log(res);
      // console.log(res.data);
      setContractAddress(res.data.contract_address);
      setEnsName(res.data.ens_name);
    });
  };

  const logout = () => {
    // <Logout setDashboardOpen={setDashboardOpen} setMainOpen={setMainOpen} />
    // console.log('logout');
    // setDashboardOpen(false);
    // navigate('/logout');
    console.log("obaid");

    const response = _axios.default.post('user/logout/', {
      refresh_token: localStorage.getItem('refresh_token')
    });

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    _axios.default.defaults.headers['Authorization'] = null; // navigate('/');

    setMainOpen(true);
    setDashboardOpen(false);
  };

  (0, _react.useEffect)(() => {
    getUserId();
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Dashboard"), /*#__PURE__*/_react.default.createElement("h2", null, "Connected with ", ensName, " "), /*#__PURE__*/_react.default.createElement("h3", null, contractddress, " ")), /*#__PURE__*/_react.default.createElement("button", {
    className: "connect-button",
    onClick: logout
  }, "Logout")));
};

var _default = Home;
exports.default = _default;