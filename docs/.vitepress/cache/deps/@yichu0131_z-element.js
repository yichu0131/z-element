import {
  config$1,
  icon,
  parse$1,
  text
} from "./chunk-H5USCQOV.js";
import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  guardReactiveProps,
  h,
  inject,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  toDisplayString,
  toHandlers,
  unref,
  useAttrs,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-5TCDO6LD.js";

// node_modules/.pnpm/@fortawesome+vue-fontawesome@3.0.8_@fortawesome+fontawesome-svg-core@6.7.1_vue@3.5.13_typescript@5.6.3_/node_modules/@fortawesome/vue-fontawesome/index.es.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var humps$1 = { exports: {} };
(function(module2) {
  (function(global2) {
    var _processKeys = function(convert2, obj, options) {
      if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
        return obj;
      }
      var output, i = 0, l = 0;
      if (_isArray(obj)) {
        output = [];
        for (l = obj.length; i < l; i++) {
          output.push(_processKeys(convert2, obj[i], options));
        }
      } else {
        output = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            output[convert2(key, options)] = _processKeys(convert2, obj[key], options);
          }
        }
      }
      return output;
    };
    var separateWords = function(string, options) {
      options = options || {};
      var separator = options.separator || "_";
      var split = options.split || /(?=[A-Z])/;
      return string.split(split).join(separator);
    };
    var camelize = function(string) {
      if (_isNumerical(string)) {
        return string;
      }
      string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : "";
      });
      return string.substr(0, 1).toLowerCase() + string.substr(1);
    };
    var pascalize = function(string) {
      var camelized = camelize(string);
      return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
    };
    var decamelize = function(string, options) {
      return separateWords(string, options).toLowerCase();
    };
    var toString = Object.prototype.toString;
    var _isFunction = function(obj) {
      return typeof obj === "function";
    };
    var _isObject = function(obj) {
      return obj === Object(obj);
    };
    var _isArray = function(obj) {
      return toString.call(obj) == "[object Array]";
    };
    var _isDate = function(obj) {
      return toString.call(obj) == "[object Date]";
    };
    var _isRegExp = function(obj) {
      return toString.call(obj) == "[object RegExp]";
    };
    var _isBoolean = function(obj) {
      return toString.call(obj) == "[object Boolean]";
    };
    var _isNumerical = function(obj) {
      obj = obj - 0;
      return obj === obj;
    };
    var _processor = function(convert2, options) {
      var callback = options && "process" in options ? options.process : options;
      if (typeof callback !== "function") {
        return convert2;
      }
      return function(string, options2) {
        return callback(string, convert2, options2);
      };
    };
    var humps2 = {
      camelize,
      decamelize,
      pascalize,
      depascalize: decamelize,
      camelizeKeys: function(object, options) {
        return _processKeys(_processor(camelize, options), object);
      },
      decamelizeKeys: function(object, options) {
        return _processKeys(_processor(decamelize, options), object, options);
      },
      pascalizeKeys: function(object, options) {
        return _processKeys(_processor(pascalize, options), object);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    if (module2.exports) {
      module2.exports = humps2;
    } else {
      global2.humps = humps2;
    }
  })(commonjsGlobal);
})(humps$1);
var humps = humps$1.exports;
var _excluded = ["class", "style"];
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(output, pair) {
    var idx = pair.indexOf(":");
    var prop = humps.camelize(pair.slice(0, idx));
    var value = pair.slice(idx + 1).trim();
    output[prop] = value;
    return output;
  }, {});
}
function classToObject(classes) {
  return classes.split(/\s+/).reduce(function(output, className) {
    output[className] = true;
    return output;
  }, {});
}
function convert(abstractElement) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof abstractElement === "string") {
    return abstractElement;
  }
  var children = (abstractElement.children || []).map(function(child) {
    return convert(child);
  });
  var mixins = Object.keys(abstractElement.attributes || {}).reduce(function(mixins2, key) {
    var value = abstractElement.attributes[key];
    switch (key) {
      case "class":
        mixins2.class = classToObject(value);
        break;
      case "style":
        mixins2.style = styleToObject(value);
        break;
      default:
        mixins2.attrs[key] = value;
    }
    return mixins2;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  attrs.class;
  var _attrs$style = attrs.style, aStyle = _attrs$style === void 0 ? {} : _attrs$style, otherAttrs = _objectWithoutProperties(attrs, _excluded);
  return h(abstractElement.tag, _objectSpread2(_objectSpread2(_objectSpread2({}, props), {}, {
    class: mixins.class,
    style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
  }, mixins.attrs), otherAttrs), children);
}
var PRODUCTION = false;
try {
  PRODUCTION = false;
} catch (e) {
}
function log() {
  if (!PRODUCTION && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}
function classList(props) {
  var _classes;
  var classes = (_classes = {
    "fa-spin": props.spin,
    "fa-pulse": props.pulse,
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-li": props.listItem,
    "fa-inverse": props.inverse,
    "fa-flip": props.flip === true,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both"
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classes, "fa-".concat(props.size), props.size !== null), "fa-rotate-".concat(props.rotation), props.rotation !== null), "fa-pull-".concat(props.pull), props.pull !== null), "fa-swap-opacity", props.swapOpacity), "fa-bounce", props.bounce), "fa-shake", props.shake), "fa-beat", props.beat), "fa-fade", props.fade), "fa-beat-fade", props.beatFade), "fa-flash", props.flash), _defineProperty(_defineProperty(_classes, "fa-spin-pulse", props.spinPulse), "fa-spin-reverse", props.spinReverse));
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function normalizeIconArgs(icon2) {
  if (icon2 && _typeof(icon2) === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse$1.icon) {
    return parse$1.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (_typeof(icon2) === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return {
      prefix: icon2[0],
      iconName: icon2[1]
    };
  }
  if (typeof icon2 === "string") {
    return {
      prefix: "fas",
      iconName: icon2
    };
  }
}
var FontAwesomeIcon = defineComponent({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: function validator(value) {
        return [true, false, "horizontal", "vertical", "both"].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator2(value) {
        return ["right", "left"].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator3(value) {
        return [90, 180, 270].indexOf(Number.parseInt(value, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator4(value) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var icon$1 = computed(function() {
      return normalizeIconArgs(props.icon);
    });
    var classes = computed(function() {
      return objectWithKey("classes", classList(props));
    });
    var transform = computed(function() {
      return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
    });
    var mask = computed(function() {
      return objectWithKey("mask", normalizeIconArgs(props.mask));
    });
    var renderedIcon = computed(function() {
      return icon(icon$1.value, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes.value), transform.value), mask.value), {}, {
        symbol: props.symbol,
        title: props.title,
        titleId: props.titleId,
        maskId: props.maskId
      }));
    });
    watch(renderedIcon, function(value) {
      if (!value) {
        return log("Could not find one or more icon(s)", icon$1.value, mask.value);
      }
    }, {
      immediate: true
    });
    var vnode = computed(function() {
      return renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null;
    });
    return function() {
      return vnode.value;
    };
  }
});
var FontAwesomeLayers = defineComponent({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup2(props, _ref) {
    var slots = _ref.slots;
    var familyPrefix = config$1.familyPrefix;
    var className = computed(function() {
      return ["".concat(familyPrefix, "-layers")].concat(_toConsumableArray(props.fixedWidth ? ["".concat(familyPrefix, "-fw")] : []));
    });
    return function() {
      return h("div", {
        class: className.value
      }, slots.default ? slots.default() : []);
    };
  }
});
var FontAwesomeLayersText = defineComponent({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: null,
      validator: function validator5(value) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(value) > -1;
      }
    }
  },
  setup: function setup3(props, _ref) {
    var attrs = _ref.attrs;
    var familyPrefix = config$1.familyPrefix;
    var classes = computed(function() {
      return objectWithKey("classes", [].concat(_toConsumableArray(props.counter ? ["".concat(familyPrefix, "-layers-counter")] : []), _toConsumableArray(props.position ? ["".concat(familyPrefix, "-layers-").concat(props.position)] : [])));
    });
    var transform = computed(function() {
      return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
    });
    var abstractElement = computed(function() {
      var _text = text(props.value.toString(), _objectSpread2(_objectSpread2({}, transform.value), classes.value)), abstract = _text.abstract;
      if (props.counter) {
        abstract[0].attributes.class = abstract[0].attributes.class.replace("fa-layers-text", "");
      }
      return abstract[0];
    });
    var vnode = computed(function() {
      return convert(abstractElement.value, {}, attrs);
    });
    return function() {
      return vnode.value;
    };
  }
});

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x2 + width,
    bottom: y + height,
    left: x2,
    x: x2,
    y
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y
  }) : {
    x: x2,
    y
  };
  x2 = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y
  }, getWindow(popper2)) : {
    x: x2,
    y
  };
  x2 = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y + "px)" : "translate3d(" + x2 + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i3) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i3).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i2 = numberOfChecks; _i2 > 0; _i2--) {
      var _ret = _loop(_i2);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/.pnpm/@yichu0131+z-element@1.0.9_typescript@5.6.3/node_modules/@yichu0131/z-element/dist/es/v-element.js
var ln = typeof global == "object" && global && global.Object === Object && global;
var er = typeof self == "object" && self && self.Object === Object && self;
var U = ln || er || Function("return this")();
var H = U.Symbol;
var un = Object.prototype;
var tr = un.hasOwnProperty;
var nr = un.toString;
var ve = H ? H.toStringTag : void 0;
function rr(e) {
  var t = tr.call(e, ve), n = e[ve];
  try {
    e[ve] = void 0;
    var r = true;
  } catch {
  }
  var i = nr.call(e);
  return r && (t ? e[ve] = n : delete e[ve]), i;
}
var ir = Object.prototype;
var ar = ir.toString;
function or(e) {
  return ar.call(e);
}
var sr = "[object Null]";
var lr = "[object Undefined]";
var jt = H ? H.toStringTag : void 0;
function re(e) {
  return e == null ? e === void 0 ? lr : sr : jt && jt in Object(e) ? rr(e) : or(e);
}
function ie(e) {
  return e != null && typeof e == "object";
}
var ur = "[object Symbol]";
function Ke(e) {
  return typeof e == "symbol" || ie(e) && re(e) == ur;
}
function cn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var ae = Array.isArray;
var cr = 1 / 0;
var At = H ? H.prototype : void 0;
var Ft = At ? At.toString : void 0;
function fn2(e) {
  if (typeof e == "string")
    return e;
  if (ae(e))
    return cn(e, fn2) + "";
  if (Ke(e))
    return Ft ? Ft.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -cr ? "-0" : t;
}
var fr = /\s/;
function dr(e) {
  for (var t = e.length; t-- && fr.test(e.charAt(t)); )
    ;
  return t;
}
var pr = /^\s+/;
function gr(e) {
  return e && e.slice(0, dr(e) + 1).replace(pr, "");
}
function Q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var kt = NaN;
var hr = /^[-+]0x[0-9a-f]+$/i;
var vr = /^0b[01]+$/i;
var yr = /^0o[0-7]+$/i;
var mr = parseInt;
function xt(e) {
  if (typeof e == "number")
    return e;
  if (Ke(e))
    return kt;
  if (Q(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Q(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = gr(e);
  var n = vr.test(e);
  return n || yr.test(e) ? mr(e.slice(2), n ? 2 : 8) : hr.test(e) ? kt : +e;
}
function br(e) {
  return e;
}
var _r = "[object AsyncFunction]";
var wr = "[object Function]";
var $r = "[object GeneratorFunction]";
var Or = "[object Proxy]";
function ze(e) {
  if (!Q(e))
    return false;
  var t = re(e);
  return t == wr || t == $r || t == _r || t == Or;
}
var We = U["__core-js_shared__"];
var Et = function() {
  var e = /[^.]+$/.exec(We && We.keys && We.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Tr(e) {
  return !!Et && Et in e;
}
var jr = Function.prototype;
var Ar = jr.toString;
function oe(e) {
  if (e != null) {
    try {
      return Ar.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fr = /[\\^$.*+?()[\]{}|]/g;
var kr = /^\[object .+?Constructor\]$/;
var xr = Function.prototype;
var Er = Object.prototype;
var Sr = xr.toString;
var Pr = Er.hasOwnProperty;
var Ir = RegExp(
  "^" + Sr.call(Pr).replace(Fr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cr(e) {
  if (!Q(e) || Tr(e))
    return false;
  var t = ze(e) ? Ir : kr;
  return t.test(oe(e));
}
function Vr(e, t) {
  return e == null ? void 0 : e[t];
}
function se(e, t) {
  var n = Vr(e, t);
  return Cr(n) ? n : void 0;
}
var Qe = se(U, "WeakMap");
var St = Object.create;
var Br = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Q(t))
      return {};
    if (St)
      return St(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function qr(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Nr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Mr = 800;
var Dr = 16;
var Rr = Date.now;
function Lr(e) {
  var t = 0, n = 0;
  return function() {
    var r = Rr(), i = Dr - (r - n);
    if (n = r, i > 0) {
      if (++t >= Mr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function zr(e) {
  return function() {
    return e;
  };
}
var Ue = function() {
  try {
    var e = se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
var Ur = Ue ? function(e, t) {
  return Ue(e, "toString", {
    configurable: true,
    enumerable: false,
    value: zr(t),
    writable: true
  });
} : br;
var Kr = Lr(Ur);
function Gr(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; )
    ;
  return e;
}
var Hr = 9007199254740991;
var Wr = /^(?:0|[1-9]\d*)$/;
function Zr(e, t) {
  var n = typeof e;
  return t = t ?? Hr, !!t && (n == "number" || n != "symbol" && Wr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function dn(e, t, n) {
  t == "__proto__" && Ue ? Ue(e, t, {
    configurable: true,
    enumerable: true,
    value: n,
    writable: true
  }) : e[t] = n;
}
function pn(e, t) {
  return e === t || e !== e && t !== t;
}
var Yr = Object.prototype;
var Xr = Yr.hasOwnProperty;
function gn(e, t, n) {
  var r = e[t];
  (!(Xr.call(e, t) && pn(r, n)) || n === void 0 && !(t in e)) && dn(e, t, n);
}
function ke(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var o = t[s], l = void 0;
    l === void 0 && (l = e[o]), i ? dn(n, o, l) : gn(n, o, l);
  }
  return n;
}
var Pt = Math.max;
function Jr(e, t, n) {
  return t = Pt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, s = Pt(r.length - t, 0), a = Array(s); ++i < s; )
      a[i] = r[t + i];
    i = -1;
    for (var o = Array(t + 1); ++i < t; )
      o[i] = r[i];
    return o[t] = n(a), qr(e, this, o);
  };
}
var Qr = 9007199254740991;
function hn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qr;
}
function vn(e) {
  return e != null && hn(e.length) && !ze(e);
}
var ei = Object.prototype;
function gt(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ei;
  return e === n;
}
function ti(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ni = "[object Arguments]";
function It(e) {
  return ie(e) && re(e) == ni;
}
var yn = Object.prototype;
var ri = yn.hasOwnProperty;
var ii = yn.propertyIsEnumerable;
var mn = It(/* @__PURE__ */ function() {
  return arguments;
}()) ? It : function(e) {
  return ie(e) && ri.call(e, "callee") && !ii.call(e, "callee");
};
function ai() {
  return false;
}
var bn = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ct = bn && typeof module == "object" && module && !module.nodeType && module;
var oi = Ct && Ct.exports === bn;
var Vt = oi ? U.Buffer : void 0;
var si = Vt ? Vt.isBuffer : void 0;
var _n = si || ai;
var li = "[object Arguments]";
var ui = "[object Array]";
var ci = "[object Boolean]";
var fi = "[object Date]";
var di = "[object Error]";
var pi = "[object Function]";
var gi = "[object Map]";
var hi = "[object Number]";
var vi = "[object Object]";
var yi = "[object RegExp]";
var mi = "[object Set]";
var bi = "[object String]";
var _i = "[object WeakMap]";
var wi = "[object ArrayBuffer]";
var $i = "[object DataView]";
var Oi = "[object Float32Array]";
var Ti = "[object Float64Array]";
var ji = "[object Int8Array]";
var Ai = "[object Int16Array]";
var Fi = "[object Int32Array]";
var ki = "[object Uint8Array]";
var xi = "[object Uint8ClampedArray]";
var Ei = "[object Uint16Array]";
var Si = "[object Uint32Array]";
var x = {};
x[Oi] = x[Ti] = x[ji] = x[Ai] = x[Fi] = x[ki] = x[xi] = x[Ei] = x[Si] = true;
x[li] = x[ui] = x[wi] = x[ci] = x[$i] = x[fi] = x[di] = x[pi] = x[gi] = x[hi] = x[vi] = x[yi] = x[mi] = x[bi] = x[_i] = false;
function Pi(e) {
  return ie(e) && hn(e.length) && !!x[re(e)];
}
function ht(e) {
  return function(t) {
    return e(t);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports;
var be = wn && typeof module == "object" && module && !module.nodeType && module;
var Ii = be && be.exports === wn;
var Ze = Ii && ln.process;
var pe = function() {
  try {
    var e = be && be.require && be.require("util").types;
    return e || Ze && Ze.binding && Ze.binding("util");
  } catch {
  }
}();
var Bt = pe && pe.isTypedArray;
var Ci = Bt ? ht(Bt) : Pi;
var Vi = Object.prototype;
var Bi = Vi.hasOwnProperty;
function $n(e, t) {
  var n = ae(e), r = !n && mn(e), i = !n && !r && _n(e), s = !n && !r && !i && Ci(e), a = n || r || i || s, o = a ? ti(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || Bi.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Zr(c, l))) && o.push(c);
  return o;
}
function On(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var qi = On(Object.keys, Object);
var Ni = Object.prototype;
var Mi = Ni.hasOwnProperty;
function Di(e) {
  if (!gt(e))
    return qi(e);
  var t = [];
  for (var n in Object(e))
    Mi.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function vt(e) {
  return vn(e) ? $n(e) : Di(e);
}
function Ri(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Li = Object.prototype;
var zi = Li.hasOwnProperty;
function Ui(e) {
  if (!Q(e))
    return Ri(e);
  var t = gt(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !zi.call(e, r)) || n.push(r);
  return n;
}
function yt(e) {
  return vn(e) ? $n(e, true) : Ui(e);
}
var Ki = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Gi = /^\w*$/;
function Hi(e, t) {
  if (ae(e))
    return false;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ke(e) ? true : Gi.test(e) || !Ki.test(e) || t != null && e in Object(t);
}
var Te = se(Object, "create");
function Wi() {
  this.__data__ = Te ? Te(null) : {}, this.size = 0;
}
function Zi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Yi = "__lodash_hash_undefined__";
var Xi = Object.prototype;
var Ji = Xi.hasOwnProperty;
function Qi(e) {
  var t = this.__data__;
  if (Te) {
    var n = t[e];
    return n === Yi ? void 0 : n;
  }
  return Ji.call(t, e) ? t[e] : void 0;
}
var ea = Object.prototype;
var ta = ea.hasOwnProperty;
function na(e) {
  var t = this.__data__;
  return Te ? t[e] !== void 0 : ta.call(t, e);
}
var ra = "__lodash_hash_undefined__";
function ia(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Te && t === void 0 ? ra : t, this;
}
function ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ne.prototype.clear = Wi;
ne.prototype.delete = Zi;
ne.prototype.get = Qi;
ne.prototype.has = na;
ne.prototype.set = ia;
function aa() {
  this.__data__ = [], this.size = 0;
}
function Ge(e, t) {
  for (var n = e.length; n--; )
    if (pn(e[n][0], t))
      return n;
  return -1;
}
var oa = Array.prototype;
var sa = oa.splice;
function la(e) {
  var t = this.__data__, n = Ge(t, e);
  if (n < 0)
    return false;
  var r = t.length - 1;
  return n == r ? t.pop() : sa.call(t, n, 1), --this.size, true;
}
function ua(e) {
  var t = this.__data__, n = Ge(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ca(e) {
  return Ge(this.__data__, e) > -1;
}
function fa(e, t) {
  var n = this.__data__, r = Ge(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
X.prototype.clear = aa;
X.prototype.delete = la;
X.prototype.get = ua;
X.prototype.has = ca;
X.prototype.set = fa;
var je = se(U, "Map");
function da() {
  this.size = 0, this.__data__ = {
    hash: new ne(),
    map: new (je || X)(),
    string: new ne()
  };
}
function pa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function He(e, t) {
  var n = e.__data__;
  return pa(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ga(e) {
  var t = He(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ha(e) {
  return He(this, e).get(e);
}
function va(e) {
  return He(this, e).has(e);
}
function ya(e, t) {
  var n = He(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ee(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ee.prototype.clear = da;
ee.prototype.delete = ga;
ee.prototype.get = ha;
ee.prototype.has = va;
ee.prototype.set = ya;
var ma = "Expected a function";
function mt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ma);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (mt.Cache || ee)(), n;
}
mt.Cache = ee;
var ba = 500;
function _a(e) {
  var t = mt(e, function(r) {
    return n.size === ba && n.clear(), r;
  }), n = t.cache;
  return t;
}
var wa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var $a = /\\(\\)?/g;
var Oa = _a(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(wa, function(n, r, i, s) {
    t.push(i ? s.replace($a, "$1") : r || n);
  }), t;
});
function Ta(e) {
  return e == null ? "" : fn2(e);
}
function bt(e, t) {
  return ae(e) ? e : Hi(e, t) ? [e] : Oa(Ta(e));
}
var ja = 1 / 0;
function Tn(e) {
  if (typeof e == "string" || Ke(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ja ? "-0" : t;
}
function Aa(e, t) {
  t = bt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Tn(t[n++])];
  return n && n == r ? e : void 0;
}
function _t(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var qt = H ? H.isConcatSpreadable : void 0;
function Fa(e) {
  return ae(e) || mn(e) || !!(qt && e && e[qt]);
}
function ka(e, t, n, r, i) {
  var s = -1, a = e.length;
  for (n || (n = Fa), i || (i = []); ++s < a; ) {
    var o = e[s];
    n(o) ? _t(i, o) : i[i.length] = o;
  }
  return i;
}
function xa(e) {
  var t = e == null ? 0 : e.length;
  return t ? ka(e) : [];
}
function Ea(e) {
  return Kr(Jr(e, void 0, xa), e + "");
}
var wt = On(Object.getPrototypeOf, Object);
var Sa = "[object Object]";
var Pa = Function.prototype;
var Ia = Object.prototype;
var jn = Pa.toString;
var Ca = Ia.hasOwnProperty;
var Va = jn.call(Object);
function Ba(e) {
  if (!ie(e) || re(e) != Sa)
    return false;
  var t = wt(e);
  if (t === null)
    return true;
  var n = Ca.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && jn.call(n) == Va;
}
function qa(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = e[r + t];
  return s;
}
function Na() {
  this.__data__ = new X(), this.size = 0;
}
function Ma(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Da(e) {
  return this.__data__.get(e);
}
function Ra(e) {
  return this.__data__.has(e);
}
var La = 200;
function za(e, t) {
  var n = this.__data__;
  if (n instanceof X) {
    var r = n.__data__;
    if (!je || r.length < La - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ee(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ge(e) {
  var t = this.__data__ = new X(e);
  this.size = t.size;
}
ge.prototype.clear = Na;
ge.prototype.delete = Ma;
ge.prototype.get = Da;
ge.prototype.has = Ra;
ge.prototype.set = za;
function Ua(e, t) {
  return e && ke(t, vt(t), e);
}
function Ka(e, t) {
  return e && ke(t, yt(t), e);
}
var An = typeof exports == "object" && exports && !exports.nodeType && exports;
var Nt = An && typeof module == "object" && module && !module.nodeType && module;
var Ga = Nt && Nt.exports === An;
var Mt = Ga ? U.Buffer : void 0;
var Dt = Mt ? Mt.allocUnsafe : void 0;
function Ha(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Dt ? Dt(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Wa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (s[i++] = a);
  }
  return s;
}
function Fn() {
  return [];
}
var Za = Object.prototype;
var Ya = Za.propertyIsEnumerable;
var Rt = Object.getOwnPropertySymbols;
var $t = Rt ? function(e) {
  return e == null ? [] : (e = Object(e), Wa(Rt(e), function(t) {
    return Ya.call(e, t);
  }));
} : Fn;
function Xa(e, t) {
  return ke(e, $t(e), t);
}
var Ja = Object.getOwnPropertySymbols;
var kn = Ja ? function(e) {
  for (var t = []; e; )
    _t(t, $t(e)), e = wt(e);
  return t;
} : Fn;
function Qa(e, t) {
  return ke(e, kn(e), t);
}
function xn(e, t, n) {
  var r = t(e);
  return ae(e) ? r : _t(r, n(e));
}
function eo(e) {
  return xn(e, vt, $t);
}
function En(e) {
  return xn(e, yt, kn);
}
var et = se(U, "DataView");
var tt = se(U, "Promise");
var nt = se(U, "Set");
var Lt = "[object Map]";
var to = "[object Object]";
var zt = "[object Promise]";
var Ut = "[object Set]";
var Kt = "[object WeakMap]";
var Gt = "[object DataView]";
var no = oe(et);
var ro = oe(je);
var io = oe(tt);
var ao = oe(nt);
var oo = oe(Qe);
var W = re;
(et && W(new et(new ArrayBuffer(1))) != Gt || je && W(new je()) != Lt || tt && W(tt.resolve()) != zt || nt && W(new nt()) != Ut || Qe && W(new Qe()) != Kt) && (W = function(e) {
  var t = re(e), n = t == to ? e.constructor : void 0, r = n ? oe(n) : "";
  if (r)
    switch (r) {
      case no:
        return Gt;
      case ro:
        return Lt;
      case io:
        return zt;
      case ao:
        return Ut;
      case oo:
        return Kt;
    }
  return t;
});
var so = Object.prototype;
var lo = so.hasOwnProperty;
function uo(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && lo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Ht = U.Uint8Array;
function Ot(e) {
  var t = new e.constructor(e.byteLength);
  return new Ht(t).set(new Ht(e)), t;
}
function co(e, t) {
  var n = t ? Ot(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var fo = /\w*$/;
function po(e) {
  var t = new e.constructor(e.source, fo.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Wt = H ? H.prototype : void 0;
var Zt = Wt ? Wt.valueOf : void 0;
function go(e) {
  return Zt ? Object(Zt.call(e)) : {};
}
function ho(e, t) {
  var n = t ? Ot(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var vo = "[object Boolean]";
var yo = "[object Date]";
var mo = "[object Map]";
var bo = "[object Number]";
var _o = "[object RegExp]";
var wo = "[object Set]";
var $o = "[object String]";
var Oo = "[object Symbol]";
var To = "[object ArrayBuffer]";
var jo = "[object DataView]";
var Ao = "[object Float32Array]";
var Fo = "[object Float64Array]";
var ko = "[object Int8Array]";
var xo = "[object Int16Array]";
var Eo = "[object Int32Array]";
var So = "[object Uint8Array]";
var Po = "[object Uint8ClampedArray]";
var Io = "[object Uint16Array]";
var Co = "[object Uint32Array]";
function Vo(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case To:
      return Ot(e);
    case vo:
    case yo:
      return new r(+e);
    case jo:
      return co(e, n);
    case Ao:
    case Fo:
    case ko:
    case xo:
    case Eo:
    case So:
    case Po:
    case Io:
    case Co:
      return ho(e, n);
    case mo:
      return new r();
    case bo:
    case $o:
      return new r(e);
    case _o:
      return po(e);
    case wo:
      return new r();
    case Oo:
      return go(e);
  }
}
function Bo(e) {
  return typeof e.constructor == "function" && !gt(e) ? Br(wt(e)) : {};
}
var qo = "[object Map]";
function No(e) {
  return ie(e) && W(e) == qo;
}
var Yt = pe && pe.isMap;
var Mo = Yt ? ht(Yt) : No;
var Do = "[object Set]";
function Ro(e) {
  return ie(e) && W(e) == Do;
}
var Xt = pe && pe.isSet;
var Lo = Xt ? ht(Xt) : Ro;
var zo = 1;
var Uo = 2;
var Ko = 4;
var Sn = "[object Arguments]";
var Go = "[object Array]";
var Ho = "[object Boolean]";
var Wo = "[object Date]";
var Zo = "[object Error]";
var Pn = "[object Function]";
var Yo = "[object GeneratorFunction]";
var Xo = "[object Map]";
var Jo = "[object Number]";
var In = "[object Object]";
var Qo = "[object RegExp]";
var es = "[object Set]";
var ts = "[object String]";
var ns = "[object Symbol]";
var rs = "[object WeakMap]";
var is = "[object ArrayBuffer]";
var as = "[object DataView]";
var os = "[object Float32Array]";
var ss = "[object Float64Array]";
var ls = "[object Int8Array]";
var us = "[object Int16Array]";
var cs = "[object Int32Array]";
var fs = "[object Uint8Array]";
var ds = "[object Uint8ClampedArray]";
var ps = "[object Uint16Array]";
var gs = "[object Uint32Array]";
var F = {};
F[Sn] = F[Go] = F[is] = F[as] = F[Ho] = F[Wo] = F[os] = F[ss] = F[ls] = F[us] = F[cs] = F[Xo] = F[Jo] = F[In] = F[Qo] = F[es] = F[ts] = F[ns] = F[fs] = F[ds] = F[ps] = F[gs] = true;
F[Zo] = F[Pn] = F[rs] = false;
function Se(e, t, n, r, i, s) {
  var a, o = t & zo, l = t & Uo, c = t & Ko;
  if (n && (a = i ? n(e, r, i, s) : n(e)), a !== void 0)
    return a;
  if (!Q(e))
    return e;
  var d = ae(e);
  if (d) {
    if (a = uo(e), !o)
      return Nr(e, a);
  } else {
    var p = W(e), b = p == Pn || p == Yo;
    if (_n(e))
      return Ha(e, o);
    if (p == In || p == Sn || b && !i) {
      if (a = l || b ? {} : Bo(e), !o)
        return l ? Qa(e, Ka(a, e)) : Xa(e, Ua(a, e));
    } else {
      if (!F[p])
        return i ? e : {};
      a = Vo(e, p, o);
    }
  }
  s || (s = new ge());
  var T = s.get(e);
  if (T)
    return T;
  s.set(e, a), Lo(e) ? e.forEach(function(h2) {
    a.add(Se(h2, t, n, h2, e, s));
  }) : Mo(e) && e.forEach(function(h2, u) {
    a.set(u, Se(h2, t, n, u, e, s));
  });
  var y = c ? l ? En : eo : l ? yt : vt, g = d ? void 0 : y(e);
  return Gr(g || e, function(h2, u) {
    g && (u = h2, h2 = e[u]), gn(a, u, Se(h2, t, n, u, e, s));
  }), a;
}
var Ye = function() {
  return U.Date.now();
};
var hs = "Expected a function";
var vs = Math.max;
var ys = Math.min;
function rt(e, t, n) {
  var r, i, s, a, o, l, c = 0, d = false, p = false, b = true;
  if (typeof e != "function")
    throw new TypeError(hs);
  t = xt(t) || 0, Q(n) && (d = !!n.leading, p = "maxWait" in n, s = p ? vs(xt(n.maxWait) || 0, t) : s, b = "trailing" in n ? !!n.trailing : b);
  function T(f) {
    var $ = r, v = i;
    return r = i = void 0, c = f, a = e.apply(v, $), a;
  }
  function y(f) {
    return c = f, o = setTimeout(u, t), d ? T(f) : a;
  }
  function g(f) {
    var $ = f - l, v = f - c, E = t - $;
    return p ? ys(E, s - v) : E;
  }
  function h2(f) {
    var $ = f - l, v = f - c;
    return l === void 0 || $ >= t || $ < 0 || p && v >= s;
  }
  function u() {
    var f = Ye();
    if (h2(f))
      return k(f);
    o = setTimeout(u, g(f));
  }
  function k(f) {
    return o = void 0, b && r ? T(f) : (r = i = void 0, a);
  }
  function m() {
    o !== void 0 && clearTimeout(o), c = 0, r = l = i = o = void 0;
  }
  function O() {
    return o === void 0 ? a : k(Ye());
  }
  function A() {
    var f = Ye(), $ = h2(f);
    if (r = arguments, i = this, l = f, $) {
      if (o === void 0)
        return y(l);
      if (p)
        return clearTimeout(o), o = setTimeout(u, t), T(l);
    }
    return o === void 0 && (o = setTimeout(u, t)), a;
  }
  return A.cancel = m, A.flush = O, A;
}
function ms(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function bs(e, t) {
  return t.length < 2 ? e : Aa(e, qa(t, 0, -1));
}
function Jt(e) {
  return e == null;
}
function _s(e, t) {
  return t = bt(t, e), e = bs(e, t), e == null || delete e[Tn(ms(t))];
}
function ws(e) {
  return Ba(e) ? void 0 : e;
}
var $s = 1;
var Os = 2;
var Ts = 4;
var js = Ea(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = false;
  t = cn(t, function(s) {
    return s = bt(s, e), r || (r = s.length > 1), s;
  }), ke(e, En(e), n), r && (n = Se(n, $s | Os | Ts, ws));
  for (var i = t.length; i--; )
    _s(n, t[i]);
  return n;
});
var N = defineComponent({
  name: "VKIcon",
  inheritAttrs: false,
  __name: "Icon",
  props: {
    color: {},
    type: {},
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    maskId: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    titleId: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = js(t, ["type", "color"]), r = computed(() => t.color ? { color: t.color } : {});
    return (i, s) => (openBlock(), createElementBlock("i", mergeProps({
      class: ["vk-icon", { [`vk-icon--${i.type}`]: i.type }],
      style: r.value
    }, i.$attrs), [
      createVNode(unref(FontAwesomeIcon), normalizeProps(guardReactiveProps(unref(n))), null, 16)
    ], 16));
  }
});
var As = ["disabled", "type", "autofocus"];
var Pe = defineComponent({
  name: "vkButton",
  __name: "Button",
  props: {
    type: {},
    size: {},
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    nativeType: { default: "button" },
    autofocus: { type: Boolean },
    loading: { type: Boolean },
    icon: {}
  },
  setup(e, { expose: t }) {
    const n = ref();
    return t({
      ref: n
    }), (r, i) => (openBlock(), createElementBlock("button", {
      ref_key: "_ref",
      ref: n,
      class: normalizeClass(["vk-button", {
        [`vk-button--${r.type}`]: r.type,
        [`vk-button--${r.size}`]: r.size,
        "is-plain": r.plain,
        "is-round": r.round,
        "is-circle": r.circle,
        "is-disabled": r.disabled,
        "is-loading": r.loading
        // 'is-plain': plain: 这行代码会检查 plain 的值。如果 plain 为 true，则会将 CSS 类 is-plain 应用到 <button> 元素上；如果 plain 为 false，则不会添加该类。
      }]),
      disabled: r.disabled || r.loading,
      type: r.nativeType,
      autofocus: r.autofocus
    }, [
      r.loading ? (openBlock(), createBlock(N, {
        key: 0,
        icon: "spinner",
        spin: ""
      })) : createCommentVNode("", true),
      r.icon ? (openBlock(), createBlock(N, {
        key: 1,
        icon: r.icon
      }, null, 8, ["icon"])) : createCommentVNode("", true),
      createBaseVNode("span", null, [
        renderSlot(r.$slots, "default")
      ])
    ], 10, As));
  }
});
var Dl = {
  type: {
    type: String
  },
  size: {
    type: String
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  }
};
Pe.install = (e) => {
  e.component(Pe.name, Pe);
};
var Cn = Symbol("collpaseContextKey");
var Fs = { class: "vk-collapse" };
var Ie = defineComponent({
  name: "VKCollapse",
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = ref(n.modelValue);
    return watch(() => n.modelValue, () => {
      i.value = n.modelValue;
    }), n.accordion && i.value.length > 1 && (console.warn("accordion 模式下只能展开一个"), i.value = [i.value[0]]), provide(Cn, {
      activeNames: i,
      handleItemClick: (a) => {
        let o = [...i.value];
        if (n.accordion)
          o = [i.value[0] === a ? "" : a], i.value = o;
        else {
          const l = o.indexOf(a);
          l === -1 ? o.push(a) : o.splice(l, 1), i.value = o;
        }
        r("update:modelValue", o), r("change", o);
      }
    }), (a, o) => (openBlock(), createElementBlock("div", Fs, [
      renderSlot(a.$slots, "default")
    ]));
  }
});
var ks = ["id"];
var xs = { class: "vk-collapse-item_wrapper" };
var Es = ["id"];
var Ce = defineComponent({
  name: "VKCollapseItem",
  __name: "CollapseItem",
  props: {
    name: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = {
      beforeEnter: (a) => {
        a.style.height = "0px", a.style.overflow = "hidden";
      },
      enter: (a) => {
        a.style.height = `${a.scrollHeight}px`;
      },
      afterEnter: (a) => {
        a.style.height = "", a.style.overflow = "";
      },
      beforeLeave: (a) => {
        a.style.height = `${a.scrollHeight}px`, a.style.overflow = "hidden";
      },
      leave: (a) => {
        a.style.height = "0px";
      },
      afterLeave: (a) => {
        a.style.height = "", a.style.overflow = "";
      }
    }, n = e, r = inject(Cn), i = computed(() => r == null ? void 0 : r.activeNames.value.includes(n.name)), s = () => {
      if (n.disabled) return false;
      r == null || r.handleItemClick(n.name);
    };
    return (a, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-collapse-item", {
        "is-disabled": a.disabled
      }])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["vk-collapse-item__header", {
          "is-active": i.value,
          "is-disabled": a.disabled
        }]),
        id: `item-header-${a.name}`,
        onClick: s
      }, [
        renderSlot(a.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(a.title), 1)
        ]),
        createVNode(N, {
          icon: "angle-right",
          class: "header-angle",
          type: "primary"
        })
      ], 10, ks),
      createVNode(Transition, mergeProps({ name: "slide" }, toHandlers(t)), {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", xs, [
            createBaseVNode("div", {
              class: "vk-collapse-item__content",
              id: `item-content-${a.name}`
            }, [
              renderSlot(a.$slots, "default")
            ], 8, Es)
          ], 512), [
            [vShow, i.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
});
Ie.install = (e) => {
  e.component(Ie.name, Ie);
};
Ce.install = (e) => {
  e.component(Ce.name, Ce);
};
var Vn = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(e) {
    return () => e.vNode;
  }
});
var Qt = ref(0);
var Ss = (e = 2e3) => {
  const t = ref(e), n = computed(() => Qt.value + t.value);
  return {
    currentZIndex: n,
    nextZIndex: () => (Qt.value++, n.value),
    initialZIndex: t
  };
};
var Ps = 1;
var ue = reactive([]);
var Rl = (e) => {
  const { nextZIndex: t } = Ss(), n = `message_${Ps++}`, r = document.createElement("div"), i = () => {
    const d = ue.findIndex((p) => p.id === n);
    d !== -1 && (ue.splice(d, 1), render(null, r));
  }, s = () => {
    const d = ue.find((p) => p.id === n);
    d && (d.vm.exposed.visible.value = false);
  }, a = {
    ...e,
    id: n,
    zIndex: t(),
    onDestory: i
  }, o = h(_e, a);
  render(o, r), document.body.appendChild(r.firstElementChild);
  const l = o.component, c = {
    id: n,
    vnode: o,
    vm: l,
    props: a,
    destroy: s
  };
  return ue.push(c), c;
};
var Is = (e) => {
  const t = ue.findIndex((n) => n.id === e);
  return t <= 0 ? 0 : ue[t - 1].vm.exposed.bottomOffset.value;
};
function Cs(e, t, n) {
  isRef(e) ? watch(e, (r, i) => {
    i == null || i.removeEventListener(t, n), r == null || r.addEventListener(t, n);
  }) : onMounted(() => {
    e.addEventListener(t, n);
  }), onBeforeUnmount(() => {
    var r;
    (r = unref(e)) == null || r.removeEventListener(t, n);
  });
}
var Vs = { class: "vk-message__content" };
var Bs = {
  key: 0,
  class: "vk-message__close"
};
var _e = defineComponent({
  name: "vk-message",
  __name: "Message",
  props: {
    message: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean },
    type: { default: "info" },
    onDestory: {},
    offset: { default: 20 },
    id: {},
    zIndex: {},
    transitionName: { default: "fade-up" }
  },
  setup(e, { expose: t }) {
    const n = e, r = ref(false), i = ref(), s = ref(0), a = computed(() => Is(n.id)), o = computed(() => n.offset + a.value), l = computed(() => o.value + s.value), c = computed(() => ({
      top: `${o.value}px`,
      zIndex: n.zIndex
    }));
    let d;
    function p() {
      n.duration !== 0 && (d = setTimeout(() => {
        r.value = false;
      }, n.duration));
    }
    function b() {
      clearTimeout(d);
    }
    onMounted(async () => {
      r.value = true, p();
    });
    function T(h2) {
      h2.key === "Escape" && (r.value = false);
    }
    Cs(document, "keydown", T);
    function y() {
      n.onDestory();
    }
    function g() {
      s.value = i.value.getBoundingClientRect().height;
    }
    return t({
      bottomOffset: l,
      visible: r
    }), (h2, u) => (openBlock(), createBlock(Transition, {
      name: h2.transitionName,
      onEnter: g,
      onAfterLeave: y
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["vk-message", {
            [`vk-message--${h2.type}`]: h2.type,
            "is-close": h2.showClose
          }]),
          role: "alert",
          ref_key: "messageRef",
          ref: i,
          style: normalizeStyle(c.value),
          onMouseenter: b,
          onMouseleave: p
        }, [
          createBaseVNode("div", Vs, [
            renderSlot(h2.$slots, "default", {}, () => [
              h2.message ? (openBlock(), createBlock(unref(Vn), {
                key: 0,
                vNode: h2.message
              }, null, 8, ["vNode"])) : createCommentVNode("", true)
            ])
          ]),
          h2.showClose ? (openBlock(), createElementBlock("div", Bs, [
            createVNode(N, {
              onClick: u[0] || (u[0] = withModifiers((k) => r.value = false, ["stop"])),
              icon: "xmark"
            })
          ])) : createCommentVNode("", true)
        ], 38), [
          [vShow, r.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
_e.install = (e) => {
  e.component(_e.name, _e);
};
var qs = (e, t) => {
  const n = (r) => {
    e.value && r.target && (e.value.contains(r.target) || t(r));
  };
  onMounted(() => {
    document.addEventListener("click", n);
  }), onUnmounted(() => {
    document.removeEventListener("click", n);
  });
};
var ce = defineComponent({
  name: "VkTooltip",
  __name: "Tooltip",
  props: {
    content: {},
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    manual: { type: Boolean },
    popperOptions: {},
    transition: { default: "fade" },
    openDelay: { default: 300 },
    closeDelay: { default: 300 }
  },
  emits: ["visible-change", "click-outside"],
  setup(e, { expose: t, emit: n }) {
    const r = e, i = n, s = ref(false), a = ref(), o = ref(), l = ref();
    let c = null, d = reactive({}), p = reactive({}), b = 0, T = 0;
    const y = computed(() => ({
      placement: r.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
            // 水平方向偏移 9px
          }
        }
      ],
      ...r.popperOptions
    })), g = () => {
      s.value ? A() : O();
    }, h2 = () => {
      b++, console.log("open times", b), s.value = true, i("visible-change", true);
    }, u = () => {
      T++, console.log("close times", T), s.value = false, i("visible-change", false);
    }, k = rt(h2, r.openDelay), m = rt(u, r.closeDelay), O = () => {
      m.cancel(), k();
    }, A = () => {
      k.cancel(), m();
    };
    qs(l, () => {
      r.trigger === "click" && s.value && !r.manual && A(), s.value && i("click-outside", true);
    });
    const f = () => {
      r.trigger === "hover" ? (p.mouseenter = O, p.mouseleave = A) : r.trigger === "click" && (d.click = g);
    };
    return r.manual || f(), watch(() => r.manual, ($) => {
      $ ? (d = {}, p = {}) : f();
    }), watch(() => r.trigger, ($, v) => {
      $ !== v && (d = {}, p = {}, f());
    }), watch(s, ($) => {
      $ && (o.value && a.value ? c = createPopper3(o.value, a.value, y.value) : c == null || c.destroy());
    }, { flush: "post" }), onUnmounted(() => {
      c == null || c.destroy();
    }), t({
      show: O,
      hide: A
    }), ($, v) => (openBlock(), createElementBlock("div", mergeProps({
      class: "vk-tooltip",
      ref_key: "popperContainerNode",
      ref: l
    }, toHandlers(unref(p), true)), [
      createBaseVNode("div", mergeProps({
        class: "vk-tooltip__trigger",
        ref_key: "triggerNode",
        ref: o
      }, toHandlers(unref(d), true)), [
        renderSlot($.$slots, "default")
      ], 16),
      createVNode(Transition, {
        name: r.transition
      }, {
        default: withCtx(() => [
          s.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "vk-tooltip__popper",
            ref_key: "popperNode",
            ref: a
          }, [
            renderSlot($.$slots, "content", {}, () => [
              createTextVNode(toDisplayString($.content), 1)
            ]),
            v[0] || (v[0] = createBaseVNode("div", {
              id: "arrow",
              "data-popper-arrow": ""
            }, null, -1))
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name"])
    ], 16));
  }
});
var Ns = { class: "vk-dropdown" };
var Ms = { class: "vk-dropdown__menu" };
var Ds = {
  key: 0,
  role: "separator",
  class: "divided-placeholder"
};
var Rs = ["onClick", "id"];
var Ve = defineComponent({
  name: "vk-dropdown",
  __name: "Dropdown",
  props: {
    MenuOptions: {},
    hideOnClick: { type: Boolean, default: true },
    content: {},
    trigger: {},
    placement: {},
    manual: { type: Boolean },
    popperOptions: {},
    transition: {},
    openDelay: {},
    closeDelay: {}
  },
  emits: ["select", "visible-change"],
  setup(e, { expose: t, emit: n }) {
    const r = e, i = n, s = ref(), a = (l) => {
      i("visible-change", l);
    }, o = (l) => {
      var c;
      l.disabled || (i("select", l), r.hideOnClick && ((c = s.value) == null || c.hide()));
    };
    return t({
      show: () => {
        var l;
        return (l = s.value) == null ? void 0 : l.show();
      },
      hide: () => {
        var l;
        return (l = s.value) == null ? void 0 : l.hide();
      }
    }), (l, c) => (openBlock(), createElementBlock("div", Ns, [
      createVNode(ce, {
        trigger: l.trigger,
        placement: l.placement,
        "popper-options": l.popperOptions,
        "open-delay": l.openDelay,
        "close-delay": l.closeDelay,
        manual: l.manual,
        onVisibleChange: a,
        ref_key: "tooltipRef",
        ref: s
      }, {
        content: withCtx(() => [
          createBaseVNode("ul", Ms, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(l.MenuOptions, (d) => (openBlock(), createElementBlock(Fragment, {
              key: d.key
            }, [
              d.divided ? (openBlock(), createElementBlock("li", Ds)) : createCommentVNode("", true),
              createBaseVNode("li", {
                class: normalizeClass(["vk-dropdown__item", { "is-disabled": d.disabled, "is-divided": d.divided }]),
                onClick: (p) => o(d),
                id: `dropdown-item-${d.key}`
              }, toDisplayString(d.label), 11, Rs)
            ], 64))), 128))
          ])
        ]),
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["trigger", "placement", "popper-options", "open-delay", "close-delay", "manual"])
    ]));
  }
});
Ve.install = (e) => {
  e.component(Ve.name, Ve);
};
var Bn = Symbol("formContextKey");
var qn = Symbol("formItemContextKey");
var Ls = { class: "vk-form" };
var Be = defineComponent({
  name: "VkForm",
  __name: "Form",
  props: {
    model: {},
    rules: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = [], i = (c) => {
      r.includes(c) || r.push(c);
    }, s = (c) => {
      const d = r.indexOf(c);
      d > -1 && r.splice(d, 1);
    }, a = (c = []) => {
      (c.length > 0 ? r.filter((p) => c.includes(p.prop)) : r).forEach((p) => {
        p.resetField();
      });
    }, o = (c = []) => {
      (c.length > 0 ? r.filter((p) => c.includes(p.prop)) : r).forEach((p) => {
        p.clearValidate();
      });
    }, l = async () => {
      let c = {};
      for (const d of r)
        try {
          await d.validate("");
        } catch (p) {
          c = {
            // ...validationErrors 和 ...error 是对象的浅拷贝操作，确保错误信息不会被覆盖。
            ...c,
            ...p.fields
          };
        }
      return Object.keys(c).length === 0 ? true : Promise.reject(c);
    };
    return provide(Bn, {
      ...n,
      addField: i,
      removeField: s
    }), t({
      validate: l,
      resetFields: a,
      clearValidate: o
    }), (c, d) => (openBlock(), createElementBlock("form", Ls, [
      renderSlot(c.$slots, "default")
    ]));
  }
});
function te() {
  return te = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, te.apply(this, arguments);
}
function zs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ae(e, t);
}
function it(e) {
  return it = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, it(e);
}
function Ae(e, t) {
  return Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Ae(e, t);
}
function Us() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function qe(e, t, n) {
  return Us() ? qe = Reflect.construct.bind() : qe = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), c = new l();
    return a && Ae(c, a.prototype), c;
  }, qe.apply(null, arguments);
}
function Ks(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function at(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return at = function(r) {
    if (r === null || !Ks(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, i);
    }
    function i() {
      return qe(r, arguments, it(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), Ae(i, r);
  }, at(e);
}
var Gs = /%[sdj%]/g;
var Nn = function() {
};
typeof process < "u" && process.env && true && typeof window < "u" && typeof document < "u" && (Nn = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function ot(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function M(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = 0, s = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(Gs, function(o) {
      if (o === "%%")
        return "%";
      if (i >= s)
        return o;
      switch (o) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return o;
      }
    });
    return a;
  }
  return e;
}
function Hs(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function P(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Hs(t) && typeof e == "string" && !e);
}
function Ws(e, t, n) {
  var r = [], i = 0, s = e.length;
  function a(o) {
    r.push.apply(r, o || []), i++, i === s && n(r);
  }
  e.forEach(function(o) {
    t(o, a);
  });
}
function en(e, t, n) {
  var r = 0, i = e.length;
  function s(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var o = r;
    r = r + 1, o < i ? t(e[o], s) : n([]);
  }
  s([]);
}
function Zs(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var tn = function(e) {
  zs(t, e);
  function t(n, r) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return t;
}(at(Error));
function Ys(e, t, n, r, i) {
  if (t.first) {
    var s = new Promise(function(b, T) {
      var y = function(u) {
        return r(u), u.length ? T(new tn(u, ot(u))) : b(i);
      }, g = Zs(e);
      en(g, n, y);
    });
    return s.catch(function(b) {
      return b;
    }), s;
  }
  var a = t.firstFields === true ? Object.keys(e) : t.firstFields || [], o = Object.keys(e), l = o.length, c = 0, d = [], p = new Promise(function(b, T) {
    var y = function(h2) {
      if (d.push.apply(d, h2), c++, c === l)
        return r(d), d.length ? T(new tn(d, ot(d))) : b(i);
    };
    o.length || (r(d), b(i)), o.forEach(function(g) {
      var h2 = e[g];
      a.indexOf(g) !== -1 ? en(h2, n, y) : Ws(h2, n, y);
    });
  });
  return p.catch(function(b) {
    return b;
  }), p;
}
function Xs(e) {
  return !!(e && e.message !== void 0);
}
function Js(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function nn(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Js(t, e.fullFields) : r = t[n.field || e.fullField], Xs(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function rn(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = te({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Mn = function(t, n, r, i, s, a) {
  t.required && (!r.hasOwnProperty(t.field) || P(n, a || t.type)) && i.push(M(s.messages.required, t.fullField));
};
var Qs = function(t, n, r, i, s) {
  (/^\s+$/.test(n) || n === "") && i.push(M(s.messages.whitespace, t.fullField));
};
var Ee;
var el = function() {
  if (Ee)
    return Ee;
  var e = "[a-fA-F\\d:]", t = function(O) {
    return O && O.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), s = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), o = new RegExp("^" + i + "$"), l = function(O) {
    return O && O.exact ? s : new RegExp("(?:" + t(O) + n + t(O) + ")|(?:" + t(O) + i + t(O) + ")", "g");
  };
  l.v4 = function(m) {
    return m && m.exact ? a : new RegExp("" + t(m) + n + t(m), "g");
  }, l.v6 = function(m) {
    return m && m.exact ? o : new RegExp("" + t(m) + i + t(m), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", p = l.v4().source, b = l.v6().source, T = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", y = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h2 = "(?::\\d{2,5})?", u = '(?:[/?#][^\\s"]*)?', k = "(?:" + c + "|www\\.)" + d + "(?:localhost|" + p + "|" + b + "|" + T + y + g + ")" + h2 + u;
  return Ee = new RegExp("(?:^" + k + "$)", "i"), Ee;
};
var an = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var ye = {
  integer: function(t) {
    return ye.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ye.number(t) && !ye.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return true;
    try {
      return !!new RegExp(t);
    } catch {
      return false;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? false : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !ye.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(an.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(el());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(an.hex);
  }
};
var tl = function(t, n, r, i, s) {
  if (t.required && n === void 0) {
    Mn(t, n, r, i, s);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = t.type;
  a.indexOf(o) > -1 ? ye[o](n) || i.push(M(s.messages.types[o], t.fullField, t.type)) : o && typeof n !== t.type && i.push(M(s.messages.types[o], t.fullField, t.type));
};
var nl = function(t, n, r, i, s) {
  var a = typeof t.len == "number", o = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, p = null, b = typeof n == "number", T = typeof n == "string", y = Array.isArray(n);
  if (b ? p = "number" : T ? p = "string" : y && (p = "array"), !p)
    return false;
  y && (d = n.length), T && (d = n.replace(c, "_").length), a ? d !== t.len && i.push(M(s.messages[p].len, t.fullField, t.len)) : o && !l && d < t.min ? i.push(M(s.messages[p].min, t.fullField, t.min)) : l && !o && d > t.max ? i.push(M(s.messages[p].max, t.fullField, t.max)) : o && l && (d < t.min || d > t.max) && i.push(M(s.messages[p].range, t.fullField, t.min, t.max));
};
var le = "enum";
var rl = function(t, n, r, i, s) {
  t[le] = Array.isArray(t[le]) ? t[le] : [], t[le].indexOf(n) === -1 && i.push(M(s.messages[le], t.fullField, t[le].join(", ")));
};
var il = function(t, n, r, i, s) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(M(s.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || i.push(M(s.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
};
var w = {
  required: Mn,
  whitespace: Qs,
  type: tl,
  range: nl,
  enum: rl,
  pattern: il
};
var al = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n, "string") && !t.required)
      return r();
    w.required(t, n, i, a, s, "string"), P(n, "string") || (w.type(t, n, i, a, s), w.range(t, n, i, a, s), w.pattern(t, n, i, a, s), t.whitespace === true && w.whitespace(t, n, i, a, s));
  }
  r(a);
};
var ol = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && w.type(t, n, i, a, s);
  }
  r(a);
};
var sl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (n === "" && (n = void 0), P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && (w.type(t, n, i, a, s), w.range(t, n, i, a, s));
  }
  r(a);
};
var ll = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && w.type(t, n, i, a, s);
  }
  r(a);
};
var ul = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), P(n) || w.type(t, n, i, a, s);
  }
  r(a);
};
var cl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && (w.type(t, n, i, a, s), w.range(t, n, i, a, s));
  }
  r(a);
};
var fl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && (w.type(t, n, i, a, s), w.range(t, n, i, a, s));
  }
  r(a);
};
var dl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (n == null && !t.required)
      return r();
    w.required(t, n, i, a, s, "array"), n != null && (w.type(t, n, i, a, s), w.range(t, n, i, a, s));
  }
  r(a);
};
var pl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && w.type(t, n, i, a, s);
  }
  r(a);
};
var gl = "enum";
var hl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s), n !== void 0 && w[gl](t, n, i, a, s);
  }
  r(a);
};
var vl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n, "string") && !t.required)
      return r();
    w.required(t, n, i, a, s), P(n, "string") || w.pattern(t, n, i, a, s);
  }
  r(a);
};
var yl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n, "date") && !t.required)
      return r();
    if (w.required(t, n, i, a, s), !P(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), w.type(t, l, i, a, s), l && w.range(t, l.getTime(), i, a, s);
    }
  }
  r(a);
};
var ml = function(t, n, r, i, s) {
  var a = [], o = Array.isArray(n) ? "array" : typeof n;
  w.required(t, n, i, a, s, o), r(a);
};
var Xe = function(t, n, r, i, s) {
  var a = t.type, o = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (P(n, a) && !t.required)
      return r();
    w.required(t, n, i, o, s, a), P(n, a) || w.type(t, n, i, o, s);
  }
  r(o);
};
var bl = function(t, n, r, i, s) {
  var a = [], o = t.required || !t.required && i.hasOwnProperty(t.field);
  if (o) {
    if (P(n) && !t.required)
      return r();
    w.required(t, n, i, a, s);
  }
  r(a);
};
var we = {
  string: al,
  method: ol,
  number: sl,
  boolean: ll,
  regexp: ul,
  integer: cl,
  float: fl,
  array: dl,
  object: pl,
  enum: hl,
  pattern: vl,
  date: yl,
  url: Xe,
  hex: Xe,
  email: Xe,
  required: ml,
  any: bl
};
function st() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var lt = st();
var xe = function() {
  function e(n) {
    this.rules = null, this._messages = lt, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(s) {
      var a = r[s];
      i.rules[s] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = rn(st(), r)), this._messages;
  }, t.validate = function(r, i, s) {
    var a = this;
    i === void 0 && (i = {}), s === void 0 && (s = function() {
    });
    var o = r, l = i, c = s;
    if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, o), Promise.resolve(o);
    function d(g) {
      var h2 = [], u = {};
      function k(O) {
        if (Array.isArray(O)) {
          var A;
          h2 = (A = h2).concat.apply(A, O);
        } else
          h2.push(O);
      }
      for (var m = 0; m < g.length; m++)
        k(g[m]);
      h2.length ? (u = ot(h2), c(h2, u)) : c(null, o);
    }
    if (l.messages) {
      var p = this.messages();
      p === lt && (p = st()), rn(p, l.messages), l.messages = p;
    } else
      l.messages = this.messages();
    var b = {}, T = l.keys || Object.keys(this.rules);
    T.forEach(function(g) {
      var h2 = a.rules[g], u = o[g];
      h2.forEach(function(k) {
        var m = k;
        typeof m.transform == "function" && (o === r && (o = te({}, o)), u = o[g] = m.transform(u)), typeof m == "function" ? m = {
          validator: m
        } : m = te({}, m), m.validator = a.getValidationMethod(m), m.validator && (m.field = g, m.fullField = m.fullField || g, m.type = a.getType(m), b[g] = b[g] || [], b[g].push({
          rule: m,
          value: u,
          source: o,
          field: g
        }));
      });
    });
    var y = {};
    return Ys(b, l, function(g, h2) {
      var u = g.rule, k = (u.type === "object" || u.type === "array") && (typeof u.fields == "object" || typeof u.defaultField == "object");
      k = k && (u.required || !u.required && g.value), u.field = g.field;
      function m(f, $) {
        return te({}, $, {
          fullField: u.fullField + "." + f,
          fullFields: u.fullFields ? [].concat(u.fullFields, [f]) : [f]
        });
      }
      function O(f) {
        f === void 0 && (f = []);
        var $ = Array.isArray(f) ? f : [f];
        !l.suppressWarning && $.length && e.warning("async-validator:", $), $.length && u.message !== void 0 && ($ = [].concat(u.message));
        var v = $.map(nn(u, o));
        if (l.first && v.length)
          return y[u.field] = 1, h2(v);
        if (!k)
          h2(v);
        else {
          if (u.required && !g.value)
            return u.message !== void 0 ? v = [].concat(u.message).map(nn(u, o)) : l.error && (v = [l.error(u, M(l.messages.required, u.field))]), h2(v);
          var E = {};
          u.defaultField && Object.keys(g.value).map(function(R) {
            E[R] = u.defaultField;
          }), E = te({}, E, g.rule.fields);
          var V = {};
          Object.keys(E).forEach(function(R) {
            var L = E[R], Dn = Array.isArray(L) ? L : [L];
            V[R] = Dn.map(m.bind(null, R));
          });
          var he = new e(V);
          he.messages(l.messages), g.rule.options && (g.rule.options.messages = l.messages, g.rule.options.error = l.error), he.validate(g.value, g.rule.options || l, function(R) {
            var L = [];
            v && v.length && L.push.apply(L, v), R && R.length && L.push.apply(L, R), h2(L.length ? L : null);
          });
        }
      }
      var A;
      if (u.asyncValidator)
        A = u.asyncValidator(u, g.value, O, g.source, l);
      else if (u.validator) {
        try {
          A = u.validator(u, g.value, O, g.source, l);
        } catch (f) {
          console.error == null || console.error(f), l.suppressValidatorError || setTimeout(function() {
            throw f;
          }, 0), O(f.message);
        }
        A === true ? O() : A === false ? O(typeof u.message == "function" ? u.message(u.fullField || u.field) : u.message || (u.fullField || u.field) + " fails") : A instanceof Array ? O(A) : A instanceof Error && O(A.message);
      }
      A && A.then && A.then(function() {
        return O();
      }, function(f) {
        return O(f);
      });
    }, function(g) {
      d(g);
    }, o);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !we.hasOwnProperty(r.type))
      throw new Error(M("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), s = i.indexOf("message");
    return s !== -1 && i.splice(s, 1), i.length === 1 && i[0] === "required" ? we.required : we[this.getType(r)] || void 0;
  }, e;
}();
xe.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  we[t] = n;
};
xe.warning = Nn;
xe.messages = lt;
xe.validators = we;
var _l = { class: "vk-form-item__label" };
var wl = { class: "vk-form-item__content" };
var $l = {
  key: 0,
  class: "vk-form-item__error-msg"
};
var Ne = defineComponent({
  name: "VkFormItem",
  __name: "FormItem",
  props: {
    label: {},
    prop: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = inject(Bn), i = reactive({
      state: "init",
      errorMsg: "",
      // validate是一个promise，所以可以支持异步，一些自定义的请求，如远程服务器发送的请求用户名是否被占用，所以需要lodading
      loading: false
    });
    let s = null;
    const a = computed(() => {
      const y = r == null ? void 0 : r.model;
      return y && n.prop && !Jt(y[n.prop]) ? y[n.prop] : null;
    }), o = computed(() => {
      const y = r == null ? void 0 : r.rules;
      return y && n.prop && y[n.prop] ? y[n.prop] : [];
    }), l = computed(() => o.value.some((y) => y.required === true)), c = (y) => {
      const g = o.value;
      return g ? g.filter((h2) => !h2.trigger || !y ? true : h2.trigger && h2.trigger === y) : [];
    }, d = async (y) => {
      const g = n.prop, h2 = c(y);
      if (h2.length === 0)
        return true;
      if (g)
        return new xe({
          [g]: h2
        }).validate({ [g]: a.value }).then(() => {
          i.state = "success";
        }).catch((k) => {
          const { errors: m } = k;
          return i.state = "error", i.errorMsg = m && m.length > 0 && m[0].message || "", Promise.reject(k);
        }).finally(() => {
          i.loading = false;
        });
    }, p = () => {
      i.state = "init", i.errorMsg = "", i.loading = false;
    }, b = () => {
      p();
      const y = r == null ? void 0 : r.model;
      y && n.prop && !Jt(y[n.prop]) && (y[n.prop] = s);
    }, T = {
      validate: d,
      prop: n.prop || "",
      resetField: b,
      clearValidate: p
    };
    return provide(qn, T), onMounted(() => {
      n.prop && (r == null || r.addField(T), s = a.value);
    }), onUnmounted(() => {
      r == null || r.removeField(T);
    }), t({
      validateStatus: i,
      validate: d,
      resetField: b,
      clearValidate: p
    }), (y, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-form-item", {
        "is-error": i.state === "error",
        "is-success": i.state === "success",
        "is-loading": i.loading,
        "is-required": l.value
      }])
    }, [
      createBaseVNode("label", _l, [
        renderSlot(y.$slots, "label", { label: y.label }, () => [
          createTextVNode(toDisplayString(y.label), 1)
        ])
      ]),
      createBaseVNode("div", wl, [
        renderSlot(y.$slots, "default", { validate: d }),
        i.state === "error" ? (openBlock(), createElementBlock("div", $l, toDisplayString(i.errorMsg), 1)) : createCommentVNode("", true)
      ])
    ], 2));
  }
});
Be.install = (e) => {
  e.component(Be.name, Be);
};
Ne.install = (e) => {
  e.component(Ne.name, Ne);
};
N.install = (e) => {
  e.component(N.name, N);
};
var Ol = {
  key: 0,
  class: "vk-input__prepend"
};
var Tl = { class: "vk-input__wrapper" };
var jl = {
  key: 0,
  class: "vk-put__prefix"
};
var Al = ["type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"];
var Fl = {
  key: 1,
  class: "vk-input__append"
};
var kl = ["disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"];
var $e = defineComponent({
  name: "VkInput",
  inheritAttrs: false,
  __name: "Input",
  props: {
    type: { default: "text" },
    modelValue: {},
    size: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    placeholder: {},
    readonly: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    form: {}
  },
  emits: ["update:modelValue", "input", "focus", "blur", "change", "clear"],
  setup(e, { expose: t, emit: n }) {
    const r = e, i = n, s = ref(r.modelValue), a = inject(qn), o = (f) => {
      a == null || a.validate(f).catch(($) => console.log($.errors));
    };
    watch(() => r.modelValue, (f) => {
      s.value = f;
    });
    const l = ref(false), c = computed(
      () => r.clearable && l.value && !!s.value && !r.disabled
    ), d = (f) => {
      l.value = true, i("focus", f), o("focus");
    }, p = (f) => {
      l.value = false, i("blur", f), o("blur");
    }, b = () => {
      s.value = "", i("clear"), i("change", s.value), y();
    }, T = () => {
      i("change", s.value), o("change");
    }, y = () => {
      i("update:modelValue", s.value), i("input", s.value), o("input");
    }, g = useAttrs(), h2 = ref(), u = ref(false), k = computed(
      () => r.showPassword && !r.disabled && !!s.value
    ), m = () => {
      u.value = !u.value;
    }, O = () => {
    }, A = async () => {
      var f;
      await nextTick(), (f = h2.value) == null || f.focus();
    };
    return t({
      ref: h2
    }), (f, $) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-input", {
        [`vk-input--${f.type}`]: f.type,
        [`vk-input--${f.size}`]: f.size,
        "is-disabled": f.disabled,
        "is-prepend": f.$slots.prepend,
        "is-append": f.$slots.append,
        "is-prefix": f.$slots.prefix,
        "is-suffix": f.$slots.suffix,
        "is-focus": l.value
      }])
    }, [
      f.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        f.$slots.prepend ? (openBlock(), createElementBlock("div", Ol, [
          renderSlot(f.$slots, "prepend")
        ])) : createCommentVNode("", true),
        createBaseVNode("div", Tl, [
          f.$slots.prefix ? (openBlock(), createElementBlock("span", jl, [
            renderSlot(f.$slots, "prefix")
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", mergeProps({
            class: "vk-input__inner",
            type: f.showPassword ? u.value ? "text" : "password" : f.type
          }, unref(g), {
            ref_key: "inputRef",
            ref: h2,
            disabled: f.disabled,
            readonly: f.readonly,
            autocomplete: f.autocomplete,
            placeholder: f.placeholder,
            autofocus: f.autofocus,
            form: f.form,
            "onUpdate:modelValue": $[0] || ($[0] = (v) => s.value = v),
            onInput: y,
            onFocus: d,
            onBlur: p,
            onChange: T
          }), null, 16, Al), [
            [vModelDynamic, s.value]
          ]),
          f.$slots.suffix || c.value || k.value ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "vk-input__suffix",
            onClick: A
          }, [
            renderSlot(f.$slots, "suffix"),
            c.value ? (openBlock(), createBlock(N, {
              key: 0,
              icon: "circle-xmark",
              class: "vk-input__clear",
              onClick: b,
              onMousedown: withModifiers(O, ["prevent"])
            })) : createCommentVNode("", true),
            k.value && u.value ? (openBlock(), createBlock(N, {
              key: 1,
              icon: "eye",
              class: "vk-input__password",
              onClick: m
            })) : createCommentVNode("", true),
            k.value && !u.value ? (openBlock(), createBlock(N, {
              key: 2,
              icon: "eye-slash",
              class: "vk-input__password",
              onClick: m
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        f.$slots.append ? (openBlock(), createElementBlock("div", Fl, [
          renderSlot(f.$slots, "append")
        ])) : createCommentVNode("", true)
      ], 64)) : withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
        key: 1,
        class: "vk-textarea__wrapper"
      }, unref(g), {
        ref_key: "inputRef",
        ref: h2,
        disabled: f.disabled,
        readonly: f.readonly,
        autocomplete: f.autocomplete,
        placeholder: f.placeholder,
        autofocus: f.autofocus,
        form: f.form,
        "onUpdate:modelValue": $[1] || ($[1] = (v) => s.value = v),
        onInput: y,
        onChange: T,
        onFocus: d,
        onBlur: p
      }), "    ", 16, kl)), [
        [vModelText, s.value]
      ])
    ], 2));
  }
});
$e.install = (e) => {
  e.component($e.name, $e);
};
var xl = {
  key: 0,
  class: "vk-select__loading"
};
var El = {
  key: 1,
  class: "vk-select__nodata"
};
var Sl = {
  key: 2,
  class: "vk-select__menu"
};
var Pl = ["id", "onClick"];
var Me = defineComponent({
  name: "VkSelect",
  __name: "Select",
  props: {
    modelValue: {},
    options: { default: () => [] },
    placeholder: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    renderLabel: {},
    filterable: { type: Boolean },
    filterMethod: {},
    remote: { type: Boolean },
    remoteMethod: {}
  },
  emits: ["update:modelValue", "change", "visible-change", "clear"],
  setup(e, { emit: t }) {
    const n = e, r = computed(() => n.remote ? 300 : 0), i = t, a = ((v) => {
      const E = n.options.find((V) => V.value === v);
      return E || null;
    })(n.modelValue), o = reactive({
      inputValue: a ? a.label : "",
      selectedOption: a,
      mouseHover: false,
      loading: false,
      highlightIndex: -1
    }), l = ref(), c = ref(false), d = ref(), p = {
      modifers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        },
        {
          name: "sameWidth",
          enabled: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fn: ({ state: v }) => {
            v.styles.popper.width = `${v.rects.reference.width}px`;
          },
          phase: "beforeWrite",
          requires: ["computeStyles"]
        }
      ]
    }, b = (v) => {
      l.value && (v ? (n.filterable && o.selectedOption && (o.inputValue = ""), l.value.show()) : (l.value.hide(), n.filterable && (o.inputValue = o.selectedOption ? o.selectedOption.label : ""), o.highlightIndex = -1), c.value = v, i("visible-change", v));
    }, T = () => {
      n.disabled || (c.value ? b(false) : b(true));
    }, y = computed(() => o.mouseHover && n.clearable && o.selectedOption && o.inputValue.trim() !== ""), g = () => {
      o.selectedOption = null, o.inputValue = "", i("update:modelValue", ""), i("change", ""), i("clear");
    }, h2 = () => {
    }, u = ref(n.options);
    watch(() => n.options, (v) => {
      u.value = v;
    });
    const k = async (v) => {
      if (n.filterable) {
        if (n.filterMethod && ze(n.filterMethod))
          u.value = n.filterMethod(v);
        else if (n.remote && n.remoteMethod && ze(n.remoteMethod)) {
          o.loading = true;
          try {
            u.value = await n.remoteMethod(v);
          } catch (E) {
            console.log("filter error", E), u.value = [];
          } finally {
            o.loading = false;
          }
        } else
          u.value = n.options.filter((E) => E.label.includes(v));
        o.highlightIndex = -1;
      }
    }, m = () => {
      k(o.inputValue);
    }, O = rt(() => {
      m();
    }, r.value), A = computed(() => n.filterable && o.selectedOption && c.value ? o.selectedOption.label : n.placeholder), f = (v) => {
      v.disabled || (o.selectedOption = v, o.inputValue = v.label, i("update:modelValue", v.value), i("change", v.value), b(false), d.value.ref.focus());
    }, $ = (v) => {
      switch (v.key) {
        case "Enter":
          c.value ? o.highlightIndex > -1 && u.value[o.highlightIndex] ? f(u.value[o.highlightIndex]) : b(false) : b(true);
          break;
        case "Escape":
          c.value && b(false);
          break;
        case "ArrowUp":
          v.preventDefault(), c.value && u.value.length > 0 && (o.highlightIndex === -1 || o.highlightIndex === 0 ? (o.highlightIndex = u.value.length - 1, console.log("first ArrowUp")) : (o.highlightIndex--, console.log("ArrowUp")));
          break;
        case "ArrowDown":
          v.preventDefault(), c.value && u.value.length > 0 && (o.highlightIndex === -1 || o.highlightIndex === u.value.length - 1 ? o.highlightIndex = 0 : o.highlightIndex++);
          break;
      }
    };
    return (v, E) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-select", {
        "vk-select--disabled": v.disabled
      }]),
      onClick: T,
      onMouseenter: E[2] || (E[2] = (V) => o.mouseHover = true),
      onMouseleave: E[3] || (E[3] = (V) => o.mouseHover = false)
    }, [
      createVNode(ce, {
        placement: "bottom-start",
        manual: true,
        ref_key: "tooltipRef",
        ref: l,
        popperOptions: p,
        onClickOutside: E[1] || (E[1] = (V) => b(false))
      }, {
        content: withCtx(() => [
          o.loading ? (openBlock(), createElementBlock("div", xl, [
            createVNode(N, {
              icon: "spinner",
              spin: ""
            })
          ])) : v.filterable && u.value.length === 0 ? (openBlock(), createElementBlock("div", El, "no matching data")) : (openBlock(), createElementBlock("ul", Sl, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(u.value, (V, he) => {
              var R;
              return openBlock(), createElementBlock("li", {
                key: he,
                class: normalizeClass(["vk-select__menu-item", {
                  "is-disabled": V.disabled,
                  "is-selected": ((R = o.selectedOption) == null ? void 0 : R.value) === V.value,
                  "is-hightlighted": o.highlightIndex === he
                }]),
                id: `select-item-${V.value}`,
                onClick: withModifiers((L) => f(V), ["stop"])
              }, [
                createVNode(unref(Vn), {
                  vNode: v.renderLabel ? v.renderLabel(V) : V.label
                }, null, 8, ["vNode"])
              ], 10, Pl);
            }), 128))
          ]))
        ]),
        default: withCtx(() => [
          createVNode($e, {
            modelValue: o.inputValue,
            "onUpdate:modelValue": E[0] || (E[0] = (V) => o.inputValue = V),
            type: "text",
            disabled: v.disabled,
            placeholder: A.value,
            readonly: !v.filterable || !c.value,
            ref_key: "inputRef",
            ref: d,
            onInput: unref(O),
            onKeydown: $
          }, {
            suffix: withCtx(() => [
              y.value ? (openBlock(), createBlock(N, {
                key: 0,
                icon: "circle-xmark",
                class: "vk-input__clear",
                onMousedown: withModifiers(h2, ["prevent"]),
                onClick: withModifiers(g, ["stop"])
              })) : (openBlock(), createBlock(N, {
                key: 1,
                icon: "angle-down",
                class: normalizeClass(["header-angle", { "is-active": c.value }])
              }, null, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "disabled", "placeholder", "readonly", "onInput"])
        ]),
        _: 1
      }, 512)
    ], 34));
  }
});
Me.install = (e) => {
  e.component(Me.name, Me);
};
var Il = ["name", "disabled"];
var Cl = { class: "vk-switch__core" };
var Vl = { class: "vk-switch__core-inner" };
var Bl = {
  key: 0,
  class: "vk-switch__core-inner-text"
};
var De = defineComponent({
  name: "VkSwitch",
  inheritAttrs: false,
  __name: "Switch",
  props: {
    modelValue: { type: [Boolean, Number, String] },
    disabled: { type: Boolean },
    activeText: {},
    inactiveText: {},
    activeValue: { type: [Boolean, Number, String], default: true },
    inactiveValue: { type: [Boolean, Number, String], default: false },
    name: {},
    id: {},
    size: {}
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = ref(), s = ref(n.modelValue);
    watch(() => n.modelValue, (l) => {
      s.value = l;
    });
    const a = computed(() => s.value === n.activeValue), o = () => {
      if (n.disabled) return;
      const l = a.value ? n.inactiveValue : n.activeValue;
      s.value = l, r("update:modelValue", s.value), r("change", s.value);
    };
    return onMounted(() => {
      i.value.checked = a.value;
    }), watch(() => a.value, (l) => {
      i.value.checked = l;
    }), (l, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-switch", {
        [`vk-switch--${l.size}`]: l.size,
        "is-disabled": l.disabled,
        "is-checked": a.value
      }]),
      onClick: o
    }, [
      createBaseVNode("input", {
        class: "vk-swtich__input",
        type: "checkbox",
        role: "switch",
        name: l.name,
        disabled: l.disabled,
        onKeydown: withKeys(o, ["enter"]),
        ref_key: "input",
        ref: i
      }, null, 40, Il),
      createBaseVNode("div", Cl, [
        createBaseVNode("div", Vl, [
          l.activeText || l.inactiveText ? (openBlock(), createElementBlock("span", Bl, toDisplayString(a.value ? n.activeText : n.inactiveText), 1)) : createCommentVNode("", true)
        ]),
        c[0] || (c[0] = createBaseVNode("div", { class: "vk-switch__core-action" }, null, -1))
      ])
    ], 2));
  }
});
De.install = (e) => {
  e.component(De.name, De);
};
ce.install = (e) => {
  e.component(ce.name, ce);
};
var Ll = {
  install(e) {
    [
      Pe,
      Ie,
      Ce,
      _e,
      Ve,
      Be,
      Ne,
      N,
      $e,
      Me,
      De,
      ce
    ].forEach((n) => {
      e.component(n.name, n);
    });
  }
};
export {
  Pe as Button,
  Ie as Collapse,
  Ce as CollapseItem,
  Ve as Dropdown,
  Be as Form,
  Ne as FormItem,
  N as Icon,
  $e as Input,
  _e as Message,
  Me as Select,
  De as Switch,
  ce as Tooltip,
  Dl as buttonProps,
  Cn as collpaseContextKey,
  Rl as createMessage,
  Ll as default,
  Bn as formContextKey,
  qn as formItemContextKey,
  Ll as install
};
//# sourceMappingURL=@yichu0131_z-element.js.map
