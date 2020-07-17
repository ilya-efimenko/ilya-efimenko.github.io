/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/convert-hex/convert-hex.js":
/*!*************************************************!*\
  !*** ./node_modules/convert-hex/convert-hex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(globals) {
'use strict'

var convertHex = {
  bytesToHex: function(bytes) {
    /*if (typeof bytes.byteLength != 'undefined') {
      var newBytes = []

      if (typeof bytes.buffer != 'undefined')
        bytes = new DataView(bytes.buffer)
      else
        bytes = new DataView(bytes)

      for (var i = 0; i < bytes.byteLength; ++i) {
        newBytes.push(bytes.getUint8(i))
      }
      bytes = newBytes
    }*/
    return arrBytesToHex(bytes)
  },
  hexToBytes: function(hex) {
    if (hex.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.")
    if (hex.indexOf('0x') === 0) hex = hex.slice(2)
    return hex.match(/../g).map(function(x) { return parseInt(x,16) })
  }
}


// PRIVATE

function arrBytesToHex(bytes) {
  return bytes.map(function(x) { return padLeft(x.toString(16),2) }).join('')
}

function padLeft(orig, len) {
  if (orig.length > len) return orig
  return Array(len - orig.length + 1).join('0') + orig
}


if ( true && module.exports) { //CommonJS
  module.exports = convertHex
} else {
  globals.convertHex = convertHex
}

}(this);

/***/ }),

/***/ "./node_modules/convert-string/convert-string.js":
/*!*******************************************************!*\
  !*** ./node_modules/convert-string/convert-string.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(globals) {
'use strict'

var convertString = {
  bytesToString: function(bytes) {
    return bytes.map(function(x){ return String.fromCharCode(x) }).join('')
  },
  stringToBytes: function(str) {
    return str.split('').map(function(x) { return x.charCodeAt(0) })
  }
}

//http://hossa.in/2012/07/20/utf-8-in-javascript.html
convertString.UTF8 = {
   bytesToString: function(bytes) {
    return decodeURIComponent(escape(convertString.bytesToString(bytes)))
  },
  stringToBytes: function(str) {
   return convertString.stringToBytes(unescape(encodeURIComponent(str)))
  }
}

if ( true && module.exports) { //CommonJS
  module.exports = convertString
} else {
  globals.convertString = convertString
}

}(this);

/***/ }),

/***/ "./node_modules/sha256/lib/sha256.js":
/*!*******************************************!*\
  !*** ./node_modules/sha256/lib/sha256.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(globals) {
'use strict'

var _imports = {}

if ( true && module.exports) { //CommonJS
  _imports.bytesToHex = __webpack_require__(/*! convert-hex */ "./node_modules/convert-hex/convert-hex.js").bytesToHex
  _imports.convertString = __webpack_require__(/*! convert-string */ "./node_modules/convert-string/convert-string.js")
  module.exports = sha256
} else {
  _imports.bytesToHex = globals.convertHex.bytesToHex
  _imports.convertString = globals.convertString
  globals.sha256 = sha256
}

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

// Initialization round constants tables
var K = []

// Compute constants
!function () {
  function isPrime(n) {
    var sqrtN = Math.sqrt(n);
    for (var factor = 2; factor <= sqrtN; factor++) {
      if (!(n % factor)) return false
    }

    return true
  }

  function getFractionalBits(n) {
    return ((n - (n | 0)) * 0x100000000) | 0
  }

  var n = 2
  var nPrime = 0
  while (nPrime < 64) {
    if (isPrime(n)) {
      K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3))
      nPrime++
    }

    n++
  }
}()

var bytesToWords = function (bytes) {
  var words = []
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32)
  }
  return words
}

var wordsToBytes = function (words) {
  var bytes = []
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF)
  }
  return bytes
}

// Reusable object
var W = []

