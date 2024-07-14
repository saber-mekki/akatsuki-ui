try{
(()=>{var vt=__STORYBOOK_TYPES__,{Addon_TypesEnum:oe}=__STORYBOOK_TYPES__;var xt=__STORYBOOK_API__,{ActiveTabs:kt,Consumer:wt,ManagerContext:Pt,Provider:Ft,RequestResponseError:At,addons:A,combineParameters:Nt,controlOrMetaKey:It,controlOrMetaSymbol:Dt,eventMatchesShortcut:Ht,eventToShortcut:Lt,experimental_requestResponse:Bt,isMacLike:Mt,isShortcutTaken:jt,keyToSymbol:Yt,merge:Ut,mockChannel:se,optionOrAltSymbol:Gt,shortcutMatchesShortcut:zt,shortcutToHumanString:$t,types:Wt,useAddonState:Kt,useArgTypes:qt,useArgs:Xt,useChannel:Qt,useGlobalTypes:Jt,useGlobals:Zt,useParameter:Vt,useSharedState:er,useStoryPrepared:tr,useStorybookApi:rr,useStorybookState:nr}=__STORYBOOK_API__;var fr=__STORYBOOK_CHANNELS__,{Channel:W,PostMessageTransport:cr,WebsocketTransport:hr,createBrowserChannel:mr}=__STORYBOOK_CHANNELS__;var E=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Rr=__STORYBOOK_CLIENT_LOGGER__,{deprecate:Tr,logger:N,once:Cr,pretty:xr}=__STORYBOOK_CLIENT_LOGGER__;var Ar=__STORYBOOK_CORE_EVENTS__,{ARGTYPES_INFO_REQUEST:Nr,ARGTYPES_INFO_RESPONSE:Ir,CHANNEL_CREATED:Dr,CHANNEL_WS_DISCONNECT:Hr,CONFIG_ERROR:Lr,CREATE_NEW_STORYFILE_REQUEST:Br,CREATE_NEW_STORYFILE_RESPONSE:Mr,CURRENT_STORY_WAS_SET:jr,DOCS_PREPARED:Yr,DOCS_RENDERED:Ur,FILE_COMPONENT_SEARCH_REQUEST:Gr,FILE_COMPONENT_SEARCH_RESPONSE:zr,FORCE_REMOUNT:$r,FORCE_RE_RENDER:ie,GLOBALS_UPDATED:Wr,NAVIGATE_URL:Kr,PLAY_FUNCTION_THREW_EXCEPTION:qr,PRELOAD_ENTRIES:Xr,PREVIEW_BUILDER_PROGRESS:Qr,PREVIEW_KEYDOWN:Jr,REGISTER_SUBSCRIPTION:Zr,REQUEST_WHATS_NEW_DATA:Vr,RESET_STORY_ARGS:ue,RESULT_WHATS_NEW_DATA:en,SAVE_STORY_REQUEST:tn,SAVE_STORY_RESPONSE:rn,SELECT_STORY:nn,SET_CONFIG:an,SET_CURRENT_STORY:on,SET_GLOBALS:sn,SET_INDEX:un,SET_STORIES:ln,SET_WHATS_NEW_CACHE:dn,SHARED_STATE_CHANGED:pn,SHARED_STATE_SET:fn,STORIES_COLLAPSE_ALL:cn,STORIES_EXPAND_ALL:hn,STORY_ARGS_UPDATED:mn,STORY_CHANGED:gn,STORY_ERRORED:bn,STORY_INDEX_INVALIDATED:yn,STORY_MISSING:En,STORY_PREPARED:Sn,STORY_RENDERED:le,STORY_RENDER_PHASE_CHANGED:_n,STORY_SPECIFIED:vn,STORY_THREW_EXCEPTION:On,STORY_UNCHANGED:Rn,TELEMETRY_ERROR:Tn,TOGGLE_WHATS_NEW_NOTIFICATIONS:Cn,UNHANDLED_ERRORS_WHILE_PLAYING:xn,UPDATE_GLOBALS:de,UPDATE_QUERY_PARAMS:kn,UPDATE_STORY_ARGS:pe}=__STORYBOOK_CORE_EVENTS__;function K(){let e={setHandler:()=>{},send:()=>{}};return new W({transport:e})}var q=class{constructor(){this.getChannel=()=>{if(!this.channel){let e=K();return this.setChannel(e),e}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},I="__STORYBOOK_ADDONS_PREVIEW";function fe(){return E[I]||(E[I]=new q),E[I]}var ce=fe();function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},_(e,t)}function we(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(e)}function Pe(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Z=function(){return!!e})()}function Fe(e,t,r){if(Z())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var a=new(e.bind.apply(e,n));return r&&_(a,r.prototype),a}function Y(e){var t=typeof Map=="function"?new Map:void 0;return Y=function(r){if(r===null||!Pe(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,n)}function n(){return Fe(r,arguments,j(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_(n,r)},Y(e)}var Ae={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function Ne(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0],a=[],o;for(o=1;o<t.length;o+=1)a.push(t[o]);return a.forEach(function(i){n=n.replace(/%[a-z]/,i)}),n}var h=function(e){we(t,e);function t(r){for(var n,a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return n=e.call(this,Ne.apply(void 0,[Ae[r]].concat(o)))||this,ke(n)}return t}(Y(Error));function D(e){return Math.round(e*255)}function Ie(e,t,r){return D(e)+","+D(t)+","+D(r)}function v(e,t,r,n){if(n===void 0&&(n=Ie),t===0)return n(r,r,r);var a=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(a%2-1)),u=0,l=0,c=0;a>=0&&a<1?(u=o,l=i):a>=1&&a<2?(u=i,l=o):a>=2&&a<3?(l=o,c=i):a>=3&&a<4?(l=i,c=o):a>=4&&a<5?(u=i,c=o):a>=5&&a<6&&(u=o,c=i);var b=r-o/2,y=u+b,m=l+b,F=c+b;return n(y,m,F)}var X={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function De(e){if(typeof e!="string")return e;var t=e.toLowerCase();return X[t]?"#"+X[t]:e}var He=/^#[a-fA-F0-9]{6}$/,Le=/^#[a-fA-F0-9]{8}$/,Be=/^#[a-fA-F0-9]{3}$/,Me=/^#[a-fA-F0-9]{4}$/,H=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,je=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ye=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Ue=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function k(e){if(typeof e!="string")throw new h(3);var t=De(e);if(t.match(He))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Le)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(Be))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Me)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var a=H.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=je.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=Ye.exec(t);if(i){var u=parseInt(""+i[1],10),l=parseInt(""+i[2],10)/100,c=parseInt(""+i[3],10)/100,b="rgb("+v(u,l,c)+")",y=H.exec(b);if(!y)throw new h(4,t,b);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var m=Ue.exec(t.substring(0,50));if(m){var F=parseInt(""+m[1],10),ne=parseInt(""+m[2],10)/100,ae=parseInt(""+m[3],10)/100,$="rgb("+v(F,ne,ae)+")",R=H.exec($);if(!R)throw new h(4,t,$);return{red:parseInt(""+R[1],10),green:parseInt(""+R[2],10),blue:parseInt(""+R[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}throw new h(5)}function Ge(e){var t=e.red/255,r=e.green/255,n=e.blue/255,a=Math.max(t,r,n),o=Math.min(t,r,n),i=(a+o)/2;if(a===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u,l=a-o,c=i>.5?l/(2-a-o):l/(a+o);switch(a){case t:u=(r-n)/l+(r<n?6:0);break;case r:u=(n-t)/l+2;break;default:u=(t-r)/l+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:c,lightness:i,alpha:e.alpha}:{hue:u,saturation:c,lightness:i}}function V(e){return Ge(k(e))}var ze=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},U=ze;function g(e){var t=e.toString(16);return t.length===1?"0"+t:t}function L(e){return g(Math.round(e*255))}function $e(e,t,r){return U("#"+L(e)+L(t)+L(r))}function C(e,t,r){return v(e,t,r,$e)}function We(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return C(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return C(e.hue,e.saturation,e.lightness);throw new h(1)}function Ke(e,t,r,n){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?C(e,t,r):"rgba("+v(e,t,r)+","+n+")";if(typeof e=="object"&&t===void 0&&r===void 0&&n===void 0)return e.alpha>=1?C(e.hue,e.saturation,e.lightness):"rgba("+v(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new h(2)}function G(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return U("#"+g(e)+g(t)+g(r));if(typeof e=="object"&&t===void 0&&r===void 0)return U("#"+g(e.red)+g(e.green)+g(e.blue));throw new h(6)}function O(e,t,r,n){if(typeof e=="string"&&typeof t=="number"){var a=k(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?G(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if(typeof e=="object"&&t===void 0&&r===void 0&&n===void 0)return e.alpha>=1?G(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new h(7)}var qe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Xe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Qe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Je=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function ee(e){if(typeof e!="object")throw new h(8);if(Xe(e))return O(e);if(qe(e))return G(e);if(Je(e))return Ke(e);if(Qe(e))return We(e);throw new h(8)}function te(e,t,r){return function(){var n=r.concat(Array.prototype.slice.call(arguments));return n.length>=t?e.apply(this,n):te(e,t,n)}}function w(e){return te(e,e.length,[])}function P(e,t,r){return Math.max(e,Math.min(t,r))}function Ze(e,t){if(t==="transparent")return t;var r=V(t);return ee(S({},r,{lightness:P(0,1,r.lightness-parseFloat(e))}))}var Ve=w(Ze),et=Ve;function tt(e,t){if(t==="transparent")return t;var r=V(t);return ee(S({},r,{lightness:P(0,1,r.lightness+parseFloat(e))}))}var rt=w(tt),nt=rt;function at(e,t){if(t==="transparent")return t;var r=k(t),n=typeof r.alpha=="number"?r.alpha:1,a=S({},r,{alpha:P(0,1,(n*100+parseFloat(e)*100)/100)});return O(a)}var na=w(at);function ot(e,t){if(t==="transparent")return t;var r=k(t),n=typeof r.alpha=="number"?r.alpha:1,a=S({},r,{alpha:P(0,1,+(n*100-parseFloat(e)*100).toFixed(2)/100)});return O(a)}var st=w(ot),it=st,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},Q={app:"#F6F9FC",bar:s.lightest,content:s.lightest,preview:s.lightest,gridCellSize:10,hoverable:it(.9,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},x={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},ut={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:Q.app,appContentBg:s.lightest,appPreviewBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:x.fonts.base,fontCode:x.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.dark,barTextColor:s.mediumdark,barHoverColor:s.secondary,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:Q.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},J=ut,lt={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:s.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:x.fonts.base,fontCode:x.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:s.mediumdark,barHoverColor:s.secondary,barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},dt=lt,{window:B}=E;var pt=e=>typeof e!="string"?(N.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,ft=e=>!/(gradient|var|calc)/.test(e),ct=(e,t)=>e==="darken"?O(`${et(1,t)}`,.95):e==="lighten"?O(`${nt(1,t)}`,.95):t,re=e=>t=>{if(!pt(t)||!ft(t))return t;try{return ct(e,t)}catch{return t}},aa=re("lighten"),oa=re("darken"),ht=()=>!B||!B.matchMedia?"light":B.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",T={light:J,dark:dt,normal:J},M=ht(),z=(e={base:M},t)=>{let r={...T[M],...T[e.base]||{},...e,base:T[e.base]?e.base:M};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var mt=z({base:"light",brandTitle:"Akatsuki UI guid",brandUrl:"https://saber-mekki.github.io/akatsuki-ui",brandImage:"https://saber-mekki.github.io/akatsuki-ui/uu-.png"});A.setConfig({theme:mt});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
