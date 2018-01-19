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
/******/ 	return __webpack_require__(__webpack_require__.s = 143);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(30)('wks')
  , uid        = __webpack_require__(18)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(43)
  , toPrimitive    = __webpack_require__(33)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(44)
  , defined = __webpack_require__(24);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(79)
  , hide      = __webpack_require__(10)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(17);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(48)
  , enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canonical__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__canonical__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convenient__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__convenient__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(37);
/* unused harmony reexport minute */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["a"]; });
/* unused harmony reexport month */
/* unused harmony reexport year */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["f"]; });

// A gradation is a mapping from a time interval (in seconds)
// to the most appropriate time interval measurement unit
// for describing it, along with the amount of such units.
//
// E.g. for "canonical" gradation:
//
// 0 -> 1 'now'
// 0.5 -> 1 'second'
// 60 -> 1 'minute'
// 91 -> 2 'minute's
// ...
//
// Each gradation unit can have:
//
// * unit - (required) The name of the time interval measurement unit.
//
// * factor - (required) The amount of seconds will be divided by this number for this unit.
//
// * granularity - A step for the unit's resulting "amount" value.
//
// * threshold - Min value (in seconds) for this unit. Is required for non-first unit.
//
// * threshold_for_[unit] - A specific threshold required for moving from `[unit]` to this unit.
//                          E.g. if "now" unit is present in time units gradation
//                          then `threshold_for_now` can be set to `45` seconds.
//                          Otherwise, if "now" unit is omitted from time units gradation,
//                          then `elapsed(0)` will output "0 seconds" because there's no `threshold`.
//
// A user can supply his own gradation.
//



//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = semanticUIReact;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(65);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(64);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f
  , has = __webpack_require__(4)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(18);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(26)
  , wksExt         = __webpack_require__(35)
  , defineProperty = __webpack_require__(5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__JavascriptTimeAgo__ = __webpack_require__(52);
/* unused harmony export loadLocale */
/* harmony export (immutable) */ __webpack_exports__["b"] = getLanguageFromLanguageTag;




/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */

var RelativeTimeFormat = function () {
  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.type="numeric"] - One of: "numeric", "text".
   * @param {string} [options.localeMatcher="best fit"] - One of: "lookup", "best fit".
   */
  function RelativeTimeFormat(locales) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RelativeTimeFormat);

    var style = options.style;

    this.style = style || 'long';

    // Choose the most appropriate locale.
    // This could implement some kind of a "best-fit" algorythm.
    if (locales) {
      this.locale = RelativeTimeFormat.supportedLocalesOf(locales)[0];
    }
    this.locale = this.locale ? resolveLocale(this.locale) : getDefaultLocale();
  }

  /**
   * Formats time `value` in `units` (either in past or in future).
   * @param {number} value - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(RelativeTimeFormat, [{
    key: 'format',
    value: function format(value, unit) {
      return this.getRule(value, unit).replace('{0}', Math.abs(value));
    }

    /**
     * Formats time `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns [
     * //   { type: "literal", value: "in "},
     * //   { type: "day", value: "100"},
     * //   { type: "literal", value: " days"}
     * // ]
     * rtf.formatToParts(100, "day")
     */

  }, {
    key: 'formatToParts',
    value: function formatToParts(value, unit) {
      var rule = this.getRule(value, unit);
      var valueIndex = rule.indexOf("{0}");
      var parts = [];
      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }
      parts.push({
        type: unit,
        value: String(Math.abs(value))
      });
      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }
      return parts;
    }

    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */

  }, {
    key: 'getRule',
    value: function getRule(value, unit) {
      // `javascript-time-ago` uses some extra time unterval units
      // like "now", "half-hour", "half-year" so not throwing here.
      // if (["second", "minute", "hour", "day", "week", "month", "quarter"].indexOf(value) < 0) {
      //   throw new RangeError(`Unknown time unit: ${unit}.`)
      // }
      // Get locale-specific time interval formatting rules
      // of a given `style` for the given value of measurement `unit`.
      //
      // E.g.:
      //
      // ```json
      // {
      //  "past": {
      //    "one": "a second ago",
      //    "other": "{0} seconds ago"
      //  },
      //  "future": {
      //    "one": "in a second",
      //    "other": "in {0} seconds"
      //  }
      // }
      // ```
      //
      // Then choose either "past" or "future" based on time `value` sign.
      var rules = getLocales()[this.locale][this.style][unit][value <= 0 ? "past" : "future"];
      // Quantify `value`.
      var quantifier = getLocales()[this.locale].quantify(Math.abs(value));
      // "other" rule is supposed to always be present
      return rules[quantifier] || rules.other;
    }

    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */

  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions() {
      return {
        locale: this.locale
      };
    }
  }]);

  return RelativeTimeFormat;
}();

/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {Function} [options.localeMatcher] - The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
 * var options = { localeMatcher: 'lookup' };
 * console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options).join(', '));
 * // → "id-u-co-pinyin, de-ID"
 */


/* harmony default export */ __webpack_exports__["a"] = RelativeTimeFormat;
RelativeTimeFormat.supportedLocalesOf = function (locales, options) {
  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales];
  }
  // This is not an intelligent algorythm,
  // but it will do for the polyfill purposes.
  // This could implement some kind of a "best-fit" algorythm.
  return locales.filter(resolveLocale);
};

/**
 * Resolves a locale to a supported one.
 * @param  {string} locale
 * @return {string}
 */
function resolveLocale(locale) {
  if (getLocales()[locale]) {
    return locale;
  }
  var language = getLanguageFromLanguageTag(locale);
  if (getLocales()[language]) {
    return language;
  }
}

function loadLocale(locale) {
  __WEBPACK_IMPORTED_MODULE_2__JavascriptTimeAgo__["a" /* default */].locale(locale);
}

function getLocales() {
  return __WEBPACK_IMPORTED_MODULE_2__JavascriptTimeAgo__["a" /* default */].locales;
}

function getDefaultLocale() {
  return __WEBPACK_IMPORTED_MODULE_2__JavascriptTimeAgo__["a" /* default */].default_locale;
}

