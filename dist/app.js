/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = semanticUIReact;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(7);

var _CardExpandable = __webpack_require__(4);

var _reactDom = __webpack_require__(1);

var _lodash = __webpack_require__(22);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactHotLoader = __webpack_require__(16);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetWithCards = function (_React$Component) {
	_inherits(WidgetWithCards, _React$Component);

	function WidgetWithCards(props) {
		var _this$state;

		_classCallCheck(this, WidgetWithCards);

		var _this = _possibleConstructorReturn(this, (WidgetWithCards.__proto__ || Object.getPrototypeOf(WidgetWithCards)).call(this, props));

		_this.handleFilterChange = _this.handleFilterChange.bind(_this);
		_this.handleRefresh = _this.handleRefresh.bind(_this);
		_this.handleApplyFilters = _this.handleApplyFilters.bind(_this);
		_this.resetFilters = _this.resetFilters.bind(_this);
		_this.handleKeepOpened = _this.handleKeepOpened.bind(_this);
		_this.handleSearchSideBar = _this.handleSearchSideBar.bind(_this);
		_this.handleKeyPress = _this.handleKeyPress.bind(_this);

		_this.state = (_this$state = {
			page_to_fetch: 0,
			loadingresults: false,
			searchSideBarVisible: false,
			keepOpened: false,
			filtersHaveChanged: false,
			filterButtonColor: null
		}, _defineProperty(_this$state, "keepOpened", false), _defineProperty(_this$state, "query", ""), _defineProperty(_this$state, "resultCount", "No search started"), _defineProperty(_this$state, "articles", {
			status: "ok",
			source: "abc-news-au",
			sortBy: "top",
			articles: ""
		}), _defineProperty(_this$state, "allCards", _react2.default.createElement("div", null)), _defineProperty(_this$state, "newCards", _react2.default.createElement("div", null)), _this$state);
		return _this;
	}

	_createClass(WidgetWithCards, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.handleRefresh();
		}
	}, {
		key: "handleRefresh",
		value: function handleRefresh(e) {
			this.setState({ page_to_fetch: ++this.state.page_to_fetch });

			// console.log(this.state.allCards);

			this.setState({
				loadingresults: true,
				resultCount: "Searching..."
			});

			this.setState(function (prevState) {
				return {
					allCards: _react2.default.createElement(
						"div",
						null,
						" ",
						_react2.default.createElement(_semanticUiReact.Loader, { active: true })
					)
				};
			});

			(0, _fetch.execute_fetch)(this.state.query, this.state.page_to_fetch).then(function (data) {

				this.setState({
					resultCount: data.resultCount + " result(s...)"
				});

				var previousCard = this.state.allCards;

				var cardsHTML = _react2.default.createElement(
					_semanticUiReact.Card.Group,
					{ unstackable: true, divided: true },
					this.state.loadingresults ? data.items.map(function (item) {
						return _react2.default.createElement(_CardExpandable.CardExpandable, {
							fluid: true,
							key: item._id,
							formattedItem: item,
							rawItem: item.rawItem,
							iconName: item.iconName,
							iconColor: item.iconColor,
							mediaType: item.mediaType,
							thumbnail: item.thumbnail,
							highres: item.highres,
							description: item.description,
							title: item.title,
							open_url: item.open_url,
							dragAndDropString: item.dragAndDropString,
							target: item.target,
							meta: item.meta
						});
					}) : _react2.default.createElement(_semanticUiReact.Loader, { active: true })
				);

				this.setState(function (prevState) {
					return {
						allCards: _react2.default.createElement(
							"div",
							null,
							cardsHTML
						)
					};
				});
			}.bind(this));
		}
	}, {
		key: "handleKeepOpened",
		value: function handleKeepOpened(e) {
			this.setState({
				keepOpened: !this.state.keepOpened
			});
		}
	}, {
		key: "handleSearchSideBar",
		value: function handleSearchSideBar(e) {
			this.setState({
				searchSideBarVisible: !this.state.searchSideBarVisible
			});
		}
	}, {
		key: "handleFilterChange",
		value: function handleFilterChange(e) {
			this.setState({
				filtersHaveChanged: true
			});
		}
	}, {
		key: "handleApplyFilters",
		value: function handleApplyFilters(e) {
			if (this.state.filtersHaveChanged) {
				this.setState({
					filterButtonColor: "orange"
				});
			}

			if (!this.state.keepOpened) {
				this.setState({
					searchSideBarVisible: false
				});
			}
		}
	}, {
		key: "resetFilters",
		value: function resetFilters(e) {
			this.setState({
				filtersHaveChanged: false,
				filterButtonColor: null
			});
		}
	}, {
		key: "handleKeyPress",
		value: function handleKeyPress(e) {
			if (e.charCode == 13) {
				this.handleRefresh();
				console.log(this.state.query);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var panels = [{
				active: true,
				title: {
					key: "sort",
					children: _react2.default.createElement(
						_semanticUiReact.Header,
						{ as: "h4", dividing: true },
						_react2.default.createElement(
							_semanticUiReact.Header.Content,
							null,
							_react2.default.createElement(_semanticUiReact.Icon, { name: "list" }),
							"View"
						)
					)
				},
				content: {
					key: "sortContent",
					children: _react2.default.createElement(
						"div",
						null,
						"Fields",
						_react2.default.createElement(
							_semanticUiReact.List,
							{ selection: true },
							" ",
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								null,
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"Description"
								)
							),
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								{ active: true },
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "check" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"Metadata"
								)
							)
						),
						"Layout",
						_react2.default.createElement(
							_semanticUiReact.List,
							{ selection: true },
							" ",
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								null,
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"Grid"
								)
							),
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								{ active: true },
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "check" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"List"
								)
							)
						),
						"Image",
						_react2.default.createElement(
							_semanticUiReact.List,
							{ selection: true },
							" ",
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								null,
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"None"
								)
							),
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								{ active: true },
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "check" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"Small"
								)
							),
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								null,
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"Large"
								)
							),
							_react2.default.createElement(
								_semanticUiReact.List.Item,
								null,
								_react2.default.createElement(_semanticUiReact.List.Icon, { name: "" }),
								_react2.default.createElement(
									_semanticUiReact.List.Content,
									null,
									"Very large"
								)
							)
						)
					)
				}
			}, {
				active: true,
				title: {
					key: "data",
					children: _react2.default.createElement(
						_semanticUiReact.Header,
						{ as: "h4", dividing: true },
						_react2.default.createElement(
							_semanticUiReact.Header.Content,
							null,
							_react2.default.createElement(_semanticUiReact.Icon, { name: "sort content descending" }),
							"Sort"
						)
					)
				},
				content: {
					key: "dataContent",
					children: _react2.default.createElement(
						_semanticUiReact.List,
						{ selection: true },
						" ",
						_react2.default.createElement(
							_semanticUiReact.List.Item,
							{ active: true },
							_react2.default.createElement(_semanticUiReact.List.Icon, { name: "arrow down" }),
							_react2.default.createElement(
								_semanticUiReact.List.Content,
								null,
								"Creation Date"
							)
						),
						_react2.default.createElement(
							_semanticUiReact.List.Item,
							null,
							_react2.default.createElement(_semanticUiReact.List.Icon, { name: "" }),
							_react2.default.createElement(
								_semanticUiReact.List.Content,
								null,
								"Update time"
							)
						)
					)
				}
			}, {
				title: {
					key: "filters",
					children: _react2.default.createElement(
						_semanticUiReact.Header,
						{ as: "h4", dividing: true },
						_react2.default.createElement(
							_semanticUiReact.Header.Content,
							null,
							_react2.default.createElement(_semanticUiReact.Icon, { name: "filter" }),
							"Filters"
						)
					)
				},
				content: {
					key: "filtersContent",
					children: _react2.default.createElement(
						_semanticUiReact.Form,
						null,
						_react2.default.createElement(
							_semanticUiReact.Form.Field,
							null,
							_react2.default.createElement(
								"label",
								null,
								"placeholder"
							),
							_react2.default.createElement(_semanticUiReact.Input, null)
						)
					)
				}
			}];
			return _react2.default.createElement(
				"div",
				{ style: { display: "flex", flexDirection: "column", height: "100%" } },
				_react2.default.createElement(
					"div",
					{ style: { margin: "5px", flex: "0" } },
					_react2.default.createElement(_semanticUiReact.Input, {
						onChange: function onChange(e, data) {
							_this2.setState({ query: data.value });
						},
						onKeyPress: this.handleKeyPress,
						action: _react2.default.createElement(_semanticUiReact.Button, {
							basic: true,
							icon: "options",
							onClick: this.handleSearchSideBar
						}),
						placeholder: "Search",
						defaultValue: "",
						fluid: true
					})
				),
				_react2.default.createElement(
					_semanticUiReact.Divider,
					{ horizontal: true, fitted: true },
					_react2.default.createElement(
						_semanticUiReact.Label,
						{ size: "small", color: "grey" },
						this.state.resultCount
					)
				),
				_react2.default.createElement(
					_semanticUiReact.Sidebar.Pushable,
					{ style: { height: "100%" } },
					_react2.default.createElement(
						_semanticUiReact.Sidebar,
						{
							animation: "overlay",
							direction: "right",
							style: {
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								overflowX: "hidden",
								maxHeight: "100%"
							},
							visible: this.state.searchSideBarVisible },
						_react2.default.createElement(
							_semanticUiReact.Segment,
							{
								attached: true,
								className: "fancy-scrollbar",
								style: {
									overflowX: "hidden",
									overflowY: "auto",
									height: "100%",
									flex: "1"
								} },
							_react2.default.createElement(_semanticUiReact.Accordion, { panels: panels, defaultActiveIndex: 0 })
						),
						_react2.default.createElement(
							_semanticUiReact.Segment,
							{ attached: true, style: { flex: "0" } },
							_react2.default.createElement(_semanticUiReact.Checkbox, { label: "Keep opened", onClick: this.handleKeepOpened }),
							_react2.default.createElement("p", null),
							_react2.default.createElement(_semanticUiReact.Button, {
								primary: true,
								content: "Apply",
								floated: "left",
								onClick: this.handleApplyFilters
							}),
							_react2.default.createElement(
								_semanticUiReact.Button.Group,
								{ basic: true, floated: "right" },
								_react2.default.createElement(_semanticUiReact.Button, { icon: "eraser", onClick: this.resetFilters }),
								_react2.default.createElement(_semanticUiReact.Button, { icon: "save" }),
								_react2.default.createElement(_semanticUiReact.Button, { icon: "bell" })
							)
						)
					),
					_react2.default.createElement(
						_semanticUiReact.Sidebar.Pusher,
						{
							className: "fancy-scrollbar card-list",
							style: {
								overflowY: "auto",
								display: "flex",
								flex: "1",
								flexDirection: "column",
								height: "100%"
							} },
						this.state.allCards
					)
				)
			);
		}
	}]);

	return WidgetWithCards;
}(_react2.default.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{
					className: "fullscreen",
					style: {
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						justifyContent: "space-between"
					} },
				_react2.default.createElement(WidgetWithCards, { style: { height: "100%" } })
			);
		}
	}]);

	return App;
}(_react2.default.Component);

