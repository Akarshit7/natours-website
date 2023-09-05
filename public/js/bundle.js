var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
/* eslint-disable */ /*eslint-disable*/ const $e34dad7a98f77048$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = "pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy",
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        //create a marker
        const el = document.createElement("div");
        el.className = "marker";
        //Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom"
        }).setLngLat(loc.coordinates).addTo(map);
        //add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day: ${loc.day},${loc.description}</p>`).addTo(map);
        //extend the map bound to include the current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 200,
            right: 200
        }
    });
};


/* eslint-disable */ "use strict";
function $510a3c2a717228ee$export$2e2bcd8739ae039(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}


"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString: $c445b438685cc05f$var$toString  } = Object.prototype;
const { getPrototypeOf: $c445b438685cc05f$var$getPrototypeOf  } = Object;
const $c445b438685cc05f$var$kindOf = ((cache)=>(thing)=>{
        const str = $c445b438685cc05f$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const $c445b438685cc05f$var$kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>$c445b438685cc05f$var$kindOf(thing) === type;
};
const $c445b438685cc05f$var$typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray: $c445b438685cc05f$var$isArray  } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const $c445b438685cc05f$var$isUndefined = $c445b438685cc05f$var$typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $c445b438685cc05f$var$isBuffer(val) {
    return val !== null && !$c445b438685cc05f$var$isUndefined(val) && val.constructor !== null && !$c445b438685cc05f$var$isUndefined(val.constructor) && $c445b438685cc05f$var$isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const $c445b438685cc05f$var$isArrayBuffer = $c445b438685cc05f$var$kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $c445b438685cc05f$var$isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $c445b438685cc05f$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const $c445b438685cc05f$var$isString = $c445b438685cc05f$var$typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const $c445b438685cc05f$var$isFunction = $c445b438685cc05f$var$typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const $c445b438685cc05f$var$isNumber = $c445b438685cc05f$var$typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const $c445b438685cc05f$var$isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const $c445b438685cc05f$var$isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const $c445b438685cc05f$var$isPlainObject = (val)=>{
    if ($c445b438685cc05f$var$kindOf(val) !== "object") return false;
    const prototype = $c445b438685cc05f$var$getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const $c445b438685cc05f$var$isDate = $c445b438685cc05f$var$kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $c445b438685cc05f$var$isFile = $c445b438685cc05f$var$kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const $c445b438685cc05f$var$isBlob = $c445b438685cc05f$var$kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $c445b438685cc05f$var$isFileList = $c445b438685cc05f$var$kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const $c445b438685cc05f$var$isStream = (val)=>$c445b438685cc05f$var$isObject(val) && $c445b438685cc05f$var$isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const $c445b438685cc05f$var$isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || $c445b438685cc05f$var$isFunction(thing.append) && ((kind = $c445b438685cc05f$var$kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && $c445b438685cc05f$var$isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const $c445b438685cc05f$var$isURLSearchParams = $c445b438685cc05f$var$kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const $c445b438685cc05f$var$trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function $c445b438685cc05f$var$forEach(obj, fn, { allOwnKeys: allOwnKeys = false  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($c445b438685cc05f$var$isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function $c445b438685cc05f$var$findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const $c445b438685cc05f$var$_global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : $parcel$global;
})();
const $c445b438685cc05f$var$isContextDefined = (context)=>!$c445b438685cc05f$var$isUndefined(context) && context !== $c445b438685cc05f$var$_global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function $c445b438685cc05f$var$merge() {
    const { caseless: caseless  } = $c445b438685cc05f$var$isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && $c445b438685cc05f$var$findKey(result, key) || key;
        if ($c445b438685cc05f$var$isPlainObject(result[targetKey]) && $c445b438685cc05f$var$isPlainObject(val)) result[targetKey] = $c445b438685cc05f$var$merge(result[targetKey], val);
        else if ($c445b438685cc05f$var$isPlainObject(val)) result[targetKey] = $c445b438685cc05f$var$merge({}, val);
        else if ($c445b438685cc05f$var$isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && $c445b438685cc05f$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const $c445b438685cc05f$var$extend = (a, b, thisArg, { allOwnKeys: allOwnKeys  } = {})=>{
    $c445b438685cc05f$var$forEach(b, (val, key)=>{
        if (thisArg && $c445b438685cc05f$var$isFunction(val)) a[key] = (0, $510a3c2a717228ee$export$2e2bcd8739ae039)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys: allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const $c445b438685cc05f$var$stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const $c445b438685cc05f$var$inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const $c445b438685cc05f$var$toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && $c445b438685cc05f$var$getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const $c445b438685cc05f$var$endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const $c445b438685cc05f$var$toArray = (thing)=>{
    if (!thing) return null;
    if ($c445b438685cc05f$var$isArray(thing)) return thing;
    let i = thing.length;
    if (!$c445b438685cc05f$var$isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const $c445b438685cc05f$var$isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && $c445b438685cc05f$var$getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const $c445b438685cc05f$var$forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const $c445b438685cc05f$var$matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const $c445b438685cc05f$var$isHTMLForm = $c445b438685cc05f$var$kindOfTest("HTMLFormElement");
const $c445b438685cc05f$var$toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const $c445b438685cc05f$var$hasOwnProperty = (({ hasOwnProperty: hasOwnProperty  })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const $c445b438685cc05f$var$isRegExp = $c445b438685cc05f$var$kindOfTest("RegExp");
const $c445b438685cc05f$var$reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    $c445b438685cc05f$var$forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const $c445b438685cc05f$var$freezeMethods = (obj)=>{
    $c445b438685cc05f$var$reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if ($c445b438685cc05f$var$isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!$c445b438685cc05f$var$isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const $c445b438685cc05f$var$toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    $c445b438685cc05f$var$isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const $c445b438685cc05f$var$noop = ()=>{};
const $c445b438685cc05f$var$toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const $c445b438685cc05f$var$ALPHA = "abcdefghijklmnopqrstuvwxyz";
const $c445b438685cc05f$var$DIGIT = "0123456789";
const $c445b438685cc05f$var$ALPHABET = {
    DIGIT: $c445b438685cc05f$var$DIGIT,
    ALPHA: $c445b438685cc05f$var$ALPHA,
    ALPHA_DIGIT: $c445b438685cc05f$var$ALPHA + $c445b438685cc05f$var$ALPHA.toUpperCase() + $c445b438685cc05f$var$DIGIT
};
const $c445b438685cc05f$var$generateString = (size = 16, alphabet = $c445b438685cc05f$var$ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length: length  } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function $c445b438685cc05f$var$isSpecCompliantForm(thing) {
    return !!(thing && $c445b438685cc05f$var$isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const $c445b438685cc05f$var$toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if ($c445b438685cc05f$var$isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = $c445b438685cc05f$var$isArray(source) ? [] : {};
                $c445b438685cc05f$var$forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !$c445b438685cc05f$var$isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const $c445b438685cc05f$var$isAsyncFn = $c445b438685cc05f$var$kindOfTest("AsyncFunction");
const $c445b438685cc05f$var$isThenable = (thing)=>thing && ($c445b438685cc05f$var$isObject(thing) || $c445b438685cc05f$var$isFunction(thing)) && $c445b438685cc05f$var$isFunction(thing.then) && $c445b438685cc05f$var$isFunction(thing.catch);
var $c445b438685cc05f$export$2e2bcd8739ae039 = {
    isArray: $c445b438685cc05f$var$isArray,
    isArrayBuffer: $c445b438685cc05f$var$isArrayBuffer,
    isBuffer: $c445b438685cc05f$var$isBuffer,
    isFormData: $c445b438685cc05f$var$isFormData,
    isArrayBufferView: $c445b438685cc05f$var$isArrayBufferView,
    isString: $c445b438685cc05f$var$isString,
    isNumber: $c445b438685cc05f$var$isNumber,
    isBoolean: $c445b438685cc05f$var$isBoolean,
    isObject: $c445b438685cc05f$var$isObject,
    isPlainObject: $c445b438685cc05f$var$isPlainObject,
    isUndefined: $c445b438685cc05f$var$isUndefined,
    isDate: $c445b438685cc05f$var$isDate,
    isFile: $c445b438685cc05f$var$isFile,
    isBlob: $c445b438685cc05f$var$isBlob,
    isRegExp: $c445b438685cc05f$var$isRegExp,
    isFunction: $c445b438685cc05f$var$isFunction,
    isStream: $c445b438685cc05f$var$isStream,
    isURLSearchParams: $c445b438685cc05f$var$isURLSearchParams,
    isTypedArray: $c445b438685cc05f$var$isTypedArray,
    isFileList: $c445b438685cc05f$var$isFileList,
    forEach: $c445b438685cc05f$var$forEach,
    merge: $c445b438685cc05f$var$merge,
    extend: $c445b438685cc05f$var$extend,
    trim: $c445b438685cc05f$var$trim,
    stripBOM: $c445b438685cc05f$var$stripBOM,
    inherits: $c445b438685cc05f$var$inherits,
    toFlatObject: $c445b438685cc05f$var$toFlatObject,
    kindOf: $c445b438685cc05f$var$kindOf,
    kindOfTest: $c445b438685cc05f$var$kindOfTest,
    endsWith: $c445b438685cc05f$var$endsWith,
    toArray: $c445b438685cc05f$var$toArray,
    forEachEntry: $c445b438685cc05f$var$forEachEntry,
    matchAll: $c445b438685cc05f$var$matchAll,
    isHTMLForm: $c445b438685cc05f$var$isHTMLForm,
    hasOwnProperty: $c445b438685cc05f$var$hasOwnProperty,
    hasOwnProp: $c445b438685cc05f$var$hasOwnProperty,
    reduceDescriptors: $c445b438685cc05f$var$reduceDescriptors,
    freezeMethods: $c445b438685cc05f$var$freezeMethods,
    toObjectSet: $c445b438685cc05f$var$toObjectSet,
    toCamelCase: $c445b438685cc05f$var$toCamelCase,
    noop: $c445b438685cc05f$var$noop,
    toFiniteNumber: $c445b438685cc05f$var$toFiniteNumber,
    findKey: $c445b438685cc05f$var$findKey,
    global: $c445b438685cc05f$var$_global,
    isContextDefined: $c445b438685cc05f$var$isContextDefined,
    ALPHABET: $c445b438685cc05f$var$ALPHABET,
    generateString: $c445b438685cc05f$var$generateString,
    isSpecCompliantForm: $c445b438685cc05f$var$isSpecCompliantForm,
    toJSONObject: $c445b438685cc05f$var$toJSONObject,
    isAsyncFn: $c445b438685cc05f$var$isAsyncFn,
    isThenable: $c445b438685cc05f$var$isThenable
};







"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function $cad7cf9caf832b8b$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, $c445b438685cc05f$export$2e2bcd8739ae039).inherits($cad7cf9caf832b8b$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, $c445b438685cc05f$export$2e2bcd8739ae039).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const $cad7cf9caf832b8b$var$prototype = $cad7cf9caf832b8b$var$AxiosError.prototype;
const $cad7cf9caf832b8b$var$descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    $cad7cf9caf832b8b$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($cad7cf9caf832b8b$var$AxiosError, $cad7cf9caf832b8b$var$descriptors);
Object.defineProperty($cad7cf9caf832b8b$var$prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
$cad7cf9caf832b8b$var$AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create($cad7cf9caf832b8b$var$prototype);
    (0, $c445b438685cc05f$export$2e2bcd8739ae039).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    $cad7cf9caf832b8b$var$AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
var $cad7cf9caf832b8b$export$2e2bcd8739ae039 = $cad7cf9caf832b8b$var$AxiosError;


// eslint-disable-next-line strict
var $557de54889c0f628$export$2e2bcd8739ae039 = null;


var $4e3103bd57bcd43c$exports = {};
"use strict";


var $0f30ab6e1deabc37$require$Buffer = $4e3103bd57bcd43c$exports.Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function $0f30ab6e1deabc37$var$isVisitable(thing) {
    return (0, $c445b438685cc05f$export$2e2bcd8739ae039).isPlainObject(thing) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function $0f30ab6e1deabc37$var$removeBrackets(key) {
    return (0, $c445b438685cc05f$export$2e2bcd8739ae039).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function $0f30ab6e1deabc37$var$renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = $0f30ab6e1deabc37$var$removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function $0f30ab6e1deabc37$var$isFlatArray(arr) {
    return (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(arr) && !arr.some($0f30ab6e1deabc37$var$isVisitable);
}
const $0f30ab6e1deabc37$var$predicates = (0, $c445b438685cc05f$export$2e2bcd8739ae039).toFlatObject((0, $c445b438685cc05f$export$2e2bcd8739ae039), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function $0f30ab6e1deabc37$var$toFormData(obj, formData, options) {
    if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, $557de54889c0f628$export$2e2bcd8739ae039) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, $c445b438685cc05f$export$2e2bcd8739ae039).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isSpecCompliantForm(formData);
    if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isDate(value)) return value.toISOString();
        if (!useBlob && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isBlob(value)) throw new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("Blob is not supported. Use a Buffer instead.");
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isArrayBuffer(value) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : $0f30ab6e1deabc37$require$Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(value) && $0f30ab6e1deabc37$var$isFlatArray(value) || ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isFileList(value) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).endsWith(key, "[]")) && (arr = (0, $c445b438685cc05f$export$2e2bcd8739ae039).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = $0f30ab6e1deabc37$var$removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? $0f30ab6e1deabc37$var$renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if ($0f30ab6e1deabc37$var$isVisitable(value)) return true;
        formData.append($0f30ab6e1deabc37$var$renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign($0f30ab6e1deabc37$var$predicates, {
        defaultVisitor: defaultVisitor,
        convertValue: convertValue,
        isVisitable: $0f30ab6e1deabc37$var$isVisitable
    });
    function build(value, path) {
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(value, function each(el, key) {
            const result = !((0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(el) || el === null) && visitor.call(formData, el, (0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
var $0f30ab6e1deabc37$export$2e2bcd8739ae039 = $0f30ab6e1deabc37$var$toFormData;


"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function $ce6c66f33b45e7f8$var$encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function $ce6c66f33b45e7f8$var$AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, $0f30ab6e1deabc37$export$2e2bcd8739ae039)(params, this, options);
}
const $ce6c66f33b45e7f8$var$prototype = $ce6c66f33b45e7f8$var$AxiosURLSearchParams.prototype;
$ce6c66f33b45e7f8$var$prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
$ce6c66f33b45e7f8$var$prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, $ce6c66f33b45e7f8$var$encode);
    } : $ce6c66f33b45e7f8$var$encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
var $ce6c66f33b45e7f8$export$2e2bcd8739ae039 = $ce6c66f33b45e7f8$var$AxiosURLSearchParams;


"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function $9b6048975c6f2291$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $9b6048975c6f2291$export$2e2bcd8739ae039(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || $9b6048975c6f2291$var$encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isURLSearchParams(params) ? params.toString() : new (0, $ce6c66f33b45e7f8$export$2e2bcd8739ae039)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}



"use strict";
class $e0d2da534e5e5f79$var$InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
var $e0d2da534e5e5f79$export$2e2bcd8739ae039 = $e0d2da534e5e5f79$var$InterceptorManager;





"use strict";
var $93bdc53084097d09$export$2e2bcd8739ae039 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};






"use strict";
var $3da972b503e55895$export$2e2bcd8739ae039 = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, $ce6c66f33b45e7f8$export$2e2bcd8739ae039);


"use strict";
var $d8da68005d85ae35$export$2e2bcd8739ae039 = typeof FormData !== "undefined" ? FormData : null;


"use strict";
var $e554d2865b8907ae$export$2e2bcd8739ae039 = typeof Blob !== "undefined" ? Blob : null;


/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const $8c097f47818974eb$var$isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const $8c097f47818974eb$var$isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var $8c097f47818974eb$export$2e2bcd8739ae039 = {
    isBrowser: true,
    classes: {
        URLSearchParams: $3da972b503e55895$export$2e2bcd8739ae039,
        FormData: $d8da68005d85ae35$export$2e2bcd8739ae039,
        Blob: $e554d2865b8907ae$export$2e2bcd8739ae039
    },
    isStandardBrowserEnv: $8c097f47818974eb$var$isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv: $8c097f47818974eb$var$isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};


"use strict";
function $c1882ed8d06e0c86$export$2e2bcd8739ae039(data, options) {
    return (0, $0f30ab6e1deabc37$export$2e2bcd8739ae039)(data, new (0, $8c097f47818974eb$export$2e2bcd8739ae039).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, $8c097f47818974eb$export$2e2bcd8739ae039).isNode && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}




"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function $eb0d069eecfa1586$var$parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, $c445b438685cc05f$export$2e2bcd8739ae039).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function $eb0d069eecfa1586$var$arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function $eb0d069eecfa1586$var$formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, $c445b438685cc05f$export$2e2bcd8739ae039).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(target[name])) target[name] = $eb0d069eecfa1586$var$arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isFormData(formData) && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isFunction(formData.entries)) {
        const obj = {};
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEachEntry(formData, (name, value)=>{
            buildPath($eb0d069eecfa1586$var$parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
var $eb0d069eecfa1586$export$2e2bcd8739ae039 = $eb0d069eecfa1586$var$formDataToJSON;


"use strict";
const $2589805ce50e81fa$var$DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function $2589805ce50e81fa$var$stringifySafely(rawValue, parser, encoder) {
    if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, $c445b438685cc05f$export$2e2bcd8739ae039).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const $2589805ce50e81fa$var$defaults = {
    transitional: (0, $93bdc53084097d09$export$2e2bcd8739ae039),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isObject(data);
            if (isObjectPayload && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, $eb0d069eecfa1586$export$2e2bcd8739ae039)(data)) : data;
            }
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isArrayBuffer(data) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).isBuffer(data) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).isStream(data) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).isFile(data) || (0, $c445b438685cc05f$export$2e2bcd8739ae039).isBlob(data)) return data;
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isArrayBufferView(data)) return data.buffer;
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, $c1882ed8d06e0c86$export$2e2bcd8739ae039)(data, this.formSerializer).toString();
                if ((isFileList = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, $0f30ab6e1deabc37$export$2e2bcd8739ae039)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return $2589805ce50e81fa$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || $2589805ce50e81fa$var$defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).from(e, (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, $8c097f47818974eb$export$2e2bcd8739ae039).classes.FormData,
        Blob: (0, $8c097f47818974eb$export$2e2bcd8739ae039).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    $2589805ce50e81fa$var$defaults.headers[method] = {};
});
(0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    $2589805ce50e81fa$var$defaults.headers[method] = (0, $c445b438685cc05f$export$2e2bcd8739ae039).merge($2589805ce50e81fa$var$DEFAULT_CONTENT_TYPE);
});
var $2589805ce50e81fa$export$2e2bcd8739ae039 = $2589805ce50e81fa$var$defaults;




"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const $0985f169d1235116$var$ignoreDuplicateOf = (0, $c445b438685cc05f$export$2e2bcd8739ae039).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ $0985f169d1235116$export$2e2bcd8739ae039 = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && $0985f169d1235116$var$ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};


"use strict";
const $b4b79651b937d580$var$$internals = Symbol("internals");
function $b4b79651b937d580$var$normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function $b4b79651b937d580$var$normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(value) ? value.map($b4b79651b937d580$var$normalizeValue) : String(value);
}
function $b4b79651b937d580$var$parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const $b4b79651b937d580$var$isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function $b4b79651b937d580$var$matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(value)) return;
    if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isRegExp(filter)) return filter.test(value);
}
function $b4b79651b937d580$var$formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function $b4b79651b937d580$var$buildAccessors(obj, header) {
    const accessorName = (0, $c445b438685cc05f$export$2e2bcd8739ae039).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class $b4b79651b937d580$var$AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = $b4b79651b937d580$var$normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, $c445b438685cc05f$export$2e2bcd8739ae039).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = $b4b79651b937d580$var$normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(header) && (header = header.trim()) && !$b4b79651b937d580$var$isValidHeaderName(header)) setHeaders((0, $0985f169d1235116$export$2e2bcd8739ae039)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = $b4b79651b937d580$var$normalizeHeader(header);
        if (header) {
            const key = (0, $c445b438685cc05f$export$2e2bcd8739ae039).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return $b4b79651b937d580$var$parseTokens(value);
                if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isFunction(parser)) return parser.call(this, value, key);
                if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = $b4b79651b937d580$var$normalizeHeader(header);
        if (header) {
            const key = (0, $c445b438685cc05f$export$2e2bcd8739ae039).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || $b4b79651b937d580$var$matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = $b4b79651b937d580$var$normalizeHeader(_header);
            if (_header) {
                const key = (0, $c445b438685cc05f$export$2e2bcd8739ae039).findKey(self, _header);
                if (key && (!matcher || $b4b79651b937d580$var$matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || $b4b79651b937d580$var$matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            const key = (0, $c445b438685cc05f$export$2e2bcd8739ae039).findKey(headers, header);
            if (key) {
                self[key] = $b4b79651b937d580$var$normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? $b4b79651b937d580$var$formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = $b4b79651b937d580$var$normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$b4b79651b937d580$var$$internals] = this[$b4b79651b937d580$var$$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = $b4b79651b937d580$var$normalizeHeader(_header);
            if (!accessors[lHeader]) {
                $b4b79651b937d580$var$buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
$b4b79651b937d580$var$AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, $c445b438685cc05f$export$2e2bcd8739ae039).freezeMethods($b4b79651b937d580$var$AxiosHeaders.prototype);
(0, $c445b438685cc05f$export$2e2bcd8739ae039).freezeMethods($b4b79651b937d580$var$AxiosHeaders);
var $b4b79651b937d580$export$2e2bcd8739ae039 = $b4b79651b937d580$var$AxiosHeaders;


"use strict";
function $050d2515d69651b9$export$2e2bcd8739ae039(fns, response) {
    const config = this || (0, $2589805ce50e81fa$export$2e2bcd8739ae039);
    const context = response || config;
    const headers = (0, $b4b79651b937d580$export$2e2bcd8739ae039).from(context.headers);
    let data = context.data;
    (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}


"use strict";
function $41a1e4031e396f21$export$2e2bcd8739ae039(value) {
    return !!(value && value.__CANCEL__);
}





"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function $e263ffc3ad381371$var$CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).call(this, message == null ? "canceled" : message, (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, $c445b438685cc05f$export$2e2bcd8739ae039).inherits($e263ffc3ad381371$var$CanceledError, (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039), {
    __CANCEL__: true
});
var $e263ffc3ad381371$export$2e2bcd8739ae039 = $e263ffc3ad381371$var$CanceledError;







"use strict";
function $9910637a61169b69$export$2e2bcd8739ae039(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("Request failed with status code " + response.status, [
        (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_REQUEST,
        (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}




"use strict";
var $707880487348cc1b$export$2e2bcd8739ae039 = (0, $8c097f47818974eb$export$2e2bcd8739ae039).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(path)) cookie.push("path=" + path);
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();



"use strict";
function $84fd5a89d1a56d56$export$2e2bcd8739ae039(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


"use strict";
function $b9c31f8c76f18a67$export$2e2bcd8739ae039(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}


"use strict";
function $49dc44258320a9bb$export$2e2bcd8739ae039(baseURL, requestedURL) {
    if (baseURL && !(0, $84fd5a89d1a56d56$export$2e2bcd8739ae039)(requestedURL)) return (0, $b9c31f8c76f18a67$export$2e2bcd8739ae039)(baseURL, requestedURL);
    return requestedURL;
}




"use strict";
var $fe318950bedf6049$export$2e2bcd8739ae039 = (0, $8c097f47818974eb$export$2e2bcd8739ae039).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();





"use strict";
function $9c283ab33225e4c1$export$2e2bcd8739ae039(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}




"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function $59d33b265a0fab76$var$speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
var $59d33b265a0fab76$export$2e2bcd8739ae039 = $59d33b265a0fab76$var$speedometer;


"use strict";
function $1228ce30298f5b9b$var$progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, $59d33b265a0fab76$export$2e2bcd8739ae039)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded: loaded,
            total: total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const $1228ce30298f5b9b$var$isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var $1228ce30298f5b9b$export$2e2bcd8739ae039 = $1228ce30298f5b9b$var$isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, $b4b79651b937d580$export$2e2bcd8739ae039).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isFormData(requestData)) {
            if ((0, $8c097f47818974eb$export$2e2bcd8739ae039).isStandardBrowserEnv || (0, $8c097f47818974eb$export$2e2bcd8739ae039).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, $49dc44258320a9bb$export$2e2bcd8739ae039)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, $9b6048975c6f2291$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, $b4b79651b937d580$export$2e2bcd8739ae039).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            (0, $9910637a61169b69$export$2e2bcd8739ae039)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("Request aborted", (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("Network Error", (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, $93bdc53084097d09$export$2e2bcd8739ae039);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ETIMEDOUT : (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, $8c097f47818974eb$export$2e2bcd8739ae039).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, $fe318950bedf6049$export$2e2bcd8739ae039)(fullPath)) && config.xsrfCookieName && (0, $707880487348cc1b$export$2e2bcd8739ae039).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", $1228ce30298f5b9b$var$progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", $1228ce30298f5b9b$var$progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, $e263ffc3ad381371$export$2e2bcd8739ae039)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, $9c283ab33225e4c1$export$2e2bcd8739ae039)(fullPath);
        if (protocol && (0, $8c097f47818974eb$export$2e2bcd8739ae039).protocols.indexOf(protocol) === -1) {
            reject(new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("Unsupported protocol " + protocol + ":", (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};



const $1a17deafe9bbadda$var$knownAdapters = {
    http: (0, $557de54889c0f628$export$2e2bcd8739ae039),
    xhr: (0, $1228ce30298f5b9b$export$2e2bcd8739ae039)
};
(0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach($1a17deafe9bbadda$var$knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value: value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value: value
        });
    }
});
var $1a17deafe9bbadda$export$2e2bcd8739ae039 = {
    getAdapter: (adapters)=>{
        adapters = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length: length  } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, $c445b438685cc05f$export$2e2bcd8739ae039).isString(nameOrAdapter) ? $1a17deafe9bbadda$var$knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, $c445b438685cc05f$export$2e2bcd8739ae039).hasOwnProp($1a17deafe9bbadda$var$knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: $1a17deafe9bbadda$var$knownAdapters
};


"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function $08a5c49d81efde6d$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, $e263ffc3ad381371$export$2e2bcd8739ae039)(null, config);
}
function $08a5c49d81efde6d$export$2e2bcd8739ae039(config) {
    $08a5c49d81efde6d$var$throwIfCancellationRequested(config);
    config.headers = (0, $b4b79651b937d580$export$2e2bcd8739ae039).from(config.headers);
    // Transform request data
    config.data = (0, $050d2515d69651b9$export$2e2bcd8739ae039).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, $1a17deafe9bbadda$export$2e2bcd8739ae039).getAdapter(config.adapter || (0, $2589805ce50e81fa$export$2e2bcd8739ae039).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        $08a5c49d81efde6d$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, $050d2515d69651b9$export$2e2bcd8739ae039).call(config, config.transformResponse, response);
        response.headers = (0, $b4b79651b937d580$export$2e2bcd8739ae039).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, $41a1e4031e396f21$export$2e2bcd8739ae039)(reason)) {
            $08a5c49d81efde6d$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, $050d2515d69651b9$export$2e2bcd8739ae039).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, $b4b79651b937d580$export$2e2bcd8739ae039).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}




"use strict";
const $751f97722f644da0$var$headersToObject = (thing)=>thing instanceof (0, $b4b79651b937d580$export$2e2bcd8739ae039) ? thing.toJSON() : thing;
function $751f97722f644da0$export$2e2bcd8739ae039(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isPlainObject(target) && (0, $c445b438685cc05f$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $c445b438685cc05f$export$2e2bcd8739ae039).merge.call({
            caseless: caseless
        }, target, source);
        else if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $c445b438685cc05f$export$2e2bcd8739ae039).merge({}, source);
        else if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties($751f97722f644da0$var$headersToObject(a), $751f97722f644da0$var$headersToObject(b), true)
    };
    (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, $c445b438685cc05f$export$2e2bcd8739ae039).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}



const $a70be08f7777fc9d$export$a4ad2735b021c132 = "1.4.0";



"use strict";
const $bdf4cd95dd1ab460$var$validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    $bdf4cd95dd1ab460$var$validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const $bdf4cd95dd1ab460$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ $bdf4cd95dd1ab460$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, $a70be08f7777fc9d$export$a4ad2735b021c132) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_DEPRECATED);
        if (version && !$bdf4cd95dd1ab460$var$deprecatedWarnings[opt]) {
            $bdf4cd95dd1ab460$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function $bdf4cd95dd1ab460$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("options must be an object", (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("option " + opt + " must be " + result, (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039)("Unknown option " + opt, (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039).ERR_BAD_OPTION);
    }
}
var $bdf4cd95dd1ab460$export$2e2bcd8739ae039 = {
    assertOptions: $bdf4cd95dd1ab460$var$assertOptions,
    validators: $bdf4cd95dd1ab460$var$validators
};



"use strict";
const $fedb6aa0ec64c6ad$var$validators = (0, $bdf4cd95dd1ab460$export$2e2bcd8739ae039).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class $fedb6aa0ec64c6ad$var$Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, $e0d2da534e5e5f79$export$2e2bcd8739ae039)(),
            response: new (0, $e0d2da534e5e5f79$export$2e2bcd8739ae039)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, $751f97722f644da0$export$2e2bcd8739ae039)(this.defaults, config);
        const { transitional: transitional , paramsSerializer: paramsSerializer , headers: headers  } = config;
        if (transitional !== undefined) (0, $bdf4cd95dd1ab460$export$2e2bcd8739ae039).assertOptions(transitional, {
            silentJSONParsing: $fedb6aa0ec64c6ad$var$validators.transitional($fedb6aa0ec64c6ad$var$validators.boolean),
            forcedJSONParsing: $fedb6aa0ec64c6ad$var$validators.transitional($fedb6aa0ec64c6ad$var$validators.boolean),
            clarifyTimeoutError: $fedb6aa0ec64c6ad$var$validators.transitional($fedb6aa0ec64c6ad$var$validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, $c445b438685cc05f$export$2e2bcd8739ae039).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, $bdf4cd95dd1ab460$export$2e2bcd8739ae039).assertOptions(paramsSerializer, {
                encode: $fedb6aa0ec64c6ad$var$validators.function,
                serialize: $fedb6aa0ec64c6ad$var$validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, $c445b438685cc05f$export$2e2bcd8739ae039).merge(headers.common, headers[config.method]);
        contextHeaders && (0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, $b4b79651b937d580$export$2e2bcd8739ae039).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, $08a5c49d81efde6d$export$2e2bcd8739ae039).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, $08a5c49d81efde6d$export$2e2bcd8739ae039).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, $751f97722f644da0$export$2e2bcd8739ae039)(this.defaults, config);
        const fullPath = (0, $49dc44258320a9bb$export$2e2bcd8739ae039)(config.baseURL, config.url);
        return (0, $9b6048975c6f2291$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $fedb6aa0ec64c6ad$var$Axios.prototype[method] = function(url, config) {
        return this.request((0, $751f97722f644da0$export$2e2bcd8739ae039)(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
(0, $c445b438685cc05f$export$2e2bcd8739ae039).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, $751f97722f644da0$export$2e2bcd8739ae039)(config || {}, {
                method: method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $fedb6aa0ec64c6ad$var$Axios.prototype[method] = generateHTTPMethod();
    $fedb6aa0ec64c6ad$var$Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var $fedb6aa0ec64c6ad$export$2e2bcd8739ae039 = $fedb6aa0ec64c6ad$var$Axios;







"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class $766b34b5b454d3d8$var$CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, $e263ffc3ad381371$export$2e2bcd8739ae039)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new $766b34b5b454d3d8$var$CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token: token,
            cancel: cancel
        };
    }
}
var $766b34b5b454d3d8$export$2e2bcd8739ae039 = $766b34b5b454d3d8$var$CancelToken;






"use strict";
function $d37ca35f765f4c05$export$2e2bcd8739ae039(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}



"use strict";
function $520598ca06dd0317$export$2e2bcd8739ae039(payload) {
    return (0, $c445b438685cc05f$export$2e2bcd8739ae039).isObject(payload) && payload.isAxiosError === true;
}



const $016c79366bc7fe0b$var$HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries($016c79366bc7fe0b$var$HttpStatusCode).forEach(([key, value])=>{
    $016c79366bc7fe0b$var$HttpStatusCode[value] = key;
});
var $016c79366bc7fe0b$export$2e2bcd8739ae039 = $016c79366bc7fe0b$var$HttpStatusCode;


"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function $1db09afc967eb816$var$createInstance(defaultConfig) {
    const context = new (0, $fedb6aa0ec64c6ad$export$2e2bcd8739ae039)(defaultConfig);
    const instance = (0, $510a3c2a717228ee$export$2e2bcd8739ae039)((0, $fedb6aa0ec64c6ad$export$2e2bcd8739ae039).prototype.request, context);
    // Copy axios.prototype to instance
    (0, $c445b438685cc05f$export$2e2bcd8739ae039).extend(instance, (0, $fedb6aa0ec64c6ad$export$2e2bcd8739ae039).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, $c445b438685cc05f$export$2e2bcd8739ae039).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $1db09afc967eb816$var$createInstance((0, $751f97722f644da0$export$2e2bcd8739ae039)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const $1db09afc967eb816$var$axios = $1db09afc967eb816$var$createInstance((0, $2589805ce50e81fa$export$2e2bcd8739ae039));
// Expose Axios class to allow class inheritance
$1db09afc967eb816$var$axios.Axios = (0, $fedb6aa0ec64c6ad$export$2e2bcd8739ae039);
// Expose Cancel & CancelToken
$1db09afc967eb816$var$axios.CanceledError = (0, $e263ffc3ad381371$export$2e2bcd8739ae039);
$1db09afc967eb816$var$axios.CancelToken = (0, $766b34b5b454d3d8$export$2e2bcd8739ae039);
$1db09afc967eb816$var$axios.isCancel = (0, $41a1e4031e396f21$export$2e2bcd8739ae039);
$1db09afc967eb816$var$axios.VERSION = (0, $a70be08f7777fc9d$export$a4ad2735b021c132);
$1db09afc967eb816$var$axios.toFormData = (0, $0f30ab6e1deabc37$export$2e2bcd8739ae039);
// Expose AxiosError class
$1db09afc967eb816$var$axios.AxiosError = (0, $cad7cf9caf832b8b$export$2e2bcd8739ae039);
// alias for CanceledError for backward compatibility
$1db09afc967eb816$var$axios.Cancel = $1db09afc967eb816$var$axios.CanceledError;
// Expose all/spread
$1db09afc967eb816$var$axios.all = function all(promises) {
    return Promise.all(promises);
};
$1db09afc967eb816$var$axios.spread = (0, $d37ca35f765f4c05$export$2e2bcd8739ae039);
// Expose isAxiosError
$1db09afc967eb816$var$axios.isAxiosError = (0, $520598ca06dd0317$export$2e2bcd8739ae039);
// Expose mergeConfig
$1db09afc967eb816$var$axios.mergeConfig = (0, $751f97722f644da0$export$2e2bcd8739ae039);
$1db09afc967eb816$var$axios.AxiosHeaders = (0, $b4b79651b937d580$export$2e2bcd8739ae039);
$1db09afc967eb816$var$axios.formToJSON = (thing)=>(0, $eb0d069eecfa1586$export$2e2bcd8739ae039)((0, $c445b438685cc05f$export$2e2bcd8739ae039).isHTMLForm(thing) ? new FormData(thing) : thing);
$1db09afc967eb816$var$axios.HttpStatusCode = (0, $016c79366bc7fe0b$export$2e2bcd8739ae039);
$1db09afc967eb816$var$axios.default = $1db09afc967eb816$var$axios;
var // this module should only have a default export
$1db09afc967eb816$export$2e2bcd8739ae039 = $1db09afc967eb816$var$axios;


// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios: $2683907f9bbba077$export$1c00760e9e5a4e95 , AxiosError: $2683907f9bbba077$export$c1fbed17c2f6a328 , CanceledError: $2683907f9bbba077$export$1ab0c6b20d94fa14 , isCancel: $2683907f9bbba077$export$3b22524397b493c6 , CancelToken: $2683907f9bbba077$export$fd08e3cb425f0d61 , VERSION: $2683907f9bbba077$export$a4ad2735b021c132 , all: $2683907f9bbba077$export$84bf76cd7afc7469 , Cancel: $2683907f9bbba077$export$848c9b7ead0df967 , isAxiosError: $2683907f9bbba077$export$fbafdbe06a5b5a9a , spread: $2683907f9bbba077$export$3ae0fd4797ed47c8 , toFormData: $2683907f9bbba077$export$10ae0d317ea97f8b , AxiosHeaders: $2683907f9bbba077$export$4e7d6ff0f3e6520 , HttpStatusCode: $2683907f9bbba077$export$a972f69c851492b3 , formToJSON: $2683907f9bbba077$export$86d7c59254d6a2c9 , mergeConfig: $2683907f9bbba077$export$7ec1ebcfa9d8bd6a  } = (0, $1db09afc967eb816$export$2e2bcd8739ae039);


const $1ed4dcc302dc25f8$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const $1ed4dcc302dc25f8$export$de026b00723010c1 = (type, message)=>{
    $1ed4dcc302dc25f8$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${message}</div>" `;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($1ed4dcc302dc25f8$export$516836c6a9dfc573, 5000);
};


const $d6da947014a9df3a$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, $1db09afc967eb816$export$2e2bcd8739ae039)({
            method: "POST",
            url: "/api/v1/users/login",
            withCredentials: true,
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === "success") {
            (0, $1ed4dcc302dc25f8$export$de026b00723010c1)("success", "Logged in successfully");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1000);
        }
    } catch (error) {
        (0, $1ed4dcc302dc25f8$export$de026b00723010c1)("error", error.response.data.message);
    }
};
const $d6da947014a9df3a$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, $1db09afc967eb816$export$2e2bcd8739ae039)({
            method: "GET",
            url: "/api/v1/users/logout",
            withCredentials: true
        });
        if (res.data.status === "success") location.reload(true);
    } catch (error) {
        (0, $1ed4dcc302dc25f8$export$de026b00723010c1)("error", "Error logging out! Try again.");
    }
};




const $2aa2fd90ce66bd3e$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === "data" ? "/api/v1/users/updateMe" : "/api/v1/users/updateMyPassword";
        const res = await (0, $1db09afc967eb816$export$2e2bcd8739ae039)({
            method: "PATCH",
            url: url,
            data: data
        });
        if (res.data.status === "success") (0, $1ed4dcc302dc25f8$export$de026b00723010c1)("success", `${type.toUpperCase()} updated Successfully`);
    } catch (error) {
        (0, $1ed4dcc302dc25f8$export$de026b00723010c1)("error", error.response.data.message);
    }
};