/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */
function getLanguageFromLanguageTag(languageTag) {
  var hyphenIndex = languageTag.indexOf('-');
  if (hyphenIndex > 0) {
    return languageTag.slice(0, hyphenIndex);
  }
  return languageTag;
}
//# sourceMappingURL=RelativeTimeFormat.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* unused harmony export minute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return year; });
/* harmony export (immutable) */ __webpack_exports__["e"] = getStep;
/* harmony export (immutable) */ __webpack_exports__["f"] = getDate;

var minute = 60; // in seconds

var hour = 60 * minute; // in seconds

var day = 24 * hour; // in seconds

// https://www.quora.com/What-is-the-average-number-of-days-in-a-month
var month = 30.44 * day; // in seconds

// "400 years have 146097 days (taking into account leap year rules)"
var year = 146097 / 400 * day; // in seconds

/**
 * Returns a step of gradation corresponding to the unit.
 * @param  {Object[]} gradation
 * @param  {string} unit
 * @return {?Object}
 */
function getStep(gradation, unit) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(gradation), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var step = _step.value;

      if (step.unit === unit) {
        return step;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
//# sourceMappingURL=helpers.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RelativeTimeFormat__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["c"] = choose_locale;
/* harmony export (immutable) */ __webpack_exports__["b"] = intlDateTimeFormatSupportedLocale;
/* harmony export (immutable) */ __webpack_exports__["a"] = intlDateTimeFormatSupported;




// Chooses the most appropriate locale
// (one of the registered ones)
// based on the list of preferred `locales` supplied by the user.
//
// @param {string[]} locales - the list of preferable locales (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)).
// @param {Object} registered_locales - a map of available locales.
//
// @returns {string} The most suitable locale
//
// @example
// // Returns 'en'
// choose_locale(['en-US'], undefined, { 'ru', 'en' })
//
function choose_locale(locales, registered_locales) {
	// This is not an intelligent algorythm,
	// but it will do for this library's case.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(locales), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var locale = _step.value;

			if (registered_locales[locale]) {
				return locale;
			}

			var language = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__RelativeTimeFormat__["b" /* getLanguageFromLanguageTag */])(locale);

			if (language !== locale) {
				if (registered_locales[language]) {
					return language;
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	throw new Error('No locale data has been registered for any of the locales: ' + locales.join(', '));
}

/**
 * Whether can use `Intl.DateTimeFormat` for these `locales`.
 * Returns the first suitable one.
 * @param  {(string|string[])} locales
 * @return {?string} The first locale that can be used.
 */
function intlDateTimeFormatSupportedLocale(locales) {
	/* istanbul ignore else */
	if (intlDateTimeFormatSupported()) {
		return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
	}
}
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */
function intlDateTimeFormatSupported() {
	// Babel transforms `typeof` into some "branches"
	// so istanbul will show this as "branch not covered".
	/* istanbul ignore next */
	var is_intl_available = (typeof Intl === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(Intl)) === 'object';

	return is_intl_available && typeof Intl.DateTimeFormat === 'function';
}
//# sourceMappingURL=locale.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactTimeago = __webpack_require__(141);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _fetch = __webpack_require__(58);

var _reactScrollableAnchor = __webpack_require__(136);

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

var _CardExpandable = __webpack_require__(55);

var _reactDom = __webpack_require__(13);

var _lodash = __webpack_require__(142);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactHotLoader = __webpack_require__(130);

var _semanticUiReact = __webpack_require__(20);

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
					resultCount: data.resultCount + " result(s)"
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

var currentFile = /*require.resolve*/(39);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(9)(function(){
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(49)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(4)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(83)
  , setToStringTag = __webpack_require__(28)
  , getPrototypeOf = __webpack_require__(92)
  , ITERATOR       = __webpack_require__(2)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(12)
  , dPs         = __webpack_require__(89)
  , enumBugKeys = __webpack_require__(25)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(81).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(48)
  , hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(4)
  , toIObject    = __webpack_require__(6)
  , arrayIndexOf = __webpack_require__(77)(false)
  , IE_PROTO     = __webpack_require__(29)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(94)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(10)
  , Iterators     = __webpack_require__(15)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_math_sign__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_math_sign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_math_sign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grade__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__locale__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RelativeTimeFormat__ = __webpack_require__(36);











var JavascriptTimeAgo = function () {

	/**
  * @param {(string|string[])} locales=[] - Preferred locales (or locale).
  */

	// Fallback locale
	// (when not a single supplied preferred locale is available)
	function JavascriptTimeAgo() {
		var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, JavascriptTimeAgo);

		// Convert `locales` to an array.
		if (typeof locales === 'string') {
			locales = [locales];
		}

		// Choose the most appropriate locale
		// (one of the previously added ones)
		// based on the list of preferred `locales` supplied by the user.
		this.locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__locale__["c" /* default */])(locales.concat(JavascriptTimeAgo.default_locale), JavascriptTimeAgo.locales);
	}

	// Formats the relative date/time.
	//
	// @return {string} Returns the formatted relative date/time.
	//
	// @param {(Object|string)} [style] - Relative date/time formatting style.
	//
	// @param {string[]} [style.units] - A list of allowed time units
	//                                  (e.g. ['second', 'minute', 'hour', …])
	//
	// @param {Function} [style.custom] - `function ({ elapsed, time, date, now })`.
	//                                    If this function returns a value, then
	//                                    the `.format()` call will return that value.
	//                                    Otherwise it has no effect.
	//
	// @param {string} [style.flavour] - e.g. "long", "short", "tiny", etc.
	//
	// @param {Object[]} [style.gradation] - Time scale gradation steps.
	//
	// @param {string} style.gradation[].unit - Time interval measurement unit.
	//                                          (e.g. ['second', 'minute', 'hour', …])
	//
	// @param {Number} style.gradation[].factor - Time interval measurement unit factor.
	//                                            (e.g. `60` for 'minute')
	//
	// @param {Number} [style.gradation[].granularity] - A step for the unit's "amount" value.
	//                                                   (e.g. `5` for '0 minutes', '5 minutes', etc)
	//
	// @param {Number} [style.gradation[].threshold] - Time interval measurement unit threshold.
	//                                                 (e.g. `45` seconds for 'minute').
	//                                                 There can also be specific `threshold_[unit]`
	//                                                 thresholds for fine-tuning.
	//


	// For all configured locales
	// their relative time formatter messages will be stored here


	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(JavascriptTimeAgo, [{
		key: 'format',
		value: function format(input) {
			var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_8__style__["a" /* defaultStyle */];

			if (typeof style === 'string') {
				switch (style) {
					case 'twitter':
						style = __WEBPACK_IMPORTED_MODULE_8__style__["b" /* twitterStyle */];
						break;
					case 'time':
						style = __WEBPACK_IMPORTED_MODULE_8__style__["c" /* timeStyle */];
						break;
					default:
						style = __WEBPACK_IMPORTED_MODULE_8__style__["a" /* defaultStyle */];
				}
			}

			var _get_date_and_time_be = get_date_and_time_being_formatted(input),
			    date = _get_date_and_time_be.date,
			    time = _get_date_and_time_be.time;

			// Get locale messages for this formatting flavour


			var _get_locale_data = this.get_locale_data(style.flavour),
			    flavour = _get_locale_data.flavour,
			    locale_data = _get_locale_data.locale_data;

			// Can pass a custom `now`, e.g. for testing purposes.
			// Technically it doesn't belong to `style`
			// but since this is an undocumented internal feature,
			// taking it from the `style` argument will do (for now).


			var now = style.now || Date.now();

			// how much time elapsed (in seconds)
			var elapsed = (now - time) / 1000; // in seconds

			// Allows returning any custom value for any `elapsed` interval.
			// If `style.custom()` returns a value (`string`)
			// then this value is returned from this `.format()` call.
			// For example, seconds, minutes and hours can be shown relatively,
			// and other intervals can be shown using full date format.
			// (that's what Twitter style does with its `custom()`)
			if (style.custom) {
				var custom = style.custom({
					now: now,
					date: date,
					time: time,
					elapsed: elapsed,
					locale: this.locale
				});

				if (custom !== undefined) {
					return custom;
				}
			}

			// Available time interval measurement units.
			var units = get_time_interval_measurement_units(locale_data, style.units);

			// If no available time unit is suitable, just output an empty string.
			if (units.length === 0) {
				console.error('Units "' + units.join(', ') + '" were not found in locale data for "' + this.locale + '".');
				return '';
			}

			// Choose the appropriate time measurement unit
			// and get the corresponding rounded time amount.
			var step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__grade__["a" /* default */])(Math.abs(elapsed), now, units, style.gradation);

			// If no time unit is suitable, just output an empty string.
			// E.g. when "now" unit is not available
			// and "second" has a threshold of `0.5`
			// (e.g. the "canonical" grading scale).
			if (!step) {
				return '';
			}

			if (step.format) {
				return step.format(date || time, this.locale);
			}

			var unit = step.unit,
			    factor = step.factor,
			    granularity = step.granularity;


			var amount = Math.abs(elapsed) / factor;

			// Apply granularity to the time amount
			// (and fallback to the previous step
			//  if the first level of granularity
			//  isn't met by this amount)
			if (granularity) {
				// Recalculate the elapsed time amount based on granularity
				amount = Math.round(amount / granularity) * granularity;
			}

			// Format the time elapsed.
			// Using `Intl.RelativeTimeFormat` proposal polyfill.
			//
			// TODO: Should cache `Intl.RelativeTimeFormat` instances
			// for given `this.locale` and `flavour`.
			//
			// ```js
			// import Cache from './cache'
			// const cache = new Cache()
			// const formatter = this.cache.get(this.locale, flavour) ||
			//   this.cache.put(this.locale, flavour, new Intl.RelativeTimeFormat(...))
			// return formatter.format(...)
			// ```
			//
			return new __WEBPACK_IMPORTED_MODULE_9__RelativeTimeFormat__["a" /* default */](this.locale, { style: flavour }).format(-1 * __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_math_sign___default()(elapsed) * Math.round(amount), unit);
		}

		/**
   * Gets locale messages for this formatting flavour
   *
   * @param {(string|string[])} flavour - Relative date/time formatting flavour.
   *                                      If it's an array then all flavours are tried in order.
   *
   * @returns {Object} Returns an object of shape { flavour, locale_data }
   */

	}, {
		key: 'get_locale_data',
		value: function get_locale_data() {
			var flavour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			// Get relative time formatting rules for this locale
			var locale_data = JavascriptTimeAgo.locales[this.locale];

			// Convert `flavour` to an array.
			if (typeof flavour === 'string') {
				flavour = [flavour];
			}

			// "long" flavour is the default one.
			// (it's always present)
			flavour = flavour.concat('long');

			// Find a suitable flavour.
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(flavour), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ = _step.value;

					if (locale_data[_]) {
						return {
							flavour: _,
							locale_data: locale_data[_]
						};
					}
				}

				// Can't happen - "long" flavour is always present.
				// throw new Error(`None of the flavours - ${flavour.join(', ')} - was found for locale "${this.locale}".`)
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}]);

	return JavascriptTimeAgo;
}();

/**
 * Sets default locale.
 * @param  {string} locale
 */


JavascriptTimeAgo.default_locale = 'en';
JavascriptTimeAgo.locales = {};
/* harmony default export */ __webpack_exports__["a"] = JavascriptTimeAgo;
JavascriptTimeAgo.setDefaultLocale = function (locale) {
	JavascriptTimeAgo.default_locale = locale;
};

// Adds locale data for a specific locale.
//
// @param {Object} locale_data - Locale data.
//
JavascriptTimeAgo.locale = function (locale_data) {
	// This locale data is stored in a global variable
	// and later used when calling `.format(time)`.
	JavascriptTimeAgo.locales[locale_data.locale] = locale_data;
};

// Normalizes `.format()` `time` argument.
function get_date_and_time_being_formatted(input) {
	if (input.constructor === Date) {
		return {
			date: input,
			time: input.getTime()
		};
	}

	if (typeof input === 'number') {
		return {
			time: input
			// `date` is not required for formatting
			// relative times unless "twitter" preset is used.
			// date : new Date(input)
		};
	}

	// For some weird reason istanbul doesn't see this `throw` covered.
	/* istanbul ignore next */
	throw new Error('Unsupported relative time formatter input: ' + (typeof input === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(input)) + ', ' + input);
}

// Get available time interval measurement units.
function get_time_interval_measurement_units(locale_data, restricted_set_of_units) {
	// All available time interval measurement units.
	var units = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(locale_data);

	// If only a specific set of available
	// time measurement units can be used.
	if (restricted_set_of_units) {
		// Reduce available time interval measurement units
		// based on user's preferences.
		return restricted_set_of_units.filter(function (_) {
			return units.indexOf(_) >= 0;
		});
	}

	return units;
}
//# sourceMappingURL=JavascriptTimeAgo.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jump = __webpack_require__(124);

var _jump2 = _interopRequireDefault(_jump);

var _func = __webpack_require__(137);

var _scroll = __webpack_require__(138);

var _hash = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  offset: 0,
  scrollDuration: 400,
  keepLastAnchorHash: false
};