// ----------------------------------------
// Render
// ----------------------------------------
//export default App;

(0, _reactDom.render)(_react2.default.createElement(
	_reactHotLoader.AppContainer,
	null,
	_react2.default.createElement(App, null)
), document.getElementById('root'));

if (false) {
	console.log('Looks like we are in development mode!');
}

var currentFile = /*require.resolve*/(3);
if (false) {
	module.hot.accept(currentFile, function () {
		var App = require(currentFile).default;
		(0, _reactDom.render)(_react2.default.createElement(
			_reactHotLoader.AppContainer,
			null,
			" ",
			_react2.default.createElement(App, null)
		), document.getElementById('root'));
	});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CardExpandable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _CardsContextMenu = __webpack_require__(5);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardExpandable = exports.CardExpandable = function (_React$Component) {
	_inherits(CardExpandable, _React$Component);

	function CardExpandable(props) {
		_classCallCheck(this, CardExpandable);

		var _this = _possibleConstructorReturn(this, (CardExpandable.__proto__ || Object.getPrototypeOf(CardExpandable)).call(this, props));

		_this.handleExpand = _this.handleExpand.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
		_this.handleDragStart = _this.handleDragStart.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.state = {
			expanded: false,
			descriptionCursor: "zoom-in",
			descriptionWhiteSpace: "nowrap",
			descriptionOverflow: "hidden",
			descriptionTextOverflow: "ellipsis",
			isHovered: "none"
		};
		return _this;
	}

	_createClass(CardExpandable, [{
		key: "handleClick",
		value: function handleClick(e) {
			e.preventDefault();
			console.log(this.props.formattedItem.open_url);
			window.open(this.props.formattedItem.open_url, "_blank");
		}
	}, {
		key: "handleExpand",
		value: function handleExpand(e) {
			e.preventDefault();
			if (this.state.expanded == false) {
				this.setState({
					expanded: true,
					descriptionCursor: "zoom-out",
					descriptionWhiteSpace: "",
					descriptionOverflow: "",
					descriptionTextOverflow: ""
				});
			} else {
				this.setState({
					expanded: false,
					descriptionCursor: "zoom-in",
					descriptionWhiteSpace: "nowrap",
					descriptionOverflow: "hidden",
					descriptionTextOverflow: "ellipsis"
				});
			}
		}
	}, {
		key: "handleDragStart",
		value: function handleDragStart(e) {
			e.dataTransfer.setData("text/plain", this.props.dragAndDropString);
		}
	}, {
		key: "handleMouseEnter",
		value: function handleMouseEnter(e) {
			this.setState({
				isHovered: ""
			});
		}
	}, {
		key: "handleMouseLeave",
		value: function handleMouseLeave(e) {
			this.setState({
				isHovered: "none"
			});
		}
	}, {
		key: "render",
		value: function render() {

			var thumbnail = null;
			var mediaNode = null;
			var iconNode = null;
			if (this.props.iconName != "") {
				iconNode = _react2.default.createElement(_semanticUiReact.Icon, { name: this.props.iconName, color: this.props.iconColor });
			}
			if (this.props.mediaType == "image") {
				thumbnail = _react2.default.createElement(_semanticUiReact.Image, {
					style: {
						cursor: "zoom-in"
					},
					floated: "left",
					src: this.props.thumbnail,
					size: "tiny"
				});
				mediaNode = _react2.default.createElement(_semanticUiReact.Image, { centered: true, src: this.props.highres });
			}

			if (this.props.mediaType == "video") {
				if (this.props.thumbnail == null) {
					thumbnail = _react2.default.createElement(_semanticUiReact.Icon, { link: true, size: "big", name: "play circle" });
				} else {
					thumbnail = _react2.default.createElement(
						_semanticUiReact.Image,
						{ floated: "left", size: "tiny", onClick: function onClick(e) {
								return e.preventDefault();
							} },
						_react2.default.createElement(_semanticUiReact.Image, { src: this.props.thumbnail }),
						_react2.default.createElement(_semanticUiReact.Icon, {
							style: {
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)"
							},
							inverted: true,
							size: "big",
							color: "",
							name: "play circle"
						})
					);
				}

				mediaNode = _react2.default.createElement(
					"video",
					{ width: "100%", autoPlay: true, controls: true },
					_react2.default.createElement("source", { src: this.props.highres, type: "video/mp4" }),
					"Your browser does not support HTML5 video."
				);
			}
			if (this.props.mediaType == "audio") {
				//thumbnail = <Button floated="left" content="Play" icon="play" />;
				thumbnail = _react2.default.createElement(_semanticUiReact.Icon, { link: true, size: "big", name: "volume up" });
				mediaNode = _react2.default.createElement(
					"audio",
					{ style: { width: "100%" }, autoPlay: true, controls: true },
					_react2.default.createElement("source", { src: this.props.highres, type: "audio/mp3" }),
					"Your browser does not support HTML5 audio."
				);
			}

			return _react2.default.createElement(
				_semanticUiReact.Card,
				_extends({
					link: true,
					color: "",
					centered: true,
					draggable: "true",
					onDragStart: this.handleDragStart,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					style: { margin: "0px" }
				}, this.props),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					null,
					_react2.default.createElement(
						_semanticUiReact.Modal,
						{ closeIcon: "close", trigger: thumbnail, size: "small" },
						_react2.default.createElement(
							_semanticUiReact.Modal.Header,
							null,
							this.props.title
						),
						_react2.default.createElement(
							_semanticUiReact.Modal.Content,
							null,
							mediaNode
						)
					),
					_react2.default.createElement(_CardsContextMenu.CardsContextMenu, {
						formattedItem: this.props.formattedItem,
						rawItem: this.props.rawItem

					}),
					iconNode,
					_react2.default.createElement(
						"strong",
						{ onClick: this.handleClick },
						this.props.title
					),
					_react2.default.createElement(_semanticUiReact.Card.Meta, { dangerouslySetInnerHTML: { __html: this.props.meta } }),
					_react2.default.createElement(
						_semanticUiReact.Card.Description,
						{
							onClick: this.handleExpand,
							style: {
								cursor: this.state.descriptionCursor,
								whiteSpace: this.state.descriptionWhiteSpace,
								overflow: this.state.descriptionOverflow,
								textOverflow: this.state.descriptionTextOverflow,
								textAlign: "justify"
							} },
						this.props.description
					)
				)
			);
		}
	}]);

	return CardExpandable;
}(_react2.default.Component);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsContextMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _actions_new = __webpack_require__(6);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";