var processBlock = function (H, M, offset) {
  // Working variables
  var a = H[0], b = H[1], c = H[2], d = H[3]
  var e = H[4], f = H[5], g = H[6], h = H[7]

    // Computation
  for (var i = 0; i < 64; i++) {
    if (i < 16) {
      W[i] = M[offset + i] | 0
    } else {
      var gamma0x = W[i - 15]
      var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
                    ((gamma0x << 14) | (gamma0x >>> 18)) ^
                    (gamma0x >>> 3)

      var gamma1x = W[i - 2];
      var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                    ((gamma1x << 13) | (gamma1x >>> 19)) ^
                    (gamma1x >>> 10)

      W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
    }

    var ch  = (e & f) ^ (~e & g);
    var maj = (a & b) ^ (a & c) ^ (b & c);

    var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
    var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

    var t1 = h + sigma1 + ch + K[i] + W[i];
    var t2 = sigma0 + maj;

    h = g;
    g = f;
    f = e;
    e = (d + t1) | 0;
    d = c;
    c = b;
    b = a;
    a = (t1 + t2) | 0;
  }

  // Intermediate hash value
  H[0] = (H[0] + a) | 0;
  H[1] = (H[1] + b) | 0;
  H[2] = (H[2] + c) | 0;
  H[3] = (H[3] + d) | 0;
  H[4] = (H[4] + e) | 0;
  H[5] = (H[5] + f) | 0;
  H[6] = (H[6] + g) | 0;
  H[7] = (H[7] + h) | 0;
}

function sha256(message, options) {;
  if (message.constructor === String) {
    message = _imports.convertString.UTF8.stringToBytes(message);
  }

  var H =[ 0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
           0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19 ];

  var m = bytesToWords(message);
  var l = message.length * 8;

  m[l >> 5] |= 0x80 << (24 - l % 32);
  m[((l + 64 >> 9) << 4) + 15] = l;

  for (var i=0 ; i<m.length; i += 16) {
    processBlock(H, m, i);
  }

  var digestbytes = wordsToBytes(H);
  return options && options.asBytes ? digestbytes :
         options && options.asString ? _imports.convertString.bytesToString(digestbytes) :
         _imports.bytesToHex(digestbytes)
}

sha256.x2 = function(message, options) {
  return sha256(sha256(message, { asBytes:true }), options)
}

}(this);


/***/ }),

/***/ "./src/burger.js":
/*!***********************!*\
  !*** ./src/burger.js ***!
  \***********************/
/*! exports provided: def */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
function def() {
    const burger = document.querySelector('.burger')
    const navLinks = document.querySelector('.nav_links')
    
    navLinks.addEventListener('click', () => {
        if(menuOpen) {
            navLinks.classList.remove('open')
            menuOpen = false
        } 
    })
    let menuOpen = false
    burger.addEventListener('click', () => {
        if(!menuOpen) {
            navLinks.classList.add('open')
            menuOpen = true
        } 
        else {
            navLinks.classList.remove('open')
            menuOpen = false
        }
    })
}
def()


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signUp */ "./src/signUp.js");
/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signIn */ "./src/signIn.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./src/burger.js");



//import profile from './profile'

// let email = localStorage.getItem('email')
// if(email) {
//     const getDataUser = async () => {
//         return await (await fetch ('http://localhost:3000/users')).json()
//     }
//     getDataUser().then(response => {
//         let user = response.find(item => item.email === email)
//         if(user.password === localStorage.getItem('password')) {
    

//         }
//     })
// }
//submitDataSignUp

let btnSignUp = document.querySelector('.buttonSignUp')
btnSignUp.onclick = _signUp__WEBPACK_IMPORTED_MODULE_0__["default"] 
let btnSignIn = document.querySelector('.signIn')
btnSignIn.onclick = _signIn__WEBPACK_IMPORTED_MODULE_1__["default"] 
// let submitDataSignUp = document.querySelector('.submitDataSignUp')
// submitDataSignUp.onclick = profile


