var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;E=S?j.bind(j):function(){return j.apply(j,arguments)};var O={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!O.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:O;var $={};$=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},M={},T=Function.prototype,q=T.call,I=S&&T.bind.bind(q,q),H={},N=(M=S?I:function(e){return function(){return q.apply(e,arguments)}})({}.toString),F=M("".slice);H=function(e){return F(N(e),8,-1)};var A=Object,C=M("".split);x=k(function(){return!A("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?C(e,""):A(e)}:A;var R={},B={};B=function(e){return null==e};var W=TypeError;R=function(e){if(B(e))throw new W("Can't call method on "+e);return e},P=function(e){return x(R(e))};var D={},G={},U={},z={},J="object"==typeof document&&document.all;z=void 0===J&&void 0!==J?function(e){return"function"==typeof e||e===J}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:z(e)};var Y={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],z(r)?r:void 0):b[e]&&b[e][t]};var V={};V=M({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return z(t)&&V(t.prototype,ea(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(z(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return B(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!U(n=E(r,e))||z(r=e.valueOf)&&!U(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!U(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||ey(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.36.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(R(e))};var eS=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var ej={},eO=0,eL=Math.random(),e$=M(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+e$(++eO+eL,36)};var eP=b.Symbol,ex=eh("wks"),eM=K?eP.for||eP:eP&&eP.withoutSetter||ej,eT=TypeError,eq=(ew(ex,e="toPrimitive")||(ex[e]=X&&ew(eP,e)?eP[e]:eM("Symbol."+e)),ex[e]);G=function(e,t){if(!U(e)||Y(e))return e;var r,n=es(e,eq);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!U(r)||Y(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},D=function(e){var t=G(e,"string");return Y(t)?t:t+""};var eI={},eH={},eN=b.document,eF=U(eN)&&U(eN.createElement);eH=function(e){return eF?eN.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eH("div"),"a",{get:function(){return 7}}).a});var eA=Object.getOwnPropertyDescriptor;r=w?eA:function(e,t){if(e=P(e),t=D(t),eI)try{return eA(e,t)}catch(e){}if(ew(e,t))return $(!E(n,e,t),e[t])};var eC={},eR={};eR=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eW=String,eD=TypeError;eB=function(e){if(U(e))return e;throw new eD(eW(e)+" is not an object")};var eG=TypeError,eU=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eJ="enumerable",eY="configurable",eQ="writable";a=w?eR?function(e,t,r){if(eB(e),t=D(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=ez(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eU(e,t,r)}:eU:function(e,t,r){if(eB(e),t=D(t),eB(r),eI)try{return eU(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return a(e,t,$(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e2=M(Function.toString);z(eg.inspectSource)||(eg.inspectSource=function(e){return e2(e)}),e1=eg.inspectSource;var e4={},e3={},e7=b.WeakMap;e3=z(e7)&&/native code/.test(String(e7));var e8={},e9=eh("keys");e8=function(e){return e9[e]||(e9[e]=ej(e))};var e5={};e5={};var e6="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e3||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e8("state");e5[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eC(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e4={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e4.get,ta=String,ts=Object.defineProperty,tc=M("".slice),tu=M("".replace),tl=M([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tf=eK=function(e,t,r){"Symbol("===tc(ta(t),0,7)&&(t="["+tu(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return z(this)&&to(this).source||e1(this)},"toString"),eV=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(z(r)&&eK(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},ty={},tm={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;ty=function(e,t){var r=tm(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},tj={},tO=Math.min;tj=function(e){var t=tm(e);return t>0?tO(t,9007199254740991):0},tS=function(e){return tj(e.length)};var tL=function(e){return function(t,r,n){var i,o=P(t),a=tS(o);if(0===a)return!e&&-1;var s=ty(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},t$={includes:tL(!0),indexOf:tL(!1)}.indexOf,tP=M([].push);tv=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tP(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~t$(o,r)||tP(o,r));return o};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tx)},d=Object.getOwnPropertySymbols;var tM=M([].concat);tg=Q("Reflect","ownKeys")||function(e){var t=l(eB(e));return d?tM(t,d(e)):t},th=function(e,t,n){for(var i=tg(t),o=0;o<i.length;o++){var s=i[o];ew(e,s)||n&&ew(n,s)||a(e,s,r(t,s))}};var tT={},tq=/#|\.prototype\./,tI=function(e,t){var r=tN[tH(e)];return r===tA||r!==tF&&(z(t)?k(t):!!t)},tH=tI.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tN=tI.data={},tF=tI.NATIVE="N",tA=tI.POLYFILL="P";tT=tI,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;th(a,o)}(e.sham||o&&o.sham)&&eC(a,"sham",!0),eV(n,i,a,e)}};var tC={},tR={},tB=Function.prototype,tW=tB.apply,tD=tB.call;tR="object"==typeof Reflect&&Reflect.apply||(S?tD.bind(tW):function(){return tD.apply(tW,arguments)});var tG={},tU={},tz=(tU=function(e){if("Function"===H(e))return M(e)})(tU.bind);tG=function(e,t){return ec(e),void 0===t?e:S?tz(e,t):function(){return e.apply(t,arguments)}};var tJ={};tJ=Q("document","documentElement");var tY={};tY=M([].slice);var tQ={},tV=TypeError;tQ=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===H(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t2=b.Dispatch,t4=b.Function,t3=b.MessageChannel,t7=b.String,t8=0,t9={},t5="onreadystatechange";k(function(){p=b.location});var t6=function(e){if(ew(t9,e)){var t=t9[e];delete t9[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){b.postMessage(t7(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tQ(arguments.length,1);var t=z(e)?e:t4(e),r=tY(arguments,1);return t9[++t8]=function(){tR(t,void 0,r)},f(t8),t8},t0=function(e){delete t9[e]},tX?f=function(e){t1.nextTick(re(e))}:t2&&t2.now?f=function(e){t2.now(re(e))}:t3&&!tK?(g=(h=new t3).port2,h.port1.onmessage=rt,f=tG(g.postMessage,g)):b.addEventListener&&z(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(rr)?(f=rr,b.addEventListener("message",rt,!1)):f=t5 in eH("script")?function(e){tJ.appendChild(eH("script"))[t5]=function(){tJ.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tC={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tC.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rc?function(n,i){var o=tQ(arguments.length,1)>r,a=z(n)?n:rs(n),s=o?tY(arguments,r):[],c=o?function(){tR(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ro(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl={};rl=new URL("icons.c14567a0.svg",import.meta.url).toString();var rd=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new L(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rd}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rd:Function("r","regeneratorRuntime = r")(rd)}const rp="https://forkify-api.herokuapp.com/api/v2/recipes",rf=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rh=async function(e){try{let t=await Promise.race([fetch(e),rf(5)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rg=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rf(5)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rv=function(e){if(parseFloat(e)===parseInt(e))return e;let t=function(e,r){return r<1e-7?e:t(r,Math.floor(e%r))},r=Math.pow(10,e.toString().length-2),n=e*r;var i=t(n,r);let o=0;return(n/=i)>(r/=i)&&(o=Math.floor(n/r),n-=o*r),e=Math.floor(n)+"/"+Math.floor(r),o&&(e=o+" "+e),e},ry={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rm=function(e){let{recipe:t}=e;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients}},rb=async function(e){try{let{data:t}=await rh(`${rp}/${e}`);ry.recipe=rm(t),ry.bookmarks.some(t=>t.id===e)?ry.recipe.bookmarked=!0:ry.recipe.bookmarked=!1}catch(e){throw e}},r_=async function(e){try{ry.search.query=e;let{data:t}=await rh(`${rp}?search=${e}`);ry.search.results=t.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),ry.search.page=1}catch(e){console.error(e)}},rw=function(e=ry.page){ry.search.page=e;let t=(e-1)*ry.search.resultsPerPage,r=e*ry.search.resultsPerPage;return ry.search.results.slice(t,r)},rk=function(e){ry.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/ry.recipe.servings}),ry.recipe.servings=e},rE=function(e){localStorage.setItem("bookmarks",JSON.stringify(ry.bookmarks))},rS=function(e){ry.bookmarks.push(e),e.id===ry.recipe.id&&(ry.recipe.bookmarked=!0),rE()},rj=function(e){let t=ry.bookmarks.findIndex(t=>t.id===e);ry.bookmarks.splice(t,1),e===ry.recipe.id&&(ry.recipe.bookmarked=!1)};!function(){let e=localStorage.getItem("bookmarks");e&&(ry.bookmarks=JSON.parse(e))}();const rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format! Please correct it");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t,...r.key&&{key:r.key}},n=await rg(`${rp}?key=28e45b7c-234f-4704-bd5f-db0b30cb0a1a`,r);ry.recipe=rm(n),rS(ry.recipe),console.log(n)}catch(e){throw e}};class rL{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentEl.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let e=`
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
		`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}class r$ extends rL{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another operations__content--active";_message;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
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
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${y(rl)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
				<div class="recipe__quantity">${e.quantity?rv(e.quantity).toString():""}</div>
				<div class="recipe__description">
					<span class="recipe__unit">${e.unit}</span>
					${e.description}
				</div>
			</li>
	`}}var rP=new r$;class rx{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rM=new rx,rT=new class extends rL{_parentEl="";_generateMarkup(){let e=window.location.hash.slice(1);return`
			<li class="preview">
				<a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
					<figure class="preview__fig">
						<img src="${this._data.image}" alt="${this._data.title}" />
					</figure>
					<div class="preview__data">
						<h4 class="preview__title">${this._data.title}</h4>
						<p class="preview__publisher">${this._data.publisher}</p>
						<div class="preview__user-generated">
							<svg>
								<use href="${y(rl)}#icon-user"></use>
							</svg>
						</div>
					</div>
				</a>
			</li>
		`}};class rq extends rL{_parentEl=document.querySelector(".results");_errorMessage="No Recipe for your query. Try other one!";_message;_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rI=new rq;class rH extends rL{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?this._generateNextButton():this._data.page===e?this._generatePrevButton():this._data.page<e?this._generatePrevButton()+this._generateNextButton():""}_generatePrevButton(){return`
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
		`}}var rN=new rH;class rF extends rL{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No bookmark saved yet!";_message;addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rA=new rF;class rC extends rL{_parentEl=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this.addHandlerShowWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this)),this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rR=new rC;document.querySelector(".recipe");const rB=async function(){try{rP.renderSpinner();let e=window.location.hash.slice(1);if(!e)return;rI.update(rw()),await rb(e),rP.render(ry.recipe),rA.update(ry.bookmarks)}catch(e){rP.renderError()}},rW=async function(){try{rI.renderSpinner();let e=rM.getQuery();if(!e)return;await r_(e),rI.render(rw(1)),rN.render(ry.search)}catch(e){console.error(e)}},rD=async function(e){try{rR.renderSpinner(),await rO(e),rP.render(ry.recipe),rR.renderMessage(),setTimeout(function(){rR.toggleWindow()})}catch(e){rR.renderError(e.message)}};rA.addHandlerRender(function(){rA.render(ry.bookmarks)}),rP.addHandlerRender(rB),rP.addHandlerUpdateServings(function(e){rk(e),rP.update(ry.recipe)}),rP.addHandlerAddBookmark(function(){ry.recipe.bookmarked?rj(ry.recipe.id):rS(ry.recipe),rP.update(ry.recipe),rA.render(ry.bookmarks)}),rM.addHandlerSearch(rW),rN.addHandlerClick(function(e){rI.render(rw(e)),rN.render(ry.search)}),rR.addHandlerUpload(rD);
//# sourceMappingURL=index.0edb9e33.js.map