//# sourceMappingURL=content.js.map


var CardsContextMenu = exports.CardsContextMenu = function (_React$Component) {
  _inherits(CardsContextMenu, _React$Component);

  function CardsContextMenu(props) {
    _classCallCheck(this, CardsContextMenu);

    var _this = _possibleConstructorReturn(this, (CardsContextMenu.__proto__ || Object.getPrototypeOf(CardsContextMenu)).call(this, props));

    _this.handleSendToOpenMedia = _this.handleSendToOpenMedia.bind(_this);

    _this.state = {};
    return _this;
  }

  _createClass(CardsContextMenu, [{
    key: "handleDownload",
    value: function handleDownload(e) {
      alert("no function defined for Download...");
      console.log(this.props.rawItem);
    }
  }, {
    key: "handleSendToOpenMedia",
    value: function handleSendToOpenMedia(e) {
      var WpLib = OMWebPluginLib;
      var builder = WpLib.OMPlugin.SamePageBuilder.create();
      var config = builder.getPluginConfig();
      var plugin = WpLib.OMPlugin.createPlugin(builder);

      var templateId = 4104;
      var folderLoId = 4096;
      var poolId = 3;
      var systemId = null;
      var fields = [
      // Now time to set fields
      WpLib.OMApi.stringField(this.props.rawItem.mainTitle, 8), WpLib.OMApi.stringField(this.props.formattedItem.description, 14), WpLib.OMApi.stringField(null, 15), WpLib.OMApi.intField(1, 5068) //value, field id
      ];
      var api = plugin.getApi();
      api.createDocument(templateId, folderLoId, poolId, systemId).then(function (docId) {
        alert("Document successfully created: " + docId.lowId);
        return api.setFields(docId, fields);
      }).catch(function (reason) {
        alert('Action failed');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _semanticUiReact.Dropdown,
        {
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          className: "icon",
          icon: _react2.default.createElement(_semanticUiReact.Icon, { link: true, name: "ellipsis vertical", size: "large", color: "grey" }),
          style: { float: "right" } },
        _react2.default.createElement(
          _semanticUiReact.Dropdown.Menu,
          { style: { left: "auto", right: 0 } },
          _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
            text: "Send to OpenMedia",
            icon: "plus",
            onClick: this.handleSendToOpenMedia
          }),
          _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
            text: "Link to...",
            icon: "share",
            onClick: this.handleDownload
          })
        )
      );
    }
  }]);

  return CardsContextMenu;
}(_react2.default.Component);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsCornerPopup = exports.ModalViewButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(1);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalViewButtons = exports.ModalViewButtons = function (_React$Component) {
  _inherits(ModalViewButtons, _React$Component);

  function ModalViewButtons(props) {
    _classCallCheck(this, ModalViewButtons);

    var _this = _possibleConstructorReturn(this, (ModalViewButtons.__proto__ || Object.getPrototypeOf(ModalViewButtons)).call(this, props));

    _this.handleSendToOpenMedia = _this.handleSendToOpenMedia.bind(_this);
    _this.handleDownload = _this.handleDownload.bind(_this);

    _this.state = {};
    return _this;
  }

  _createClass(ModalViewButtons, [{
    key: "handleSendToOpenMedia",
    value: function handleSendToOpenMedia(e) {
      SendToOpenMedia(this.props["cardexp_itemJSON"]);
      //  console.log(this.props["cardexp_itemJSON"]);
    }
  }, {
    key: "handleDownload",
    value: function handleDownload(e) {
      DownloadItem(this.props["cardexp_itemJSON"]);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        _semanticUiReact.Modal.Actions,
        null,
        React.createElement(_semanticUiReact.Button, { primary: true, content: "Send to OpenMedia", icon: "share", onClick: this.handleSendToOpenMedia }),
        React.createElement(_semanticUiReact.Button, { secondary: true, content: "Download", icon: "download", onClick: this.handleDownload })
      );
    }
  }]);

  return ModalViewButtons;
}(React.Component);