var Manager = function Manager() {
  var _this = this;

  _classCallCheck(this, Manager);

  this.addListeners = function () {
    window.addEventListener('scroll', _this.scrollHandler, false);
    window.addEventListener('hashchange', _this.handleHashChange);
  };

  this.removeListeners = function () {
    window.removeEventListener('scroll', _this.scrollHandler, false);
    window.removeEventListener('hashchange', _this.handleHashChange);
  };

  this.configure = function (config) {
    _this.config = _extends({}, defaultConfig, config);
  };

  this.goToTop = function () {
    if ((0, _scroll.getScrollTop)() === 0) return;
    _this.forcedHash = true;
    window.scroll(0, 0);
  };

  this.addAnchor = function (id, component) {
    // if this is the first anchor, set up listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.addListeners();
    }
    _this.forceHashUpdate();
    _this.anchors[id] = component;
  };

  this.removeAnchor = function (id) {
    delete _this.anchors[id];
    // if this is the last anchor, remove listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.removeListeners();
    }
  };

  this.handleScroll = function () {
    var _config = _this.config,
        offset = _config.offset,
        keepLastAnchorHash = _config.keepLastAnchorHash;

    var bestAnchorId = (0, _scroll.getBestAnchorGivenScrollLocation)(_this.anchors, offset);

    if (bestAnchorId && (0, _hash.getHash)() !== bestAnchorId) {
      _this.forcedHash = true;
      (0, _hash.updateHash)(bestAnchorId, false);
    } else if (!bestAnchorId && !keepLastAnchorHash) {
      (0, _hash.removeHash)();
    }
  };

  this.handleHashChange = function (e) {
    if (_this.forcedHash) {
      _this.forcedHash = false;
    } else {
      _this.goToSection((0, _hash.getHash)());
    }
  };

  this.goToSection = function (id) {
    var element = _this.anchors[id];
    if (element) {
      (0, _jump2.default)(element, {
        duration: _this.config.scrollDuration,
        offset: _this.config.offset
      });
    } else {
      // make sure that standard hash anchors don't break.
      // simply jump to them.
      element = document.getElementById(id);
      if (element) {
        (0, _jump2.default)(element, {
          duration: 0,
          offset: _this.config.offset
        });
      }
    }
  };

  this.anchors = {};
  this.forcedHash = false;
  this.config = defaultConfig;

  this.scrollHandler = (0, _func.debounce)(this.handleScroll, 100);
  this.forceHashUpdate = (0, _func.debounce)(this.handleHashChange, 1);
};

