!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));(0,r.render)((0,r.h)(o.default,null),document.body),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js")},function(e,t,n){!function(){"use strict";function t(e,t){var n,r,o,a,i=k;for(a=arguments.length;a-- >2;)O.push(arguments[a]);for(t&&null!=t.children&&(O.length||O.push(t.children),delete t.children);O.length;)if((r=O.pop())&&void 0!==r.pop)for(a=r.length;a--;)O.push(r[a]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?i[i.length-1]+=r:i===k?i=[r]:i.push(r),n=o;var u=new function(){};return u.nodeName=e,u.children=i,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==$.vnode&&$.vnode(u),u}function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e){!e.__d&&(e.__d=!0)&&1==j.push(e)&&($.debounceRendering||M)(o)}function o(){var e,t=j;for(j=[];e=t.pop();)e.__d&&m(e)}function a(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&i(e,t.nodeName):n||e._componentConstructor===t.nodeName}function i(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=n({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===S.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,l,i):e.removeEventListener(t,l,i),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var u=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function l(e){return this.__l[e.type]($.event&&$.event(e)||e)}function f(){for(var e;e=C.pop();)$.afterMount&&$.afterMount(e),e.componentDidMount&&e.componentDidMount()}function d(e,t,n,r,o,a){x++||(D=null!=o&&void 0!==o.ownerSVGElement,P=null!=e&&!("__preactattr_"in e));var i=p(e,t,n,r,a);return o&&i.parentNode!==o&&o.appendChild(i),--x||(P=!1,a||f()),i}function p(e,t,n,r,o){var l=e,f=D;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(l=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(l,e),h(e,!0))),l.__preactattr_=!0,l;var d=t.nodeName;if("function"==typeof d)return function(e,t,n,r){var o=e&&e._component,a=o,i=e,c=o&&e._componentConstructor===t.nodeName,s=c,l=u(t);for(;o&&!s&&(o=o.__u);)s=o.constructor===t.nodeName;o&&s&&(!r||o._component)?(b(o,l,3,n,r),e=o.base):(a&&!c&&(g(a),e=i=null),o=_(t.nodeName,l,n),e&&!o.__b&&(o.__b=e,i=null),b(o,l,1,n,r),e=o.base,i&&e!==i&&(i._component=null,h(i,!1)));return e}(e,t,n,r);if(D="svg"===d||"foreignObject"!==d&&D,d=String(d),(!e||!i(e,d))&&(l=function(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}(d,D),e)){for(;e.firstChild;)l.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(l,e),h(e,!0)}var v=l.firstChild,y=l.__preactattr_,m=t.children;if(null==y){y=l.__preactattr_={};for(var w=l.attributes,$=w.length;$--;)y[w[$].name]=w[$].value}return!P&&m&&1===m.length&&"string"==typeof m[0]&&null!=v&&void 0!==v.splitText&&null==v.nextSibling?v.nodeValue!=m[0]&&(v.nodeValue=m[0]):(m&&m.length||null!=v)&&function(e,t,n,r,o){var i,u,s,l,f,d=e.childNodes,v=[],_={},y=0,b=0,m=d.length,g=0,w=t?t.length:0;if(0!==m)for(var $=0;$<m;$++){var O=d[$],k=O.__preactattr_,M=w&&k?O._component?O._component.__k:k.key:null;null!=M?(y++,_[M]=O):(k||(void 0!==O.splitText?!o||O.nodeValue.trim():o))&&(v[g++]=O)}if(0!==w)for(var $=0;$<w;$++){l=t[$],f=null;var M=l.key;if(null!=M)y&&void 0!==_[M]&&(f=_[M],_[M]=void 0,y--);else if(!f&&b<g)for(i=b;i<g;i++)if(void 0!==v[i]&&a(u=v[i],l,o)){f=u,v[i]=void 0,i===g-1&&g--,i===b&&b++;break}f=p(f,l,n,r),s=d[$],f&&f!==e&&f!==s&&(null==s?e.appendChild(f):f===s.nextSibling?c(s):e.insertBefore(f,s))}if(y)for(var $ in _)void 0!==_[$]&&h(_[$],!1);for(;b<=g;)void 0!==(f=v[g--])&&h(f,!1)}(l,m,n,r,P||null!=y.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||s(e,r,n[r],n[r]=void 0,D);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||s(e,r,n[r],n[r]=t[r],D)}(l,t.attributes,y),D=f,l}function h(e,t){var n=e._component;n?g(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||c(e),v(e))}function v(e){for(e=e.lastChild;e;){var t=e.previousSibling;h(e,!0),e=t}}function _(e,t,n){var r,o=N[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),w.call(r,t,n)):((r=new w(t,n)).constructor=e,r.render=y),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.__b=o[a].__b,o.splice(a,1);break}return r}function y(e,t,n){return this.constructor(e,n)}function b(e,t,n,o,a){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===$.syncComponentUpdates&&e.base?r(e):m(e,1,a)),e.__r&&e.__r(e))}function m(e,t,r,o){if(!e.__x){var a,i,c,s=e.props,l=e.state,p=e.context,v=e.__p||s,y=e.__s||l,w=e.__c||p,O=e.base,k=e.__b,M=O||k,S=e._component,j=!1;if(O&&(e.props=v,e.state=y,e.context=w,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,l,p)?j=!0:e.componentWillUpdate&&e.componentWillUpdate(s,l,p),e.props=s,e.state=l,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!j){a=e.render(s,l,p),e.getChildContext&&(p=n(n({},p),e.getChildContext()));var D,P,N=a&&a.nodeName;if("function"==typeof N){var H=u(a);(i=S)&&i.constructor===N&&H.key==i.__k?b(i,H,1,p,!1):(D=i,e._component=i=_(N,H,p),i.__b=i.__b||k,i.__u=e,b(i,H,0,p,!1),m(i,1,r,!0)),P=i.base}else c=M,(D=S)&&(c=e._component=null),(M||1===t)&&(c&&(c._component=null),P=d(c,a,p,r||!O,M&&M.parentNode,!0));if(M&&P!==M&&i!==S){var E=M.parentNode;E&&P!==E&&(E.replaceChild(P,M),D||(M._component=null,h(M,!1)))}if(D&&g(D),e.base=P,P&&!o){for(var T=e,I=e;I=I.__u;)(T=I).base=P;P._component=T,P._componentConstructor=T.constructor}}if(!O||r?C.unshift(e):j||(e.componentDidUpdate&&e.componentDidUpdate(v,y,w),$.afterUpdate&&$.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);x||o||f()}}function g(e){$.beforeUnmount&&$.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?g(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,c(t),function(e){var t=e.constructor.name;(N[t]||(N[t]=[])).push(e)}(e),v(t)),e.__r&&e.__r(null)}function w(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}var $={},O=[],k=[],M="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,S=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,j=[],C=[],x=0,D=!1,P=!1,N={};n(w.prototype,{setState:function(e,t){var o=this.state;this.__s||(this.__s=n({},o)),n(o,"function"==typeof e?e(o,this.props):e),t&&(this.__h=this.__h||[]).push(t),r(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),m(this,2)},render:function(){}});var H={h:t,createElement:t,cloneElement:function(e,r){return t(e.nodeName,n(n({},e.attributes),r),arguments.length>2?[].slice.call(arguments,2):e.children)},Component:w,render:function(e,t,n){return d(n,e,{},!1,t,!1)},rerender:o,options:$};e.exports=H}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=f(n(3)),i=f(n(6)),u=f(n(9)),c=f(n(11)),s=f(n(12)),l=f(n(14));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state=c.default,d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentWillMount",value:function(){(0,l.default)(this,s.default)}},{key:"render",value:function(e,t){var n="leads"===t.view?t.leads:t.clients;return(0,o.h)("div",null,(0,o.h)("div",{class:t.modal?"blur":""},(0,o.h)(a.default,{view:t.view}),(0,o.h)("main",{class:"slide-up"},(0,o.h)(i.default,{contacts:n,view:t.view}))),t.modal&&(0,o.h)(u.default,{view:t.view,modal:t.modal,pendingDeleteId:t.pendingDeleteId}))}}]),t}();t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=u(n(4)),i=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(e){var t=e.view;return(0,o.h)("header",{class:"elevated"},(0,o.h)("span",{class:"nav-set"},(0,o.h)("h3",{class:"leads"===t?"grow active":"grow",onclick:(0,i.default)("linkstate",{key:"view",val:"leads"})},"Leads")),(0,o.h)("span",{class:"nav-set"},(0,o.h)("h3",{class:"clients"===t?"grow active":"grow",onclick:(0,i.default)("linkstate",{key:"view",val:"clients"})},"Clients")),(0,o.h)("span",{class:"button button--fab add-entry elevated grow",onclick:(0,i.default)("linkstate",{key:"modal",val:"add"})},(0,o.h)("a",null,(0,o.h)(a.default,{icon:"clear",key:"header-add"}))))}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"getSVG",value:function(e){switch(e){case"back":return(0,a.h)("g",null,(0,a.h)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,a.h)("path",{d:"M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"}));case"clear":return(0,a.h)("g",null,(0,a.h)("path",{d:"M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"}),(0,a.h)("path",{d:"M0 0h24v24H0z",fill:"none"}));case"delete":return(0,a.h)("g",null,(0,a.h)("path",{d:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),(0,a.h)("path",{d:"M0 0h24v24H0z",fill:"none"}))}}},{key:"render",value:function(e){return(0,a.h)("svg",r({xmlns:"http://www.w3.org/2000/svg"},e),this.getSVG(e.icon))}}]),t}();t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return function(n){var r=new CustomEvent(e,{detail:[t,n]});document.dispatchEvent(r)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n(7));var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(e){var t=e.contacts,n=e.view;return t.length?(0,o.h)("div",null,t.map(function(e){return(0,o.h)(a.default,e)})):(0,o.h)("div",{class:"center-text"},(0,o.h)("h2",{class:"no-data"},"No "+n+" yet."),(0,o.h)("h2",null,"Let's get started!"))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=c(n(8)),i=c(n(4)),u=c(n(5));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a.default.extend(dayjs_plugin_relativeTime);var l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleUpdateContact=function(e){(0,u.default)("updateContact",{id:r.props.id,date:Date.now(),isNew:!1})()},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(e){var t=e.id,n=e.type,r=e.name,c=e.date,s=e.color,l=e.isNew?"Never":(0,a.default)().to((0,a.default)(c));return(0,o.h)("div",{class:"contact-wrapper",key:t},(0,o.h)("div",{class:"contact",style:"background-color:"+s,onclick:this.handleUpdateContact},(0,o.h)("h3",null,r),(0,o.h)("span",null,l)),(0,o.h)("span",{class:"contact--controls"},(0,o.h)(i.default,{icon:"delete",onclick:(0,u.default)("requestRemoveContact",{id:t})}),(0,o.h)(i.default,{icon:"back",class:"lead"===n?"rotate-180":"",onclick:(0,u.default)("updateContact",{id:t,type:"lead"===n?"client":"lead"})})))}}]),t}();t.default=l},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",o="day",a="week",i="month",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,s=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},d={padStart:f,padZoneStr:function(e){var t=Math.abs(e),n=Math.floor(t/60),r=t%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},monthDiff:function(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(n,"months"),o=t-r<0,a=e.clone().add(n+(o?-1:1),"months");return Number(-(n+(t-r)/(o?r-a:a-r)))},absFloor:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},prettyUnit:function(c){return{M:i,y:u,w:a,d:o,h:r,m:n,s:t,ms:e}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(e){return void 0===e}},p="en",h={};h[p]=l;var v=function(e){return e instanceof g},_=function(e,t,n){var r;if(!e)return null;if("string"==typeof e)h[e]&&(r=e),t&&(h[e]=t,r=e);else{var o=e.name;h[o]=e,r=o}return n||(p=r),r},y=function(e,t){if(v(e))return e.clone();var n=t||{};return n.date=e,new g(n)},b=function(e,t){return y(e,{locale:t.$L})},m=d;m.parseLocale=_,m.isDayjs=v,m.wrapper=b;var g=function(){function l(e){this.parse(e)}var f=l.prototype;return f.parse=function(e){var t,n;this.$d=null===(t=e.date)?new Date(NaN):m.isUndefined(t)?new Date:t instanceof Date?t:"string"==typeof t&&/.*[^Z]$/i.test(t)&&(n=t.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(t),this.init(e)},f.init=function(e){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||_(e.locale,null,!0)||p},f.$utils=function(){return m},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.$compare=function(e){return this.valueOf()-y(e).valueOf()},f.isSame=function(e){return 0===this.$compare(e)},f.isBefore=function(e){return this.$compare(e)<0},f.isAfter=function(e){return this.$compare(e)>0},f.year=function(){return this.$y},f.month=function(){return this.$M},f.day=function(){return this.$W},f.date=function(){return this.$D},f.hour=function(){return this.$H},f.minute=function(){return this.$m},f.second=function(){return this.$s},f.millisecond=function(){return this.$ms},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,c){var s=this,l=!!m.isUndefined(c)||c,f=function(e,t){var n=b(new Date(s.$y,t,e),s);return l?n:n.endOf(o)},d=function(e,t){return b(s.toDate()[e].apply(s.toDate(),l?[0,0,0,0].slice(t):[23,59,59,999].slice(t)),s)};switch(m.prettyUnit(e)){case u:return l?f(1,0):f(31,11);case i:return l?f(1,this.$M):f(0,this.$M+1);case a:return f(l?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case o:case"date":return d("setHours",0);case r:return d("setMinutes",1);case n:return d("setSeconds",2);case t:return d("setMilliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(o,a){switch(m.prettyUnit(o)){case"date":this.$d.setDate(a);break;case i:this.$d.setMonth(a);break;case u:this.$d.setFullYear(a);break;case r:this.$d.setHours(a);break;case n:this.$d.setMinutes(a);break;case t:this.$d.setSeconds(a);break;case e:this.$d.setMilliseconds(a)}return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.add=function(e,c){var s=this;e=Number(e);var l,f=m.prettyUnit(c),d=function(t,n){var r=s.set("date",1).set(t,n+e);return r.set("date",Math.min(s.$D,r.daysInMonth()))};if(f===i)return d(i,this.$M);if(f===u)return d(u,this.$y);switch(f){case n:l=6e4;break;case r:l=36e5;break;case o:l=864e5;break;case a:l=6048e5;break;case t:l=1e3;break;default:l=1}var p=this.valueOf()+e*l;return b(p,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=e||"YYYY-MM-DDTHH:mm:ssZ",r=m.padZoneStr(this.$d.getTimezoneOffset()),o=this.$locale(),a=o.weekdays,i=o.months,u=function(e,t,n,r){return e&&e[t]||n[t].substr(0,r)};return n.replace(s,function(e){if(e.indexOf("[")>-1)return e.replace(/\[|\]/g,"");switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return String(t.$y);case"M":return String(t.$M+1);case"MM":return m.padStart(t.$M+1,2,"0");case"MMM":return u(o.monthsShort,t.$M,i,3);case"MMMM":return i[t.$M];case"D":return String(t.$D);case"DD":return m.padStart(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(o.weekdaysMin,t.$W,a,2);case"ddd":return u(o.weekdaysShort,t.$W,a,3);case"dddd":return a[t.$W];case"H":return String(t.$H);case"HH":return m.padStart(t.$H,2,"0");case"h":case"hh":return 0===t.$H?12:m.padStart(t.$H<13?t.$H:t.$H-12,"hh"===e?2:1,"0");case"a":return t.$H<12?"am":"pm";case"A":return t.$H<12?"AM":"PM";case"m":return String(t.$m);case"mm":return m.padStart(t.$m,2,"0");case"s":return String(t.$s);case"ss":return m.padStart(t.$s,2,"0");case"SSS":return m.padStart(t.$ms,3,"0");case"Z":return r;default:return r.replace(":","")}})},f.diff=function(e,c,s){var l=m.prettyUnit(c),f=y(e),d=this-f,p=m.monthDiff(this,f);switch(l){case u:p/=12;break;case i:break;case"quarter":p/=3;break;case a:p=d/6048e5;break;case o:p=d/864e5;break;case r:p=d/36e5;break;case n:p=d/6e4;break;case t:p=d/1e3;break;default:p=d}return s?p:m.absFloor(p)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return h[this.$L]},f.locale=function(e,t){var n=this.clone();return n.$L=_(e,t,!0),n},f.clone=function(){return b(this.toDate(),this)},f.toDate=function(){return new Date(this.$d)},f.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},f.toJSON=function(){return this.toISOString()},f.toISOString=function(){return this.toDate().toISOString()},f.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},f.toString=function(){return this.$d.toUTCString()},l}();return y.extend=function(e,t){return e(t,g,y),y},y.locale=_,y.isDayjs=v,y.en=h[p],y})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=u(n(10)),i=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleSubmit=function(e){e.preventDefault(),(0,i.default)("addContact",{name:r.base.querySelector("#addName").value,view:r.props.view})()},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this.base.querySelector("#addName");e&&e.focus()}},{key:"componentWillUnmount",value:function(){var e=this.base.querySelector("#addName");e&&(e.value="")}},{key:"render",value:function(e){var t=e.view,n=e.modal,r=e.pendingDeleteId,u=void 0;return"add"===n?u=(0,o.h)("form",{onsubmit:this.handleSubmit},(0,o.h)("h2",null,"Add a "+t.slice(0,-1)),(0,o.h)("input",{id:"addName",placeholder:"Name"}),(0,o.h)("input",{type:"submit",value:"Add"})):"remove"===n&&(u=(0,o.h)("div",null,(0,o.h)("h2",null,"Are you sure?"),(0,o.h)("input",{type:"submit",class:"destructive",value:"Delete",onclick:(0,i.default)("removeContact",{id:r})},"Delete "+t.slice(0,-1)))),(0,o.h)(a.default,null,u)}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n(5));function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=Array(o),c=0;c<o;c++)u[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleOverlayClick=function(e){if(r&&r.base&&r.base.querySelector){var t=r.base.querySelector(".dialog");e.target===t||t.contains(e.target)||(0,a.default)("linkstate",{key:"modal",val:!1})()}},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(e){e.view;var t=e.children;return(0,o.h)("div",{class:"modal overlay grow",onclick:this.handleOverlayClick},(0,o.h)("div",{class:"dialog"},t[0]))}}]),t}();t.default=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=localStorage.getItem("view")||"leads",r=JSON.parse(localStorage.getItem("contacts"))||[];t.default={get view(){return n},set view(e){n=e,localStorage.setItem("view",e)},get contacts(){return r},set contacts(e){r=e.sort(function(e,t){return e.date>t.date}),localStorage.setItem("contacts",JSON.stringify(r))},get leads(){return r.filter(function(e){return"lead"===e.type})},get clients(){return r.filter(function(e){return"client"===e.type})},modal:!1,pendingDeleteId:-1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13);var o=31556952e4;t.default={linkstate:function(e,t){var n=t.key,r=t.val,o=t.cb;e.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r),o)},addContact:function(e,t){var n=t.name,a=t.view;if(n&&a){var i=Date.now();e.state.contacts.push({name:n,id:i,isNew:!0,type:a.slice(0,-1),color:(0,r.generateHexCode)(),date:i-o}),e.setState({contacts:[].concat(e.state.contacts),modal:!1})}},requestRemoveContact:function(e,t){var n=t.id;e.setState({pendingDeleteId:n,modal:"remove"})},removeContact:function(e,t){var n=t.id;if("number"==typeof n&&-1!==n){var o=(0,r.findObjectIndexById)(n,e.state.contacts);e.state.contacts=(0,r.removeObjectByIndex)(o,e.state.contacts),e.setState({contacts:[].concat(e.state.contacts),pendingDeleteId:-1,modal:!1})}},updateContact:function(e,t){var n=(0,r.findObjectIndexById)(t.id,e.state.contacts),o=e.state.contacts[n];e.state.contacts[n]=Object.assign(o,t),e.setState({contacts:[].concat(e.state.contacts),modal:!1})}}},function(e,t){"use strict";function n(e){return e.match(/\w\w/g).map(function(e){return parseInt(e,16)})}Object.defineProperty(t,"__esModule",{value:!0}),t.findObjectIndexById=function(e,t){return t.map(function(e){return e.id}).indexOf(e)},t.removeObjectByIndex=function(e,t){return t.splice(e,1),t},t.generateHexCode=function(){for(var e=n("#00b8ff"),t=n("#b4ff00"),r=[],o=0;o<3;o++)r[o]=e[o]+Math.random()*(t[o]-e[o])|0;return"#"+r.map(function(e){return e.toString(16)}).map(function(e){return"00".slice(e.length)+e}).join("")}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){Object.keys(t).forEach(function(n){document.addEventListener(n,function(r){var o=r.detail||[void 0,void 0];t[n](e,o[0],o[1])})})}}]);