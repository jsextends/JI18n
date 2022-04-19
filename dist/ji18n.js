(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/I18n.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/I18n.js":
/*!*********************!*\
  !*** ./src/I18n.js ***!
  \*********************/
/*! exports provided: JI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JI18n\", function() { return JI18n; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError(\"Cannot instantiate an arrow function\"); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/**\r\n * Class JI18n.\r\n */\nvar JI18n = /*#__PURE__*/function () {\n  /**\r\n   * 设置的本地化语言\r\n   * @property _l10nKey\r\n   * @type String\r\n   * @private\r\n   */\n\n  /**\r\n   * 本地化语言的信息\r\n   * @type Object\r\n   * @property _l10nValue\r\n   * @private\r\n   */\n\n  /**\r\n   * 可以使用的I18n集合\r\n   * @type Map\r\n   * @property _availableI18nMap\r\n   * @private\r\n   */\n\n  /**\r\n   * 是否序列化[加入sessionStorage]\r\n   * @type Boolean\r\n   * @property _isSerialize\r\n   * @private\r\n   */\n\n  /**\r\n   * 序列化key值前缀\r\n   * @type String\r\n   * @property _prefixSerialize \r\n   * @private\r\n   */\n\n  /**\r\n   * 构造函数\r\n   * @param {Boolean} isSerialize 是否序列化\r\n   * @param {String} prefix  序列化key值前缀\r\n   */\n  function JI18n(isSerialize, prefix) {\n    _classCallCheck(this, JI18n);\n\n    this._l10nKey = \"\";\n    this._l10nValue = null;\n    this._availableI18nMap = null;\n    this._isSerialize = false;\n    this._prefixSerialize = \"lang\";\n    this._isSerialize = isSerialize !== null && isSerialize !== void 0 ? isSerialize : this._isSerialize;\n    this._prefixSerialize = prefix !== null && prefix !== void 0 ? prefix : this._prefixSerialize;\n    this._availableI18nMap = new Map();\n\n    if (this.isloadedLang()) {\n      this.deserializeL10n();\n    }\n  }\n  /**\r\n   * 是否已经加载国际化语言\r\n   * @returns {Boolen}\r\n   */\n\n\n  _createClass(JI18n, [{\n    key: \"isloadedLang\",\n    value: function isloadedLang() {\n      return this.getI18n().length && this._isSerialize;\n    }\n    /**\r\n     * 序列化国际化语言\r\n     * @param {String} key 序列化key\r\n     * @param {Object} value 序列化value\r\n     * @private\r\n     */\n\n  }, {\n    key: \"serializeI18n\",\n    value: function serializeI18n(key, value) {\n      if (this._isSerialize) {\n        window.sessionStorage.setItem(this._prefixSerialize + \"_\" + key, JSON.stringify(value));\n      }\n    }\n    /**\r\n     * 序列化本地化语言类型\r\n     * @param {String} language 本地化语言类型\r\n     * @private\r\n     */\n\n  }, {\n    key: \"serializeL10n\",\n    value: function serializeL10n(language) {\n      if (this._isSerialize) {\n        window.sessionStorage.setItem(this._prefixSerialize + \"_L10n\", language);\n      }\n    }\n    /**\r\n     * 反序列化国际化语言\r\n     * @private\r\n     */\n\n  }, {\n    key: \"deserializeI18n\",\n    value: function deserializeI18n() {\n      var _this = this;\n\n      var langKeys = this.getI18n();\n      langKeys.forEach(function (el) {\n        _newArrowCheck(this, _this);\n\n        this._availableI18nMap.set(el, JSON.parse(window.sessionStorage.getItem(this._prefixSerialize + \"_\" + el)));\n      }.bind(this));\n      this._l10nValue = this._availableI18nMap.get(this._l10nKey);\n    }\n    /**\r\n     * 反序列化本地化语言\r\n     * @private\r\n     */\n\n  }, {\n    key: \"deserializeL10n\",\n    value: function deserializeL10n() {\n      if (this._isSerialize) {\n        var _window$sessionStorag;\n\n        this._l10nKey = (_window$sessionStorag = window.sessionStorage.getItem(this._prefixSerialize + \"_L10n\")) !== null && _window$sessionStorag !== void 0 ? _window$sessionStorag : this._l10nKey;\n      }\n\n      if (this._l10nKey) {\n        this.deserializeI18n();\n      }\n    }\n    /**\r\n     * 添加国际化语言\r\n     * @param {Array|Object} value \r\n     */\n\n  }, {\n    key: \"addI18n\",\n    value: function addI18n(value) {\n      if (Object.prototype.toString.call(value) == \"[object Object]\") {\n        for (var item in value) {\n          this._availableI18nMap.set(item, value[item]);\n\n          this.serializeI18n(item, value[item]);\n        }\n      } else if (Object.prototype.toString.call(value) == \"[object Array]\") {\n        var _iterator = _createForOfIteratorHelper(value),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var _item = _step.value;\n\n            for (var key in _item) {\n              this._availableI18nMap.set(key, value[_item][key]);\n\n              this.serializeI18n(key, value);\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      } else {\n        throw new Error(\"Invalid internationalized language\");\n      }\n    }\n    /**\r\n     * 获取国际化语言类型\r\n     * @returns {Array}\r\n     */\n\n  }, {\n    key: \"getI18n\",\n    value: function getI18n() {\n      var _this2 = this;\n\n      return Object.keys(window.sessionStorage).filter(function (el) {\n        _newArrowCheck(this, _this2);\n\n        return el.indexOf(this._prefixSerialize) > -1 && el.indexOf(\"_L10n\") === -1;\n      }.bind(this)).map(function (el) {\n        _newArrowCheck(this, _this2);\n\n        return el.slice(this._prefixSerialize.length + 1);\n      }.bind(this));\n    }\n    /**\r\n     * 设置本地化语言\r\n     * @param {String} key \r\n     * @returns {null}\r\n     */\n\n  }, {\n    key: \"setL10n\",\n    value: function setL10n(key) {\n      if (this._availableI18nMap.has(key)) {\n        this._l10nKey = key;\n        this._l10nValue = this._availableI18nMap.get(key);\n        this.serializeL10n(key);\n      } else {\n        throw new Error(\"An internationalized language that does not exist\");\n      }\n    }\n    /**\r\n     * 获取本地化语言类型\r\n     * @returns {String}\r\n     */\n\n  }, {\n    key: \"getL10n\",\n    value: function getL10n() {\n      return this._l10nKey;\n    }\n    /**\r\n     * 获取本地化语言中的特定字段\r\n     * @param {String} prop \r\n     * @returns {String}\r\n     */\n\n  }, {\n    key: \"getField\",\n    value: function getField(prop) {\n      try {\n        var props = prop.split(\".\");\n        var currKey = props.shift(),\n            currValue = undefined;\n\n        while (currKey) {\n          currValue = currValue ? currValue[currKey] : this._l10nValue[currKey];\n          currKey = props.shift();\n        }\n\n        return currValue;\n      } catch (_unused) {\n        throw new Error(\"Cannot get the value of property\" + prop);\n      }\n    }\n  }]);\n\n  return JI18n;\n}();\n\n//# sourceURL=webpack:///./src/I18n.js?");

/***/ })

/******/ });
});