var CardsCornerPopup = exports.CardsCornerPopup = function (_React$Component2) {
  _inherits(CardsCornerPopup, _React$Component2);

  function CardsCornerPopup(props) {
    _classCallCheck(this, CardsCornerPopup);

    var _this2 = _possibleConstructorReturn(this, (CardsCornerPopup.__proto__ || Object.getPrototypeOf(CardsCornerPopup)).call(this, props));

    _this2.handleSendToOpenMedia = _this2.handleSendToOpenMedia.bind(_this2);

    _this2.state = {};
    return _this2;
  }

  _createClass(CardsCornerPopup, [{
    key: "handleSendToOpenMedia",
    value: function handleSendToOpenMedia(e) {
      SendToOpenMedia(this.props["cardexp_itemJSON"]);
      //  console.log(this.props["cardexp_itemJSON"]);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        _semanticUiReact.Dropdown,
        {
          onClick: function onClick(e) {
            return e.preventDefault();
          },

          className: "icon",
          icon: React.createElement(_semanticUiReact.Icon, { link: true, name: "ellipsis vertical", color: "grey" }),
          style: { float: "right" }
        },
        React.createElement(
          _semanticUiReact.Dropdown.Menu,
          { style: { left: "auto", right: 0 } },
          React.createElement(_semanticUiReact.Dropdown.Item, { text: "Send to OpenMedia", icon: "share", onClick: this.handleSendToOpenMedia })
        )
      );
    }
  }]);

  return CardsCornerPopup;
}(React.Component);