exports.default = new Manager();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHash = exports.getHash = function getHash() {
  return window.location.hash.slice(1);
};

var updateHash = exports.updateHash = function updateHash(hash, affectHistory) {
  if (affectHistory) {
    window.location.hash = hash;
  } else {
    window.location.replace("#" + hash);
  }
};

// remove hash in url without affecting history or forcing reload
var removeHash = exports.removeHash = function removeHash() {
  history.replaceState("", document.title, window.location.pathname + window.location.search);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CardExpandable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _CardsContextMenu = __webpack_require__(56);

var _semanticUiReact = __webpack_require__(20);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsContextMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _actions_new = __webpack_require__(57);

var _semanticUiReact = __webpack_require__(20);

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
      console.log(this.props.itemJSON);
    }
  }, {
    key: "handleSendToOpenMedia",
    value: function handleSendToOpenMedia() {
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
      WpLib.OMApi.stringField("BLA BLA", 8), WpLib.OMApi.stringField("WOW", 14), WpLib.OMApi.stringField(null, 15), WpLib.OMApi.intField(1, 5068) //value, field id
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsCornerPopup = exports.ModalViewButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(13);

var _semanticUiReact = __webpack_require__(20);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.execute_fetch = execute_fetch;

var _javascriptTimeAgo = __webpack_require__(108);

var _javascriptTimeAgo2 = _interopRequireDefault(_javascriptTimeAgo);

var _en = __webpack_require__(109);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(61);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(50);
module.exports = __webpack_require__(98);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(0).Math.sign;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(104);
__webpack_require__(106);
__webpack_require__(107);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(35).f('iterator');

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6)
  , toLength  = __webpack_require__(96)
  , toIndex   = __webpack_require__(95);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23)
  , TAG = __webpack_require__(2)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(75);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11)
  , gOPS    = __webpack_require__(27)
  , pIE     = __webpack_require__(16);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(46)
  , descriptor     = __webpack_require__(17)
  , setToStringTag = __webpack_require__(28)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(11)
  , toIObject = __webpack_require__(6);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(18)('meta')
  , isObject = __webpack_require__(14)
  , has      = __webpack_require__(4)
  , setDesc  = __webpack_require__(5).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(9)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(11)
  , gOPS     = __webpack_require__(27)
  , pIE      = __webpack_require__(16)
  , toObject = __webpack_require__(32)
  , IObject  = __webpack_require__(44)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(5)
  , anObject = __webpack_require__(12)
  , getKeys  = __webpack_require__(11);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(16)
  , createDesc     = __webpack_require__(17)
  , toIObject      = __webpack_require__(6)
  , toPrimitive    = __webpack_require__(33)
  , has            = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(43)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6)
  , gOPN      = __webpack_require__(47).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(4)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(9);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31)
  , defined   = __webpack_require__(24);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(78)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12)
  , get      = __webpack_require__(97);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(76)
  , step             = __webpack_require__(84)
  , Iterators        = __webpack_require__(15)
  , toIObject        = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', {sign: __webpack_require__(86)});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(88)});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(11);

