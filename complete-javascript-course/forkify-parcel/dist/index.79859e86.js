var e,t,r,n,i,o,a,c,s,u,l,f,p,h,d,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},_={},b=function(e){return e&&e.Math===Math&&e};_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof _&&_)||function(){return this}()||Function("return this")();var w={},E={};w=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},j={};j=!E(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var O=Function.prototype.call;S=j?O.bind(O):function(){return O.apply(O,arguments)};var P={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!P.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:P;var $={};$=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var k={},x={},M={},T=Function.prototype,I=T.call,q=j&&T.bind.bind(I,I),F={},N=(M=j?q:function(e){return function(){return I.apply(e,arguments)}})({}.toString),A=M("".slice);F=function(e){return A(N(e),8,-1)};var C=Object,H=M("".split);x=E(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===F(e)?H(e,""):C(e)}:C;var R={},B={};B=function(e){return null==e};var D=TypeError;R=function(e){if(B(e))throw new D("Can't call method on "+e);return e},k=function(e){return x(R(e))};var G={},z={},U={},W={},Y="object"==typeof document&&document.all;W=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:W(e)};var Q={},V={};V=function(e,t){var r;return arguments.length<2?(r=_[e],W(r)?r:void 0):_[e]&&_[e][t]};var K={};K=M({}.isPrototypeOf);var J={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=_.process,er=_.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=_.String;J=(X=!!Object.getOwnPropertySymbols&&!E(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;Q=J?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return W(t)&&K(t.prototype,ea(e))};var ec={},es={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ef=TypeError;es=function(e){if(W(e))return e;throw new ef(eu(e)+" is not a function")},ec=function(e,t){var r=e[t];return B(r)?void 0:es(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!U(n=S(r,e))||W(r=e.valueOf)&&!U(n=S(r,e))||"string"!==t&&W(r=e.toString)&&!U(n=S(r,e)))return n;throw new eh("Can't convert object to primitive value")};var ed={},ev={},eg={};eg=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var e_="__core-js_shared__",eb=ev=_[e_]||ey(e_,{});(eb.versions||(eb.versions=[])).push({version:"3.36.1",mode:eg?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"}),ed=function(e,t){return ev[e]||(ev[e]=t||{})};var ew={},eE={},eS=Object;eE=function(e){return eS(R(e))};var ej=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return ej(eE(e),t)};var eO={},eP=0,eL=Math.random(),e$=M(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+e$(++eP+eL,36)};var ek=_.Symbol,ex=ed("wks"),eM=J?ek.for||ek:ek&&ek.withoutSetter||eO,eT=TypeError,eI=(ew(ex,e="toPrimitive")||(ex[e]=X&&ew(ek,e)?ek[e]:eM("Symbol."+e)),ex[e]);z=function(e,t){if(!U(e)||Q(e))return e;var r,n=ec(e,eI);if(n){if(void 0===t&&(t="default"),r=S(n,e,t),!U(r)||Q(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},G=function(e){var t=z(e,"string");return Q(t)?t:t+""};var eq={},eF={},eN=_.document,eA=U(eN)&&U(eN.createElement);eF=function(e){return eA?eN.createElement(e):{}},eq=!w&&!E(function(){return 7!==Object.defineProperty(eF("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;r=w?eC:function(e,t){if(e=k(e),t=G(t),eq)try{return eC(e,t)}catch(e){}if(ew(e,t))return $(!S(n,e,t),e[t])};var eH={},eR={};eR=w&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eD=String,eG=TypeError;eB=function(e){if(U(e))return e;throw new eG(eD(e)+" is not an object")};var ez=TypeError,eU=Object.defineProperty,eW=Object.getOwnPropertyDescriptor,eY="enumerable",eQ="configurable",eV="writable";a=w?eR?function(e,t,r){if(eB(e),t=G(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=eW(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eQ in r?r[eQ]:n[eQ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return eU(e,t,r)}:eU:function(e,t,r){if(eB(e),t=G(t),eB(r),eq)try{return eU(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eH=w?function(e,t,r){return a(e,t,$(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eJ={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e2=M(Function.toString);W(ev.inspectSource)||(ev.inspectSource=function(e){return e2(e)}),e1=ev.inspectSource;var e4={},e3={},e7=_.WeakMap;e3=W(e7)&&/native code/.test(String(e7));var e9={},e8=ed("keys");e9=function(e){return e8[e]||(e8[e]=eO(e))};var e5={};e5={};var e6="Object already initialized",te=_.TypeError,tt=_.WeakMap;if(e3||ev.state){var tr=ev.state||(ev.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,c=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},s=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e9("state");e5[tn]=!0,c=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eH(e,tn,t),t},s=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e4={set:c,get:s,has:u,enforce:function(e){return u(e)?s(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=s(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e4.get,ta=String,tc=Object.defineProperty,ts=M("".slice),tu=M("".replace),tl=M([].join),tf=w&&!E(function(){return 8!==tc(function(){},"length",{value:8}).length}),tp=String(String).split("String"),th=eJ=function(e,t,r){"Symbol("===ts(ta(t),0,7)&&(t="["+tu(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?tc(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&ew(r,"arity")&&e.length!==r.arity&&tc(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&tc(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=th(function(){return W(this)&&to(this).source||e1(this)},"toString"),eK=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(W(r)&&eJ(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var td={},tv={},tg={},ty={},tm={},t_={},tb=Math.ceil,tw=Math.floor;t_=Math.trunc||function(e){var t=+e;return(t>0?tw:tb)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:t_(t)};var tE=Math.max,tS=Math.min;ty=function(e,t){var r=tm(e);return r<0?tE(r+t,0):tS(r,t)};var tj={},tO={},tP=Math.min;tO=function(e){var t=tm(e);return t>0?tP(t,9007199254740991):0},tj=function(e){return tO(e.length)};var tL=function(e){return function(t,r,n){var i,o=k(t),a=tj(o);if(0===a)return!e&&-1;var c=ty(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},t$={includes:tL(!0),indexOf:tL(!1)}.indexOf,tk=M([].push);tg=function(e,t){var r,n=k(e),i=0,o=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tk(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~t$(o,r)||tk(o,r));return o};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tg(e,tx)},f=Object.getOwnPropertySymbols;var tM=M([].concat);tv=V("Reflect","ownKeys")||function(e){var t=l(eB(e));return f?tM(t,f(e)):t},td=function(e,t,n){for(var i=tv(t),o=0;o<i.length;o++){var c=i[o];ew(e,c)||n&&ew(n,c)||a(e,c,r(t,c))}};var tT={},tI=/#|\.prototype\./,tq=function(e,t){var r=tN[tF(e)];return r===tC||r!==tA&&(W(t)?E(t):!!t)},tF=tq.normalize=function(e){return String(e).replace(tI,".").toLowerCase()},tN=tq.data={},tA=tq.NATIVE="N",tC=tq.POLYFILL="P";tT=tq,m=function(e,t){var n,i,o,a,c,s=e.target,u=e.global,l=e.stat;if(n=u?_:l?_[s]||ey(s,{}):_[s]&&_[s].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(c=r(n,i))&&c.value:n[i],!tT(u?i:s+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;td(a,o)}(e.sham||o&&o.sham)&&eH(a,"sham",!0),eK(n,i,a,e)}};var tH={},tR={},tB=Function.prototype,tD=tB.apply,tG=tB.call;tR="object"==typeof Reflect&&Reflect.apply||(j?tG.bind(tD):function(){return tG.apply(tD,arguments)});var tz={},tU={},tW=(tU=function(e){if("Function"===F(e))return M(e)})(tU.bind);tz=function(e,t){return es(e),void 0===t?e:j?tW(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=V("document","documentElement");var tQ={};tQ=M([].slice);var tV={},tK=TypeError;tV=function(e,t){if(e<t)throw new tK("Not enough arguments");return e};var tJ={};tJ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===F(_.process);var tZ=_.setImmediate,t0=_.clearImmediate,t1=_.process,t2=_.Dispatch,t4=_.Function,t3=_.MessageChannel,t7=_.String,t9=0,t8={},t5="onreadystatechange";E(function(){p=_.location});var t6=function(e){if(ew(t8,e)){var t=t8[e];delete t8[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){_.postMessage(t7(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tV(arguments.length,1);var t=W(e)?e:t4(e),r=tQ(arguments,1);return t8[++t9]=function(){tR(t,void 0,r)},h(t9),t9},t0=function(e){delete t8[e]},tX?h=function(e){t1.nextTick(re(e))}:t2&&t2.now?h=function(e){t2.now(re(e))}:t3&&!tJ?(v=(d=new t3).port2,d.port1.onmessage=rt,h=tz(v.postMessage,v)):_.addEventListener&&W(_.postMessage)&&!_.importScripts&&p&&"file:"!==p.protocol&&!E(rr)?(h=rr,_.addEventListener("message",rt,!1)):h=t5 in eF("script")?function(e){tY.appendChild(eF("script"))[t5]=function(){tY.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tH={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==rn},{clearImmediate:rn});var ri=tH.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rc=_.Function,rs=/MSIE .\./.test(ee)||ra&&((t=_.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rs?function(n,i){var o=tV(arguments.length,1)>r,a=W(n)?n:rc(n),c=o?tQ(arguments,r):[],s=o?function(){tR(a,this,c)}:a;return t?e(s,i):e(s)}:e};var ru=_.setImmediate?ro(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==ru},{setImmediate:ru});var rl={};rl=new URL("icons.c14567a0.svg",import.meta.url).toString();var rf=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(s,"_invoke",{value:(a=new L(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===d){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(s){if(s===v)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(e,n,a);if("normal"===u.type){if(c=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=d,a.method="throw",a.arg=u.arg)}})}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function g(){}function y(){}function m(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==r&&n.call(w,a)&&(_=w);var E=m.prototype=g.prototype=Object.create(_);function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(j.prototype),u(j.prototype,c,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(E),u(E,s,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}const rp="https://forkify-api.herokuapp.com/api/v2/recipes",rh=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rd=function(e){if(parseFloat(e)===parseInt(e))return e;let t=function(e,r){return r<1e-7?e:t(r,Math.floor(e%r))},r=Math.pow(10,e.toString().length-2),n=e*r;var i=t(n,r);let o=0;return(n/=i)>(r/=i)&&(o=Math.floor(n/r),n-=o*r),e=Math.floor(n)+"/"+Math.floor(r),o&&(e=o+" "+e),e},rv={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},rg=async function(e){try{let t=await rh(`${rp}/${e}`);console.log(t);let{recipe:r}=t.data;rv.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients}}catch(e){throw e}},ry=async function(e){try{rv.search.query=e;let{data:t}=await rh(`${rp}?search=${e}`);rv.search.results=t.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),rv.search.results}catch(e){console.error(e)}},rm=function(e=rv.page){rv.search.page=e;let t=(e-1)*rv.search.resultsPerPage,r=e*rv.search.resultsPerPage;return rv.search.results.slice(t,r)},r_=function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e};class rb{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._clear();let t=this._generateMarkup();this._parentEl.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentEl.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{console.log(e.name,e.value),r.setAttribute(e.name,e.value)})})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let e=`
    <div class="spinner">
      <svg>
        <use href="${y(rl)}#icon-loader"></use>
      </svg>
			
    </div>
  `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
		<div class="error">
			<div>
				<svg>
				<use href="${y(rl)}#icon-alert-triangle"></use>
				</svg>
			</div>
			<p>${e}</p>
		</div>
		`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
			<div class="message">
				<div>
					<svg>
						<use href="${y(rl)}#icon-smile"></use>
					</svg>
				</div>
				<p>${e}</p>
			</div>
		`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}class rw extends rb{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another operations__content--active";_message;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${y(rl)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${y(rl)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${y(rl)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${y(rl)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${y(rl)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${y(rl)}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${y(rl)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateIngredient(e){return`
			<li class="recipe__ingredient">
				<svg class="recipe__icon">
					<use href="${y(rl)}#icon-check"></use>
				</svg>
				<div class="recipe__quantity">${e.quantity?rd(e.quantity).toString():""}</div>
				<div class="recipe__description">
					<span class="recipe__unit">${e.unit}</span>
					${e.description}
				</div>
			</li>
	`}}var rE=new rw;class rS{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rj=new rS;class rO extends rb{_parentEl=document.querySelector(".results");_errorMessage="No Recipe for your query. Try other one!";_message;_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
			<li class="preview">
				<a class="preview__link" href="#${e.id}">
					<figure class="preview__fig">
						<img src="${e.image}" alt="${e.title}" />
					</figure>
					<div class="preview__data">
						<h4 class="preview__title">${e.title}</h4>
						<p class="preview__publisher">${e.publisher}</p>
						<div class="preview__user-generated">
							<svg>
								<use href="${y(rl)}#icon-user"></use>
							</svg>
						</div>
					</div>
				</a>
			</li>
			
		`}}var rP=new rO;class rL extends rb{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?this._generateNextButton():this._data.page===e?this._generatePrevButton():this._data.page<e?this._generatePrevButton()+this._generateNextButton():""}_generatePrevButton(){return`
			<button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
					<use href="${y(rl)}#icon-arrow-left"></use>
				</svg>
				<span>Page ${this._data.page-1}</span>
			</button>
	`}_generateNextButton(){return`
			<button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
				<span>Page ${this._data.page+1}</span>
				<svg class="search__icon">
					<use href="${y(rl)}#icon-arrow-right"></use>
				</svg>
			</button>
		`}}var r$=new rL;document.querySelector(".recipe");const rk=async function(){try{rE.renderSpinner();let e=window.location.hash.slice(1);if(!e)return;rP.update(rm()),await rg(e),rE.render(rv.recipe)}catch(e){rE.renderError()}},rx=async function(){try{rP.renderSpinner();let e=rj.getQuery();if(!e)return;await ry(e),rP.render(rm(1)),r$.render(rv.search)}catch(e){console.error(e)}};rE.addHandlerRender(rk),rE.addHandlerUpdateServings(function(e){r_(e),rE.update(rv.recipe)}),rj.addHandlerSearch(rx),r$.addHandlerClick(function(e){rP.render(rm(e)),r$.render(rv.search)});
//# sourceMappingURL=index.79859e86.js.map
