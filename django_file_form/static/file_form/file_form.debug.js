(function () {

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$l =
	  // eslint-disable-next-line es-x/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$k = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$j = isCallable$k;

	var isObject$b = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$j(it);
	};

	var global$k = global$l;
	var isObject$a = isObject$b;

	var document$1 = global$k.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$a(document$1) && isObject$a(document$1.createElement);

	var documentCreateElement$2 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
	var documentCreateElement$1 = documentCreateElement$2;

	var classList = documentCreateElement$1('span').classList;
	var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

	var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

	var fails$n = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$m = fails$n;

	var functionBindNative = !fails$m(function () {
	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$3 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var bind$3 = FunctionPrototype$2.bind;
	var call$e = FunctionPrototype$2.call;
	var uncurryThis$l = NATIVE_BIND$3 && bind$3.bind(call$e, call$e);

	var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
	  return fn && uncurryThis$l(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$e.apply(fn, arguments);
	  };
	};

	var uncurryThis$k = functionUncurryThis;

	var toString$6 = uncurryThis$k({}.toString);
	var stringSlice$4 = uncurryThis$k(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice$4(toString$6(it), 8, -1);
	};

	var uncurryThis$j = functionUncurryThis;
	var fails$l = fails$n;
	var classof$9 = classofRaw$1;

	var $Object$4 = Object;
	var split = uncurryThis$j(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$l(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$9(it) == 'String' ? split(it, '') : $Object$4(it);
	} : $Object$4;

	var $TypeError$b = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$4 = function (it) {
	  if (it == undefined) throw $TypeError$b("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$3 = requireObjectCoercible$4;

	var toIndexedObject$6 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$3(it));
	};

	var shared$4 = {exports: {}};

	var global$j = global$l;

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$7 = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$7(global$j, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$j[key] = value;
	  } return value;
	};

	var global$i = global$l;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$i[SHARED] || defineGlobalProperty$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$4.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.24.1',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$2 = requireObjectCoercible$4;

	var $Object$3 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$6 = function (argument) {
	  return $Object$3(requireObjectCoercible$2(argument));
	};

	var uncurryThis$i = functionUncurryThis;
	var toObject$5 = toObject$6;

	var hasOwnProperty = uncurryThis$i({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$5(it), key);
	};

	var uncurryThis$h = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$5 = uncurryThis$h(1.0.toString);

	var uid$3 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
	};

	var global$h = global$l;
	var isCallable$i = isCallable$k;

	var aFunction = function (argument) {
	  return isCallable$i(argument) ? argument : undefined;
	};

	var getBuiltIn$6 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$h[namespace]) : global$h[namespace] && global$h[namespace][method];
	};

	var getBuiltIn$5 = getBuiltIn$6;

	var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

	var global$g = global$l;
	var userAgent$2 = engineUserAgent;

	var process = global$g.process;
	var Deno = global$g.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version$1;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version$1 && userAgent$2) {
	  match = userAgent$2.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$2.match(/Chrome\/(\d+)/);
	    if (match) version$1 = +match[1];
	  }
	}

	var engineV8Version = version$1;

	/* eslint-disable es-x/no-symbol -- required for testing */

	var V8_VERSION = engineV8Version;
	var fails$k = fails$n;

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$k(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	/* eslint-disable es-x/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$f = global$l;
	var shared$3 = shared$4.exports;
	var hasOwn$a = hasOwnProperty_1;
	var uid$2 = uid$3;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var WellKnownSymbolsStore = shared$3('wks');
	var Symbol$1 = global$f.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

	var wellKnownSymbol$g = function (name) {
	  if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var isObject$9 = isObject$b;

	var $String$3 = String;
	var $TypeError$a = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$9 = function (argument) {
	  if (isObject$9(argument)) return argument;
	  throw $TypeError$a($String$3(argument) + ' is not an object');
	};

	var objectDefineProperties = {};

	var fails$j = fails$n;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$j(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var DESCRIPTORS$d = descriptors;
	var fails$i = fails$n;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$d && fails$i(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var objectDefineProperty = {};

	var DESCRIPTORS$c = descriptors;
	var fails$h = fails$n;
	var createElement = documentCreateElement$2;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$c && !fails$h(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var NATIVE_BIND$2 = functionBindNative;

	var call$d = Function.prototype.call;

	var functionCall = NATIVE_BIND$2 ? call$d.bind(call$d) : function () {
	  return call$d.apply(call$d, arguments);
	};

	var uncurryThis$g = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

	var getBuiltIn$4 = getBuiltIn$6;
	var isCallable$h = isCallable$k;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var $Object$2 = Object;

	var isSymbol$3 = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$4('Symbol');
	  return isCallable$h($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$2(it));
	};

	var $String$2 = String;

	var tryToString$4 = function (argument) {
	  try {
	    return $String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$g = isCallable$k;
	var tryToString$3 = tryToString$4;

	var $TypeError$9 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$4 = function (argument) {
	  if (isCallable$g(argument)) return argument;
	  throw $TypeError$9(tryToString$3(argument) + ' is not a function');
	};

	var aCallable$3 = aCallable$4;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$3(func);
	};

	var call$c = functionCall;
	var isCallable$f = isCallable$k;
	var isObject$8 = isObject$b;

	var $TypeError$8 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$f(fn = input.toString) && !isObject$8(val = call$c(fn, input))) return val;
	  if (isCallable$f(fn = input.valueOf) && !isObject$8(val = call$c(fn, input))) return val;
	  if (pref !== 'string' && isCallable$f(fn = input.toString) && !isObject$8(val = call$c(fn, input))) return val;
	  throw $TypeError$8("Can't convert object to primitive value");
	};

	var call$b = functionCall;
	var isObject$7 = isObject$b;
	var isSymbol$2 = isSymbol$3;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$f = wellKnownSymbol$g;

	var $TypeError$7 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$f('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$2 = function (input, pref) {
	  if (!isObject$7(input) || isSymbol$2(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$b(exoticToPrim, input, pref);
	    if (!isObject$7(result) || isSymbol$2(result)) return result;
	    throw $TypeError$7("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive$1 = toPrimitive$2;
	var isSymbol$1 = isSymbol$3;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive$1(argument, 'string');
	  return isSymbol$1(key) ? key : key + '';
	};

	var DESCRIPTORS$b = descriptors;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$8 = anObject$9;
	var toPropertyKey$3 = toPropertyKey$4;

	var $TypeError$6 = TypeError;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$b ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$8(O);
	  P = toPropertyKey$3(P);
	  anObject$8(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$1(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$8(O);
	  P = toPropertyKey$3(P);
	  anObject$8(Attributes);
	  if (IE8_DOM_DEFINE$1) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var ceil = Math.ceil;
	var floor$4 = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es-x/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$4 : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$7 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$6 = toIntegerOrInfinity$7;

	var max$2 = Math.max;
	var min$2 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$3 = function (index, length) {
	  var integer = toIntegerOrInfinity$6(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
	};

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$7;

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$5 = function (argument) {
	  return argument > 0 ? min$1(toIntegerOrInfinity$5(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$4 = toLength$5;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$6 = function (obj) {
	  return toLength$4(obj.length);
	};

	var toIndexedObject$5 = toIndexedObject$6;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;
	var lengthOfArrayLike$5 = lengthOfArrayLike$6;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$5($this);
	    var length = lengthOfArrayLike$5(O);
	    var index = toAbsoluteIndex$2(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var hiddenKeys$4 = {};

	var uncurryThis$f = functionUncurryThis;
	var hasOwn$9 = hasOwnProperty_1;
	var toIndexedObject$4 = toIndexedObject$6;
	var indexOf$1 = arrayIncludes.indexOf;
	var hiddenKeys$3 = hiddenKeys$4;

	var push$2 = uncurryThis$f([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$4(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$9(hiddenKeys$3, key) && hasOwn$9(O, key) && push$2(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
	    ~indexOf$1(result, key) || push$2(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es-x/no-object-keys -- safe
	var objectKeys$1 = Object.keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$2);
	};

	var DESCRIPTORS$a = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$6 = objectDefineProperty;
	var anObject$7 = anObject$9;
	var toIndexedObject$3 = toIndexedObject$6;
	var objectKeys = objectKeys$1;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$a && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$7(O);
	  var props = toIndexedObject$3(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$6.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$3 = getBuiltIn$6;

	var html$1 = getBuiltIn$3('document', 'documentElement');

	var shared$2 = shared$4.exports;
	var uid$1 = uid$3;

	var keys$1 = shared$2('keys');

	var sharedKey$3 = function (key) {
	  return keys$1[key] || (keys$1[key] = uid$1(key));
	};

	/* global ActiveXObject -- old IE, WSH */

	var anObject$6 = anObject$9;
	var definePropertiesModule = objectDefineProperties;
	var enumBugKeys$1 = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$4;
	var html = html$1;
	var documentCreateElement = documentCreateElement$2;
	var sharedKey$2 = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$2('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys$1.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
	  return NullProtoObject();
	};

	hiddenKeys$2[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es-x/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$6(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
	};

	var wellKnownSymbol$e = wellKnownSymbol$g;
	var create$3 = objectCreate;
	var defineProperty$6 = objectDefineProperty.f;

	var UNSCOPABLES = wellKnownSymbol$e('unscopables');
	var ArrayPrototype$1 = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
	  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
	    configurable: true,
	    value: create$3(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$2 = function (key) {
	  ArrayPrototype$1[UNSCOPABLES][key] = true;
	};

	var iterators = {};

	var uncurryThis$e = functionUncurryThis;
	var isCallable$e = isCallable$k;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$e(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$e(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var global$e = global$l;
	var isCallable$d = isCallable$k;
	var inspectSource$2 = inspectSource$3;

	var WeakMap$1 = global$e.WeakMap;

	var nativeWeakMap = isCallable$d(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

	var createPropertyDescriptor$5 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var DESCRIPTORS$9 = descriptors;
	var definePropertyModule$5 = objectDefineProperty;
	var createPropertyDescriptor$4 = createPropertyDescriptor$5;

	var createNonEnumerableProperty$8 = DESCRIPTORS$9 ? function (object, key, value) {
	  return definePropertyModule$5.f(object, key, createPropertyDescriptor$4(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$d = global$l;
	var uncurryThis$d = functionUncurryThis;
	var isObject$6 = isObject$b;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
	var hasOwn$8 = hasOwnProperty_1;
	var shared$1 = sharedStore;
	var sharedKey$1 = sharedKey$3;
	var hiddenKeys$1 = hiddenKeys$4;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$2 = global$d.TypeError;
	var WeakMap = global$d.WeakMap;
	var set$2, get$1, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get$1(it) : set$2(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$6(it) || (state = get$1(it)).type !== TYPE) {
	      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$1.state) {
	  var store = shared$1.state || (shared$1.state = new WeakMap());
	  var wmget = uncurryThis$d(store.get);
	  var wmhas = uncurryThis$d(store.has);
	  var wmset = uncurryThis$d(store.set);
	  set$2 = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return wmget(store, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey$1('state');
	  hiddenKeys$1[STATE] = true;
	  set$2 = function (it, metadata) {
	    if (hasOwn$8(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$7(it, STATE, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return hasOwn$8(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return hasOwn$8(it, STATE);
	  };
	}

	var internalState = {
	  set: set$2,
	  get: get$1,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var objectGetOwnPropertyDescriptor = {};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var DESCRIPTORS$8 = descriptors;
	var call$a = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$3 = createPropertyDescriptor$5;
	var toIndexedObject$2 = toIndexedObject$6;
	var toPropertyKey$2 = toPropertyKey$4;
	var hasOwn$7 = hasOwnProperty_1;
	var IE8_DOM_DEFINE = ie8DomDefine;

	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$7(O, P)) return createPropertyDescriptor$3(!call$a(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var makeBuiltIn$3 = {exports: {}};

	var DESCRIPTORS$7 = descriptors;
	var hasOwn$6 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || (DESCRIPTORS$7 && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var fails$g = fails$n;
	var isCallable$c = isCallable$k;
	var hasOwn$5 = hasOwnProperty_1;
	var DESCRIPTORS$6 = descriptors;
	var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
	var inspectSource$1 = inspectSource$3;
	var InternalStateModule$4 = internalState;

	var enforceInternalState$2 = InternalStateModule$4.enforce;
	var getInternalState$5 = InternalStateModule$4.get;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$5 = Object.defineProperty;

	var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$g(function () {
	  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
	  if (String(name).slice(0, 7) === 'Symbol(') {
	    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
	    if (DESCRIPTORS$6) defineProperty$5(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
	    defineProperty$5(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$5(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$6) defineProperty$5(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState$2(value);
	  if (!hasOwn$5(state, 'source')) {
	    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$2(function toString() {
	  return isCallable$c(this) && getInternalState$5(this).source || inspectSource$1(this);
	}, 'toString');

	var isCallable$b = isCallable$k;
	var definePropertyModule$4 = objectDefineProperty;
	var makeBuiltIn$1 = makeBuiltIn$3.exports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$6 = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$b(value)) makeBuiltIn$1(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule$4.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};

	var objectGetOwnPropertyNames = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$3;

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$2 = getBuiltIn$6;
	var uncurryThis$c = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$5 = anObject$9;

	var concat$2 = uncurryThis$c([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$3 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$5(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$4 = hasOwnProperty_1;
	var ownKeys$2 = ownKeys$3;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$3 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys$2(source);
	  var defineProperty = definePropertyModule$3.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$f = fails$n;
	var isCallable$a = isCallable$k;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize$1(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$a(detection) ? fails$f(detection)
	    : !!detection;
	};

	var normalize$1 = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var global$c = global$l;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
	var defineBuiltIn$5 = defineBuiltIn$6;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced = isForced_1;

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$c;
	  } else if (STATIC) {
	    target = global$c[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = (global$c[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$6(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$5(target, key, sourceProperty, options);
	  }
	};

	var fails$e = fails$n;

	var correctPrototypeGetter = !fails$e(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$3 = hasOwnProperty_1;
	var isCallable$9 = isCallable$k;
	var toObject$4 = toObject$6;
	var sharedKey = sharedKey$3;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object$1 = Object;
	var ObjectPrototype$2 = $Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
	  var object = toObject$4(O);
	  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$9(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$1 ? ObjectPrototype$2 : null;
	};

	var fails$d = fails$n;
	var isCallable$8 = isCallable$k;
	var getPrototypeOf$3 = objectGetPrototypeOf;
	var defineBuiltIn$4 = defineBuiltIn$6;
	var wellKnownSymbol$d = wellKnownSymbol$g;

	var ITERATOR$5 = wellKnownSymbol$d('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es-x/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$d(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$8(IteratorPrototype$2[ITERATOR$5])) {
	  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$5, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var defineProperty$4 = objectDefineProperty.f;
	var hasOwn$2 = hasOwnProperty_1;
	var wellKnownSymbol$c = wellKnownSymbol$g;

	var TO_STRING_TAG$4 = wellKnownSymbol$c('toStringTag');

	var setToStringTag$3 = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn$2(target, TO_STRING_TAG$4)) {
	    defineProperty$4(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create$2 = objectCreate;
	var createPropertyDescriptor$2 = createPropertyDescriptor$5;
	var setToStringTag$2 = setToStringTag$3;
	var Iterators$4 = iterators;

	var returnThis$1 = function () { return this; };

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$4[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var isCallable$7 = isCallable$k;

	var $String$1 = String;
	var $TypeError$5 = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$7(argument)) return argument;
	  throw $TypeError$5("Can't set " + $String$1(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThis$b = functionUncurryThis;
	var anObject$4 = anObject$9;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	    setter = uncurryThis$b(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$4(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$3 = _export;
	var call$9 = functionCall;
	var FunctionName$1 = functionName;
	var isCallable$6 = isCallable$k;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf$2 = objectGetPrototypeOf;
	var setPrototypeOf$4 = objectSetPrototypeOf;
	var setToStringTag$1 = setToStringTag$3;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
	var defineBuiltIn$3 = defineBuiltIn$6;
	var wellKnownSymbol$b = wellKnownSymbol$g;
	var Iterators$3 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME$1 = FunctionName$1.PROPER;
	var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$4 = wellKnownSymbol$b('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$4]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf$4) {
	          setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable$6(CurrentIteratorPrototype[ITERATOR$4])) {
	          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$4, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME$1) {
	      createNonEnumerableProperty$5(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$9(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
	    defineBuiltIn$3(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$3[NAME] = defaultIterator;

	  return methods;
	};

	var toIndexedObject$1 = toIndexedObject$6;
	var addToUnscopables$1 = addToUnscopables$2;
	var Iterators$2 = iterators;
	var InternalStateModule$3 = internalState;
	var defineProperty$3 = objectDefineProperty.f;
	var defineIterator = defineIterator$1;
	var DESCRIPTORS$5 = descriptors;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$2 = InternalStateModule$3.set;
	var getInternalState$4 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$2(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$1(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$4(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	var values = Iterators$2.Arguments = Iterators$2.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$1('keys');
	addToUnscopables$1('values');
	addToUnscopables$1('entries');

	// V8 ~ Chrome 45- bug
	if (DESCRIPTORS$5 && values.name !== 'values') try {
	  defineProperty$3(values, 'name', { value: 'values' });
	} catch (error) { /* empty */ }

	var global$b = global$l;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
	var wellKnownSymbol$a = wellKnownSymbol$g;

	var ITERATOR$3 = wellKnownSymbol$a('iterator');
	var TO_STRING_TAG$3 = wellKnownSymbol$a('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
	      createNonEnumerableProperty$4(CollectionPrototype, ITERATOR$3, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$3] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG$3]) {
	      createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	    }
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty$4(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	};

	for (var COLLECTION_NAME in DOMIterables) {
	  handlePrototype(global$b[COLLECTION_NAME] && global$b[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}

	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	const findForm = element => {
	  const parent = element.parentElement;

	  if (!parent) {
	    return null;
	  }

	  if (parent.tagName === "FORM") {
	    return parent;
	  }

	  return findForm(parent);
	};

	const unique = values => Array.from(new Set(values).values());

	// eslint-disable-line @typescript-eslint/no-explicit-any
	const autoInitFileForms = () => {
	  const initUploadFields = window.initUploadFields; // eslint-disable-line  @typescript-eslint/no-unsafe-member-access

	  const forms = unique(Array.from(document.querySelectorAll(".dff-uploader")).map(findForm));
	  forms.forEach(initUploadFields);
	};

	function _defineProperty$2(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	const formatBytes = (bytes, decimals) => {
	  if (bytes === 0) {
	    return "0 Bytes";
	  }

	  const k = 1024;
	  const dm = decimals <= 0 ? 0 : decimals || 2;
	  const sizes = ["Bytes", "KB", "MB", "GB"];
	  const i = Math.floor(Math.log(bytes) / Math.log(k));
	  const n = parseFloat((bytes / k ** i).toFixed(dm));
	  const size = sizes[i];
	  return "".concat(n, " ").concat(size);
	};
	const getInputNameWithPrefix = (fieldName, prefix) => prefix ? "".concat(prefix, "-").concat(fieldName) : fieldName;

	const getInputNameWithoutPrefix = (fieldName, prefix) => prefix ? fieldName.slice(prefix.length + 1) : fieldName;

	const findInput = (form, fieldName, prefix) => {
	  const inputNameWithPrefix = getInputNameWithPrefix(fieldName, prefix);
	  const input = form.querySelector("[name=\"".concat(inputNameWithPrefix, "\"]"));

	  if (!input) {
	    return null;
	  }

	  return input;
	};
	const getUploadsFieldName = (fieldName, prefix) => "".concat(getInputNameWithoutPrefix(fieldName, prefix), "-uploads");
	const getInputValueForFormAndPrefix = (form, fieldName, prefix) => {
	  var _findInput;

	  return (_findInput = findInput(form, fieldName, prefix)) === null || _findInput === void 0 ? void 0 : _findInput.value;
	};
	const getMetadataFieldName = (fieldName, prefix) => "".concat(getInputNameWithoutPrefix(fieldName, prefix), "-metadata");

	/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */
	/**
	 * Module variables.
	 * @private
	 */


	var matchHtmlRegExp = /["'&<>]/;
	/**
	 * Module exports.
	 * @public
	 */

	var escapeHtml_1 = escapeHtml;
	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index = 0;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34:
	        // "
	        escape = '&quot;';
	        break;

	      case 38:
	        // &
	        escape = '&amp;';
	        break;

	      case 39:
	        // '
	        escape = '&#39;';
	        break;

	      case 60:
	        // <
	        escape = '&lt;';
	        break;

	      case 62:
	        // >
	        escape = '&gt;';
	        break;

	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	}

	class RenderUploadFile {
	  constructor(_ref) {
	    let {
	      parent: _parent,
	      input,
	      skipRequired,
	      translations
	    } = _ref;

	    _defineProperty$2(this, "container", void 0);

	    _defineProperty$2(this, "input", void 0);

	    _defineProperty$2(this, "translations", void 0);

	    _defineProperty$2(this, "createFilesContainer", parent => {
	      const div = document.createElement("div");
	      div.className = "dff-files";
	      parent.appendChild(div);
	      return div;
	    });

	    this.container = this.createFilesContainer(_parent);
	    this.input = input;
	    this.translations = translations;

	    if (skipRequired) {
	      this.input.required = false;
	    }
	  }

	  addNewUpload(filename, uploadIndex) {
	    const div = this.addFile(filename, uploadIndex);
	    const progressSpan = document.createElement("span");
	    progressSpan.className = "dff-progress";
	    const innerSpan = document.createElement("span");
	    innerSpan.className = "dff-progress-inner";
	    progressSpan.appendChild(innerSpan);
	    div.appendChild(progressSpan);
	    const cancelLink = document.createElement("a");
	    cancelLink.className = "dff-cancel";
	    cancelLink.innerHTML = this.translations.Cancel;
	    cancelLink.setAttribute("data-index", "".concat(uploadIndex));
	    cancelLink.href = "#";
	    div.appendChild(cancelLink);
	    return div;
	  }

	  addUploadedFile(filename, uploadIndex, filesize) {
	    const element = this.addFile(filename, uploadIndex);
	    this.setSuccess(uploadIndex, filesize);
	    return element;
	  }

	  clearInput() {
	    const {
	      input
	    } = this;
	    input.value = "";
	  }

	  deleteFile(index) {
	    const div = this.findFileDiv(index);

	    if (div) {
	      div.remove();
	    }
	  }

	  disableCancel(index) {
	    const cancelSpan = this.findCancelSpan(index);

	    if (cancelSpan) {
	      cancelSpan.classList.add("dff-disabled");
	    }
	  }

	  disableDelete(index) {
	    const deleteLink = this.findDeleteLink(index);

	    if (deleteLink) {
	      deleteLink.classList.add("dff-disabled");
	    }
	  }

	  findFileDiv(index) {
	    return this.container.querySelector(".dff-file-id-".concat(index));
	  }

	  removeDropHint() {
	    const dropHint = this.container.querySelector(".dff-drop-hint");

	    if (dropHint) {
	      dropHint.remove();
	    }
	  }

	  renderDropHint() {
	    if (this.container.querySelector(".dff-drop-hint")) {
	      return;
	    }

	    const dropHint = document.createElement("div");
	    dropHint.className = "dff-drop-hint";
	    dropHint.innerHTML = this.translations["Drop your files here"];
	    this.container.appendChild(dropHint);
	  }

	  setDeleteFailed(index) {
	    this.setErrorMessage(index, this.translations["Delete failed"]);
	    this.enableDelete(index);
	  }

	  setError(index) {
	    this.setErrorMessage(index, this.translations["Upload failed"]);
	    const el = this.findFileDiv(index);

	    if (el) {
	      el.classList.add("dff-upload-fail");
	    }

	    this.removeProgress(index);
	    this.removeCancel(index);
	  }

	  setSuccess(index, size) {
	    const {
	      translations
	    } = this;
	    const el = this.findFileDiv(index);

	    if (el) {
	      el.classList.add("dff-upload-success");

	      if (size != null) {
	        const fileSizeInfo = document.createElement("span");
	        fileSizeInfo.innerHTML = formatBytes(size, 2);
	        fileSizeInfo.className = "dff-filesize";
	        el.appendChild(fileSizeInfo);
	      }

	      const deleteLink = document.createElement("a");
	      deleteLink.innerHTML = translations.Delete;
	      deleteLink.className = "dff-delete";
	      deleteLink.setAttribute("data-index", "".concat(index));
	      deleteLink.href = "#";
	      el.appendChild(deleteLink);
	    }

	    this.removeProgress(index);
	    this.removeCancel(index);
	  }

	  updateProgress(index, percentage) {
	    const el = this.container.querySelector(".dff-file-id-".concat(index));

	    if (el) {
	      const innerProgressSpan = el.querySelector(".dff-progress-inner");

	      if (innerProgressSpan) {
	        innerProgressSpan.style.width = "".concat(percentage, "%");
	      }
	    }
	  }

	  addFile(filename, uploadIndex) {
	    const div = document.createElement("div");
	    div.className = "dff-file dff-file-id-".concat(uploadIndex);
	    const nameSpan = document.createElement("span");
	    nameSpan.innerHTML = escapeHtml_1(filename);
	    div.appendChild(nameSpan);
	    this.container.appendChild(div);
	    this.input.required = false;
	    return div;
	  }

	  removeProgress(index) {
	    const el = this.findFileDiv(index);

	    if (el) {
	      const progressSpan = el.querySelector(".dff-progress");

	      if (progressSpan) {
	        progressSpan.remove();
	      }
	    }
	  }

	  removeCancel(index) {
	    const cancelSpan = this.findCancelSpan(index);

	    if (cancelSpan) {
	      cancelSpan.remove();
	    }
	  }

	  findCancelSpan(index) {
	    const el = this.findFileDiv(index);

	    if (!el) {
	      return null;
	    }

	    return el.querySelector(".dff-cancel");
	  }

	  enableDelete(index) {
	    const deleteLink = this.findDeleteLink(index);

	    if (deleteLink) {
	      deleteLink.classList.remove("dff-disabled");
	    }
	  }

	  findDeleteLink(index) {
	    const div = this.findFileDiv(index);

	    if (!div) {
	      return div;
	    }

	    return div.querySelector(".dff-delete");
	  }

	  setErrorMessage(index, message) {
	    const el = this.findFileDiv(index);

	    if (!el) {
	      return;
	    }

	    const originalMessageSpan = el.querySelector(".dff-error");

	    if (originalMessageSpan) {
	      originalMessageSpan.remove();
	    }

	    const span = document.createElement("span");
	    span.classList.add("dff-error");
	    span.innerHTML = message;
	    el.appendChild(span);
	  }

	}

	var NATIVE_BIND$1 = functionBindNative;

	var FunctionPrototype = Function.prototype;
	var apply$1 = FunctionPrototype.apply;
	var call$8 = FunctionPrototype.call;

	// eslint-disable-next-line es-x/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$8.bind(apply$1) : function () {
	  return call$8.apply(apply$1, arguments);
	});

	var wellKnownSymbol$9 = wellKnownSymbol$g;

	var TO_STRING_TAG$2 = wellKnownSymbol$9('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$5 = isCallable$k;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$8 = wellKnownSymbol$g;

	var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
	var $Object = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$8 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$5(O.callee) ? 'Arguments' : result;
	};

	var classof$7 = classof$8;

	var $String = String;

	var toString$4 = function (argument) {
	  if (classof$7(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};

	var anObject$3 = anObject$9;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$3(this);
	  var result = '';
	  if (that.hasIndices) result += 'd';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.unicodeSets) result += 'v';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var fails$c = fails$n;
	var global$a = global$l;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global$a.RegExp;

	var UNSUPPORTED_Y$1 = fails$c(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$c(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$c(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$1
	};

	var fails$b = fails$n;
	var global$9 = global$l;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global$9.RegExp;

	var regexpUnsupportedDotAll = fails$b(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.exec('\n') && re.flags === 's');
	});

	var fails$a = fails$n;
	var global$8 = global$l;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global$8.RegExp;

	var regexpUnsupportedNcg = fails$a(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$7 = functionCall;
	var uncurryThis$a = functionUncurryThis;
	var toString$3 = toString$4;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers = regexpStickyHelpers;
	var shared = shared$4.exports;
	var create$1 = objectCreate;
	var getInternalState$3 = internalState.get;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;

	var nativeReplace = shared('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$3 = uncurryThis$a(''.charAt);
	var indexOf = uncurryThis$a(''.indexOf);
	var replace$1 = uncurryThis$a(''.replace);
	var stringSlice$3 = uncurryThis$a(''.slice);

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$7(nativeExec, re1, 'a');
	  call$7(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

	if (PATCH) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState$3(re);
	    var str = toString$3(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$7(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y && re.sticky;
	    var flags = call$7(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = replace$1(flags, 'y', '');
	      if (indexOf(flags, 'g') === -1) {
	        flags += 'g';
	      }

	      strCopy = stringSlice$3(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = call$7(nativeExec, sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = stringSlice$3(match.input, charsAdded);
	        match[0] = stringSlice$3(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
	      call$7(nativeReplace, match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    if (match && groups) {
	      match.groups = object = create$1(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }

	    return match;
	  };
	}

	var regexpExec$2 = patchedExec;

	var $$2 = _export;
	var exec$1 = regexpExec$2;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
	  exec: exec$1
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var uncurryThis$9 = functionUncurryThis;
	var defineBuiltIn$2 = defineBuiltIn$6;
	var regexpExec$1 = regexpExec$2;
	var fails$9 = fails$n;
	var wellKnownSymbol$7 = wellKnownSymbol$g;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;

	var SPECIES$2 = wellKnownSymbol$7('species');
	var RegExpPrototype$1 = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$7(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$9(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$9(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$2] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    FORCED
	  ) {
	    var uncurriedNativeRegExpMethod = uncurryThis$9(/./[SYMBOL]);
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var uncurriedNativeMethod = uncurryThis$9(nativeMethod);
	      var $exec = regexp.exec;
	      if ($exec === regexpExec$1 || $exec === RegExpPrototype$1.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
	        }
	        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
	      }
	      return { done: false };
	    });

	    defineBuiltIn$2(String.prototype, KEY, methods[0]);
	    defineBuiltIn$2(RegExpPrototype$1, SYMBOL, methods[1]);
	  }

	  if (SHAM) createNonEnumerableProperty$3(RegExpPrototype$1[SYMBOL], 'sham', true);
	};

	var uncurryThis$8 = functionUncurryThis;
	var toIntegerOrInfinity$4 = toIntegerOrInfinity$7;
	var toString$2 = toString$4;
	var requireObjectCoercible$1 = requireObjectCoercible$4;

	var charAt$2 = uncurryThis$8(''.charAt);
	var charCodeAt = uncurryThis$8(''.charCodeAt);
	var stringSlice$2 = uncurryThis$8(''.slice);

	var createMethod$1 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$2(requireObjectCoercible$1($this));
	    var position = toIntegerOrInfinity$4(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$2(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$2(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$1(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$1(true)
	};

	var charAt$1 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$1 = function (S, index, unicode) {
	  return index + (unicode ? charAt$1(S, index).length : 1);
	};

	var uncurryThis$7 = functionUncurryThis;
	var toObject$3 = toObject$6;

	var floor$3 = Math.floor;
	var charAt = uncurryThis$7(''.charAt);
	var replace = uncurryThis$7(''.replace);
	var stringSlice$1 = uncurryThis$7(''.slice);
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

	// `GetSubstitution` abstract operation
	// https://tc39.es/ecma262/#sec-getsubstitution
	var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
	  var tailPos = position + matched.length;
	  var m = captures.length;
	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	  if (namedCaptures !== undefined) {
	    namedCaptures = toObject$3(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (charAt(ch, 0)) {
	      case '$': return '$';
	      case '&': return matched;
	      case '`': return stringSlice$1(str, 0, position);
	      case "'": return stringSlice$1(str, tailPos);
	      case '<':
	        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
	        break;
	      default: // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor$3(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	var call$6 = functionCall;
	var anObject$2 = anObject$9;
	var isCallable$4 = isCallable$k;
	var classof$6 = classofRaw$1;
	var regexpExec = regexpExec$2;

	var $TypeError$4 = TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (isCallable$4(exec)) {
	    var result = call$6(exec, R, S);
	    if (result !== null) anObject$2(result);
	    return result;
	  }
	  if (classof$6(R) === 'RegExp') return call$6(regexpExec, R, S);
	  throw $TypeError$4('RegExp#exec called on incompatible receiver');
	};

	var apply = functionApply;
	var call$5 = functionCall;
	var uncurryThis$6 = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var fails$8 = fails$n;
	var anObject$1 = anObject$9;
	var isCallable$3 = isCallable$k;
	var toIntegerOrInfinity$3 = toIntegerOrInfinity$7;
	var toLength$3 = toLength$5;
	var toString$1 = toString$4;
	var requireObjectCoercible = requireObjectCoercible$4;
	var advanceStringIndex = advanceStringIndex$1;
	var getMethod$1 = getMethod$3;
	var getSubstitution = getSubstitution$1;
	var regExpExec = regexpExecAbstract;
	var wellKnownSymbol$6 = wellKnownSymbol$g;

	var REPLACE = wellKnownSymbol$6('replace');
	var max$1 = Math.max;
	var min = Math.min;
	var concat$1 = uncurryThis$6([].concat);
	var push$1 = uncurryThis$6([].push);
	var stringIndexOf = uncurryThis$6(''.indexOf);
	var stringSlice = uncurryThis$6(''.slice);

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$8(function () {
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
	  return ''.replace(re, '$<a>') !== '7';
	});

	// @@replace logic
	fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.es/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : getMethod$1(searchValue, REPLACE);
	      return replacer
	        ? call$5(replacer, searchValue, O, replaceValue)
	        : call$5(nativeReplace, toString$1(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	    function (string, replaceValue) {
	      var rx = anObject$1(this);
	      var S = toString$1(string);

	      if (
	        typeof replaceValue == 'string' &&
	        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
	        stringIndexOf(replaceValue, '$<') === -1
	      ) {
	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
	        if (res.done) return res.value;
	      }

	      var functionalReplace = isCallable$3(replaceValue);
	      if (!functionalReplace) replaceValue = toString$1(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;

	        push$1(results, result);
	        if (!global) break;

	        var matchStr = toString$1(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$3(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = toString$1(result[0]);
	        var position = max$1(min(toIntegerOrInfinity$3(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = concat$1([matched], captures, position, S);
	          if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
	          var replacement = toString$1(apply(replaceValue, undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + stringSlice(S, nextSourcePosition);
	    }
	  ];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	/**
	 * @param typeMap [Object] Map of MIME type -> Array[extensions]
	 * @param ...
	 */


	function Mime$1() {
	  this._types = Object.create(null);
	  this._extensions = Object.create(null);

	  for (let i = 0; i < arguments.length; i++) {
	    this.define(arguments[i]);
	  }

	  this.define = this.define.bind(this);
	  this.getType = this.getType.bind(this);
	  this.getExtension = this.getExtension.bind(this);
	}
	/**
	 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
	 * to an array of extensions associated with the type.  The first extension is
	 * used as the default extension for the type.
	 *
	 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
	 *
	 * If a type declares an extension that has already been defined, an error will
	 * be thrown.  To suppress this error and force the extension to be associated
	 * with the new type, pass `force`=true.  Alternatively, you may prefix the
	 * extension with "*" to map the type to extension, without mapping the
	 * extension to the type.
	 *
	 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
	 *
	 *
	 * @param map (Object) type definitions
	 * @param force (Boolean) if true, force overriding of existing definitions
	 */


	Mime$1.prototype.define = function (typeMap, force) {
	  for (let type in typeMap) {
	    let extensions = typeMap[type].map(function (t) {
	      return t.toLowerCase();
	    });
	    type = type.toLowerCase();

	    for (let i = 0; i < extensions.length; i++) {
	      const ext = extensions[i]; // '*' prefix = not the preferred type for this extension.  So fixup the
	      // extension, and skip it.

	      if (ext[0] === '*') {
	        continue;
	      }

	      if (!force && ext in this._types) {
	        throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
	      }

	      this._types[ext] = type;
	    } // Use first extension as default


	    if (force || !this._extensions[type]) {
	      const ext = extensions[0];
	      this._extensions[type] = ext[0] !== '*' ? ext : ext.substr(1);
	    }
	  }
	};
	/**
	 * Lookup a mime type based on extension
	 */


	Mime$1.prototype.getType = function (path) {
	  path = String(path);
	  let last = path.replace(/^.*[/\\]/, '').toLowerCase();
	  let ext = last.replace(/^.*\./, '').toLowerCase();
	  let hasPath = last.length < path.length;
	  let hasDot = ext.length < last.length - 1;
	  return (hasDot || !hasPath) && this._types[ext] || null;
	};
	/**
	 * Return file extension associated with a mime type
	 */


	Mime$1.prototype.getExtension = function (type) {
	  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
	  return type && this._extensions[type.toLowerCase()] || null;
	};

	var Mime_1 = Mime$1;

	var standard = {
	  "application/andrew-inset": ["ez"],
	  "application/applixware": ["aw"],
	  "application/atom+xml": ["atom"],
	  "application/atomcat+xml": ["atomcat"],
	  "application/atomdeleted+xml": ["atomdeleted"],
	  "application/atomsvc+xml": ["atomsvc"],
	  "application/atsc-dwd+xml": ["dwd"],
	  "application/atsc-held+xml": ["held"],
	  "application/atsc-rsat+xml": ["rsat"],
	  "application/bdoc": ["bdoc"],
	  "application/calendar+xml": ["xcs"],
	  "application/ccxml+xml": ["ccxml"],
	  "application/cdfx+xml": ["cdfx"],
	  "application/cdmi-capability": ["cdmia"],
	  "application/cdmi-container": ["cdmic"],
	  "application/cdmi-domain": ["cdmid"],
	  "application/cdmi-object": ["cdmio"],
	  "application/cdmi-queue": ["cdmiq"],
	  "application/cu-seeme": ["cu"],
	  "application/dash+xml": ["mpd"],
	  "application/davmount+xml": ["davmount"],
	  "application/docbook+xml": ["dbk"],
	  "application/dssc+der": ["dssc"],
	  "application/dssc+xml": ["xdssc"],
	  "application/ecmascript": ["es", "ecma"],
	  "application/emma+xml": ["emma"],
	  "application/emotionml+xml": ["emotionml"],
	  "application/epub+zip": ["epub"],
	  "application/exi": ["exi"],
	  "application/express": ["exp"],
	  "application/fdt+xml": ["fdt"],
	  "application/font-tdpfr": ["pfr"],
	  "application/geo+json": ["geojson"],
	  "application/gml+xml": ["gml"],
	  "application/gpx+xml": ["gpx"],
	  "application/gxf": ["gxf"],
	  "application/gzip": ["gz"],
	  "application/hjson": ["hjson"],
	  "application/hyperstudio": ["stk"],
	  "application/inkml+xml": ["ink", "inkml"],
	  "application/ipfix": ["ipfix"],
	  "application/its+xml": ["its"],
	  "application/java-archive": ["jar", "war", "ear"],
	  "application/java-serialized-object": ["ser"],
	  "application/java-vm": ["class"],
	  "application/javascript": ["js", "mjs"],
	  "application/json": ["json", "map"],
	  "application/json5": ["json5"],
	  "application/jsonml+json": ["jsonml"],
	  "application/ld+json": ["jsonld"],
	  "application/lgr+xml": ["lgr"],
	  "application/lost+xml": ["lostxml"],
	  "application/mac-binhex40": ["hqx"],
	  "application/mac-compactpro": ["cpt"],
	  "application/mads+xml": ["mads"],
	  "application/manifest+json": ["webmanifest"],
	  "application/marc": ["mrc"],
	  "application/marcxml+xml": ["mrcx"],
	  "application/mathematica": ["ma", "nb", "mb"],
	  "application/mathml+xml": ["mathml"],
	  "application/mbox": ["mbox"],
	  "application/mediaservercontrol+xml": ["mscml"],
	  "application/metalink+xml": ["metalink"],
	  "application/metalink4+xml": ["meta4"],
	  "application/mets+xml": ["mets"],
	  "application/mmt-aei+xml": ["maei"],
	  "application/mmt-usd+xml": ["musd"],
	  "application/mods+xml": ["mods"],
	  "application/mp21": ["m21", "mp21"],
	  "application/mp4": ["mp4s", "m4p"],
	  "application/msword": ["doc", "dot"],
	  "application/mxf": ["mxf"],
	  "application/n-quads": ["nq"],
	  "application/n-triples": ["nt"],
	  "application/node": ["cjs"],
	  "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"],
	  "application/oda": ["oda"],
	  "application/oebps-package+xml": ["opf"],
	  "application/ogg": ["ogx"],
	  "application/omdoc+xml": ["omdoc"],
	  "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
	  "application/oxps": ["oxps"],
	  "application/p2p-overlay+xml": ["relo"],
	  "application/patch-ops-error+xml": ["xer"],
	  "application/pdf": ["pdf"],
	  "application/pgp-encrypted": ["pgp"],
	  "application/pgp-signature": ["asc", "sig"],
	  "application/pics-rules": ["prf"],
	  "application/pkcs10": ["p10"],
	  "application/pkcs7-mime": ["p7m", "p7c"],
	  "application/pkcs7-signature": ["p7s"],
	  "application/pkcs8": ["p8"],
	  "application/pkix-attr-cert": ["ac"],
	  "application/pkix-cert": ["cer"],
	  "application/pkix-crl": ["crl"],
	  "application/pkix-pkipath": ["pkipath"],
	  "application/pkixcmp": ["pki"],
	  "application/pls+xml": ["pls"],
	  "application/postscript": ["ai", "eps", "ps"],
	  "application/provenance+xml": ["provx"],
	  "application/pskc+xml": ["pskcxml"],
	  "application/raml+yaml": ["raml"],
	  "application/rdf+xml": ["rdf", "owl"],
	  "application/reginfo+xml": ["rif"],
	  "application/relax-ng-compact-syntax": ["rnc"],
	  "application/resource-lists+xml": ["rl"],
	  "application/resource-lists-diff+xml": ["rld"],
	  "application/rls-services+xml": ["rs"],
	  "application/route-apd+xml": ["rapd"],
	  "application/route-s-tsid+xml": ["sls"],
	  "application/route-usd+xml": ["rusd"],
	  "application/rpki-ghostbusters": ["gbr"],
	  "application/rpki-manifest": ["mft"],
	  "application/rpki-roa": ["roa"],
	  "application/rsd+xml": ["rsd"],
	  "application/rss+xml": ["rss"],
	  "application/rtf": ["rtf"],
	  "application/sbml+xml": ["sbml"],
	  "application/scvp-cv-request": ["scq"],
	  "application/scvp-cv-response": ["scs"],
	  "application/scvp-vp-request": ["spq"],
	  "application/scvp-vp-response": ["spp"],
	  "application/sdp": ["sdp"],
	  "application/senml+xml": ["senmlx"],
	  "application/sensml+xml": ["sensmlx"],
	  "application/set-payment-initiation": ["setpay"],
	  "application/set-registration-initiation": ["setreg"],
	  "application/shf+xml": ["shf"],
	  "application/sieve": ["siv", "sieve"],
	  "application/smil+xml": ["smi", "smil"],
	  "application/sparql-query": ["rq"],
	  "application/sparql-results+xml": ["srx"],
	  "application/srgs": ["gram"],
	  "application/srgs+xml": ["grxml"],
	  "application/sru+xml": ["sru"],
	  "application/ssdl+xml": ["ssdl"],
	  "application/ssml+xml": ["ssml"],
	  "application/swid+xml": ["swidtag"],
	  "application/tei+xml": ["tei", "teicorpus"],
	  "application/thraud+xml": ["tfi"],
	  "application/timestamped-data": ["tsd"],
	  "application/toml": ["toml"],
	  "application/trig": ["trig"],
	  "application/ttml+xml": ["ttml"],
	  "application/ubjson": ["ubj"],
	  "application/urc-ressheet+xml": ["rsheet"],
	  "application/urc-targetdesc+xml": ["td"],
	  "application/voicexml+xml": ["vxml"],
	  "application/wasm": ["wasm"],
	  "application/widget": ["wgt"],
	  "application/winhlp": ["hlp"],
	  "application/wsdl+xml": ["wsdl"],
	  "application/wspolicy+xml": ["wspolicy"],
	  "application/xaml+xml": ["xaml"],
	  "application/xcap-att+xml": ["xav"],
	  "application/xcap-caps+xml": ["xca"],
	  "application/xcap-diff+xml": ["xdf"],
	  "application/xcap-el+xml": ["xel"],
	  "application/xcap-ns+xml": ["xns"],
	  "application/xenc+xml": ["xenc"],
	  "application/xhtml+xml": ["xhtml", "xht"],
	  "application/xliff+xml": ["xlf"],
	  "application/xml": ["xml", "xsl", "xsd", "rng"],
	  "application/xml-dtd": ["dtd"],
	  "application/xop+xml": ["xop"],
	  "application/xproc+xml": ["xpl"],
	  "application/xslt+xml": ["*xsl", "xslt"],
	  "application/xspf+xml": ["xspf"],
	  "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
	  "application/yang": ["yang"],
	  "application/yin+xml": ["yin"],
	  "application/zip": ["zip"],
	  "audio/3gpp": ["*3gpp"],
	  "audio/adpcm": ["adp"],
	  "audio/amr": ["amr"],
	  "audio/basic": ["au", "snd"],
	  "audio/midi": ["mid", "midi", "kar", "rmi"],
	  "audio/mobile-xmf": ["mxmf"],
	  "audio/mp3": ["*mp3"],
	  "audio/mp4": ["m4a", "mp4a"],
	  "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
	  "audio/ogg": ["oga", "ogg", "spx", "opus"],
	  "audio/s3m": ["s3m"],
	  "audio/silk": ["sil"],
	  "audio/wav": ["wav"],
	  "audio/wave": ["*wav"],
	  "audio/webm": ["weba"],
	  "audio/xm": ["xm"],
	  "font/collection": ["ttc"],
	  "font/otf": ["otf"],
	  "font/ttf": ["ttf"],
	  "font/woff": ["woff"],
	  "font/woff2": ["woff2"],
	  "image/aces": ["exr"],
	  "image/apng": ["apng"],
	  "image/avif": ["avif"],
	  "image/bmp": ["bmp"],
	  "image/cgm": ["cgm"],
	  "image/dicom-rle": ["drle"],
	  "image/emf": ["emf"],
	  "image/fits": ["fits"],
	  "image/g3fax": ["g3"],
	  "image/gif": ["gif"],
	  "image/heic": ["heic"],
	  "image/heic-sequence": ["heics"],
	  "image/heif": ["heif"],
	  "image/heif-sequence": ["heifs"],
	  "image/hej2k": ["hej2"],
	  "image/hsj2": ["hsj2"],
	  "image/ief": ["ief"],
	  "image/jls": ["jls"],
	  "image/jp2": ["jp2", "jpg2"],
	  "image/jpeg": ["jpeg", "jpg", "jpe"],
	  "image/jph": ["jph"],
	  "image/jphc": ["jhc"],
	  "image/jpm": ["jpm"],
	  "image/jpx": ["jpx", "jpf"],
	  "image/jxr": ["jxr"],
	  "image/jxra": ["jxra"],
	  "image/jxrs": ["jxrs"],
	  "image/jxs": ["jxs"],
	  "image/jxsc": ["jxsc"],
	  "image/jxsi": ["jxsi"],
	  "image/jxss": ["jxss"],
	  "image/ktx": ["ktx"],
	  "image/ktx2": ["ktx2"],
	  "image/png": ["png"],
	  "image/sgi": ["sgi"],
	  "image/svg+xml": ["svg", "svgz"],
	  "image/t38": ["t38"],
	  "image/tiff": ["tif", "tiff"],
	  "image/tiff-fx": ["tfx"],
	  "image/webp": ["webp"],
	  "image/wmf": ["wmf"],
	  "message/disposition-notification": ["disposition-notification"],
	  "message/global": ["u8msg"],
	  "message/global-delivery-status": ["u8dsn"],
	  "message/global-disposition-notification": ["u8mdn"],
	  "message/global-headers": ["u8hdr"],
	  "message/rfc822": ["eml", "mime"],
	  "model/3mf": ["3mf"],
	  "model/gltf+json": ["gltf"],
	  "model/gltf-binary": ["glb"],
	  "model/iges": ["igs", "iges"],
	  "model/mesh": ["msh", "mesh", "silo"],
	  "model/mtl": ["mtl"],
	  "model/obj": ["obj"],
	  "model/step+xml": ["stpx"],
	  "model/step+zip": ["stpz"],
	  "model/step-xml+zip": ["stpxz"],
	  "model/stl": ["stl"],
	  "model/vrml": ["wrl", "vrml"],
	  "model/x3d+binary": ["*x3db", "x3dbz"],
	  "model/x3d+fastinfoset": ["x3db"],
	  "model/x3d+vrml": ["*x3dv", "x3dvz"],
	  "model/x3d+xml": ["x3d", "x3dz"],
	  "model/x3d-vrml": ["x3dv"],
	  "text/cache-manifest": ["appcache", "manifest"],
	  "text/calendar": ["ics", "ifb"],
	  "text/coffeescript": ["coffee", "litcoffee"],
	  "text/css": ["css"],
	  "text/csv": ["csv"],
	  "text/html": ["html", "htm", "shtml"],
	  "text/jade": ["jade"],
	  "text/jsx": ["jsx"],
	  "text/less": ["less"],
	  "text/markdown": ["markdown", "md"],
	  "text/mathml": ["mml"],
	  "text/mdx": ["mdx"],
	  "text/n3": ["n3"],
	  "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
	  "text/richtext": ["rtx"],
	  "text/rtf": ["*rtf"],
	  "text/sgml": ["sgml", "sgm"],
	  "text/shex": ["shex"],
	  "text/slim": ["slim", "slm"],
	  "text/spdx": ["spdx"],
	  "text/stylus": ["stylus", "styl"],
	  "text/tab-separated-values": ["tsv"],
	  "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
	  "text/turtle": ["ttl"],
	  "text/uri-list": ["uri", "uris", "urls"],
	  "text/vcard": ["vcard"],
	  "text/vtt": ["vtt"],
	  "text/xml": ["*xml"],
	  "text/yaml": ["yaml", "yml"],
	  "video/3gpp": ["3gp", "3gpp"],
	  "video/3gpp2": ["3g2"],
	  "video/h261": ["h261"],
	  "video/h263": ["h263"],
	  "video/h264": ["h264"],
	  "video/iso.segment": ["m4s"],
	  "video/jpeg": ["jpgv"],
	  "video/jpm": ["*jpm", "jpgm"],
	  "video/mj2": ["mj2", "mjp2"],
	  "video/mp2t": ["ts"],
	  "video/mp4": ["mp4", "mp4v", "mpg4"],
	  "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
	  "video/ogg": ["ogv"],
	  "video/quicktime": ["qt", "mov"],
	  "video/webm": ["webm"]
	};

	let Mime = Mime_1;
	var lite = new Mime(standard);

	var picomatch$2 = {exports: {}};

	var makeBuiltIn = makeBuiltIn$3.exports;
	var defineProperty$2 = objectDefineProperty;

	var defineBuiltInAccessor$1 = function (target, name, descriptor) {
	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
	  return defineProperty$2.f(target, name, descriptor);
	};

	var global$7 = global$l;
	var DESCRIPTORS$4 = descriptors;
	var defineBuiltInAccessor = defineBuiltInAccessor$1;
	var regExpFlags = regexpFlags$1;
	var fails$7 = fails$n;

	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
	var RegExp$1 = global$7.RegExp;
	var RegExpPrototype = RegExp$1.prototype;

	var FORCED = DESCRIPTORS$4 && fails$7(function () {
	  var INDICES_SUPPORT = true;
	  try {
	    RegExp$1('.', 'd');
	  } catch (error) {
	    INDICES_SUPPORT = false;
	  }

	  var O = {};
	  // modern V8 bug
	  var calls = '';
	  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

	  var addGetter = function (key, chr) {
	    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
	    Object.defineProperty(O, key, { get: function () {
	      calls += chr;
	      return true;
	    } });
	  };

	  var pairs = {
	    dotAll: 's',
	    global: 'g',
	    ignoreCase: 'i',
	    multiline: 'm',
	    sticky: 'y'
	  };

	  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

	  for (var key in pairs) addGetter(key, pairs[key]);

	  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

	  return result !== expected || calls !== expected;
	});

	// `RegExp.prototype.flags` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
	  configurable: true,
	  get: regExpFlags
	});

	const basename = path => {
	  var start = 0;
	  var end = -1;
	  var matchedSlash = true;
	  var i;

	  for (i = path.length - 1; i >= 0; --i) {
	    if (path.charCodeAt(i) === 47) {
	      // If we reached a path separator that was not part of a set of path
	      // separators at the end of the string, stop now
	      if (!matchedSlash) {
	        start = i + 1;
	        break;
	      }
	    } else if (end === -1) {
	      // We saw the first non-path separator, mark this as the end of our
	      // path component
	      matchedSlash = false;
	      end = i + 1;
	    }
	  }

	  if (end === -1) {
	    return '';
	  }

	  return path.slice(start, end);
	};

	var path$1 = {
	  basename
	};

	var utils$3 = {};

	const WIN_SLASH = '\\\\/';
	const WIN_NO_SLASH = "[^".concat(WIN_SLASH, "]");
	/**
	 * Posix glob regex
	 */

	const DOT_LITERAL = '\\.';
	const PLUS_LITERAL = '\\+';
	const QMARK_LITERAL = '\\?';
	const SLASH_LITERAL = '\\/';
	const ONE_CHAR = '(?=.)';
	const QMARK = '[^/]';
	const END_ANCHOR = "(?:".concat(SLASH_LITERAL, "|$)");
	const START_ANCHOR = "(?:^|".concat(SLASH_LITERAL, ")");
	const DOTS_SLASH = "".concat(DOT_LITERAL, "{1,2}").concat(END_ANCHOR);
	const NO_DOT = "(?!".concat(DOT_LITERAL, ")");
	const NO_DOTS = "(?!".concat(START_ANCHOR).concat(DOTS_SLASH, ")");
	const NO_DOT_SLASH = "(?!".concat(DOT_LITERAL, "{0,1}").concat(END_ANCHOR, ")");
	const NO_DOTS_SLASH = "(?!".concat(DOTS_SLASH, ")");
	const QMARK_NO_DOT = "[^.".concat(SLASH_LITERAL, "]");
	const STAR = "".concat(QMARK, "*?");
	const POSIX_CHARS = {
	  DOT_LITERAL,
	  PLUS_LITERAL,
	  QMARK_LITERAL,
	  SLASH_LITERAL,
	  ONE_CHAR,
	  QMARK,
	  END_ANCHOR,
	  DOTS_SLASH,
	  NO_DOT,
	  NO_DOTS,
	  NO_DOT_SLASH,
	  NO_DOTS_SLASH,
	  QMARK_NO_DOT,
	  STAR,
	  START_ANCHOR
	};
	/**
	 * Windows glob regex
	 */

	const WINDOWS_CHARS = { ...POSIX_CHARS,
	  SLASH_LITERAL: "[".concat(WIN_SLASH, "]"),
	  QMARK: WIN_NO_SLASH,
	  STAR: "".concat(WIN_NO_SLASH, "*?"),
	  DOTS_SLASH: "".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$)"),
	  NO_DOT: "(?!".concat(DOT_LITERAL, ")"),
	  NO_DOTS: "(?!(?:^|[".concat(WIN_SLASH, "])").concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
	  NO_DOT_SLASH: "(?!".concat(DOT_LITERAL, "{0,1}(?:[").concat(WIN_SLASH, "]|$))"),
	  NO_DOTS_SLASH: "(?!".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
	  QMARK_NO_DOT: "[^.".concat(WIN_SLASH, "]"),
	  START_ANCHOR: "(?:^|[".concat(WIN_SLASH, "])"),
	  END_ANCHOR: "(?:[".concat(WIN_SLASH, "]|$)")
	};
	/**
	 * POSIX Bracket Regex
	 */

	const POSIX_REGEX_SOURCE$1 = {
	  alnum: 'a-zA-Z0-9',
	  alpha: 'a-zA-Z',
	  ascii: '\\x00-\\x7F',
	  blank: ' \\t',
	  cntrl: '\\x00-\\x1F\\x7F',
	  digit: '0-9',
	  graph: '\\x21-\\x7E',
	  lower: 'a-z',
	  print: '\\x20-\\x7E ',
	  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
	  space: ' \\t\\r\\n\\v\\f',
	  upper: 'A-Z',
	  word: 'A-Za-z0-9_',
	  xdigit: 'A-Fa-f0-9'
	};
	var constants$2 = {
	  MAX_LENGTH: 1024 * 64,
	  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,
	  // regular expressions
	  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
	  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
	  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
	  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
	  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
	  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
	  // Replace globs with equivalent patterns to reduce parsing time.
	  REPLACEMENTS: {
	    '***': '*',
	    '**/**': '**',
	    '**/**/**': '**'
	  },
	  // Digits
	  CHAR_0: 48,

	  /* 0 */
	  CHAR_9: 57,

	  /* 9 */
	  // Alphabet chars.
	  CHAR_UPPERCASE_A: 65,

	  /* A */
	  CHAR_LOWERCASE_A: 97,

	  /* a */
	  CHAR_UPPERCASE_Z: 90,

	  /* Z */
	  CHAR_LOWERCASE_Z: 122,

	  /* z */
	  CHAR_LEFT_PARENTHESES: 40,

	  /* ( */
	  CHAR_RIGHT_PARENTHESES: 41,

	  /* ) */
	  CHAR_ASTERISK: 42,

	  /* * */
	  // Non-alphabetic chars.
	  CHAR_AMPERSAND: 38,

	  /* & */
	  CHAR_AT: 64,

	  /* @ */
	  CHAR_BACKWARD_SLASH: 92,

	  /* \ */
	  CHAR_CARRIAGE_RETURN: 13,

	  /* \r */
	  CHAR_CIRCUMFLEX_ACCENT: 94,

	  /* ^ */
	  CHAR_COLON: 58,

	  /* : */
	  CHAR_COMMA: 44,

	  /* , */
	  CHAR_DOT: 46,

	  /* . */
	  CHAR_DOUBLE_QUOTE: 34,

	  /* " */
	  CHAR_EQUAL: 61,

	  /* = */
	  CHAR_EXCLAMATION_MARK: 33,

	  /* ! */
	  CHAR_FORM_FEED: 12,

	  /* \f */
	  CHAR_FORWARD_SLASH: 47,

	  /* / */
	  CHAR_GRAVE_ACCENT: 96,

	  /* ` */
	  CHAR_HASH: 35,

	  /* # */
	  CHAR_HYPHEN_MINUS: 45,

	  /* - */
	  CHAR_LEFT_ANGLE_BRACKET: 60,

	  /* < */
	  CHAR_LEFT_CURLY_BRACE: 123,

	  /* { */
	  CHAR_LEFT_SQUARE_BRACKET: 91,

	  /* [ */
	  CHAR_LINE_FEED: 10,

	  /* \n */
	  CHAR_NO_BREAK_SPACE: 160,

	  /* \u00A0 */
	  CHAR_PERCENT: 37,

	  /* % */
	  CHAR_PLUS: 43,

	  /* + */
	  CHAR_QUESTION_MARK: 63,

	  /* ? */
	  CHAR_RIGHT_ANGLE_BRACKET: 62,

	  /* > */
	  CHAR_RIGHT_CURLY_BRACE: 125,

	  /* } */
	  CHAR_RIGHT_SQUARE_BRACKET: 93,

	  /* ] */
	  CHAR_SEMICOLON: 59,

	  /* ; */
	  CHAR_SINGLE_QUOTE: 39,

	  /* ' */
	  CHAR_SPACE: 32,

	  /*   */
	  CHAR_TAB: 9,

	  /* \t */
	  CHAR_UNDERSCORE: 95,

	  /* _ */
	  CHAR_VERTICAL_LINE: 124,

	  /* | */
	  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,

	  /* \uFEFF */
	  SEP: '/',

	  /**
	   * Create EXTGLOB_CHARS
	   */
	  extglobChars(chars) {
	    return {
	      '!': {
	        type: 'negate',
	        open: '(?:(?!(?:',
	        close: "))".concat(chars.STAR, ")")
	      },
	      '?': {
	        type: 'qmark',
	        open: '(?:',
	        close: ')?'
	      },
	      '+': {
	        type: 'plus',
	        open: '(?:',
	        close: ')+'
	      },
	      '*': {
	        type: 'star',
	        open: '(?:',
	        close: ')*'
	      },
	      '@': {
	        type: 'at',
	        open: '(?:',
	        close: ')'
	      }
	    };
	  },

	  /**
	   * Create GLOB_CHARS
	   */
	  globChars() {
	    let win32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
	  }

	};

	(function (exports) {

	  const {
	    REGEX_BACKSLASH,
	    REGEX_REMOVE_BACKSLASH,
	    REGEX_SPECIAL_CHARS,
	    REGEX_SPECIAL_CHARS_GLOBAL
	  } = constants$2;

	  exports.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);

	  exports.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);

	  exports.isRegexChar = str => str.length === 1 && exports.hasRegexChars(str);

	  exports.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');

	  exports.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

	  exports.removeBackslashes = str => {
	    return str.replace(REGEX_REMOVE_BACKSLASH, match => {
	      return match === '\\' ? '' : match;
	    });
	  };

	  exports.isWindows = options => {
	    if (options && typeof options.windows === 'boolean') {
	      return options.windows;
	    }

	    return false;
	  };

	  exports.escapeLast = (input, char, lastIdx) => {
	    const idx = input.lastIndexOf(char, lastIdx);
	    if (idx === -1) return input;
	    if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
	    return "".concat(input.slice(0, idx), "\\").concat(input.slice(idx));
	  };

	  exports.removePrefix = function (input) {
	    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    let output = input;

	    if (output.startsWith('./')) {
	      output = output.slice(2);
	      state.prefix = './';
	    }

	    return output;
	  };

	  exports.wrapOutput = function (input) {
	    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    const prepend = options.contains ? '' : '^';
	    const append = options.contains ? '' : '$';
	    let output = "".concat(prepend, "(?:").concat(input, ")").concat(append);

	    if (state.negated === true) {
	      output = "(?:^(?!".concat(output, ").*$)");
	    }

	    return output;
	  };
	})(utils$3);

	const utils$2 = utils$3;
	const {
	  CHAR_ASTERISK,

	  /* * */
	  CHAR_AT,

	  /* @ */
	  CHAR_BACKWARD_SLASH,

	  /* \ */
	  CHAR_COMMA,

	  /* , */
	  CHAR_DOT,

	  /* . */
	  CHAR_EXCLAMATION_MARK,

	  /* ! */
	  CHAR_FORWARD_SLASH,

	  /* / */
	  CHAR_LEFT_CURLY_BRACE,

	  /* { */
	  CHAR_LEFT_PARENTHESES,

	  /* ( */
	  CHAR_LEFT_SQUARE_BRACKET,

	  /* [ */
	  CHAR_PLUS,

	  /* + */
	  CHAR_QUESTION_MARK,

	  /* ? */
	  CHAR_RIGHT_CURLY_BRACE,

	  /* } */
	  CHAR_RIGHT_PARENTHESES,

	  /* ) */
	  CHAR_RIGHT_SQUARE_BRACKET
	  /* ] */

	} = constants$2;

	const isPathSeparator = code => {
	  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
	};

	const depth = token => {
	  if (token.isPrefix !== true) {
	    token.depth = token.isGlobstar ? Infinity : 1;
	  }
	};
	/**
	 * Quickly scans a glob pattern and returns an object with a handful of
	 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
	 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
	 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
	 *
	 * ```js
	 * const pm = require('picomatch');
	 * console.log(pm.scan('foo/bar/*.js'));
	 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
	 * ```
	 * @param {String} `str`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with tokens and regex source string.
	 * @api public
	 */


	const scan$1 = (input, options) => {
	  const opts = options || {};
	  const length = input.length - 1;
	  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
	  const slashes = [];
	  const tokens = [];
	  const parts = [];
	  let str = input;
	  let index = -1;
	  let start = 0;
	  let lastIndex = 0;
	  let isBrace = false;
	  let isBracket = false;
	  let isGlob = false;
	  let isExtglob = false;
	  let isGlobstar = false;
	  let braceEscaped = false;
	  let backslashes = false;
	  let negated = false;
	  let negatedExtglob = false;
	  let finished = false;
	  let braces = 0;
	  let prev;
	  let code;
	  let token = {
	    value: '',
	    depth: 0,
	    isGlob: false
	  };

	  const eos = () => index >= length;

	  const peek = () => str.charCodeAt(index + 1);

	  const advance = () => {
	    prev = code;
	    return str.charCodeAt(++index);
	  };

	  while (index < length) {
	    code = advance();
	    let next;

	    if (code === CHAR_BACKWARD_SLASH) {
	      backslashes = token.backslashes = true;
	      code = advance();

	      if (code === CHAR_LEFT_CURLY_BRACE) {
	        braceEscaped = true;
	      }

	      continue;
	    }

	    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
	      braces++;

	      while (eos() !== true && (code = advance())) {
	        if (code === CHAR_BACKWARD_SLASH) {
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (code === CHAR_LEFT_CURLY_BRACE) {
	          braces++;
	          continue;
	        }

	        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
	          finished = true;

	          if (scanToEnd === true) {
	            continue;
	          }

	          break;
	        }

	        if (braceEscaped !== true && code === CHAR_COMMA) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
	          finished = true;

	          if (scanToEnd === true) {
	            continue;
	          }

	          break;
	        }

	        if (code === CHAR_RIGHT_CURLY_BRACE) {
	          braces--;

	          if (braces === 0) {
	            braceEscaped = false;
	            isBrace = token.isBrace = true;
	            finished = true;
	            break;
	          }
	        }
	      }

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }

	    if (code === CHAR_FORWARD_SLASH) {
	      slashes.push(index);
	      tokens.push(token);
	      token = {
	        value: '',
	        depth: 0,
	        isGlob: false
	      };
	      if (finished === true) continue;

	      if (prev === CHAR_DOT && index === start + 1) {
	        start += 2;
	        continue;
	      }

	      lastIndex = index + 1;
	      continue;
	    }

	    if (opts.noext !== true) {
	      const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;

	      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
	        isGlob = token.isGlob = true;
	        isExtglob = token.isExtglob = true;
	        finished = true;

	        if (code === CHAR_EXCLAMATION_MARK && index === start) {
	          negatedExtglob = true;
	        }

	        if (scanToEnd === true) {
	          while (eos() !== true && (code = advance())) {
	            if (code === CHAR_BACKWARD_SLASH) {
	              backslashes = token.backslashes = true;
	              code = advance();
	              continue;
	            }

	            if (code === CHAR_RIGHT_PARENTHESES) {
	              isGlob = token.isGlob = true;
	              finished = true;
	              break;
	            }
	          }

	          continue;
	        }

	        break;
	      }
	    }

	    if (code === CHAR_ASTERISK) {
	      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }

	    if (code === CHAR_QUESTION_MARK) {
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }

	    if (code === CHAR_LEFT_SQUARE_BRACKET) {
	      while (eos() !== true && (next = advance())) {
	        if (next === CHAR_BACKWARD_SLASH) {
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
	          isBracket = token.isBracket = true;
	          isGlob = token.isGlob = true;
	          finished = true;
	          break;
	        }
	      }

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }

	    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
	      negated = token.negated = true;
	      start++;
	      continue;
	    }

	    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
	      isGlob = token.isGlob = true;

	      if (scanToEnd === true) {
	        while (eos() !== true && (code = advance())) {
	          if (code === CHAR_LEFT_PARENTHESES) {
	            backslashes = token.backslashes = true;
	            code = advance();
	            continue;
	          }

	          if (code === CHAR_RIGHT_PARENTHESES) {
	            finished = true;
	            break;
	          }
	        }

	        continue;
	      }

	      break;
	    }

	    if (isGlob === true) {
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }
	  }

	  if (opts.noext === true) {
	    isExtglob = false;
	    isGlob = false;
	  }

	  let base = str;
	  let prefix = '';
	  let glob = '';

	  if (start > 0) {
	    prefix = str.slice(0, start);
	    str = str.slice(start);
	    lastIndex -= start;
	  }

	  if (base && isGlob === true && lastIndex > 0) {
	    base = str.slice(0, lastIndex);
	    glob = str.slice(lastIndex);
	  } else if (isGlob === true) {
	    base = '';
	    glob = str;
	  } else {
	    base = str;
	  }

	  if (base && base !== '' && base !== '/' && base !== str) {
	    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
	      base = base.slice(0, -1);
	    }
	  }

	  if (opts.unescape === true) {
	    if (glob) glob = utils$2.removeBackslashes(glob);

	    if (base && backslashes === true) {
	      base = utils$2.removeBackslashes(base);
	    }
	  }

	  const state = {
	    prefix,
	    input,
	    start,
	    base,
	    glob,
	    isBrace,
	    isBracket,
	    isGlob,
	    isExtglob,
	    isGlobstar,
	    negated,
	    negatedExtglob
	  };

	  if (opts.tokens === true) {
	    state.maxDepth = 0;

	    if (!isPathSeparator(code)) {
	      tokens.push(token);
	    }

	    state.tokens = tokens;
	  }

	  if (opts.parts === true || opts.tokens === true) {
	    let prevIndex;

	    for (let idx = 0; idx < slashes.length; idx++) {
	      const n = prevIndex ? prevIndex + 1 : start;
	      const i = slashes[idx];
	      const value = input.slice(n, i);

	      if (opts.tokens) {
	        if (idx === 0 && start !== 0) {
	          tokens[idx].isPrefix = true;
	          tokens[idx].value = prefix;
	        } else {
	          tokens[idx].value = value;
	        }

	        depth(tokens[idx]);
	        state.maxDepth += tokens[idx].depth;
	      }

	      if (idx !== 0 || value !== '') {
	        parts.push(value);
	      }

	      prevIndex = i;
	    }

	    if (prevIndex && prevIndex + 1 < input.length) {
	      const value = input.slice(prevIndex + 1);
	      parts.push(value);

	      if (opts.tokens) {
	        tokens[tokens.length - 1].value = value;
	        depth(tokens[tokens.length - 1]);
	        state.maxDepth += tokens[tokens.length - 1].depth;
	      }
	    }

	    state.slashes = slashes;
	    state.parts = parts;
	  }

	  return state;
	};

	var scan_1 = scan$1;

	var $$1 = _export;
	var $includes = arrayIncludes.includes;
	var fails$6 = fails$n;
	var addToUnscopables = addToUnscopables$2;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$6(function () {
	  return !Array(1).includes();
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$1({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');

	const constants$1 = constants$2;
	const utils$1 = utils$3;
	/**
	 * Constants
	 */

	const {
	  MAX_LENGTH,
	  POSIX_REGEX_SOURCE,
	  REGEX_NON_SPECIAL_CHARS,
	  REGEX_SPECIAL_CHARS_BACKREF,
	  REPLACEMENTS
	} = constants$1;
	/**
	 * Helpers
	 */

	const expandRange = (args, options) => {
	  if (typeof options.expandRange === 'function') {
	    return options.expandRange(...args, options);
	  }

	  args.sort();
	  const value = "[".concat(args.join('-'), "]");

	  try {
	    /* eslint-disable-next-line no-new */
	    new RegExp(value);
	  } catch (ex) {
	    return args.map(v => utils$1.escapeRegex(v)).join('..');
	  }

	  return value;
	};
	/**
	 * Create the message for a syntax error
	 */


	const syntaxError = (type, char) => {
	  return "Missing ".concat(type, ": \"").concat(char, "\" - use \"\\\\").concat(char, "\" to match literal characters");
	};
	/**
	 * Parse the given input string.
	 * @param {String} input
	 * @param {Object} options
	 * @return {Object}
	 */


	const parse$1 = (input, options) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected a string');
	  }

	  input = REPLACEMENTS[input] || input;
	  const opts = { ...options
	  };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
	  let len = input.length;

	  if (len > max) {
	    throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
	  }

	  const bos = {
	    type: 'bos',
	    value: '',
	    output: opts.prepend || ''
	  };
	  const tokens = [bos];
	  const capture = opts.capture ? '' : '?:';
	  const PLATFORM_CHARS = constants$1.globChars();
	  const EXTGLOB_CHARS = constants$1.extglobChars(PLATFORM_CHARS);
	  const {
	    DOT_LITERAL,
	    PLUS_LITERAL,
	    SLASH_LITERAL,
	    ONE_CHAR,
	    DOTS_SLASH,
	    NO_DOT,
	    NO_DOT_SLASH,
	    NO_DOTS_SLASH,
	    QMARK,
	    QMARK_NO_DOT,
	    STAR,
	    START_ANCHOR
	  } = PLATFORM_CHARS;

	  const globstar = opts => {
	    return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
	  };

	  const nodot = opts.dot ? '' : NO_DOT;
	  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
	  let star = opts.bash === true ? globstar(opts) : STAR;

	  if (opts.capture) {
	    star = "(".concat(star, ")");
	  } // minimatch options support


	  if (typeof opts.noext === 'boolean') {
	    opts.noextglob = opts.noext;
	  }

	  const state = {
	    input,
	    index: -1,
	    start: 0,
	    dot: opts.dot === true,
	    consumed: '',
	    output: '',
	    prefix: '',
	    backtrack: false,
	    negated: false,
	    brackets: 0,
	    braces: 0,
	    parens: 0,
	    quotes: 0,
	    globstar: false,
	    tokens
	  };
	  input = utils$1.removePrefix(input, state);
	  len = input.length;
	  const extglobs = [];
	  const braces = [];
	  const stack = [];
	  let prev = bos;
	  let value;
	  /**
	   * Tokenizing helpers
	   */

	  const eos = () => state.index === len - 1;

	  const peek = state.peek = function () {
	    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	    return input[state.index + n];
	  };

	  const advance = state.advance = () => input[++state.index] || '';

	  const remaining = () => input.slice(state.index + 1);

	  const consume = function () {
	    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    let num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    state.consumed += value;
	    state.index += num;
	  };

	  const append = token => {
	    state.output += token.output != null ? token.output : token.value;
	    consume(token.value);
	  };

	  const negate = () => {
	    let count = 1;

	    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
	      advance();
	      state.start++;
	      count++;
	    }

	    if (count % 2 === 0) {
	      return false;
	    }

	    state.negated = true;
	    state.start++;
	    return true;
	  };

	  const increment = type => {
	    state[type]++;
	    stack.push(type);
	  };

	  const decrement = type => {
	    state[type]--;
	    stack.pop();
	  };
	  /**
	   * Push tokens onto the tokens array. This helper speeds up
	   * tokenizing by 1) helping us avoid backtracking as much as possible,
	   * and 2) helping us avoid creating extra tokens when consecutive
	   * characters are plain text. This improves performance and simplifies
	   * lookbehinds.
	   */


	  const push = tok => {
	    if (prev.type === 'globstar') {
	      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
	      const isExtglob = tok.extglob === true || extglobs.length && (tok.type === 'pipe' || tok.type === 'paren');

	      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
	        state.output = state.output.slice(0, -prev.output.length);
	        prev.type = 'star';
	        prev.value = '*';
	        prev.output = star;
	        state.output += prev.output;
	      }
	    }

	    if (extglobs.length && tok.type !== 'paren') {
	      extglobs[extglobs.length - 1].inner += tok.value;
	    }

	    if (tok.value || tok.output) append(tok);

	    if (prev && prev.type === 'text' && tok.type === 'text') {
	      prev.value += tok.value;
	      prev.output = (prev.output || '') + tok.value;
	      return;
	    }

	    tok.prev = prev;
	    tokens.push(tok);
	    prev = tok;
	  };

	  const extglobOpen = (type, value) => {
	    const token = { ...EXTGLOB_CHARS[value],
	      conditions: 1,
	      inner: ''
	    };
	    token.prev = prev;
	    token.parens = state.parens;
	    token.output = state.output;
	    const output = (opts.capture ? '(' : '') + token.open;
	    increment('parens');
	    push({
	      type,
	      value,
	      output: state.output ? '' : ONE_CHAR
	    });
	    push({
	      type: 'paren',
	      extglob: true,
	      value: advance(),
	      output
	    });
	    extglobs.push(token);
	  };

	  const extglobClose = token => {
	    let output = token.close + (opts.capture ? ')' : '');
	    let rest;

	    if (token.type === 'negate') {
	      let extglobStar = star;

	      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
	        extglobStar = globstar(opts);
	      }

	      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
	        output = token.close = ")$))".concat(extglobStar);
	      }

	      if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
	        // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
	        // In this case, we need to parse the string and use it in the output of the original pattern.
	        // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
	        //
	        // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
	        const expression = parse$1(rest, { ...options,
	          fastpaths: false
	        }).output;
	        output = token.close = ")".concat(expression, ")").concat(extglobStar, ")");
	      }

	      if (token.prev.type === 'bos') {
	        state.negatedExtglob = true;
	      }
	    }

	    push({
	      type: 'paren',
	      extglob: true,
	      value,
	      output
	    });
	    decrement('parens');
	  };
	  /**
	   * Fast paths
	   */


	  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
	    let backslashes = false;
	    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
	      if (first === '\\') {
	        backslashes = true;
	        return m;
	      }

	      if (first === '?') {
	        if (esc) {
	          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
	        }

	        if (index === 0) {
	          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
	        }

	        return QMARK.repeat(chars.length);
	      }

	      if (first === '.') {
	        return DOT_LITERAL.repeat(chars.length);
	      }

	      if (first === '*') {
	        if (esc) {
	          return esc + first + (rest ? star : '');
	        }

	        return star;
	      }

	      return esc ? m : "\\".concat(m);
	    });

	    if (backslashes === true) {
	      if (opts.unescape === true) {
	        output = output.replace(/\\/g, '');
	      } else {
	        output = output.replace(/\\+/g, m => {
	          return m.length % 2 === 0 ? '\\\\' : m ? '\\' : '';
	        });
	      }
	    }

	    if (output === input && opts.contains === true) {
	      state.output = input;
	      return state;
	    }

	    state.output = utils$1.wrapOutput(output, state, options);
	    return state;
	  }
	  /**
	   * Tokenize input until we reach end-of-string
	   */


	  while (!eos()) {
	    value = advance();

	    if (value === '\u0000') {
	      continue;
	    }
	    /**
	     * Escaped characters
	     */


	    if (value === '\\') {
	      const next = peek();

	      if (next === '/' && opts.bash !== true) {
	        continue;
	      }

	      if (next === '.' || next === ';') {
	        continue;
	      }

	      if (!next) {
	        value += '\\';
	        push({
	          type: 'text',
	          value
	        });
	        continue;
	      } // collapse slashes to reduce potential for exploits


	      const match = /^\\+/.exec(remaining());
	      let slashes = 0;

	      if (match && match[0].length > 2) {
	        slashes = match[0].length;
	        state.index += slashes;

	        if (slashes % 2 !== 0) {
	          value += '\\';
	        }
	      }

	      if (opts.unescape === true) {
	        value = advance();
	      } else {
	        value += advance();
	      }

	      if (state.brackets === 0) {
	        push({
	          type: 'text',
	          value
	        });
	        continue;
	      }
	    }
	    /**
	     * If we're inside a regex character class, continue
	     * until we reach the closing bracket.
	     */


	    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
	      if (opts.posix !== false && value === ':') {
	        const inner = prev.value.slice(1);

	        if (inner.includes('[')) {
	          prev.posix = true;

	          if (inner.includes(':')) {
	            const idx = prev.value.lastIndexOf('[');
	            const pre = prev.value.slice(0, idx);
	            const rest = prev.value.slice(idx + 2);
	            const posix = POSIX_REGEX_SOURCE[rest];

	            if (posix) {
	              prev.value = pre + posix;
	              state.backtrack = true;
	              advance();

	              if (!bos.output && tokens.indexOf(prev) === 1) {
	                bos.output = ONE_CHAR;
	              }

	              continue;
	            }
	          }
	        }
	      }

	      if (value === '[' && peek() !== ':' || value === '-' && peek() === ']') {
	        value = "\\".concat(value);
	      }

	      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
	        value = "\\".concat(value);
	      }

	      if (opts.posix === true && value === '!' && prev.value === '[') {
	        value = '^';
	      }

	      prev.value += value;
	      append({
	        value
	      });
	      continue;
	    }
	    /**
	     * If we're inside a quoted string, continue
	     * until we reach the closing double quote.
	     */


	    if (state.quotes === 1 && value !== '"') {
	      value = utils$1.escapeRegex(value);
	      prev.value += value;
	      append({
	        value
	      });
	      continue;
	    }
	    /**
	     * Double quotes
	     */


	    if (value === '"') {
	      state.quotes = state.quotes === 1 ? 0 : 1;

	      if (opts.keepQuotes === true) {
	        push({
	          type: 'text',
	          value
	        });
	      }

	      continue;
	    }
	    /**
	     * Parentheses
	     */


	    if (value === '(') {
	      increment('parens');
	      push({
	        type: 'paren',
	        value
	      });
	      continue;
	    }

	    if (value === ')') {
	      if (state.parens === 0 && opts.strictBrackets === true) {
	        throw new SyntaxError(syntaxError('opening', '('));
	      }

	      const extglob = extglobs[extglobs.length - 1];

	      if (extglob && state.parens === extglob.parens + 1) {
	        extglobClose(extglobs.pop());
	        continue;
	      }

	      push({
	        type: 'paren',
	        value,
	        output: state.parens ? ')' : '\\)'
	      });
	      decrement('parens');
	      continue;
	    }
	    /**
	     * Square brackets
	     */


	    if (value === '[') {
	      if (opts.nobracket === true || !remaining().includes(']')) {
	        if (opts.nobracket !== true && opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('closing', ']'));
	        }

	        value = "\\".concat(value);
	      } else {
	        increment('brackets');
	      }

	      push({
	        type: 'bracket',
	        value
	      });
	      continue;
	    }

	    if (value === ']') {
	      if (opts.nobracket === true || prev && prev.type === 'bracket' && prev.value.length === 1) {
	        push({
	          type: 'text',
	          value,
	          output: "\\".concat(value)
	        });
	        continue;
	      }

	      if (state.brackets === 0) {
	        if (opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('opening', '['));
	        }

	        push({
	          type: 'text',
	          value,
	          output: "\\".concat(value)
	        });
	        continue;
	      }

	      decrement('brackets');
	      const prevValue = prev.value.slice(1);

	      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
	        value = "/".concat(value);
	      }

	      prev.value += value;
	      append({
	        value
	      }); // when literal brackets are explicitly disabled
	      // assume we should match with a regex character class

	      if (opts.literalBrackets === false || utils$1.hasRegexChars(prevValue)) {
	        continue;
	      }

	      const escaped = utils$1.escapeRegex(prev.value);
	      state.output = state.output.slice(0, -prev.value.length); // when literal brackets are explicitly enabled
	      // assume we should escape the brackets to match literal characters

	      if (opts.literalBrackets === true) {
	        state.output += escaped;
	        prev.value = escaped;
	        continue;
	      } // when the user specifies nothing, try to match both


	      prev.value = "(".concat(capture).concat(escaped, "|").concat(prev.value, ")");
	      state.output += prev.value;
	      continue;
	    }
	    /**
	     * Braces
	     */


	    if (value === '{' && opts.nobrace !== true) {
	      increment('braces');
	      const open = {
	        type: 'brace',
	        value,
	        output: '(',
	        outputIndex: state.output.length,
	        tokensIndex: state.tokens.length
	      };
	      braces.push(open);
	      push(open);
	      continue;
	    }

	    if (value === '}') {
	      const brace = braces[braces.length - 1];

	      if (opts.nobrace === true || !brace) {
	        push({
	          type: 'text',
	          value,
	          output: value
	        });
	        continue;
	      }

	      let output = ')';

	      if (brace.dots === true) {
	        const arr = tokens.slice();
	        const range = [];

	        for (let i = arr.length - 1; i >= 0; i--) {
	          tokens.pop();

	          if (arr[i].type === 'brace') {
	            break;
	          }

	          if (arr[i].type !== 'dots') {
	            range.unshift(arr[i].value);
	          }
	        }

	        output = expandRange(range, opts);
	        state.backtrack = true;
	      }

	      if (brace.comma !== true && brace.dots !== true) {
	        const out = state.output.slice(0, brace.outputIndex);
	        const toks = state.tokens.slice(brace.tokensIndex);
	        brace.value = brace.output = '\\{';
	        value = output = '\\}';
	        state.output = out;

	        for (const t of toks) {
	          state.output += t.output || t.value;
	        }
	      }

	      push({
	        type: 'brace',
	        value,
	        output
	      });
	      decrement('braces');
	      braces.pop();
	      continue;
	    }
	    /**
	     * Pipes
	     */


	    if (value === '|') {
	      if (extglobs.length > 0) {
	        extglobs[extglobs.length - 1].conditions++;
	      }

	      push({
	        type: 'text',
	        value
	      });
	      continue;
	    }
	    /**
	     * Commas
	     */


	    if (value === ',') {
	      let output = value;
	      const brace = braces[braces.length - 1];

	      if (brace && stack[stack.length - 1] === 'braces') {
	        brace.comma = true;
	        output = '|';
	      }

	      push({
	        type: 'comma',
	        value,
	        output
	      });
	      continue;
	    }
	    /**
	     * Slashes
	     */


	    if (value === '/') {
	      // if the beginning of the glob is "./", advance the start
	      // to the current index, and don't add the "./" characters
	      // to the state. This greatly simplifies lookbehinds when
	      // checking for BOS characters like "!" and "." (not "./")
	      if (prev.type === 'dot' && state.index === state.start + 1) {
	        state.start = state.index + 1;
	        state.consumed = '';
	        state.output = '';
	        tokens.pop();
	        prev = bos; // reset "prev" to the first token

	        continue;
	      }

	      push({
	        type: 'slash',
	        value,
	        output: SLASH_LITERAL
	      });
	      continue;
	    }
	    /**
	     * Dots
	     */


	    if (value === '.') {
	      if (state.braces > 0 && prev.type === 'dot') {
	        if (prev.value === '.') prev.output = DOT_LITERAL;
	        const brace = braces[braces.length - 1];
	        prev.type = 'dots';
	        prev.output += value;
	        prev.value += value;
	        brace.dots = true;
	        continue;
	      }

	      if (state.braces + state.parens === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
	        push({
	          type: 'text',
	          value,
	          output: DOT_LITERAL
	        });
	        continue;
	      }

	      push({
	        type: 'dot',
	        value,
	        output: DOT_LITERAL
	      });
	      continue;
	    }
	    /**
	     * Question marks
	     */


	    if (value === '?') {
	      const isGroup = prev && prev.value === '(';

	      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('qmark', value);
	        continue;
	      }

	      if (prev && prev.type === 'paren') {
	        const next = peek();
	        let output = value;

	        if (prev.value === '(' && !/[!=<:]/.test(next) || next === '<' && !/<([!=]|\w+>)/.test(remaining())) {
	          output = "\\".concat(value);
	        }

	        push({
	          type: 'text',
	          value,
	          output
	        });
	        continue;
	      }

	      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
	        push({
	          type: 'qmark',
	          value,
	          output: QMARK_NO_DOT
	        });
	        continue;
	      }

	      push({
	        type: 'qmark',
	        value,
	        output: QMARK
	      });
	      continue;
	    }
	    /**
	     * Exclamation
	     */


	    if (value === '!') {
	      if (opts.noextglob !== true && peek() === '(') {
	        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
	          extglobOpen('negate', value);
	          continue;
	        }
	      }

	      if (opts.nonegate !== true && state.index === 0) {
	        negate();
	        continue;
	      }
	    }
	    /**
	     * Plus
	     */


	    if (value === '+') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('plus', value);
	        continue;
	      }

	      if (prev && prev.value === '(' || opts.regex === false) {
	        push({
	          type: 'plus',
	          value,
	          output: PLUS_LITERAL
	        });
	        continue;
	      }

	      if (prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace') || state.parens > 0) {
	        push({
	          type: 'plus',
	          value
	        });
	        continue;
	      }

	      push({
	        type: 'plus',
	        value: PLUS_LITERAL
	      });
	      continue;
	    }
	    /**
	     * Plain text
	     */


	    if (value === '@') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        push({
	          type: 'at',
	          extglob: true,
	          value,
	          output: ''
	        });
	        continue;
	      }

	      push({
	        type: 'text',
	        value
	      });
	      continue;
	    }
	    /**
	     * Plain text
	     */


	    if (value !== '*') {
	      if (value === '$' || value === '^') {
	        value = "\\".concat(value);
	      }

	      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());

	      if (match) {
	        value += match[0];
	        state.index += match[0].length;
	      }

	      push({
	        type: 'text',
	        value
	      });
	      continue;
	    }
	    /**
	     * Stars
	     */


	    if (prev && (prev.type === 'globstar' || prev.star === true)) {
	      prev.type = 'star';
	      prev.star = true;
	      prev.value += value;
	      prev.output = star;
	      state.backtrack = true;
	      state.globstar = true;
	      consume(value);
	      continue;
	    }

	    let rest = remaining();

	    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
	      extglobOpen('star', value);
	      continue;
	    }

	    if (prev.type === 'star') {
	      if (opts.noglobstar === true) {
	        consume(value);
	        continue;
	      }

	      const prior = prev.prev;
	      const before = prior.prev;
	      const isStart = prior.type === 'slash' || prior.type === 'bos';
	      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

	      if (opts.bash === true && (!isStart || rest[0] && rest[0] !== '/')) {
	        push({
	          type: 'star',
	          value,
	          output: ''
	        });
	        continue;
	      }

	      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
	      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');

	      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
	        push({
	          type: 'star',
	          value,
	          output: ''
	        });
	        continue;
	      } // strip consecutive `/**/`


	      while (rest.slice(0, 3) === '/**') {
	        const after = input[state.index + 4];

	        if (after && after !== '/') {
	          break;
	        }

	        rest = rest.slice(3);
	        consume('/**', 3);
	      }

	      if (prior.type === 'bos' && eos()) {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = globstar(opts);
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = "(?:".concat(prior.output);
	        prev.type = 'globstar';
	        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
	        prev.value += value;
	        state.globstar = true;
	        state.output += prior.output + prev.output;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
	        const end = rest[1] !== void 0 ? '|$' : '';
	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = "(?:".concat(prior.output);
	        prev.type = 'globstar';
	        prev.output = "".concat(globstar(opts)).concat(SLASH_LITERAL, "|").concat(SLASH_LITERAL).concat(end, ")");
	        prev.value += value;
	        state.output += prior.output + prev.output;
	        state.globstar = true;
	        consume(value + advance());
	        push({
	          type: 'slash',
	          value: '/',
	          output: ''
	        });
	        continue;
	      }

	      if (prior.type === 'bos' && rest[0] === '/') {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = "(?:^|".concat(SLASH_LITERAL, "|").concat(globstar(opts)).concat(SLASH_LITERAL, ")");
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value + advance());
	        push({
	          type: 'slash',
	          value: '/',
	          output: ''
	        });
	        continue;
	      } // remove single star from output


	      state.output = state.output.slice(0, -prev.output.length); // reset previous token to globstar

	      prev.type = 'globstar';
	      prev.output = globstar(opts);
	      prev.value += value; // reset output with globstar

	      state.output += prev.output;
	      state.globstar = true;
	      consume(value);
	      continue;
	    }

	    const token = {
	      type: 'star',
	      value,
	      output: star
	    };

	    if (opts.bash === true) {
	      token.output = '.*?';

	      if (prev.type === 'bos' || prev.type === 'slash') {
	        token.output = nodot + token.output;
	      }

	      push(token);
	      continue;
	    }

	    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
	      token.output = value;
	      push(token);
	      continue;
	    }

	    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
	      if (prev.type === 'dot') {
	        state.output += NO_DOT_SLASH;
	        prev.output += NO_DOT_SLASH;
	      } else if (opts.dot === true) {
	        state.output += NO_DOTS_SLASH;
	        prev.output += NO_DOTS_SLASH;
	      } else {
	        state.output += nodot;
	        prev.output += nodot;
	      }

	      if (peek() !== '*') {
	        state.output += ONE_CHAR;
	        prev.output += ONE_CHAR;
	      }
	    }

	    push(token);
	  }

	  while (state.brackets > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
	    state.output = utils$1.escapeLast(state.output, '[');
	    decrement('brackets');
	  }

	  while (state.parens > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
	    state.output = utils$1.escapeLast(state.output, '(');
	    decrement('parens');
	  }

	  while (state.braces > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
	    state.output = utils$1.escapeLast(state.output, '{');
	    decrement('braces');
	  }

	  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
	    push({
	      type: 'maybe_slash',
	      value: '',
	      output: "".concat(SLASH_LITERAL, "?")
	    });
	  } // rebuild the output if we had to backtrack at any point


	  if (state.backtrack === true) {
	    state.output = '';

	    for (const token of state.tokens) {
	      state.output += token.output != null ? token.output : token.value;

	      if (token.suffix) {
	        state.output += token.suffix;
	      }
	    }
	  }

	  return state;
	};
	/**
	 * Fast paths for creating regular expressions for common glob patterns.
	 * This can significantly speed up processing and has very little downside
	 * impact when none of the fast paths match.
	 */


	parse$1.fastpaths = (input, options) => {
	  const opts = { ...options
	  };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
	  const len = input.length;

	  if (len > max) {
	    throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
	  }

	  input = REPLACEMENTS[input] || input; // create constants based on platform, for windows or posix

	  const {
	    DOT_LITERAL,
	    SLASH_LITERAL,
	    ONE_CHAR,
	    DOTS_SLASH,
	    NO_DOT,
	    NO_DOTS,
	    NO_DOTS_SLASH,
	    STAR,
	    START_ANCHOR
	  } = constants$1.globChars();
	  const nodot = opts.dot ? NO_DOTS : NO_DOT;
	  const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
	  const capture = opts.capture ? '' : '?:';
	  const state = {
	    negated: false,
	    prefix: ''
	  };
	  let star = opts.bash === true ? '.*?' : STAR;

	  if (opts.capture) {
	    star = "(".concat(star, ")");
	  }

	  const globstar = opts => {
	    if (opts.noglobstar === true) return star;
	    return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
	  };

	  const create = str => {
	    switch (str) {
	      case '*':
	        return "".concat(nodot).concat(ONE_CHAR).concat(star);

	      case '.*':
	        return "".concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

	      case '*.*':
	        return "".concat(nodot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

	      case '*/*':
	        return "".concat(nodot).concat(star).concat(SLASH_LITERAL).concat(ONE_CHAR).concat(slashDot).concat(star);

	      case '**':
	        return nodot + globstar(opts);

	      case '**/*':
	        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(ONE_CHAR).concat(star);

	      case '**/*.*':
	        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

	      case '**/.*':
	        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

	      default:
	        {
	          const match = /^(.*?)\.(\w+)$/.exec(str);
	          if (!match) return;
	          const source = create(match[1]);
	          if (!source) return;
	          return source + DOT_LITERAL + match[2];
	        }
	    }
	  };

	  const output = utils$1.removePrefix(input, state);
	  let source = create(output);

	  if (source && opts.strictSlashes !== true) {
	    source += "".concat(SLASH_LITERAL, "?");
	  }

	  return source;
	};

	var parse_1 = parse$1;

	const path = path$1;
	const scan = scan_1;
	const parse = parse_1;
	const utils = utils$3;
	const constants = constants$2;

	const isObject$5 = val => val && typeof val === 'object' && !Array.isArray(val);
	/**
	 * Creates a matcher function from one or more glob patterns. The
	 * returned function takes a string to match as its first argument,
	 * and returns true if the string is a match. The returned matcher
	 * function also takes a boolean as the second argument that, when true,
	 * returns an object with additional information.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch(glob[, options]);
	 *
	 * const isMatch = picomatch('*.!(*a)');
	 * console.log(isMatch('a.a')); //=> false
	 * console.log(isMatch('a.b')); //=> true
	 * ```
	 * @name picomatch
	 * @param {String|Array} `globs` One or more glob patterns.
	 * @param {Object=} `options`
	 * @return {Function=} Returns a matcher function.
	 * @api public
	 */


	const picomatch$1 = function (glob, options) {
	  let returnState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  if (Array.isArray(glob)) {
	    const fns = glob.map(input => picomatch$1(input, options, returnState));

	    const arrayMatcher = str => {
	      for (const isMatch of fns) {
	        const state = isMatch(str);
	        if (state) return state;
	      }

	      return false;
	    };

	    return arrayMatcher;
	  }

	  const isState = isObject$5(glob) && glob.tokens && glob.input;

	  if (glob === '' || typeof glob !== 'string' && !isState) {
	    throw new TypeError('Expected pattern to be a non-empty string');
	  }

	  const opts = options || {};
	  const posix = utils.isWindows(options);
	  const regex = isState ? picomatch$1.compileRe(glob, options) : picomatch$1.makeRe(glob, options, false, true);
	  const state = regex.state;
	  delete regex.state;

	  let isIgnored = () => false;

	  if (opts.ignore) {
	    const ignoreOpts = { ...options,
	      ignore: null,
	      onMatch: null,
	      onResult: null
	    };
	    isIgnored = picomatch$1(opts.ignore, ignoreOpts, returnState);
	  }

	  const matcher = function (input) {
	    let returnObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    const {
	      isMatch,
	      match,
	      output
	    } = picomatch$1.test(input, regex, options, {
	      glob,
	      posix
	    });
	    const result = {
	      glob,
	      state,
	      regex,
	      posix,
	      input,
	      output,
	      match,
	      isMatch
	    };

	    if (typeof opts.onResult === 'function') {
	      opts.onResult(result);
	    }

	    if (isMatch === false) {
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (isIgnored(input)) {
	      if (typeof opts.onIgnore === 'function') {
	        opts.onIgnore(result);
	      }

	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (typeof opts.onMatch === 'function') {
	      opts.onMatch(result);
	    }

	    return returnObject ? result : true;
	  };

	  if (returnState) {
	    matcher.state = state;
	  }

	  return matcher;
	};
	/**
	 * Test `input` with the given `regex`. This is used by the main
	 * `picomatch()` function to test the input string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.test(input, regex[, options]);
	 *
	 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
	 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp} `regex`
	 * @return {Object} Returns an object with matching info.
	 * @api public
	 */


	picomatch$1.test = function (input, regex, options) {
	  let {
	    glob,
	    posix
	  } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  if (typeof input !== 'string') {
	    throw new TypeError('Expected input to be a string');
	  }

	  if (input === '') {
	    return {
	      isMatch: false,
	      output: ''
	    };
	  }

	  const opts = options || {};
	  const format = opts.format || (posix ? utils.toPosixSlashes : null);
	  let match = input === glob;
	  let output = match && format ? format(input) : input;

	  if (match === false) {
	    output = format ? format(input) : input;
	    match = output === glob;
	  }

	  if (match === false || opts.capture === true) {
	    if (opts.matchBase === true || opts.basename === true) {
	      match = picomatch$1.matchBase(input, regex, options, posix);
	    } else {
	      match = regex.exec(output);
	    }
	  }

	  return {
	    isMatch: Boolean(match),
	    match,
	    output
	  };
	};
	/**
	 * Match the basename of a filepath.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.matchBase(input, glob[, options]);
	 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
	 * @return {Boolean}
	 * @api public
	 */


	picomatch$1.matchBase = function (input, glob, options) {
	  arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : utils.isWindows(options);
	  const regex = glob instanceof RegExp ? glob : picomatch$1.makeRe(glob, options);
	  return regex.test(path.basename(input));
	};
	/**
	 * Returns true if **any** of the given glob `patterns` match the specified `string`.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.isMatch(string, patterns[, options]);
	 *
	 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
	 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
	 * ```
	 * @param {String|Array} str The string to test.
	 * @param {String|Array} patterns One or more glob patterns to use for matching.
	 * @param {Object} [options] See available [options](#options).
	 * @return {Boolean} Returns true if any patterns match `str`
	 * @api public
	 */


	picomatch$1.isMatch = (str, patterns, options) => picomatch$1(patterns, options)(str);
	/**
	 * Parse a glob pattern to create the source string for a regular
	 * expression.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const result = picomatch.parse(pattern[, options]);
	 * ```
	 * @param {String} `pattern`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
	 * @api public
	 */


	picomatch$1.parse = (pattern, options) => {
	  if (Array.isArray(pattern)) return pattern.map(p => picomatch$1.parse(p, options));
	  return parse(pattern, { ...options,
	    fastpaths: false
	  });
	};
	/**
	 * Scan a glob pattern to separate the pattern into segments.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.scan(input[, options]);
	 *
	 * const result = picomatch.scan('!./foo/*.js');
	 * console.log(result);
	 * { prefix: '!./',
	 *   input: '!./foo/*.js',
	 *   start: 3,
	 *   base: 'foo',
	 *   glob: '*.js',
	 *   isBrace: false,
	 *   isBracket: false,
	 *   isGlob: true,
	 *   isExtglob: false,
	 *   isGlobstar: false,
	 *   negated: true }
	 * ```
	 * @param {String} `input` Glob pattern to scan.
	 * @param {Object} `options`
	 * @return {Object} Returns an object with
	 * @api public
	 */


	picomatch$1.scan = (input, options) => scan(input, options);
	/**
	 * Compile a regular expression from the `state` object returned by the
	 * [parse()](#parse) method.
	 *
	 * @param {Object} `state`
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
	 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
	 * @return {RegExp}
	 * @api public
	 */


	picomatch$1.compileRe = function (state, options) {
	  let returnOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  let returnState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  if (returnOutput === true) {
	    return state.output;
	  }

	  const opts = options || {};
	  const prepend = opts.contains ? '' : '^';
	  const append = opts.contains ? '' : '$';
	  let source = "".concat(prepend, "(?:").concat(state.output, ")").concat(append);

	  if (state && state.negated === true) {
	    source = "^(?!".concat(source, ").*$");
	  }

	  const regex = picomatch$1.toRegex(source, options);

	  if (returnState === true) {
	    regex.state = state;
	  }

	  return regex;
	};
	/**
	 * Create a regular expression from a parsed glob pattern.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const state = picomatch.parse('*.js');
	 * // picomatch.compileRe(state[, options]);
	 *
	 * console.log(picomatch.compileRe(state));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `state` The object returned from the `.parse` method.
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
	 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
	 * @return {RegExp} Returns a regex created from the given pattern.
	 * @api public
	 */


	picomatch$1.makeRe = function (input) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  let returnOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  let returnState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  if (!input || typeof input !== 'string') {
	    throw new TypeError('Expected a non-empty string');
	  }

	  let parsed = {
	    negated: false,
	    fastpaths: true
	  };

	  if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
	    parsed.output = parse.fastpaths(input, options);
	  }

	  if (!parsed.output) {
	    parsed = parse(input, options);
	  }

	  return picomatch$1.compileRe(parsed, options, returnOutput, returnState);
	};
	/**
	 * Create a regular expression from the given regex source string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.toRegex(source[, options]);
	 *
	 * const { output } = picomatch.parse('*.js');
	 * console.log(picomatch.toRegex(output));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `source` Regular expression source string.
	 * @param {Object} `options`
	 * @return {RegExp}
	 * @api public
	 */


	picomatch$1.toRegex = (source, options) => {
	  try {
	    const opts = options || {};
	    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
	  } catch (err) {
	    if (options && options.debug === true) throw err;
	    return /$^/;
	  }
	};
	/**
	 * Picomatch constants.
	 * @return {Object}
	 */


	picomatch$1.constants = constants;
	/**
	 * Expose "picomatch"
	 */

	var picomatch_1 = picomatch$1;

	(function (module) {

	  module.exports = picomatch_1;
	})(picomatch$2);

	var picomatch = /*@__PURE__*/getDefaultExportFromCjs(picomatch$2.exports);

	const parseInputAccept = inputAccept => {
	  const extensions = [];
	  const mimeTypes = [];
	  inputAccept.split(",").map(mimeType => mimeType.trim()).filter(Boolean).forEach(fileType => {
	    if (fileType.startsWith(".")) {
	      extensions.push("*".concat(fileType));
	    } else {
	      mimeTypes.push(fileType);
	    }
	  });
	  return [extensions, mimeTypes];
	};

	class AcceptedFileTypes {
	  constructor(inputAccept) {
	    _defineProperty$2(this, "extensions", void 0);

	    _defineProperty$2(this, "mimeTypes", void 0);

	    const [extensions, mimeTypes] = parseInputAccept(inputAccept);
	    this.extensions = extensions;
	    this.mimeTypes = mimeTypes;
	  }

	  isAccepted(fileName) {
	    if (this.extensions.length === 0 && this.mimeTypes.length === 0) {
	      return true;
	    }

	    return this.isMimeTypeAccepted(lite.getType(fileName)) || this.isExtensionAccepted(fileName);
	  }

	  isMimeTypeAccepted(mimeType) {
	    if (this.mimeTypes.length === 0) {
	      return false;
	    }

	    return picomatch.isMatch(mimeType, this.mimeTypes);
	  }

	  isExtensionAccepted(fileName) {
	    if (this.extensions.length === 0) {
	      return false;
	    }

	    return picomatch.isMatch(fileName, this.extensions);
	  }

	}

	const getEntriesFromDirectory = async directoryEntry => new Promise((resolve, reject) => directoryEntry.createReader().readEntries(resolve, reject));

	const getFileFromFileEntry = async fileEntry => new Promise((resolve, reject) => fileEntry.file(resolve, reject));

	const getFilesFromFileSystemEntries = async entries => {
	  const result = [];

	  for await (const entry of entries) {
	    if (entry.isFile) {
	      const file = await getFileFromFileEntry(entry);
	      result.push(file);
	    } else if (entry.isDirectory) {
	      const entriesFromDirectory = await getEntriesFromDirectory(entry);
	      const files = await getFilesFromFileSystemEntries(entriesFromDirectory);
	      files.forEach(file => result.push(file));
	    }
	  }

	  return result;
	};

	const getFilesFromDataTransfer = async dataTransfer => {
	  if (dataTransfer.items) {
	    const entries = [...dataTransfer.items].map(item => item.webkitGetAsEntry());
	    const files = await getFilesFromFileSystemEntries(entries);
	    return files;
	  } else {
	    // backwards compatibility
	    return [...dataTransfer.files];
	  }
	};

	class DropArea {
	  constructor(_ref) {
	    let {
	      container,
	      inputAccept,
	      onUploadFiles
	    } = _ref;

	    _defineProperty$2(this, "acceptedFileTypes", void 0);

	    _defineProperty$2(this, "container", void 0);

	    _defineProperty$2(this, "onUploadFiles", void 0);

	    _defineProperty$2(this, "onDrop", e => {
	      const dragEvent = e;
	      this.container.classList.remove("dff-dropping");
	      dragEvent.preventDefault();
	      dragEvent.stopPropagation();

	      const uploadFiles = async () => {
	        try {
	          if (dragEvent.dataTransfer) {
	            const files = await getFilesFromDataTransfer(dragEvent.dataTransfer);
	            const acceptedFiles = files.filter(file => this.acceptedFileTypes.isAccepted(file.name));
	            this.onUploadFiles(acceptedFiles);
	          }
	        } catch (error) {
	          console.error(error);
	        }
	      };

	      void uploadFiles();
	    });

	    this.container = container;
	    this.onUploadFiles = onUploadFiles;
	    this.acceptedFileTypes = new AcceptedFileTypes(inputAccept);
	    container.addEventListener("dragenter", () => {
	      container.classList.add("dff-dropping");
	    });
	    container.addEventListener("dragleave", () => {
	      container.classList.remove("dff-dropping");
	    });
	    container.addEventListener("dragover", e => {
	      container.classList.add("dff-dropping");
	      e.preventDefault();
	    });
	    container.addEventListener("drop", this.onDrop);
	  }

	}

	class BaseUpload$1 {
	  constructor(_ref) {
	    let {
	      name,
	      status,
	      type,
	      uploadIndex
	    } = _ref;

	    _defineProperty$2(this, "name", void 0);

	    _defineProperty$2(this, "status", void 0);

	    _defineProperty$2(this, "type", void 0);

	    _defineProperty$2(this, "uploadIndex", void 0);

	    this.name = name;
	    this.status = status;
	    this.type = type;
	    this.uploadIndex = uploadIndex;
	  }

	  async abort() {//
	  }

	  async delete() {//
	  }

	}

	function normalize(strArray) {
	  var resultArray = [];

	  if (strArray.length === 0) {
	    return '';
	  }

	  if (typeof strArray[0] !== 'string') {
	    throw new TypeError('Url must be a string. Received ' + strArray[0]);
	  } // If the first part is a plain protocol, we combine it with the next part.


	  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
	    var first = strArray.shift();
	    strArray[0] = first + strArray[0];
	  } // There must be two or three slashes in the file protocol, two slashes in anything else.


	  if (strArray[0].match(/^file:\/\/\//)) {
	    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
	  } else {
	    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
	  }

	  for (var i = 0; i < strArray.length; i++) {
	    var component = strArray[i];

	    if (typeof component !== 'string') {
	      throw new TypeError('Url must be a string. Received ' + component);
	    }

	    if (component === '') {
	      continue;
	    }

	    if (i > 0) {
	      // Removing the starting slashes for each component but the first.
	      component = component.replace(/^[\/]+/, '');
	    }

	    if (i < strArray.length - 1) {
	      // Removing the ending slashes for each component but the last.
	      component = component.replace(/[\/]+$/, '');
	    } else {
	      // For the last component we will combine multiple slashes to a single one.
	      component = component.replace(/[\/]+$/, '/');
	    }

	    resultArray.push(component);
	  }

	  var str = resultArray.join('/'); // Each input component is now separated by a single slash except the possible first plain protocol part.
	  // remove trailing slash before parameters or hash

	  str = str.replace(/\/(\?|&|#[^!])/g, '$1'); // replace ? in parameters with &

	  var parts = str.split('?');
	  str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
	  return str;
	}

	function urlJoin() {
	  var input;

	  if (typeof arguments[0] === 'object') {
	    input = arguments[0];
	  } else {
	    input = [].slice.call(arguments);
	  }

	  return normalize(input);
	}

	const MB = 1024 * 1024;
	const abortMultipartUpload = _ref => {
	  let {
	    csrfToken,
	    key,
	    uploadId,
	    endpoint
	  } = _ref;
	  const filename = encodeURIComponent(key);
	  const uploadIdEnc = encodeURIComponent(uploadId);
	  const headers = new Headers({
	    "X-CSRFToken": csrfToken
	  });
	  const url = urlJoin(endpoint, uploadIdEnc, "?key=".concat(filename));
	  return fetch(url, {
	    method: "delete",
	    headers: headers
	  }).then(response => {
	    return response.json();
	  });
	};
	const completeMultipartUpload = _ref2 => {
	  let {
	    csrfToken,
	    key,
	    uploadId,
	    parts,
	    endpoint
	  } = _ref2;
	  const filename = encodeURIComponent(key);
	  const uploadIdEnc = encodeURIComponent(uploadId);
	  const headers = new Headers({
	    "X-CSRFToken": csrfToken
	  });
	  const url = urlJoin(endpoint, uploadIdEnc, "complete", "?key=".concat(filename));
	  return fetch(url, {
	    method: "post",
	    headers: headers,
	    body: JSON.stringify({
	      parts: parts
	    })
	  }).then(response => {
	    return response.json();
	  }).then(data => {
	    return data;
	  });
	};
	const createMultipartUpload = _ref3 => {
	  let {
	    csrfToken,
	    endpoint,
	    file,
	    s3UploadDir
	  } = _ref3;
	  const headers = new Headers({
	    accept: "application/json",
	    "content-type": "application/json",
	    "X-CSRFToken": csrfToken
	  });
	  return fetch(endpoint, {
	    method: "post",
	    headers: headers,
	    body: JSON.stringify({
	      filename: file.name,
	      contentType: file.type,
	      s3UploadDir: s3UploadDir
	    })
	  }).then(response => {
	    return response.json();
	  }).then(data => {
	    return data;
	  });
	};
	const getChunkSize = file => Math.ceil(file.size / 10000);
	const prepareUploadPart = _ref4 => {
	  let {
	    csrfToken,
	    endpoint,
	    key,
	    number,
	    uploadId
	  } = _ref4;
	  const filename = encodeURIComponent(key);
	  const headers = new Headers({
	    "X-CSRFToken": csrfToken
	  });
	  const url = urlJoin(endpoint, uploadId, "".concat(number), "?key=".concat(filename));
	  return fetch(url, {
	    method: "get",
	    headers: headers
	  }).then(response => {
	    return response.json();
	  }).then(data => {
	    return data;
	  });
	};
	const remove = (arr, el) => {
	  const i = arr.indexOf(el);

	  if (i !== -1) {
	    arr.splice(i, 1);
	  }
	};

	class S3Upload extends BaseUpload$1 {
	  constructor(_ref) {
	    let {
	      csrfToken,
	      endpoint,
	      file,
	      s3UploadDir,
	      uploadIndex
	    } = _ref;
	    super({
	      name: file.name,
	      status: "uploading",
	      type: "s3",
	      uploadIndex
	    });

	    _defineProperty$2(this, "onError", void 0);

	    _defineProperty$2(this, "onProgress", void 0);

	    _defineProperty$2(this, "onSuccess", void 0);

	    _defineProperty$2(this, "chunkState", void 0);

	    _defineProperty$2(this, "chunks", void 0);

	    _defineProperty$2(this, "createdPromise", void 0);

	    _defineProperty$2(this, "csrfToken", void 0);

	    _defineProperty$2(this, "endpoint", void 0);

	    _defineProperty$2(this, "file", void 0);

	    _defineProperty$2(this, "key", void 0);

	    _defineProperty$2(this, "parts", void 0);

	    _defineProperty$2(this, "s3UploadDir", void 0);

	    _defineProperty$2(this, "uploadId", void 0);

	    _defineProperty$2(this, "uploading", void 0);

	    this.csrfToken = csrfToken;
	    this.endpoint = endpoint;
	    this.file = file;
	    this.s3UploadDir = s3UploadDir;
	    this.key = null;
	    this.uploadId = null;
	    this.parts = []; // Do `this.createdPromise.then(OP)` to execute an operation `OP` _only_ if the
	    // upload was created already. That also ensures that the sequencing is right
	    // (so the `OP` definitely happens if the upload is created).
	    //
	    // This mostly exists to make `abortUpload` work well: only sending the abort request if
	    // the upload was already created, and if the createMultipartUpload request is still in flight,
	    // aborting it immediately after it finishes.

	    this.createdPromise = Promise.reject(); // eslint-disable-line prefer-promise-reject-errors

	    this.chunks = [];
	    this.chunkState = [];
	    this.uploading = [];
	    this.onError = undefined;
	    this.onProgress = undefined;
	    this.onSuccess = undefined;
	    this.initChunks();
	    this.createdPromise.catch(() => ({})); // silence uncaught rejection warning
	  }

	  async abort() {
	    this.uploading.slice().forEach(xhr => {
	      xhr.abort();
	    });
	    this.uploading = [];
	    await this.createdPromise;

	    if (this.key && this.uploadId) {
	      await abortMultipartUpload({
	        csrfToken: this.csrfToken,
	        endpoint: this.endpoint,
	        key: this.key,
	        uploadId: this.uploadId
	      });
	    }
	  }

	  async delete() {
	    return Promise.resolve();
	  }

	  getInitialFile() {
	    return {
	      id: this.uploadId || "",
	      name: this.key || "",
	      size: this.file.size,
	      original_name: this.file.name,
	      type: "s3"
	    };
	  }

	  getSize() {
	    return this.file.size;
	  }

	  start() {
	    void this.createUpload();
	  }

	  initChunks() {
	    const chunks = [];
	    const desiredChunkSize = getChunkSize(this.file); // at least 5MB per request, at most 10k requests

	    const minChunkSize = Math.max(5 * MB, Math.ceil(this.file.size / 10000));
	    const chunkSize = Math.max(desiredChunkSize, minChunkSize);

	    for (let i = 0; i < this.file.size; i += chunkSize) {
	      const end = Math.min(this.file.size, i + chunkSize);
	      chunks.push(this.file.slice(i, end));
	    }

	    this.chunks = chunks;
	    this.chunkState = chunks.map(() => ({
	      uploaded: 0,
	      busy: false,
	      done: false
	    }));
	  }

	  createUpload() {
	    this.createdPromise = createMultipartUpload({
	      csrfToken: this.csrfToken,
	      endpoint: this.endpoint,
	      file: this.file,
	      s3UploadDir: this.s3UploadDir
	    });
	    return this.createdPromise.then(result => {
	      const valid = typeof result === "object" && result && typeof result.uploadId === "string" && typeof result.key === "string";

	      if (!valid) {
	        throw new TypeError("AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.");
	      }

	      this.key = result.key;
	      this.uploadId = result.uploadId;
	      this.uploadParts();
	    }).catch(err => {
	      this.handleError(err);
	    });
	  }

	  uploadParts() {
	    const need = 1 - this.uploading.length;

	    if (need === 0) {
	      return;
	    } // All parts are uploaded.


	    if (this.chunkState.every(state => state.done)) {
	      void this.completeUpload();
	      return;
	    }

	    const candidates = [];

	    for (let i = 0; i < this.chunkState.length; i++) {
	      const state = this.chunkState[i];

	      if (state.done || state.busy) {
	        continue;
	      }

	      candidates.push(i);

	      if (candidates.length >= need) {
	        break;
	      }
	    }

	    candidates.forEach(index => {
	      void this.uploadPart(index);
	    });
	  }

	  uploadPart(index) {
	    this.chunkState[index].busy = true;

	    if (!this.key || !this.uploadId) {
	      return Promise.resolve();
	    }

	    return prepareUploadPart({
	      csrfToken: this.csrfToken,
	      endpoint: this.endpoint,
	      key: this.key,
	      number: index + 1,
	      uploadId: this.uploadId
	    }).then(result => {
	      const valid = typeof result === "object" && result && typeof result.url === "string";

	      if (!valid) {
	        throw new TypeError("AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.");
	      }

	      return result;
	    }).then(_ref2 => {
	      let {
	        url
	      } = _ref2;
	      this.uploadPartBytes(index, url);
	    }, err => {
	      this.handleError(err);
	    });
	  }

	  onPartProgress(index, sent) {
	    this.chunkState[index].uploaded = sent;

	    if (this.onProgress) {
	      const totalUploaded = this.chunkState.reduce((n, c) => n + c.uploaded, 0);
	      this.onProgress(totalUploaded, this.file.size);
	    }
	  }

	  onPartComplete(index, etag) {
	    this.chunkState[index].etag = etag;
	    this.chunkState[index].done = true;
	    const part = {
	      PartNumber: index + 1,
	      ETag: etag
	    };
	    this.parts.push(part);
	    this.uploadParts();
	  }

	  uploadPartBytes(index, url) {
	    const body = this.chunks[index];
	    const xhr = new XMLHttpRequest();
	    xhr.open("PUT", url, true);
	    xhr.responseType = "text";
	    this.uploading.push(xhr);
	    xhr.upload.addEventListener("progress", ev => {
	      if (!ev.lengthComputable) {
	        return;
	      }

	      this.onPartProgress(index, ev.loaded);
	    });
	    xhr.addEventListener("abort", ev => {
	      remove(this.uploading, ev.target);
	      this.chunkState[index].busy = false;
	    });
	    xhr.addEventListener("load", ev => {
	      const target = ev.target;
	      remove(this.uploading, target);
	      this.chunkState[index].busy = false;

	      if (target.status < 200 || target.status >= 300) {
	        this.handleError(new Error("Non 2xx"));
	        return;
	      }

	      this.onPartProgress(index, body.size); // NOTE This must be allowed by CORS.

	      const etag = target.getResponseHeader("ETag");

	      if (etag === null) {
	        this.handleError(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."));
	        return;
	      }

	      this.onPartComplete(index, etag);
	    });
	    xhr.addEventListener("error", ev => {
	      remove(this.uploading, ev.target);
	      this.chunkState[index].busy = false;
	      const error = new Error("Unknown error"); // error.source = ev.target

	      this.handleError(error);
	    });
	    xhr.send(body);
	  }

	  completeUpload() {
	    // Parts may not have completed uploading in sorted order, if limit > 1.
	    this.parts.sort((a, b) => a.PartNumber - b.PartNumber);

	    if (!this.uploadId || !this.key) {
	      return Promise.resolve();
	    }

	    return completeMultipartUpload({
	      csrfToken: this.csrfToken,
	      endpoint: this.endpoint,
	      key: this.key,
	      uploadId: this.uploadId,
	      parts: this.parts
	    }).then(() => {
	      if (this.onSuccess) {
	        this.onSuccess();
	      }
	    }, err => {
	      this.handleError(err);
	    });
	  }

	  handleError(error) {
	    if (this.onError) {
	      this.onError(error);
	    } else {
	      throw error;
	    }
	  }

	}

	const deleteUpload = async (url, csrfToken) => new Promise((resolve, reject) => {
	  const xhr = new XMLHttpRequest();
	  xhr.open("DELETE", url);

	  xhr.onload = () => {
	    if (xhr.status === 204) {
	      resolve();
	    } else {
	      reject();
	    }
	  };

	  xhr.setRequestHeader("Tus-Resumable", "1.0.0");
	  xhr.setRequestHeader("X-CSRFToken", csrfToken);
	  xhr.send(null);
	});

	class BaseUploadedFile extends BaseUpload$1 {
	  constructor(_ref) {
	    let {
	      name,
	      size,
	      type,
	      uploadIndex
	    } = _ref;
	    super({
	      name,
	      status: "done",
	      type,
	      uploadIndex
	    });

	    _defineProperty$2(this, "size", void 0);

	    this.size = size;
	  }

	  async abort() {
	    return Promise.resolve();
	  }

	  async delete() {
	    return Promise.resolve();
	  }

	  getSize() {
	    return this.size;
	  }

	}

	class PlaceholderFile extends BaseUploadedFile {
	  constructor(initialFile, uploadIndex) {
	    super({
	      name: initialFile.name,
	      size: initialFile.size,
	      type: "placeholder",
	      uploadIndex
	    });

	    _defineProperty$2(this, "id", void 0);

	    this.id = initialFile.id;
	  }

	  getInitialFile() {
	    return {
	      id: this.id,
	      name: this.name,
	      size: this.size,
	      type: "placeholder"
	    };
	  }

	}

	class UploadedS3File extends BaseUploadedFile {
	  constructor(initialFile, uploadIndex) {
	    super({
	      name: initialFile.original_name || initialFile.name,
	      size: initialFile.size,
	      type: "uploadedS3",
	      uploadIndex
	    });

	    _defineProperty$2(this, "id", void 0);

	    _defineProperty$2(this, "key", void 0);

	    this.id = initialFile.id;
	    this.key = initialFile.name;
	  }

	  getInitialFile() {
	    return {
	      id: this.id,
	      name: this.key,
	      original_name: this.name,
	      size: this.size,
	      type: "s3"
	    };
	  }

	}
	class ExistingFile extends BaseUploadedFile {
	  constructor(initialFile, uploadIndex) {
	    super({
	      name: initialFile.name,
	      size: initialFile.size,
	      type: "existing",
	      uploadIndex
	    });
	  }

	  getInitialFile() {
	    return {
	      name: this.name,
	      size: this.size,
	      type: "existing"
	    };
	  }

	}
	class UploadedTusFile extends BaseUploadedFile {
	  constructor(_ref2) {
	    let {
	      csrfToken,
	      initialFile,
	      uploadIndex,
	      uploadUrl
	    } = _ref2;
	    super({
	      name: initialFile.name,
	      size: initialFile.size,
	      type: "uploadedTus",
	      uploadIndex
	    });

	    _defineProperty$2(this, "csrfToken", void 0);

	    _defineProperty$2(this, "id", void 0);

	    _defineProperty$2(this, "url", void 0);

	    this.csrfToken = csrfToken;
	    this.id = initialFile.id;
	    this.url = "".concat(uploadUrl).concat(initialFile.id);
	  }

	  async delete() {
	    await deleteUpload(this.url, this.csrfToken);
	  }

	  getInitialFile() {
	    return {
	      id: this.id,
	      name: this.name,
	      size: this.size,
	      type: "tus",
	      url: ""
	    };
	  }

	}
	const createUploadedFile = _ref3 => {
	  let {
	    csrfToken,
	    initialFile,
	    uploadIndex,
	    uploadUrl
	  } = _ref3;

	  switch (initialFile.type) {
	    case "existing":
	      return new ExistingFile(initialFile, uploadIndex);

	    case "placeholder":
	      return new PlaceholderFile(initialFile, uploadIndex);

	    case "s3":
	      return new UploadedS3File(initialFile, uploadIndex);

	    case "tus":
	      return new UploadedTusFile({
	        csrfToken,
	        initialFile,
	        uploadUrl,
	        uploadIndex
	      });
	  }
	};

	/**
	 *  base64.ts
	 *
	 *  Licensed under the BSD 3-Clause License.
	 *    http://opensource.org/licenses/BSD-3-Clause
	 *
	 *  References:
	 *    http://en.wikipedia.org/wiki/Base64
	 *
	 * @author Dan Kogai (https://github.com/dankogai)
	 */
	const version = '3.7.2';
	/**
	 * @deprecated use lowercase `version`.
	 */
	const VERSION = version;
	const _hasatob = typeof atob === 'function';
	const _hasbtoa = typeof btoa === 'function';
	const _hasBuffer = typeof Buffer === 'function';
	const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
	const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
	const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	const b64chs = Array.prototype.slice.call(b64ch);
	const b64tab = ((a) => {
	    let tab = {};
	    a.forEach((c, i) => tab[c] = i);
	    return tab;
	})(b64chs);
	const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
	const _fromCC = String.fromCharCode.bind(String);
	const _U8Afrom = typeof Uint8Array.from === 'function'
	    ? Uint8Array.from.bind(Uint8Array)
	    : (it, fn = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
	const _mkUriSafe = (src) => src
	    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
	const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
	/**
	 * polyfill version of `btoa`
	 */
	const btoaPolyfill = (bin) => {
	    // console.log('polyfilled');
	    let u32, c0, c1, c2, asc = '';
	    const pad = bin.length % 3;
	    for (let i = 0; i < bin.length;) {
	        if ((c0 = bin.charCodeAt(i++)) > 255 ||
	            (c1 = bin.charCodeAt(i++)) > 255 ||
	            (c2 = bin.charCodeAt(i++)) > 255)
	            throw new TypeError('invalid character found');
	        u32 = (c0 << 16) | (c1 << 8) | c2;
	        asc += b64chs[u32 >> 18 & 63]
	            + b64chs[u32 >> 12 & 63]
	            + b64chs[u32 >> 6 & 63]
	            + b64chs[u32 & 63];
	    }
	    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
	};
	/**
	 * does what `window.btoa` of web browsers do.
	 * @param {String} bin binary string
	 * @returns {string} Base64-encoded string
	 */
	const _btoa = _hasbtoa ? (bin) => btoa(bin)
	    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
	        : btoaPolyfill;
	const _fromUint8Array = _hasBuffer
	    ? (u8a) => Buffer.from(u8a).toString('base64')
	    : (u8a) => {
	        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
	        const maxargs = 0x1000;
	        let strs = [];
	        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
	            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
	        }
	        return _btoa(strs.join(''));
	    };
	/**
	 * converts a Uint8Array to a Base64 string.
	 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
	 * @returns {string} Base64 string
	 */
	const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
	// This trick is found broken https://github.com/dankogai/js-base64/issues/130
	// const utob = (src: string) => unescape(encodeURIComponent(src));
	// reverting good old fationed regexp
	const cb_utob = (c) => {
	    if (c.length < 2) {
	        var cc = c.charCodeAt(0);
	        return cc < 0x80 ? c
	            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
	                + _fromCC(0x80 | (cc & 0x3f)))
	                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
	                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
	                    + _fromCC(0x80 | (cc & 0x3f)));
	    }
	    else {
	        var cc = 0x10000
	            + (c.charCodeAt(0) - 0xD800) * 0x400
	            + (c.charCodeAt(1) - 0xDC00);
	        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
	            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
	            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
	            + _fromCC(0x80 | (cc & 0x3f)));
	    }
	};
	const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	/**
	 * @deprecated should have been internal use only.
	 * @param {string} src UTF-8 string
	 * @returns {string} UTF-16 string
	 */
	const utob = (u) => u.replace(re_utob, cb_utob);
	//
	const _encode = _hasBuffer
	    ? (s) => Buffer.from(s, 'utf8').toString('base64')
	    : _TE
	        ? (s) => _fromUint8Array(_TE.encode(s))
	        : (s) => _btoa(utob(s));
	/**
	 * converts a UTF-8-encoded string to a Base64 string.
	 * @param {boolean} [urlsafe] if `true` make the result URL-safe
	 * @returns {string} Base64 string
	 */
	const encode$1 = (src, urlsafe = false) => urlsafe
	    ? _mkUriSafe(_encode(src))
	    : _encode(src);
	/**
	 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
	 * @returns {string} Base64 string
	 */
	const encodeURI = (src) => encode$1(src, true);
	// This trick is found broken https://github.com/dankogai/js-base64/issues/130
	// const btou = (src: string) => decodeURIComponent(escape(src));
	// reverting good old fationed regexp
	const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
	const cb_btou = (cccc) => {
	    switch (cccc.length) {
	        case 4:
	            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                | ((0x3f & cccc.charCodeAt(1)) << 12)
	                | ((0x3f & cccc.charCodeAt(2)) << 6)
	                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
	            return (_fromCC((offset >>> 10) + 0xD800)
	                + _fromCC((offset & 0x3FF) + 0xDC00));
	        case 3:
	            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
	                | ((0x3f & cccc.charCodeAt(1)) << 6)
	                | (0x3f & cccc.charCodeAt(2)));
	        default:
	            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
	                | (0x3f & cccc.charCodeAt(1)));
	    }
	};
	/**
	 * @deprecated should have been internal use only.
	 * @param {string} src UTF-16 string
	 * @returns {string} UTF-8 string
	 */
	const btou = (b) => b.replace(re_btou, cb_btou);
	/**
	 * polyfill version of `atob`
	 */
	const atobPolyfill = (asc) => {
	    // console.log('polyfilled');
	    asc = asc.replace(/\s+/g, '');
	    if (!b64re.test(asc))
	        throw new TypeError('malformed base64.');
	    asc += '=='.slice(2 - (asc.length & 3));
	    let u24, bin = '', r1, r2;
	    for (let i = 0; i < asc.length;) {
	        u24 = b64tab[asc.charAt(i++)] << 18
	            | b64tab[asc.charAt(i++)] << 12
	            | (r1 = b64tab[asc.charAt(i++)]) << 6
	            | (r2 = b64tab[asc.charAt(i++)]);
	        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
	            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
	                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
	    }
	    return bin;
	};
	/**
	 * does what `window.atob` of web browsers do.
	 * @param {String} asc Base64-encoded string
	 * @returns {string} binary string
	 */
	const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
	    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
	        : atobPolyfill;
	//
	const _toUint8Array = _hasBuffer
	    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
	    : (a) => _U8Afrom(_atob(a), c => c.charCodeAt(0));
	/**
	 * converts a Base64 string to a Uint8Array.
	 */
	const toUint8Array = (a) => _toUint8Array(_unURI(a));
	//
	const _decode = _hasBuffer
	    ? (a) => Buffer.from(a, 'base64').toString('utf8')
	    : _TD
	        ? (a) => _TD.decode(_toUint8Array(a))
	        : (a) => btou(_atob(a));
	const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
	/**
	 * converts a Base64 string to a UTF-8 string.
	 * @param {String} src Base64 string.  Both normal and URL-safe are supported
	 * @returns {string} UTF-8 string
	 */
	const decode$1 = (src) => _decode(_unURI(src));
	/**
	 * check if a value is a valid Base64 string
	 * @param {String} src a value to check
	  */
	const isValid = (src) => {
	    if (typeof src !== 'string')
	        return false;
	    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
	    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
	};
	//
	const _noEnum = (v) => {
	    return {
	        value: v, enumerable: false, writable: true, configurable: true
	    };
	};
	/**
	 * extend String.prototype with relevant methods
	 */
	const extendString = function () {
	    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
	    _add('fromBase64', function () { return decode$1(this); });
	    _add('toBase64', function (urlsafe) { return encode$1(this, urlsafe); });
	    _add('toBase64URI', function () { return encode$1(this, true); });
	    _add('toBase64URL', function () { return encode$1(this, true); });
	    _add('toUint8Array', function () { return toUint8Array(this); });
	};
	/**
	 * extend Uint8Array.prototype with relevant methods
	 */
	const extendUint8Array = function () {
	    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
	    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
	    _add('toBase64URI', function () { return fromUint8Array(this, true); });
	    _add('toBase64URL', function () { return fromUint8Array(this, true); });
	};
	/**
	 * extend Builtin prototypes with relevant methods
	 */
	const extendBuiltins = () => {
	    extendString();
	    extendUint8Array();
	};
	const gBase64 = {
	    version: version,
	    VERSION: VERSION,
	    atob: _atob,
	    atobPolyfill: atobPolyfill,
	    btoa: _btoa,
	    btoaPolyfill: btoaPolyfill,
	    fromBase64: decode$1,
	    toBase64: encode$1,
	    encode: encode$1,
	    encodeURI: encodeURI,
	    encodeURL: encodeURI,
	    utob: utob,
	    btou: btou,
	    decode: decode$1,
	    isValid: isValid,
	    fromUint8Array: fromUint8Array,
	    toUint8Array: toUint8Array,
	    extendString: extendString,
	    extendUint8Array: extendUint8Array,
	    extendBuiltins: extendBuiltins,
	};

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */


	var requiresPort = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;
	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	      return port !== 80;

	    case 'https':
	    case 'wss':
	      return port !== 443;

	    case 'ftp':
	      return port !== 21;

	    case 'gopher':
	      return port !== 70;

	    case 'file':
	      return false;
	  }

	  return port !== 0;
	};

	var querystringify$1 = {};

	var has = Object.prototype.hasOwnProperty,
	    undef;
	/**
	 * Decode a URI encoded string.
	 *
	 * @param {String} input The URI encoded string.
	 * @returns {String|Null} The decoded string.
	 * @api private
	 */

	function decode(input) {
	  try {
	    return decodeURIComponent(input.replace(/\+/g, ' '));
	  } catch (e) {
	    return null;
	  }
	}
	/**
	 * Attempts to encode a given input.
	 *
	 * @param {String} input The string that needs to be encoded.
	 * @returns {String|Null} The encoded string.
	 * @api private
	 */


	function encode(input) {
	  try {
	    return encodeURIComponent(input);
	  } catch (e) {
	    return null;
	  }
	}
	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */


	function querystring(query) {
	  var parser = /([^=?#&]+)=?([^&]*)/g,
	      result = {},
	      part;

	  while (part = parser.exec(query)) {
	    var key = decode(part[1]),
	        value = decode(part[2]); //
	    // Prevent overriding of existing properties. This ensures that build-in
	    // methods like `toString` or __proto__ are not overriden by malicious
	    // querystrings.
	    //
	    // In the case if failed decoding, we want to omit the key/value pairs
	    // from the result.
	    //

	    if (key === null || value === null || key in result) continue;
	    result[key] = value;
	  }

	  return result;
	}
	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */


	function querystringify(obj, prefix) {
	  prefix = prefix || '';
	  var pairs = [],
	      value,
	      key; //
	  // Optionally prefix with a '?' if needed
	  //

	  if ('string' !== typeof prefix) prefix = '?';

	  for (key in obj) {
	    if (has.call(obj, key)) {
	      value = obj[key]; //
	      // Edge cases where we actually want to encode the value to an empty
	      // string instead of the stringified value.
	      //

	      if (!value && (value === null || value === undef || isNaN(value))) {
	        value = '';
	      }

	      key = encode(key);
	      value = encode(value); //
	      // If we failed to encode the strings, we should bail out as we don't
	      // want to add invalid strings to the query.
	      //

	      if (key === null || value === null) continue;
	      pairs.push(key + '=' + value);
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	} //
	// Expose the module.
	//


	querystringify$1.stringify = querystringify;
	querystringify$1.parse = querystring;

	var required = requiresPort,
	    qs = querystringify$1,
	    controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
	    CRHTLF = /[\n\r\t]/g,
	    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
	    port = /:\d+$/,
	    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
	    windowsDriveLetter = /^[a-zA-Z]:/;
	/**
	 * Remove control characters and whitespace from the beginning of a string.
	 *
	 * @param {Object|String} str String to trim.
	 * @returns {String} A new string representing `str` stripped of control
	 *     characters and whitespace from its beginning.
	 * @public
	 */

	function trimLeft(str) {
	  return (str ? str : '').toString().replace(controlOrWhitespace, '');
	}
	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */


	var rules = [['#', 'hash'], // Extract from the back.
	['?', 'query'], // Extract from the back.
	function sanitize(address, url) {
	  // Sanitize what is left of the address
	  return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
	}, ['/', 'pathname'], // Extract from the back.
	['@', 'auth', 1], // Extract from the front.
	[NaN, 'host', undefined, 1, 1], // Set left over value.
	[/:(\d*)$/, 'port', undefined, 1], // RegExp the back.
	[NaN, 'hostname', undefined, 1, 1] // Set left over.
	];
	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */

	var ignore = {
	  hash: 1,
	  query: 1
	};
	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @public
	 */

	function lolcation(loc) {
	  var globalVar;
	  if (typeof window !== 'undefined') globalVar = window;else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
	  var location = globalVar.location || {};
	  loc = loc || location;
	  var finaldestination = {},
	      type = typeof loc,
	      key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new Url(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new Url(loc, {});

	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	}
	/**
	 * Check whether a protocol scheme is special.
	 *
	 * @param {String} The protocol scheme of the URL
	 * @return {Boolean} `true` if the protocol scheme is special, else `false`
	 * @private
	 */


	function isSpecial(scheme) {
	  return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
	}
	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @param {Object} location
	 * @return {ProtocolExtract} Extracted information.
	 * @private
	 */


	function extractProtocol(address, location) {
	  address = trimLeft(address);
	  address = address.replace(CRHTLF, '');
	  location = location || {};
	  var match = protocolre.exec(address);
	  var protocol = match[1] ? match[1].toLowerCase() : '';
	  var forwardSlashes = !!match[2];
	  var otherSlashes = !!match[3];
	  var slashesCount = 0;
	  var rest;

	  if (forwardSlashes) {
	    if (otherSlashes) {
	      rest = match[2] + match[3] + match[4];
	      slashesCount = match[2].length + match[3].length;
	    } else {
	      rest = match[2] + match[4];
	      slashesCount = match[2].length;
	    }
	  } else {
	    if (otherSlashes) {
	      rest = match[3] + match[4];
	      slashesCount = match[3].length;
	    } else {
	      rest = match[4];
	    }
	  }

	  if (protocol === 'file:') {
	    if (slashesCount >= 2) {
	      rest = rest.slice(2);
	    }
	  } else if (isSpecial(protocol)) {
	    rest = match[4];
	  } else if (protocol) {
	    if (forwardSlashes) {
	      rest = rest.slice(2);
	    }
	  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
	    rest = match[4];
	  }

	  return {
	    protocol: protocol,
	    slashes: forwardSlashes || isSpecial(protocol),
	    slashesCount: slashesCount,
	    rest: rest
	  };
	}
	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @private
	 */


	function resolve(relative, base) {
	  if (relative === '') return base;
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
	      i = path.length,
	      last = path[i - 1],
	      unshift = false,
	      up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');
	  return path.join('/');
	}
	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * It is worth noting that we should not use `URL` as class name to prevent
	 * clashes with the global URL instance that got introduced in browsers.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} [location] Location defaults for relative paths.
	 * @param {Boolean|Function} [parser] Parser for the query string.
	 * @private
	 */


	function Url(address, location, parser) {
	  address = trimLeft(address);
	  address = address.replace(CRHTLF, '');

	  if (!(this instanceof Url)) {
	    return new Url(address, location, parser);
	  }

	  var relative,
	      extracted,
	      parse,
	      instruction,
	      index,
	      key,
	      instructions = rules.slice(),
	      type = typeof location,
	      url = this,
	      i = 0; //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //

	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = qs.parse;
	  location = lolcation(location); //
	  // Extract protocol information before running the instructions.
	  //

	  extracted = extractProtocol(address || '', location);
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest; //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //

	  if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
	    instructions[3] = [/(.*)/, 'pathname'];
	  }

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];

	    if (typeof instruction === 'function') {
	      address = instruction(address, url);
	      continue;
	    }

	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      index = parse === '@' ? address.lastIndexOf(parse) : address.indexOf(parse);

	      if (~index) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if (index = parse.exec(address)) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //

	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  } //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //


	  if (parser) url.query = parser(url.query); //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //

	  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  } //
	  // Default to a / for pathname if none exists. This normalizes the URL
	  // to always have a /
	  //


	  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
	    url.pathname = '/' + url.pathname;
	  } //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //


	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  } //
	  // Parse down the `auth` for the username and password.
	  //


	  url.username = url.password = '';

	  if (url.auth) {
	    index = url.auth.indexOf(':');

	    if (~index) {
	      url.username = url.auth.slice(0, index);
	      url.username = encodeURIComponent(decodeURIComponent(url.username));
	      url.password = url.auth.slice(index + 1);
	      url.password = encodeURIComponent(decodeURIComponent(url.password));
	    } else {
	      url.username = encodeURIComponent(decodeURIComponent(url.auth));
	    }

	    url.auth = url.password ? url.username + ':' + url.password : url.username;
	  }

	  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null'; //
	  // The href is just the compiled result.
	  //

	  url.href = url.toString();
	}
	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL} URL instance for chaining.
	 * @public
	 */


	function set$1(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname + ':' + value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;
	      if (url.port) value += ':' + url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (port.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	    case 'hash':
	      if (value) {
	        var char = part === 'pathname' ? '/' : '#';
	        url[part] = value.charAt(0) !== char ? char + value : value;
	      } else {
	        url[part] = value;
	      }

	      break;

	    case 'username':
	    case 'password':
	      url[part] = encodeURIComponent(value);
	      break;

	    case 'auth':
	      var index = value.indexOf(':');

	      if (~index) {
	        url.username = value.slice(0, index);
	        url.username = encodeURIComponent(decodeURIComponent(url.username));
	        url.password = value.slice(index + 1);
	        url.password = encodeURIComponent(decodeURIComponent(url.password));
	      } else {
	        url.username = encodeURIComponent(decodeURIComponent(value));
	      }

	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];
	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.auth = url.password ? url.username + ':' + url.password : url.username;
	  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
	  url.href = url.toString();
	  return url;
	}
	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String} Compiled version of the URL.
	 * @public
	 */


	function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
	  var query,
	      url = this,
	      host = url.host,
	      protocol = url.protocol;
	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
	  var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':' + url.password;
	    result += '@';
	  } else if (url.password) {
	    result += ':' + url.password;
	    result += '@';
	  } else if (url.protocol !== 'file:' && isSpecial(url.protocol) && !host && url.pathname !== '/') {
	    //
	    // Add back the empty userinfo, otherwise the original invalid URL
	    // might be transformed into a valid one with `url.pathname` as host.
	    //
	    result += '@';
	  } //
	  // Trailing colon is removed from `url.host` when it is parsed. If it still
	  // ends with a colon, then add back the trailing colon that was removed. This
	  // prevents an invalid URL from being transformed into a valid one.
	  //


	  if (host[host.length - 1] === ':' || port.test(url.hostname) && !url.port) {
	    host += ':';
	  }

	  result += host + url.pathname;
	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
	  if (url.hash) result += url.hash;
	  return result;
	}

	Url.prototype = {
	  set: set$1,
	  toString: toString
	}; //
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//

	Url.extractProtocol = extractProtocol;
	Url.location = lolcation;
	Url.trimLeft = trimLeft;
	Url.qs = qs;
	var urlParse = Url;

	function _typeof$1(obj) {
	  "@babel/helpers - typeof";

	  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof$1(obj);
	}

	function _defineProperties$8(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$8(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$8(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$8(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _classCallCheck$8(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _inherits$1(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf$1(subClass, superClass);
	}

	function _createSuper$1(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf$1(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf$1(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn$1(this, result);
	  };
	}

	function _possibleConstructorReturn$1(self, call) {
	  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized$1(self);
	}

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf$1(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf$1(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct$1()) {
	    _construct = Reflect.construct.bind();
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf$1(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	function _isNativeReflectConstruct$1() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	function _setPrototypeOf$1(o, p) {
	  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf$1(o, p);
	}

	function _getPrototypeOf$1(o) {
	  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf$1(o);
	}

	var DetailedError = /*#__PURE__*/function (_Error) {
	  _inherits$1(DetailedError, _Error);

	  var _super = _createSuper$1(DetailedError);

	  function DetailedError(message) {
	    var _this;

	    var causingErr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var req = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    var res = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	    _classCallCheck$8(this, DetailedError);

	    _this = _super.call(this, message);
	    _this.originalRequest = req;
	    _this.originalResponse = res;
	    _this.causingError = causingErr;

	    if (causingErr != null) {
	      message += ", caused by ".concat(causingErr.toString());
	    }

	    if (req != null) {
	      var requestId = req.getHeader('X-Request-ID') || 'n/a';
	      var method = req.getMethod();
	      var url = req.getURL();
	      var status = res ? res.getStatus() : 'n/a';
	      var body = res ? res.getBody() || '' : 'n/a';
	      message += ", originated from request (method: ".concat(method, ", url: ").concat(url, ", response code: ").concat(status, ", response text: ").concat(body, ", request id: ").concat(requestId, ")");
	    }

	    _this.message = message;
	    return _this;
	  }

	  return _createClass$8(DetailedError);
	}( /*#__PURE__*/_wrapNativeSuper(Error));

	/* eslint no-console: "off" */
	function log$1(msg) {
	  return;
	}

	/**
	 * Generate a UUID v4 based on random numbers. We intentioanlly use the less
	 * secure Math.random function here since the more secure crypto.getRandomNumbers
	 * is not available on all platforms.
	 * This is not a problem for us since we use the UUID only for generating a
	 * request ID, so we can correlate server logs to client errors.
	 *
	 * This function is taken from following site:
	 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	 *
	 * @return {string} The generate UUID
	 */
	function uuid() {
	  /* eslint-disable no-bitwise */
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0;
	    var v = c === 'x' ? r : r & 0x3 | 0x8;
	    return v.toString(16);
	  });
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function ownKeys$1(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread$1(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }

	  return target;
	}

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _classCallCheck$7(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$7(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$7(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$7(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$7(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	var defaultOptions$1 = {
	  endpoint: null,
	  uploadUrl: null,
	  metadata: {},
	  fingerprint: null,
	  uploadSize: null,
	  onProgress: null,
	  onChunkComplete: null,
	  onSuccess: null,
	  onError: null,
	  _onUploadUrlAvailable: null,
	  overridePatchMethod: false,
	  headers: {},
	  addRequestId: false,
	  onBeforeRequest: null,
	  onAfterResponse: null,
	  onShouldRetry: null,
	  chunkSize: Infinity,
	  retryDelays: [0, 1000, 3000, 5000],
	  parallelUploads: 1,
	  parallelUploadBoundaries: null,
	  storeFingerprintForResuming: true,
	  removeFingerprintOnSuccess: false,
	  uploadLengthDeferred: false,
	  uploadDataDuringCreation: false,
	  urlStorage: null,
	  fileReader: null,
	  httpStack: null
	};

	var BaseUpload = /*#__PURE__*/function () {
	  function BaseUpload(file, options) {
	    _classCallCheck$7(this, BaseUpload); // Warn about removed options from previous versions


	    if ('resume' in options) {
	      console.log('tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead.'); // eslint-disable-line no-console
	    } // The default options will already be added from the wrapper classes.


	    this.options = options; // Cast chunkSize to integer

	    this.options.chunkSize = Number(this.options.chunkSize); // The storage module used to store URLs

	    this._urlStorage = this.options.urlStorage; // The underlying File/Blob object

	    this.file = file; // The URL against which the file will be uploaded

	    this.url = null; // The underlying request object for the current PATCH request

	    this._req = null; // The fingerpinrt for the current file (set after start())

	    this._fingerprint = null; // The key that the URL storage returned when saving an URL with a fingerprint,

	    this._urlStorageKey = null; // The offset used in the current PATCH request

	    this._offset = null; // True if the current PATCH request has been aborted

	    this._aborted = false; // The file's size in bytes

	    this._size = null; // The Source object which will wrap around the given file and provides us
	    // with a unified interface for getting its size and slice chunks from its
	    // content allowing us to easily handle Files, Blobs, Buffers and Streams.

	    this._source = null; // The current count of attempts which have been made. Zero indicates none.

	    this._retryAttempt = 0; // The timeout's ID which is used to delay the next retry

	    this._retryTimeout = null; // The offset of the remote upload before the latest attempt was started.

	    this._offsetBeforeRetry = 0; // An array of BaseUpload instances which are used for uploading the different
	    // parts, if the parallelUploads option is used.

	    this._parallelUploads = null; // An array of upload URLs which are used for uploading the different
	    // parts, if the parallelUploads option is used.

	    this._parallelUploadUrls = null;
	  }
	  /**
	   * Use the Termination extension to delete an upload from the server by sending a DELETE
	   * request to the specified upload URL. This is only possible if the server supports the
	   * Termination extension. If the `options.retryDelays` property is set, the method will
	   * also retry if an error ocurrs.
	   *
	   * @param {String} url The upload's URL which will be terminated.
	   * @param {object} options Optional options for influencing HTTP requests.
	   * @return {Promise} The Promise will be resolved/rejected when the requests finish.
	   */


	  _createClass$7(BaseUpload, [{
	    key: "findPreviousUploads",
	    value: function findPreviousUploads() {
	      var _this = this;

	      return this.options.fingerprint(this.file, this.options).then(function (fingerprint) {
	        return _this._urlStorage.findUploadsByFingerprint(fingerprint);
	      });
	    }
	  }, {
	    key: "resumeFromPreviousUpload",
	    value: function resumeFromPreviousUpload(previousUpload) {
	      this.url = previousUpload.uploadUrl || null;
	      this._parallelUploadUrls = previousUpload.parallelUploadUrls || null;
	      this._urlStorageKey = previousUpload.urlStorageKey;
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      var _this2 = this;

	      var file = this.file;

	      if (!file) {
	        this._emitError(new Error('tus: no file or stream to upload provided'));

	        return;
	      }

	      if (!this.options.endpoint && !this.options.uploadUrl && !this.url) {
	        this._emitError(new Error('tus: neither an endpoint or an upload URL is provided'));

	        return;
	      }

	      var retryDelays = this.options.retryDelays;

	      if (retryDelays != null && Object.prototype.toString.call(retryDelays) !== '[object Array]') {
	        this._emitError(new Error('tus: the `retryDelays` option must either be an array or null'));

	        return;
	      }

	      if (this.options.parallelUploads > 1) {
	        // Test which options are incompatible with parallel uploads.
	        for (var _i = 0, _arr = ['uploadUrl', 'uploadSize', 'uploadLengthDeferred']; _i < _arr.length; _i++) {
	          var optionName = _arr[_i];

	          if (this.options[optionName]) {
	            this._emitError(new Error("tus: cannot use the ".concat(optionName, " option when parallelUploads is enabled")));

	            return;
	          }
	        }
	      }

	      if (this.options.parallelUploadBoundaries) {
	        if (this.options.parallelUploads <= 1) {
	          this._emitError(new Error('tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled'));

	          return;
	        }

	        if (this.options.parallelUploads !== this.options.parallelUploadBoundaries.length) {
	          this._emitError(new Error('tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`'));

	          return;
	        }
	      }

	      this.options.fingerprint(file, this.options).then(function (fingerprint) {

	        _this2._fingerprint = fingerprint;

	        if (_this2._source) {
	          return _this2._source;
	        }

	        return _this2.options.fileReader.openFile(file, _this2.options.chunkSize);
	      }).then(function (source) {
	        _this2._source = source; // First, we look at the uploadLengthDeferred option.
	        // Next, we check if the caller has supplied a manual upload size.
	        // Finally, we try to use the calculated size from the source object.

	        if (_this2.options.uploadLengthDeferred) {
	          _this2._size = null;
	        } else if (_this2.options.uploadSize != null) {
	          _this2._size = Number(_this2.options.uploadSize);

	          if (Number.isNaN(_this2._size)) {
	            _this2._emitError(new Error('tus: cannot convert `uploadSize` option into a number'));

	            return;
	          }
	        } else {
	          _this2._size = _this2._source.size;

	          if (_this2._size == null) {
	            _this2._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));

	            return;
	          }
	        } // If the upload was configured to use multiple requests or if we resume from
	        // an upload which used multiple requests, we start a parallel upload.


	        if (_this2.options.parallelUploads > 1 || _this2._parallelUploadUrls != null) {
	          _this2._startParallelUpload();
	        } else {
	          _this2._startSingleUpload();
	        }
	      })["catch"](function (err) {
	        _this2._emitError(err);
	      });
	    }
	    /**
	     * Initiate the uploading procedure for a parallelized upload, where one file is split into
	     * multiple request which are run in parallel.
	     *
	     * @api private
	     */

	  }, {
	    key: "_startParallelUpload",
	    value: function _startParallelUpload() {
	      var _this$options$paralle,
	          _this3 = this;

	      var totalSize = this._size;
	      var totalProgress = 0;
	      this._parallelUploads = [];
	      var partCount = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads; // The input file will be split into multiple slices which are uploaded in separate
	      // requests. Here we get the start and end position for the slices.

	      var parts = (_this$options$paralle = this.options.parallelUploadBoundaries) !== null && _this$options$paralle !== void 0 ? _this$options$paralle : splitSizeIntoParts(this._source.size, partCount); // Attach URLs from previous uploads, if available.

	      if (this._parallelUploadUrls) {
	        parts.forEach(function (part, index) {
	          part.uploadUrl = _this3._parallelUploadUrls[index] || null;
	        });
	      } // Create an empty list for storing the upload URLs


	      this._parallelUploadUrls = new Array(parts.length); // Generate a promise for each slice that will be resolve if the respective
	      // upload is completed.

	      var uploads = parts.map(function (part, index) {
	        var lastPartProgress = 0;
	        return _this3._source.slice(part.start, part.end).then(function (_ref) {
	          var value = _ref.value;
	          return new Promise(function (resolve, reject) {
	            // Merge with the user supplied options but overwrite some values.
	            var options = _objectSpread$1(_objectSpread$1({}, _this3.options), {}, {
	              // If available, the partial upload should be resumed from a previous URL.
	              uploadUrl: part.uploadUrl || null,
	              // We take manually care of resuming for partial uploads, so they should
	              // not be stored in the URL storage.
	              storeFingerprintForResuming: false,
	              removeFingerprintOnSuccess: false,
	              // Reset the parallelUploads option to not cause recursion.
	              parallelUploads: 1,
	              // Reset this option as we are not doing a parallel upload.
	              parallelUploadBoundaries: null,
	              metadata: {},
	              // Add the header to indicate the this is a partial upload.
	              headers: _objectSpread$1(_objectSpread$1({}, _this3.options.headers), {}, {
	                'Upload-Concat': 'partial'
	              }),
	              // Reject or resolve the promise if the upload errors or completes.
	              onSuccess: resolve,
	              onError: reject,
	              // Based in the progress for this partial upload, calculate the progress
	              // for the entire final upload.
	              onProgress: function onProgress(newPartProgress) {
	                totalProgress = totalProgress - lastPartProgress + newPartProgress;
	                lastPartProgress = newPartProgress;

	                _this3._emitProgress(totalProgress, totalSize);
	              },
	              // Wait until every partial upload has an upload URL, so we can add
	              // them to the URL storage.
	              _onUploadUrlAvailable: function _onUploadUrlAvailable() {
	                _this3._parallelUploadUrls[index] = upload.url; // Test if all uploads have received an URL

	                if (_this3._parallelUploadUrls.filter(function (u) {
	                  return Boolean(u);
	                }).length === parts.length) {
	                  _this3._saveUploadInUrlStorage();
	                }
	              }
	            });

	            var upload = new BaseUpload(value, options);
	            upload.start(); // Store the upload in an array, so we can later abort them if necessary.

	            _this3._parallelUploads.push(upload);
	          });
	        });
	      });
	      var req; // Wait until all partial uploads are finished and we can send the POST request for
	      // creating the final upload.

	      Promise.all(uploads).then(function () {
	        req = _this3._openRequest('POST', _this3.options.endpoint);
	        req.setHeader('Upload-Concat', "final;".concat(_this3._parallelUploadUrls.join(' '))); // Add metadata if values have been added

	        var metadata = encodeMetadata(_this3.options.metadata);

	        if (metadata !== '') {
	          req.setHeader('Upload-Metadata', metadata);
	        }

	        return _this3._sendRequest(req, null);
	      }).then(function (res) {
	        if (!inStatusCategory(res.getStatus(), 200)) {
	          _this3._emitHttpError(req, res, 'tus: unexpected response while creating upload');

	          return;
	        }

	        var location = res.getHeader('Location');

	        if (location == null) {
	          _this3._emitHttpError(req, res, 'tus: invalid or missing Location header');

	          return;
	        }

	        _this3.url = resolveUrl(_this3.options.endpoint, location);
	        log$1("Created upload at ".concat(_this3.url));

	        _this3._emitSuccess();
	      })["catch"](function (err) {
	        _this3._emitError(err);
	      });
	    }
	    /**
	     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
	     * uploaded in a sequential matter.
	     *
	     * @api private
	     */

	  }, {
	    key: "_startSingleUpload",
	    value: function _startSingleUpload() {
	      // Reset the aborted flag when the upload is started or else the
	      // _performUpload will stop before sending a request if the upload has been
	      // aborted previously.
	      this._aborted = false; // The upload had been started previously and we should reuse this URL.

	      if (this.url != null) {
	        log$1("Resuming upload from previous URL: ".concat(this.url));

	        this._resumeUpload();

	        return;
	      } // A URL has manually been specified, so we try to resume


	      if (this.options.uploadUrl != null) {
	        log$1("Resuming upload from provided URL: ".concat(this.options.uploadUrl));
	        this.url = this.options.uploadUrl;

	        this._resumeUpload();

	        return;
	      } // An upload has not started for the file yet, so we start a new one

	      this._createUpload();
	    }
	    /**
	     * Abort any running request and stop the current upload. After abort is called, no event
	     * handler will be invoked anymore. You can use the `start` method to resume the upload
	     * again.
	     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
	     * current upload from the server.
	     *
	     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
	     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
	     */

	  }, {
	    key: "abort",
	    value: function abort(shouldTerminate) {
	      var _this4 = this; // Stop any parallel partial uploads, that have been started in _startParallelUploads.


	      if (this._parallelUploads != null) {
	        this._parallelUploads.forEach(function (upload) {
	          upload.abort(shouldTerminate);
	        });
	      } // Stop any current running request.


	      if (this._req !== null) {
	        this._req.abort(); // Note: We do not close the file source here, so the user can resume in the future.

	      }

	      this._aborted = true; // Stop any timeout used for initiating a retry.

	      if (this._retryTimeout != null) {
	        clearTimeout(this._retryTimeout);
	        this._retryTimeout = null;
	      }

	      if (!shouldTerminate || this.url == null) {
	        return Promise.resolve();
	      }

	      return BaseUpload.terminate(this.url, this.options) // Remove entry from the URL storage since the upload URL is no longer valid.
	      .then(function () {
	        return _this4._removeFromUrlStorage();
	      });
	    }
	  }, {
	    key: "_emitHttpError",
	    value: function _emitHttpError(req, res, message, causingErr) {
	      this._emitError(new DetailedError(message, causingErr, req, res));
	    }
	  }, {
	    key: "_emitError",
	    value: function _emitError(err) {
	      var _this5 = this; // Do not emit errors, e.g. from aborted HTTP requests, if the upload has been stopped.


	      if (this._aborted) return; // Check if we should retry, when enabled, before sending the error to the user.

	      if (this.options.retryDelays != null) {
	        // We will reset the attempt counter if
	        // - we were already able to connect to the server (offset != null) and
	        // - we were able to upload a small chunk of data to the server
	        var shouldResetDelays = this._offset != null && this._offset > this._offsetBeforeRetry;

	        if (shouldResetDelays) {
	          this._retryAttempt = 0;
	        }

	        if (shouldRetry(err, this._retryAttempt, this.options)) {
	          var delay = this.options.retryDelays[this._retryAttempt++];
	          this._offsetBeforeRetry = this._offset;
	          this._retryTimeout = setTimeout(function () {
	            _this5.start();
	          }, delay);
	          return;
	        }
	      }

	      if (typeof this.options.onError === 'function') {
	        this.options.onError(err);
	      } else {
	        throw err;
	      }
	    }
	    /**
	     * Publishes notification if the upload has been successfully completed.
	     *
	     * @api private
	     */

	  }, {
	    key: "_emitSuccess",
	    value: function _emitSuccess() {
	      if (this.options.removeFingerprintOnSuccess) {
	        // Remove stored fingerprint and corresponding endpoint. This causes
	        // new uploads of the same file to be treated as a different file.
	        this._removeFromUrlStorage();
	      }

	      if (typeof this.options.onSuccess === 'function') {
	        this.options.onSuccess();
	      }
	    }
	    /**
	     * Publishes notification when data has been sent to the server. This
	     * data may not have been accepted by the server yet.
	     *
	     * @param {number} bytesSent  Number of bytes sent to the server.
	     * @param {number} bytesTotal Total number of bytes to be sent to the server.
	     * @api private
	     */

	  }, {
	    key: "_emitProgress",
	    value: function _emitProgress(bytesSent, bytesTotal) {
	      if (typeof this.options.onProgress === 'function') {
	        this.options.onProgress(bytesSent, bytesTotal);
	      }
	    }
	    /**
	     * Publishes notification when a chunk of data has been sent to the server
	     * and accepted by the server.
	     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
	     * @param {number} bytesAccepted Total number of bytes that have been
	     *                                accepted by the server.
	     * @param {number} bytesTotal Total number of bytes to be sent to the server.
	     * @api private
	     */

	  }, {
	    key: "_emitChunkComplete",
	    value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
	      if (typeof this.options.onChunkComplete === 'function') {
	        this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
	      }
	    }
	    /**
	     * Create a new upload using the creation extension by sending a POST
	     * request to the endpoint. After successful creation the file will be
	     * uploaded
	     *
	     * @api private
	     */

	  }, {
	    key: "_createUpload",
	    value: function _createUpload() {
	      var _this6 = this;

	      if (!this.options.endpoint) {
	        this._emitError(new Error('tus: unable to create upload because no endpoint is provided'));

	        return;
	      }

	      var req = this._openRequest('POST', this.options.endpoint);

	      if (this.options.uploadLengthDeferred) {
	        req.setHeader('Upload-Defer-Length', 1);
	      } else {
	        req.setHeader('Upload-Length', this._size);
	      } // Add metadata if values have been added


	      var metadata = encodeMetadata(this.options.metadata);

	      if (metadata !== '') {
	        req.setHeader('Upload-Metadata', metadata);
	      }

	      var promise;

	      if (this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred) {
	        this._offset = 0;
	        promise = this._addChunkToRequest(req);
	      } else {
	        promise = this._sendRequest(req, null);
	      }

	      promise.then(function (res) {
	        if (!inStatusCategory(res.getStatus(), 200)) {
	          _this6._emitHttpError(req, res, 'tus: unexpected response while creating upload');

	          return;
	        }

	        var location = res.getHeader('Location');

	        if (location == null) {
	          _this6._emitHttpError(req, res, 'tus: invalid or missing Location header');

	          return;
	        }

	        _this6.url = resolveUrl(_this6.options.endpoint, location);
	        log$1("Created upload at ".concat(_this6.url));

	        if (typeof _this6.options._onUploadUrlAvailable === 'function') {
	          _this6.options._onUploadUrlAvailable();
	        }

	        if (_this6._size === 0) {
	          // Nothing to upload and file was successfully created
	          _this6._emitSuccess();

	          _this6._source.close();

	          return;
	        }

	        _this6._saveUploadInUrlStorage().then(function () {
	          if (_this6.options.uploadDataDuringCreation) {
	            _this6._handleUploadResponse(req, res);
	          } else {
	            _this6._offset = 0;

	            _this6._performUpload();
	          }
	        });
	      })["catch"](function (err) {
	        _this6._emitHttpError(req, null, 'tus: failed to create upload', err);
	      });
	    }
	    /*
	     * Try to resume an existing upload. First a HEAD request will be sent
	     * to retrieve the offset. If the request fails a new upload will be
	     * created. In the case of a successful response the file will be uploaded.
	     *
	     * @api private
	     */

	  }, {
	    key: "_resumeUpload",
	    value: function _resumeUpload() {
	      var _this7 = this;

	      var req = this._openRequest('HEAD', this.url);

	      var promise = this._sendRequest(req, null);

	      promise.then(function (res) {
	        var status = res.getStatus();

	        if (!inStatusCategory(status, 200)) {
	          // If the upload is locked (indicated by the 423 Locked status code), we
	          // emit an error instead of directly starting a new upload. This way the
	          // retry logic can catch the error and will retry the upload. An upload
	          // is usually locked for a short period of time and will be available
	          // afterwards.
	          if (status === 423) {
	            _this7._emitHttpError(req, res, 'tus: upload is currently locked; retry later');

	            return;
	          }

	          if (inStatusCategory(status, 400)) {
	            // Remove stored fingerprint and corresponding endpoint,
	            // on client errors since the file can not be found
	            _this7._removeFromUrlStorage();
	          }

	          if (!_this7.options.endpoint) {
	            // Don't attempt to create a new upload if no endpoint is provided.
	            _this7._emitHttpError(req, res, 'tus: unable to resume upload (new upload cannot be created without an endpoint)');

	            return;
	          } // Try to create a new upload


	          _this7.url = null;

	          _this7._createUpload();

	          return;
	        }

	        var offset = parseInt(res.getHeader('Upload-Offset'), 10);

	        if (Number.isNaN(offset)) {
	          _this7._emitHttpError(req, res, 'tus: invalid or missing offset value');

	          return;
	        }

	        var length = parseInt(res.getHeader('Upload-Length'), 10);

	        if (Number.isNaN(length) && !_this7.options.uploadLengthDeferred) {
	          _this7._emitHttpError(req, res, 'tus: invalid or missing length value');

	          return;
	        }

	        if (typeof _this7.options._onUploadUrlAvailable === 'function') {
	          _this7.options._onUploadUrlAvailable();
	        }

	        _this7._saveUploadInUrlStorage().then(function () {
	          // Upload has already been completed and we do not need to send additional
	          // data to the server
	          if (offset === length) {
	            _this7._emitProgress(length, length);

	            _this7._emitSuccess();

	            return;
	          }

	          _this7._offset = offset;

	          _this7._performUpload();
	        });
	      })["catch"](function (err) {
	        _this7._emitHttpError(req, null, 'tus: failed to resume upload', err);
	      });
	    }
	    /**
	     * Start uploading the file using PATCH requests. The file will be divided
	     * into chunks as specified in the chunkSize option. During the upload
	     * the onProgress event handler may be invoked multiple times.
	     *
	     * @api private
	     */

	  }, {
	    key: "_performUpload",
	    value: function _performUpload() {
	      var _this8 = this; // If the upload has been aborted, we will not send the next PATCH request.
	      // This is important if the abort method was called during a callback, such
	      // as onChunkComplete or onProgress.


	      if (this._aborted) {
	        return;
	      }

	      var req; // Some browser and servers may not support the PATCH method. For those
	      // cases, you can tell tus-js-client to use a POST request with the
	      // X-HTTP-Method-Override header for simulating a PATCH request.

	      if (this.options.overridePatchMethod) {
	        req = this._openRequest('POST', this.url);
	        req.setHeader('X-HTTP-Method-Override', 'PATCH');
	      } else {
	        req = this._openRequest('PATCH', this.url);
	      }

	      req.setHeader('Upload-Offset', this._offset);

	      var promise = this._addChunkToRequest(req);

	      promise.then(function (res) {
	        if (!inStatusCategory(res.getStatus(), 200)) {
	          _this8._emitHttpError(req, res, 'tus: unexpected response while uploading chunk');

	          return;
	        }

	        _this8._handleUploadResponse(req, res);
	      })["catch"](function (err) {
	        // Don't emit an error if the upload was aborted manually
	        if (_this8._aborted) {
	          return;
	        }

	        _this8._emitHttpError(req, null, "tus: failed to upload chunk at offset ".concat(_this8._offset), err);
	      });
	    }
	    /**
	     * _addChunktoRequest reads a chunk from the source and sends it using the
	     * supplied request object. It will not handle the response.
	     *
	     * @api private
	     */

	  }, {
	    key: "_addChunkToRequest",
	    value: function _addChunkToRequest(req) {
	      var _this9 = this;

	      var start = this._offset;
	      var end = this._offset + this.options.chunkSize;
	      req.setProgressHandler(function (bytesSent) {
	        _this9._emitProgress(start + bytesSent, _this9._size);
	      });
	      req.setHeader('Content-Type', 'application/offset+octet-stream'); // The specified chunkSize may be Infinity or the calcluated end position
	      // may exceed the file's size. In both cases, we limit the end position to
	      // the input's total size for simpler calculations and correctness.

	      if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
	        end = this._size;
	      }

	      return this._source.slice(start, end).then(function (_ref2) {
	        var value = _ref2.value,
	            done = _ref2.done; // If the upload length is deferred, the upload size was not specified during
	        // upload creation. So, if the file reader is done reading, we know the total
	        // upload size and can tell the tus server.

	        if (_this9.options.uploadLengthDeferred && done) {
	          _this9._size = _this9._offset + (value && value.size ? value.size : 0);
	          req.setHeader('Upload-Length', _this9._size);
	        }

	        if (value === null) {
	          return _this9._sendRequest(req);
	        }

	        _this9._emitProgress(_this9._offset, _this9._size);

	        return _this9._sendRequest(req, value);
	      });
	    }
	    /**
	     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
	     * and already have received a response.
	     *
	     * @api private
	     */

	  }, {
	    key: "_handleUploadResponse",
	    value: function _handleUploadResponse(req, res) {
	      var offset = parseInt(res.getHeader('Upload-Offset'), 10);

	      if (Number.isNaN(offset)) {
	        this._emitHttpError(req, res, 'tus: invalid or missing offset value');

	        return;
	      }

	      this._emitProgress(offset, this._size);

	      this._emitChunkComplete(offset - this._offset, offset, this._size);

	      this._offset = offset;

	      if (offset === this._size) {
	        // Yay, finally done :)
	        this._emitSuccess();

	        this._source.close();

	        return;
	      }

	      this._performUpload();
	    }
	    /**
	     * Create a new HTTP request object with the given method and URL.
	     *
	     * @api private
	     */

	  }, {
	    key: "_openRequest",
	    value: function _openRequest(method, url) {
	      var req = openRequest(method, url, this.options);
	      this._req = req;
	      return req;
	    }
	    /**
	     * Remove the entry in the URL storage, if it has been saved before.
	     *
	     * @api private
	     */

	  }, {
	    key: "_removeFromUrlStorage",
	    value: function _removeFromUrlStorage() {
	      var _this10 = this;

	      if (!this._urlStorageKey) return;

	      this._urlStorage.removeUpload(this._urlStorageKey)["catch"](function (err) {
	        _this10._emitError(err);
	      });

	      this._urlStorageKey = null;
	    }
	    /**
	     * Add the upload URL to the URL storage, if possible.
	     *
	     * @api private
	     */

	  }, {
	    key: "_saveUploadInUrlStorage",
	    value: function _saveUploadInUrlStorage() {
	      var _this11 = this; // We do not store the upload URL
	      // - if it was disabled in the option, or
	      // - if no fingerprint was calculated for the input (i.e. a stream), or
	      // - if the URL is already stored (i.e. key is set alread).


	      if (!this.options.storeFingerprintForResuming || !this._fingerprint || this._urlStorageKey !== null) {
	        return Promise.resolve();
	      }

	      var storedUpload = {
	        size: this._size,
	        metadata: this.options.metadata,
	        creationTime: new Date().toString()
	      };

	      if (this._parallelUploads) {
	        // Save multiple URLs if the parallelUploads option is used ...
	        storedUpload.parallelUploadUrls = this._parallelUploadUrls;
	      } else {
	        // ... otherwise we just save the one available URL.
	        storedUpload.uploadUrl = this.url;
	      }

	      return this._urlStorage.addUpload(this._fingerprint, storedUpload).then(function (urlStorageKey) {
	        _this11._urlStorageKey = urlStorageKey;
	      });
	    }
	    /**
	     * Send a request with the provided body.
	     *
	     * @api private
	     */

	  }, {
	    key: "_sendRequest",
	    value: function _sendRequest(req) {
	      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      return sendRequest(req, body, this.options);
	    }
	  }], [{
	    key: "terminate",
	    value: function terminate(url) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var req = openRequest('DELETE', url, options);
	      return sendRequest(req, null, options).then(function (res) {
	        // A 204 response indicates a successfull request
	        if (res.getStatus() === 204) {
	          return;
	        }

	        throw new DetailedError('tus: unexpected response while terminating upload', null, req, res);
	      })["catch"](function (err) {
	        if (!(err instanceof DetailedError)) {
	          err = new DetailedError('tus: failed to terminate upload', err, req, null);
	        }

	        if (!shouldRetry(err, 0, options)) {
	          throw err;
	        } // Instead of keeping track of the retry attempts, we remove the first element from the delays
	        // array. If the array is empty, all retry attempts are used up and we will bubble up the error.
	        // We recursively call the terminate function will removing elements from the retryDelays array.


	        var delay = options.retryDelays[0];
	        var remainingDelays = options.retryDelays.slice(1);

	        var newOptions = _objectSpread$1(_objectSpread$1({}, options), {}, {
	          retryDelays: remainingDelays
	        });

	        return new Promise(function (resolve) {
	          return setTimeout(resolve, delay);
	        }).then(function () {
	          return BaseUpload.terminate(url, newOptions);
	        });
	      });
	    }
	  }]);

	  return BaseUpload;
	}();

	function encodeMetadata(metadata) {
	  return Object.entries(metadata).map(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        key = _ref4[0],
	        value = _ref4[1];

	    return "".concat(key, " ").concat(gBase64.encode(String(value)));
	  }).join(',');
	}
	/**
	 * Checks whether a given status is in the range of the expected category.
	 * For example, only a status between 200 and 299 will satisfy the category 200.
	 *
	 * @api private
	 */


	function inStatusCategory(status, category) {
	  return status >= category && status < category + 100;
	}
	/**
	 * Create a new HTTP request with the specified method and URL.
	 * The necessary headers that are included in every request
	 * will be added, including the request ID.
	 *
	 * @api private
	 */


	function openRequest(method, url, options) {
	  var req = options.httpStack.createRequest(method, url);
	  req.setHeader('Tus-Resumable', '1.0.0');
	  var headers = options.headers || {};
	  Object.entries(headers).forEach(function (_ref5) {
	    var _ref6 = _slicedToArray(_ref5, 2),
	        name = _ref6[0],
	        value = _ref6[1];

	    req.setHeader(name, value);
	  });

	  if (options.addRequestId) {
	    var requestId = uuid();
	    req.setHeader('X-Request-ID', requestId);
	  }

	  return req;
	}
	/**
	 * Send a request with the provided body while invoking the onBeforeRequest
	 * and onAfterResponse callbacks.
	 *
	 * @api private
	 */


	function sendRequest(req, body, options) {
	  var onBeforeRequestPromise = typeof options.onBeforeRequest === 'function' ? Promise.resolve(options.onBeforeRequest(req)) : Promise.resolve();
	  return onBeforeRequestPromise.then(function () {
	    return req.send(body).then(function (res) {
	      var onAfterResponsePromise = typeof options.onAfterResponse === 'function' ? Promise.resolve(options.onAfterResponse(req, res)) : Promise.resolve();
	      return onAfterResponsePromise.then(function () {
	        return res;
	      });
	    });
	  });
	}
	/**
	 * Checks whether the browser running this code has internet access.
	 * This function will always return true in the node.js environment
	 *
	 * @api private
	 */


	function isOnline() {
	  var online = true;

	  if (typeof window !== 'undefined' && 'navigator' in window && window.navigator.onLine === false) {
	    online = false;
	  }

	  return online;
	}
	/**
	 * Checks whether or not it is ok to retry a request.
	 * @param {Error} err the error returned from the last request
	 * @param {number} retryAttempt the number of times the request has already been retried
	 * @param {object} options tus Upload options
	 *
	 * @api private
	 */


	function shouldRetry(err, retryAttempt, options) {
	  // We only attempt a retry if
	  // - retryDelays option is set
	  // - we didn't exceed the maxium number of retries, yet, and
	  // - this error was caused by a request or it's response and
	  // - the error is server error (i.e. not a status 4xx except a 409 or 423) or
	  // a onShouldRetry is specified and returns true
	  // - the browser does not indicate that we are offline
	  if (options.retryDelays == null || retryAttempt >= options.retryDelays.length || err.originalRequest == null) {
	    return false;
	  }

	  if (options && typeof options.onShouldRetry === 'function') {
	    return options.onShouldRetry(err, retryAttempt, options);
	  }

	  var status = err.originalResponse ? err.originalResponse.getStatus() : 0;
	  return (!inStatusCategory(status, 400) || status === 409 || status === 423) && isOnline();
	}
	/**
	 * Resolve a relative link given the origin as source. For example,
	 * if a HTTP request to http://example.com/files/ returns a Location
	 * header with the value /upload/abc, the resolved URL will be:
	 * http://example.com/upload/abc
	 */


	function resolveUrl(origin, link) {
	  return new urlParse(link, origin).toString();
	}
	/**
	 * Calculate the start and end positions for the parts if an upload
	 * is split into multiple parallel requests.
	 *
	 * @param {number} totalSize The byte size of the upload, which will be split.
	 * @param {number} partCount The number in how many parts the upload will be split.
	 * @return {object[]}
	 * @api private
	 */


	function splitSizeIntoParts(totalSize, partCount) {
	  var partSize = Math.floor(totalSize / partCount);
	  var parts = [];

	  for (var i = 0; i < partCount; i++) {
	    parts.push({
	      start: partSize * i,
	      end: partSize * (i + 1)
	    });
	  }

	  parts[partCount - 1].end = totalSize;
	  return parts;
	}

	BaseUpload.defaultOptions = defaultOptions$1;

	function _classCallCheck$6(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$6(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$6(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$6(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$6(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	/* eslint no-unused-vars: "off" */


	var NoopUrlStorage = /*#__PURE__*/function () {
	  function NoopUrlStorage() {
	    _classCallCheck$6(this, NoopUrlStorage);
	  }

	  _createClass$6(NoopUrlStorage, [{
	    key: "listAllUploads",
	    value: function listAllUploads() {
	      return Promise.resolve([]);
	    }
	  }, {
	    key: "findUploadsByFingerprint",
	    value: function findUploadsByFingerprint(fingerprint) {
	      return Promise.resolve([]);
	    }
	  }, {
	    key: "removeUpload",
	    value: function removeUpload(urlStorageKey) {
	      return Promise.resolve();
	    }
	  }, {
	    key: "addUpload",
	    value: function addUpload(fingerprint, upload) {
	      return Promise.resolve(null);
	    }
	  }]);

	  return NoopUrlStorage;
	}();

	function _classCallCheck$5(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$5(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$5(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$5(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$5(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var hasStorage = false;

	try {
	  hasStorage = 'localStorage' in window; // Attempt to store and read entries from the local storage to detect Private
	  // Mode on Safari on iOS (see #49)

	  var key$1 = 'tusSupport';
	  localStorage.setItem(key$1, localStorage.getItem(key$1));
	} catch (e) {
	  // If we try to access localStorage inside a sandboxed iframe, a SecurityError
	  // is thrown. When in private mode on iOS Safari, a QuotaExceededError is
	  // thrown (see #49)
	  if (e.code === e.SECURITY_ERR || e.code === e.QUOTA_EXCEEDED_ERR) {
	    hasStorage = false;
	  } else {
	    throw e;
	  }
	}

	var canStoreURLs = hasStorage;
	var WebStorageUrlStorage = /*#__PURE__*/function () {
	  function WebStorageUrlStorage() {
	    _classCallCheck$5(this, WebStorageUrlStorage);
	  }

	  _createClass$5(WebStorageUrlStorage, [{
	    key: "findAllUploads",
	    value: function findAllUploads() {
	      var results = this._findEntries('tus::');

	      return Promise.resolve(results);
	    }
	  }, {
	    key: "findUploadsByFingerprint",
	    value: function findUploadsByFingerprint(fingerprint) {
	      var results = this._findEntries("tus::".concat(fingerprint, "::"));

	      return Promise.resolve(results);
	    }
	  }, {
	    key: "removeUpload",
	    value: function removeUpload(urlStorageKey) {
	      localStorage.removeItem(urlStorageKey);
	      return Promise.resolve();
	    }
	  }, {
	    key: "addUpload",
	    value: function addUpload(fingerprint, upload) {
	      var id = Math.round(Math.random() * 1e12);
	      var key = "tus::".concat(fingerprint, "::").concat(id);
	      localStorage.setItem(key, JSON.stringify(upload));
	      return Promise.resolve(key);
	    }
	  }, {
	    key: "_findEntries",
	    value: function _findEntries(prefix) {
	      var results = [];

	      for (var i = 0; i < localStorage.length; i++) {
	        var _key = localStorage.key(i);

	        if (_key.indexOf(prefix) !== 0) continue;

	        try {
	          var upload = JSON.parse(localStorage.getItem(_key));
	          upload.urlStorageKey = _key;
	          results.push(upload);
	        } catch (e) {// The JSON parse error is intentionally ignored here, so a malformed
	          // entry in the storage cannot prevent an upload.
	        }
	      }

	      return results;
	    }
	  }]);

	  return WebStorageUrlStorage;
	}();

	function _classCallCheck$4(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$4(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$4(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$4(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	/* eslint-disable max-classes-per-file */


	var XHRHttpStack = /*#__PURE__*/function () {
	  function XHRHttpStack() {
	    _classCallCheck$4(this, XHRHttpStack);
	  }

	  _createClass$4(XHRHttpStack, [{
	    key: "createRequest",
	    value: function createRequest(method, url) {
	      return new Request(method, url);
	    }
	  }, {
	    key: "getName",
	    value: function getName() {
	      return 'XHRHttpStack';
	    }
	  }]);

	  return XHRHttpStack;
	}();

	var Request = /*#__PURE__*/function () {
	  function Request(method, url) {
	    _classCallCheck$4(this, Request);

	    this._xhr = new XMLHttpRequest();

	    this._xhr.open(method, url, true);

	    this._method = method;
	    this._url = url;
	    this._headers = {};
	  }

	  _createClass$4(Request, [{
	    key: "getMethod",
	    value: function getMethod() {
	      return this._method;
	    }
	  }, {
	    key: "getURL",
	    value: function getURL() {
	      return this._url;
	    }
	  }, {
	    key: "setHeader",
	    value: function setHeader(header, value) {
	      this._xhr.setRequestHeader(header, value);

	      this._headers[header] = value;
	    }
	  }, {
	    key: "getHeader",
	    value: function getHeader(header) {
	      return this._headers[header];
	    }
	  }, {
	    key: "setProgressHandler",
	    value: function setProgressHandler(progressHandler) {
	      // Test support for progress events before attaching an event listener
	      if (!('upload' in this._xhr)) {
	        return;
	      }

	      this._xhr.upload.onprogress = function (e) {
	        if (!e.lengthComputable) {
	          return;
	        }

	        progressHandler(e.loaded);
	      };
	    }
	  }, {
	    key: "send",
	    value: function send() {
	      var _this = this;

	      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      return new Promise(function (resolve, reject) {
	        _this._xhr.onload = function () {
	          resolve(new Response(_this._xhr));
	        };

	        _this._xhr.onerror = function (err) {
	          reject(err);
	        };

	        _this._xhr.send(body);
	      });
	    }
	  }, {
	    key: "abort",
	    value: function abort() {
	      this._xhr.abort();

	      return Promise.resolve();
	    }
	  }, {
	    key: "getUnderlyingObject",
	    value: function getUnderlyingObject() {
	      return this._xhr;
	    }
	  }]);

	  return Request;
	}();

	var Response = /*#__PURE__*/function () {
	  function Response(xhr) {
	    _classCallCheck$4(this, Response);

	    this._xhr = xhr;
	  }

	  _createClass$4(Response, [{
	    key: "getStatus",
	    value: function getStatus() {
	      return this._xhr.status;
	    }
	  }, {
	    key: "getHeader",
	    value: function getHeader(header) {
	      return this._xhr.getResponseHeader(header);
	    }
	  }, {
	    key: "getBody",
	    value: function getBody() {
	      return this._xhr.responseText;
	    }
	  }, {
	    key: "getUnderlyingObject",
	    value: function getUnderlyingObject() {
	      return this._xhr;
	    }
	  }]);

	  return Response;
	}();

	var isReactNative = function isReactNative() {
	  return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
	};

	/**
	 * uriToBlob resolves a URI to a Blob object. This is used for
	 * React Native to retrieve a file (identified by a file://
	 * URI) as a blob.
	 */
	function uriToBlob(uri) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.responseType = 'blob';

	    xhr.onload = function () {
	      var blob = xhr.response;
	      resolve(blob);
	    };

	    xhr.onerror = function (err) {
	      reject(err);
	    };

	    xhr.open('GET', uri);
	    xhr.send();
	  });
	}

	var isCordova = function isCordova() {
	  return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
	};

	var typedArrayConstructor = {exports: {}};

	var wellKnownSymbol$5 = wellKnownSymbol$g;

	var ITERATOR$2 = wellKnownSymbol$5('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	// eslint-disable-next-line es-x/no-typed-arrays -- safe
	var arrayBufferNative = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

	var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
	var DESCRIPTORS$3 = descriptors;
	var global$6 = global$l;
	var isCallable$2 = isCallable$k;
	var isObject$4 = isObject$b;
	var hasOwn$1 = hasOwnProperty_1;
	var classof$5 = classof$8;
	var tryToString$2 = tryToString$4;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;
	var defineBuiltIn$1 = defineBuiltIn$6;
	var defineProperty$1 = objectDefineProperty.f;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var setPrototypeOf$3 = objectSetPrototypeOf;
	var wellKnownSymbol$4 = wellKnownSymbol$g;
	var uid = uid$3;
	var InternalStateModule$2 = internalState;

	var enforceInternalState$1 = InternalStateModule$2.enforce;
	var getInternalState$2 = InternalStateModule$2.get;
	var Int8Array$3 = global$6.Int8Array;
	var Int8ArrayPrototype$1 = Int8Array$3 && Int8Array$3.prototype;
	var Uint8ClampedArray$1 = global$6.Uint8ClampedArray;
	var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
	var TypedArray$1 = Int8Array$3 && getPrototypeOf$1(Int8Array$3);
	var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && getPrototypeOf$1(Int8ArrayPrototype$1);
	var ObjectPrototype$1 = Object.prototype;
	var TypeError$1 = global$6.TypeError;

	var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');
	var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
	var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
	// Fixing native typed arrays in Opera Presto crashes the browser, see #595
	var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$3 && classof$5(global$6.opera) !== 'Opera';
	var TYPED_ARRAY_TAG_REQUIRED = false;
	var NAME, Constructor, Prototype;

	var TypedArrayConstructorsList = {
	  Int8Array: 1,
	  Uint8Array: 1,
	  Uint8ClampedArray: 1,
	  Int16Array: 2,
	  Uint16Array: 2,
	  Int32Array: 4,
	  Uint32Array: 4,
	  Float32Array: 4,
	  Float64Array: 8
	};

	var BigIntArrayConstructorsList = {
	  BigInt64Array: 8,
	  BigUint64Array: 8
	};

	var isView = function isView(it) {
	  if (!isObject$4(it)) return false;
	  var klass = classof$5(it);
	  return klass === 'DataView'
	    || hasOwn$1(TypedArrayConstructorsList, klass)
	    || hasOwn$1(BigIntArrayConstructorsList, klass);
	};

	var getTypedArrayConstructor = function (it) {
	  var proto = getPrototypeOf$1(it);
	  if (!isObject$4(proto)) return;
	  var state = getInternalState$2(proto);
	  return (state && hasOwn$1(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
	};

	var isTypedArray$1 = function (it) {
	  if (!isObject$4(it)) return false;
	  var klass = classof$5(it);
	  return hasOwn$1(TypedArrayConstructorsList, klass)
	    || hasOwn$1(BigIntArrayConstructorsList, klass);
	};

	var aTypedArray$3 = function (it) {
	  if (isTypedArray$1(it)) return it;
	  throw TypeError$1('Target is not a typed array');
	};

	var aTypedArrayConstructor$2 = function (C) {
	  if (isCallable$2(C) && (!setPrototypeOf$3 || isPrototypeOf$2(TypedArray$1, C))) return C;
	  throw TypeError$1(tryToString$2(C) + ' is not a typed array constructor');
	};

	var exportTypedArrayMethod$3 = function (KEY, property, forced, options) {
	  if (!DESCRIPTORS$3) return;
	  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
	    var TypedArrayConstructor = global$6[ARRAY];
	    if (TypedArrayConstructor && hasOwn$1(TypedArrayConstructor.prototype, KEY)) try {
	      delete TypedArrayConstructor.prototype[KEY];
	    } catch (error) {
	      // old WebKit bug - some methods are non-configurable
	      try {
	        TypedArrayConstructor.prototype[KEY] = property;
	      } catch (error2) { /* empty */ }
	    }
	  }
	  if (!TypedArrayPrototype$1[KEY] || forced) {
	    defineBuiltIn$1(TypedArrayPrototype$1, KEY, forced ? property
	      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
	  }
	};

	var exportTypedArrayStaticMethod = function (KEY, property, forced) {
	  var ARRAY, TypedArrayConstructor;
	  if (!DESCRIPTORS$3) return;
	  if (setPrototypeOf$3) {
	    if (forced) for (ARRAY in TypedArrayConstructorsList) {
	      TypedArrayConstructor = global$6[ARRAY];
	      if (TypedArrayConstructor && hasOwn$1(TypedArrayConstructor, KEY)) try {
	        delete TypedArrayConstructor[KEY];
	      } catch (error) { /* empty */ }
	    }
	    if (!TypedArray$1[KEY] || forced) {
	      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
	      try {
	        return defineBuiltIn$1(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
	      } catch (error) { /* empty */ }
	    } else return;
	  }
	  for (ARRAY in TypedArrayConstructorsList) {
	    TypedArrayConstructor = global$6[ARRAY];
	    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
	      defineBuiltIn$1(TypedArrayConstructor, KEY, property);
	    }
	  }
	};

	for (NAME in TypedArrayConstructorsList) {
	  Constructor = global$6[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
	}

	for (NAME in BigIntArrayConstructorsList) {
	  Constructor = global$6[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	}

	// WebKit bug - typed arrays constructors prototype is Object.prototype
	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$2(TypedArray$1) || TypedArray$1 === Function.prototype) {
	  // eslint-disable-next-line no-shadow -- safe
	  TypedArray$1 = function TypedArray() {
	    throw TypeError$1('Incorrect invocation');
	  };
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (global$6[NAME]) setPrototypeOf$3(global$6[NAME], TypedArray$1);
	  }
	}

	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype$1) {
	  TypedArrayPrototype$1 = TypedArray$1.prototype;
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (global$6[NAME]) setPrototypeOf$3(global$6[NAME].prototype, TypedArrayPrototype$1);
	  }
	}

	// WebKit bug - one more object in Uint8ClampedArray prototype chain
	if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$1(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
	  setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
	}

	if (DESCRIPTORS$3 && !hasOwn$1(TypedArrayPrototype$1, TO_STRING_TAG)) {
	  TYPED_ARRAY_TAG_REQUIRED = true;
	  defineProperty$1(TypedArrayPrototype$1, TO_STRING_TAG, { get: function () {
	    return isObject$4(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
	  } });
	  for (NAME in TypedArrayConstructorsList) if (global$6[NAME]) {
	    createNonEnumerableProperty$2(global$6[NAME], TYPED_ARRAY_TAG$1, NAME);
	  }
	}

	var arrayBufferViewCore = {
	  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
	  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
	  aTypedArray: aTypedArray$3,
	  aTypedArrayConstructor: aTypedArrayConstructor$2,
	  exportTypedArrayMethod: exportTypedArrayMethod$3,
	  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
	  getTypedArrayConstructor: getTypedArrayConstructor,
	  isView: isView,
	  isTypedArray: isTypedArray$1,
	  TypedArray: TypedArray$1,
	  TypedArrayPrototype: TypedArrayPrototype$1
	};

	/* eslint-disable no-new -- required for testing */

	var global$5 = global$l;
	var fails$5 = fails$n;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

	var ArrayBuffer$2 = global$5.ArrayBuffer;
	var Int8Array$2 = global$5.Int8Array;

	var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$5(function () {
	  Int8Array$2(1);
	}) || !fails$5(function () {
	  new Int8Array$2(-1);
	}) || !checkCorrectnessOfIteration(function (iterable) {
	  new Int8Array$2();
	  new Int8Array$2(null);
	  new Int8Array$2(1.5);
	  new Int8Array$2(iterable);
	}, true) || fails$5(function () {
	  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
	  return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
	});

	var defineBuiltIn = defineBuiltIn$6;

	var defineBuiltIns$1 = function (target, src, options) {
	  for (var key in src) defineBuiltIn(target, key, src[key], options);
	  return target;
	};

	var isPrototypeOf$1 = objectIsPrototypeOf;

	var $TypeError$3 = TypeError;

	var anInstance$2 = function (it, Prototype) {
	  if (isPrototypeOf$1(Prototype, it)) return it;
	  throw $TypeError$3('Incorrect invocation');
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$7;
	var toLength$2 = toLength$5;

	var $RangeError$2 = RangeError;

	// `ToIndex` abstract operation
	// https://tc39.es/ecma262/#sec-toindex
	var toIndex$2 = function (it) {
	  if (it === undefined) return 0;
	  var number = toIntegerOrInfinity$2(it);
	  var length = toLength$2(number);
	  if (number !== length) throw $RangeError$2('Wrong length or index');
	  return length;
	};

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var $Array$2 = Array;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor$2 = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;

	var pack = function (number, mantissaLength, bytes) {
	  var buffer = $Array$2(bytes);
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
	  var index = 0;
	  var exponent, mantissa, c;
	  number = abs(number);
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (number != number || number === Infinity) {
	    // eslint-disable-next-line no-self-compare -- NaN check
	    mantissa = number != number ? 1 : 0;
	    exponent = eMax;
	  } else {
	    exponent = floor$2(log(number) / LN2);
	    c = pow(2, -exponent);
	    if (number * c < 1) {
	      exponent--;
	      c *= 2;
	    }
	    if (exponent + eBias >= 1) {
	      number += rt / c;
	    } else {
	      number += rt * pow(2, 1 - eBias);
	    }
	    if (number * c >= 2) {
	      exponent++;
	      c /= 2;
	    }
	    if (exponent + eBias >= eMax) {
	      mantissa = 0;
	      exponent = eMax;
	    } else if (exponent + eBias >= 1) {
	      mantissa = (number * c - 1) * pow(2, mantissaLength);
	      exponent = exponent + eBias;
	    } else {
	      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
	      exponent = 0;
	    }
	  }
	  while (mantissaLength >= 8) {
	    buffer[index++] = mantissa & 255;
	    mantissa /= 256;
	    mantissaLength -= 8;
	  }
	  exponent = exponent << mantissaLength | mantissa;
	  exponentLength += mantissaLength;
	  while (exponentLength > 0) {
	    buffer[index++] = exponent & 255;
	    exponent /= 256;
	    exponentLength -= 8;
	  }
	  buffer[--index] |= sign * 128;
	  return buffer;
	};

	var unpack = function (buffer, mantissaLength) {
	  var bytes = buffer.length;
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var nBits = exponentLength - 7;
	  var index = bytes - 1;
	  var sign = buffer[index--];
	  var exponent = sign & 127;
	  var mantissa;
	  sign >>= 7;
	  while (nBits > 0) {
	    exponent = exponent * 256 + buffer[index--];
	    nBits -= 8;
	  }
	  mantissa = exponent & (1 << -nBits) - 1;
	  exponent >>= -nBits;
	  nBits += mantissaLength;
	  while (nBits > 0) {
	    mantissa = mantissa * 256 + buffer[index--];
	    nBits -= 8;
	  }
	  if (exponent === 0) {
	    exponent = 1 - eBias;
	  } else if (exponent === eMax) {
	    return mantissa ? NaN : sign ? -Infinity : Infinity;
	  } else {
	    mantissa = mantissa + pow(2, mantissaLength);
	    exponent = exponent - eBias;
	  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
	};

	var ieee754 = {
	  pack: pack,
	  unpack: unpack
	};

	var toObject$2 = toObject$6;
	var toAbsoluteIndex$1 = toAbsoluteIndex$3;
	var lengthOfArrayLike$4 = lengthOfArrayLike$6;

	// `Array.prototype.fill` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject$2(this);
	  var length = lengthOfArrayLike$4(O);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	var toPropertyKey$1 = toPropertyKey$4;
	var definePropertyModule$2 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$5;

	var createProperty$1 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var toAbsoluteIndex = toAbsoluteIndex$3;
	var lengthOfArrayLike$3 = lengthOfArrayLike$6;
	var createProperty = createProperty$1;

	var $Array$1 = Array;
	var max = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike$3(O);
	  var k = toAbsoluteIndex(start, length);
	  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	  var result = $Array$1(max(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	var global$4 = global$l;
	var uncurryThis$5 = functionUncurryThis;
	var DESCRIPTORS$2 = descriptors;
	var NATIVE_ARRAY_BUFFER = arrayBufferNative;
	var FunctionName = functionName;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
	var defineBuiltIns = defineBuiltIns$1;
	var fails$4 = fails$n;
	var anInstance$1 = anInstance$2;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$7;
	var toLength$1 = toLength$5;
	var toIndex$1 = toIndex$2;
	var IEEE754 = ieee754;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf$2 = objectSetPrototypeOf;
	var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var defineProperty = objectDefineProperty.f;
	var arrayFill = arrayFill$1;
	var arraySlice$1 = arraySliceSimple;
	var setToStringTag = setToStringTag$3;
	var InternalStateModule$1 = internalState;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var getInternalState$1 = InternalStateModule$1.get;
	var setInternalState$1 = InternalStateModule$1.set;
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH$1 = 'Wrong length';
	var WRONG_INDEX = 'Wrong index';
	var NativeArrayBuffer = global$4[ARRAY_BUFFER];
	var $ArrayBuffer = NativeArrayBuffer;
	var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
	var $DataView = global$4[DATA_VIEW];
	var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
	var ObjectPrototype = Object.prototype;
	var Array$1 = global$4.Array;
	var RangeError$3 = global$4.RangeError;
	var fill = uncurryThis$5(arrayFill);
	var reverse = uncurryThis$5([].reverse);

	var packIEEE754 = IEEE754.pack;
	var unpackIEEE754 = IEEE754.unpack;

	var packInt8 = function (number) {
	  return [number & 0xFF];
	};

	var packInt16 = function (number) {
	  return [number & 0xFF, number >> 8 & 0xFF];
	};

	var packInt32 = function (number) {
	  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
	};

	var unpackInt32 = function (buffer) {
	  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
	};

	var packFloat32 = function (number) {
	  return packIEEE754(number, 23, 4);
	};

	var packFloat64 = function (number) {
	  return packIEEE754(number, 52, 8);
	};

	var addGetter$1 = function (Constructor, key) {
	  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState$1(this)[key]; } });
	};

	var get = function (view, count, index, isLittleEndian) {
	  var intIndex = toIndex$1(index);
	  var store = getInternalState$1(view);
	  if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
	  var bytes = getInternalState$1(store.buffer).bytes;
	  var start = intIndex + store.byteOffset;
	  var pack = arraySlice$1(bytes, start, start + count);
	  return isLittleEndian ? pack : reverse(pack);
	};

	var set = function (view, count, index, conversion, value, isLittleEndian) {
	  var intIndex = toIndex$1(index);
	  var store = getInternalState$1(view);
	  if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
	  var bytes = getInternalState$1(store.buffer).bytes;
	  var start = intIndex + store.byteOffset;
	  var pack = conversion(+value);
	  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
	};

	if (!NATIVE_ARRAY_BUFFER) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance$1(this, ArrayBufferPrototype$1);
	    var byteLength = toIndex$1(length);
	    setInternalState$1(this, {
	      bytes: fill(Array$1(byteLength), 0),
	      byteLength: byteLength
	    });
	    if (!DESCRIPTORS$2) this.byteLength = byteLength;
	  };

	  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance$1(this, DataViewPrototype);
	    anInstance$1(buffer, ArrayBufferPrototype$1);
	    var bufferLength = getInternalState$1(buffer).byteLength;
	    var offset = toIntegerOrInfinity$1(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError$3('Wrong offset');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength$1(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError$3(WRONG_LENGTH$1);
	    setInternalState$1(this, {
	      buffer: buffer,
	      byteLength: byteLength,
	      byteOffset: offset
	    });
	    if (!DESCRIPTORS$2) {
	      this.buffer = buffer;
	      this.byteLength = byteLength;
	      this.byteOffset = offset;
	    }
	  };

	  DataViewPrototype = $DataView[PROTOTYPE];

	  if (DESCRIPTORS$2) {
	    addGetter$1($ArrayBuffer, 'byteLength');
	    addGetter$1($DataView, 'buffer');
	    addGetter$1($DataView, 'byteLength');
	    addGetter$1($DataView, 'byteOffset');
	  }

	  defineBuiltIns(DataViewPrototype, {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packInt8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packInt8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
	    }
	  });
	} else {
	  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
	  /* eslint-disable no-new -- required for testing */
	  if (!fails$4(function () {
	    NativeArrayBuffer(1);
	  }) || !fails$4(function () {
	    new NativeArrayBuffer(-1);
	  }) || fails$4(function () {
	    new NativeArrayBuffer();
	    new NativeArrayBuffer(1.5);
	    new NativeArrayBuffer(NaN);
	    return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
	  })) {
	  /* eslint-enable no-new -- required for testing */
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance$1(this, ArrayBufferPrototype$1);
	      return new NativeArrayBuffer(toIndex$1(length));
	    };

	    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

	    for (var keys = getOwnPropertyNames$1(NativeArrayBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) {
	        createNonEnumerableProperty$1($ArrayBuffer, key, NativeArrayBuffer[key]);
	      }
	    }

	    ArrayBufferPrototype$1.constructor = $ArrayBuffer;
	  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
	    createNonEnumerableProperty$1(NativeArrayBuffer, 'name', ARRAY_BUFFER);
	  }

	  // WebKit bug - the same parent prototype for typed arrays and data view
	  if (setPrototypeOf$2 && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
	    setPrototypeOf$2(DataViewPrototype, ObjectPrototype);
	  }

	  // iOS Safari 7.x bug
	  var testView = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = uncurryThis$5(DataViewPrototype.setInt8);
	  testView.setInt8(0, 2147483648);
	  testView.setInt8(1, 2147483649);
	  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8(this, byteOffset, value << 24 >> 24);
	    }
	  }, { unsafe: true });
	}

	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);

	var arrayBuffer = {
	  ArrayBuffer: $ArrayBuffer,
	  DataView: $DataView
	};

	var isObject$3 = isObject$b;

	var floor$1 = Math.floor;

	// `IsIntegralNumber` abstract operation
	// https://tc39.es/ecma262/#sec-isintegralnumber
	// eslint-disable-next-line es-x/no-number-isinteger -- safe
	var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
	  return !isObject$3(it) && isFinite(it) && floor$1(it) === it;
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$7;

	var $RangeError$1 = RangeError;

	var toPositiveInteger$1 = function (it) {
	  var result = toIntegerOrInfinity(it);
	  if (result < 0) throw $RangeError$1("The argument can't be less than 0");
	  return result;
	};

	var toPositiveInteger = toPositiveInteger$1;

	var $RangeError = RangeError;

	var toOffset$2 = function (it, BYTES) {
	  var offset = toPositiveInteger(it);
	  if (offset % BYTES) throw $RangeError('Wrong offset');
	  return offset;
	};

	var uncurryThis$4 = functionUncurryThis;
	var aCallable$2 = aCallable$4;
	var NATIVE_BIND = functionBindNative;

	var bind$2 = uncurryThis$4(uncurryThis$4.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$2(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var uncurryThis$3 = functionUncurryThis;
	var fails$3 = fails$n;
	var isCallable$1 = isCallable$k;
	var classof$4 = classof$8;
	var getBuiltIn$1 = getBuiltIn$6;
	var inspectSource = inspectSource$3;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn$1('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$3(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$1(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$1(argument)) return false;
	  switch (classof$4(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$2 = !construct || fails$3(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor$1 = isConstructor$2;
	var tryToString$1 = tryToString$4;

	var $TypeError$2 = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$1 = function (argument) {
	  if (isConstructor$1(argument)) return argument;
	  throw $TypeError$2(tryToString$1(argument) + ' is not a constructor');
	};

	var classof$3 = classof$8;
	var getMethod = getMethod$3;
	var Iterators$1 = iterators;
	var wellKnownSymbol$3 = wellKnownSymbol$g;

	var ITERATOR$1 = wellKnownSymbol$3('iterator');

	var getIteratorMethod$2 = function (it) {
	  if (it != undefined) return getMethod(it, ITERATOR$1)
	    || getMethod(it, '@@iterator')
	    || Iterators$1[classof$3(it)];
	};

	var call$4 = functionCall;
	var aCallable$1 = aCallable$4;
	var anObject = anObject$9;
	var tryToString = tryToString$4;
	var getIteratorMethod$1 = getIteratorMethod$2;

	var $TypeError$1 = TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$1(iteratorMethod)) return anObject(call$4(iteratorMethod, argument));
	  throw $TypeError$1(tryToString(argument) + ' is not iterable');
	};

	var wellKnownSymbol$2 = wellKnownSymbol$g;
	var Iterators = iterators;

	var ITERATOR = wellKnownSymbol$2('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
	};

	var bind$1 = functionBindContext;
	var call$3 = functionCall;
	var aConstructor = aConstructor$1;
	var toObject$1 = toObject$6;
	var lengthOfArrayLike$2 = lengthOfArrayLike$6;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

	var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
	  var C = aConstructor(this);
	  var O = toObject$1(source);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var i, length, result, step, iterator, next;
	  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    O = [];
	    while (!(step = call$3(next, iterator)).done) {
	      O.push(step.value);
	    }
	  }
	  if (mapping && argumentsLength > 2) {
	    mapfn = bind$1(mapfn, arguments[2]);
	  }
	  length = lengthOfArrayLike$2(O);
	  result = new (aTypedArrayConstructor$1(C))(length);
	  for (i = 0; length > i; i++) {
	    result[i] = mapping ? mapfn(O[i], i) : O[i];
	  }
	  return result;
	};

	var classof$2 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe
	var isArray$1 = Array.isArray || function isArray(argument) {
	  return classof$2(argument) == 'Array';
	};

	var isArray = isArray$1;
	var isConstructor = isConstructor$2;
	var isObject$2 = isObject$b;
	var wellKnownSymbol$1 = wellKnownSymbol$g;

	var SPECIES$1 = wellKnownSymbol$1('species');
	var $Array = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
	    else if (isObject$2(C)) {
	      C = C[SPECIES$1];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$1 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind = functionBindContext;
	var uncurryThis$2 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject = toObject$6;
	var lengthOfArrayLike$1 = lengthOfArrayLike$6;
	var arraySpeciesCreate = arraySpeciesCreate$1;

	var push = uncurryThis$2([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind(callbackfn, that);
	    var length = lengthOfArrayLike$1(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod(7)
	};

	var getBuiltIn = getBuiltIn$6;
	var definePropertyModule$1 = objectDefineProperty;
	var wellKnownSymbol = wellKnownSymbol$g;
	var DESCRIPTORS$1 = descriptors;

	var SPECIES = wellKnownSymbol('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule$1.f;

	  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES]) {
	    defineProperty(Constructor, SPECIES, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var isCallable = isCallable$k;
	var isObject$1 = isObject$b;
	var setPrototypeOf$1 = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf$1 &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf$1($this, NewTargetPrototype);
	  return $this;
	};

	var $ = _export;
	var global$3 = global$l;
	var call$2 = functionCall;
	var DESCRIPTORS = descriptors;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
	var ArrayBufferViewCore$3 = arrayBufferViewCore;
	var ArrayBufferModule = arrayBuffer;
	var anInstance = anInstance$2;
	var createPropertyDescriptor = createPropertyDescriptor$5;
	var createNonEnumerableProperty = createNonEnumerableProperty$8;
	var isIntegralNumber = isIntegralNumber$1;
	var toLength = toLength$5;
	var toIndex = toIndex$2;
	var toOffset$1 = toOffset$2;
	var toPropertyKey = toPropertyKey$4;
	var hasOwn = hasOwnProperty_1;
	var classof$1 = classof$8;
	var isObject = isObject$b;
	var isSymbol = isSymbol$3;
	var create = objectCreate;
	var isPrototypeOf = objectIsPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var typedArrayFrom = typedArrayFrom$1;
	var forEach = arrayIteration.forEach;
	var setSpecies = setSpecies$1;
	var definePropertyModule = objectDefineProperty;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var InternalStateModule = internalState;
	var inheritIfRequired = inheritIfRequired$1;

	var getInternalState = InternalStateModule.get;
	var setInternalState = InternalStateModule.set;
	var enforceInternalState = InternalStateModule.enforce;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var round = Math.round;
	var RangeError$2 = global$3.RangeError;
	var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
	var ArrayBufferPrototype = ArrayBuffer$1.prototype;
	var DataView$1 = ArrayBufferModule.DataView;
	var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$3.NATIVE_ARRAY_BUFFER_VIEWS;
	var TYPED_ARRAY_TAG = ArrayBufferViewCore$3.TYPED_ARRAY_TAG;
	var TypedArray = ArrayBufferViewCore$3.TypedArray;
	var TypedArrayPrototype = ArrayBufferViewCore$3.TypedArrayPrototype;
	var aTypedArrayConstructor = ArrayBufferViewCore$3.aTypedArrayConstructor;
	var isTypedArray = ArrayBufferViewCore$3.isTypedArray;
	var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	var WRONG_LENGTH = 'Wrong length';

	var fromList = function (C, list) {
	  aTypedArrayConstructor(C);
	  var index = 0;
	  var length = list.length;
	  var result = new C(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	};

	var addGetter = function (it, key) {
	  nativeDefineProperty(it, key, { get: function () {
	    return getInternalState(this)[key];
	  } });
	};

	var isArrayBuffer = function (it) {
	  var klass;
	  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$1(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
	};

	var isTypedArrayIndex = function (target, key) {
	  return isTypedArray(target)
	    && !isSymbol(key)
	    && key in target
	    && isIntegralNumber(+key)
	    && key >= 0;
	};

	var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
	  key = toPropertyKey(key);
	  return isTypedArrayIndex(target, key)
	    ? createPropertyDescriptor(2, target[key])
	    : nativeGetOwnPropertyDescriptor(target, key);
	};

	var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
	  key = toPropertyKey(key);
	  if (isTypedArrayIndex(target, key)
	    && isObject(descriptor)
	    && hasOwn(descriptor, 'value')
	    && !hasOwn(descriptor, 'get')
	    && !hasOwn(descriptor, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !descriptor.configurable
	    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
	    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
	  ) {
	    target[key] = descriptor.value;
	    return target;
	  } return nativeDefineProperty(target, key, descriptor);
	};

	if (DESCRIPTORS) {
	  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
	    definePropertyModule.f = wrappedDefineProperty;
	    addGetter(TypedArrayPrototype, 'buffer');
	    addGetter(TypedArrayPrototype, 'byteOffset');
	    addGetter(TypedArrayPrototype, 'byteLength');
	    addGetter(TypedArrayPrototype, 'length');
	  }

	  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
	    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
	    defineProperty: wrappedDefineProperty
	  });

	  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
	    var BYTES = TYPE.match(/\d+$/)[0] / 8;
	    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + TYPE;
	    var SETTER = 'set' + TYPE;
	    var NativeTypedArrayConstructor = global$3[CONSTRUCTOR_NAME];
	    var TypedArrayConstructor = NativeTypedArrayConstructor;
	    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
	    var exported = {};

	    var getter = function (that, index) {
	      var data = getInternalState(that);
	      return data.view[GETTER](index * BYTES + data.byteOffset, true);
	    };

	    var setter = function (that, index, value) {
	      var data = getInternalState(that);
	      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
	      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
	    };

	    var addElement = function (that, index) {
	      nativeDefineProperty(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };

	    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
	        anInstance(that, TypedArrayConstructorPrototype);
	        var index = 0;
	        var byteOffset = 0;
	        var buffer, byteLength, length;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new ArrayBuffer$1(byteLength);
	        } else if (isArrayBuffer(data)) {
	          buffer = data;
	          byteOffset = toOffset$1(offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError$2(WRONG_LENGTH);
	            byteLength = $len - byteOffset;
	            if (byteLength < 0) throw RangeError$2(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + byteOffset > $len) throw RangeError$2(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (isTypedArray(data)) {
	          return fromList(TypedArrayConstructor, data);
	        } else {
	          return call$2(typedArrayFrom, TypedArrayConstructor, data);
	        }
	        setInternalState(that, {
	          buffer: buffer,
	          byteOffset: byteOffset,
	          byteLength: byteLength,
	          length: length,
	          view: new DataView$1(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });

	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
	    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
	      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
	        anInstance(dummy, TypedArrayConstructorPrototype);
	        return inheritIfRequired(function () {
	          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
	          if (isArrayBuffer(data)) return $length !== undefined
	            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
	            : typedArrayOffset !== undefined
	              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
	              : new NativeTypedArrayConstructor(data);
	          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
	          return call$2(typedArrayFrom, TypedArrayConstructor, data);
	        }(), dummy, TypedArrayConstructor);
	      });

	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
	        if (!(key in TypedArrayConstructor)) {
	          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
	        }
	      });
	      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
	    }

	    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
	      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
	    }

	    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

	    if (TYPED_ARRAY_TAG) {
	      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
	    }

	    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

	    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

	    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
	      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
	    }

	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
	      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
	    }

	    setSpecies(CONSTRUCTOR_NAME);
	  };
	} else typedArrayConstructor.exports = function () { /* empty */ };

	var createTypedArrayConstructor = typedArrayConstructor.exports;

	// `Uint8Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor('Uint8', function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var toPrimitive = toPrimitive$2;

	var $TypeError = TypeError;

	// `ToBigInt` abstract operation
	// https://tc39.es/ecma262/#sec-tobigint
	var toBigInt$1 = function (argument) {
	  var prim = toPrimitive(argument, 'number');
	  if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint");
	  // eslint-disable-next-line es-x/no-bigint -- safe
	  return BigInt(prim);
	};

	var ArrayBufferViewCore$2 = arrayBufferViewCore;
	var $fill = arrayFill$1;
	var toBigInt = toBigInt$1;
	var classof = classof$8;
	var call$1 = functionCall;
	var uncurryThis$1 = functionUncurryThis;
	var fails$2 = fails$n;

	var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
	var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;
	var slice = uncurryThis$1(''.slice);

	// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
	var CONVERSION_BUG = fails$2(function () {
	  var count = 0;
	  // eslint-disable-next-line es-x/no-typed-arrays -- safe
	  new Int8Array(2).fill({ valueOf: function () { return count++; } });
	  return count !== 1;
	});

	// `%TypedArray%.prototype.fill` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
	exportTypedArrayMethod$2('fill', function fill(value /* , start, end */) {
	  var length = arguments.length;
	  aTypedArray$2(this);
	  var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
	  return call$1($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
	}, CONVERSION_BUG);

	var global$2 = global$l;
	var call = functionCall;
	var ArrayBufferViewCore$1 = arrayBufferViewCore;
	var lengthOfArrayLike = lengthOfArrayLike$6;
	var toOffset = toOffset$2;
	var toIndexedObject = toObject$6;
	var fails$1 = fails$n;

	var RangeError$1 = global$2.RangeError;
	var Int8Array$1 = global$2.Int8Array;
	var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
	var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
	var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
	var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;

	var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails$1(function () {
	  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
	  var array = new Uint8ClampedArray(2);
	  call($set, array, { length: 1, 0: 3 }, 1);
	  return array[1] !== 3;
	});

	// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
	var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$1.NATIVE_ARRAY_BUFFER_VIEWS && fails$1(function () {
	  var array = new Int8Array$1(2);
	  array.set(1);
	  array.set('2', 1);
	  return array[0] !== 0 || array[1] !== 2;
	});

	// `%TypedArray%.prototype.set` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
	exportTypedArrayMethod$1('set', function set(arrayLike /* , offset */) {
	  aTypedArray$1(this);
	  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
	  var src = toIndexedObject(arrayLike);
	  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
	  var length = this.length;
	  var len = lengthOfArrayLike(src);
	  var index = 0;
	  if (len + offset > length) throw RangeError$1('Wrong length');
	  while (index < len) this[offset + index] = src[index++];
	}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

	var arraySlice = arraySliceSimple;

	var floor = Math.floor;

	var mergeSort = function (array, comparefn) {
	  var length = array.length;
	  var middle = floor(length / 2);
	  return length < 8 ? insertionSort(array, comparefn) : merge(
	    array,
	    mergeSort(arraySlice(array, 0, middle), comparefn),
	    mergeSort(arraySlice(array, middle), comparefn),
	    comparefn
	  );
	};

	var insertionSort = function (array, comparefn) {
	  var length = array.length;
	  var i = 1;
	  var element, j;

	  while (i < length) {
	    j = i;
	    element = array[i];
	    while (j && comparefn(array[j - 1], element) > 0) {
	      array[j] = array[--j];
	    }
	    if (j !== i++) array[j] = element;
	  } return array;
	};

	var merge = function (array, left, right, comparefn) {
	  var llength = left.length;
	  var rlength = right.length;
	  var lindex = 0;
	  var rindex = 0;

	  while (lindex < llength || rindex < rlength) {
	    array[lindex + rindex] = (lindex < llength && rindex < rlength)
	      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
	      : lindex < llength ? left[lindex++] : right[rindex++];
	  } return array;
	};

	var arraySort = mergeSort;

	var userAgent$1 = engineUserAgent;

	var firefox = userAgent$1.match(/firefox\/(\d+)/i);

	var engineFfVersion = !!firefox && +firefox[1];

	var UA = engineUserAgent;

	var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

	var userAgent = engineUserAgent;

	var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

	var engineWebkitVersion = !!webkit && +webkit[1];

	var global$1 = global$l;
	var uncurryThis = functionUncurryThis;
	var fails = fails$n;
	var aCallable = aCallable$4;
	var internalSort = arraySort;
	var ArrayBufferViewCore = arrayBufferViewCore;
	var FF = engineFfVersion;
	var IE_OR_EDGE = engineIsIeOrEdge;
	var V8 = engineV8Version;
	var WEBKIT = engineWebkitVersion;

	var aTypedArray = ArrayBufferViewCore.aTypedArray;
	var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
	var Uint16Array = global$1.Uint16Array;
	var un$Sort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

	// WebKit
	var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails(function () {
	  un$Sort(new Uint16Array(2), null);
	}) && fails(function () {
	  un$Sort(new Uint16Array(2), {});
	}));

	var STABLE_SORT = !!un$Sort && !fails(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8) return V8 < 74;
	  if (FF) return FF < 67;
	  if (IE_OR_EDGE) return true;
	  if (WEBKIT) return WEBKIT < 602;

	  var array = new Uint16Array(516);
	  var expected = Array(516);
	  var index, mod;

	  for (index = 0; index < 516; index++) {
	    mod = index % 4;
	    array[index] = 515 - index;
	    expected[index] = index - 2 * mod + 3;
	  }

	  un$Sort(array, function (a, b) {
	    return (a / 4 | 0) - (b / 4 | 0);
	  });

	  for (index = 0; index < 516; index++) {
	    if (array[index] !== expected[index]) return true;
	  }
	});

	var getSortCompare = function (comparefn) {
	  return function (x, y) {
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (y !== y) return -1;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (x !== x) return 1;
	    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
	    return x > y;
	  };
	};

	// `%TypedArray%.prototype.sort` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
	exportTypedArrayMethod('sort', function sort(comparefn) {
	  if (comparefn !== undefined) aCallable(comparefn);
	  if (STABLE_SORT) return un$Sort(this, comparefn);

	  return internalSort(aTypedArray(this), getSortCompare(comparefn));
	}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

	/**
	 * readAsByteArray converts a File object to a Uint8Array.
	 * This function is only used on the Apache Cordova platform.
	 * See https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/index.html#read-a-file
	 */
	function readAsByteArray(chunk) {
	  return new Promise(function (resolve, reject) {
	    var reader = new FileReader();

	    reader.onload = function () {
	      var value = new Uint8Array(reader.result);
	      resolve({
	        value: value
	      });
	    };

	    reader.onerror = function (err) {
	      reject(err);
	    };

	    reader.readAsArrayBuffer(chunk);
	  });
	}

	function _classCallCheck$3(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$3(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$3(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$3(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var FileSource = /*#__PURE__*/function () {
	  // Make this.size a method
	  function FileSource(file) {
	    _classCallCheck$3(this, FileSource);

	    this._file = file;
	    this.size = file.size;
	  }

	  _createClass$3(FileSource, [{
	    key: "slice",
	    value: function slice(start, end) {
	      // In Apache Cordova applications, a File must be resolved using
	      // FileReader instances, see
	      // https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html#read-a-file
	      if (isCordova()) {
	        return readAsByteArray(this._file.slice(start, end));
	      }

	      var value = this._file.slice(start, end);

	      return Promise.resolve({
	        value: value
	      });
	    }
	  }, {
	    key: "close",
	    value: function close() {// Nothing to do here since we don't need to release any resources.
	    }
	  }]);

	  return FileSource;
	}();

	function _classCallCheck$2(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$2(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$2(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$2(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function len(blobOrArray) {
	  if (blobOrArray === undefined) return 0;
	  if (blobOrArray.size !== undefined) return blobOrArray.size;
	  return blobOrArray.length;
	}
	/*
	  Typed arrays and blobs don't have a concat method.
	  This function helps StreamSource accumulate data to reach chunkSize.
	*/


	function concat(a, b) {
	  if (a.concat) {
	    // Is `a` an Array?
	    return a.concat(b);
	  }

	  if (a instanceof Blob) {
	    return new Blob([a, b], {
	      type: a.type
	    });
	  }

	  if (a.set) {
	    // Is `a` a typed array?
	    var c = new a.constructor(a.length + b.length);
	    c.set(a);
	    c.set(b, a.length);
	    return c;
	  }

	  throw new Error('Unknown data type');
	}

	var StreamSource = /*#__PURE__*/function () {
	  function StreamSource(reader) {
	    _classCallCheck$2(this, StreamSource);

	    this._buffer = undefined;
	    this._bufferOffset = 0;
	    this._reader = reader;
	    this._done = false;
	  }

	  _createClass$2(StreamSource, [{
	    key: "slice",
	    value: function slice(start, end) {
	      if (start < this._bufferOffset) {
	        return Promise.reject(new Error("Requested data is before the reader's current offset"));
	      }

	      return this._readUntilEnoughDataOrDone(start, end);
	    }
	  }, {
	    key: "_readUntilEnoughDataOrDone",
	    value: function _readUntilEnoughDataOrDone(start, end) {
	      var _this = this;

	      var hasEnoughData = end <= this._bufferOffset + len(this._buffer);

	      if (this._done || hasEnoughData) {
	        var value = this._getDataFromBuffer(start, end);

	        var done = value == null ? this._done : false;
	        return Promise.resolve({
	          value: value,
	          done: done
	        });
	      }

	      return this._reader.read().then(function (_ref) {
	        var value = _ref.value,
	            done = _ref.done;

	        if (done) {
	          _this._done = true;
	        } else if (_this._buffer === undefined) {
	          _this._buffer = value;
	        } else {
	          _this._buffer = concat(_this._buffer, value);
	        }

	        return _this._readUntilEnoughDataOrDone(start, end);
	      });
	    }
	  }, {
	    key: "_getDataFromBuffer",
	    value: function _getDataFromBuffer(start, end) {
	      // Remove data from buffer before `start`.
	      // Data might be reread from the buffer if an upload fails, so we can only
	      // safely delete data when it comes *before* what is currently being read.
	      if (start > this._bufferOffset) {
	        this._buffer = this._buffer.slice(start - this._bufferOffset);
	        this._bufferOffset = start;
	      } // If the buffer is empty after removing old data, all data has been read.


	      var hasAllDataBeenRead = len(this._buffer) === 0;

	      if (this._done && hasAllDataBeenRead) {
	        return null;
	      } // We already removed data before `start`, so we just return the first
	      // chunk from the buffer.


	      return this._buffer.slice(0, end - start);
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      if (this._reader.cancel) {
	        this._reader.cancel();
	      }
	    }
	  }]);

	  return StreamSource;
	}();

	function _classCallCheck$1(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties$1(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$1(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$1(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var FileReader$1 = /*#__PURE__*/function () {
	  function FileReader() {
	    _classCallCheck$1(this, FileReader);
	  }

	  _createClass$1(FileReader, [{
	    key: "openFile",
	    value: function openFile(input, chunkSize) {
	      // In React Native, when user selects a file, instead of a File or Blob,
	      // you usually get a file object {} with a uri property that contains
	      // a local path to the file. We use XMLHttpRequest to fetch
	      // the file blob, before uploading with tus.
	      if (isReactNative() && input && typeof input.uri !== 'undefined') {
	        return uriToBlob(input.uri).then(function (blob) {
	          return new FileSource(blob);
	        })["catch"](function (err) {
	          throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(err));
	        });
	      } // Since we emulate the Blob type in our tests (not all target browsers
	      // support it), we cannot use `instanceof` for testing whether the input value
	      // can be handled. Instead, we simply check is the slice() function and the
	      // size property are available.


	      if (typeof input.slice === 'function' && typeof input.size !== 'undefined') {
	        return Promise.resolve(new FileSource(input));
	      }

	      if (typeof input.read === 'function') {
	        chunkSize = Number(chunkSize);

	        if (!Number.isFinite(chunkSize)) {
	          return Promise.reject(new Error('cannot create source for stream without a finite value for the `chunkSize` option'));
	        }

	        return Promise.resolve(new StreamSource(input, chunkSize));
	      }

	      return Promise.reject(new Error('source object may only be an instance of File, Blob, or Reader in this environment'));
	    }
	  }]);

	  return FileReader;
	}();

	/**
	 * Generate a fingerprint for a file which will be used the store the endpoint
	 *
	 * @param {File} file
	 * @param {Object} options
	 * @param {Function} callback
	 */

	function fingerprint(file, options) {
	  if (isReactNative()) {
	    return Promise.resolve(reactNativeFingerprint(file, options));
	  }

	  return Promise.resolve(['tus-br', file.name, file.type, file.size, file.lastModified, options.endpoint].join('-'));
	}

	function reactNativeFingerprint(file, options) {
	  var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : 'noexif';
	  return ['tus-rn', file.name || 'noname', file.size || 'nosize', exifHash, options.endpoint].join('/');
	}

	function hashCode(str) {
	  /* eslint-disable no-bitwise */
	  // from https://stackoverflow.com/a/8831937/151666
	  var hash = 0;

	  if (str.length === 0) {
	    return hash;
	  }

	  for (var i = 0; i < str.length; i++) {
	    var _char = str.charCodeAt(i);

	    hash = (hash << 5) - hash + _char;
	    hash &= hash; // Convert to 32bit integer
	  }

	  return hash;
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }

	  return target;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defaultOptions = _objectSpread(_objectSpread({}, BaseUpload.defaultOptions), {}, {
	  httpStack: new XHRHttpStack(),
	  fileReader: new FileReader$1(),
	  urlStorage: canStoreURLs ? new WebStorageUrlStorage() : new NoopUrlStorage(),
	  fingerprint: fingerprint
	});

	var Upload = /*#__PURE__*/function (_BaseUpload) {
	  _inherits(Upload, _BaseUpload);

	  var _super = _createSuper(Upload);

	  function Upload() {
	    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Upload);

	    options = _objectSpread(_objectSpread({}, defaultOptions), options);
	    return _super.call(this, file, options);
	  }

	  _createClass(Upload, null, [{
	    key: "terminate",
	    value: function terminate(url, options, cb) {
	      options = _objectSpread(_objectSpread({}, defaultOptions), options);
	      return BaseUpload.terminate(url, options, cb);
	    }
	  }]);

	  return Upload;
	}(BaseUpload);

	class TusUpload extends BaseUpload$1 {
	  constructor(_ref) {
	    let {
	      chunkSize,
	      csrfToken,
	      fieldName,
	      file,
	      formId,
	      retryDelays,
	      uploadIndex,
	      uploadUrl
	    } = _ref;
	    super({
	      name: file.name,
	      status: "uploading",
	      type: "tus",
	      uploadIndex
	    });

	    _defineProperty$2(this, "onError", void 0);

	    _defineProperty$2(this, "onProgress", void 0);

	    _defineProperty$2(this, "onSuccess", void 0);

	    _defineProperty$2(this, "upload", void 0);

	    _defineProperty$2(this, "csrfToken", void 0);

	    _defineProperty$2(this, "handleError", error => {
	      if (this.onError) {
	        this.onError(error);
	      } else {
	        throw error;
	      }
	    });

	    _defineProperty$2(this, "handleProgress", (bytesUploaded, bytesTotal) => {
	      if (this.onProgress) {
	        this.onProgress(bytesUploaded, bytesTotal);
	      }
	    });

	    _defineProperty$2(this, "handleSucces", () => {
	      if (this.onSuccess) {
	        this.onSuccess();
	      }
	    });

	    _defineProperty$2(this, "addCsrTokenToRequest", request => {
	      request.setHeader("X-CSRFToken", this.csrfToken);
	    });

	    this.csrfToken = csrfToken;
	    this.upload = new Upload(file, {
	      chunkSize,
	      endpoint: uploadUrl,
	      metadata: {
	        fieldName: fieldName,
	        filename: file.name,
	        formId: formId
	      },
	      onBeforeRequest: this.addCsrTokenToRequest,
	      onError: this.handleError,
	      onProgress: this.handleProgress,
	      onSuccess: this.handleSucces,
	      retryDelays: retryDelays || [0, 1000, 3000, 5000]
	    });
	    this.onError = undefined;
	    this.onProgress = undefined;
	    this.onSuccess = undefined;
	  }

	  async abort() {
	    await this.upload.abort(true);
	  }

	  async delete() {
	    if (!this.upload.url) {
	      return Promise.resolve();
	    }

	    await deleteUpload(this.upload.url, this.csrfToken);
	  }

	  getSize() {
	    return this.upload.file.size;
	  }

	  start() {
	    this.upload.start();
	  }

	  getInitialFile() {
	    return {
	      id: this.name,
	      name: this.name,
	      size: this.getSize(),
	      type: "tus",
	      url: ""
	    };
	  }

	}

	class FileField {
	  constructor(_ref) {
	    let {
	      callbacks,
	      chunkSize,
	      csrfToken,
	      eventEmitter,
	      fieldName,
	      form,
	      formId,
	      initial,
	      input,
	      multiple,
	      parent,
	      prefix,
	      retryDelays,
	      s3UploadDir,
	      skipRequired,
	      supportDropArea,
	      translations,
	      uploadUrl
	    } = _ref;

	    _defineProperty$2(this, "callbacks", void 0);

	    _defineProperty$2(this, "chunkSize", void 0);

	    _defineProperty$2(this, "csrfToken", void 0);

	    _defineProperty$2(this, "eventEmitter", void 0);

	    _defineProperty$2(this, "fieldName", void 0);

	    _defineProperty$2(this, "form", void 0);

	    _defineProperty$2(this, "formId", void 0);

	    _defineProperty$2(this, "multiple", void 0);

	    _defineProperty$2(this, "nextUploadIndex", void 0);

	    _defineProperty$2(this, "prefix", void 0);

	    _defineProperty$2(this, "renderer", void 0);

	    _defineProperty$2(this, "retryDelays", void 0);

	    _defineProperty$2(this, "s3UploadDir", void 0);

	    _defineProperty$2(this, "supportDropArea", void 0);

	    _defineProperty$2(this, "uploads", void 0);

	    _defineProperty$2(this, "uploadUrl", void 0);

	    _defineProperty$2(this, "uploadFiles", async files => {
	      if (files.length === 0) {
	        return;
	      }

	      if (!this.multiple && this.uploads.length !== 0) {
	        this.renderer.deleteFile(0);
	        this.uploads = [];
	      }

	      for await (const file of files) {
	        await this.uploadFile(file);
	      }

	      this.checkDropHint();
	    });

	    _defineProperty$2(this, "onChange", e => {
	      const files = e.target.files;

	      if (files) {
	        void this.uploadFiles([...files]);
	      }
	    });

	    _defineProperty$2(this, "onClick", e => {
	      const target = e.target;

	      const getUpload = () => {
	        const dataIndex = target.getAttribute("data-index");

	        if (!dataIndex) {
	          return undefined;
	        }

	        const uploadIndex = parseInt(dataIndex, 10);
	        return this.getUploadByIndex(uploadIndex);
	      };

	      if (target.classList.contains("dff-delete") && !target.classList.contains("dff-disabled")) {
	        const upload = getUpload();

	        if (upload) {
	          void this.removeExistingUpload(upload);
	        }

	        e.preventDefault();
	      } else if (target.classList.contains("dff-cancel")) {
	        const upload = getUpload();

	        if (upload) {
	          void this.handleCancel(upload);
	        }

	        e.preventDefault();
	      }
	    });

	    _defineProperty$2(this, "handleProgress", (upload, bytesUploaded, bytesTotal) => {
	      const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
	      this.renderer.updateProgress(upload.uploadIndex, percentage);
	      const {
	        onProgress
	      } = this.callbacks;

	      if (onProgress) {
	        if (upload instanceof TusUpload) {
	          onProgress(bytesUploaded, bytesTotal, upload);
	        }
	      }
	    });

	    _defineProperty$2(this, "handleError", (upload, error) => {
	      this.renderer.setError(upload.uploadIndex);
	      upload.status = "error";
	      const {
	        onError
	      } = this.callbacks;

	      if (onError) {
	        if (upload instanceof TusUpload) {
	          onError(error, upload);
	        }
	      }
	    });

	    _defineProperty$2(this, "handleSuccess", upload => {
	      const {
	        renderer
	      } = this;
	      this.updatePlaceholderInput();
	      renderer.clearInput();
	      renderer.setSuccess(upload.uploadIndex, upload.getSize());
	      upload.status = "done";
	      const {
	        onSuccess
	      } = this.callbacks;
	      const element = document.getElementsByClassName("dff-file-id-".concat(upload.uploadIndex))[0];
	      this.emitEvent("uploadComplete", element, upload);

	      if (onSuccess && upload.type === "tus") {
	        onSuccess(upload);
	      }
	    });

	    this.callbacks = callbacks;
	    this.chunkSize = chunkSize;
	    this.csrfToken = csrfToken;
	    this.eventEmitter = eventEmitter;
	    this.fieldName = fieldName;
	    this.form = form;
	    this.formId = formId;
	    this.multiple = multiple;
	    this.prefix = prefix;
	    this.retryDelays = retryDelays;
	    this.s3UploadDir = s3UploadDir;
	    this.supportDropArea = supportDropArea;
	    this.uploadUrl = uploadUrl;
	    this.uploads = [];
	    this.nextUploadIndex = 0;
	    this.renderer = new RenderUploadFile({
	      parent,
	      input,
	      skipRequired,
	      translations
	    });
	    const filesContainer = this.renderer.container;

	    if (supportDropArea) {
	      this.initDropArea(filesContainer, input.accept);
	    }

	    if (initial) {
	      this.addInitialFiles(initial);
	    }

	    this.checkDropHint();
	    input.addEventListener("change", this.onChange);
	    filesContainer.addEventListener("click", this.onClick);
	  }

	  addInitialFiles(initialFiles) {
	    if (initialFiles.length === 0) {
	      return;
	    }

	    const {
	      multiple,
	      renderer
	    } = this;

	    const addInitialFile = initialFile => {
	      const {
	        size
	      } = initialFile;
	      const name = initialFile.type === "s3" && initialFile.original_name ? initialFile.original_name : initialFile.name;
	      const element = renderer.addUploadedFile(name, this.nextUploadIndex, size);
	      const upload = createUploadedFile({
	        csrfToken: this.csrfToken,
	        initialFile,
	        uploadIndex: this.nextUploadIndex,
	        uploadUrl: this.uploadUrl
	      });
	      this.uploads.push(upload);
	      this.emitEvent("addUpload", element, upload);
	    };

	    if (multiple) {
	      initialFiles.forEach(file => {
	        addInitialFile(file);
	        this.nextUploadIndex += 1;
	      });
	    } else {
	      addInitialFile(initialFiles[0]);
	    }
	  }

	  async uploadFile(file) {
	    const createUpload = () => {
	      const {
	        csrfToken,
	        s3UploadDir
	      } = this;

	      if (s3UploadDir != null) {
	        return new S3Upload({
	          csrfToken,
	          endpoint: uploadUrl,
	          file,
	          s3UploadDir,
	          uploadIndex: newUploadIndex
	        });
	      } else {
	        return new TusUpload({
	          chunkSize: this.chunkSize,
	          csrfToken: this.csrfToken,
	          fieldName,
	          file,
	          formId,
	          retryDelays: this.retryDelays,
	          uploadIndex: newUploadIndex,
	          uploadUrl
	        });
	      }
	    };

	    const {
	      fieldName,
	      formId,
	      renderer,
	      uploadUrl
	    } = this;
	    const fileName = file.name;
	    const existingUpload = this.findUploadByName(fileName);
	    const newUploadIndex = existingUpload ? existingUpload.uploadIndex : this.nextUploadIndex;

	    if (!existingUpload) {
	      this.nextUploadIndex += 1;
	    }

	    if (existingUpload) {
	      await this.removeExistingUpload(existingUpload);
	    }

	    const upload = createUpload();

	    upload.onError = error => this.handleError(upload, error);

	    upload.onProgress = (bytesUploaded, bytesTotal) => this.handleProgress(upload, bytesUploaded, bytesTotal);

	    upload.onSuccess = () => this.handleSuccess(upload);

	    upload.start();
	    this.uploads.push(upload);
	    const element = renderer.addNewUpload(fileName, newUploadIndex);
	    this.emitEvent("addUpload", element, upload);
	  }

	  getUploadByIndex(uploadIndex) {
	    return this.uploads.find(upload => upload.uploadIndex === uploadIndex);
	  }

	  findUploadByName(fileName) {
	    return this.uploads.find(upload => upload.name === fileName);
	  }

	  async removeExistingUpload(upload) {
	    const element = this.renderer.findFileDiv(upload.uploadIndex);

	    if (element) {
	      this.emitEvent("removeUpload", element, upload);
	    }

	    if (upload.status === "uploading") {
	      this.renderer.disableCancel(upload.uploadIndex);
	      await upload.abort();
	    } else if (upload.status === "done") {
	      this.renderer.disableDelete(upload.uploadIndex);

	      try {
	        await upload.delete();
	      } catch {
	        this.renderer.setDeleteFailed(upload.uploadIndex);
	        return;
	      }
	    }

	    this.removeUploadFromList(upload);
	    this.updatePlaceholderInput();
	  }

	  removeUploadFromList(upload) {
	    this.renderer.deleteFile(upload.uploadIndex);
	    const index = this.uploads.indexOf(upload);

	    if (index >= 0) {
	      this.uploads.splice(index, 1);
	    }

	    this.checkDropHint();
	    const {
	      onDelete
	    } = this.callbacks;

	    if (onDelete) {
	      onDelete(upload);
	    }
	  }

	  async handleCancel(upload) {
	    this.renderer.disableCancel(upload.uploadIndex);
	    await upload.abort();
	    this.removeUploadFromList(upload);
	  }

	  initDropArea(container, inputAccept) {
	    new DropArea({
	      container,
	      inputAccept,
	      onUploadFiles: this.uploadFiles
	    });
	  }

	  checkDropHint() {
	    if (!this.supportDropArea) {
	      return;
	    }

	    const nonEmptyUploads = this.uploads.filter(e => e);

	    if (nonEmptyUploads.length === 0) {
	      this.renderer.renderDropHint();
	    } else {
	      this.renderer.removeDropHint();
	    }
	  }

	  updatePlaceholderInput() {
	    const input = findInput(this.form, getUploadsFieldName(this.fieldName, this.prefix), this.prefix);

	    if (!input) {
	      return;
	    }

	    const placeholdersInfo = this.uploads.map(upload => upload.getInitialFile());
	    input.value = JSON.stringify(placeholdersInfo);
	  }

	  getMetaDataField() {
	    return findInput(this.form, getMetadataFieldName(this.fieldName, this.prefix), this.prefix);
	  }

	  emitEvent(eventName, element, upload) {
	    if (this.eventEmitter) {
	      this.eventEmitter.emit(eventName, {
	        element,
	        fieldName: this.fieldName,
	        fileName: upload.name,
	        metaDataField: this.getMetaDataField(),
	        upload
	      });
	    }
	  }

	}

	const initUploadFields = function (form) {
	  var _findInput;

	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  const matchesPrefix = fieldName => {
	    if (!(options && options.prefix)) {
	      return true;
	    }

	    return fieldName.startsWith("".concat(options.prefix, "-"));
	  };

	  const getPrefix = () => options && options.prefix ? options.prefix : null;

	  const getInputValue = fieldName => getInputValueForFormAndPrefix(form, fieldName, getPrefix());

	  const getInitialFiles = fieldName => {
	    const data = getInputValue(getUploadsFieldName(fieldName, getPrefix()));

	    if (!data) {
	      return [];
	    }

	    return JSON.parse(data);
	  };

	  const uploadUrl = getInputValue("upload_url");
	  const formId = getInputValue("form_id");
	  const s3UploadDir = getInputValue("s3_upload_dir");
	  const skipRequired = options.skipRequired || false;
	  const prefix = getPrefix();
	  const csrfToken = (_findInput = findInput(form, "csrfmiddlewaretoken", null)) === null || _findInput === void 0 ? void 0 : _findInput.value;

	  if (!csrfToken) {
	    throw Error("Csrf token not found");
	  }

	  if (!formId || !uploadUrl) {
	    return;
	  }

	  form.querySelectorAll(".dff-uploader").forEach(uploaderDiv => {
	    const container = uploaderDiv.querySelector(".dff-container");

	    if (!container) {
	      return;
	    }

	    const input = container.querySelector("input[type=file]");

	    if (!(input && matchesPrefix(input.name))) {
	      return;
	    }

	    const fieldName = input.name;
	    const {
	      multiple
	    } = input;
	    const initial = getInitialFiles(fieldName);
	    const dataTranslations = container.getAttribute("data-translations");
	    const translations = dataTranslations ? JSON.parse(dataTranslations) : {};
	    const supportDropArea = !(options.supportDropArea === false);
	    new FileField({
	      callbacks: options.callbacks || {},
	      chunkSize: options.chunkSize || 2621440,
	      csrfToken,
	      eventEmitter: options.eventEmitter,
	      fieldName,
	      form,
	      formId,
	      s3UploadDir: s3UploadDir || null,
	      initial,
	      input,
	      multiple,
	      parent: container,
	      prefix,
	      retryDelays: options.retryDelays || null,
	      skipRequired,
	      supportDropArea,
	      translations,
	      uploadUrl
	    });
	  });
	};

	const initFormSet = (form, optionsParam) => {
	  let options;

	  if (typeof optionsParam === "string") {
	    options = {
	      prefix: optionsParam
	    };
	  } else {
	    options = optionsParam;
	  }

	  const prefix = options.prefix || "form";
	  const totalFormsValue = getInputValueForFormAndPrefix(form, "TOTAL_FORMS", prefix);

	  if (!totalFormsValue) {
	    return;
	  }

	  const formCount = parseInt(totalFormsValue, 10);

	  for (let i = 0; i < formCount; i += 1) {
	    const subFormPrefix = getInputNameWithPrefix("".concat(i), null);
	    initUploadFields(form, { ...options,
	      prefix: "".concat(prefix, "-").concat(subFormPrefix)
	    });
	  }
	};

	// eslint-disable-line @typescript-eslint/no-explicit-any
	window.autoInitFileForms = autoInitFileForms; // eslint-disable-line  @typescript-eslint/no-unsafe-member-access

	window.initFormSet = initFormSet; // eslint-disable-line  @typescript-eslint/no-unsafe-member-access

	window.initUploadFields = initUploadFields; // eslint-disable-line  @typescript-eslint/no-unsafe-member-access

})();
//# sourceMappingURL=file_form.debug.js.map