__webpack_require__(93)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 104 */
/***/ (function(module, exports) {



/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(4)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(49)
  , META           = __webpack_require__(87).KEY
  , $fails         = __webpack_require__(9)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(28)
  , uid            = __webpack_require__(18)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(35)
  , wksDefine      = __webpack_require__(34)
  , keyOf          = __webpack_require__(85)
  , enumKeys       = __webpack_require__(80)
  , isArray        = __webpack_require__(82)
  , anObject       = __webpack_require__(12)
  , toIObject      = __webpack_require__(6)
  , toPrimitive    = __webpack_require__(33)
  , createDesc     = __webpack_require__(17)
  , _create        = __webpack_require__(46)
  , gOPNExt        = __webpack_require__(91)
  , $GOPD          = __webpack_require__(90)
  , $DP            = __webpack_require__(5)
  , $keys          = __webpack_require__(11)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(16).f  = $propertyIsEnumerable;
  __webpack_require__(27).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(26)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34)('asyncIterator');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34)('observable');

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_JavascriptTimeAgo__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__modules_JavascriptTimeAgo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_locale__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intlDateTimeFormatSupported", function() { return __WEBPACK_IMPORTED_MODULE_1__modules_locale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intlDateTimeFormatSupportedLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__modules_locale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_RelativeTimeFormat__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimeFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__modules_RelativeTimeFormat__["a"]; });






/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
{
	locale : 'en',

	tiny       : __webpack_require__(116),
	narrow     : __webpack_require__(112),
	short      : __webpack_require__(115),
	short_time : __webpack_require__(114),
	long       : __webpack_require__(111),
	long_time  : __webpack_require__(110),

	quantify : __webpack_require__(113)
}

/***/ }),
/* 110 */
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
/* 111 */
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
/* 112 */
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
/* 113 */
/***/ (function(module, exports) {

module.exports=function(n){var r=!String(n).split(".")[1];return 1==n&&r?"one":"other"}

/***/ }),
/* 114 */
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
/* 115 */
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
/* 116 */
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
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(37);


// just now
// 1 second ago
// …
// 59 seconds ago
// 1 minute ago
// …
// 59 minutes ago
// 1 hour ago
// …
// 24 hours ago
// 1 day ago
// …
// 7 days ago
// 1 week ago
// …
// 3 weeks ago
// 1 month ago
// …
// 11 months ago
// 1 year ago
// …
/* harmony default export */ __webpack_exports__["a"] = [{
	unit: 'now',
	factor: 1
}, {
	unit: 'second',
	factor: 1,
	threshold: 0.5
}, {
	unit: 'minute',
	factor: 60,
	threshold: 59.5
}, {
	unit: 'hour',
	factor: 60 * 60,
	threshold: 59.5 * 60
}, {
	unit: 'day',
	factor: __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */],
	threshold: 23.5 * 60 * 60
}, {
	unit: 'week',
	factor: 7 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */],
	threshold: 6.5 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */]
}, {
	unit: 'month',
	factor: __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* month */],
	threshold: 3.5 * 7 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */]
}, {
	unit: 'year',
	factor: __WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* year */],
	threshold: 11.5 * __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* month */]
}];
//# sourceMappingURL=canonical.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(37);


// just now
// 1 minute ago
// 2 minutes ago
// 5 minutes ago
// 10 minutes ago
// 15 minutes ago
// 20 minutes ago
// half an hour ago
// an hour ago
// 2 hours ago
// …
// 20 hours ago
// a day ago
// 2 days ago
// 5 days ago
// a week ago
// 2 weeks ago
// 3 weeks ago
// a month ago
// 2 months ago
// 4 months ago
// half a year ago
// a year ago
// 2 years ago
// …
/* harmony default export */ __webpack_exports__["a"] = [{
	unit: 'now',
	factor: 1
}, {
	unit: 'second',
	factor: 1,
	threshold: 1,
	threshold_for_now: 45
}, {
	unit: 'minute',
	factor: 60,
	threshold: 45
}, {
	unit: 'minute',
	factor: 60,
	threshold: 2.5 * 60,
	granularity: 5
}, {
	unit: 'half-hour',
	factor: 30 * 60,
	threshold: 22.5 * 60
}, {
	unit: 'hour',
	factor: 60 * 60,
	threshold: 42.5 * 60,
	threshold_for_minute: 52.5 * 60
}, {
	unit: 'day',
	factor: __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */],
	threshold: 20.5 / 24 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */]
}, {
	unit: 'week',
	factor: 7 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */],
	threshold: 5.5 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */]
}, {
	unit: 'month',
	factor: __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* month */],
	threshold: 3.5 * 7 * __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* day */]
}, {
	unit: 'half-year',
	factor: 0.5 * __WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* year */],
	threshold: 4.5 * __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* month */]
}, {
	unit: 'year',
	factor: __WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* year */],
	threshold: 9 * __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* month */],
	threshold_for_month: 10.5 * __WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* month */]
}];
//# sourceMappingURL=convenient.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gradation__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = grade;




/**
 * Takes seconds `elapsed` and measures them
 * against `gradation` to return the suitable
 * `gradation` step.
 *
 * @param {number} elapsed - Time interval (in seconds)
 *
 * @param {string[]} units - A list of allowed time units
 *                           (e.g. ['second', 'minute', 'hour', …])
 *
 * @param {Object} [gradation] - Time scale gradation steps.
 *
 *                               E.g.:
 *                               [
 *                                 { unit: 'second', factor: 1 },
 *                                 { unit: 'minute', factor: 60, threshold: 60 },
 *                                 { format(), threshold: 24 * 60 * 60 },
 *                                 …
 *                               ]
 *
 * @return {?Object} `gradation` step.
 */
