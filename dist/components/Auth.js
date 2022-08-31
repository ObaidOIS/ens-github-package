"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("./auth.css");

var _react = _interopRequireWildcard(require("react"));

var _main = _interopRequireDefault(require("./component/main"));

var _ENSContainer = _interopRequireDefault(require("./component/ENSContainer"));

var _dashboard = _interopRequireDefault(require("./component/dashboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Auth = () => {
  const [mainOpen, setMainOpen] = (0, _react.useState)(true);
  const [ensOpen, setEnsOpen] = (0, _react.useState)(false);
  const [DashboardOpen, setDashboardOpen] = (0, _react.useState)(false);
  const [walAddress, setWalAddress] = (0, _react.useState)(null);
  const [asset, setAsset] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mainOpen && /*#__PURE__*/_react.default.createElement(_main.default, {
    setMainOpen: setMainOpen,
    setEnsOpen: setEnsOpen,
    setAsset: setAsset,
    setWalAddress: setWalAddress
  }), ensOpen && /*#__PURE__*/_react.default.createElement(_ENSContainer.default, {
    setEnsOpen: setEnsOpen,
    setDashboardOpen: setDashboardOpen,
    asset: asset,
    wAddress: walAddress
  }), DashboardOpen && /*#__PURE__*/_react.default.createElement(_dashboard.default, {
    setDashboardOpen: setDashboardOpen,
    setMainOpen: setMainOpen
  }));
};

var _default = Auth;
exports.default = _default;