/***/ }),

/***/ "./src/signIn.js":
/*!***********************!*\
  !*** ./src/signIn.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sha256 = __webpack_require__(/*! sha256 */ "./node_modules/sha256/lib/sha256.js")
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
    e.preventDefault()
    let users
    const getData = async () => {
        return await (await fetch ('http://localhost:3000/users')).json()
    }
    getData().then(response => {
        users = response
    })
    let shadow = document.body.appendChild(document.createElement('div'))
    shadow.style = `
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: #0009;
    `


    let section = shadow.appendChild(document.createElement('section'))
    section.style = `
        width:60%;
        min-height:60%;
        background-color:#ffffff;
        position:fixed;
        top:24%;
        left:20%;
        animation-name: animated_links2;
        animation-duration: .7s;
    `
    let exitSignIn = section.appendChild(document.createElement('p'))
    exitSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 40px;
        font-weight: bold;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        cursor:pointer;
        margin-left: 80%;
        margin-top: 30px;
    `
   exitSignIn.innerText = 'X'
   exitSignIn.onclick = function(event) {
       shadow.style.display = 'none'
   }

    let h2SignIn = section.appendChild(document.createElement('h2'))
    h2SignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 34px;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        margin-top:20px;
    `
   h2SignIn.innerText = 'Sign in Form'


    let emailSignIn = section.appendChild(document.createElement('input'))
    emailSignIn.type = 'email'
    emailSignIn.placeholder = 'Email'
    emailSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 80%;
        height: 52px;
        font-size: 21px;
        text-align: center;
        margin-top: 20px;
        margin-left:8%;
        font-family:HelveticaNeue;
        color: #000000;
        cursor: pointer;
    `

    emailSignIn.onchange = function(event) {
        if(event.target.value === localStorage.getItem('email')) {
            event.target.style.border = ''
            pSignIn.style.display = 'none'
            return
        }
        else if (event.target.value !== localStorage.getItem('email') && !event.target.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'There is no such user email or incorrect email!'
        }
    }
    let passwordSignIn = section.appendChild(document.createElement('input'))
    passwordSignIn.type = 'password'
    passwordSignIn.placeholder = 'Password'
    passwordSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 80%;
        height: 52px;
        font-size: 21px;
        text-align: center;
        margin-top: 20px;
        margin-left:8%;
        font-family:HelveticaNeue;
        color: #000000;
        cursor: pointer;
    `
    passwordSignIn.onchange = function(event) {
        if(sha256(event.target.value) === localStorage.getItem('password')) {
            event.target.style.border = '2px solid green'
            pSignIn.innerText = ''
        } else {
            pSignIn.innerText = 'Incorrect password'
            event.target.style.border = `2px solid #ff0000`
        }
    }
    let pSignIn = section.appendChild(document.createElement('h2'))
   pSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:left;
        font-size: 17px;
        font-family: Montserrat;
        letter-spacing: 1px;
        color: rgb(255, 0, 0);
        margin-top:10px;
        margin-left:8%;
   `

    let submitSignIn = section.appendChild(document.createElement('input'))
    submitSignIn.type = 'submit'
    submitSignIn.value = 'Submit'
    submitSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 81%;
        height: 52px;
        font-size: 21px;
        letter-spacing: 1px;
        text-align: center;
        margin-left:8%;
        justify-content: center;
        font-family:HelveticaNeue;
        color: #ffffff;
        background-color: #000000;
        cursor: pointer;
    `
    
        submitSignIn.onclick = function(event) {
            if(passwordSignIn && emailSignIn)  {
                let elem = document.body.appendChild(document.createElement('div'))
                elem.style = `
                  padding : 20px;
                  border : 1px solid black;
                  width:100%;
                  height:100%;
                  position:fixed;
                  top:0;
                  left:0;
                  bottom:0;
                  right:0;
                  background-color:#000000;
                  z-index:10;
                `
                const avatar = elem.appendChild(document.createElement('img'))
                avatar.src = user.image
                const loginField = elem.appendChild(document.createElement('p'))
                loginField.innerText = user.email 
            }
        }

    }); 