function grade(elapsed, now, units) {
	var gradation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : __WEBPACK_IMPORTED_MODULE_2__gradation__["a" /* convenient */];

	// Leave only supported gradation steps
	gradation = gradation.filter(function (_ref) {
		var unit = _ref.unit;

		if (unit) {
			return units.indexOf(unit) >= 0;
		}

		return true;
	});

	// Find the most appropriate time scale gradation step
	var i = 0;
	while (i < gradation.length) {
		// Current step of time scale
		var step = gradation[i];
		// The next step of time scale
		var next_step = i + 1 < gradation.length ? gradation[i + 1] : undefined;

		// If it's not the last step of time scale,
		// and the next step of time scale is reachable,
		// then proceed with that next step of time scale.
		if (next_step) {
			// Allows threshold customization
			// based on which time interval measurement `units`
			// are available during this `elapsed(value, units)` call.
			var threshold = next_step['threshold_for_' + step.unit] || next_step.threshold;

			// `threshold` can be a function of `now`.
			if (typeof threshold === 'function') {
				threshold = threshold(now);
			}

			if (typeof threshold !== 'number') {
				// Babel transforms `typeof` into some "branches"
				// so istanbul will show this as "branch not covered".
				/* istanbul ignore next */
				var type = typeof threshold === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(threshold);
				throw new Error('Each step of a gradation must have a threshold defined except for the first one. Got "' + threshold + '", ' + type + '. Step: ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(next_step));
			}

			// If the next step of time scale is reachable,
			// then proceed with that next step of time scale.
			if (elapsed >= threshold) {
				i++;
				continue;
			}
		}

		// Either it's the last step of time scale,
		// or the next step of time scale is unreachable,
		// so stick with the current step of time scale.

		// If time elapsed is so small no gradation scale unit suits it.
		if (step.threshold) {
			var _threshold = typeof step.threshold === 'function' ? step.threshold(now) : step.threshold;

			if (_threshold && elapsed < _threshold) {
				return;
			}
		}

		var exact_amount = elapsed / step.factor;
		var amount = Math.round(exact_amount);

		// Apply granularity to the time amount
		// (and fallback to the previous step
		//  if the first level of granularity
		//  isn't met by this amount)
		if (step.granularity) {
			// Recalculate the elapsed time amount based on granularity
			amount = Math.round(exact_amount / step.granularity) * step.granularity;

			// If the granularity for this step of time scale
			// is too high, then fallback
			// to the previous step of time scale.
			// (if there is the previous step of time scale)
			if (amount === 0) {
				if (gradation[i - 1]) {
					return gradation[i - 1];
				}
			}
		}

		return step;
	}

	console.error('Not a single time unit of "' + units.join(', ') + '" was specified ' + ('in the gradation \n ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({ gradation: gradation }, null, 3)));
}
//# sourceMappingURL=grade.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gradation__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = {
	gradation: __WEBPACK_IMPORTED_MODULE_0__gradation__["a" /* convenient */],
	flavour: 'long',
	units: ['now', 'minute', 'half-hour', 'hour', 'day', 'week', 'month', 'half-year', 'year']
};
//# sourceMappingURL=default.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__time__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twitter__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__twitter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__default__["a"]; });
// A preset (style) is an object having shape
// `{ units, gradation, flavour, custom({ elapsed, time, date, now, locale }) }`.
//
// `date` parameter of `custom()` is not guaranteed to be set (can be inferred from `time`).
//



//# sourceMappingURL=index.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gradation__ = __webpack_require__(19);


// Similar to the default style but with "ago" omitted.
//
// just now
// 5 minutes
// 10 minutes
// 15 minutes
// 20 minutes
// half an hour
// an hour
// 2 hours
// …
// 20 hours
// 1 day
// 2 days
// a week
// 2 weeks
// 3 weeks
// a month
// 2 months
// 3 months
// 4 months
// half a year
// a year
// 2 years
//
/* harmony default export */ __webpack_exports__["a"] = {
	gradation: __WEBPACK_IMPORTED_MODULE_0__gradation__["a" /* convenient */],
	flavour: 'long_time',
	units: ['now', 'minute', 'half-hour', 'hour', 'day', 'week', 'month', 'half-year', 'year']
};
//# sourceMappingURL=time.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gradation__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale__ = __webpack_require__(38);




// A cache for `Intl.DateTimeFormat` twitter formatters
// for various locales (is a global variable).
var formatters = {};

// Twitter style relative time formatting.
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
// Seconds, minutes and hours are shown relatively,
// and other intervals can be shown using full date format.
/* harmony default export */ __webpack_exports__["a"] = {
	// Twitter gradation is derived from "canonical" gradation
	// adjusting its "minute" `threshold` to be 45.
	gradation: [
	// Minutes
	__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__gradation__["b" /* getStep */])(__WEBPACK_IMPORTED_MODULE_1__gradation__["c" /* canonical */], 'minute'), {
		threshold: 45
	}),
	// Hours
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__gradation__["b" /* getStep */])(__WEBPACK_IMPORTED_MODULE_1__gradation__["c" /* canonical */], 'hour'),
	// If `date` and `now` happened the same year,
	// then only output month and day.
	{
		threshold: __WEBPACK_IMPORTED_MODULE_1__gradation__["d" /* day */] - 0.5 * __WEBPACK_IMPORTED_MODULE_1__gradation__["e" /* hour */],
		format: function format(value, locale) {
			// Whether can use `Intl.DateTimeFormat`.
			// If `Intl` is not available,
			// or the locale is not supported,
			// then don't override the default labels.
			/* istanbul ignore if */
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__locale__["a" /* intlDateTimeFormatSupported */])()) {
				return;
			}

			/* istanbul ignore else */
			if (!formatters[locale]) {
				formatters[locale] = {};
			}

			/* istanbul ignore else */
			if (!formatters[locale].this_year) {
				// "Apr 11" (MMMd)
				formatters[locale].this_year = new Intl.DateTimeFormat(locale, {
					month: 'short',
					day: 'numeric'
				});
			}

			// Output month and day.
			return formatters[locale].this_year.format(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__gradation__["f" /* getDate */])(value));
		}
	},
	// If `date` and `now` happened in defferent years,
	// then output day, month and year.
	{
		threshold: function threshold(now) {
			// Jan 1st of the next year.
			var next_year = new Date(new Date(now).getFullYear() + 1, 0);
			return (next_year.getTime() - now) / 1000;
		},
		format: function format(value, locale) {
			// Whether can use `Intl.DateTimeFormat`.
			// If `Intl` is not available,
			// or the locale is not supported,
			// then don't override the default labels.
			/* istanbul ignore if */
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__locale__["a" /* intlDateTimeFormatSupported */])()) {
				return;
			}

			/* istanbul ignore if */
			if (!formatters[locale]) {
				formatters[locale] = {};
			}

			/* istanbul ignore else */
			if (!formatters[locale].other) {
				// "Apr 11, 2017" (yMMMd)
				formatters[locale].other = new Intl.DateTimeFormat(locale, {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				});
			}

			// Output day, month and year.
			return formatters[locale].other.format(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__gradation__["f" /* getDate */])(value));
		}
	}],

	flavour: ['tiny', 'short_time', 'narrow', 'short']
};
//# sourceMappingURL=twitter.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Jump.js 1.0.1 - A small, modern, dependency-free smooth scrolling library.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/jump.js
 * License: MIT
 */