/* eslint-disable */ const $c1a4d95da45d8364$var$stripe = Stripe("pk_test_51NmVqDSAsysmXednT0IvTgEqlQOH4NHTyovHyx9nzsp8mmrs3as6Nl8w82TctWhV6EiYjulBsJR9dNsrNePQSvOd006ddExz5g");
const $c1a4d95da45d8364$export$8d5bdbf26681c0c2 = async (tourId)=>{
    try {
        //get checkout session from the api
        const session = await (0, $1db09afc967eb816$export$2e2bcd8739ae039)(`/api/v1/bookings/checkout-session/${tourId}`);
        //create checkout form +charge credit card
        await $c1a4d95da45d8364$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (error) {
        console.log(err);
        (0, $1ed4dcc302dc25f8$export$de026b00723010c1)("error", err.message);
    }
};


//Dom elements
const $740f6dedfd6dd566$var$mapBox = document.getElementById("map");
const $740f6dedfd6dd566$var$loginForm = document.querySelector(".form--login");
const $740f6dedfd6dd566$var$logOutBtn = document.querySelector(".nav__el--logout");
const $740f6dedfd6dd566$var$userDataForm = document.querySelector(".form-user-data");
const $740f6dedfd6dd566$var$userPasswordForm = document.querySelector(".form-user-password");
const $740f6dedfd6dd566$var$bookBtn = document.getElementById("book-tour");
//delegation
if ($740f6dedfd6dd566$var$mapBox) {
    const locations = JSON.parse($740f6dedfd6dd566$var$mapBox.dataset.locations);
    (0, $e34dad7a98f77048$export$4c5dd147b21b9176)(locations);
}
if ($740f6dedfd6dd566$var$loginForm) $740f6dedfd6dd566$var$loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    //values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, $d6da947014a9df3a$export$596d806903d1f59e)(email, password);
});
if ($740f6dedfd6dd566$var$logOutBtn) $740f6dedfd6dd566$var$logOutBtn.addEventListener("click", (0, $d6da947014a9df3a$export$a0973bcfe11b05c9));
if ($740f6dedfd6dd566$var$userDataForm) $740f6dedfd6dd566$var$userDataForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const form = new FormData();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const photo = document.getElementById("photo").files[0];
    form.append("name", name);
    form.append("email", email);
    form.append("photo", photo);
    (0, $2aa2fd90ce66bd3e$export$f558026a994b6051)(form, "data");
});
if ($740f6dedfd6dd566$var$userPasswordForm) $740f6dedfd6dd566$var$userPasswordForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";
    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await (0, $2aa2fd90ce66bd3e$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, "password");
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
    document.querySelector(".btn--save-password").textContent = "Save password";
});
if ($740f6dedfd6dd566$var$bookBtn) $740f6dedfd6dd566$var$bookBtn.addEventListener("click", async (e)=>{
    e.preventDefault();
    e.target.textContent = "Processing...";
    const { tourId: tourId  } = e.target.dataset;
    await (0, $c1a4d95da45d8364$export$8d5bdbf26681c0c2)(tourId);
});


//# sourceMappingURL=bundle.js.map