/***/ }),

/***/ "./src/signUp.js":
/*!***********************!*\
  !*** ./src/signUp.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const sha256 = __webpack_require__(/*! sha256 */ "./node_modules/sha256/lib/sha256.js")
/* harmony default export */ __webpack_exports__["default"] = (function() {
    let userData = {
        name: '',
        email: '',
        password: '',
        image: ''
    }
    
    
   
    let shadow = document.body.appendChild(document.createElement('div'))
    shadow.style = `
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: #0009;
    `

    let section = shadow.appendChild(document.createElement('section'))
    section.style = `
        width:70%;
        min-height:80%;
        background-color:#ffffff;
        position:fixed;
        top:15%;
        left:15%;
        animation-name: animated_links2;
        animation-duration: .7s;
    `
   
    let exitSignUp = section.appendChild(document.createElement('p'))
    exitSignUp.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 40px;
        font-weight: bold;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        cursor:pointer;
        margin-left: 80%;
        margin-top: 30px;
    `
   exitSignUp.innerText = 'X'
   exitSignUp.onclick = function(event) {
       shadow.style.display = 'none'
       pSignIn.innerText = ''
   }

    let h2SignUp = section.appendChild(document.createElement('h2'))
    h2SignUp.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 34px;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        margin-top:20px;
    `
   h2SignUp.innerText = 'Sign Up Form'
   
   let pChooseImg = section.appendChild(document.createElement('span'))
   pChooseImg.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 19px;
        text-align: center;
        margin-top: 20px;
        font-family:HelveticaNeue;
        color: #000000;
   `
   pChooseImg.innerText = 'Choose your avatar image...'
   
   let avatar = section.appendChild(document.createElement('input')) 
    avatar.type = 'file'
    avatar.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:20px;
        margin-left:8%;
        text-align:center;
    `
    let nameInput = section.appendChild(document.createElement('input'))
    nameInput.type = 'text'
    nameInput.placeholder = 'Full name'
    nameInput.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
         width: 80%;
         height: 52px;
         font-size: 21px;
         text-align: center;
         margin-top: 20px;
         margin-left:8%;
         font-family:HelveticaNeue;
         color: #000000;
         cursor: pointer;
    `
    let emailInput = section.appendChild(document.createElement('input'))
    emailInput.type = 'email'
    emailInput.placeholder = 'Email'
    emailInput.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
         width: 80%;
         height: 52px;
         font-size: 21px;
         text-align: center;
         margin-top: 20px;
         margin-left:8%;
         font-family:HelveticaNeue;
         color: #000000;
         cursor: pointer;
    `
    let passwordInput = section.appendChild(document.createElement('input'))
    passwordInput.type = 'password'
    passwordInput.placeholder = 'Password'
    passwordInput.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 80%;
        height: 52px;
        font-size: 21px;
        text-align: center;
        margin-top: 20px;
        margin-left:8%;
        font-family:HelveticaNeue;
        color: #000000;
        cursor: pointer;
    `
    let pSignIn = section.appendChild(document.createElement('h2'))
    pSignIn.style = `
      display:flex;
      flex-direction:column;
      align-items:left;
      font-size: 17px;
      font-family: Montserrat;
      letter-spacing: 1px;
      color: rgb(255, 0, 0);
      margin-top:10px;
      margin-left:8%;
   `
    let submitInput = section.appendChild(document.createElement('input'))
    submitInput.type = 'submit'
    submitInput.value = 'Submit'
    submitInput.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
         width: 81%;
         height: 52px;
         font-size: 21px;
         letter-spacing: 1px;
         text-align: center;
         margin-left:8%;
         justify-content: center;
         font-family:HelveticaNeue;
         color: #ffffff;
         background-color: #000000;
         cursor: pointer;
    `
    submitInput.className = 'submitDataSignUp'
    let users
    const getData = async () => {
        return await (await fetch ('http://localhost:3000/users')).json()
    }
    getData().then(response => {
        users = response
    })
    nameInput.onchange = function(event) {
        if(users.filter(user => user.name === event.target.value).length !== 0) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'This user already exsists'
            return
        } else {
            pSignIn.innerText = ''
            event.target.style.border = ''
        }
        userData.name = event.target.value
        localStorage.setItem('name', userData.name)   
    }

    emailInput.onchange = function(event) {
        if(users.filter(user => user.email === event.target.value).length !== 0) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'User with this email already exists!'
            return
        } else if (!event.target.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'Email should contain @ symbol,letters and numbers!'
        } else {
            pSignIn.innerText = ''
            event.target.style.border = ''
        }
        userData.email = event.target.value
        localStorage.setItem('email', userData.email) 
    }

    passwordInput.onchange = function(event) {
        if(!event.target.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
            pSignIn.innerText = 'Password should contain at least 8 symbols,2 big letters and numbers!'
            return
        } 
        userData.password = sha256(event.target.value) 
        localStorage.setItem('password', userData.password)   
    }

    avatar.onchange = function(event) {
        const file = event.target.files[0]  
        if(!file.type.match(/image/)) {
            pSignIn.innerText = 'Choose .jpg .png or .gif file'
            return
        } else {
            pSignIn.innerText = ''
        }
        if(file.size > 100000) {
            pSignIn.innerText = 'File is too much!'
            return
        } 
        const reader = new FileReader()
        reader.onload = function(ev) {  
            const p = pChooseImg.appendChild(document.createElement('p'))
            p.style =  `
                display:flex;
                flex-direction:column;
            `
            const img = p.appendChild(document.createElement('img'))
            img.src = ev.target.result
            img.style = `
                display:none;
            `
            userData.image = ev.target.result
        }
        reader.readAsDataURL(file)  
    } 
    submitInput.addEventListener('click', function sub (event) {
        
        if(userData.name && userData.image && userData.password && userData.email) {
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            }) 
            pSignIn.innerText = 'Everything is correct!'
            pSignIn.style.color = '#07d307'
        } 
        else if(!userData.name && !userData.image && !userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your data!'
        }
        else if(!userData.name && !userData.image  && !userData.password  && userData.email) {
            pSignIn.innerText = 'Enter your image, name and password!'
        }
        else if(!userData.name && !userData.image  && userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your image, name and email!'
        }
        else if(userData.name && !userData.image  && !userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your image, password and email!'
        }
        else if(!userData.name && userData.image  && !userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your email, password and name!'
        }
        else if(userData.name && !userData.image && !userData.password && userData.email) {
            pSignIn.innerText = 'Enter your image and password!'
        }
        else if(!userData.name && !userData.image && userData.password && userData.email) {
            pSignIn.innerText = 'Enter your image and name!'
        }
        else if(userData.name && !userData.image && userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your image and email!'
        }
        else if(userData.name && userData.image && !userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your password and email!'
        }
        else if(!userData.name && userData.image && !userData.password && userData.email) {
            pSignIn.innerText = 'Enter your password and name!'
        }
        else if(!userData.name && userData.image && userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your email and name!'
        }
        else if(!userData.name && userData.image && userData.password && userData.email) {
            pSignIn.innerText = 'Enter your name!'
        }
        else if(userData.name && !userData.image && userData.password && userData.email) {
            pSignIn.innerText = 'Enter your image!'
        }
        else if(userData.name && userData.image && !userData.password && userData.email) {
            pSignIn.innerText = 'Enter your password!'
        }
        else if(userData.name && userData.image && userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your email!'
        }

    })
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map