!function(o,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):o.Jump=n()}(this,function(){"use strict";var o=function(o,n,e,t){return o/=t/2,o<1?e/2*o*o+n:(o--,-e/2*(o*(o-2)-1)+n)},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o},e=function(){function e(){return window.scrollY||window.pageYOffset}function t(o){return o.getBoundingClientRect().top+d}function i(o){v||(v=o),b=o-v,p=s(b,d,y,m),window.scrollTo(0,p),b<m?requestAnimationFrame(i):r()}function r(){window.scrollTo(0,d+y),c&&l&&(c.setAttribute("tabindex","-1"),c.focus()),"function"==typeof w&&w(),v=!1}function u(r){var u=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(m=u.duration||1e3,a=u.offset||0,w=u.callback,s=u.easing||o,l=u.a11y||!1,d=e(),"undefined"==typeof r?"undefined":n(r)){case"number":c=void 0,l=!1,f=d+r;break;case"object":c=r,f=t(c);break;case"string":c=document.querySelector(r),f=t(c)}switch(y=f-d+a,n(u.duration)){case"number":m=u.duration;break;case"function":m=u.duration(y)}requestAnimationFrame(i)}var c=void 0,d=void 0,f=void 0,a=void 0,s=void 0,l=void 0,y=void 0,m=void 0,v=void 0,b=void 0,p=void 0,w=void 0;return u},t=e();return t});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(128);
var invariant = __webpack_require__(129);
var ReactPropTypesSecret = __webpack_require__(127);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(125)();
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133)


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(132);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */

var React = __webpack_require__(7);

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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(134);
} else {
  module.exports = require('./index.dev');
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(131);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(126);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Manager = __webpack_require__(53);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollableAnchor = function (_Component) {
  _inherits(ScrollableAnchor, _Component);

  function ScrollableAnchor(props) {
    _classCallCheck(this, ScrollableAnchor);

    var _this = _possibleConstructorReturn(this, (ScrollableAnchor.__proto__ || Object.getPrototypeOf(ScrollableAnchor)).call(this, props));

    _this.id = props.id || props.children.ref;
    return _this;
  }

  _createClass(ScrollableAnchor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var element = _reactDom2.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);
      _Manager2.default.addAnchor(this.id, element);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _Manager2.default.removeAnchor(this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          id = _props.id;


      return _react2.default.cloneElement(children, {
        ref: children.ref || id
      });
    }
  }]);

  return ScrollableAnchor;
}(_react.Component);

ScrollableAnchor.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string
};
exports.default = ScrollableAnchor;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.removeHash = exports.goToAnchor = exports.configureAnchors = exports.goToTop = undefined;

var _hash = __webpack_require__(54);

Object.defineProperty(exports, 'goToAnchor', {
  enumerable: true,
  get: function get() {
    return _hash.updateHash;
  }
});
Object.defineProperty(exports, 'removeHash', {
  enumerable: true,
  get: function get() {
    return _hash.removeHash;
  }
});

var _ScrollableAnchor = __webpack_require__(135);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollableAnchor).default;
  }
});

var _Manager = __webpack_require__(53);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goToTop = exports.goToTop = _Manager2.default.goToTop;
var configureAnchors = exports.configureAnchors = _Manager2.default.configure;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var debounce = exports.debounce = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = undefined;
    var args = _arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = exports.getScrollTop = function getScrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
};

// get vertical offsets of element, taking scrollTop into consideration
var getElementOffset = exports.getElementOffset = function getElementOffset(element) {
  var scrollTop = getScrollTop();

  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      bottom = _element$getBoundingC.bottom;

  return {
    top: top + scrollTop,
    bottom: bottom + scrollTop
  };
};

// does scrollTop live within element bounds?
var doesElementContainScrollTop = exports.doesElementContainScrollTop = function doesElementContainScrollTop(element) {
  var extraOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var scrollTop = getScrollTop();
  var offsetTop = getElementOffset(element).top + extraOffset;
  return scrollTop >= offsetTop && scrollTop < offsetTop + element.offsetHeight;
};

// is el2's location more relevant than el2,
// parent-child relationship aside?
var checkLocationRelevance = exports.checkLocationRelevance = function checkLocationRelevance(el1, el2) {
  var _getElementOffset = getElementOffset(el1),
      top1 = _getElementOffset.top,
      bottom1 = _getElementOffset.bottom;

  var _getElementOffset2 = getElementOffset(el2),
      top2 = _getElementOffset2.top,
      bottom2 = _getElementOffset2.bottom;

  if (top1 === top2) {
    if (bottom1 === bottom2) {
      // top and bottom of compared elements are the same,
      // so return one randomly in a deterministic way
      return el1 < el2;
    }
    // top of compared elements is the same, so return whichever
    // element has its bottom higher on the page
    return bottom2 < bottom1;
  }
  // top of compared elements differ, so return true
  // if tested element has its top lower on the page
  return top2 > top1;
};

