"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { useNavigate } from 'react-router-dom';
// import Home from '../components/home';
const Dashboard = _ref => {
  let {
    setDashboardOpen,
    setMainOpen
  } = _ref;
  // const navigate = useNavigate();
  const [token, setToken] = (0, _react.useState)(false);

  const checkToken = () => {
    if (!!localStorage.getItem('access_token')) {
      setToken(true);
    }
  };

  (0, _react.useEffect)(() => {
    checkToken();
  }, [localStorage.getItem('access_token')]);

  const login = () => {
    console.log('Please login'); // navigate('/');

    setMainOpen(true);
    setDashboardOpen(false); // debugger;
  };

  return /*#__PURE__*/_react.default.createElement("div", null, token ? /*#__PURE__*/_react.default.createElement(_home.default, {
    setDashboardOpen: setDashboardOpen,
    setMainOpen: setMainOpen
  }) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Please Login"), /*#__PURE__*/_react.default.createElement("button", {
    className: "connect-button",
    onClick: login
  }, "Login")));
};

var _default = Dashboard;
exports.default = _default;