function SendToOpenMedia(cardexp_itemJSON) {
  //  alert(e.target.id);
  alert("Function SendToOpenMedia triggered: " + JSON.stringify(cardexp_itemJSON));
}

function DownloadItem(cardexp_itemJSON) {
  //  alert(e.target.id);
  alert("Function DownloadItem triggered: " + JSON.stringify(cardexp_itemJSON));
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.execute_fetch = execute_fetch;

var _javascriptTimeAgo = __webpack_require__(21);

var _javascriptTimeAgo2 = _interopRequireDefault(_javascriptTimeAgo);

var _en = __webpack_require__(8);

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function execute_fetch(query, page) {
	var tokenpromise = new Promise(function (resolve, reject) {

		var user = "annova";
		var password = "Medox124";
		var loginURL = "https://demo.medox.scisys.de:8443/dira6/auth/v10/login";
		var tok = user + ":" + password;
		var hash = btoa(tok);
		var today = new Date();

		if (localStorage.getItem("medox_access_token") === null || localStorage.getItem("medox_access_token_expiry_date") < today.getTime()) {
			fetch(loginURL, {
				method: "GET",
				headers: {
					Authorization: "Basic " + hash,
					Accept: "application/json"
				}
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				localStorage.setItem("medox_access_token", data.access_token);
				var expiryDateTimeMS = today.getTime() + data.expires_in * 1000;
				localStorage.setItem("medox_access_token_expiry_date", expiryDateTimeMS);
				console.log(data.access_token);
				resolve(data.access_token);
			}).catch(function (error) {
				return console.warn(error);
			});
		} else {
			resolve(localStorage.getItem("medox_access_token"));
		}
	});

	//one we have a valid token, we actually execute the fetch
	return tokenpromise.then(function (token) {
		//console.log(token);

		var searchURL = "https://demo.medox.scisys.de:8443/dira6/api/v10/search/contentItems";

		return fetch(searchURL, {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query: {
					bool: {
						must: [{ index: { meta: query + " " } }],
						filter: [{ term: { status: "valid" } }]
					}
				},
				from: 1,
				size: 20,
				sort: [{ modTime: { order: "desc" } }]
			})
		}).then(function (response) {
			return response.json();
		}).then(function (responseData) {
			//		console.log(responseData);

			_javascriptTimeAgo2.default.locale(_en2.default);
			var timeAgo = new _javascriptTimeAgo2.default("en-US");

			var len = responseData.contentItems.length,

			//newData = { resultCount: responseData.count, items: [] },
			newData = { resultCount: responseData.count, items: [] },
			    i;
			//		console.log(len);

			//Loop through the source JSON and format it into the standard format
			for (i = 0; i < len; i += 1) {
				newData.items.push({
					id: responseData.contentItems[i]._id,
					key: responseData.contentItems[i]._id,
					rawItem: responseData.contentItems[i],
					title: responseData.contentItems[i].mainTitle,
					open_url: "https://demo.medox.scisys.de:8443/",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

					target: "_blank",
					iconName: responseData.contentItems[i].hasOwnProperty("images") ? "image" : responseData.contentItems[i].hasOwnProperty("videos") ? "film" : "volume up",
					iconColor: responseData.contentItems[i].hasOwnProperty("images") ? "green" : responseData.contentItems[i].hasOwnProperty("videos") ? "blue" : "red",
					mediaType: responseData.contentItems[i].hasOwnProperty("images") ? "image" : responseData.contentItems[i].hasOwnProperty("videos") ? "video" : "audio",

					thumbnail: responseData.contentItems[i].hasOwnProperty("images") ? responseData.contentItems[i].images[0].variants[0].url : responseData.contentItems[i].hasOwnProperty("videos") ? "https://react.semantic-ui.com/assets/images/image-16by9.png" : null,
					highres: responseData.contentItems[i].hasOwnProperty("images") ? responseData.contentItems[i].images[0].variants[0].url : responseData.contentItems[i].hasOwnProperty("videos") ? responseData.contentItems[i].videos[0].variants[0].url : responseData.contentItems[i].audios[0].variants[1].url,

					dragAndDropString: "<mos><mosID>DIRA.DEMO.AUDIO.MOS</mosID>" + "<objID>" + responseData.contentItems[i]._id + "</objID>" + "<objSlug>" + responseData.contentItems[i].mainTitle + "</objSlug>" + "<objTB>48000</objTB> <objDur>497664</objDur>" + "<mosAbstract>" + responseData.contentItems[i].mainType.displayName + "</mosAbstract></mos>",

					meta: responseData.contentItems[i].mainType.displayName + "&nbsp;&middot;&nbsp" + responseData.contentItems[i].creaUser + "&nbsp;&middot;&nbsp" + timeAgo.format(new Date(responseData.contentItems[i].creaTime))
				});
			}
			//console.log(JSON.stringify(newData));
			return newData;
		}).catch(function (error) {
			return console.warn(error);
		});
	});
}
// Load locale-specific relative date/time formatting rules.

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
{
	locale : 'en',

	tiny       : __webpack_require__(15),
	narrow     : __webpack_require__(11),
	short      : __webpack_require__(14),
	short_time : __webpack_require__(13),
	long       : __webpack_require__(10),
	long_time  : __webpack_require__(9),

	quantify : __webpack_require__(12)
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"year": {
		"future": {
			"one": "{0} year",
			"other": "{0} years"
		},
		"past": {
			"one": "{0} year",
			"other": "{0} years"
		}
	},
	"half-year": {
		"future": {
			"other": "half a year"
		},
		"past": {
			"other": "half a year"
		}
	},
	"month": {
		"future": {
			"one": "{0} month",
			"other": "{0} months"
		},
		"past": {
			"one": "{0} month",
			"other": "{0} months"
		}
	},
	"week": {
		"future": {
			"one": "{0} week",
			"other": "{0} weeks"
		},
		"past": {
			"one": "{0} week",
			"other": "{0} weeks"
		}
	},
	"day": {
		"future": {
			"one": "{0} day",
			"other": "{0} days"
		},
		"past": {
			"one": "{0} day",
			"other": "{0} days"
		}
	},
	"hour": {
		"future": {
			"one": "{0} hour",
			"other": "{0} hours"
		},
		"past": {
			"one": "{0} hour",
			"other": "{0} hours"
		}
	},
	"half-hour": {
		"future": {
			"other": "half an hour"
		},
		"past": {
			"other": "half an hour"
		}
	},
	"minute": {
		"future": {
			"one": "{0} minute",
			"other": "{0} minutes"
		},
		"past": {
			"one": "{0} minute",
			"other": "{0} minutes"
		}
	},
	"second": {
		"future": {
			"one": "{0} second",
			"other": "{0} seconds"
		},
		"past": {
			"one": "{0} second",
			"other": "{0} seconds"
		}
	},
	"now": {
		"future": {
			"other": "a moment"
		},
		"past": {
			"other": "just now"
		}
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
	"year": {
		"future": {
			"one": "in a year",
			"other": "in {0} years"
		},
		"past": {
			"one": "a year ago",
			"other": "{0} years ago"
		}
	},
	"half-year": {
		"future": {
			"other": "in half a year"
		},
		"past": {
			"other": "half a year ago"
		}
	},
	"quarter": {
		"future": {
			"one": "in {0} quarter",
			"other": "in {0} quarters"
		},
		"past": {
			"one": "{0} quarter ago",
			"other": "{0} quarters ago"
		}
	},
	"month": {
		"future": {
			"one": "in a month",
			"other": "in {0} months"
		},
		"past": {
			"one": "a month ago",
			"other": "{0} months ago"
		}
	},
	"week": {
		"future": {
			"one": "in a week",
			"other": "in {0} weeks"
		},
		"past": {
			"one": "a week ago",
			"other": "{0} weeks ago"
		}
	},
	"day": {
		"future": {
			"one": "in a day",
			"other": "in {0} days"
		},
		"past": {
			"one": "a day ago",
			"other": "{0} days ago"
		}
	},
	"hour": {
		"future": {
			"one": "in an hour",
			"other": "in {0} hours"
		},
		"past": {
			"one": "an hour ago",
			"other": "{0} hours ago"
		}
	},
	"half-hour": {
		"future": {
			"other": "in half an hour"
		},
		"past": {
			"other": "half an hour ago"
		}
	},
	"minute": {
		"future": {
			"one": "in a minute",
			"other": "in {0} minutes"
		},
		"past": {
			"one": "a minute ago",
			"other": "{0} minutes ago"
		}
	},
	"second": {
		"future": {
			"one": "in a second",
			"other": "in {0} seconds"
		},
		"past": {
			"one": "a second ago",
			"other": "{0} seconds ago"
		}
	},
	"now": {
		"future": {
			"other": "in a moment"
		},
		"past": {
			"other": "just now"
		}
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"year": {
		"future": {
			"other": "in {0} yr."
		},
		"past": {
			"other": "{0} yr. ago"
		}
	},
	"quarter": {
		"future": {
			"one": "in {0} qtrs.",
			"other": "in {0} qtrs."
		},
		"past": {
			"one": "{0} qtrs. ago",
			"other": "{0} qtrs. ago"
		}
	},
	"month": {
		"future": {
			"other": "in {0} mo."
		},
		"past": {
			"other": "{0} mo. ago"
		}
	},
	"week": {
		"future": {
			"other": "in {0} wk."
		},
		"past": {
			"other": "{0} wk. ago"
		}
	},
	"day": {
		"previous": "a day ago",
		"next": "in a day",
		"future": {
			"one": "in {0} day",
			"other": "in {0} days"
		},
		"past": {
			"one": "{0} day ago",
			"other": "{0} days ago"
		}
	},
	"hour": {
		"future": {
			"other": "in {0} hr."
		},
		"past": {
			"other": "{0} hr. ago"
		}
	},
	"minute": {
		"future": {
			"other": "in {0} min."
		},
		"past": {
			"other": "{0} min. ago"
		}
	},
	"second": {
		"past": {
			"other": "{0} sec. ago"
		},
		"future": {
			"other": "in {0} sec."
		}
	},
	"now": {
		"past": {
			"other": "now"
		},
		"future": {
			"other": "now"
		}
	}
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports=function(n){var r=!String(n).split(".")[1];return 1==n&&r?"one":"other"}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"year": {
		"future": {
			"other": "{0} yr."
		},
		"past": {
			"other": "{0} yr."
		}
	},
	"month": {
		"future": {
			"other": "{0} mo."
		},
		"past": {
			"other": "{0} mo."
		}
	},
	"week": {
		"future": {
			"other": "{0} wk."
		},
		"past": {
			"other": "{0} wk."
		}
	},
	"day": {
		"future": {
			"one": "{0} day",
			"other": "{0} days"
		},
		"past": {
			"one": "{0} day",
			"other": "{0} days"
		}
	},
	"hour": {
		"future": {
			"other": "{0} hr."
		},
		"past": {
			"other": "{0} hr."
		}
	},
	"minute": {
		"future": {
			"other": "{0} min."
		},
		"past": {
			"other": "{0} min."
		}
	},
	"second": {
		"past": {
			"other": "{0} sec."
		},
		"future": {
			"other": "{0} sec."
		}
	},
	"now": {
		"past": {
			"other": "now"
		},
		"future": {
			"other": "now"
		}
	}
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"year": {
		"future": {
			"other": "in {0} yr."
		},
		"past": {
			"other": "{0} yr. ago"
		}
	},
	"quarter": {
		"future": {
			"one": "in {0} qtr.",
			"other": "in {0} qtrs."
		},
		"past": {
			"one": "{0} qtr. ago",
			"other": "{0} qtrs. ago"
		}
	},
	"month": {
		"future": {
			"other": "in {0} mo."
		},
		"past": {
			"other": "{0} mo. ago"
		}
	},
	"week": {
		"future": {
			"other": "in {0} wk."
		},
		"past": {
			"other": "{0} wk. ago"
		}
	},
	"day": {
		"previous": "a day ago",
		"next": "in a day",
		"future": {
			"one": "in {0} day",
			"other": "in {0} days"
		},
		"past": {
			"one": "{0} day ago",
			"other": "{0} days ago"
		}
	},
	"hour": {
		"future": {
			"other": "in {0} hr."
		},
		"past": {
			"other": "{0} hr. ago"
		}
	},
	"minute": {
		"future": {
			"other": "in {0} min."
		},
		"past": {
			"other": "{0} min. ago"
		}
	},
	"second": {
		"past": {
			"other": "{0} sec. ago"
		},
		"future": {
			"other": "in {0} sec."
		}
	},
	"now": {
		"past": {
			"other": "now"
		},
		"future": {
			"other": "now"
		}
	}
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
	"year": {
		"future": {
			"other": "{0}yr"
		},
		"past": {
			"other": "{0}yr"
		}
	},
	"month": {
		"future": {
			"other": "{0}mo"
		},
		"past": {
			"other": "{0}mo"
		}
	},
	"week": {
		"future": {
			"other": "{0}wk"
		},
		"past": {
			"other": "{0}wk"
		}
	},
	"day": {
		"future": {
			"other": "{0}d"
		},
		"past": {
			"other": "{0}d"
		}
	},
	"hour": {
		"future": {
			"other": "{0}h"
		},
		"past": {
			"other": "{0}h"
		}
	},
	"minute": {
		"future": {
			"other": "{0}m"
		},
		"past": {
			"other": "{0}m"
		}
	},
	"second": {
		"past": {
			"other": "{0}s"
		},
		"future": {
			"other": "{0}s"
		}
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19)


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(18);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */

var React = __webpack_require__(0);

var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(20);
} else {
  module.exports = require('./index.dev');
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(17);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = TimeAgo;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map