// check if el2 is more relevant than el1, considering child-parent
// relationships as well as node location.
var checkElementRelevance = exports.checkElementRelevance = function checkElementRelevance(el1, el2) {
  if (el1.contains(el2)) {
    // el2 is child, so it gains relevance priority
    return true;
  } else if (!el2.contains(el1) && checkLocationRelevance(el1, el2)) {
    // el1 and el2 are unrelated, but el2 has a better location,
    // so it gains relevance priority
    return true;
  }
  return false;
};

// given a set of anchors, find which one is, given the following logic:
// 1. children nodes are more relevant than parent nodes
// 2. if neither node contains the other, and their top locations differ,
//    the node with the top lower on the page is more relevant
// 3. if neither node contains the other, and their top locations are the same,
//    the node with the bottom higher on the page is more relevant
// 4. if neither node contains the other, and their top and bottom locations
//    are the same, a node is chosen at random, in a deterministic way,
//    to be more relevant.
var getBestAnchorGivenScrollLocation = exports.getBestAnchorGivenScrollLocation = function getBestAnchorGivenScrollLocation(anchors, offset) {
  var bestId = void 0,
      bestElement = void 0;

  Object.keys(anchors).forEach(function (id) {
    var element = anchors[id];
    if (doesElementContainScrollTop(element, offset)) {
      if (!bestElement || checkElementRelevance(bestElement, element)) {
        bestElement = element;
        bestId = id;
      }
    }
  });
  return bestId;
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateParser;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function dateParser(date) {
  var parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }

  var parts = String(date).match(/\d+/g);
  if (parts == null || parts.length <= 2) {
    return parsed;
  } else {
    var _parts$map = parts.map(function (x) {
      return parseInt(x);
    }),
        _parts$map2 = _toArray(_parts$map),
        firstP = _parts$map2[0],
        secondP = _parts$map2[1],
        restPs = _parts$map2.slice(2);

    var correctedParts = [firstP, secondP - 1].concat(_toConsumableArray(restPs));
    var isoDate = new Date(Date.UTC.apply(Date, _toConsumableArray(correctedParts)));
    return isoDate;
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultFormatter;
function defaultFormatter(value, unit, suffix) {
  if (value !== 1) {
    unit += 's';
  }
  return value + ' ' + unit + ' ' + suffix;
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YEAR = exports.MONTH = exports.WEEK = exports.DAY = exports.HOUR = exports.MINUTE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _defaultFormatter = __webpack_require__(140);

var _defaultFormatter2 = _interopRequireDefault(_defaultFormatter);

var _dateParser = __webpack_require__(139);

var _dateParser2 = _interopRequireDefault(_dateParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MINUTE = exports.MINUTE = 60;
var HOUR = exports.HOUR = MINUTE * 60;
var DAY = exports.DAY = HOUR * 24;
var WEEK = exports.WEEK = DAY * 7;
var MONTH = exports.MONTH = DAY * 30;
var YEAR = exports.YEAR = DAY * 365;

var TimeAgo = function (_Component) {
  _inherits(TimeAgo, _Component);

  function TimeAgo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeAgo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).call.apply(_ref, [this].concat(args))), _this), _this.isStillMounted = false, _this.tick = function (refresh) {
      if (!_this.isStillMounted || !_this.props.live) {
        return;
      }

      var then = (0, _dateParser2.default)(_this.props.date).valueOf();
      if (!then) {
        console.warn('[react-timeago] Invalid Date provided');
        return;
      }

      var now = _this.props.now();
      var seconds = Math.round(Math.abs(now - then) / 1000);

      var unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 0;
      var period = Math.min(Math.max(unboundPeriod, _this.props.minPeriod * 1000), _this.props.maxPeriod * 1000);

      if (period) {
        _this.timeoutId = setTimeout(_this.tick, period);
      }

      if (!refresh) {
        _this.forceUpdate();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeAgo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isStillMounted = true;
      if (this.props.live) {
        this.tick(true);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {
        if (!this.props.live && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isStillMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          date = _props.date,
          formatter = _props.formatter,
          Komponent = _props.component,
          live = _props.live,
          minPeriod = _props.minPeriod,
          maxPeriod = _props.maxPeriod,
          title = _props.title,
          now = _props.now,
          passDownProps = _objectWithoutProperties(_props, ['date', 'formatter', 'component', 'live', 'minPeriod', 'maxPeriod', 'title', 'now']);
      /* eslint-enable no-unused-vars */


      var then = (0, _dateParser2.default)(date).valueOf();
      if (!then) {
        return null;
      }
      var timeNow = now();
      var seconds = Math.round(Math.abs(timeNow - then) / 1000);
      var suffix = then < timeNow ? 'ago' : 'from now';

      var _ref2 = seconds < MINUTE ? [Math.round(seconds), 'second'] : seconds < HOUR ? [Math.round(seconds / MINUTE), 'minute'] : seconds < DAY ? [Math.round(seconds / HOUR), 'hour'] : seconds < WEEK ? [Math.round(seconds / DAY), 'day'] : seconds < MONTH ? [Math.round(seconds / WEEK), 'week'] : seconds < YEAR ? [Math.round(seconds / MONTH), 'month'] : [Math.round(seconds / YEAR), 'year'],
          _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[0],
          unit = _ref3[1];

      var passDownTitle = typeof title === 'undefined' ? typeof date === 'string' ? date : (0, _dateParser2.default)(date).toISOString().substr(0, 16).replace('T', ' ') : title;

      if (Komponent === 'time') {
        passDownProps.dateTime = (0, _dateParser2.default)(date).toISOString();
      }

      var nextFormatter = _defaultFormatter2.default.bind(null, value, unit, suffix);

      return _react2.default.createElement(
        Komponent,
        _extends({}, passDownProps, { title: passDownTitle }),
        this.props.formatter(value, unit, suffix, then, nextFormatter)
      );
    }
  }]);

  return TimeAgo;
}(_react.Component);

TimeAgo.displayName = 'TimeAgo';
TimeAgo.defaultProps = {
  live: true,
  component: 'time',
  minPeriod: 0,
  maxPeriod: Infinity,
  formatter: _defaultFormatter2.default,
  now: function now() {
    return Date.now();
  }
};
exports.default = TimeAgo;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map