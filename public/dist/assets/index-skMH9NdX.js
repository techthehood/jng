const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./templates/MegaOne-D-JnoCSR.js","./vendor-BHFhUFLX.js","./common-BORl6AcL.js","./common-CtBTODiY.css","./templates/MegaOne-Cw9kYnYY.css","./templates/Events-C3w8cwN9.js","./templates/DeferMe-CeohIxAS.js","./templates/DeferMe-BnOAdIN1.css","./templates/ArticleDefer-CtAOWUrY.js","./templates/ArticleDefer-CWlWlahy.css"])))=>i.map(i=>d[i]);
import{e as jQuery,_ as __CJS__import__0__,P as Popper,g as __CJS__import__1__,r as reactExports,f as __vitePreload,j as jsxRuntimeExports,h as React,i as axios,u as useInView,B as BrowserRouter,k as Route}from"./vendor-BHFhUFLX.js";import{s as store,m as main_data,E as Exporter,S as Slide,a as Slider,e as exists,j as july22$1,n as nov21$1,b as july21$1,C as Countdown,P as Promo$1,u as use_root,M as MAIN_PATH,c as EVENTS_PATH,d as MainMenu,f as CONFIRM_PATH,A as ARTICLE_PATH}from"./common-BORl6AcL.js";var module$1={exports:{}},exports$1=module$1.exports;(function(P,s){typeof module$1=="object"&&typeof module$1.exports=="object"?module$1.exports=P.document?s(P,!0):function(R){if(!R.document)throw new Error("jQuery requires a window with a document");return s(R)}:s(P)})(typeof window<"u"?window:void 0,function(P,s){var R=[],T=P.document,q=Object.getPrototypeOf,W=R.slice,_e=R.concat,ae=R.push,$=R.indexOf,ge={},De=ge.toString,ve=ge.hasOwnProperty,wn=ve.toString,Dn=wn.call(Object),X={},z=function(e){return typeof e=="function"&&typeof e.nodeType!="number"},on=function(e){return e!=null&&e===e.window},Qe={type:!0,src:!0,nonce:!0,noModule:!0};function qe(e,n,t){var i,a,u=(t=t||T).createElement("script");if(u.text=e,n)for(i in Qe)(a=n[i]||n.getAttribute&&n.getAttribute(i))&&u.setAttribute(i,a);t.head.appendChild(u).parentNode.removeChild(u)}function ye(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?ge[De.call(e)]||"object":typeof e}var Wn="3.4.1",r=function(e,n){return new r.fn.init(e,n)},Ut=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function fn(e){var n=!!e&&"length"in e&&e.length,t=ye(e);return!z(e)&&!on(e)&&(t==="array"||n===0||typeof n=="number"&&0<n&&n-1 in e)}r.fn=r.prototype={jquery:Wn,constructor:r,length:0,toArray:function(){return W.call(this)},get:function(e){return e==null?W.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var n=r.merge(this.constructor(),e);return n.prevObject=this,n},each:function(e){return r.each(this,e)},map:function(e){return this.pushStack(r.map(this,function(n,t){return e.call(n,t,n)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var n=this.length,t=+e+(e<0?n:0);return this.pushStack(0<=t&&t<n?[this[t]]:[])},end:function(){return this.prevObject||this.constructor()},push:ae,sort:R.sort,splice:R.splice},r.extend=r.fn.extend=function(){var e,n,t,i,a,u,_=arguments[0]||{},d=1,h=arguments.length,m=!1;for(typeof _=="boolean"&&(m=_,_=arguments[d]||{},d++),typeof _=="object"||z(_)||(_={}),d===h&&(_=this,d--);d<h;d++)if((e=arguments[d])!=null)for(n in e)i=e[n],n!=="__proto__"&&_!==i&&(m&&i&&(r.isPlainObject(i)||(a=Array.isArray(i)))?(t=_[n],u=a&&!Array.isArray(t)?[]:a||r.isPlainObject(t)?t:{},a=!1,_[n]=r.extend(m,u,i)):i!==void 0&&(_[n]=i));return _},r.extend({expando:"jQuery"+(Wn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var n,t;return!(!e||De.call(e)!=="[object Object]")&&(!(n=q(e))||typeof(t=ve.call(n,"constructor")&&n.constructor)=="function"&&wn.call(t)===Dn)},isEmptyObject:function(e){var n;for(n in e)return!1;return!0},globalEval:function(e,n){qe(e,{nonce:n&&n.nonce})},each:function(e,n){var t,i=0;if(fn(e))for(t=e.length;i<t&&n.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(n.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return e==null?"":(e+"").replace(Ut,"")},makeArray:function(e,n){var t=n||[];return e!=null&&(fn(Object(e))?r.merge(t,typeof e=="string"?[e]:e):ae.call(t,e)),t},inArray:function(e,n,t){return n==null?-1:$.call(n,e,t)},merge:function(e,n){for(var t=+n.length,i=0,a=e.length;i<t;i++)e[a++]=n[i];return e.length=a,e},grep:function(e,n,t){for(var i=[],a=0,u=e.length,_=!t;a<u;a++)!n(e[a],a)!==_&&i.push(e[a]);return i},map:function(e,n,t){var i,a,u=0,_=[];if(fn(e))for(i=e.length;u<i;u++)(a=n(e[u],u,t))!=null&&_.push(a);else for(u in e)(a=n(e[u],u,t))!=null&&_.push(a);return _e.apply([],_)},guid:1,support:X}),typeof Symbol=="function"&&(r.fn[Symbol.iterator]=R[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,n){ge["[object "+n+"]"]=n.toLowerCase()});var pn=function(e){var n,t,i,a,u,_,d,h,m,C,x,O,j,I,U,S,le,de,Ce,ne="sizzle"+1*new Date,H=e.document,Me=0,J=0,ue=f(),bt=f(),vt=f(),we=f(),un=function(c,p){return c===p&&(x=!0),0},_n={}.hasOwnProperty,ke=[],cn=ke.pop,He=ke.push,ie=ke.push,Ke=ke.slice,Re=function(c,p){for(var g=0,D=c.length;g<D;g++)if(c[g]===p)return g;return-1},tn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",V="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",fe="\\["+V+"*("+ee+")(?:"+V+"*([*^$|!~]?=)"+V+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ee+"))|)"+V+"*\\]",Ae=":("+ee+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+fe+")*)|.*)\\)|)",pe=new RegExp(V+"+","g"),Ne=new RegExp("^"+V+"+|((?:^|[^\\\\])(?:\\\\.)*)"+V+"+$","g"),Zn=new RegExp("^"+V+"*,"+V+"*"),Bn=new RegExp("^"+V+"*([>+~]|"+V+")"+V+"*"),et=new RegExp(V+"|>"),Lt=new RegExp(Ae),Et=new RegExp("^"+ee+"$"),St={ID:new RegExp("^#("+ee+")"),CLASS:new RegExp("^\\.("+ee+")"),TAG:new RegExp("^("+ee+"|[*])"),ATTR:new RegExp("^"+fe),PSEUDO:new RegExp("^"+Ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+V+"*(even|odd|(([+-]|)(\\d*)n|)"+V+"*(?:([+-]|)"+V+"*(\\d+)|))"+V+"*\\)|)","i"),bool:new RegExp("^(?:"+tn+")$","i"),needsContext:new RegExp("^"+V+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+V+"*((?:-\\d)?\\d*)"+V+"*\\)|)(?=[^-]|$)","i")},nt=/HTML$/i,Qi=/^(?:input|select|textarea|button)$/i,Oi=/^h\d$/i,bn=/^[^{]+\{\s*\[native \w/,Pi=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Zt=/[+~]/,dn=new RegExp("\\\\([\\da-f]{1,6}"+V+"?|("+V+")|.)","ig"),vn=function(c,p,g){var D="0x"+p-65536;return D!=D||g?p:D<0?String.fromCharCode(D+65536):String.fromCharCode(D>>10|55296,1023&D|56320)},wt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,E=function(c,p){return p?c==="\0"?"�":c.slice(0,-1)+"\\"+c.charCodeAt(c.length-1).toString(16)+" ":"\\"+c},y=function(){O()},o=tt(function(c){return c.disabled===!0&&c.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ie.apply(ke=Ke.call(H.childNodes),H.childNodes),ke[H.childNodes.length].nodeType}catch{ie={apply:ke.length?function(p,g){He.apply(p,Ke.call(g))}:function(p,g){for(var D=p.length,v=0;p[D++]=g[v++];);p.length=D-1}}}function l(c,p,g,D){var v,M,k,A,L,G,F,Q=p&&p.ownerDocument,Z=p?p.nodeType:9;if(g=g||[],typeof c!="string"||!c||Z!==1&&Z!==9&&Z!==11)return g;if(!D&&((p?p.ownerDocument||p:H)!==j&&O(p),p=p||j,U)){if(Z!==11&&(L=Pi.exec(c)))if(v=L[1]){if(Z===9){if(!(k=p.getElementById(v)))return g;if(k.id===v)return g.push(k),g}else if(Q&&(k=Q.getElementById(v))&&Ce(p,k)&&k.id===v)return g.push(k),g}else{if(L[2])return ie.apply(g,p.getElementsByTagName(c)),g;if((v=L[3])&&t.getElementsByClassName&&p.getElementsByClassName)return ie.apply(g,p.getElementsByClassName(v)),g}if(t.qsa&&!we[c+" "]&&(!S||!S.test(c))&&(Z!==1||p.nodeName.toLowerCase()!=="object")){if(F=c,Q=p,Z===1&&et.test(c)){for((A=p.getAttribute("id"))?A=A.replace(wt,E):p.setAttribute("id",A=ne),M=(G=_(c)).length;M--;)G[M]="#"+A+" "+Un(G[M]);F=G.join(","),Q=Zt.test(c)&&Le(p.parentNode)||p}try{return ie.apply(g,Q.querySelectorAll(F)),g}catch{we(c,!0)}finally{A===ne&&p.removeAttribute("id")}}}return h(c.replace(Ne,"$1"),p,g,D)}function f(){var c=[];return function p(g,D){return c.push(g+" ")>i.cacheLength&&delete p[c.shift()],p[g+" "]=D}}function b(c){return c[ne]=!0,c}function w(c){var p=j.createElement("fieldset");try{return!!c(p)}catch{return!1}finally{p.parentNode&&p.parentNode.removeChild(p),p=null}}function B(c,p){for(var g=c.split("|"),D=g.length;D--;)i.attrHandle[g[D]]=p}function K(c,p){var g=p&&c,D=g&&c.nodeType===1&&p.nodeType===1&&c.sourceIndex-p.sourceIndex;if(D)return D;if(g){for(;g=g.nextSibling;)if(g===p)return-1}return c?1:-1}function oe(c){return function(p){return p.nodeName.toLowerCase()==="input"&&p.type===c}}function te(c){return function(p){var g=p.nodeName.toLowerCase();return(g==="input"||g==="button")&&p.type===c}}function $e(c){return function(p){return"form"in p?p.parentNode&&p.disabled===!1?"label"in p?"label"in p.parentNode?p.parentNode.disabled===c:p.disabled===c:p.isDisabled===c||p.isDisabled!==!c&&o(p)===c:p.disabled===c:"label"in p&&p.disabled===c}}function Ie(c){return b(function(p){return p=+p,b(function(g,D){for(var v,M=c([],g.length,p),k=M.length;k--;)g[v=M[k]]&&(g[v]=!(D[v]=g[v]))})})}function Le(c){return c&&typeof c.getElementsByTagName<"u"&&c}for(n in t=l.support={},u=l.isXML=function(c){var p=c.namespaceURI,g=(c.ownerDocument||c).documentElement;return!nt.test(p||g&&g.nodeName||"HTML")},O=l.setDocument=function(c){var p,g,D=c?c.ownerDocument||c:H;return D!==j&&D.nodeType===9&&D.documentElement&&(I=(j=D).documentElement,U=!u(j),H!==j&&(g=j.defaultView)&&g.top!==g&&(g.addEventListener?g.addEventListener("unload",y,!1):g.attachEvent&&g.attachEvent("onunload",y)),t.attributes=w(function(v){return v.className="i",!v.getAttribute("className")}),t.getElementsByTagName=w(function(v){return v.appendChild(j.createComment("")),!v.getElementsByTagName("*").length}),t.getElementsByClassName=bn.test(j.getElementsByClassName),t.getById=w(function(v){return I.appendChild(v).id=ne,!j.getElementsByName||!j.getElementsByName(ne).length}),t.getById?(i.filter.ID=function(v){var M=v.replace(dn,vn);return function(k){return k.getAttribute("id")===M}},i.find.ID=function(v,M){if(typeof M.getElementById<"u"&&U){var k=M.getElementById(v);return k?[k]:[]}}):(i.filter.ID=function(v){var M=v.replace(dn,vn);return function(k){var A=typeof k.getAttributeNode<"u"&&k.getAttributeNode("id");return A&&A.value===M}},i.find.ID=function(v,M){if(typeof M.getElementById<"u"&&U){var k,A,L,G=M.getElementById(v);if(G){if((k=G.getAttributeNode("id"))&&k.value===v)return[G];for(L=M.getElementsByName(v),A=0;G=L[A++];)if((k=G.getAttributeNode("id"))&&k.value===v)return[G]}return[]}}),i.find.TAG=t.getElementsByTagName?function(v,M){return typeof M.getElementsByTagName<"u"?M.getElementsByTagName(v):t.qsa?M.querySelectorAll(v):void 0}:function(v,M){var k,A=[],L=0,G=M.getElementsByTagName(v);if(v==="*"){for(;k=G[L++];)k.nodeType===1&&A.push(k);return A}return G},i.find.CLASS=t.getElementsByClassName&&function(v,M){if(typeof M.getElementsByClassName<"u"&&U)return M.getElementsByClassName(v)},le=[],S=[],(t.qsa=bn.test(j.querySelectorAll))&&(w(function(v){I.appendChild(v).innerHTML="<a id='"+ne+"'></a><select id='"+ne+"-\r\\' msallowcapture=''><option selected=''></option></select>",v.querySelectorAll("[msallowcapture^='']").length&&S.push("[*^$]="+V+`*(?:''|"")`),v.querySelectorAll("[selected]").length||S.push("\\["+V+"*(?:value|"+tn+")"),v.querySelectorAll("[id~="+ne+"-]").length||S.push("~="),v.querySelectorAll(":checked").length||S.push(":checked"),v.querySelectorAll("a#"+ne+"+*").length||S.push(".#.+[+~]")}),w(function(v){v.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var M=j.createElement("input");M.setAttribute("type","hidden"),v.appendChild(M).setAttribute("name","D"),v.querySelectorAll("[name=d]").length&&S.push("name"+V+"*[*^$|!~]?="),v.querySelectorAll(":enabled").length!==2&&S.push(":enabled",":disabled"),I.appendChild(v).disabled=!0,v.querySelectorAll(":disabled").length!==2&&S.push(":enabled",":disabled"),v.querySelectorAll("*,:x"),S.push(",.*:")})),(t.matchesSelector=bn.test(de=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&w(function(v){t.disconnectedMatch=de.call(v,"*"),de.call(v,"[s!='']:x"),le.push("!=",Ae)}),S=S.length&&new RegExp(S.join("|")),le=le.length&&new RegExp(le.join("|")),p=bn.test(I.compareDocumentPosition),Ce=p||bn.test(I.contains)?function(v,M){var k=v.nodeType===9?v.documentElement:v,A=M&&M.parentNode;return v===A||!(!A||A.nodeType!==1||!(k.contains?k.contains(A):v.compareDocumentPosition&&16&v.compareDocumentPosition(A)))}:function(v,M){if(M){for(;M=M.parentNode;)if(M===v)return!0}return!1},un=p?function(v,M){if(v===M)return x=!0,0;var k=!v.compareDocumentPosition-!M.compareDocumentPosition;return k||(1&(k=(v.ownerDocument||v)===(M.ownerDocument||M)?v.compareDocumentPosition(M):1)||!t.sortDetached&&M.compareDocumentPosition(v)===k?v===j||v.ownerDocument===H&&Ce(H,v)?-1:M===j||M.ownerDocument===H&&Ce(H,M)?1:C?Re(C,v)-Re(C,M):0:4&k?-1:1)}:function(v,M){if(v===M)return x=!0,0;var k,A=0,L=v.parentNode,G=M.parentNode,F=[v],Q=[M];if(!L||!G)return v===j?-1:M===j?1:L?-1:G?1:C?Re(C,v)-Re(C,M):0;if(L===G)return K(v,M);for(k=v;k=k.parentNode;)F.unshift(k);for(k=M;k=k.parentNode;)Q.unshift(k);for(;F[A]===Q[A];)A++;return A?K(F[A],Q[A]):F[A]===H?-1:Q[A]===H?1:0}),j},l.matches=function(c,p){return l(c,null,null,p)},l.matchesSelector=function(c,p){if((c.ownerDocument||c)!==j&&O(c),t.matchesSelector&&U&&!we[p+" "]&&(!le||!le.test(p))&&(!S||!S.test(p)))try{var g=de.call(c,p);if(g||t.disconnectedMatch||c.document&&c.document.nodeType!==11)return g}catch{we(p,!0)}return 0<l(p,j,null,[c]).length},l.contains=function(c,p){return(c.ownerDocument||c)!==j&&O(c),Ce(c,p)},l.attr=function(c,p){(c.ownerDocument||c)!==j&&O(c);var g=i.attrHandle[p.toLowerCase()],D=g&&_n.call(i.attrHandle,p.toLowerCase())?g(c,p,!U):void 0;return D!==void 0?D:t.attributes||!U?c.getAttribute(p):(D=c.getAttributeNode(p))&&D.specified?D.value:null},l.escape=function(c){return(c+"").replace(wt,E)},l.error=function(c){throw new Error("Syntax error, unrecognized expression: "+c)},l.uniqueSort=function(c){var p,g=[],D=0,v=0;if(x=!t.detectDuplicates,C=!t.sortStable&&c.slice(0),c.sort(un),x){for(;p=c[v++];)p===c[v]&&(D=g.push(v));for(;D--;)c.splice(g[D],1)}return C=null,c},a=l.getText=function(c){var p,g="",D=0,v=c.nodeType;if(v){if(v===1||v===9||v===11){if(typeof c.textContent=="string")return c.textContent;for(c=c.firstChild;c;c=c.nextSibling)g+=a(c)}else if(v===3||v===4)return c.nodeValue}else for(;p=c[D++];)g+=a(p);return g},(i=l.selectors={cacheLength:50,createPseudo:b,match:St,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(c){return c[1]=c[1].replace(dn,vn),c[3]=(c[3]||c[4]||c[5]||"").replace(dn,vn),c[2]==="~="&&(c[3]=" "+c[3]+" "),c.slice(0,4)},CHILD:function(c){return c[1]=c[1].toLowerCase(),c[1].slice(0,3)==="nth"?(c[3]||l.error(c[0]),c[4]=+(c[4]?c[5]+(c[6]||1):2*(c[3]==="even"||c[3]==="odd")),c[5]=+(c[7]+c[8]||c[3]==="odd")):c[3]&&l.error(c[0]),c},PSEUDO:function(c){var p,g=!c[6]&&c[2];return St.CHILD.test(c[0])?null:(c[3]?c[2]=c[4]||c[5]||"":g&&Lt.test(g)&&(p=_(g,!0))&&(p=g.indexOf(")",g.length-p)-g.length)&&(c[0]=c[0].slice(0,p),c[2]=g.slice(0,p)),c.slice(0,3))}},filter:{TAG:function(c){var p=c.replace(dn,vn).toLowerCase();return c==="*"?function(){return!0}:function(g){return g.nodeName&&g.nodeName.toLowerCase()===p}},CLASS:function(c){var p=ue[c+" "];return p||(p=new RegExp("(^|"+V+")"+c+"("+V+"|$)"))&&ue(c,function(g){return p.test(typeof g.className=="string"&&g.className||typeof g.getAttribute<"u"&&g.getAttribute("class")||"")})},ATTR:function(c,p,g){return function(D){var v=l.attr(D,c);return v==null?p==="!=":!p||(v+="",p==="="?v===g:p==="!="?v!==g:p==="^="?g&&v.indexOf(g)===0:p==="*="?g&&-1<v.indexOf(g):p==="$="?g&&v.slice(-g.length)===g:p==="~="?-1<(" "+v.replace(pe," ")+" ").indexOf(g):p==="|="&&(v===g||v.slice(0,g.length+1)===g+"-"))}},CHILD:function(c,p,g,D,v){var M=c.slice(0,3)!=="nth",k=c.slice(-4)!=="last",A=p==="of-type";return D===1&&v===0?function(L){return!!L.parentNode}:function(L,G,F){var Q,Z,he,Y,be,Oe,ze=M!==k?"nextSibling":"previousSibling",se=L.parentNode,Cn=A&&L.nodeName.toLowerCase(),Se=!F&&!A,me=!1;if(se){if(M){for(;ze;){for(Y=L;Y=Y[ze];)if(A?Y.nodeName.toLowerCase()===Cn:Y.nodeType===1)return!1;Oe=ze=c==="only"&&!Oe&&"nextSibling"}return!0}if(Oe=[k?se.firstChild:se.lastChild],k&&Se){for(me=(be=(Q=(Z=(he=(Y=se)[ne]||(Y[ne]={}))[Y.uniqueID]||(he[Y.uniqueID]={}))[c]||[])[0]===Me&&Q[1])&&Q[2],Y=be&&se.childNodes[be];Y=++be&&Y&&Y[ze]||(me=be=0)||Oe.pop();)if(Y.nodeType===1&&++me&&Y===L){Z[c]=[Me,be,me];break}}else if(Se&&(me=be=(Q=(Z=(he=(Y=L)[ne]||(Y[ne]={}))[Y.uniqueID]||(he[Y.uniqueID]={}))[c]||[])[0]===Me&&Q[1]),me===!1)for(;(Y=++be&&Y&&Y[ze]||(me=be=0)||Oe.pop())&&!((A?Y.nodeName.toLowerCase()===Cn:Y.nodeType===1)&&++me&&(Se&&((Z=(he=Y[ne]||(Y[ne]={}))[Y.uniqueID]||(he[Y.uniqueID]={}))[c]=[Me,me]),Y===L)););return(me-=v)===D||me%D==0&&0<=me/D}}},PSEUDO:function(c,p){var g,D=i.pseudos[c]||i.setFilters[c.toLowerCase()]||l.error("unsupported pseudo: "+c);return D[ne]?D(p):1<D.length?(g=[c,c,"",p],i.setFilters.hasOwnProperty(c.toLowerCase())?b(function(v,M){for(var k,A=D(v,p),L=A.length;L--;)v[k=Re(v,A[L])]=!(M[k]=A[L])}):function(v){return D(v,0,g)}):D}},pseudos:{not:b(function(c){var p=[],g=[],D=d(c.replace(Ne,"$1"));return D[ne]?b(function(v,M,k,A){for(var L,G=D(v,null,A,[]),F=v.length;F--;)(L=G[F])&&(v[F]=!(M[F]=L))}):function(v,M,k){return p[0]=v,D(p,null,k,g),p[0]=null,!g.pop()}}),has:b(function(c){return function(p){return 0<l(c,p).length}}),contains:b(function(c){return c=c.replace(dn,vn),function(p){return-1<(p.textContent||a(p)).indexOf(c)}}),lang:b(function(c){return Et.test(c||"")||l.error("unsupported lang: "+c),c=c.replace(dn,vn).toLowerCase(),function(p){var g;do if(g=U?p.lang:p.getAttribute("xml:lang")||p.getAttribute("lang"))return(g=g.toLowerCase())===c||g.indexOf(c+"-")===0;while((p=p.parentNode)&&p.nodeType===1);return!1}}),target:function(c){var p=e.location&&e.location.hash;return p&&p.slice(1)===c.id},root:function(c){return c===I},focus:function(c){return c===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(c.type||c.href||~c.tabIndex)},enabled:$e(!1),disabled:$e(!0),checked:function(c){var p=c.nodeName.toLowerCase();return p==="input"&&!!c.checked||p==="option"&&!!c.selected},selected:function(c){return c.parentNode&&c.parentNode.selectedIndex,c.selected===!0},empty:function(c){for(c=c.firstChild;c;c=c.nextSibling)if(c.nodeType<6)return!1;return!0},parent:function(c){return!i.pseudos.empty(c)},header:function(c){return Oi.test(c.nodeName)},input:function(c){return Qi.test(c.nodeName)},button:function(c){var p=c.nodeName.toLowerCase();return p==="input"&&c.type==="button"||p==="button"},text:function(c){var p;return c.nodeName.toLowerCase()==="input"&&c.type==="text"&&((p=c.getAttribute("type"))==null||p.toLowerCase()==="text")},first:Ie(function(){return[0]}),last:Ie(function(c,p){return[p-1]}),eq:Ie(function(c,p,g){return[g<0?g+p:g]}),even:Ie(function(c,p){for(var g=0;g<p;g+=2)c.push(g);return c}),odd:Ie(function(c,p){for(var g=1;g<p;g+=2)c.push(g);return c}),lt:Ie(function(c,p,g){for(var D=g<0?g+p:p<g?p:g;0<=--D;)c.push(D);return c}),gt:Ie(function(c,p,g){for(var D=g<0?g+p:g;++D<p;)c.push(D);return c})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=oe(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=te(n);function Ot(){}function Un(c){for(var p=0,g=c.length,D="";p<g;p++)D+=c[p].value;return D}function tt(c,p,g){var D=p.dir,v=p.next,M=v||D,k=g&&M==="parentNode",A=J++;return p.first?function(L,G,F){for(;L=L[D];)if(L.nodeType===1||k)return c(L,G,F);return!1}:function(L,G,F){var Q,Z,he,Y=[Me,A];if(F){for(;L=L[D];)if((L.nodeType===1||k)&&c(L,G,F))return!0}else for(;L=L[D];)if(L.nodeType===1||k)if(Z=(he=L[ne]||(L[ne]={}))[L.uniqueID]||(he[L.uniqueID]={}),v&&v===L.nodeName.toLowerCase())L=L[D]||L;else{if((Q=Z[M])&&Q[0]===Me&&Q[1]===A)return Y[2]=Q[2];if((Z[M]=Y)[2]=c(L,G,F))return!0}return!1}}function qt(c){return 1<c.length?function(p,g,D){for(var v=c.length;v--;)if(!c[v](p,g,D))return!1;return!0}:c[0]}function it(c,p,g,D,v){for(var M,k=[],A=0,L=c.length,G=p!=null;A<L;A++)(M=c[A])&&(g&&!g(M,D,v)||(k.push(M),G&&p.push(A)));return k}function Bt(c,p,g,D,v,M){return D&&!D[ne]&&(D=Bt(D)),v&&!v[ne]&&(v=Bt(v,M)),b(function(k,A,L,G){var F,Q,Z,he=[],Y=[],be=A.length,Oe=k||function(Cn,Se,me){for(var En=0,ji=Se.length;En<ji;En++)l(Cn,Se[En],me);return me}(p||"*",L.nodeType?[L]:L,[]),ze=!c||!k&&p?Oe:it(Oe,he,c,L,G),se=g?v||(k?c:be||D)?[]:A:ze;if(g&&g(ze,se,L,G),D)for(F=it(se,Y),D(F,[],L,G),Q=F.length;Q--;)(Z=F[Q])&&(se[Y[Q]]=!(ze[Y[Q]]=Z));if(k){if(v||c){if(v){for(F=[],Q=se.length;Q--;)(Z=se[Q])&&F.push(ze[Q]=Z);v(null,se=[],F,G)}for(Q=se.length;Q--;)(Z=se[Q])&&-1<(F=v?Re(k,Z):he[Q])&&(k[F]=!(A[F]=Z))}}else se=it(se===A?se.splice(be,se.length):se),v?v(null,A,se,G):ie.apply(A,se)})}function Pt(c){for(var p,g,D,v=c.length,M=i.relative[c[0].type],k=M||i.relative[" "],A=M?1:0,L=tt(function(Q){return Q===p},k,!0),G=tt(function(Q){return-1<Re(p,Q)},k,!0),F=[function(Q,Z,he){var Y=!M&&(he||Z!==m)||((p=Z).nodeType?L(Q,Z,he):G(Q,Z,he));return p=null,Y}];A<v;A++)if(g=i.relative[c[A].type])F=[tt(qt(F),g)];else{if((g=i.filter[c[A].type].apply(null,c[A].matches))[ne]){for(D=++A;D<v&&!i.relative[c[D].type];D++);return Bt(1<A&&qt(F),1<A&&Un(c.slice(0,A-1).concat({value:c[A-2].type===" "?"*":""})).replace(Ne,"$1"),g,A<D&&Pt(c.slice(A,D)),D<v&&Pt(c=c.slice(D)),D<v&&Un(c))}F.push(g)}return qt(F)}return Ot.prototype=i.filters=i.pseudos,i.setFilters=new Ot,_=l.tokenize=function(c,p){var g,D,v,M,k,A,L,G=bt[c+" "];if(G)return p?0:G.slice(0);for(k=c,A=[],L=i.preFilter;k;){for(M in g&&!(D=Zn.exec(k))||(D&&(k=k.slice(D[0].length)||k),A.push(v=[])),g=!1,(D=Bn.exec(k))&&(g=D.shift(),v.push({value:g,type:D[0].replace(Ne," ")}),k=k.slice(g.length)),i.filter)!(D=St[M].exec(k))||L[M]&&!(D=L[M](D))||(g=D.shift(),v.push({value:g,type:M,matches:D}),k=k.slice(g.length));if(!g)break}return p?k.length:k?l.error(c):bt(c,A).slice(0)},d=l.compile=function(c,p){var g,D,v,M,k,A,L=[],G=[],F=vt[c+" "];if(!F){for(p||(p=_(c)),g=p.length;g--;)(F=Pt(p[g]))[ne]?L.push(F):G.push(F);(F=vt(c,(D=G,M=0<(v=L).length,k=0<D.length,A=function(Q,Z,he,Y,be){var Oe,ze,se,Cn=0,Se="0",me=Q&&[],En=[],ji=m,Gi=Q||k&&i.find.TAG("*",be),Vi=Me+=ji==null?1:Math.random()||.1,Yi=Gi.length;for(be&&(m=Z===j||Z||be);Se!==Yi&&(Oe=Gi[Se])!=null;Se++){if(k&&Oe){for(ze=0,Z||Oe.ownerDocument===j||(O(Oe),he=!U);se=D[ze++];)if(se(Oe,Z||j,he)){Y.push(Oe);break}be&&(Me=Vi)}M&&((Oe=!se&&Oe)&&Cn--,Q&&me.push(Oe))}if(Cn+=Se,M&&Se!==Cn){for(ze=0;se=v[ze++];)se(me,En,Z,he);if(Q){if(0<Cn)for(;Se--;)me[Se]||En[Se]||(En[Se]=cn.call(Y));En=it(En)}ie.apply(Y,En),be&&!Q&&0<En.length&&1<Cn+v.length&&l.uniqueSort(Y)}return be&&(Me=Vi,m=ji),me},M?b(A):A))).selector=c}return F},h=l.select=function(c,p,g,D){var v,M,k,A,L,G=typeof c=="function"&&c,F=!D&&_(c=G.selector||c);if(g=g||[],F.length===1){if(2<(M=F[0]=F[0].slice(0)).length&&(k=M[0]).type==="ID"&&p.nodeType===9&&U&&i.relative[M[1].type]){if(!(p=(i.find.ID(k.matches[0].replace(dn,vn),p)||[])[0]))return g;G&&(p=p.parentNode),c=c.slice(M.shift().value.length)}for(v=St.needsContext.test(c)?0:M.length;v--&&(k=M[v],!i.relative[A=k.type]);)if((L=i.find[A])&&(D=L(k.matches[0].replace(dn,vn),Zt.test(M[0].type)&&Le(p.parentNode)||p))){if(M.splice(v,1),!(c=D.length&&Un(M)))return ie.apply(g,D),g;break}}return(G||d(c,F))(D,p,!U,g,!p||Zt.test(c)&&Le(p.parentNode)||p),g},t.sortStable=ne.split("").sort(un).join("")===ne,t.detectDuplicates=!!x,O(),t.sortDetached=w(function(c){return 1&c.compareDocumentPosition(j.createElement("fieldset"))}),w(function(c){return c.innerHTML="<a href='#'></a>",c.firstChild.getAttribute("href")==="#"})||B("type|href|height|width",function(c,p,g){if(!g)return c.getAttribute(p,p.toLowerCase()==="type"?1:2)}),t.attributes&&w(function(c){return c.innerHTML="<input/>",c.firstChild.setAttribute("value",""),c.firstChild.getAttribute("value")===""})||B("value",function(c,p,g){if(!g&&c.nodeName.toLowerCase()==="input")return c.defaultValue}),w(function(c){return c.getAttribute("disabled")==null})||B(tn,function(c,p,g){var D;if(!g)return c[p]===!0?p.toLowerCase():(D=c.getAttributeNode(p))&&D.specified?D.value:null}),l}(P);r.find=pn,r.expr=pn.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=pn.uniqueSort,r.text=pn.getText,r.isXMLDoc=pn.isXML,r.contains=pn.contains,r.escapeSelector=pn.escape;var Ge=function(e,n,t){for(var i=[],a=t!==void 0;(e=e[n])&&e.nodeType!==9;)if(e.nodeType===1){if(a&&r(e).is(t))break;i.push(e)}return i},Kn=function(e,n){for(var t=[];e;e=e.nextSibling)e.nodeType===1&&e!==n&&t.push(e);return t},ei=r.expr.match.needsContext;function Ve(e,n){return e.nodeName&&e.nodeName.toLowerCase()===n.toLowerCase()}var ni=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function jt(e,n,t){return z(n)?r.grep(e,function(i,a){return!!n.call(i,a,i)!==t}):n.nodeType?r.grep(e,function(i){return i===n!==t}):typeof n!="string"?r.grep(e,function(i){return-1<$.call(n,i)!==t}):r.filter(n,e,t)}r.filter=function(e,n,t){var i=n[0];return t&&(e=":not("+e+")"),n.length===1&&i.nodeType===1?r.find.matchesSelector(i,e)?[i]:[]:r.find.matches(e,r.grep(n,function(a){return a.nodeType===1}))},r.fn.extend({find:function(e){var n,t,i=this.length,a=this;if(typeof e!="string")return this.pushStack(r(e).filter(function(){for(n=0;n<i;n++)if(r.contains(a[n],this))return!0}));for(t=this.pushStack([]),n=0;n<i;n++)r.find(e,a[n],t);return 1<i?r.uniqueSort(t):t},filter:function(e){return this.pushStack(jt(this,e||[],!1))},not:function(e){return this.pushStack(jt(this,e||[],!0))},is:function(e){return!!jt(this,typeof e=="string"&&ei.test(e)?r(e):e||[],!1).length}});var Wt,ot=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(r.fn.init=function(e,n,t){var i,a;if(!e)return this;if(t=t||Wt,typeof e=="string"){if(!(i=e[0]==="<"&&e[e.length-1]===">"&&3<=e.length?[null,e,null]:ot.exec(e))||!i[1]&&n)return!n||n.jquery?(n||t).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof r?n[0]:n,r.merge(this,r.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:T,!0)),ni.test(i[1])&&r.isPlainObject(n))for(i in n)z(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}return(a=T.getElementById(i[2]))&&(this[0]=a,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):z(e)?t.ready!==void 0?t.ready(e):e(r):r.makeArray(e,this)}).prototype=r.fn,Wt=r(T);var Nn=/^(?:parents|prev(?:Until|All))/,rt={children:!0,contents:!0,next:!0,prev:!0};function Pe(e,n){for(;(e=e[n])&&e.nodeType!==1;);return e}r.fn.extend({has:function(e){var n=r(e,this),t=n.length;return this.filter(function(){for(var i=0;i<t;i++)if(r.contains(this,n[i]))return!0})},closest:function(e,n){var t,i=0,a=this.length,u=[],_=typeof e!="string"&&r(e);if(!ei.test(e)){for(;i<a;i++)for(t=this[i];t&&t!==n;t=t.parentNode)if(t.nodeType<11&&(_?-1<_.index(t):t.nodeType===1&&r.find.matchesSelector(t,e))){u.push(t);break}}return this.pushStack(1<u.length?r.uniqueSort(u):u)},index:function(e){return e?typeof e=="string"?$.call(r(e),this[0]):$.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(e,n))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),r.each({parent:function(e){var n=e.parentNode;return n&&n.nodeType!==11?n:null},parents:function(e){return Ge(e,"parentNode")},parentsUntil:function(e,n,t){return Ge(e,"parentNode",t)},next:function(e){return Pe(e,"nextSibling")},prev:function(e){return Pe(e,"previousSibling")},nextAll:function(e){return Ge(e,"nextSibling")},prevAll:function(e){return Ge(e,"previousSibling")},nextUntil:function(e,n,t){return Ge(e,"nextSibling",t)},prevUntil:function(e,n,t){return Ge(e,"previousSibling",t)},siblings:function(e){return Kn((e.parentNode||{}).firstChild,e)},children:function(e){return Kn(e.firstChild)},contents:function(e){return typeof e.contentDocument<"u"?e.contentDocument:(Ve(e,"template")&&(e=e.content||e),r.merge([],e.childNodes))}},function(e,n){r.fn[e]=function(t,i){var a=r.map(this,n,t);return e.slice(-5)!=="Until"&&(i=t),i&&typeof i=="string"&&(a=r.filter(i,a)),1<this.length&&(rt[e]||r.uniqueSort(a),Nn.test(e)&&a.reverse()),this.pushStack(a)}});var Ye=/[^\x20\t\r\n\f]+/g;function zn(e){return e}function Fn(e){throw e}function ti(e,n,t,i){var a;try{e&&z(a=e.promise)?a.call(e).done(n).fail(t):e&&z(a=e.then)?a.call(e,n,t):n.apply(void 0,[e].slice(i))}catch(u){t.apply(void 0,[u])}}r.Callbacks=function(e){var n,t;e=typeof e=="string"?(n=e,t={},r.each(n.match(Ye)||[],function(O,j){t[j]=!0}),t):r.extend({},e);var i,a,u,_,d=[],h=[],m=-1,C=function(){for(_=_||e.once,u=i=!0;h.length;m=-1)for(a=h.shift();++m<d.length;)d[m].apply(a[0],a[1])===!1&&e.stopOnFalse&&(m=d.length,a=!1);e.memory||(a=!1),i=!1,_&&(d=a?[]:"")},x={add:function(){return d&&(a&&!i&&(m=d.length-1,h.push(a)),function O(j){r.each(j,function(I,U){z(U)?e.unique&&x.has(U)||d.push(U):U&&U.length&&ye(U)!=="string"&&O(U)})}(arguments),a&&!i&&C()),this},remove:function(){return r.each(arguments,function(O,j){for(var I;-1<(I=r.inArray(j,d,I));)d.splice(I,1),I<=m&&m--}),this},has:function(O){return O?-1<r.inArray(O,d):0<d.length},empty:function(){return d&&(d=[]),this},disable:function(){return _=h=[],d=a="",this},disabled:function(){return!d},lock:function(){return _=h=[],a||i||(d=a=""),this},locked:function(){return!!_},fireWith:function(O,j){return _||(j=[O,(j=j||[]).slice?j.slice():j],h.push(j),i||C()),this},fire:function(){return x.fireWith(this,arguments),this},fired:function(){return!!u}};return x},r.extend({Deferred:function(e){var n=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],t="pending",i={state:function(){return t},always:function(){return a.done(arguments).fail(arguments),this},catch:function(u){return i.then(null,u)},pipe:function(){var u=arguments;return r.Deferred(function(_){r.each(n,function(d,h){var m=z(u[h[4]])&&u[h[4]];a[h[1]](function(){var C=m&&m.apply(this,arguments);C&&z(C.promise)?C.promise().progress(_.notify).done(_.resolve).fail(_.reject):_[h[0]+"With"](this,m?[C]:arguments)})}),u=null}).promise()},then:function(u,_,d){var h=0;function m(C,x,O,j){return function(){var I=this,U=arguments,S=function(){var de,Ce;if(!(C<h)){if((de=O.apply(I,U))===x.promise())throw new TypeError("Thenable self-resolution");Ce=de&&(typeof de=="object"||typeof de=="function")&&de.then,z(Ce)?j?Ce.call(de,m(h,x,zn,j),m(h,x,Fn,j)):(h++,Ce.call(de,m(h,x,zn,j),m(h,x,Fn,j),m(h,x,zn,x.notifyWith))):(O!==zn&&(I=void 0,U=[de]),(j||x.resolveWith)(I,U))}},le=j?S:function(){try{S()}catch(de){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(de,le.stackTrace),h<=C+1&&(O!==Fn&&(I=void 0,U=[de]),x.rejectWith(I,U))}};C?le():(r.Deferred.getStackHook&&(le.stackTrace=r.Deferred.getStackHook()),P.setTimeout(le))}}return r.Deferred(function(C){n[0][3].add(m(0,C,z(d)?d:zn,C.notifyWith)),n[1][3].add(m(0,C,z(u)?u:zn)),n[2][3].add(m(0,C,z(_)?_:Fn))}).promise()},promise:function(u){return u!=null?r.extend(u,i):i}},a={};return r.each(n,function(u,_){var d=_[2],h=_[5];i[_[1]]=d.add,h&&d.add(function(){t=h},n[3-u][2].disable,n[3-u][3].disable,n[0][2].lock,n[0][3].lock),d.add(_[3].fire),a[_[0]]=function(){return a[_[0]+"With"](this===a?void 0:this,arguments),this},a[_[0]+"With"]=d.fireWith}),i.promise(a),e&&e.call(a,a),a},when:function(e){var n=arguments.length,t=n,i=Array(t),a=W.call(arguments),u=r.Deferred(),_=function(d){return function(h){i[d]=this,a[d]=1<arguments.length?W.call(arguments):h,--n||u.resolveWith(i,a)}};if(n<=1&&(ti(e,u.done(_(t)).resolve,u.reject,!n),u.state()==="pending"||z(a[t]&&a[t].then)))return u.then();for(;t--;)ti(a[t],_(t),u.reject);return u.promise()}});var Ct=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(e,n){P.console&&P.console.warn&&e&&Ct.test(e.name)&&P.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},r.readyException=function(e){P.setTimeout(function(){throw e})};var Hn=r.Deferred();function Dt(){T.removeEventListener("DOMContentLoaded",Dt),P.removeEventListener("load",Dt),r.ready()}r.fn.ready=function(e){return Hn.then(e).catch(function(n){r.readyException(n)}),this},r.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--r.readyWait:r.isReady)||(r.isReady=!0)!==e&&0<--r.readyWait||Hn.resolveWith(T,[r])}}),r.ready.then=Hn.then,T.readyState==="complete"||T.readyState!=="loading"&&!T.documentElement.doScroll?P.setTimeout(r.ready):(T.addEventListener("DOMContentLoaded",Dt),P.addEventListener("load",Dt));var hn=function(e,n,t,i,a,u,_){var d=0,h=e.length,m=t==null;if(ye(t)==="object")for(d in a=!0,t)hn(e,n,d,t[d],!0,u,_);else if(i!==void 0&&(a=!0,z(i)||(_=!0),m&&(_?(n.call(e,i),n=null):(m=n,n=function(C,x,O){return m.call(r(C),O)})),n))for(;d<h;d++)n(e[d],t,_?i:i.call(e[d],d,n(e[d],t)));return a?e:m?n.call(e):h?n(e[0],t):u},xe=/^-ms-/,Ci=/-([a-z])/g;function xn(e,n){return n.toUpperCase()}function rn(e){return e.replace(xe,"ms-").replace(Ci,xn)}var xt=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function st(){this.expando=r.expando+st.uid++}st.uid=1,st.prototype={cache:function(e){var n=e[this.expando];return n||(n={},xt(e)&&(e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,configurable:!0}))),n},set:function(e,n,t){var i,a=this.cache(e);if(typeof n=="string")a[rn(n)]=t;else for(i in n)a[rn(i)]=n[i];return a},get:function(e,n){return n===void 0?this.cache(e):e[this.expando]&&e[this.expando][rn(n)]},access:function(e,n,t){return n===void 0||n&&typeof n=="string"&&t===void 0?this.get(e,n):(this.set(e,n,t),t!==void 0?t:n)},remove:function(e,n){var t,i=e[this.expando];if(i!==void 0){if(n!==void 0)for(t=(n=Array.isArray(n)?n.map(rn):(n=rn(n))in i?[n]:n.match(Ye)||[]).length;t--;)delete i[n[t]];(n===void 0||r.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var n=e[this.expando];return n!==void 0&&!r.isEmptyObject(n)}};var N=new st,Te=new st,Di=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,xi=/[A-Z]/g;function Tt(e,n,t){var i,a;if(t===void 0&&e.nodeType===1)if(i="data-"+n.replace(xi,"-$&").toLowerCase(),typeof(t=e.getAttribute(i))=="string"){try{t=(a=t)==="true"||a!=="false"&&(a==="null"?null:a===+a+""?+a:Di.test(a)?JSON.parse(a):a)}catch{}Te.set(e,n,t)}else t=void 0;return t}r.extend({hasData:function(e){return Te.hasData(e)||N.hasData(e)},data:function(e,n,t){return Te.access(e,n,t)},removeData:function(e,n){Te.remove(e,n)},_data:function(e,n,t){return N.access(e,n,t)},_removeData:function(e,n){N.remove(e,n)}}),r.fn.extend({data:function(e,n){var t,i,a,u=this[0],_=u&&u.attributes;if(e===void 0){if(this.length&&(a=Te.get(u),u.nodeType===1&&!N.get(u,"hasDataAttrs"))){for(t=_.length;t--;)_[t]&&(i=_[t].name).indexOf("data-")===0&&(i=rn(i.slice(5)),Tt(u,i,a[i]));N.set(u,"hasDataAttrs",!0)}return a}return typeof e=="object"?this.each(function(){Te.set(this,e)}):hn(this,function(d){var h;if(u&&d===void 0)return(h=Te.get(u,e))!==void 0||(h=Tt(u,e))!==void 0?h:void 0;this.each(function(){Te.set(this,e,d)})},null,n,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Te.remove(this,e)})}}),r.extend({queue:function(e,n,t){var i;if(e)return n=(n||"fx")+"queue",i=N.get(e,n),t&&(!i||Array.isArray(t)?i=N.access(e,n,r.makeArray(t)):i.push(t)),i||[]},dequeue:function(e,n){n=n||"fx";var t=r.queue(e,n),i=t.length,a=t.shift(),u=r._queueHooks(e,n);a==="inprogress"&&(a=t.shift(),i--),a&&(n==="fx"&&t.unshift("inprogress"),delete u.stop,a.call(e,function(){r.dequeue(e,n)},u)),!i&&u&&u.empty.fire()},_queueHooks:function(e,n){var t=n+"queueHooks";return N.get(e,t)||N.access(e,t,{empty:r.Callbacks("once memory").add(function(){N.remove(e,[n+"queue",t])})})}}),r.fn.extend({queue:function(e,n){var t=2;return typeof e!="string"&&(n=e,e="fx",t--),arguments.length<t?r.queue(this[0],e):n===void 0?this:this.each(function(){var i=r.queue(this,e,n);r._queueHooks(this,e),e==="fx"&&i[0]!=="inprogress"&&r.dequeue(this,e)})},dequeue:function(e){return this.each(function(){r.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var t,i=1,a=r.Deferred(),u=this,_=this.length,d=function(){--i||a.resolveWith(u,[u])};for(typeof e!="string"&&(n=e,e=void 0),e=e||"fx";_--;)(t=N.get(u[_],e+"queueHooks"))&&t.empty&&(i++,t.empty.add(d));return d(),a.promise(n)}});var ii=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,at=new RegExp("^(?:([+-])=|)("+ii+")([a-z%]*)$","i"),mn=["Top","Right","Bottom","Left"],lt=T.documentElement,Qn=function(e){return r.contains(e.ownerDocument,e)},Ti={composed:!0};lt.getRootNode&&(Qn=function(e){return r.contains(e.ownerDocument,e)||e.getRootNode(Ti)===e.ownerDocument});var ut=function(e,n){return(e=n||e).style.display==="none"||e.style.display===""&&Qn(e)&&r.css(e,"display")==="none"},Tn=function(e,n,t,i){var a,u,_={};for(u in n)_[u]=e.style[u],e.style[u]=n[u];for(u in a=t.apply(e,[]),n)e.style[u]=_[u];return a};function Mn(e,n,t,i){var a,u,_=20,d=i?function(){return i.cur()}:function(){return r.css(e,n,"")},h=d(),m=t&&t[3]||(r.cssNumber[n]?"":"px"),C=e.nodeType&&(r.cssNumber[n]||m!=="px"&&+h)&&at.exec(r.css(e,n));if(C&&C[3]!==m){for(h/=2,m=m||C[3],C=+h||1;_--;)r.style(e,n,C+m),(1-u)*(1-(u=d()/h||.5))<=0&&(_=0),C/=u;C*=2,r.style(e,n,C+m),t=t||[]}return t&&(C=+C||+h||0,a=t[1]?C+(t[1]+1)*t[2]:+t[2],i&&(i.unit=m,i.start=C,i.end=a)),a}var On={};function sn(e,n){for(var t,i,a,u,_,d,h,m=[],C=0,x=e.length;C<x;C++)(i=e[C]).style&&(t=i.style.display,n?(t==="none"&&(m[C]=N.get(i,"display")||null,m[C]||(i.style.display="")),i.style.display===""&&ut(i)&&(m[C]=(h=_=u=void 0,_=(a=i).ownerDocument,d=a.nodeName,(h=On[d])||(u=_.body.appendChild(_.createElement(d)),h=r.css(u,"display"),u.parentNode.removeChild(u),h==="none"&&(h="block"),On[d]=h)))):t!=="none"&&(m[C]="none",N.set(i,"display",t)));for(C=0;C<x;C++)m[C]!=null&&(e[C].style.display=m[C]);return e}r.fn.extend({show:function(){return sn(this,!0)},hide:function(){return sn(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){ut(this)?r(this).show():r(this).hide()})}});var _t=/^(?:checkbox|radio)$/i,Mt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,oi=/^$|^module$|\/(?:java|ecma)script/i,Ee={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ce(e,n){var t;return t=typeof e.getElementsByTagName<"u"?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll<"u"?e.querySelectorAll(n||"*"):[],n===void 0||n&&Ve(e,n)?r.merge([e],t):t}function kn(e,n){for(var t=0,i=e.length;t<i;t++)N.set(e[t],"globalEval",!n||N.get(n[t],"globalEval"))}Ee.optgroup=Ee.option,Ee.tbody=Ee.tfoot=Ee.colgroup=Ee.caption=Ee.thead,Ee.th=Ee.td;var Pn,Gn,ri=/<|&#?\w+;/;function si(e,n,t,i,a){for(var u,_,d,h,m,C,x=n.createDocumentFragment(),O=[],j=0,I=e.length;j<I;j++)if((u=e[j])||u===0)if(ye(u)==="object")r.merge(O,u.nodeType?[u]:u);else if(ri.test(u)){for(_=_||x.appendChild(n.createElement("div")),d=(Mt.exec(u)||["",""])[1].toLowerCase(),h=Ee[d]||Ee._default,_.innerHTML=h[1]+r.htmlPrefilter(u)+h[2],C=h[0];C--;)_=_.lastChild;r.merge(O,_.childNodes),(_=x.firstChild).textContent=""}else O.push(n.createTextNode(u));for(x.textContent="",j=0;u=O[j++];)if(i&&-1<r.inArray(u,i))a&&a.push(u);else if(m=Qn(u),_=ce(x.appendChild(u),"script"),m&&kn(_),t)for(C=0;u=_[C++];)oi.test(u.type||"")&&t.push(u);return x}Pn=T.createDocumentFragment().appendChild(T.createElement("div")),(Gn=T.createElement("input")).setAttribute("type","radio"),Gn.setAttribute("checked","checked"),Gn.setAttribute("name","t"),Pn.appendChild(Gn),X.checkClone=Pn.cloneNode(!0).cloneNode(!0).lastChild.checked,Pn.innerHTML="<textarea>x</textarea>",X.noCloneChecked=!!Pn.cloneNode(!0).lastChild.defaultValue;var Mi=/^key/,ai=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Vn=/^([^.]*)(?:\.(.+)|)/;function Xe(){return!0}function an(){return!1}function gn(e,n){return e===function(){try{return T.activeElement}catch{}}()==(n==="focus")}function ct(e,n,t,i,a,u){var _,d;if(typeof n=="object"){for(d in typeof t!="string"&&(i=i||t,t=void 0),n)ct(e,d,t,i,n[d],u);return e}if(i==null&&a==null?(a=t,i=t=void 0):a==null&&(typeof t=="string"?(a=i,i=void 0):(a=i,i=t,t=void 0)),a===!1)a=an;else if(!a)return e;return u===1&&(_=a,(a=function(h){return r().off(h),_.apply(this,arguments)}).guid=_.guid||(_.guid=r.guid++)),e.each(function(){r.event.add(this,n,a,i,t)})}function kt(e,n,t){t?(N.set(e,n,!1),r.event.add(e,n,{namespace:!1,handler:function(i){var a,u,_=N.get(this,n);if(1&i.isTrigger&&this[n]){if(_.length)(r.event.special[n]||{}).delegateType&&i.stopPropagation();else if(_=W.call(arguments),N.set(this,n,_),a=t(this,n),this[n](),_!==(u=N.get(this,n))||a?N.set(this,n,!1):u={},_!==u)return i.stopImmediatePropagation(),i.preventDefault(),u.value}else _.length&&(N.set(this,n,{value:r.event.trigger(r.extend(_[0],r.Event.prototype),_.slice(1),this)}),i.stopImmediatePropagation())}})):N.get(e,n)===void 0&&r.event.add(e,n,Xe)}r.event={global:{},add:function(e,n,t,i,a){var u,_,d,h,m,C,x,O,j,I,U,S=N.get(e);if(S)for(t.handler&&(t=(u=t).handler,a=u.selector),a&&r.find.matchesSelector(lt,a),t.guid||(t.guid=r.guid++),(h=S.events)||(h=S.events={}),(_=S.handle)||(_=S.handle=function(le){return typeof r<"u"&&r.event.triggered!==le.type?r.event.dispatch.apply(e,arguments):void 0}),m=(n=(n||"").match(Ye)||[""]).length;m--;)j=U=(d=Vn.exec(n[m])||[])[1],I=(d[2]||"").split(".").sort(),j&&(x=r.event.special[j]||{},j=(a?x.delegateType:x.bindType)||j,x=r.event.special[j]||{},C=r.extend({type:j,origType:U,data:i,handler:t,guid:t.guid,selector:a,needsContext:a&&r.expr.match.needsContext.test(a),namespace:I.join(".")},u),(O=h[j])||((O=h[j]=[]).delegateCount=0,x.setup&&x.setup.call(e,i,I,_)!==!1||e.addEventListener&&e.addEventListener(j,_)),x.add&&(x.add.call(e,C),C.handler.guid||(C.handler.guid=t.guid)),a?O.splice(O.delegateCount++,0,C):O.push(C),r.event.global[j]=!0)},remove:function(e,n,t,i,a){var u,_,d,h,m,C,x,O,j,I,U,S=N.hasData(e)&&N.get(e);if(S&&(h=S.events)){for(m=(n=(n||"").match(Ye)||[""]).length;m--;)if(j=U=(d=Vn.exec(n[m])||[])[1],I=(d[2]||"").split(".").sort(),j){for(x=r.event.special[j]||{},O=h[j=(i?x.delegateType:x.bindType)||j]||[],d=d[2]&&new RegExp("(^|\\.)"+I.join("\\.(?:.*\\.|)")+"(\\.|$)"),_=u=O.length;u--;)C=O[u],!a&&U!==C.origType||t&&t.guid!==C.guid||d&&!d.test(C.namespace)||i&&i!==C.selector&&(i!=="**"||!C.selector)||(O.splice(u,1),C.selector&&O.delegateCount--,x.remove&&x.remove.call(e,C));_&&!O.length&&(x.teardown&&x.teardown.call(e,I,S.handle)!==!1||r.removeEvent(e,j,S.handle),delete h[j])}else for(j in h)r.event.remove(e,j+n[m],t,i,!0);r.isEmptyObject(h)&&N.remove(e,"handle events")}},dispatch:function(e){var n,t,i,a,u,_,d=r.event.fix(e),h=new Array(arguments.length),m=(N.get(this,"events")||{})[d.type]||[],C=r.event.special[d.type]||{};for(h[0]=d,n=1;n<arguments.length;n++)h[n]=arguments[n];if(d.delegateTarget=this,!C.preDispatch||C.preDispatch.call(this,d)!==!1){for(_=r.event.handlers.call(this,d,m),n=0;(a=_[n++])&&!d.isPropagationStopped();)for(d.currentTarget=a.elem,t=0;(u=a.handlers[t++])&&!d.isImmediatePropagationStopped();)d.rnamespace&&u.namespace!==!1&&!d.rnamespace.test(u.namespace)||(d.handleObj=u,d.data=u.data,(i=((r.event.special[u.origType]||{}).handle||u.handler).apply(a.elem,h))!==void 0&&(d.result=i)===!1&&(d.preventDefault(),d.stopPropagation()));return C.postDispatch&&C.postDispatch.call(this,d),d.result}},handlers:function(e,n){var t,i,a,u,_,d=[],h=n.delegateCount,m=e.target;if(h&&m.nodeType&&!(e.type==="click"&&1<=e.button)){for(;m!==this;m=m.parentNode||this)if(m.nodeType===1&&(e.type!=="click"||m.disabled!==!0)){for(u=[],_={},t=0;t<h;t++)_[a=(i=n[t]).selector+" "]===void 0&&(_[a]=i.needsContext?-1<r(a,this).index(m):r.find(a,this,null,[m]).length),_[a]&&u.push(i);u.length&&d.push({elem:m,handlers:u})}}return m=this,h<n.length&&d.push({elem:m,handlers:n.slice(h)}),d},addProp:function(e,n){Object.defineProperty(r.Event.prototype,e,{enumerable:!0,configurable:!0,get:z(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[r.expando]?e:new r.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var n=this||e;return _t.test(n.type)&&n.click&&Ve(n,"input")&&kt(n,"click",Xe),!1},trigger:function(e){var n=this||e;return _t.test(n.type)&&n.click&&Ve(n,"input")&&kt(n,"click"),!0},_default:function(e){var n=e.target;return _t.test(n.type)&&n.click&&Ve(n,"input")&&N.get(n,"click")||Ve(n,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},r.removeEvent=function(e,n,t){e.removeEventListener&&e.removeEventListener(n,t)},r.Event=function(e,n){if(!(this instanceof r.Event))return new r.Event(e,n);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Xe:an,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,n&&r.extend(this,n),this.timeStamp=e&&e.timeStamp||Date.now(),this[r.expando]=!0},r.Event.prototype={constructor:r.Event,isDefaultPrevented:an,isPropagationStopped:an,isImmediatePropagationStopped:an,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Xe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Xe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Xe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var n=e.button;return e.which==null&&Mi.test(e.type)?e.charCode!=null?e.charCode:e.keyCode:!e.which&&n!==void 0&&ai.test(e.type)?1&n?1:2&n?3:4&n?2:0:e.which}},r.event.addProp),r.each({focus:"focusin",blur:"focusout"},function(e,n){r.event.special[e]={setup:function(){return kt(this,e,gn),!1},trigger:function(){return kt(this,e),!0},delegateType:n}}),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,n){r.event.special[e]={delegateType:n,bindType:n,handle:function(t){var i,a=t.relatedTarget,u=t.handleObj;return a&&(a===this||r.contains(this,a))||(t.type=u.origType,i=u.handler.apply(this,arguments),t.type=n),i}}}),r.fn.extend({on:function(e,n,t,i){return ct(this,e,n,t,i)},one:function(e,n,t,i){return ct(this,e,n,t,i,1)},off:function(e,n,t){var i,a;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,r(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(a in e)this.off(a,n,e[a]);return this}return n!==!1&&typeof n!="function"||(t=n,n=void 0),t===!1&&(t=an),this.each(function(){r.event.remove(this,e,t,n)})}});var ki=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,je=/<script|<style|<link/i,Rt=/checked\s*(?:[^=]|=\s*.checked.)/i,Be=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function li(e,n){return Ve(e,"table")&&Ve(n.nodeType!==11?n:n.firstChild,"tr")&&r(e).children("tbody")[0]||e}function Ri(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function Ai(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Kt(e,n){var t,i,a,u,_,d,h,m;if(n.nodeType===1){if(N.hasData(e)&&(u=N.access(e),_=N.set(n,u),m=u.events))for(a in delete _.handle,_.events={},m)for(t=0,i=m[a].length;t<i;t++)r.event.add(n,a,m[a][t]);Te.hasData(e)&&(d=Te.access(e),h=r.extend({},d),Te.set(n,h))}}function Yn(e,n,t,i){n=_e.apply([],n);var a,u,_,d,h,m,C=0,x=e.length,O=x-1,j=n[0],I=z(j);if(I||1<x&&typeof j=="string"&&!X.checkClone&&Rt.test(j))return e.each(function(U){var S=e.eq(U);I&&(n[0]=j.call(this,U,S.html())),Yn(S,n,t,i)});if(x&&(u=(a=si(n,e[0].ownerDocument,!1,e,i)).firstChild,a.childNodes.length===1&&(a=u),u||i)){for(d=(_=r.map(ce(a,"script"),Ri)).length;C<x;C++)h=a,C!==O&&(h=r.clone(h,!0,!0),d&&r.merge(_,ce(h,"script"))),t.call(e[C],h,C);if(d)for(m=_[_.length-1].ownerDocument,r.map(_,Ai),C=0;C<d;C++)h=_[C],oi.test(h.type||"")&&!N.access(h,"globalEval")&&r.contains(m,h)&&(h.src&&(h.type||"").toLowerCase()!=="module"?r._evalUrl&&!h.noModule&&r._evalUrl(h.src,{nonce:h.nonce||h.getAttribute("nonce")}):qe(h.textContent.replace(Be,""),h,m))}return e}function dt(e,n,t){for(var i,a=n?r.filter(n,e):e,u=0;(i=a[u])!=null;u++)t||i.nodeType!==1||r.cleanData(ce(i)),i.parentNode&&(t&&Qn(i)&&kn(ce(i,"script")),i.parentNode.removeChild(i));return e}r.extend({htmlPrefilter:function(e){return e.replace(ki,"<$1></$2>")},clone:function(e,n,t){var i,a,u,_,d,h,m,C=e.cloneNode(!0),x=Qn(e);if(!(X.noCloneChecked||e.nodeType!==1&&e.nodeType!==11||r.isXMLDoc(e)))for(_=ce(C),i=0,a=(u=ce(e)).length;i<a;i++)d=u[i],h=_[i],(m=h.nodeName.toLowerCase())==="input"&&_t.test(d.type)?h.checked=d.checked:m!=="input"&&m!=="textarea"||(h.defaultValue=d.defaultValue);if(n)if(t)for(u=u||ce(e),_=_||ce(C),i=0,a=u.length;i<a;i++)Kt(u[i],_[i]);else Kt(e,C);return 0<(_=ce(C,"script")).length&&kn(_,!x&&ce(e,"script")),C},cleanData:function(e){for(var n,t,i,a=r.event.special,u=0;(t=e[u])!==void 0;u++)if(xt(t)){if(n=t[N.expando]){if(n.events)for(i in n.events)a[i]?r.event.remove(t,i):r.removeEvent(t,i,n.handle);t[N.expando]=void 0}t[Te.expando]&&(t[Te.expando]=void 0)}}}),r.fn.extend({detach:function(e){return dt(this,e,!0)},remove:function(e){return dt(this,e)},text:function(e){return hn(this,function(n){return n===void 0?r.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=n)})},null,e,arguments.length)},append:function(){return Yn(this,arguments,function(e){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||li(this,e).appendChild(e)})},prepend:function(){return Yn(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=li(this,e);n.insertBefore(e,n.firstChild)}})},before:function(){return Yn(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Yn(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,n=0;(e=this[n])!=null;n++)e.nodeType===1&&(r.cleanData(ce(e,!1)),e.textContent="");return this},clone:function(e,n){return e=e!=null&&e,n=n??e,this.map(function(){return r.clone(this,e,n)})},html:function(e){return hn(this,function(n){var t=this[0]||{},i=0,a=this.length;if(n===void 0&&t.nodeType===1)return t.innerHTML;if(typeof n=="string"&&!je.test(n)&&!Ee[(Mt.exec(n)||["",""])[1].toLowerCase()]){n=r.htmlPrefilter(n);try{for(;i<a;i++)(t=this[i]||{}).nodeType===1&&(r.cleanData(ce(t,!1)),t.innerHTML=n);t=0}catch{}}t&&this.empty().append(n)},null,e,arguments.length)},replaceWith:function(){var e=[];return Yn(this,arguments,function(n){var t=this.parentNode;r.inArray(this,e)<0&&(r.cleanData(ce(this)),t&&t.replaceChild(n,this))},e)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,n){r.fn[e]=function(t){for(var i,a=[],u=r(t),_=u.length-1,d=0;d<=_;d++)i=d===_?this:this.clone(!0),r(u[d])[n](i),ae.apply(a,i.get());return this.pushStack(a)}});var Nt=new RegExp("^("+ii+")(?!px)[a-z%]+$","i"),Xn=function(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=P),n.getComputedStyle(e)},$i=new RegExp(mn.join("|"),"i");function ft(e,n,t){var i,a,u,_,d=e.style;return(t=t||Xn(e))&&((_=t.getPropertyValue(n)||t[n])!==""||Qn(e)||(_=r.style(e,n)),!X.pixelBoxStyles()&&Nt.test(_)&&$i.test(n)&&(i=d.width,a=d.minWidth,u=d.maxWidth,d.minWidth=d.maxWidth=d.width=_,_=t.width,d.width=i,d.minWidth=a,d.maxWidth=u)),_!==void 0?_+"":_}function ui(e,n){return{get:function(){if(!e())return(this.get=n).apply(this,arguments);delete this.get}}}(function(){function e(){if(h){d.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",h.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",lt.appendChild(d).appendChild(h);var m=P.getComputedStyle(h);t=m.top!=="1%",_=n(m.marginLeft)===12,h.style.right="60%",u=n(m.right)===36,i=n(m.width)===36,h.style.position="absolute",a=n(h.offsetWidth/3)===12,lt.removeChild(d),h=null}}function n(m){return Math.round(parseFloat(m))}var t,i,a,u,_,d=T.createElement("div"),h=T.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",X.clearCloneStyle=h.style.backgroundClip==="content-box",r.extend(X,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),u},pixelPosition:function(){return e(),t},reliableMarginLeft:function(){return e(),_},scrollboxSize:function(){return e(),a}}))})();var _i=["Webkit","Moz","ms"],ci=T.createElement("div").style,di={};function zt(e){var n=r.cssProps[e]||di[e];return n||(e in ci?e:di[e]=function(t){for(var i=t[0].toUpperCase()+t.slice(1),a=_i.length;a--;)if((t=_i[a]+i)in ci)return t}(e)||e)}var Ii=/^(none|table(?!-c[ea]).+)/,fi=/^--/,Li={position:"absolute",visibility:"hidden",display:"block"},yn={letterSpacing:"0",fontWeight:"400"};function Rn(e,n,t){var i=at.exec(n);return i?Math.max(0,i[2]-(t||0))+(i[3]||"px"):n}function An(e,n,t,i,a,u){var _=n==="width"?1:0,d=0,h=0;if(t===(i?"border":"content"))return 0;for(;_<4;_+=2)t==="margin"&&(h+=r.css(e,t+mn[_],!0,a)),i?(t==="content"&&(h-=r.css(e,"padding"+mn[_],!0,a)),t!=="margin"&&(h-=r.css(e,"border"+mn[_]+"Width",!0,a))):(h+=r.css(e,"padding"+mn[_],!0,a),t!=="padding"?h+=r.css(e,"border"+mn[_]+"Width",!0,a):d+=r.css(e,"border"+mn[_]+"Width",!0,a));return!i&&0<=u&&(h+=Math.max(0,Math.ceil(e["offset"+n[0].toUpperCase()+n.slice(1)]-u-h-d-.5))||0),h}function Ue(e,n,t){var i=Xn(e),a=(!X.boxSizingReliable()||t)&&r.css(e,"boxSizing",!1,i)==="border-box",u=a,_=ft(e,n,i),d="offset"+n[0].toUpperCase()+n.slice(1);if(Nt.test(_)){if(!t)return _;_="auto"}return(!X.boxSizingReliable()&&a||_==="auto"||!parseFloat(_)&&r.css(e,"display",!1,i)==="inline")&&e.getClientRects().length&&(a=r.css(e,"boxSizing",!1,i)==="border-box",(u=d in e)&&(_=e[d])),(_=parseFloat(_)||0)+An(e,n,t||(a?"border":"content"),u,i,_)+"px"}function Je(e,n,t,i,a){return new Je.prototype.init(e,n,t,i,a)}r.extend({cssHooks:{opacity:{get:function(e,n){if(n){var t=ft(e,"opacity");return t===""?"1":t}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,n,t,i){if(e&&e.nodeType!==3&&e.nodeType!==8&&e.style){var a,u,_,d=rn(n),h=fi.test(n),m=e.style;if(h||(n=zt(d)),_=r.cssHooks[n]||r.cssHooks[d],t===void 0)return _&&"get"in _&&(a=_.get(e,!1,i))!==void 0?a:m[n];(u=typeof t)=="string"&&(a=at.exec(t))&&a[1]&&(t=Mn(e,n,a),u="number"),t!=null&&t==t&&(u!=="number"||h||(t+=a&&a[3]||(r.cssNumber[d]?"":"px")),X.clearCloneStyle||t!==""||n.indexOf("background")!==0||(m[n]="inherit"),_&&"set"in _&&(t=_.set(e,t,i))===void 0||(h?m.setProperty(n,t):m[n]=t))}},css:function(e,n,t,i){var a,u,_,d=rn(n);return fi.test(n)||(n=zt(d)),(_=r.cssHooks[n]||r.cssHooks[d])&&"get"in _&&(a=_.get(e,!0,t)),a===void 0&&(a=ft(e,n,i)),a==="normal"&&n in yn&&(a=yn[n]),t===""||t?(u=parseFloat(a),t===!0||isFinite(u)?u||0:a):a}}),r.each(["height","width"],function(e,n){r.cssHooks[n]={get:function(t,i,a){if(i)return!Ii.test(r.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?Ue(t,n,a):Tn(t,Li,function(){return Ue(t,n,a)})},set:function(t,i,a){var u,_=Xn(t),d=!X.scrollboxSize()&&_.position==="absolute",h=(d||a)&&r.css(t,"boxSizing",!1,_)==="border-box",m=a?An(t,n,a,h,_):0;return h&&d&&(m-=Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(_[n])-An(t,n,"border",!1,_)-.5)),m&&(u=at.exec(i))&&(u[3]||"px")!=="px"&&(t.style[n]=i,i=r.css(t,n)),Rn(0,i,m)}}}),r.cssHooks.marginLeft=ui(X.reliableMarginLeft,function(e,n){if(n)return(parseFloat(ft(e,"marginLeft"))||e.getBoundingClientRect().left-Tn(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(e,n){r.cssHooks[e+n]={expand:function(t){for(var i=0,a={},u=typeof t=="string"?t.split(" "):[t];i<4;i++)a[e+mn[i]+n]=u[i]||u[i-2]||u[0];return a}},e!=="margin"&&(r.cssHooks[e+n].set=Rn)}),r.fn.extend({css:function(e,n){return hn(this,function(t,i,a){var u,_,d={},h=0;if(Array.isArray(i)){for(u=Xn(t),_=i.length;h<_;h++)d[i[h]]=r.css(t,i[h],!1,u);return d}return a!==void 0?r.style(t,i,a):r.css(t,i)},e,n,1<arguments.length)}}),((r.Tween=Je).prototype={constructor:Je,init:function(e,n,t,i,a,u){this.elem=e,this.prop=t,this.easing=a||r.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=i,this.unit=u||(r.cssNumber[t]?"":"px")},cur:function(){var e=Je.propHooks[this.prop];return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var n,t=Je.propHooks[this.prop];return this.options.duration?this.pos=n=r.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=n=e,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),t&&t.set?t.set(this):Je.propHooks._default.set(this),this}}).init.prototype=Je.prototype,(Je.propHooks={_default:{get:function(e){var n;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(n=r.css(e.elem,e.prop,""))&&n!=="auto"?n:0},set:function(e){r.fx.step[e.prop]?r.fx.step[e.prop](e):e.elem.nodeType!==1||!r.cssHooks[e.prop]&&e.elem.style[zt(e.prop)]==null?e.elem[e.prop]=e.now:r.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},r.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},r.fx=Je.prototype.init,r.fx.step={};var jn,At,re,pi,Si=/^(?:toggle|show|hide)$/,qi=/queueHooks$/;function $t(){At&&(T.hidden===!1&&P.requestAnimationFrame?P.requestAnimationFrame($t):P.setTimeout($t,r.fx.interval),r.fx.tick())}function $n(){return P.setTimeout(function(){jn=void 0}),jn=Date.now()}function In(e,n){var t,i=0,a={height:e};for(n=n?1:0;i<4;i+=2-n)a["margin"+(t=mn[i])]=a["padding"+t]=e;return n&&(a.opacity=a.width=e),a}function hi(e,n,t){for(var i,a=(Ze.tweeners[n]||[]).concat(Ze.tweeners["*"]),u=0,_=a.length;u<_;u++)if(i=a[u].call(t,n,e))return i}function Ze(e,n,t){var i,a,u=0,_=Ze.prefilters.length,d=r.Deferred().always(function(){delete h.elem}),h=function(){if(a)return!1;for(var x=jn||$n(),O=Math.max(0,m.startTime+m.duration-x),j=1-(O/m.duration||0),I=0,U=m.tweens.length;I<U;I++)m.tweens[I].run(j);return d.notifyWith(e,[m,j,O]),j<1&&U?O:(U||d.notifyWith(e,[m,1,0]),d.resolveWith(e,[m]),!1)},m=d.promise({elem:e,props:r.extend({},n),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},t),originalProperties:n,originalOptions:t,startTime:jn||$n(),duration:t.duration,tweens:[],createTween:function(x,O){var j=r.Tween(e,m.opts,x,O,m.opts.specialEasing[x]||m.opts.easing);return m.tweens.push(j),j},stop:function(x){var O=0,j=x?m.tweens.length:0;if(a)return this;for(a=!0;O<j;O++)m.tweens[O].run(1);return x?(d.notifyWith(e,[m,1,0]),d.resolveWith(e,[m,x])):d.rejectWith(e,[m,x]),this}}),C=m.props;for(!function(x,O){var j,I,U,S,le;for(j in x)if(U=O[I=rn(j)],S=x[j],Array.isArray(S)&&(U=S[1],S=x[j]=S[0]),j!==I&&(x[I]=S,delete x[j]),(le=r.cssHooks[I])&&"expand"in le)for(j in S=le.expand(S),delete x[I],S)j in x||(x[j]=S[j],O[j]=U);else O[I]=U}(C,m.opts.specialEasing);u<_;u++)if(i=Ze.prefilters[u].call(m,e,C,m.opts))return z(i.stop)&&(r._queueHooks(m.elem,m.opts.queue).stop=i.stop.bind(i)),i;return r.map(C,hi,m),z(m.opts.start)&&m.opts.start.call(e,m),m.progress(m.opts.progress).done(m.opts.done,m.opts.complete).fail(m.opts.fail).always(m.opts.always),r.fx.timer(r.extend(h,{elem:e,anim:m,queue:m.opts.queue})),m}r.Animation=r.extend(Ze,{tweeners:{"*":[function(e,n){var t=this.createTween(e,n);return Mn(t.elem,e,at.exec(n),t),t}]},tweener:function(e,n){z(e)?(n=e,e=["*"]):e=e.match(Ye);for(var t,i=0,a=e.length;i<a;i++)t=e[i],Ze.tweeners[t]=Ze.tweeners[t]||[],Ze.tweeners[t].unshift(n)},prefilters:[function(e,n,t){var i,a,u,_,d,h,m,C,x="width"in n||"height"in n,O=this,j={},I=e.style,U=e.nodeType&&ut(e),S=N.get(e,"fxshow");for(i in t.queue||((_=r._queueHooks(e,"fx")).unqueued==null&&(_.unqueued=0,d=_.empty.fire,_.empty.fire=function(){_.unqueued||d()}),_.unqueued++,O.always(function(){O.always(function(){_.unqueued--,r.queue(e,"fx").length||_.empty.fire()})})),n)if(a=n[i],Si.test(a)){if(delete n[i],u=u||a==="toggle",a===(U?"hide":"show")){if(a!=="show"||!S||S[i]===void 0)continue;U=!0}j[i]=S&&S[i]||r.style(e,i)}if((h=!r.isEmptyObject(n))||!r.isEmptyObject(j))for(i in x&&e.nodeType===1&&(t.overflow=[I.overflow,I.overflowX,I.overflowY],(m=S&&S.display)==null&&(m=N.get(e,"display")),(C=r.css(e,"display"))==="none"&&(m?C=m:(sn([e],!0),m=e.style.display||m,C=r.css(e,"display"),sn([e]))),(C==="inline"||C==="inline-block"&&m!=null)&&r.css(e,"float")==="none"&&(h||(O.done(function(){I.display=m}),m==null&&(C=I.display,m=C==="none"?"":C)),I.display="inline-block")),t.overflow&&(I.overflow="hidden",O.always(function(){I.overflow=t.overflow[0],I.overflowX=t.overflow[1],I.overflowY=t.overflow[2]})),h=!1,j)h||(S?"hidden"in S&&(U=S.hidden):S=N.access(e,"fxshow",{display:m}),u&&(S.hidden=!U),U&&sn([e],!0),O.done(function(){for(i in U||sn([e]),N.remove(e,"fxshow"),j)r.style(e,i,j[i])})),h=hi(U?S[i]:0,i,O),i in S||(S[i]=h.start,U&&(h.end=h.start,h.start=0))}],prefilter:function(e,n){n?Ze.prefilters.unshift(e):Ze.prefilters.push(e)}}),r.speed=function(e,n,t){var i=e&&typeof e=="object"?r.extend({},e):{complete:t||!t&&n||z(e)&&e,duration:e,easing:t&&n||n&&!z(n)&&n};return r.fx.off?i.duration=0:typeof i.duration!="number"&&(i.duration in r.fx.speeds?i.duration=r.fx.speeds[i.duration]:i.duration=r.fx.speeds._default),i.queue!=null&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){z(i.old)&&i.old.call(this),i.queue&&r.dequeue(this,i.queue)},i},r.fn.extend({fadeTo:function(e,n,t,i){return this.filter(ut).css("opacity",0).show().end().animate({opacity:n},e,t,i)},animate:function(e,n,t,i){var a=r.isEmptyObject(e),u=r.speed(n,t,i),_=function(){var d=Ze(this,r.extend({},e),u);(a||N.get(this,"finish"))&&d.stop(!0)};return _.finish=_,a||u.queue===!1?this.each(_):this.queue(u.queue,_)},stop:function(e,n,t){var i=function(a){var u=a.stop;delete a.stop,u(t)};return typeof e!="string"&&(t=n,n=e,e=void 0),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var a=!0,u=e!=null&&e+"queueHooks",_=r.timers,d=N.get(this);if(u)d[u]&&d[u].stop&&i(d[u]);else for(u in d)d[u]&&d[u].stop&&qi.test(u)&&i(d[u]);for(u=_.length;u--;)_[u].elem!==this||e!=null&&_[u].queue!==e||(_[u].anim.stop(t),a=!1,_.splice(u,1));!a&&t||r.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var n,t=N.get(this),i=t[e+"queue"],a=t[e+"queueHooks"],u=r.timers,_=i?i.length:0;for(t.finish=!0,r.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),n=u.length;n--;)u[n].elem===this&&u[n].queue===e&&(u[n].anim.stop(!0),u.splice(n,1));for(n=0;n<_;n++)i[n]&&i[n].finish&&i[n].finish.call(this);delete t.finish})}}),r.each(["toggle","show","hide"],function(e,n){var t=r.fn[n];r.fn[n]=function(i,a,u){return i==null||typeof i=="boolean"?t.apply(this,arguments):this.animate(In(n,!0),i,a,u)}}),r.each({slideDown:In("show"),slideUp:In("hide"),slideToggle:In("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,n){r.fn[e]=function(t,i,a){return this.animate(n,t,i,a)}}),r.timers=[],r.fx.tick=function(){var e,n=0,t=r.timers;for(jn=Date.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||r.fx.stop(),jn=void 0},r.fx.timer=function(e){r.timers.push(e),r.fx.start()},r.fx.interval=13,r.fx.start=function(){At||(At=!0,$t())},r.fx.stop=function(){At=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(e,n){return e=r.fx&&r.fx.speeds[e]||e,n=n||"fx",this.queue(n,function(t,i){var a=P.setTimeout(t,e);i.stop=function(){P.clearTimeout(a)}})},re=T.createElement("input"),pi=T.createElement("select").appendChild(T.createElement("option")),re.type="checkbox",X.checkOn=re.value!=="",X.optSelected=pi.selected,(re=T.createElement("input")).value="t",re.type="radio",X.radioValue=re.value==="t";var mi,pt=r.expr.attrHandle;r.fn.extend({attr:function(e,n){return hn(this,r.attr,e,n,1<arguments.length)},removeAttr:function(e){return this.each(function(){r.removeAttr(this,e)})}}),r.extend({attr:function(e,n,t){var i,a,u=e.nodeType;if(u!==3&&u!==8&&u!==2)return typeof e.getAttribute>"u"?r.prop(e,n,t):(u===1&&r.isXMLDoc(e)||(a=r.attrHooks[n.toLowerCase()]||(r.expr.match.bool.test(n)?mi:void 0)),t!==void 0?t===null?void r.removeAttr(e,n):a&&"set"in a&&(i=a.set(e,t,n))!==void 0?i:(e.setAttribute(n,t+""),t):a&&"get"in a&&(i=a.get(e,n))!==null?i:(i=r.find.attr(e,n))==null?void 0:i)},attrHooks:{type:{set:function(e,n){if(!X.radioValue&&n==="radio"&&Ve(e,"input")){var t=e.value;return e.setAttribute("type",n),t&&(e.value=t),n}}}},removeAttr:function(e,n){var t,i=0,a=n&&n.match(Ye);if(a&&e.nodeType===1)for(;t=a[i++];)e.removeAttribute(t)}}),mi={set:function(e,n,t){return n===!1?r.removeAttr(e,t):e.setAttribute(t,t),t}},r.each(r.expr.match.bool.source.match(/\w+/g),function(e,n){var t=pt[n]||r.find.attr;pt[n]=function(i,a,u){var _,d,h=a.toLowerCase();return u||(d=pt[h],pt[h]=_,_=t(i,a,u)!=null?h:null,pt[h]=d),_}});var gi=/^(?:input|select|textarea|button)$/i,yi=/^(?:a|area)$/i;function en(e){return(e.match(Ye)||[]).join(" ")}function Ln(e){return e.getAttribute&&e.getAttribute("class")||""}function Ft(e){return Array.isArray(e)?e:typeof e=="string"&&e.match(Ye)||[]}r.fn.extend({prop:function(e,n){return hn(this,r.prop,e,n,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[r.propFix[e]||e]})}}),r.extend({prop:function(e,n,t){var i,a,u=e.nodeType;if(u!==3&&u!==8&&u!==2)return u===1&&r.isXMLDoc(e)||(n=r.propFix[n]||n,a=r.propHooks[n]),t!==void 0?a&&"set"in a&&(i=a.set(e,t,n))!==void 0?i:e[n]=t:a&&"get"in a&&(i=a.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=r.find.attr(e,"tabindex");return n?parseInt(n,10):gi.test(e.nodeName)||yi.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),X.optSelected||(r.propHooks.selected={get:function(e){var n=e.parentNode;return n&&n.parentNode&&n.parentNode.selectedIndex,null},set:function(e){var n=e.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this}),r.fn.extend({addClass:function(e){var n,t,i,a,u,_,d,h=0;if(z(e))return this.each(function(m){r(this).addClass(e.call(this,m,Ln(this)))});if((n=Ft(e)).length){for(;t=this[h++];)if(a=Ln(t),i=t.nodeType===1&&" "+en(a)+" "){for(_=0;u=n[_++];)i.indexOf(" "+u+" ")<0&&(i+=u+" ");a!==(d=en(i))&&t.setAttribute("class",d)}}return this},removeClass:function(e){var n,t,i,a,u,_,d,h=0;if(z(e))return this.each(function(m){r(this).removeClass(e.call(this,m,Ln(this)))});if(!arguments.length)return this.attr("class","");if((n=Ft(e)).length){for(;t=this[h++];)if(a=Ln(t),i=t.nodeType===1&&" "+en(a)+" "){for(_=0;u=n[_++];)for(;-1<i.indexOf(" "+u+" ");)i=i.replace(" "+u+" "," ");a!==(d=en(i))&&t.setAttribute("class",d)}}return this},toggleClass:function(e,n){var t=typeof e,i=t==="string"||Array.isArray(e);return typeof n=="boolean"&&i?n?this.addClass(e):this.removeClass(e):z(e)?this.each(function(a){r(this).toggleClass(e.call(this,a,Ln(this),n),n)}):this.each(function(){var a,u,_,d;if(i)for(u=0,_=r(this),d=Ft(e);a=d[u++];)_.hasClass(a)?_.removeClass(a):_.addClass(a);else e!==void 0&&t!=="boolean"||((a=Ln(this))&&N.set(this,"__className__",a),this.setAttribute&&this.setAttribute("class",a||e===!1?"":N.get(this,"__className__")||""))})},hasClass:function(e){var n,t,i=0;for(n=" "+e+" ";t=this[i++];)if(t.nodeType===1&&-1<(" "+en(Ln(t))+" ").indexOf(n))return!0;return!1}});var Bi=/\r/g;r.fn.extend({val:function(e){var n,t,i,a=this[0];return arguments.length?(i=z(e),this.each(function(u){var _;this.nodeType===1&&((_=i?e.call(this,u,r(this).val()):e)==null?_="":typeof _=="number"?_+="":Array.isArray(_)&&(_=r.map(_,function(d){return d==null?"":d+""})),(n=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&n.set(this,_,"value")!==void 0||(this.value=_))})):a?(n=r.valHooks[a.type]||r.valHooks[a.nodeName.toLowerCase()])&&"get"in n&&(t=n.get(a,"value"))!==void 0?t:typeof(t=a.value)=="string"?t.replace(Bi,""):t??"":void 0}}),r.extend({valHooks:{option:{get:function(e){var n=r.find.attr(e,"value");return n??en(r.text(e))}},select:{get:function(e){var n,t,i,a=e.options,u=e.selectedIndex,_=e.type==="select-one",d=_?null:[],h=_?u+1:a.length;for(i=u<0?h:_?u:0;i<h;i++)if(((t=a[i]).selected||i===u)&&!t.disabled&&(!t.parentNode.disabled||!Ve(t.parentNode,"optgroup"))){if(n=r(t).val(),_)return n;d.push(n)}return d},set:function(e,n){for(var t,i,a=e.options,u=r.makeArray(n),_=a.length;_--;)((i=a[_]).selected=-1<r.inArray(r.valHooks.option.get(i),u))&&(t=!0);return t||(e.selectedIndex=-1),u}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(e,n){if(Array.isArray(n))return e.checked=-1<r.inArray(r(e).val(),n)}},X.checkOn||(r.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})}),X.focusin="onfocusin"in P;var bi=/^(?:focusinfocus|focusoutblur)$/,Ht=function(e){e.stopPropagation()};r.extend(r.event,{trigger:function(e,n,t,i){var a,u,_,d,h,m,C,x,O=[t||T],j=ve.call(e,"type")?e.type:e,I=ve.call(e,"namespace")?e.namespace.split("."):[];if(u=x=_=t=t||T,t.nodeType!==3&&t.nodeType!==8&&!bi.test(j+r.event.triggered)&&(-1<j.indexOf(".")&&(j=(I=j.split(".")).shift(),I.sort()),h=j.indexOf(":")<0&&"on"+j,(e=e[r.expando]?e:new r.Event(j,typeof e=="object"&&e)).isTrigger=i?2:3,e.namespace=I.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+I.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=t),n=n==null?[e]:r.makeArray(n,[e]),C=r.event.special[j]||{},i||!C.trigger||C.trigger.apply(t,n)!==!1)){if(!i&&!C.noBubble&&!on(t)){for(d=C.delegateType||j,bi.test(d+j)||(u=u.parentNode);u;u=u.parentNode)O.push(u),_=u;_===(t.ownerDocument||T)&&O.push(_.defaultView||_.parentWindow||P)}for(a=0;(u=O[a++])&&!e.isPropagationStopped();)x=u,e.type=1<a?d:C.bindType||j,(m=(N.get(u,"events")||{})[e.type]&&N.get(u,"handle"))&&m.apply(u,n),(m=h&&u[h])&&m.apply&&xt(u)&&(e.result=m.apply(u,n),e.result===!1&&e.preventDefault());return e.type=j,i||e.isDefaultPrevented()||C._default&&C._default.apply(O.pop(),n)!==!1||!xt(t)||h&&z(t[j])&&!on(t)&&((_=t[h])&&(t[h]=null),r.event.triggered=j,e.isPropagationStopped()&&x.addEventListener(j,Ht),t[j](),e.isPropagationStopped()&&x.removeEventListener(j,Ht),r.event.triggered=void 0,_&&(t[h]=_)),e.result}},simulate:function(e,n,t){var i=r.extend(new r.Event,t,{type:e,isSimulated:!0});r.event.trigger(i,null,n)}}),r.fn.extend({trigger:function(e,n){return this.each(function(){r.event.trigger(e,n,this)})},triggerHandler:function(e,n){var t=this[0];if(t)return r.event.trigger(e,n,t,!0)}}),X.focusin||r.each({focus:"focusin",blur:"focusout"},function(e,n){var t=function(i){r.event.simulate(n,i.target,r.event.fix(i))};r.event.special[n]={setup:function(){var i=this.ownerDocument||this,a=N.access(i,n);a||i.addEventListener(e,t,!0),N.access(i,n,(a||0)+1)},teardown:function(){var i=this.ownerDocument||this,a=N.access(i,n)-1;a?N.access(i,n,a):(i.removeEventListener(e,t,!0),N.remove(i,n))}}});var nn=P.location,ht=Date.now(),We=/\?/;r.parseXML=function(e){var n;if(!e||typeof e!="string")return null;try{n=new P.DOMParser().parseFromString(e,"text/xml")}catch{n=void 0}return n&&!n.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+e),n};var Ui=/\[\]$/,Qt=/\r?\n/g,Wi=/^(?:submit|button|image|reset|file)$/i,Ki=/^(?:input|select|textarea|keygen)/i;function Gt(e,n,t,i){var a;if(Array.isArray(n))r.each(n,function(u,_){t||Ui.test(e)?i(e,_):Gt(e+"["+(typeof _=="object"&&_!=null?u:"")+"]",_,t,i)});else if(t||ye(n)!=="object")i(e,n);else for(a in n)Gt(e+"["+a+"]",n[a],t,i)}r.param=function(e,n){var t,i=[],a=function(u,_){var d=z(_)?_():_;i[i.length]=encodeURIComponent(u)+"="+encodeURIComponent(d??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!r.isPlainObject(e))r.each(e,function(){a(this.name,this.value)});else for(t in e)Gt(t,e[t],n,a);return i.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=r.prop(this,"elements");return e?r.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!r(this).is(":disabled")&&Ki.test(this.nodeName)&&!Wi.test(e)&&(this.checked||!_t.test(e))}).map(function(e,n){var t=r(this).val();return t==null?null:Array.isArray(t)?r.map(t,function(i){return{name:n.name,value:i.replace(Qt,`\r
`)}}):{name:n.name,value:t.replace(Qt,`\r
`)}}).get()}});var Ni=/%20/g,zi=/#.*$/,mt=/([?&])_=[^&]*/,Vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fi=/^(?:GET|HEAD)$/,gt=/^\/\//,Jn={},Yt={},vi="*/".concat("*"),Sn=T.createElement("a");function It(e){return function(n,t){typeof n!="string"&&(t=n,n="*");var i,a=0,u=n.toLowerCase().match(Ye)||[];if(z(t))for(;i=u[a++];)i[0]==="+"?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(t)):(e[i]=e[i]||[]).push(t)}}function Ei(e,n,t,i){var a={},u=e===Yt;function _(d){var h;return a[d]=!0,r.each(e[d]||[],function(m,C){var x=C(n,t,i);return typeof x!="string"||u||a[x]?u?!(h=x):void 0:(n.dataTypes.unshift(x),_(x),!1)}),h}return _(n.dataTypes[0])||!a["*"]&&_("*")}function Xt(e,n){var t,i,a=r.ajaxSettings.flatOptions||{};for(t in n)n[t]!==void 0&&((a[t]?e:i||(i={}))[t]=n[t]);return i&&r.extend(!0,e,i),e}Sn.href=nn.href,r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:nn.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":vi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,n){return n?Xt(Xt(e,r.ajaxSettings),n):Xt(r.ajaxSettings,e)},ajaxPrefilter:It(Jn),ajaxTransport:It(Yt),ajax:function(e,n){typeof e=="object"&&(n=e,e=void 0),n=n||{};var t,i,a,u,_,d,h,m,C,x,O=r.ajaxSetup({},n),j=O.context||O,I=O.context&&(j.nodeType||j.jquery)?r(j):r.event,U=r.Deferred(),S=r.Callbacks("once memory"),le=O.statusCode||{},de={},Ce={},ne="canceled",H={readyState:0,getResponseHeader:function(J){var ue;if(h){if(!u)for(u={};ue=Vt.exec(a);)u[ue[1].toLowerCase()+" "]=(u[ue[1].toLowerCase()+" "]||[]).concat(ue[2]);ue=u[J.toLowerCase()+" "]}return ue==null?null:ue.join(", ")},getAllResponseHeaders:function(){return h?a:null},setRequestHeader:function(J,ue){return h==null&&(J=Ce[J.toLowerCase()]=Ce[J.toLowerCase()]||J,de[J]=ue),this},overrideMimeType:function(J){return h==null&&(O.mimeType=J),this},statusCode:function(J){var ue;if(J)if(h)H.always(J[H.status]);else for(ue in J)le[ue]=[le[ue],J[ue]];return this},abort:function(J){var ue=J||ne;return t&&t.abort(ue),Me(0,ue),this}};if(U.promise(H),O.url=((e||O.url||nn.href)+"").replace(gt,nn.protocol+"//"),O.type=n.method||n.type||O.method||O.type,O.dataTypes=(O.dataType||"*").toLowerCase().match(Ye)||[""],O.crossDomain==null){d=T.createElement("a");try{d.href=O.url,d.href=d.href,O.crossDomain=Sn.protocol+"//"+Sn.host!=d.protocol+"//"+d.host}catch{O.crossDomain=!0}}if(O.data&&O.processData&&typeof O.data!="string"&&(O.data=r.param(O.data,O.traditional)),Ei(Jn,O,n,H),h)return H;for(C in(m=r.event&&O.global)&&r.active++==0&&r.event.trigger("ajaxStart"),O.type=O.type.toUpperCase(),O.hasContent=!Fi.test(O.type),i=O.url.replace(zi,""),O.hasContent?O.data&&O.processData&&(O.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(O.data=O.data.replace(Ni,"+")):(x=O.url.slice(i.length),O.data&&(O.processData||typeof O.data=="string")&&(i+=(We.test(i)?"&":"?")+O.data,delete O.data),O.cache===!1&&(i=i.replace(mt,"$1"),x=(We.test(i)?"&":"?")+"_="+ht+++x),O.url=i+x),O.ifModified&&(r.lastModified[i]&&H.setRequestHeader("If-Modified-Since",r.lastModified[i]),r.etag[i]&&H.setRequestHeader("If-None-Match",r.etag[i])),(O.data&&O.hasContent&&O.contentType!==!1||n.contentType)&&H.setRequestHeader("Content-Type",O.contentType),H.setRequestHeader("Accept",O.dataTypes[0]&&O.accepts[O.dataTypes[0]]?O.accepts[O.dataTypes[0]]+(O.dataTypes[0]!=="*"?", "+vi+"; q=0.01":""):O.accepts["*"]),O.headers)H.setRequestHeader(C,O.headers[C]);if(O.beforeSend&&(O.beforeSend.call(j,H,O)===!1||h))return H.abort();if(ne="abort",S.add(O.complete),H.done(O.success),H.fail(O.error),t=Ei(Yt,O,n,H)){if(H.readyState=1,m&&I.trigger("ajaxSend",[H,O]),h)return H;O.async&&0<O.timeout&&(_=P.setTimeout(function(){H.abort("timeout")},O.timeout));try{h=!1,t.send(de,Me)}catch(J){if(h)throw J;Me(-1,J)}}else Me(-1,"No Transport");function Me(J,ue,bt,vt){var we,un,_n,ke,cn,He=ue;h||(h=!0,_&&P.clearTimeout(_),t=void 0,a=vt||"",H.readyState=0<J?4:0,we=200<=J&&J<300||J===304,bt&&(ke=function(ie,Ke,Re){for(var tn,V,ee,fe,Ae=ie.contents,pe=ie.dataTypes;pe[0]==="*";)pe.shift(),tn===void 0&&(tn=ie.mimeType||Ke.getResponseHeader("Content-Type"));if(tn){for(V in Ae)if(Ae[V]&&Ae[V].test(tn)){pe.unshift(V);break}}if(pe[0]in Re)ee=pe[0];else{for(V in Re){if(!pe[0]||ie.converters[V+" "+pe[0]]){ee=V;break}fe||(fe=V)}ee=ee||fe}if(ee)return ee!==pe[0]&&pe.unshift(ee),Re[ee]}(O,H,bt)),ke=function(ie,Ke,Re,tn){var V,ee,fe,Ae,pe,Ne={},Zn=ie.dataTypes.slice();if(Zn[1])for(fe in ie.converters)Ne[fe.toLowerCase()]=ie.converters[fe];for(ee=Zn.shift();ee;)if(ie.responseFields[ee]&&(Re[ie.responseFields[ee]]=Ke),!pe&&tn&&ie.dataFilter&&(Ke=ie.dataFilter(Ke,ie.dataType)),pe=ee,ee=Zn.shift()){if(ee==="*")ee=pe;else if(pe!=="*"&&pe!==ee){if(!(fe=Ne[pe+" "+ee]||Ne["* "+ee])){for(V in Ne)if((Ae=V.split(" "))[1]===ee&&(fe=Ne[pe+" "+Ae[0]]||Ne["* "+Ae[0]])){fe===!0?fe=Ne[V]:Ne[V]!==!0&&(ee=Ae[0],Zn.unshift(Ae[1]));break}}if(fe!==!0)if(fe&&ie.throws)Ke=fe(Ke);else try{Ke=fe(Ke)}catch(Bn){return{state:"parsererror",error:fe?Bn:"No conversion from "+pe+" to "+ee}}}}return{state:"success",data:Ke}}(O,ke,H,we),we?(O.ifModified&&((cn=H.getResponseHeader("Last-Modified"))&&(r.lastModified[i]=cn),(cn=H.getResponseHeader("etag"))&&(r.etag[i]=cn)),J===204||O.type==="HEAD"?He="nocontent":J===304?He="notmodified":(He=ke.state,un=ke.data,we=!(_n=ke.error))):(_n=He,!J&&He||(He="error",J<0&&(J=0))),H.status=J,H.statusText=(ue||He)+"",we?U.resolveWith(j,[un,He,H]):U.rejectWith(j,[H,He,_n]),H.statusCode(le),le=void 0,m&&I.trigger(we?"ajaxSuccess":"ajaxError",[H,O,we?un:_n]),S.fireWith(j,[H,He]),m&&(I.trigger("ajaxComplete",[H,O]),--r.active||r.event.trigger("ajaxStop")))}return H},getJSON:function(e,n,t){return r.get(e,n,t,"json")},getScript:function(e,n){return r.get(e,void 0,n,"script")}}),r.each(["get","post"],function(e,n){r[n]=function(t,i,a,u){return z(i)&&(u=u||a,a=i,i=void 0),r.ajax(r.extend({url:t,type:n,dataType:u,data:i,success:a},r.isPlainObject(t)&&t))}}),r._evalUrl=function(e,n){return r.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){r.globalEval(t,n)}})},r.fn.extend({wrapAll:function(e){var n;return this[0]&&(z(e)&&(e=e.call(this[0])),n=r(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(e){return z(e)?this.each(function(n){r(this).wrapInner(e.call(this,n))}):this.each(function(){var n=r(this),t=n.contents();t.length?t.wrapAll(e):n.append(e)})},wrap:function(e){var n=z(e);return this.each(function(t){r(this).wrapAll(n?e.call(this,t):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(e){return!r.expr.pseudos.visible(e)},r.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new P.XMLHttpRequest}catch{}};var qn={0:200,1223:204},ln=r.ajaxSettings.xhr();X.cors=!!ln&&"withCredentials"in ln,X.ajax=ln=!!ln,r.ajaxTransport(function(e){var n,t;if(X.cors||ln&&!e.crossDomain)return{send:function(i,a){var u,_=e.xhr();if(_.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(u in e.xhrFields)_[u]=e.xhrFields[u];for(u in e.mimeType&&_.overrideMimeType&&_.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)_.setRequestHeader(u,i[u]);n=function(d){return function(){n&&(n=t=_.onload=_.onerror=_.onabort=_.ontimeout=_.onreadystatechange=null,d==="abort"?_.abort():d==="error"?typeof _.status!="number"?a(0,"error"):a(_.status,_.statusText):a(qn[_.status]||_.status,_.statusText,(_.responseType||"text")!=="text"||typeof _.responseText!="string"?{binary:_.response}:{text:_.responseText},_.getAllResponseHeaders()))}},_.onload=n(),t=_.onerror=_.ontimeout=n("error"),_.onabort!==void 0?_.onabort=t:_.onreadystatechange=function(){_.readyState===4&&P.setTimeout(function(){n&&t()})},n=n("abort");try{_.send(e.hasContent&&e.data||null)}catch(d){if(n)throw d}},abort:function(){n&&n()}}}),r.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return r.globalEval(e),e}}}),r.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),r.ajaxTransport("script",function(e){var n,t;if(e.crossDomain||e.scriptAttrs)return{send:function(i,a){n=r("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",t=function(u){n.remove(),t=null,u&&a(u.type==="error"?404:200,u.type)}),T.head.appendChild(n[0])},abort:function(){t&&t()}}});var yt,Fe=[],Jt=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fe.pop()||r.expando+"_"+ht++;return this[e]=!0,e}}),r.ajaxPrefilter("json jsonp",function(e,n,t){var i,a,u,_=e.jsonp!==!1&&(Jt.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Jt.test(e.data)&&"data");if(_||e.dataTypes[0]==="jsonp")return i=e.jsonpCallback=z(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,_?e[_]=e[_].replace(Jt,"$1"+i):e.jsonp!==!1&&(e.url+=(We.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return u||r.error(i+" was not called"),u[0]},e.dataTypes[0]="json",a=P[i],P[i]=function(){u=arguments},t.always(function(){a===void 0?r(P).removeProp(i):P[i]=a,e[i]&&(e.jsonpCallback=n.jsonpCallback,Fe.push(i)),u&&z(a)&&a(u[0]),u=a=void 0}),"script"}),X.createHTMLDocument=((yt=T.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",yt.childNodes.length===2),r.parseHTML=function(e,n,t){return typeof e!="string"?[]:(typeof n=="boolean"&&(t=n,n=!1),n||(X.createHTMLDocument?((i=(n=T.implementation.createHTMLDocument("")).createElement("base")).href=T.location.href,n.head.appendChild(i)):n=T),u=!t&&[],(a=ni.exec(e))?[n.createElement(a[1])]:(a=si([e],n,u),u&&u.length&&r(u).remove(),r.merge([],a.childNodes)));var i,a,u},r.fn.load=function(e,n,t){var i,a,u,_=this,d=e.indexOf(" ");return-1<d&&(i=en(e.slice(d)),e=e.slice(0,d)),z(n)?(t=n,n=void 0):n&&typeof n=="object"&&(a="POST"),0<_.length&&r.ajax({url:e,type:a||"GET",dataType:"html",data:n}).done(function(h){u=arguments,_.html(i?r("<div>").append(r.parseHTML(h)).find(i):h)}).always(t&&function(h,m){_.each(function(){t.apply(this,u||[h.responseText,m,h])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){r.fn[n]=function(t){return this.on(n,t)}}),r.expr.pseudos.animated=function(e){return r.grep(r.timers,function(n){return e===n.elem}).length},r.offset={setOffset:function(e,n,t){var i,a,u,_,d,h,m=r.css(e,"position"),C=r(e),x={};m==="static"&&(e.style.position="relative"),d=C.offset(),u=r.css(e,"top"),h=r.css(e,"left"),(m==="absolute"||m==="fixed")&&-1<(u+h).indexOf("auto")?(_=(i=C.position()).top,a=i.left):(_=parseFloat(u)||0,a=parseFloat(h)||0),z(n)&&(n=n.call(e,t,r.extend({},d))),n.top!=null&&(x.top=n.top-d.top+_),n.left!=null&&(x.left=n.left-d.left+a),"using"in n?n.using.call(e,x):C.css(x)}},r.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(a){r.offset.setOffset(this,e,a)});var n,t,i=this[0];return i?i.getClientRects().length?(n=i.getBoundingClientRect(),t=i.ownerDocument.defaultView,{top:n.top+t.pageYOffset,left:n.left+t.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,n,t,i=this[0],a={top:0,left:0};if(r.css(i,"position")==="fixed")n=i.getBoundingClientRect();else{for(n=this.offset(),t=i.ownerDocument,e=i.offsetParent||t.documentElement;e&&(e===t.body||e===t.documentElement)&&r.css(e,"position")==="static";)e=e.parentNode;e&&e!==i&&e.nodeType===1&&((a=r(e).offset()).top+=r.css(e,"borderTopWidth",!0),a.left+=r.css(e,"borderLeftWidth",!0))}return{top:n.top-a.top-r.css(i,"marginTop",!0),left:n.left-a.left-r.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&r.css(e,"position")==="static";)e=e.offsetParent;return e||lt})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var t=n==="pageYOffset";r.fn[e]=function(i){return hn(this,function(a,u,_){var d;if(on(a)?d=a:a.nodeType===9&&(d=a.defaultView),_===void 0)return d?d[n]:a[u];d?d.scrollTo(t?d.pageXOffset:_,t?_:d.pageYOffset):a[u]=_},e,i,arguments.length)}}),r.each(["top","left"],function(e,n){r.cssHooks[n]=ui(X.pixelPosition,function(t,i){if(i)return i=ft(t,n),Nt.test(i)?r(t).position()[n]+"px":i})}),r.each({Height:"height",Width:"width"},function(e,n){r.each({padding:"inner"+e,content:n,"":"outer"+e},function(t,i){r.fn[i]=function(a,u){var _=arguments.length&&(t||typeof a!="boolean"),d=t||(a===!0||u===!0?"margin":"border");return hn(this,function(h,m,C){var x;return on(h)?i.indexOf("outer")===0?h["inner"+e]:h.document.documentElement["client"+e]:h.nodeType===9?(x=h.documentElement,Math.max(h.body["scroll"+e],x["scroll"+e],h.body["offset"+e],x["offset"+e],x["client"+e])):C===void 0?r.css(h,m,d):r.style(h,m,C,d)},n,_?a:void 0,_)}})}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){r.fn[n]=function(t,i){return 0<arguments.length?this.on(n,null,t,i):this.trigger(n)}}),r.fn.extend({hover:function(e,n){return this.mouseenter(e).mouseleave(n||e)}}),r.fn.extend({bind:function(e,n,t){return this.on(e,null,n,t)},unbind:function(e,n){return this.off(e,null,n)},delegate:function(e,n,t,i){return this.on(n,e,t,i)},undelegate:function(e,n,t){return arguments.length===1?this.off(e,"**"):this.off(n,e||"**",t)}}),r.proxy=function(e,n){var t,i,a;if(typeof n=="string"&&(t=e[n],n=e,e=t),z(e))return i=W.call(arguments,2),(a=function(){return e.apply(n||this,i.concat(W.call(arguments)))}).guid=e.guid=e.guid||r.guid++,a},r.holdReady=function(e){e?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=Ve,r.isFunction=z,r.isWindow=on,r.camelCase=rn,r.type=ye,r.now=Date.now,r.isNumeric=function(e){var n=r.type(e);return(n==="number"||n==="string")&&!isNaN(e-parseFloat(e))},typeof define=="function"&&define.amd&&define("jquery",[],function(){return r});var wi=P.jQuery,Hi=P.$;return r.noConflict=function(e){return P.$===r&&(P.$=Hi),e&&P.jQuery===r&&(P.jQuery=wi),r},s||(P.jQuery=P.$=r),r});/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */(function(P,s){typeof exports$1=="object"&&typeof module$1<"u"?s(exports$1,jQuery||__CJS__import__0__,Popper||__CJS__import__1__):typeof define=="function"&&define.amd?define(["exports","jquery","popper.js"],s):s((P=P||self).bootstrap={},P.jQuery,P.Popper)})(void 0,function(P,s,R){function T(E,y){for(var o=0;o<y.length;o++){var l=y[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(E,l.key,l)}}function q(E,y,o){return o&&T(E,o),E}function W(E){for(var y=1;y<arguments.length;y++){var o=arguments[y]!=null?arguments[y]:{},l=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(o).filter(function(f){return Object.getOwnPropertyDescriptor(o,f).enumerable}))),l.forEach(function(f){var b,w,B;b=E,B=o[w=f],w in b?Object.defineProperty(b,w,{value:B,enumerable:!0,configurable:!0,writable:!0}):b[w]=B})}return E}s=s&&s.hasOwnProperty("default")?s.default:s,R=R&&R.hasOwnProperty("default")?R.default:R;var _e="transitionend";function ae(E){var y=this,o=!1;return s(this).one($.TRANSITION_END,function(){o=!0}),setTimeout(function(){o||$.triggerTransitionEnd(y)},E),this}var $={TRANSITION_END:"bsTransitionEnd",getUID:function(E){for(;E+=~~(1e6*Math.random()),document.getElementById(E););return E},getSelectorFromElement:function(E){var y=E.getAttribute("data-target");if(!y||y==="#"){var o=E.getAttribute("href");y=o&&o!=="#"?o.trim():""}try{return document.querySelector(y)?y:null}catch{return null}},getTransitionDurationFromElement:function(E){if(!E)return 0;var y=s(E).css("transition-duration"),o=s(E).css("transition-delay"),l=parseFloat(y),f=parseFloat(o);return l||f?(y=y.split(",")[0],o=o.split(",")[0],1e3*(parseFloat(y)+parseFloat(o))):0},reflow:function(E){return E.offsetHeight},triggerTransitionEnd:function(E){s(E).trigger(_e)},supportsTransitionEnd:function(){return!!_e},isElement:function(E){return(E[0]||E).nodeType},typeCheckConfig:function(E,y,o){for(var l in o)if(Object.prototype.hasOwnProperty.call(o,l)){var f=o[l],b=y[l],w=b&&$.isElement(b)?"element":(B=b,{}.toString.call(B).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(f).test(w))throw new Error(E.toUpperCase()+': Option "'+l+'" provided type "'+w+'" but expected type "'+f+'".')}var B},findShadowRoot:function(E){if(!document.documentElement.attachShadow)return null;if(typeof E.getRootNode!="function")return E instanceof ShadowRoot?E:E.parentNode?$.findShadowRoot(E.parentNode):null;var y=E.getRootNode();return y instanceof ShadowRoot?y:null}};s.fn.emulateTransitionEnd=ae,s.event.special[$.TRANSITION_END]={bindType:_e,delegateType:_e,handle:function(E){if(s(E.target).is(this))return E.handleObj.handler.apply(this,arguments)}};var ge="alert",De="bs.alert",ve="."+De,wn=s.fn[ge],Dn={CLOSE:"close"+ve,CLOSED:"closed"+ve,CLICK_DATA_API:"click"+ve+".data-api"},X="alert",z="fade",on="show",Qe=function(){function E(o){this._element=o}var y=E.prototype;return y.close=function(o){var l=this._element;o&&(l=this._getRootElement(o)),this._triggerCloseEvent(l).isDefaultPrevented()||this._removeElement(l)},y.dispose=function(){s.removeData(this._element,De),this._element=null},y._getRootElement=function(o){var l=$.getSelectorFromElement(o),f=!1;return l&&(f=document.querySelector(l)),f||(f=s(o).closest("."+X)[0]),f},y._triggerCloseEvent=function(o){var l=s.Event(Dn.CLOSE);return s(o).trigger(l),l},y._removeElement=function(o){var l=this;if(s(o).removeClass(on),s(o).hasClass(z)){var f=$.getTransitionDurationFromElement(o);s(o).one($.TRANSITION_END,function(b){return l._destroyElement(o,b)}).emulateTransitionEnd(f)}else this._destroyElement(o)},y._destroyElement=function(o){s(o).detach().trigger(Dn.CLOSED).remove()},E._jQueryInterface=function(o){return this.each(function(){var l=s(this),f=l.data(De);f||(f=new E(this),l.data(De,f)),o==="close"&&f[o](this)})},E._handleDismiss=function(o){return function(l){l&&l.preventDefault(),o.close(this)}},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),E}();s(document).on(Dn.CLICK_DATA_API,'[data-dismiss="alert"]',Qe._handleDismiss(new Qe)),s.fn[ge]=Qe._jQueryInterface,s.fn[ge].Constructor=Qe,s.fn[ge].noConflict=function(){return s.fn[ge]=wn,Qe._jQueryInterface};var qe="button",ye="bs.button",Wn="."+ye,r=".data-api",Ut=s.fn[qe],fn="active",pn="btn",Ge="focus",Kn='[data-toggle^="button"]',ei='[data-toggle="buttons"]',Ve='input:not([type="hidden"])',ni=".active",jt=".btn",Wt={CLICK_DATA_API:"click"+Wn+r,FOCUS_BLUR_DATA_API:"focus"+Wn+r+" blur"+Wn+r},ot=function(){function E(o){this._element=o}var y=E.prototype;return y.toggle=function(){var o=!0,l=!0,f=s(this._element).closest(ei)[0];if(f){var b=this._element.querySelector(Ve);if(b){if(b.type==="radio")if(b.checked&&this._element.classList.contains(fn))o=!1;else{var w=f.querySelector(ni);w&&s(w).removeClass(fn)}if(o){if(b.hasAttribute("disabled")||f.hasAttribute("disabled")||b.classList.contains("disabled")||f.classList.contains("disabled"))return;b.checked=!this._element.classList.contains(fn),s(b).trigger("change")}b.focus(),l=!1}}l&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(fn)),o&&s(this._element).toggleClass(fn)},y.dispose=function(){s.removeData(this._element,ye),this._element=null},E._jQueryInterface=function(o){return this.each(function(){var l=s(this).data(ye);l||(l=new E(this),s(this).data(ye,l)),o==="toggle"&&l[o]()})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),E}();s(document).on(Wt.CLICK_DATA_API,Kn,function(E){E.preventDefault();var y=E.target;s(y).hasClass(pn)||(y=s(y).closest(jt)),ot._jQueryInterface.call(s(y),"toggle")}).on(Wt.FOCUS_BLUR_DATA_API,Kn,function(E){var y=s(E.target).closest(jt)[0];s(y).toggleClass(Ge,/^focus(in)?$/.test(E.type))}),s.fn[qe]=ot._jQueryInterface,s.fn[qe].Constructor=ot,s.fn[qe].noConflict=function(){return s.fn[qe]=Ut,ot._jQueryInterface};var Nn="carousel",rt="bs.carousel",Pe="."+rt,Ye=".data-api",zn=s.fn[Nn],Fn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},ti={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ct="next",Hn="prev",Dt="left",hn="right",xe={SLIDE:"slide"+Pe,SLID:"slid"+Pe,KEYDOWN:"keydown"+Pe,MOUSEENTER:"mouseenter"+Pe,MOUSELEAVE:"mouseleave"+Pe,TOUCHSTART:"touchstart"+Pe,TOUCHMOVE:"touchmove"+Pe,TOUCHEND:"touchend"+Pe,POINTERDOWN:"pointerdown"+Pe,POINTERUP:"pointerup"+Pe,DRAG_START:"dragstart"+Pe,LOAD_DATA_API:"load"+Pe+Ye,CLICK_DATA_API:"click"+Pe+Ye},Ci="carousel",xn="active",rn="slide",xt="carousel-item-right",st="carousel-item-left",N="carousel-item-next",Te="carousel-item-prev",Di="pointer-event",xi=".active",Tt=".active.carousel-item",ii=".carousel-item",at=".carousel-item img",mn=".carousel-item-next, .carousel-item-prev",lt=".carousel-indicators",Qn="[data-slide], [data-slide-to]",Ti='[data-ride="carousel"]',ut={TOUCH:"touch",PEN:"pen"},Tn=function(){function E(o,l){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(l),this._element=o,this._indicatorsElement=this._element.querySelector(lt),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var y=E.prototype;return y.next=function(){this._isSliding||this._slide(Ct)},y.nextWhenVisible=function(){!document.hidden&&s(this._element).is(":visible")&&s(this._element).css("visibility")!=="hidden"&&this.next()},y.prev=function(){this._isSliding||this._slide(Hn)},y.pause=function(o){o||(this._isPaused=!0),this._element.querySelector(mn)&&($.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},y.cycle=function(o){o||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},y.to=function(o){var l=this;this._activeElement=this._element.querySelector(Tt);var f=this._getItemIndex(this._activeElement);if(!(o>this._items.length-1||o<0))if(this._isSliding)s(this._element).one(xe.SLID,function(){return l.to(o)});else{if(f===o)return this.pause(),void this.cycle();var b=f<o?Ct:Hn;this._slide(b,this._items[o])}},y.dispose=function(){s(this._element).off(Pe),s.removeData(this._element,rt),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},y._getConfig=function(o){return o=W({},Fn,o),$.typeCheckConfig(Nn,o,ti),o},y._handleSwipe=function(){var o=Math.abs(this.touchDeltaX);if(!(o<=40)){var l=o/this.touchDeltaX;0<l&&this.prev(),l<0&&this.next()}},y._addEventListeners=function(){var o=this;this._config.keyboard&&s(this._element).on(xe.KEYDOWN,function(l){return o._keydown(l)}),this._config.pause==="hover"&&s(this._element).on(xe.MOUSEENTER,function(l){return o.pause(l)}).on(xe.MOUSELEAVE,function(l){return o.cycle(l)}),this._config.touch&&this._addTouchEventListeners()},y._addTouchEventListeners=function(){var o=this;if(this._touchSupported){var l=function(b){o._pointerEvent&&ut[b.originalEvent.pointerType.toUpperCase()]?o.touchStartX=b.originalEvent.clientX:o._pointerEvent||(o.touchStartX=b.originalEvent.touches[0].clientX)},f=function(b){o._pointerEvent&&ut[b.originalEvent.pointerType.toUpperCase()]&&(o.touchDeltaX=b.originalEvent.clientX-o.touchStartX),o._handleSwipe(),o._config.pause==="hover"&&(o.pause(),o.touchTimeout&&clearTimeout(o.touchTimeout),o.touchTimeout=setTimeout(function(w){return o.cycle(w)},500+o._config.interval))};s(this._element.querySelectorAll(at)).on(xe.DRAG_START,function(b){return b.preventDefault()}),this._pointerEvent?(s(this._element).on(xe.POINTERDOWN,function(b){return l(b)}),s(this._element).on(xe.POINTERUP,function(b){return f(b)}),this._element.classList.add(Di)):(s(this._element).on(xe.TOUCHSTART,function(b){return l(b)}),s(this._element).on(xe.TOUCHMOVE,function(b){var w;(w=b).originalEvent.touches&&1<w.originalEvent.touches.length?o.touchDeltaX=0:o.touchDeltaX=w.originalEvent.touches[0].clientX-o.touchStartX}),s(this._element).on(xe.TOUCHEND,function(b){return f(b)}))}},y._keydown=function(o){if(!/input|textarea/i.test(o.target.tagName))switch(o.which){case 37:o.preventDefault(),this.prev();break;case 39:o.preventDefault(),this.next()}},y._getItemIndex=function(o){return this._items=o&&o.parentNode?[].slice.call(o.parentNode.querySelectorAll(ii)):[],this._items.indexOf(o)},y._getItemByDirection=function(o,l){var f=o===Ct,b=o===Hn,w=this._getItemIndex(l),B=this._items.length-1;if((b&&w===0||f&&w===B)&&!this._config.wrap)return l;var K=(w+(o===Hn?-1:1))%this._items.length;return K===-1?this._items[this._items.length-1]:this._items[K]},y._triggerSlideEvent=function(o,l){var f=this._getItemIndex(o),b=this._getItemIndex(this._element.querySelector(Tt)),w=s.Event(xe.SLIDE,{relatedTarget:o,direction:l,from:b,to:f});return s(this._element).trigger(w),w},y._setActiveIndicatorElement=function(o){if(this._indicatorsElement){var l=[].slice.call(this._indicatorsElement.querySelectorAll(xi));s(l).removeClass(xn);var f=this._indicatorsElement.children[this._getItemIndex(o)];f&&s(f).addClass(xn)}},y._slide=function(o,l){var f,b,w,B=this,K=this._element.querySelector(Tt),oe=this._getItemIndex(K),te=l||K&&this._getItemByDirection(o,K),$e=this._getItemIndex(te),Ie=!!this._interval;if(w=o===Ct?(f=st,b=N,Dt):(f=xt,b=Te,hn),te&&s(te).hasClass(xn))this._isSliding=!1;else if(!this._triggerSlideEvent(te,w).isDefaultPrevented()&&K&&te){this._isSliding=!0,Ie&&this.pause(),this._setActiveIndicatorElement(te);var Le=s.Event(xe.SLID,{relatedTarget:te,direction:w,from:oe,to:$e});if(s(this._element).hasClass(rn)){s(te).addClass(b),$.reflow(te),s(K).addClass(f),s(te).addClass(f);var Ot=parseInt(te.getAttribute("data-interval"),10);this._config.interval=Ot?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,Ot):this._config.defaultInterval||this._config.interval;var Un=$.getTransitionDurationFromElement(K);s(K).one($.TRANSITION_END,function(){s(te).removeClass(f+" "+b).addClass(xn),s(K).removeClass(xn+" "+b+" "+f),B._isSliding=!1,setTimeout(function(){return s(B._element).trigger(Le)},0)}).emulateTransitionEnd(Un)}else s(K).removeClass(xn),s(te).addClass(xn),this._isSliding=!1,s(this._element).trigger(Le);Ie&&this.cycle()}},E._jQueryInterface=function(o){return this.each(function(){var l=s(this).data(rt),f=W({},Fn,s(this).data());typeof o=="object"&&(f=W({},f,o));var b=typeof o=="string"?o:f.slide;if(l||(l=new E(this,f),s(this).data(rt,l)),typeof o=="number")l.to(o);else if(typeof b=="string"){if(typeof l[b]>"u")throw new TypeError('No method named "'+b+'"');l[b]()}else f.interval&&f.ride&&(l.pause(),l.cycle())})},E._dataApiClickHandler=function(o){var l=$.getSelectorFromElement(this);if(l){var f=s(l)[0];if(f&&s(f).hasClass(Ci)){var b=W({},s(f).data(),s(this).data()),w=this.getAttribute("data-slide-to");w&&(b.interval=!1),E._jQueryInterface.call(s(f),b),w&&s(f).data(rt).to(w),o.preventDefault()}}},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Fn}}]),E}();s(document).on(xe.CLICK_DATA_API,Qn,Tn._dataApiClickHandler),s(window).on(xe.LOAD_DATA_API,function(){for(var E=[].slice.call(document.querySelectorAll(Ti)),y=0,o=E.length;y<o;y++){var l=s(E[y]);Tn._jQueryInterface.call(l,l.data())}}),s.fn[Nn]=Tn._jQueryInterface,s.fn[Nn].Constructor=Tn,s.fn[Nn].noConflict=function(){return s.fn[Nn]=zn,Tn._jQueryInterface};var Mn="collapse",On="bs.collapse",sn="."+On,_t=s.fn[Mn],Mt={toggle:!0,parent:""},oi={toggle:"boolean",parent:"(string|element)"},Ee={SHOW:"show"+sn,SHOWN:"shown"+sn,HIDE:"hide"+sn,HIDDEN:"hidden"+sn,CLICK_DATA_API:"click"+sn+".data-api"},ce="show",kn="collapse",Pn="collapsing",Gn="collapsed",ri="width",si="height",Mi=".show, .collapsing",ai='[data-toggle="collapse"]',Vn=function(){function E(o,l){this._isTransitioning=!1,this._element=o,this._config=this._getConfig(l),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+o.id+'"],[data-toggle="collapse"][data-target="#'+o.id+'"]'));for(var f=[].slice.call(document.querySelectorAll(ai)),b=0,w=f.length;b<w;b++){var B=f[b],K=$.getSelectorFromElement(B),oe=[].slice.call(document.querySelectorAll(K)).filter(function(te){return te===o});K!==null&&0<oe.length&&(this._selector=K,this._triggerArray.push(B))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var y=E.prototype;return y.toggle=function(){s(this._element).hasClass(ce)?this.hide():this.show()},y.show=function(){var o,l,f=this;if(!this._isTransitioning&&!s(this._element).hasClass(ce)&&(this._parent&&(o=[].slice.call(this._parent.querySelectorAll(Mi)).filter(function(oe){return typeof f._config.parent=="string"?oe.getAttribute("data-parent")===f._config.parent:oe.classList.contains(kn)})).length===0&&(o=null),!(o&&(l=s(o).not(this._selector).data(On))&&l._isTransitioning))){var b=s.Event(Ee.SHOW);if(s(this._element).trigger(b),!b.isDefaultPrevented()){o&&(E._jQueryInterface.call(s(o).not(this._selector),"hide"),l||s(o).data(On,null));var w=this._getDimension();s(this._element).removeClass(kn).addClass(Pn),this._element.style[w]=0,this._triggerArray.length&&s(this._triggerArray).removeClass(Gn).attr("aria-expanded",!0),this.setTransitioning(!0);var B="scroll"+(w[0].toUpperCase()+w.slice(1)),K=$.getTransitionDurationFromElement(this._element);s(this._element).one($.TRANSITION_END,function(){s(f._element).removeClass(Pn).addClass(kn).addClass(ce),f._element.style[w]="",f.setTransitioning(!1),s(f._element).trigger(Ee.SHOWN)}).emulateTransitionEnd(K),this._element.style[w]=this._element[B]+"px"}}},y.hide=function(){var o=this;if(!this._isTransitioning&&s(this._element).hasClass(ce)){var l=s.Event(Ee.HIDE);if(s(this._element).trigger(l),!l.isDefaultPrevented()){var f=this._getDimension();this._element.style[f]=this._element.getBoundingClientRect()[f]+"px",$.reflow(this._element),s(this._element).addClass(Pn).removeClass(kn).removeClass(ce);var b=this._triggerArray.length;if(0<b)for(var w=0;w<b;w++){var B=this._triggerArray[w],K=$.getSelectorFromElement(B);K!==null&&(s([].slice.call(document.querySelectorAll(K))).hasClass(ce)||s(B).addClass(Gn).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[f]="";var oe=$.getTransitionDurationFromElement(this._element);s(this._element).one($.TRANSITION_END,function(){o.setTransitioning(!1),s(o._element).removeClass(Pn).addClass(kn).trigger(Ee.HIDDEN)}).emulateTransitionEnd(oe)}}},y.setTransitioning=function(o){this._isTransitioning=o},y.dispose=function(){s.removeData(this._element,On),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},y._getConfig=function(o){return(o=W({},Mt,o)).toggle=!!o.toggle,$.typeCheckConfig(Mn,o,oi),o},y._getDimension=function(){return s(this._element).hasClass(ri)?ri:si},y._getParent=function(){var o,l=this;$.isElement(this._config.parent)?(o=this._config.parent,typeof this._config.parent.jquery<"u"&&(o=this._config.parent[0])):o=document.querySelector(this._config.parent);var f='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',b=[].slice.call(o.querySelectorAll(f));return s(b).each(function(w,B){l._addAriaAndCollapsedClass(E._getTargetFromElement(B),[B])}),o},y._addAriaAndCollapsedClass=function(o,l){var f=s(o).hasClass(ce);l.length&&s(l).toggleClass(Gn,!f).attr("aria-expanded",f)},E._getTargetFromElement=function(o){var l=$.getSelectorFromElement(o);return l?document.querySelector(l):null},E._jQueryInterface=function(o){return this.each(function(){var l=s(this),f=l.data(On),b=W({},Mt,l.data(),typeof o=="object"&&o?o:{});if(!f&&b.toggle&&/show|hide/.test(o)&&(b.toggle=!1),f||(f=new E(this,b),l.data(On,f)),typeof o=="string"){if(typeof f[o]>"u")throw new TypeError('No method named "'+o+'"');f[o]()}})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Mt}}]),E}();s(document).on(Ee.CLICK_DATA_API,ai,function(E){E.currentTarget.tagName==="A"&&E.preventDefault();var y=s(this),o=$.getSelectorFromElement(this),l=[].slice.call(document.querySelectorAll(o));s(l).each(function(){var f=s(this),b=f.data(On)?"toggle":y.data();Vn._jQueryInterface.call(f,b)})}),s.fn[Mn]=Vn._jQueryInterface,s.fn[Mn].Constructor=Vn,s.fn[Mn].noConflict=function(){return s.fn[Mn]=_t,Vn._jQueryInterface};var Xe="dropdown",an="bs.dropdown",gn="."+an,ct=".data-api",kt=s.fn[Xe],ki=new RegExp("38|40|27"),je={HIDE:"hide"+gn,HIDDEN:"hidden"+gn,SHOW:"show"+gn,SHOWN:"shown"+gn,CLICK:"click"+gn,CLICK_DATA_API:"click"+gn+ct,KEYDOWN_DATA_API:"keydown"+gn+ct,KEYUP_DATA_API:"keyup"+gn+ct},Rt="disabled",Be="show",li="dropup",Ri="dropright",Ai="dropleft",Kt="dropdown-menu-right",Yn="position-static",dt='[data-toggle="dropdown"]',Nt=".dropdown form",Xn=".dropdown-menu",$i=".navbar-nav",ft=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ui="top-start",_i="top-end",ci="bottom-start",di="bottom-end",zt="right-start",Ii="left-start",fi={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Li={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},yn=function(){function E(o,l){this._element=o,this._popper=null,this._config=this._getConfig(l),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var y=E.prototype;return y.toggle=function(){if(!this._element.disabled&&!s(this._element).hasClass(Rt)){var o=E._getParentFromElement(this._element),l=s(this._menu).hasClass(Be);if(E._clearMenus(),!l){var f={relatedTarget:this._element},b=s.Event(je.SHOW,f);if(s(o).trigger(b),!b.isDefaultPrevented()){if(!this._inNavbar){if(typeof R>"u")throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var w=this._element;this._config.reference==="parent"?w=o:$.isElement(this._config.reference)&&(w=this._config.reference,typeof this._config.reference.jquery<"u"&&(w=this._config.reference[0])),this._config.boundary!=="scrollParent"&&s(o).addClass(Yn),this._popper=new R(w,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&s(o).closest($i).length===0&&s(document.body).children().on("mouseover",null,s.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),s(this._menu).toggleClass(Be),s(o).toggleClass(Be).trigger(s.Event(je.SHOWN,f))}}}},y.show=function(){if(!(this._element.disabled||s(this._element).hasClass(Rt)||s(this._menu).hasClass(Be))){var o={relatedTarget:this._element},l=s.Event(je.SHOW,o),f=E._getParentFromElement(this._element);s(f).trigger(l),l.isDefaultPrevented()||(s(this._menu).toggleClass(Be),s(f).toggleClass(Be).trigger(s.Event(je.SHOWN,o)))}},y.hide=function(){if(!this._element.disabled&&!s(this._element).hasClass(Rt)&&s(this._menu).hasClass(Be)){var o={relatedTarget:this._element},l=s.Event(je.HIDE,o),f=E._getParentFromElement(this._element);s(f).trigger(l),l.isDefaultPrevented()||(s(this._menu).toggleClass(Be),s(f).toggleClass(Be).trigger(s.Event(je.HIDDEN,o)))}},y.dispose=function(){s.removeData(this._element,an),s(this._element).off(gn),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},y.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},y._addEventListeners=function(){var o=this;s(this._element).on(je.CLICK,function(l){l.preventDefault(),l.stopPropagation(),o.toggle()})},y._getConfig=function(o){return o=W({},this.constructor.Default,s(this._element).data(),o),$.typeCheckConfig(Xe,o,this.constructor.DefaultType),o},y._getMenuElement=function(){if(!this._menu){var o=E._getParentFromElement(this._element);o&&(this._menu=o.querySelector(Xn))}return this._menu},y._getPlacement=function(){var o=s(this._element.parentNode),l=ci;return o.hasClass(li)?(l=ui,s(this._menu).hasClass(Kt)&&(l=_i)):o.hasClass(Ri)?l=zt:o.hasClass(Ai)?l=Ii:s(this._menu).hasClass(Kt)&&(l=di),l},y._detectNavbar=function(){return 0<s(this._element).closest(".navbar").length},y._getOffset=function(){var o=this,l={};return typeof this._config.offset=="function"?l.fn=function(f){return f.offsets=W({},f.offsets,o._config.offset(f.offsets,o._element)||{}),f}:l.offset=this._config.offset,l},y._getPopperConfig=function(){var o={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(o.modifiers.applyStyle={enabled:!1}),o},E._jQueryInterface=function(o){return this.each(function(){var l=s(this).data(an);if(l||(l=new E(this,typeof o=="object"?o:null),s(this).data(an,l)),typeof o=="string"){if(typeof l[o]>"u")throw new TypeError('No method named "'+o+'"');l[o]()}})},E._clearMenus=function(o){if(!o||o.which!==3&&(o.type!=="keyup"||o.which===9))for(var l=[].slice.call(document.querySelectorAll(dt)),f=0,b=l.length;f<b;f++){var w=E._getParentFromElement(l[f]),B=s(l[f]).data(an),K={relatedTarget:l[f]};if(o&&o.type==="click"&&(K.clickEvent=o),B){var oe=B._menu;if(s(w).hasClass(Be)&&!(o&&(o.type==="click"&&/input|textarea/i.test(o.target.tagName)||o.type==="keyup"&&o.which===9)&&s.contains(w,o.target))){var te=s.Event(je.HIDE,K);s(w).trigger(te),te.isDefaultPrevented()||("ontouchstart"in document.documentElement&&s(document.body).children().off("mouseover",null,s.noop),l[f].setAttribute("aria-expanded","false"),s(oe).removeClass(Be),s(w).removeClass(Be).trigger(s.Event(je.HIDDEN,K)))}}}},E._getParentFromElement=function(o){var l,f=$.getSelectorFromElement(o);return f&&(l=document.querySelector(f)),l||o.parentNode},E._dataApiKeydownHandler=function(o){if((/input|textarea/i.test(o.target.tagName)?!(o.which===32||o.which!==27&&(o.which!==40&&o.which!==38||s(o.target).closest(Xn).length)):ki.test(o.which))&&(o.preventDefault(),o.stopPropagation(),!this.disabled&&!s(this).hasClass(Rt))){var l=E._getParentFromElement(this),f=s(l).hasClass(Be);if(f&&(!f||o.which!==27&&o.which!==32)){var b=[].slice.call(l.querySelectorAll(ft));if(b.length!==0){var w=b.indexOf(o.target);o.which===38&&0<w&&w--,o.which===40&&w<b.length-1&&w++,w<0&&(w=0),b[w].focus()}}else{if(o.which===27){var B=l.querySelector(dt);s(B).trigger("focus")}s(this).trigger("click")}}},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return fi}},{key:"DefaultType",get:function(){return Li}}]),E}();s(document).on(je.KEYDOWN_DATA_API,dt,yn._dataApiKeydownHandler).on(je.KEYDOWN_DATA_API,Xn,yn._dataApiKeydownHandler).on(je.CLICK_DATA_API+" "+je.KEYUP_DATA_API,yn._clearMenus).on(je.CLICK_DATA_API,dt,function(E){E.preventDefault(),E.stopPropagation(),yn._jQueryInterface.call(s(this),"toggle")}).on(je.CLICK_DATA_API,Nt,function(E){E.stopPropagation()}),s.fn[Xe]=yn._jQueryInterface,s.fn[Xe].Constructor=yn,s.fn[Xe].noConflict=function(){return s.fn[Xe]=kt,yn._jQueryInterface};var Rn="modal",An="bs.modal",Ue="."+An,Je=s.fn[Rn],jn={backdrop:!0,keyboard:!0,focus:!0,show:!0},At={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+Ue,HIDDEN:"hidden"+Ue,SHOW:"show"+Ue,SHOWN:"shown"+Ue,FOCUSIN:"focusin"+Ue,RESIZE:"resize"+Ue,CLICK_DISMISS:"click.dismiss"+Ue,KEYDOWN_DISMISS:"keydown.dismiss"+Ue,MOUSEUP_DISMISS:"mouseup.dismiss"+Ue,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Ue,CLICK_DATA_API:"click"+Ue+".data-api"},pi="modal-dialog-scrollable",Si="modal-scrollbar-measure",qi="modal-backdrop",$t="modal-open",$n="fade",In="show",hi=".modal-dialog",Ze=".modal-body",mi='[data-toggle="modal"]',pt='[data-dismiss="modal"]',gi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",yi=".sticky-top",en=function(){function E(o,l){this._config=this._getConfig(l),this._element=o,this._dialog=o.querySelector(hi),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var y=E.prototype;return y.toggle=function(o){return this._isShown?this.hide():this.show(o)},y.show=function(o){var l=this;if(!this._isShown&&!this._isTransitioning){s(this._element).hasClass($n)&&(this._isTransitioning=!0);var f=s.Event(re.SHOW,{relatedTarget:o});s(this._element).trigger(f),this._isShown||f.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),s(this._element).on(re.CLICK_DISMISS,pt,function(b){return l.hide(b)}),s(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){s(l._element).one(re.MOUSEUP_DISMISS,function(b){s(b.target).is(l._element)&&(l._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return l._showElement(o)}))}},y.hide=function(o){var l=this;if(o&&o.preventDefault(),this._isShown&&!this._isTransitioning){var f=s.Event(re.HIDE);if(s(this._element).trigger(f),this._isShown&&!f.isDefaultPrevented()){this._isShown=!1;var b=s(this._element).hasClass($n);if(b&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),s(document).off(re.FOCUSIN),s(this._element).removeClass(In),s(this._element).off(re.CLICK_DISMISS),s(this._dialog).off(re.MOUSEDOWN_DISMISS),b){var w=$.getTransitionDurationFromElement(this._element);s(this._element).one($.TRANSITION_END,function(B){return l._hideModal(B)}).emulateTransitionEnd(w)}else this._hideModal()}}},y.dispose=function(){[window,this._element,this._dialog].forEach(function(o){return s(o).off(Ue)}),s(document).off(re.FOCUSIN),s.removeData(this._element,An),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},y.handleUpdate=function(){this._adjustDialog()},y._getConfig=function(o){return o=W({},jn,o),$.typeCheckConfig(Rn,o,At),o},y._showElement=function(o){var l=this,f=s(this._element).hasClass($n);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),s(this._dialog).hasClass(pi)?this._dialog.querySelector(Ze).scrollTop=0:this._element.scrollTop=0,f&&$.reflow(this._element),s(this._element).addClass(In),this._config.focus&&this._enforceFocus();var b=s.Event(re.SHOWN,{relatedTarget:o}),w=function(){l._config.focus&&l._element.focus(),l._isTransitioning=!1,s(l._element).trigger(b)};if(f){var B=$.getTransitionDurationFromElement(this._dialog);s(this._dialog).one($.TRANSITION_END,w).emulateTransitionEnd(B)}else w()},y._enforceFocus=function(){var o=this;s(document).off(re.FOCUSIN).on(re.FOCUSIN,function(l){document!==l.target&&o._element!==l.target&&s(o._element).has(l.target).length===0&&o._element.focus()})},y._setEscapeEvent=function(){var o=this;this._isShown&&this._config.keyboard?s(this._element).on(re.KEYDOWN_DISMISS,function(l){l.which===27&&(l.preventDefault(),o.hide())}):this._isShown||s(this._element).off(re.KEYDOWN_DISMISS)},y._setResizeEvent=function(){var o=this;this._isShown?s(window).on(re.RESIZE,function(l){return o.handleUpdate(l)}):s(window).off(re.RESIZE)},y._hideModal=function(){var o=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){s(document.body).removeClass($t),o._resetAdjustments(),o._resetScrollbar(),s(o._element).trigger(re.HIDDEN)})},y._removeBackdrop=function(){this._backdrop&&(s(this._backdrop).remove(),this._backdrop=null)},y._showBackdrop=function(o){var l=this,f=s(this._element).hasClass($n)?$n:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=qi,f&&this._backdrop.classList.add(f),s(this._backdrop).appendTo(document.body),s(this._element).on(re.CLICK_DISMISS,function(K){l._ignoreBackdropClick?l._ignoreBackdropClick=!1:K.target===K.currentTarget&&(l._config.backdrop==="static"?l._element.focus():l.hide())}),f&&$.reflow(this._backdrop),s(this._backdrop).addClass(In),!o)return;if(!f)return void o();var b=$.getTransitionDurationFromElement(this._backdrop);s(this._backdrop).one($.TRANSITION_END,o).emulateTransitionEnd(b)}else if(!this._isShown&&this._backdrop){s(this._backdrop).removeClass(In);var w=function(){l._removeBackdrop(),o&&o()};if(s(this._element).hasClass($n)){var B=$.getTransitionDurationFromElement(this._backdrop);s(this._backdrop).one($.TRANSITION_END,w).emulateTransitionEnd(B)}else w()}else o&&o()},y._adjustDialog=function(){var o=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&o&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!o&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},y._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},y._checkScrollbar=function(){var o=document.body.getBoundingClientRect();this._isBodyOverflowing=o.left+o.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},y._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var l=[].slice.call(document.querySelectorAll(gi)),f=[].slice.call(document.querySelectorAll(yi));s(l).each(function(B,K){var oe=K.style.paddingRight,te=s(K).css("padding-right");s(K).data("padding-right",oe).css("padding-right",parseFloat(te)+o._scrollbarWidth+"px")}),s(f).each(function(B,K){var oe=K.style.marginRight,te=s(K).css("margin-right");s(K).data("margin-right",oe).css("margin-right",parseFloat(te)-o._scrollbarWidth+"px")});var b=document.body.style.paddingRight,w=s(document.body).css("padding-right");s(document.body).data("padding-right",b).css("padding-right",parseFloat(w)+this._scrollbarWidth+"px")}s(document.body).addClass($t)},y._resetScrollbar=function(){var o=[].slice.call(document.querySelectorAll(gi));s(o).each(function(b,w){var B=s(w).data("padding-right");s(w).removeData("padding-right"),w.style.paddingRight=B||""});var l=[].slice.call(document.querySelectorAll(""+yi));s(l).each(function(b,w){var B=s(w).data("margin-right");typeof B<"u"&&s(w).css("margin-right",B).removeData("margin-right")});var f=s(document.body).data("padding-right");s(document.body).removeData("padding-right"),document.body.style.paddingRight=f||""},y._getScrollbarWidth=function(){var o=document.createElement("div");o.className=Si,document.body.appendChild(o);var l=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),l},E._jQueryInterface=function(o,l){return this.each(function(){var f=s(this).data(An),b=W({},jn,s(this).data(),typeof o=="object"&&o?o:{});if(f||(f=new E(this,b),s(this).data(An,f)),typeof o=="string"){if(typeof f[o]>"u")throw new TypeError('No method named "'+o+'"');f[o](l)}else b.show&&f.show(l)})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return jn}}]),E}();s(document).on(re.CLICK_DATA_API,mi,function(E){var y,o=this,l=$.getSelectorFromElement(this);l&&(y=document.querySelector(l));var f=s(y).data(An)?"toggle":W({},s(y).data(),s(this).data());this.tagName!=="A"&&this.tagName!=="AREA"||E.preventDefault();var b=s(y).one(re.SHOW,function(w){w.isDefaultPrevented()||b.one(re.HIDDEN,function(){s(o).is(":visible")&&o.focus()})});en._jQueryInterface.call(s(y),f,this)}),s.fn[Rn]=en._jQueryInterface,s.fn[Rn].Constructor=en,s.fn[Rn].noConflict=function(){return s.fn[Rn]=Je,en._jQueryInterface};var Ln=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ft={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Bi=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,bi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Ht(E,y,o){if(E.length===0)return E;if(o&&typeof o=="function")return o(E);for(var l=new window.DOMParser().parseFromString(E,"text/html"),f=Object.keys(y),b=[].slice.call(l.body.querySelectorAll("*")),w=function(oe,te){var $e=b[oe],Ie=$e.nodeName.toLowerCase();if(f.indexOf($e.nodeName.toLowerCase())===-1)return $e.parentNode.removeChild($e),"continue";var Le=[].slice.call($e.attributes),Ot=[].concat(y["*"]||[],y[Ie]||[]);Le.forEach(function(Un){(function(tt,qt){var it=tt.nodeName.toLowerCase();if(qt.indexOf(it)!==-1)return Ln.indexOf(it)===-1||!!(tt.nodeValue.match(Bi)||tt.nodeValue.match(bi));for(var Bt=qt.filter(function(p){return p instanceof RegExp}),Pt=0,c=Bt.length;Pt<c;Pt++)if(it.match(Bt[Pt]))return!0;return!1})(Un,Ot)||$e.removeAttribute(Un.nodeName)})},B=0,K=b.length;B<K;B++)w(B);return l.body.innerHTML}var nn="tooltip",ht="bs.tooltip",We="."+ht,Ui=s.fn[nn],Qt="bs-tooltip",Wi=new RegExp("(^|\\s)"+Qt+"\\S+","g"),Ki=["sanitize","whiteList","sanitizeFn"],Gt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Ni={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},zi={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ft},mt="show",Vt="out",Fi={HIDE:"hide"+We,HIDDEN:"hidden"+We,SHOW:"show"+We,SHOWN:"shown"+We,INSERTED:"inserted"+We,CLICK:"click"+We,FOCUSIN:"focusin"+We,FOCUSOUT:"focusout"+We,MOUSEENTER:"mouseenter"+We,MOUSELEAVE:"mouseleave"+We},gt="fade",Jn="show",Yt=".tooltip-inner",vi=".arrow",Sn="hover",It="focus",Ei="click",Xt="manual",qn=function(){function E(o,l){if(typeof R>"u")throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=o,this.config=this._getConfig(l),this.tip=null,this._setListeners()}var y=E.prototype;return y.enable=function(){this._isEnabled=!0},y.disable=function(){this._isEnabled=!1},y.toggleEnabled=function(){this._isEnabled=!this._isEnabled},y.toggle=function(o){if(this._isEnabled)if(o){var l=this.constructor.DATA_KEY,f=s(o.currentTarget).data(l);f||(f=new this.constructor(o.currentTarget,this._getDelegateConfig()),s(o.currentTarget).data(l,f)),f._activeTrigger.click=!f._activeTrigger.click,f._isWithActiveTrigger()?f._enter(null,f):f._leave(null,f)}else{if(s(this.getTipElement()).hasClass(Jn))return void this._leave(null,this);this._enter(null,this)}},y.dispose=function(){clearTimeout(this._timeout),s.removeData(this.element,this.constructor.DATA_KEY),s(this.element).off(this.constructor.EVENT_KEY),s(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&s(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},y.show=function(){var o=this;if(s(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var l=s.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){s(this.element).trigger(l);var f=$.findShadowRoot(this.element),b=s.contains(f!==null?f:this.element.ownerDocument.documentElement,this.element);if(l.isDefaultPrevented()||!b)return;var w=this.getTipElement(),B=$.getUID(this.constructor.NAME);w.setAttribute("id",B),this.element.setAttribute("aria-describedby",B),this.setContent(),this.config.animation&&s(w).addClass(gt);var K=typeof this.config.placement=="function"?this.config.placement.call(this,w,this.element):this.config.placement,oe=this._getAttachment(K);this.addAttachmentClass(oe);var te=this._getContainer();s(w).data(this.constructor.DATA_KEY,this),s.contains(this.element.ownerDocument.documentElement,this.tip)||s(w).appendTo(te),s(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new R(this.element,w,{placement:oe,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:vi},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(Le){Le.originalPlacement!==Le.placement&&o._handlePopperPlacementChange(Le)},onUpdate:function(Le){return o._handlePopperPlacementChange(Le)}}),s(w).addClass(Jn),"ontouchstart"in document.documentElement&&s(document.body).children().on("mouseover",null,s.noop);var $e=function(){o.config.animation&&o._fixTransition();var Le=o._hoverState;o._hoverState=null,s(o.element).trigger(o.constructor.Event.SHOWN),Le===Vt&&o._leave(null,o)};if(s(this.tip).hasClass(gt)){var Ie=$.getTransitionDurationFromElement(this.tip);s(this.tip).one($.TRANSITION_END,$e).emulateTransitionEnd(Ie)}else $e()}},y.hide=function(o){var l=this,f=this.getTipElement(),b=s.Event(this.constructor.Event.HIDE),w=function(){l._hoverState!==mt&&f.parentNode&&f.parentNode.removeChild(f),l._cleanTipClass(),l.element.removeAttribute("aria-describedby"),s(l.element).trigger(l.constructor.Event.HIDDEN),l._popper!==null&&l._popper.destroy(),o&&o()};if(s(this.element).trigger(b),!b.isDefaultPrevented()){if(s(f).removeClass(Jn),"ontouchstart"in document.documentElement&&s(document.body).children().off("mouseover",null,s.noop),this._activeTrigger[Ei]=!1,this._activeTrigger[It]=!1,this._activeTrigger[Sn]=!1,s(this.tip).hasClass(gt)){var B=$.getTransitionDurationFromElement(f);s(f).one($.TRANSITION_END,w).emulateTransitionEnd(B)}else w();this._hoverState=""}},y.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},y.isWithContent=function(){return!!this.getTitle()},y.addAttachmentClass=function(o){s(this.getTipElement()).addClass(Qt+"-"+o)},y.getTipElement=function(){return this.tip=this.tip||s(this.config.template)[0],this.tip},y.setContent=function(){var o=this.getTipElement();this.setElementContent(s(o.querySelectorAll(Yt)),this.getTitle()),s(o).removeClass(gt+" "+Jn)},y.setElementContent=function(o,l){typeof l!="object"||!l.nodeType&&!l.jquery?this.config.html?(this.config.sanitize&&(l=Ht(l,this.config.whiteList,this.config.sanitizeFn)),o.html(l)):o.text(l):this.config.html?s(l).parent().is(o)||o.empty().append(l):o.text(s(l).text())},y.getTitle=function(){var o=this.element.getAttribute("data-original-title");return o||(o=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),o},y._getOffset=function(){var o=this,l={};return typeof this.config.offset=="function"?l.fn=function(f){return f.offsets=W({},f.offsets,o.config.offset(f.offsets,o.element)||{}),f}:l.offset=this.config.offset,l},y._getContainer=function(){return this.config.container===!1?document.body:$.isElement(this.config.container)?s(this.config.container):s(document).find(this.config.container)},y._getAttachment=function(o){return Ni[o.toUpperCase()]},y._setListeners=function(){var o=this;this.config.trigger.split(" ").forEach(function(l){if(l==="click")s(o.element).on(o.constructor.Event.CLICK,o.config.selector,function(w){return o.toggle(w)});else if(l!==Xt){var f=l===Sn?o.constructor.Event.MOUSEENTER:o.constructor.Event.FOCUSIN,b=l===Sn?o.constructor.Event.MOUSELEAVE:o.constructor.Event.FOCUSOUT;s(o.element).on(f,o.config.selector,function(w){return o._enter(w)}).on(b,o.config.selector,function(w){return o._leave(w)})}}),s(this.element).closest(".modal").on("hide.bs.modal",function(){o.element&&o.hide()}),this.config.selector?this.config=W({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},y._fixTitle=function(){var o=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||o!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},y._enter=function(o,l){var f=this.constructor.DATA_KEY;(l=l||s(o.currentTarget).data(f))||(l=new this.constructor(o.currentTarget,this._getDelegateConfig()),s(o.currentTarget).data(f,l)),o&&(l._activeTrigger[o.type==="focusin"?It:Sn]=!0),s(l.getTipElement()).hasClass(Jn)||l._hoverState===mt?l._hoverState=mt:(clearTimeout(l._timeout),l._hoverState=mt,l.config.delay&&l.config.delay.show?l._timeout=setTimeout(function(){l._hoverState===mt&&l.show()},l.config.delay.show):l.show())},y._leave=function(o,l){var f=this.constructor.DATA_KEY;(l=l||s(o.currentTarget).data(f))||(l=new this.constructor(o.currentTarget,this._getDelegateConfig()),s(o.currentTarget).data(f,l)),o&&(l._activeTrigger[o.type==="focusout"?It:Sn]=!1),l._isWithActiveTrigger()||(clearTimeout(l._timeout),l._hoverState=Vt,l.config.delay&&l.config.delay.hide?l._timeout=setTimeout(function(){l._hoverState===Vt&&l.hide()},l.config.delay.hide):l.hide())},y._isWithActiveTrigger=function(){for(var o in this._activeTrigger)if(this._activeTrigger[o])return!0;return!1},y._getConfig=function(o){var l=s(this.element).data();return Object.keys(l).forEach(function(f){Ki.indexOf(f)!==-1&&delete l[f]}),typeof(o=W({},this.constructor.Default,l,typeof o=="object"&&o?o:{})).delay=="number"&&(o.delay={show:o.delay,hide:o.delay}),typeof o.title=="number"&&(o.title=o.title.toString()),typeof o.content=="number"&&(o.content=o.content.toString()),$.typeCheckConfig(nn,o,this.constructor.DefaultType),o.sanitize&&(o.template=Ht(o.template,o.whiteList,o.sanitizeFn)),o},y._getDelegateConfig=function(){var o={};if(this.config)for(var l in this.config)this.constructor.Default[l]!==this.config[l]&&(o[l]=this.config[l]);return o},y._cleanTipClass=function(){var o=s(this.getTipElement()),l=o.attr("class").match(Wi);l!==null&&l.length&&o.removeClass(l.join(""))},y._handlePopperPlacementChange=function(o){var l=o.instance;this.tip=l.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(o.placement))},y._fixTransition=function(){var o=this.getTipElement(),l=this.config.animation;o.getAttribute("x-placement")===null&&(s(o).removeClass(gt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=l)},E._jQueryInterface=function(o){return this.each(function(){var l=s(this).data(ht),f=typeof o=="object"&&o;if((l||!/dispose|hide/.test(o))&&(l||(l=new E(this,f),s(this).data(ht,l)),typeof o=="string")){if(typeof l[o]>"u")throw new TypeError('No method named "'+o+'"');l[o]()}})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return zi}},{key:"NAME",get:function(){return nn}},{key:"DATA_KEY",get:function(){return ht}},{key:"Event",get:function(){return Fi}},{key:"EVENT_KEY",get:function(){return We}},{key:"DefaultType",get:function(){return Gt}}]),E}();s.fn[nn]=qn._jQueryInterface,s.fn[nn].Constructor=qn,s.fn[nn].noConflict=function(){return s.fn[nn]=Ui,qn._jQueryInterface};var ln="popover",yt="bs.popover",Fe="."+yt,Jt=s.fn[ln],wi="bs-popover",Hi=new RegExp("(^|\\s)"+wi+"\\S+","g"),e=W({},qn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),n=W({},qn.DefaultType,{content:"(string|element|function)"}),t="fade",i="show",a=".popover-header",u=".popover-body",_={HIDE:"hide"+Fe,HIDDEN:"hidden"+Fe,SHOW:"show"+Fe,SHOWN:"shown"+Fe,INSERTED:"inserted"+Fe,CLICK:"click"+Fe,FOCUSIN:"focusin"+Fe,FOCUSOUT:"focusout"+Fe,MOUSEENTER:"mouseenter"+Fe,MOUSELEAVE:"mouseleave"+Fe},d=function(E){var y,o;function l(){return E.apply(this,arguments)||this}o=E,(y=l).prototype=Object.create(o.prototype),(y.prototype.constructor=y).__proto__=o;var f=l.prototype;return f.isWithContent=function(){return this.getTitle()||this._getContent()},f.addAttachmentClass=function(b){s(this.getTipElement()).addClass(wi+"-"+b)},f.getTipElement=function(){return this.tip=this.tip||s(this.config.template)[0],this.tip},f.setContent=function(){var b=s(this.getTipElement());this.setElementContent(b.find(a),this.getTitle());var w=this._getContent();typeof w=="function"&&(w=w.call(this.element)),this.setElementContent(b.find(u),w),b.removeClass(t+" "+i)},f._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},f._cleanTipClass=function(){var b=s(this.getTipElement()),w=b.attr("class").match(Hi);w!==null&&0<w.length&&b.removeClass(w.join(""))},l._jQueryInterface=function(b){return this.each(function(){var w=s(this).data(yt),B=typeof b=="object"?b:null;if((w||!/dispose|hide/.test(b))&&(w||(w=new l(this,B),s(this).data(yt,w)),typeof b=="string")){if(typeof w[b]>"u")throw new TypeError('No method named "'+b+'"');w[b]()}})},q(l,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return e}},{key:"NAME",get:function(){return ln}},{key:"DATA_KEY",get:function(){return yt}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return Fe}},{key:"DefaultType",get:function(){return n}}]),l}(qn);s.fn[ln]=d._jQueryInterface,s.fn[ln].Constructor=d,s.fn[ln].noConflict=function(){return s.fn[ln]=Jt,d._jQueryInterface};var h="scrollspy",m="bs.scrollspy",C="."+m,x=s.fn[h],O={offset:10,method:"auto",target:""},j={offset:"number",method:"string",target:"(string|element)"},I={ACTIVATE:"activate"+C,SCROLL:"scroll"+C,LOAD_DATA_API:"load"+C+".data-api"},U="dropdown-item",S="active",le='[data-spy="scroll"]',de=".nav, .list-group",Ce=".nav-link",ne=".nav-item",H=".list-group-item",Me=".dropdown",J=".dropdown-item",ue=".dropdown-toggle",bt="offset",vt="position",we=function(){function E(o,l){var f=this;this._element=o,this._scrollElement=o.tagName==="BODY"?window:o,this._config=this._getConfig(l),this._selector=this._config.target+" "+Ce+","+this._config.target+" "+H+","+this._config.target+" "+J,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,s(this._scrollElement).on(I.SCROLL,function(b){return f._process(b)}),this.refresh(),this._process()}var y=E.prototype;return y.refresh=function(){var o=this,l=this._scrollElement===this._scrollElement.window?bt:vt,f=this._config.method==="auto"?l:this._config.method,b=f===vt?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(w){var B,K=$.getSelectorFromElement(w);if(K&&(B=document.querySelector(K)),B){var oe=B.getBoundingClientRect();if(oe.width||oe.height)return[s(B)[f]().top+b,K]}return null}).filter(function(w){return w}).sort(function(w,B){return w[0]-B[0]}).forEach(function(w){o._offsets.push(w[0]),o._targets.push(w[1])})},y.dispose=function(){s.removeData(this._element,m),s(this._scrollElement).off(C),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},y._getConfig=function(o){if(typeof(o=W({},O,typeof o=="object"&&o?o:{})).target!="string"){var l=s(o.target).attr("id");l||(l=$.getUID(h),s(o.target).attr("id",l)),o.target="#"+l}return $.typeCheckConfig(h,o,j),o},y._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},y._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},y._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},y._process=function(){var o=this._getScrollTop()+this._config.offset,l=this._getScrollHeight(),f=this._config.offset+l-this._getOffsetHeight();if(this._scrollHeight!==l&&this.refresh(),f<=o){var b=this._targets[this._targets.length-1];this._activeTarget!==b&&this._activate(b)}else{if(this._activeTarget&&o<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var w=this._offsets.length;w--;)this._activeTarget!==this._targets[w]&&o>=this._offsets[w]&&(typeof this._offsets[w+1]>"u"||o<this._offsets[w+1])&&this._activate(this._targets[w])}},y._activate=function(o){this._activeTarget=o,this._clear();var l=this._selector.split(",").map(function(b){return b+'[data-target="'+o+'"],'+b+'[href="'+o+'"]'}),f=s([].slice.call(document.querySelectorAll(l.join(","))));f.hasClass(U)?(f.closest(Me).find(ue).addClass(S),f.addClass(S)):(f.addClass(S),f.parents(de).prev(Ce+", "+H).addClass(S),f.parents(de).prev(ne).children(Ce).addClass(S)),s(this._scrollElement).trigger(I.ACTIVATE,{relatedTarget:o})},y._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(o){return o.classList.contains(S)}).forEach(function(o){return o.classList.remove(S)})},E._jQueryInterface=function(o){return this.each(function(){var l=s(this).data(m);if(l||(l=new E(this,typeof o=="object"&&o),s(this).data(m,l)),typeof o=="string"){if(typeof l[o]>"u")throw new TypeError('No method named "'+o+'"');l[o]()}})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return O}}]),E}();s(window).on(I.LOAD_DATA_API,function(){for(var E=[].slice.call(document.querySelectorAll(le)),y=E.length;y--;){var o=s(E[y]);we._jQueryInterface.call(o,o.data())}}),s.fn[h]=we._jQueryInterface,s.fn[h].Constructor=we,s.fn[h].noConflict=function(){return s.fn[h]=x,we._jQueryInterface};var un="bs.tab",_n="."+un,ke=s.fn.tab,cn={HIDE:"hide"+_n,HIDDEN:"hidden"+_n,SHOW:"show"+_n,SHOWN:"shown"+_n,CLICK_DATA_API:"click"+_n+".data-api"},He="dropdown-menu",ie="active",Ke="disabled",Re="fade",tn="show",V=".dropdown",ee=".nav, .list-group",fe=".active",Ae="> li > .active",pe='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ne=".dropdown-toggle",Zn="> .dropdown-menu .active",Bn=function(){function E(o){this._element=o}var y=E.prototype;return y.show=function(){var o=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&s(this._element).hasClass(ie)||s(this._element).hasClass(Ke))){var l,f,b=s(this._element).closest(ee)[0],w=$.getSelectorFromElement(this._element);if(b){var B=b.nodeName==="UL"||b.nodeName==="OL"?Ae:fe;f=(f=s.makeArray(s(b).find(B)))[f.length-1]}var K=s.Event(cn.HIDE,{relatedTarget:this._element}),oe=s.Event(cn.SHOW,{relatedTarget:f});if(f&&s(f).trigger(K),s(this._element).trigger(oe),!oe.isDefaultPrevented()&&!K.isDefaultPrevented()){w&&(l=document.querySelector(w)),this._activate(this._element,b);var te=function(){var $e=s.Event(cn.HIDDEN,{relatedTarget:o._element}),Ie=s.Event(cn.SHOWN,{relatedTarget:f});s(f).trigger($e),s(o._element).trigger(Ie)};l?this._activate(l,l.parentNode,te):te()}}},y.dispose=function(){s.removeData(this._element,un),this._element=null},y._activate=function(o,l,f){var b=this,w=(!l||l.nodeName!=="UL"&&l.nodeName!=="OL"?s(l).children(fe):s(l).find(Ae))[0],B=f&&w&&s(w).hasClass(Re),K=function(){return b._transitionComplete(o,w,f)};if(w&&B){var oe=$.getTransitionDurationFromElement(w);s(w).removeClass(tn).one($.TRANSITION_END,K).emulateTransitionEnd(oe)}else K()},y._transitionComplete=function(o,l,f){if(l){s(l).removeClass(ie);var b=s(l.parentNode).find(Zn)[0];b&&s(b).removeClass(ie),l.getAttribute("role")==="tab"&&l.setAttribute("aria-selected",!1)}if(s(o).addClass(ie),o.getAttribute("role")==="tab"&&o.setAttribute("aria-selected",!0),$.reflow(o),o.classList.contains(Re)&&o.classList.add(tn),o.parentNode&&s(o.parentNode).hasClass(He)){var w=s(o).closest(V)[0];if(w){var B=[].slice.call(w.querySelectorAll(Ne));s(B).addClass(ie)}o.setAttribute("aria-expanded",!0)}f&&f()},E._jQueryInterface=function(o){return this.each(function(){var l=s(this),f=l.data(un);if(f||(f=new E(this),l.data(un,f)),typeof o=="string"){if(typeof f[o]>"u")throw new TypeError('No method named "'+o+'"');f[o]()}})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),E}();s(document).on(cn.CLICK_DATA_API,pe,function(E){E.preventDefault(),Bn._jQueryInterface.call(s(this),"show")}),s.fn.tab=Bn._jQueryInterface,s.fn.tab.Constructor=Bn,s.fn.tab.noConflict=function(){return s.fn.tab=ke,Bn._jQueryInterface};var et="toast",Lt="bs.toast",Et="."+Lt,St=s.fn[et],nt={CLICK_DISMISS:"click.dismiss"+Et,HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et},Qi="fade",Oi="hide",bn="show",Pi="showing",Zt={animation:"boolean",autohide:"boolean",delay:"number"},dn={animation:!0,autohide:!0,delay:500},vn='[data-dismiss="toast"]',wt=function(){function E(o,l){this._element=o,this._config=this._getConfig(l),this._timeout=null,this._setListeners()}var y=E.prototype;return y.show=function(){var o=this;s(this._element).trigger(nt.SHOW),this._config.animation&&this._element.classList.add(Qi);var l=function(){o._element.classList.remove(Pi),o._element.classList.add(bn),s(o._element).trigger(nt.SHOWN),o._config.autohide&&o.hide()};if(this._element.classList.remove(Oi),this._element.classList.add(Pi),this._config.animation){var f=$.getTransitionDurationFromElement(this._element);s(this._element).one($.TRANSITION_END,l).emulateTransitionEnd(f)}else l()},y.hide=function(o){var l=this;this._element.classList.contains(bn)&&(s(this._element).trigger(nt.HIDE),o?this._close():this._timeout=setTimeout(function(){l._close()},this._config.delay))},y.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(bn)&&this._element.classList.remove(bn),s(this._element).off(nt.CLICK_DISMISS),s.removeData(this._element,Lt),this._element=null,this._config=null},y._getConfig=function(o){return o=W({},dn,s(this._element).data(),typeof o=="object"&&o?o:{}),$.typeCheckConfig(et,o,this.constructor.DefaultType),o},y._setListeners=function(){var o=this;s(this._element).on(nt.CLICK_DISMISS,vn,function(){return o.hide(!0)})},y._close=function(){var o=this,l=function(){o._element.classList.add(Oi),s(o._element).trigger(nt.HIDDEN)};if(this._element.classList.remove(bn),this._config.animation){var f=$.getTransitionDurationFromElement(this._element);s(this._element).one($.TRANSITION_END,l).emulateTransitionEnd(f)}else l()},E._jQueryInterface=function(o){return this.each(function(){var l=s(this),f=l.data(Lt);if(f||(f=new E(this,typeof o=="object"&&o),l.data(Lt,f)),typeof o=="string"){if(typeof f[o]>"u")throw new TypeError('No method named "'+o+'"');f[o](this)}})},q(E,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zt}},{key:"Default",get:function(){return dn}}]),E}();s.fn[et]=wt._jQueryInterface,s.fn[et].Constructor=wt,s.fn[et].noConflict=function(){return s.fn[et]=St,wt._jQueryInterface},function(){if(typeof s>"u")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var E=s.fn.jquery.split(" ")[0].split(".");if(E[0]<2&&E[1]<9||E[0]===1&&E[1]===9&&E[2]<1||4<=E[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),P.Util=$,P.Alert=Qe,P.Button=ot,P.Carousel=Tn,P.Collapse=Vn,P.Dropdown=yn,P.Modal=en,P.Popover=d,P.Scrollspy=we,P.Tab=Bn,P.Toast=wt,P.Tooltip=qn,Object.defineProperty(P,"__esModule",{value:!0})});(module$1.exports==null?{}:module$1.exports).default||module$1.exports;console.log("[MegaOne] Component loading lazy");const Head=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.i),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Loader$1=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.a),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Banner=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.b),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Promo=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.c),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),About=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.d),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Videos=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.e),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Practices=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.d),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Portfolio=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.f),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Team=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.g),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Events$1=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.h),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Brands=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.j),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Blog=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.k),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Contact=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.l),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Foot=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.m),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),FixedNav=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.n),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),DelayDefer$1=reactExports.lazy(()=>__vitePreload(()=>import("./templates/MegaOne-D-JnoCSR.js").then(P=>P.D),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),template_selector={Head,DelayDefer:DelayDefer$1,Loader:Loader$1,Banner,Promo,About,Videos,Practices,Team,Events:Events$1,Brands,Blog,Contact,Foot,Portfolio,FixedNav},MegaOne=({component:P,...s})=>{let R=template_selector[P];return jsxRuntimeExports.jsx(reactExports.Suspense,{fallback:jsxRuntimeExports.jsx("div",{className:"loader_modal w3-modal active",children:jsxRuntimeExports.jsx("div",{className:"loader",children:"Loading..."})}),children:jsxRuntimeExports.jsx(R,{...s})})},MainContext=React.createContext(),MainProvider=P=>jsxRuntimeExports.jsx(MainContext.Provider,{value:P.store?P.store:store,MainStore:P.store?P.store:store,children:P.children}),CustomHtml=()=>jsxRuntimeExports.jsxs("div",{className:"summit inner","data-comp":"Events",children:[jsxRuntimeExports.jsx("p",{className:"p",children:"The Jobs Not Guns Employment Summit is designed to provide a citywide forum for potential employers, training providers, support/social service providers, law enforcement and elected official to meet with District residents, community stakeholders and employment agencies to address the barriers for employing District residents.  It provides an opportunity for employers to present their barriers to hiring district residents and residents to share their challenges for obtaining employment or a track for long-term career opportunities. Conducted both onsite and live-streaming, the Summit provides applicants an overview of their responsibilities to participate in job training or support programs, as needed, to achieve and maintain employment that can lead to a career."}),jsxRuntimeExports.jsx("p",{className:"p",children:"The Jobs Not Guns Recruitment Fairs host exhibitors to provide employment, training or supportive services for District residents.  Exhibitors include:"}),jsxRuntimeExports.jsxs("ul",{className:"summit list",children:[jsxRuntimeExports.jsx("li",{children:"Federal, District, National and Local employers will provide a list of job openings and conducted individual on-the-spot interviews of applicants for employment;"}),jsxRuntimeExports.jsx("li",{children:"Building trades unions will accept resumes and applications for apprenticeship training;"}),jsxRuntimeExports.jsx("li",{children:"District-funded and private job-readiness and vocational training providers to recruit trainees for pre-employment programs;"}),jsxRuntimeExports.jsx("li",{children:"Social/Supportive service programs and community organization to register District residents for social/supportive services program."})]})]}),{useEffect,useState}=React,App=()=>{useEffect(()=>(console.log("[App] useEffect works"),()=>{}),[]),useEffect(()=>(s(jsxRuntimeExports.jsx(CustomHtml,{})),console.log("[App] axios",axios),()=>{}),[]);const[P,s]=useState("");return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs(MainProvider,{children:[jsxRuntimeExports.jsx(MegaOne,{component:"Loader"}),jsxRuntimeExports.jsx(MegaOne,{component:"Head",data:main_data.head,mode:"BigHead"}),jsxRuntimeExports.jsx(MegaOne,{component:"Banner",data:main_data.banner}),jsxRuntimeExports.jsx(MegaOne,{component:"About",data:main_data.about}),jsxRuntimeExports.jsx(MegaOne,{component:"Promo",data:main_data.promo}),jsxRuntimeExports.jsx(MegaOne,{component:"Videos",data:main_data.videos}),jsxRuntimeExports.jsx(MegaOne,{component:"Practices",data:main_data.practices}),jsxRuntimeExports.jsx(MegaOne,{component:"Team",data:main_data.team}),jsxRuntimeExports.jsx(MegaOne,{component:"Portfolio",data:main_data.portfolio}),jsxRuntimeExports.jsx(MegaOne,{component:"Blog",data:main_data.blogs}),jsxRuntimeExports.jsxs(MegaOne,{component:"Events",data:main_data.events,children:[jsxRuntimeExports.jsx(Exporter,{home:".custom_head.summit",delay:3,children:jsxRuntimeExports.jsx("div",{className:"summit head",children:"Comming Soon"})}),jsxRuntimeExports.jsx(Exporter,{home:".custom_cont.summit",delay:3,children:P})]}),jsxRuntimeExports.jsx(MegaOne,{component:"Contact",data:main_data.contact}),jsxRuntimeExports.jsx(MegaOne,{component:"Foot",data:main_data.foot}),jsxRuntimeExports.jsx(MegaOne,{component:"FixedNav",data:main_data.fixed_nav}),jsxRuntimeExports.jsx(MegaOne,{component:"DelayDefer"})]})})},htmlContent$1="data:application/octet-stream;base64,PGRpdiBjbGFzcz0iZmVhdF90ZXh0X2NvbnQiPg0KICB7eyNpZiBoMX19PGgxPnt7aDF9fTwvaDE+e3svaWZ9fQ0KICB7eyNpZiBoM319PGgzPnt7aDN9fTwvaDM+e3svaWZ9fQ0KICA8ZGl2IGNsYXNzPSJuYXZfYnRucyI+DQogICAge3sjaWYgYnV0dG9uMS5hY3RpdmV9fTxhIGhyZWY9Int7YnV0dG9uMS5saW5rfX0iIGNsYXNzPSJsZWFybiB3My1idG4iPnt7YnV0dG9uMS50ZXh0fX08L2E+e3svaWZ9fQ0KICAgIHt7I2lmIGJ1dHRvbjIuYWN0aXZlfX08YSBjbGFzcz0icmVnaXN0ZXIgdzMtYnRuIiAvLw0KICAgICAgaHJlZj0ie3tidXR0b24yLmxpbmt9fSINCiAgICAgIHRhcmdldD0iX2JsYW5rIj57e2J1dHRvbjIudGV4dH19PC9hPnt7L2lmfX0NCiAgPC9kaXY+DQo8L2Rpdj4NCjxkaXYgY2xhc3M9ImZlYXRfaW1nX2NvbnQiPg0KICA8aW1nIGNsYXNzPSJkYWRfam9iIiBzcmM9ImpuZy9NZWdhT25lL2RpZ2l0YWwtYWdlbmN5L2ltZy9kYWRfam9iMi5wbmciIC8+DQo8L2Rpdj4NCjxkaXYgY2xhc3M9ImRhdGUtc2F2ZXIiPg0KICA8aW1nIGNsYXNzPSJmbHllcl9pbWciIHNyYz0iam5nL01lZ2FPbmUvZGlnaXRhbC1hZ2VuY3kvaW1nL2puZy13NS1zYXZldGhlZGF0ZS1mYWxsLTIwMjJfb2cucG5nIiAvPg0KPC9kaXY+DQo8c3ZnIHZpZXdCb3g9IjAgMCAxNjMzIDg5NSI+DQogIDxkZWZzPg0KICAgIDxjbGlwUGF0aCBpZD0iZmVhdE1hc2siPg0KICAgICAgPHBhdGggY2xhc3M9J3BhdGgnDQogICAgICAgIGQ9Ik0wLjUgMC40MTgyNzhWNTgxLjM3Qzk0LjM0NjEgNjYxLjc0MiAxOTguNSA3NDUuNSAzNDUgODA5LjE1M0M0NzIuNSA4NjQuNTUyIDY0Mi4yNjkgODk0LjkyNCA3OTYgODk1Qzk2MS41NjEgODk0LjkyNyAxMTY0LjU5IDg2MC43OTQgMTMxMC41IDgwOS4xNTNDMTQ1Ni40MSA3NTcuNTEzIDE1NDAuNzkgNjcyLjM1MyAxNjMyLjUgNTgxLjM3VjAuMzkwNjI1TDAuNSAwLjQxODI3OFoiIC8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KPC9zdmc+PC8+",Feat=({data:P={}})=>{const s=htmlContent$1({...P});return jsxRuntimeExports.jsx("div",{className:"Events-Feat","data-comp":"Feat",children:jsxRuntimeExports.jsx("div",{className:"feat_container",dangerouslySetInnerHTML:{__html:s}})})},PhotoSwipe=reactExports.forwardRef((P,s)=>{let{list:R,tag:T,alias:q="",lazy:W,slidesPerView:_e=5,freeMode:ae,pagination:$,spaceBetween:ge=10,slidesPerGroup:De,effect:ve}=P;const[wn,Dn]=reactExports.useState(R.filter(qe=>qe.active)),X=reactExports.useRef(P.iUN||Math.round(Math.random()*1e4)),z=X.current;useInView({threshold:.5,triggerOnce:!1,onChange:(qe,ye)=>{console.log("[WWA] Inview:",qe,ye.target.dataset.ndx)}});let on=wn.map((qe,ye)=>reactExports.createElement(Slide,{ndx:ye,iUN:z,key:`vid_${z}_${ye}`},jsxRuntimeExports.jsx("img",{id:`my-player_${z}_${ye}`,className:`slide_photo ${W?"swiper-lazy":""}`,src:qe.image}),W?jsxRuntimeExports.jsx("div",{className:"swiper-lazy-preloader"}):null)),Qe={alias:q,ref:s,iUN:z,loop:!0,auto:!1,autoHeight:!0,navigation,pagination:$,slidesPerView:_e,lazy:W,freeMode:ae,spaceBetween:ge,slidesPerGroup:De,effect:ve};return jsxRuntimeExports.jsx("div",{className:`PhotoSwipe ${T}`,children:jsxRuntimeExports.jsx(Slider,{...Qe,children:on})})}),get_device=function({mode:P="size"},s){let R={small:"mobile",medium:"tablet",large:"desktop",xlarge:"max"},T=window.innerWidth,q=480,W=768,ae=T<q?"small":T>=q&&T<W?"medium":T>=W&&T<992?"large":"xlarge";ae=ae=="xlarge"?"large":ae;let $=R[`${ae}`];switch(P){case"size":return ae;case"type":return $;case"both":return{device_size:ae,device_type:$}}},Show=({alias:P="",title:s,sub:R,description:T,has_background:q=!1,card:W=!1,button1:_e={active:!0},button2:ae={active:!1},image:$,what:ge,feat:De=!1,photos:ve})=>{const[wn,Dn]=reactExports.useState(0),X=reactExports.useRef(""),z=reactExports.useRef({});reactExports.useEffect(()=>()=>{},[]);let on=q?jsxRuntimeExports.jsx("div",{className:"show_img_cont",children:jsxRuntimeExports.jsx("img",{className:"dad_job",src:"jng/MegaOne/digital-agency/img/dad_job2.png"})}):null,{device_size:Qe,device_type:qe}=get_device({mode:"both"});X.current==""&&(X.current=Qe);let ye=exists(ve)&&Array.isArray(ve)&&ve.length>0,Wn=W?"w3-card":"",r=W?"card-container":"",Ut=_e.active?jsxRuntimeExports.jsx("a",{href:_e.url,className:"learn w3-btn",children:_e.text}):null,fn=ae.active?jsxRuntimeExports.jsx("a",{className:"register w3-btn",href:ae.url,target:"_blank",children:ae.text}):null,pn=De?"":"show_list",Ge={list:ve,tag:"event-photo-slide",alias:"evp-swiper",lazy:!0,pagination:!1,ref:z},Kn=3;return Ge=Qe!="small"?{...Ge,slidesPerView:Kn,slidesPerGroup:Kn-1}:{...Ge,pagination:!1,slidesPerView:1,effect:"cube",spaceBetween:0},jsxRuntimeExports.jsxs("div",{className:`show_container container ${r} ${P} ${pn}`,"data-comp":"Show",children:[jsxRuntimeExports.jsxs("div",{className:`show_inner ${Wn}`,children:[jsxRuntimeExports.jsx("div",{className:"date-saver",children:jsxRuntimeExports.jsx("img",{className:"flyer_img",src:$})}),jsxRuntimeExports.jsxs("div",{className:"show_text_cont",children:[jsxRuntimeExports.jsx("h1",{children:s}),jsxRuntimeExports.jsx("h3",{children:R}),jsxRuntimeExports.jsx("p",{children:T}),jsxRuntimeExports.jsxs("div",{className:"nav_btns",children:[Ut,fn]})]}),on]}),ye?jsxRuntimeExports.jsx(PhotoSwipe,{...Ge}):null]})},july22={alias:"nov21",title:"WARD 1 SUMMIT AND RECRUITMENT FAIR",sub:"July 27, 2022",description:"The Jobs Not Guns Employment Summit is designed to provide a citywide forum for potential employers, training providers, support/social service providers, law enforcement and elected official to meet with District residents, community stakeholders and employment agencies to address the barriers for employing District residents. It provides an opportunity for employers to present their barriers to hiring district residents and residents to share their challenges for obtaining employment or a track for long-term career opportunities. Conducted both onsite and live-streaming, the Summit provides applicants an overview of their responsibilities to participate in job training or support programs, as needed, to achieve and maintain employment that can lead to a career.",has_background:!1,card:!0,image:"jng/MegaOne/digital-agency/img/july22-production-flyer.png",button1:{active:!1,text:"Explore",url:`${location.origin}/events/november-2021/`},photos:july22$1},nov21={alias:"nov21",title:"EAST OF THE RIVER JOBS NOT GUNS RECRUITMENT FAIR",sub:"November 19, 2021",description:"The DC Business Gun Violence Prevention Coalition hosted the EAST OF THE RIVER JOBS NOT GUNS RECRUITMENT FAIR” on Friday, November 19, 2021 at the Entertainment and Sports Arena donated by Events DC and again financially supported by Building Blocks DC through the Progressive Life Center.  The Coalition established an EOR Planning Committee of community stakeholders to assist with managing the design, recruitment and implementation of the event with the support of the Congresswoman Eleanor Holmes Norton, Attorney General Karl Racine, Chief of Police Robert Contee, all member of the Council the District of Columbia, District agencies and major employers.  The event hosted 75 exhibitors comprised of potential employers, apprenticeship and on-the-job training, support and social service providers and was attended by over 200 District residents.",has_background:!1,card:!0,image:"jng/MegaOne/digital-agency/img/jng-flyer-1.jpg",button1:{active:!0,text:"Explore",url:`${location.origin}/events/november-2021/`},photos:nov21$1},july21={alias:"",title:"JOBS NOT GUNS RECRUITMENT FAIR",sub:"July 20, 2021",description:`The DC Business Gun Violence Prevention Coalition hosted the ‘JOBS NOT GUNS RECRUITMENT FAIR” on Tuesday, July 20, 2021 at the Martin Luther King, Jr. Library located at 901 G Street, NW, Washington, DC 20001 from 11:00 a.m. until 3:00 p.m.

  The Planning Committee hosted 47 exhibitors comprising  of  a Registration Portal on EVENBRITE for potential exhibitors and attendees.  On-site registration of attendees was 57; approximately 85-90.  
  `,has_background:!1,card:!0,image:"jng/MegaOne/digital-agency/img/jng-social-flyer2.png",button1:{active:!1,text:"Explore",url:"#"},photos:july21$1},promo={h2:"We need all hands on deck",h3:"Take a moment, make a difference",button1:{active:!0,text:"Learn More",link:"#"},button2:{active:!0,text:"Contribute",link:"#"}},feat={h1:"Ward 5 Recruitment Fair",h3:"November 16, 2022",button1:{active:!0,text:"Explore",link:"#"},button2:{active:!0,text:"Register",link:"#"}},DeferMe$1=reactExports.lazy(()=>__vitePreload(()=>import("./templates/Events-C3w8cwN9.js"),__vite__mapDeps([5,2,1,3]),import.meta.url)),Events=()=>jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Feat,{data:feat}),jsxRuntimeExports.jsx(Countdown,{}),jsxRuntimeExports.jsx(Promo$1,{data:promo}),jsxRuntimeExports.jsx(Show,{...july22}),jsxRuntimeExports.jsx(Show,{...nov21}),jsxRuntimeExports.jsx(Show,{...july21}),jsxRuntimeExports.jsx(reactExports.Suspense,{fallback:jsxRuntimeExports.jsx("div",{className:"loader_modal w3-modal active",children:jsxRuntimeExports.jsx("div",{className:"loader",children:"Loading..."})}),children:jsxRuntimeExports.jsx(DeferMe$1,{})})]});class ErrorBoundary extends React.Component{constructor(s){super(s),this.state={hasError:!1}}static getDerivedStateFromError(s){return{hasError:!0}}componentDidCatch(s,R){console.error("[ErrorBoundary] error ",s),console.error("[ErrorBoundary] errorInfo ",R)}render(){return this.state.hasError?jsxRuntimeExports.jsx("h1",{children:"Something went wrong."}):this.props.children}}const SDiv2=()=>jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx("svg",{viewBox:"0 0 1633 895",children:jsxRuntimeExports.jsx("defs",{children:jsxRuntimeExports.jsx("clipPath",{id:"featMask",children:jsxRuntimeExports.jsx("path",{className:"path",d:"M0.5 0.418278V581.37C94.3461 661.742 198.5 745.5 345 809.153C472.5 864.552 642.269 894.924 796 895C961.561 894.927 1164.59 860.794 1310.5 809.153C1456.41 757.513 1540.79 672.353 1632.5 581.37V0.390625L0.5 0.418278Z"})})})})}),SimpleTree=P=>{const{title:s,description:R,tool:T="default",variant:q="",url:W,image:_e,hTag:ae="h4",config:$,callback:ge}=P,De=ae;let ve=jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(De,{className:"sTree_link_title clamp-1",children:s}),jsxRuntimeExports.jsx("div",{className:"sTree_link_desc clamp-1",children:R})]}),wn=_e||R?"left_display":"",Dn=W?jsxRuntimeExports.jsx("a",{className:`sTree_link ${wn}`,href:W,target:"_blank",children:ve}):jsxRuntimeExports.jsx("div",{className:`sTree_link ${wn}`,onClick:X=>{ge&&ge(X)},children:ve});return jsxRuntimeExports.jsx("li",{className:`sTree_link_content ${T} ${q} w3-btn w3-card`,children:Dn})},BUSINESS="business",AGENCY="agency",GENERAL="general",APPLICANT="applicant",LinkList=P=>{const{callback:s,active_form:R=""}=P,T={applicants:"https://www.surveymonkey.com/r/HJHY8VD",employers:"https://www.surveymonkey.com/r/HCR9W7L",services:"https://www.surveymonkey.com/r/GHFFQY3"},q=_e=>{switch(_e){case`${BUSINESS}`:location.replace(T.employers);break;case`${AGENCY}`:location.replace(T.services);break;default:location.replace(T.applicants);break}};let W="click to complete registration.";return jsxRuntimeExports.jsx("div",{className:`linkList_wrapper ${R}`,children:jsxRuntimeExports.jsxs("div",{className:"linkList_inner",children:[jsxRuntimeExports.jsx(SimpleTree,{title:"Business and Contractor",description:W,hTag:"h3",variant:`${R==BUSINESS?"active":""} ${BUSINESS}`,callback:()=>{q(BUSINESS)}}),jsxRuntimeExports.jsx(SimpleTree,{title:"Agency and Training",description:W,hTag:"h3",variant:`${R==AGENCY?"active":""} ${AGENCY}`,callback:()=>{q(AGENCY)}}),jsxRuntimeExports.jsx(SimpleTree,{title:"General Admission",description:W,hTag:"h3",variant:`${R==GENERAL?"active":""} ${GENERAL}`,callback:()=>{q(GENERAL)}}),jsxRuntimeExports.jsx(SimpleTree,{title:"Job Applicant",description:W,hTag:"h3",variant:`${R==APPLICANT?"active":""} ${APPLICANT}`,callback:()=>{q(APPLICANT)}})]})})},Survey=()=>jsxRuntimeExports.jsxs("div",{className:"survey_container","data-comp":"Survey",children:[jsxRuntimeExports.jsxs("div",{className:"survey_text_cont",children:[jsxRuntimeExports.jsx("h1",{children:"Ward 1 Summit And Recruitment Fair"}),jsxRuntimeExports.jsx("h3",{children:"July 27, 2022"})]}),jsxRuntimeExports.jsx("div",{className:"survey_img_cont",children:jsxRuntimeExports.jsx("img",{className:"dad_job",src:"jng/MegaOne/digital-agency/img/dad_job2.png"})}),jsxRuntimeExports.jsx("div",{className:"date-saver",children:jsxRuntimeExports.jsx(LinkList,{})}),jsxRuntimeExports.jsx(SDiv2,{})]}),Confirm=()=>jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Survey,{})}),Four04=()=>{let P={width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"};return jsxRuntimeExports.jsx("div",{style:P,children:"404"})},SOME_CONST="what",htmlContent=""+new URL("Articles-lZO9j7PJ.hbs",import.meta.url).href,Loader=P=>{const{data:s={},delay:R=3}=P,T=reactExports.useRef(),[q]=reactExports.useState(R*1e3);return reactExports.useRef(),reactExports.useEffect(()=>{let W=document.querySelector(".preloader");return T.current=setInterval(()=>{W.classList.add("hide"),clearInterval(T.current)},q),W.addEventListener("click",_e=>{document.querySelector(".preloader").classList.add("hide")}),()=>{clearInterval(T.current)}},[]),null},DeferMe=reactExports.lazy(()=>__vitePreload(()=>import("./templates/DeferMe-CeohIxAS.js").then(P=>P.D),__vite__mapDeps([6,1,7]),import.meta.url)),ArticleDefer=reactExports.lazy(()=>__vitePreload(()=>import("./templates/ArticleDefer-CtAOWUrY.js"),__vite__mapDeps([8,9]),import.meta.url)),getDeferMe={DeferMe,ArticleDefer},DelayDefer=P=>{let{filename:s="DeferMe"}=P;const R=()=>{let T=getDeferMe[`${s}`];ReactDOM.render(jsxRuntimeExports.jsx(reactExports.Suspense,{fallback:jsxRuntimeExports.jsx("div",{className:"loader_modal w3-modal active",children:jsxRuntimeExports.jsx("div",{className:"loader",children:"Loading..."})}),children:jsxRuntimeExports.jsx(T,{})}),document.querySelector(".deferMe"))};return reactExports.useEffect(()=>(R(),()=>{}),[]),null},HeroImg=P=>{let{hero:s={}}=P,{src:R="jng/js/elements/Articles/img/news-1.jpg",alt:T="image"}=s;return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx("div",{className:"post-thumbnail",children:jsxRuntimeExports.jsx("img",{src:R,alt:T})})})},article_data={sample_article:{categories:[{title:"Fashion",href:""},{title:"Travel",href:""}],hero:{},author:{}},our_process:{categories:[{title:"Contributions",href:""},{title:"Media Coverage",href:""}],hero:{src:"jng/js/elements/Articles/img/news-1.jpg",alt:"image"},author:{name:"Some Name",date:"November 1, 2022"}}},Categories=P=>{let{categories:s}=P,R=s.map(T=>jsxRuntimeExports.jsx("a",{href:T.href,rel:"category tag",children:T.title}));return s.length>0?jsxRuntimeExports.jsx("span",{className:"post-categories",children:R}):null},Author=P=>{const{type:s,author:R={}}=P;let{name:T="Mark Anderson",date:q="July 24, 2020"}=R;return s=="byline"?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("span",{className:"post-author",children:["By ",jsxRuntimeExports.jsx("a",{href:"#",children:T})]}),jsxRuntimeExports.jsx("span",{className:"post-separator",children:"/"}),jsxRuntimeExports.jsxs("span",{className:"post-date",children:["On ",q]})]}):null},Articles=P=>{var ge,De;let{temp_key:s="sample_article"}=P,R=(De=(ge=P==null?void 0:P.match)==null?void 0:ge.params)==null?void 0:De.article;R=R.toLowerCase(),htmlContent(q);let T;const[q,W]=reactExports.useState({url:"jng/"}),[_e,ae]=reactExports.useState(!1);reactExports.useEffect(()=>($(),()=>{}),[]);const $=async()=>{debugger;W(article_data[s]),ae(!0)};switch(R){case SOME_CONST:T=jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Loader,{}),jsxRuntimeExports.jsx(DelayDefer,{filename:"ArticleDefer"}),jsxRuntimeExports.jsx("div",{className:"preloader",children:jsxRuntimeExports.jsx("div",{className:"box"})}),jsxRuntimeExports.jsx("div",{className:"cd-transition-layer visible opening",children:jsxRuntimeExports.jsx("div",{className:"bg-layer"})}),jsxRuntimeExports.jsxs("section",{className:"blog-single",children:[jsxRuntimeExports.jsx("h2",{className:"d-none",children:"hidden"}),jsxRuntimeExports.jsx("div",{className:"container",children:jsxRuntimeExports.jsxs("div",{className:"row",children:[jsxRuntimeExports.jsxs("div",{className:"col-lg-8",children:[jsxRuntimeExports.jsxs("article",{className:"blog-classic",children:[exists(q==null?void 0:q.hero)?jsxRuntimeExports.jsx(HeroImg,{...q}):null,jsxRuntimeExports.jsxs("div",{className:"post-details alt-font",children:[exists(q==null?void 0:q.categories)&&Array.isArray(q==null?void 0:q.categories)?jsxRuntimeExports.jsx(Categories,{...q}):null,exists(q==null?void 0:q.author)?jsxRuntimeExports.jsx(Author,{type:"byline",...q}):null]}),jsxRuntimeExports.jsx("h2",{className:"post-title",children:jsxRuntimeExports.jsx("a",{href:"#",rel:"bookmark",children:"Minimal Post With A Preview Image"})}),jsxRuntimeExports.jsxs("div",{className:"post-content",children:[jsxRuntimeExports.jsxs("p",{className:"mb-5",children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s lorem Ipsum is simply dummy text of the printing.",jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex eu vehicula. Sed sit placerat velit,"]}),jsxRuntimeExports.jsxs("blockquote",{className:"block-quote",children:[jsxRuntimeExports.jsx("p",{children:" You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth."}),jsxRuntimeExports.jsx("cite",{children:" William W. Purkey "})]}),jsxRuntimeExports.jsxs("p",{children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s lorem Ipsum is simply dummy text.",jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex eu vehicula. Sed sit placerat velit,"]})]}),jsxRuntimeExports.jsx("div",{className:"footer-meta",children:jsxRuntimeExports.jsxs("div",{className:"row",children:[jsxRuntimeExports.jsx("div",{className:"col-6",children:jsxRuntimeExports.jsx("div",{className:"post-tags",children:jsxRuntimeExports.jsxs("span",{className:"post_meta_item post_tags",children:[jsxRuntimeExports.jsx("a",{href:"#",rel:"tag",children:"Image"}),jsxRuntimeExports.jsx("a",{href:"#",rel:"tag",children:"Project"}),jsxRuntimeExports.jsx("a",{href:"#",rel:"tag",children:"Studio"})]})})}),jsxRuntimeExports.jsx("div",{className:"col-6",children:jsxRuntimeExports.jsx("div",{className:"post-social social-icon-bg",children:jsxRuntimeExports.jsxs("ul",{className:"share-icons",children:[jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"facebook",target:"_blank",href:"#",title:"Minimal Post With A Preview Image",children:jsxRuntimeExports.jsx("i",{className:"fab fa-facebook-f"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"twitter",target:"_blank",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-twitter"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"pinterest",target:"_blank",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-pinterest-p"})})})]})})})]})})]}),jsxRuntimeExports.jsx("div",{className:"post-navigation alt-font",children:jsxRuntimeExports.jsxs("div",{className:"row d-flex align-items-center",children:[jsxRuntimeExports.jsx("div",{className:"col-6",children:jsxRuntimeExports.jsx("div",{className:"post-previous",children:jsxRuntimeExports.jsxs("a",{href:"#",className:"single-post-nav left d-flex align-items-center",children:[jsxRuntimeExports.jsx("i",{className:"fa fa-angle-left"}),jsxRuntimeExports.jsxs("div",{className:"post-nav-content",children:[jsxRuntimeExports.jsx("p",{children:"Previous Post"}),jsxRuntimeExports.jsx("h6",{children:"Standard Post With A Image Gallery"})]})]})})}),jsxRuntimeExports.jsx("div",{className:"col-6",children:jsxRuntimeExports.jsx("div",{className:"post-next",children:jsxRuntimeExports.jsxs("a",{href:"#",className:"single-post-nav right d-flex align-items-center",children:[jsxRuntimeExports.jsxs("div",{className:"post-nav-content",children:[jsxRuntimeExports.jsx("p",{children:"Next Post"}),jsxRuntimeExports.jsx("h6",{children:"Minimal Post With A Preview Image"})]}),jsxRuntimeExports.jsx("i",{className:"fa fa-angle-right"})]})})})]})}),jsxRuntimeExports.jsxs("div",{className:"agency-author",children:[jsxRuntimeExports.jsx("div",{className:"author-avatar",children:jsxRuntimeExports.jsx("img",{alt:"image",src:"jng/js/elements/Articles/img/author.jpg",className:"avatar"})}),jsxRuntimeExports.jsxs("div",{className:"author-content",children:[jsxRuntimeExports.jsx("span",{className:"text-small",children:"Written By"}),jsxRuntimeExports.jsx("h6",{children:jsxRuntimeExports.jsx("a",{href:"#",children:"Mark Anderson"})}),jsxRuntimeExports.jsx("div",{className:"author-description",children:jsxRuntimeExports.jsx("p",{children:"Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non."})})]})]}),jsxRuntimeExports.jsxs("div",{className:"comments-area blog-comment",id:"comments",children:[jsxRuntimeExports.jsx("div",{className:"comment-form-title alt-font",children:jsxRuntimeExports.jsx("span",{className:"text-outside-line-full",children:"Write a comment "})}),jsxRuntimeExports.jsx("form",{action:"/",method:"post",id:"commentform",className:"comment-form blog-comment-form",noValidate:"",children:jsxRuntimeExports.jsxs("div",{className:"row",children:[jsxRuntimeExports.jsx("div",{className:"col-lg-4",children:jsxRuntimeExports.jsx("input",{id:"author",placeholder:"Name *",className:"input-field comment-fields",name:"author",type:"text",defaultValue:""})}),jsxRuntimeExports.jsx("div",{className:"col-lg-4",children:jsxRuntimeExports.jsx("input",{id:"email",placeholder:"Email *",className:"input-field comment-fields",name:"email",type:"email",defaultValue:""})}),jsxRuntimeExports.jsx("div",{className:"col-lg-4",children:jsxRuntimeExports.jsx("input",{id:"url",placeholder:"Website",className:"input-field medium-input comment-fields",name:"url",type:"url",defaultValue:""})}),jsxRuntimeExports.jsxs("div",{className:"col-md-12",children:[jsxRuntimeExports.jsx("textarea",{id:"comment",placeholder:"Enter your comment here...",rows:"8",className:"input-field comment-fields",name:"comment",required:"required"}),jsxRuntimeExports.jsxs("a",{href:"#",id:"submit_btn",className:"btn btn-large btn-rounded btn-purple btn-hvr-blue d-block",children:["Send Message",jsxRuntimeExports.jsx("div",{className:"btn-hvr-setting",children:jsxRuntimeExports.jsxs("ul",{className:"btn-hvr-setting-inner",children:[jsxRuntimeExports.jsx("li",{className:"btn-hvr-effect"}),jsxRuntimeExports.jsx("li",{className:"btn-hvr-effect"}),jsxRuntimeExports.jsx("li",{className:"btn-hvr-effect"}),jsxRuntimeExports.jsx("li",{className:"btn-hvr-effect"})]})})]})]})]})})]})]}),jsxRuntimeExports.jsx("div",{className:"col-lg-4",children:jsxRuntimeExports.jsxs("div",{className:"agency-widget",id:"secondary",role:"complementary",children:[jsxRuntimeExports.jsx("aside",{className:"widget widget_search",children:jsxRuntimeExports.jsxs("form",{method:"get",id:"searchform",role:"search",children:[jsxRuntimeExports.jsx("label",{className:"sr-only",htmlFor:"s",children:"Search"}),jsxRuntimeExports.jsxs("div",{className:"input-group",children:[jsxRuntimeExports.jsx("input",{className:"field form-control",id:"s",name:"s",type:"text",placeholder:"Search …",defaultValue:""}),jsxRuntimeExports.jsx("span",{className:"input-group-append",children:jsxRuntimeExports.jsx("button",{className:"submit btn-search",id:"searchsubmit",name:"submit",type:"submit",children:jsxRuntimeExports.jsx("i",{className:"fas fa-search"})})})]})]})}),jsxRuntimeExports.jsxs("aside",{className:"widget widget_categories",children:[jsxRuntimeExports.jsx("h3",{className:"widget-title",children:"Topics"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsxs("li",{className:"cat-item",children:[jsxRuntimeExports.jsx("a",{href:"#",children:"Art"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"5"})]}),jsxRuntimeExports.jsxs("li",{className:"cat-item",children:[jsxRuntimeExports.jsx("a",{href:"#",children:"Fashion"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"4"})]}),jsxRuntimeExports.jsxs("li",{className:"cat-item",children:[jsxRuntimeExports.jsx("a",{href:"#",children:"Lifestyle"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"2"})]}),jsxRuntimeExports.jsxs("li",{className:"cat-item",children:[jsxRuntimeExports.jsx("a",{href:"#",children:"Motivation"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"5"})]}),jsxRuntimeExports.jsxs("li",{className:"cat-item",children:[jsxRuntimeExports.jsx("a",{href:"#",children:"Travel"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"7"})]})]})]}),jsxRuntimeExports.jsxs("aside",{className:"widget latest_post_widget",children:[jsxRuntimeExports.jsx("h3",{className:"widget-title",children:"Popular Post"}),jsxRuntimeExports.jsxs("ul",{className:"blog-latest-post",children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("figure",{children:jsxRuntimeExports.jsx("a",{href:"#",children:jsxRuntimeExports.jsx("img",{width:"150",height:"150",src:"jng/js/elements/Articles/img/news-1-150x150.jpg",className:"attachment-thumbnail",alt:"image"})})}),jsxRuntimeExports.jsxs("div",{className:"post-head",children:[jsxRuntimeExports.jsx("a",{className:"title",href:"#",children:"Minimal Post With A Preview Image"}),jsxRuntimeExports.jsx("span",{className:"clearfix"}),"July 24, 2020 | by ",jsxRuntimeExports.jsx("a",{href:"#",children:"Mark Anderson"})]})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("figure",{children:jsxRuntimeExports.jsx("a",{href:"#",children:jsxRuntimeExports.jsx("img",{width:"150",height:"150",src:"jng/js/elements/Articles/img/news-1-150x150.jpg",className:"attachment-thumbnail",alt:"image"})})}),jsxRuntimeExports.jsxs("div",{className:"post-head",children:[jsxRuntimeExports.jsx("a",{className:"title",href:"#",children:"Minimal Post With A Preview Image"}),jsxRuntimeExports.jsx("span",{className:"clearfix"}),"July 24, 2020 | by ",jsxRuntimeExports.jsx("a",{href:"#",children:"Mark Anderson"})]})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("figure",{children:jsxRuntimeExports.jsx("a",{href:"#",children:jsxRuntimeExports.jsx("img",{width:"150",height:"150",src:"jng/js/elements/Articles/img/news-1-150x150.jpg",className:"attachment-thumbnail",alt:"image"})})}),jsxRuntimeExports.jsxs("div",{className:"post-head",children:[jsxRuntimeExports.jsx("a",{className:"title",href:"#",children:"Minimal Post With A Preview Image"}),jsxRuntimeExports.jsx("span",{className:"clearfix"}),"July 24, 2020 | by ",jsxRuntimeExports.jsx("a",{href:"#",children:"Mark Anderson"})]})]})]})]}),jsxRuntimeExports.jsxs("aside",{id:"archives-2",className:"widget widget_archive",children:[jsxRuntimeExports.jsx("h3",{className:"widget-title",children:"Archives"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("a",{href:"#",children:"July 2020"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"2"})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("a",{href:"#",children:"May 2020"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"1"})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("a",{href:"#",children:"June 2018"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"3"})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("a",{href:"#",children:"March 2017"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"3"})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("a",{href:"#",children:"May 2016"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"4"})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("a",{href:"#",children:"August 2015"})," ",jsxRuntimeExports.jsx("span",{className:"dots"}),jsxRuntimeExports.jsx("span",{className:"counts",children:"2"})]})]})]}),jsxRuntimeExports.jsx("aside",{className:"widget widget_media_image",children:jsxRuntimeExports.jsx("a",{href:"#",children:jsxRuntimeExports.jsx("img",{src:"jng/js/elements/Articles/img/advertisment.jpg",className:"add-image",alt:"image"})})})]})})]})})]}),jsxRuntimeExports.jsx("footer",{className:"footer-style-1 bg-light",children:jsxRuntimeExports.jsx("div",{className:"container",children:jsxRuntimeExports.jsxs("div",{className:"row align-items-center",children:[jsxRuntimeExports.jsx("div",{className:"col-md-6",children:jsxRuntimeExports.jsx("div",{className:"footer-social",children:jsxRuntimeExports.jsxs("ul",{className:"list-unstyled",children:[jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"wow fadeInUp",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-facebook-f","aria-hidden":"true"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"wow fadeInDown",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-twitter","aria-hidden":"true"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"wow fadeInUp",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-google-plus-g","aria-hidden":"true"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"wow fadeInDown",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-linkedin-in","aria-hidden":"true"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"wow fadeInUp",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-instagram","aria-hidden":"true"})})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("a",{className:"wow fadeInDown",href:"#",children:jsxRuntimeExports.jsx("i",{className:"fab fa-pinterest-p","aria-hidden":"true"})})})]})})}),jsxRuntimeExports.jsx("div",{className:"col-md-6 text-md-right",children:jsxRuntimeExports.jsxs("p",{className:"company-about fadeIn",children:["© 2020 MegaOne. Made With Love By ",jsxRuntimeExports.jsx("a",{href:"#",children:"Themesindustry"})]})})]})})}),jsxRuntimeExports.jsx("div",{id:"aimated-cursor",children:jsxRuntimeExports.jsx("div",{id:"cursor",children:jsxRuntimeExports.jsx("div",{id:"cursor-loader"})})}),jsxRuntimeExports.jsx("span",{className:"scroll-top-arrow",children:jsxRuntimeExports.jsx("i",{className:"fas fa-angle-up"})})]});break;default:T=jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Four04,{})});break}return T};var module={exports:{}},exports=module.exports;(function(P,s){if(typeof exports=="object"&&typeof module=="object")module.exports=s(jQuery||__CJS__import__0__);else if(typeof define=="function"&&define.amd)define(["jquery"],s);else{var R=s(typeof exports=="object"?jQuery||__CJS__import__0__:P.jQuery);for(var T in R)(typeof exports=="object"?exports:P)[T]=R[T]}})(window,function(__WEBPACK_EXTERNAL_MODULE_jquery__){return function(P){var s={};function R(T){if(s[T])return s[T].exports;var q=s[T]={i:T,l:!1,exports:{}};return P[T].call(q.exports,q,q.exports,R),q.l=!0,q.exports}return R.m=P,R.c=s,R.d=function(T,q,W){R.o(T,q)||Object.defineProperty(T,q,{enumerable:!0,get:W})},R.r=function(T){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(T,"__esModule",{value:!0})},R.t=function(T,q){if(1&q&&(T=R(T)),8&q||4&q&&typeof T=="object"&&T&&T.__esModule)return T;var W=Object.create(null);if(R.r(W),Object.defineProperty(W,"default",{enumerable:!0,value:T}),2&q&&typeof T!="string")for(var _e in T)R.d(W,_e,(function(ae){return T[ae]}).bind(null,_e));return W},R.n=function(T){var q=T&&T.__esModule?function(){return T.default}:function(){return T};return R.d(q,"a",q),q},R.o=function(T,q){return Object.prototype.hasOwnProperty.call(T,q)},R.p="",R(R.s="../../../../../../../../../../private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js")}({"../../../../../../../../../../private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/foundation.core */ "./js/foundation.core.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/foundation.util.triggers */ "./js/foundation.util.triggers.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/foundation.abide */ "./js/foundation.abide.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/foundation.accordion */ "./js/foundation.accordion.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/foundation.accordionMenu */ "./js/foundation.accordionMenu.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/foundation.drilldown */ "./js/foundation.drilldown.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/foundation.dropdown */ "./js/foundation.dropdown.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/foundation.dropdownMenu */ "./js/foundation.dropdownMenu.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/foundation.equalizer */ "./js/foundation.equalizer.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/foundation.interchange */ "./js/foundation.interchange.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/foundation.magellan */ "./js/foundation.magellan.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/foundation.offcanvas */ "./js/foundation.offcanvas.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/foundation.orbit */ "./js/foundation.orbit.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/foundation.responsiveMenu */ "./js/foundation.responsiveMenu.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/foundation.responsiveToggle */ "./js/foundation.responsiveToggle.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/foundation.reveal */ "./js/foundation.reveal.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/foundation.slider */ "./js/foundation.slider.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/foundation.sticky */ "./js/foundation.sticky.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./js/foundation.tabs */ "./js/foundation.tabs.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./js/foundation.toggler */ "./js/foundation.toggler.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./js/foundation.tooltip */ "./js/foundation.tooltip.js");
/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./js/foundation.responsiveAccordionTabs */ "./js/foundation.responsiveAccordionTabs.js");


_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].MediaQuery = _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"];

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_4__["Abide"], 'Abide');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_5__["Accordion"], 'Accordion');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__["AccordionMenu"], 'AccordionMenu');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_7__["Drilldown"], 'Drilldown');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], 'Dropdown');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], 'DropdownMenu');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_10__["Equalizer"], 'Equalizer');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_11__["Interchange"], 'Interchange');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_12__["Magellan"], 'Magellan');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_13__["OffCanvas"], 'OffCanvas');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_14__["Orbit"], 'Orbit');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_15__["ResponsiveMenu"], 'ResponsiveMenu');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_16__["ResponsiveToggle"], 'ResponsiveToggle');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__["Reveal"], 'Reveal');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_18__["Slider"], 'Slider');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_19__["Sticky"], 'Sticky');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__["Tabs"], 'Tabs');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__["Toggler"], 'Toggler');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_22__["Tooltip"], 'Tooltip');

_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_23__["ResponsiveAccordionTabs"], 'ResponsiveAccordionTabs');

//# sourceURL=webpack:////private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js?`)},"./js/foundation.abide.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abide", function() { return Abide; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Abide module.
 * @module foundation.abide
 */

var Abide =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Abide, _Plugin);

  function Abide() {
    _classCallCheck(this, Abide);

    return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));
  }

  _createClass(Abide, [{
    key: "_setup",

    /**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
      this.className = 'Abide'; // ie9 back compat

      this._init();
    }
    /**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:
      this.$element.find('input').not('[type=submit]'), // * all input fields expect submit
      this.$element.find('textarea, select') // * all textareas and select fields
      );
      var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

      if (this.options.a11yAttributes) {
        this.$inputs.each(function (i, input) {
          return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
        });
        $globalErrors.each(function (i, error) {
          return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
        });
      }

      this._events();
    }
    /**
     * Initializes events for Abide.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;

      this.$element.off('.abide').on('reset.zf.abide', function () {
        _this3.resetForm();
      }).on('submit.zf.abide', function () {
        return _this3.validateForm();
      });

      if (this.options.validateOn === 'fieldChange') {
        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }

      if (this.options.liveValidate) {
        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }

      if (this.options.validateOnBlur) {
        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }
    }
    /**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      this._init();
    }
    /**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: "requiredCheck",
    value: function requiredCheck($el) {
      if (!$el.attr('required')) return true;
      var isGood = true;

      switch ($el[0].type) {
        case 'checkbox':
          isGood = $el[0].checked;
          break;

        case 'select':
        case 'select-one':
        case 'select-multiple':
          var opt = $el.find('option:selected');
          if (!opt.length || !opt.val()) isGood = false;
          break;

        default:
          if (!$el.val() || !$el.val().length) isGood = false;
      }

      return isGood;
    }
    /**
     * Get:
     * - Based on $el, the first element(s) corresponding to \`formErrorSelector\` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute \`[data-form-error-for]\` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */

  }, {
    key: "findFormError",
    value: function findFormError($el) {
      var id = $el[0].id;
      var $error = $el.siblings(this.options.formErrorSelector);

      if (!$error.length) {
        $error = $el.parent().find(this.options.formErrorSelector);
      }

      if (id) {
        $error = $error.add(this.$element.find("[data-form-error-for=\\"".concat(id, "\\"]")));
      }

      return $error;
    }
    /**
     * Get the first element in this order:
     * 2. The <label> with the attribute \`[for="someInputId"]\`
     * 3. The \`.closest()\` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: "findLabel",
    value: function findLabel($el) {
      var id = $el[0].id;
      var $label = this.$element.find("label[for=\\"".concat(id, "\\"]"));

      if (!$label.length) {
        return $el.closest('label');
      }

      return $label;
    }
    /**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute \`[for="someInputId"]\`
     * 3. The \`.closest()\` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: "findRadioLabels",
    value: function findRadioLabels($els) {
      var _this4 = this;

      var labels = $els.map(function (i, el) {
        var id = el.id;

        var $label = _this4.$element.find("label[for=\\"".concat(id, "\\"]"));

        if (!$label.length) {
          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
        }

        return $label[0];
      });
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
    }
    /**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */

  }, {
    key: "addErrorClasses",
    value: function addErrorClasses($el) {
      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);

      if ($label.length) {
        $label.addClass(this.options.labelErrorClass);
      }

      if ($formError.length) {
        $formError.addClass(this.options.formErrorClass);
      }

      $el.addClass(this.options.inputErrorClass).attr({
        'data-invalid': '',
        'aria-invalid': true
      });
    }
    /**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */

  }, {
    key: "addA11yAttributes",
    value: function addA11yAttributes($el) {
      var $errors = this.findFormError($el);
      var $labels = $errors.filter('label');
      var $error = $errors.first();
      if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set

      if (typeof $el.attr('aria-describedby') === 'undefined') {
        // Get the first error ID or create one
        var errorId = $error.attr('id');

        if (typeof errorId === 'undefined') {
          errorId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-error');
          $error.attr('id', errorId);
        }

        ;
        $el.attr('aria-describedby', errorId);
      }

      if ($labels.filter('[for]').length < $labels.length) {
        // Get the input ID or create one
        var elemId = $el.attr('id');

        if (typeof elemId === 'undefined') {
          elemId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-input');
          $el.attr('id', elemId);
        }

        ; // For each label targeting $el, set [for] if it is not set.

        $labels.each(function (i, label) {
          var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
        });
      } // For each error targeting $el, set [role=alert] if it is not set.


      $errors.each(function (i, label) {
        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
      }).end();
    }
    /**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */

  }, {
    key: "addGlobalErrorA11yAttributes",
    value: function addGlobalErrorA11yAttributes($el) {
      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
    }
    /**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */

  }, {
    key: "removeRadioErrorClasses",
    value: function removeRadioErrorClasses(groupName) {
      var $els = this.$element.find(":radio[name=\\"".concat(groupName, "\\"]"));
      var $labels = this.findRadioLabels($els);
      var $formErrors = this.findFormError($els);

      if ($labels.length) {
        $labels.removeClass(this.options.labelErrorClass);
      }

      if ($formErrors.length) {
        $formErrors.removeClass(this.options.formErrorClass);
      }

      $els.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
    }
    /**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */

  }, {
    key: "removeErrorClasses",
    value: function removeErrorClasses($el) {
      // radios need to clear all of the els
      if ($el[0].type == 'radio') {
        return this.removeRadioErrorClasses($el.attr('name'));
      }

      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);

      if ($label.length) {
        $label.removeClass(this.options.labelErrorClass);
      }

      if ($formError.length) {
        $formError.removeClass(this.options.formErrorClass);
      }

      $el.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
    }
    /**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */

  }, {
    key: "validateInput",
    value: function validateInput($el) {
      var clearRequire = this.requiredCheck($el),
          validated = false,
          customValidator = true,
          validator = $el.attr('data-validator'),
          equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs

      if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
        return true;
      }

      switch ($el[0].type) {
        case 'radio':
          validated = this.validateRadio($el.attr('name'));
          break;

        case 'checkbox':
          validated = clearRequire;
          break;

        case 'select':
        case 'select-one':
        case 'select-multiple':
          validated = clearRequire;
          break;

        default:
          validated = this.validateText($el);
      }

      if (validator) {
        customValidator = this.matchValidation($el, validator, $el.attr('required'));
      }

      if ($el.attr('data-equalto')) {
        equalTo = this.options.validators.equalTo($el);
      }

      var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

      if (goodToGo) {
        // Re-validate inputs that depend on this one with equalto
        var dependentElements = this.$element.find("[data-equalto=\\"".concat($el.attr('id'), "\\"]"));

        if (dependentElements.length) {
          var _this = this;

          dependentElements.each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
              _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            }
          });
        }
      }

      this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
      /**
       * Fires when the input is done checking for validation. Event trigger is either \`valid.zf.abide\` or \`invalid.zf.abide\`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */

      $el.trigger(message, [$el]);
      return goodToGo;
    }
    /**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */

  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this5 = this;

      var acc = [];

      var _this = this;

      this.$inputs.each(function () {
        acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
      });
      var noError = acc.indexOf(false) === -1;
      this.$element.find('[data-abide-error]').each(function (i, elem) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set

        if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error

        $elem.css('display', noError ? 'none' : 'block');
      });
      /**
       * Fires when the form is finished validating. Event trigger is either \`formvalid.zf.abide\` or \`forminvalid.zf.abide\`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */

      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
      return noError;
    }
    /**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */

  }, {
    key: "validateText",
    value: function validateText($el, pattern) {
      // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
      pattern = pattern || $el.attr('pattern') || $el.attr('type');
      var inputText = $el.val();
      var valid = false;

      if (inputText.length) {
        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
        if (this.options.patterns.hasOwnProperty(pattern)) {
          valid = this.options.patterns[pattern].test(inputText);
        } // If the pattern name isn't also the type attribute of the field, then test it as a regexp
        else if (pattern !== $el.attr('type')) {
            valid = new RegExp(pattern).test(inputText);
          } else {
            valid = true;
          }
      } // An empty field is valid if it's not required
      else if (!$el.prop('required')) {
          valid = true;
        }

      return valid;
    }
    /**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single \`<input>\`, it validates by checking the \`required\` and \`checked\` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */

  }, {
    key: "validateRadio",
    value: function validateRadio(groupName) {
      // If at least one radio in the group has the \`required\` attribute, the group is considered required
      // Per W3C spec, all radio buttons in a group should have \`required\`, but we're being nice
      var $group = this.$element.find(":radio[name=\\"".concat(groupName, "\\"]"));
      var valid = false,
          required = false; // For the group to be required, at least one radio needs to be required

      $group.each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
          required = true;
        }
      });
      if (!required) valid = true;

      if (!valid) {
        // For the group to be valid, at least one radio needs to be checked
        $group.each(function (i, e) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
            valid = true;
          }
        });
      }

      ;
      return valid;
    }
    /**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with \`data-validator="foo bar baz"\` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */

  }, {
    key: "matchValidation",
    value: function matchValidation($el, validators, required) {
      var _this6 = this;

      required = required ? true : false;
      var clear = validators.split(' ').map(function (v) {
        return _this6.options.validators[v]($el, required, $el.parent());
      });
      return clear.indexOf(false) === -1;
    }
    /**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var $form = this.$element,
          opts = this.options;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
      $form.find('[data-abide-error]').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      /**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */

      $form.trigger('formreset.zf.abide', [$form]);
    }
    /**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this = this;

      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
      this.$inputs.off('.abide').each(function () {
        _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }
  }]);

  return Abide;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
 * Default settings for plugin
 */


Abide.defaults = {
  /**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
  validateOn: 'fieldChange',

  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',

  /**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',

  /**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
  formErrorSelector: '.form-error',

  /**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
  formErrorClass: 'is-visible',

  /**
   * If true, automatically insert when possible:
   * - \`[aria-describedby]\` on fields
   * - \`[role=alert]\` on form errors and \`[for]\` on form error labels
   * - \`[aria-live]\` on global errors \`[data-abide-error]\` (see option \`a11yErrorLevel\`).
   * @option
   * @type {boolean}
   * @default true
   */
  a11yAttributes: true,

  /**
   * [aria-live] attribute value to be applied on global errors \`[data-abide-error]\`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
  a11yErrorLevel: 'assertive',

  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
  liveValidate: false,

  /**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
  validateOnBlur: false,
  patterns: {
    alpha: /^[a-zA-Z]+$/,
    alpha_numeric: /^[a-zA-Z0-9]+$/,
    integer: /^[-+]?\\d+$/,
    number: /^[-+]?\\d*(?:[\\.\\,]\\d+)?$/,
    // amex, visa, diners
    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$/,
    cvv: /^([0-9]){3,4}$/,
    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
    // From CommonRegexJS (@talyssonoc)
    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
    url: /^((?:(https?|ftps?|file|ssh|sftp):\\/\\/|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\))+(?:\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\)|[^\\s\`!()\\[\\]{};:\\'".,<>?\\xab\\xbb\\u201c\\u201d\\u2018\\u2019]))$/,
    // abc.de
    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,8}$/,
    datetime: /^([0-2][0-9]{3})\\-([0-1][0-9])\\-([0-3][0-9])T([0-5][0-9])\\:([0-5][0-9])\\:([0-5][0-9])(Z|([\\-\\+]([0-1][0-9])\\:00))$/,
    // YYYY-MM-DD
    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
    // HH:MM:SS
    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
    dateISO: /^\\d{4}[\\/\\-]\\d{1,2}[\\/\\-]\\d{1,2}$/,
    // MM/DD/YYYY
    month_day_year: /^(0[1-9]|1[012])[- \\/.](0[1-9]|[12][0-9]|3[01])[- \\/.]\\d{4}$/,
    // DD/MM/YYYY
    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \\/.](0[1-9]|1[012])[- \\/.]\\d{4}$/,
    // #FFF or #FFFFFF
    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    // Domain || URL
    website: {
      test: function test(text) {
        return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
      }
    }
  },

  /**
   * Optional validation functions to be used. \`equalTo\` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
  validators: {
    equalTo: function equalTo(el, required, parent) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val() === el.val();
    }
  }
};


//# sourceURL=webpack:///./js/foundation.abide.js?`)},"./js/foundation.accordion.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */

var Accordion =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Accordion, _Plugin);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: "_setup",

    /**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
      this.className = 'Accordion'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Accordion', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_DOWN': 'next',
        'ARROW_UP': 'previous'
      });
    }
    /**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._isInitializing = true;
      this.$element.attr('role', 'tablist');
      this.$tabs = this.$element.children('[data-accordion-item]');
      this.$tabs.each(function (idx, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
            $content = $el.children('[data-tab-content]'),
            id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'accordion'),
            linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
        $el.find('a:first').attr({
          'aria-controls': id,
          'role': 'tab',
          'id': linkId,
          'aria-expanded': false,
          'aria-selected': false
        });
        $content.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId,
          'aria-hidden': true,
          'id': id
        });
      });
      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

      if ($initActive.length) {
        // Save up the initial hash to return to it later when going back in history
        this._initialAnchor = $initActive.prev('a').attr('href');

        this._openSingleTab($initActive);
      }

      this._checkDeepLink = function () {
        var anchor = window.location.hash;

        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }

        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

        var $link = anchor && _this2.$element.find("[href$=\\"".concat(anchor, "\\"]")); // Whether the anchor element that has been found is part of this element


        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, open it (if not already active)

        if ($anchor && $link && $link.length) {
          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
            _this2._openSingleTab($anchor);
          }

          ;
        } // Otherwise, close everything
        else {
            _this2._closeAllTabs();
          }

        if (isOwnAnchor) {
          // Roll up a little to show the titles
          if (_this2.options.deepLinkSmudge) {
            Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
              var offset = _this2.$element.offset();

              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                scrollTop: offset.top
              }, _this2.options.deepLinkSmudgeDelay);
            });
          }
          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */


          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
        }
      }; //use browser to open a tab, if it exists in this tabset


      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();

      this._isInitializing = false;
    }
    /**
     * Adds event handlers for items within the accordion.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$tabs.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $tabContent = $elem.children('[data-tab-content]');

        if ($tabContent.length) {
          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
            e.preventDefault();

            _this.toggle($tabContent);
          }).on('keydown.zf.accordion', function (e) {
            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Accordion', {
              toggle: function toggle() {
                _this.toggle($tabContent);
              },
              next: function next() {
                var $a = $elem.next().find('a').focus();

                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              previous: function previous() {
                var $a = $elem.prev().find('a').focus();

                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              handled: function handled() {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          });
        }
      });

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }
    /**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (\`.accordion-content\`).
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot toggle an accordion that is disabled.');
        return;
      }

      if ($target.parent().hasClass('is-active')) {
        this.up($target);
      } else {
        this.down($target);
      } //either replace or update browser history


      if (this.options.deepLink) {
        var anchor = $target.prev('a').attr('href');

        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
    }
    /**
     * Opens the accordion tab defined by \`$target\`.
     * @param {jQuery} $target - Accordion pane to open (\`.accordion-content\`).
     * @fires Accordion#down
     * @function
     */

  }, {
    key: "down",
    value: function down($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot call down on an accordion that is disabled.');
        return;
      }

      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
    }
    /**
     * Closes the tab defined by \`$target\`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (\`.accordion-content\`).
     * @fires Accordion#up
     * @function
     */

  }, {
    key: "up",
    value: function up($target) {
      if (this.$element.is('[disabled]')) {
        console.info('Cannot call up on an accordion that is disabled.');
        return;
      } // Don't close the item if it is already closed


      var $targetItem = $target.parent();
      if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with \`allowAllClosed\`)

      var $othersItems = $targetItem.siblings();
      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

      this._closeTab($target);
    }
    /**
     * Make the tab defined by \`$target\` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (\`.accordion-content\`).
     * @function
     * @private
     */

  }, {
    key: "_openSingleTab",
    value: function _openSingleTab($target) {
      // Close all the others active tabs.
      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

      if ($activeContents.length) {
        this._closeTab($activeContents.not($target));
      } // Then open the target.


      this._openTab($target);
    }
    /**
     * Opens the tab defined by \`$target\`.
     * @param {jQuery} $target - Accordion tab to open (\`.accordion-content\`).
     * @fires Accordion#down
     * @function
     * @private
     */

  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var _this3 = this;

      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', false);
      $targetItem.addClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': true,
        'aria-selected': true
      });
      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
        _this3.$element.trigger('down.zf.accordion', [$target]);
      });
    }
    /**
     * Closes the tab defined by \`$target\`.
     * @param {jQuery} $target - Accordion tab to close (\`.accordion-content\`).
     * @fires Accordion#up
     * @function
     * @private
     */

  }, {
    key: "_closeTab",
    value: function _closeTab($target) {
      var _this4 = this;

      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', true);
      $targetItem.removeClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': false,
        'aria-selected': false
      });
      $target.slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this4.$element.trigger('up.zf.accordion', [$target]);
      });
    }
    /**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */

  }, {
    key: "_closeAllTabs",
    value: function _closeAllTabs() {
      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

      if ($activeTabs.length) {
        this._closeTab($activeTabs);
      }
    }
    /**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
      this.$element.find('a').off('.zf.accordion');

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }
    }
  }]);

  return Accordion;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,

  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,

  /**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If \`deepLink\` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If \`deepLinkSmudge\` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If \`deepLink\` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};


//# sourceURL=webpack:///./js/foundation.accordion.js?`)},"./js/foundation.accordionMenu.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return AccordionMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */

var AccordionMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(AccordionMenu, _Plugin);

  function AccordionMenu() {
    _classCallCheck(this, AccordionMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
  }

  _createClass(AccordionMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
      this.className = 'AccordionMenu'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('AccordionMenu', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_RIGHT': 'open',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'close',
        'ESCAPE': 'closeAll'
      });
    }
    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'accordion');

      var _this = this;

      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

      this.$element.attr({
        'role': 'tree',
        'aria-multiselectable': this.options.multiOpen
      });
      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
      this.$menuLinks.each(function () {
        var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu-link'),
            $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $sub = $elem.children('[data-submenu]'),
            subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu'),
            isActive = $sub.hasClass('is-active');

        if (_this.options.parentLink) {
          var $anchor = $elem.children('a');
          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
        }

        if (_this.options.submenuToggle) {
          $elem.addClass('has-submenu-toggle');
          $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
        } else {
          $elem.attr({
            'aria-controls': subId,
            'aria-expanded': isActive,
            'id': linkId
          });
        }

        $sub.attr({
          'aria-labelledby': linkId,
          'aria-hidden': !isActive,
          'role': 'group',
          'id': subId
        });
      });
      this.$element.find('li').attr({
        'role': 'treeitem'
      });
      var initPanes = this.$element.find('.is-active');

      if (initPanes.length) {
        var _this = this;

        initPanes.each(function () {
          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
        });
      }

      this._events();
    }
    /**
     * Adds event handlers for items within the menu.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$element.find('li').each(function () {
        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');

        if ($submenu.length) {
          if (_this.options.submenuToggle) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              _this.toggle($submenu);
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              e.preventDefault();

              _this.toggle($submenu);
            });
          }
        }
      }).on('keydown.zf.accordionmenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement,
            $target = $element.children('[data-submenu]');
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
              // has open sub menu
              $nextElement = $element.find('li:first-child').find('a').first();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
              // is first element of sub menu
              $prevElement = $element.parents('li').first().find('a').first();
            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
              // if previous element has open sub menu
              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
              // is last element of sub menu
              $nextElement = $element.parents('li').first().next('li').find('a').first();
            }

            return;
          }
        });
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'AccordionMenu', {
          open: function open() {
            if ($target.is(':hidden')) {
              _this.down($target);

              $target.find('li').first().find('a').first().focus();
            }
          },
          close: function close() {
            if ($target.length && !$target.is(':hidden')) {
              // close active sub of this item
              _this.up($target);
            } else if ($element.parent('[data-submenu]').length) {
              // close currently open sub
              _this.up($element.parent('[data-submenu]'));

              $element.parents('li').first().find('a').first().focus();
            }
          },
          up: function up() {
            $prevElement.focus();
            return true;
          },
          down: function down() {
            $nextElement.focus();
            return true;
          },
          toggle: function toggle() {
            if (_this.options.submenuToggle) {
              return false;
            }

            if ($element.children('[data-submenu]').length) {
              _this.toggle($element.children('[data-submenu]'));

              return true;
            }
          },
          closeAll: function closeAll() {
            _this.hideAll();
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }

            e.stopImmediatePropagation();
          }
        });
      }); //.attr('tabindex', 0);
    }
    /**
     * Closes all panes of the menu.
     * @function
     */

  }, {
    key: "hideAll",
    value: function hideAll() {
      this.up(this.$element.find('[data-submenu]'));
    }
    /**
     * Opens all panes of the menu.
     * @function
     */

  }, {
    key: "showAll",
    value: function showAll() {
      this.down(this.$element.find('[data-submenu]'));
    }
    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */

  }, {
    key: "toggle",
    value: function toggle($target) {
      if (!$target.is(':animated')) {
        if (!$target.is(':hidden')) {
          this.up($target);
        } else {
          this.down($target);
        }
      }
    }
    /**
     * Opens the sub-menu defined by \`$target\`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */

  }, {
    key: "down",
    value: function down($target) {
      var _this2 = this;

      if (!this.options.multiOpen) {
        this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
      }

      $target.addClass('is-active').attr({
        'aria-hidden': false
      });

      if (this.options.submenuToggle) {
        $target.prev('.submenu-toggle').attr({
          'aria-expanded': true
        });
      } else {
        $target.parent('.is-accordion-submenu-parent').attr({
          'aria-expanded': true
        });
      }

      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
        _this2.$element.trigger('down.zf.accordionMenu', [$target]);
      });
    }
    /**
     * Closes the sub-menu defined by \`$target\`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */

  }, {
    key: "up",
    value: function up($target) {
      var _this3 = this;

      var $submenus = $target.find('[data-submenu]');
      var $allmenus = $target.add($submenus);
      $submenus.slideUp(0);
      $allmenus.removeClass('is-active').attr('aria-hidden', true);

      if (this.options.submenuToggle) {
        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
      } else {
        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
      }

      $target.slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this3.$element.trigger('up.zf.accordionMenu', [$target]);
      });
    }
    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
      this.$element.find('a').off('click.zf.accordionMenu');
      this.$element.find('[data-is-parent-link]').detach();

      if (this.options.submenuToggle) {
        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
        this.$element.find('.submenu-toggle').remove();
      }

      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'accordion');
    }
  }]);

  return AccordionMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

AccordionMenu.defaults = {
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
  submenuToggle: false,

  /**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
  submenuToggleText: 'Toggle menu',

  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};


//# sourceURL=webpack:///./js/foundation.accordionMenu.js?`)},"./js/foundation.core.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return Foundation; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var FOUNDATION_VERSION = '6.5.1'; // Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify

var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Defines a Foundation plugin, adding it to the \`Foundation\` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function plugin(_plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas

    var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)

    this._plugins[attrName] = this[className] = _plugin;
  },

  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the \`zfPlugin\` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually \`this\` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function registerPlugin(plugin, name) {
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

    if (!plugin.$element.attr("data-".concat(pluginName))) {
      plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
    }

    if (!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */


    plugin.$element.trigger("init.zf.".concat(pluginName));

    this._uuids.push(plugin.uuid);

    return;
  },

  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually \`this\` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function unregisterPlugin(plugin) {
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

    plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */
    .trigger("destroyed.zf.".concat(pluginName));

    for (var prop in plugin) {
      plugin[prop] = null; //clean up script to prep for garbage collection.
    }

    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling \`$(element).data('pluginName')\`, or string of a plugin class i.e. \`'dropdown'\`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function reInit(plugins) {
    var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

    try {
      if (isJQ) {
        plugins.each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
        });
      } else {
        var type = _typeof(plugins),
            _this = this,
            fns = {
          'object': function object(plgs) {
            plgs.forEach(function (p) {
              p = hyphenate(p);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
            });
          },
          'string': function string() {
            plugins = hyphenate(plugins);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
          },
          'undefined': function undefined() {
            this['object'](Object.keys(_this._plugins));
          }
        };

        fns[type](plugins);
      }
    } catch (err) {
      console.error(err);
    } finally {
      return plugins;
    }
  },

  /**
   * Initialize plugins on any elements within \`elem\` (and \`elem\` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the \`document\` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function reflow(elem, plugins) {
    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    } // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
        plugins = [plugins];
      }

    var _this = this; // Iterate through each plugin


    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document

      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it

      $elem.each(function () {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            opts = {}; // Don't double-dip on plugins

        if ($el.data('zfPlugin')) {
          console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
          return;
        }

        if ($el.attr('data-options')) {
          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
            var opt = e.split(':').map(function (el) {
              return el.trim();
            });
            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }

        try {
          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
        } catch (er) {
          console.error(er);
        } finally {
          return;
        }
      });
    });
  },
  getFnName: functionName,
  addToJquery: function addToJquery($) {
    // TODO: consider not making this a jQuery function
    // TODO: need way to reflow vs. re-initialize

    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function foundation(method) {
      var type = _typeof(method),
          $noJS = $('.no-js');

      if ($noJS.length) {
        $noJS.removeClass('no-js');
      }

      if (type === 'undefined') {
        //needs to initialize the Foundation object, or an individual plugin.
        _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

        Foundation.reflow(this);
      } else if (type === 'string') {
        //an individual method to invoke on a plugin or group of plugins
        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary

        var plugClass = this.data('zfPlugin'); //determine the class of plugin

        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
          //make sure both the class and method exist
          if (this.length === 1) {
            //if there's only one, call it directly.
            plugClass[method].apply(plugClass, args);
          } else {
            this.each(function (i, el) {
              //otherwise loop through the jQuery collection and invoke the method on each
              plugClass[method].apply($(el).data('zfPlugin'), args);
            });
          }
        } else {
          //error for no class or no method
          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
        }
      } else {
        //error for invalid argument type
        throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
      }

      return this;
    };

    $.fn.foundation = foundation;
    return $;
  }
};
Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of \`func\`.
   * @returns function
   */
  throttle: function throttle(func, delay) {
    var timer = null;
    return function () {
      var context = this,
          args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};
window.Foundation = Foundation; // Polyfill for requestAnimationFrame

(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };
  var vendors = ['webkit', 'moz'];

  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }

  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;

    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */


  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function now() {
        return Date.now() - this.start;
      }
    };
  }
})();

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function fNOP() {},
        fBound = function fBound() {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }

    fBound.prototype = new fNOP();
    return fBound;
  };
} // Polyfill to get the name of a function in IE9


function functionName(fn) {
  if (typeof Function.prototype.name === 'undefined') {
    var funcNameRegex = /function\\s([^(]{1,})\\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (typeof fn.prototype === 'undefined') {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}

function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
} // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}



//# sourceURL=webpack:///./js/foundation.core.js?`)},"./js/foundation.core.plugin.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)

var Plugin =
/*#__PURE__*/
function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this._setup(element, options);

    var pluginName = getPluginName(this);
    this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

    if (!this.$element.attr("data-".concat(pluginName))) {
      this.$element.attr("data-".concat(pluginName), this.uuid);
    }

    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */


    this.$element.trigger("init.zf.".concat(pluginName));
  }

  _createClass(Plugin, [{
    key: "destroy",
    value: function destroy() {
      this._destroy();

      var pluginName = getPluginName(this);
      this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger("destroyed.zf.".concat(pluginName));

      for (var prop in this) {
        this[prop] = null; //clean up script to prep for garbage collection.
      }
    }
  }]);

  return Plugin;
}(); // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getPluginName(obj) {
  if (typeof obj.constructor.name !== 'undefined') {
    return hyphenate(obj.constructor.name);
  } else {
    return hyphenate(obj.className);
  }
}



//# sourceURL=webpack:///./js/foundation.core.plugin.js?`)},"./js/foundation.core.utils.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtl", function() { return rtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetYoDigits", function() { return GetYoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpEscape", function() { return RegExpEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionend", function() { return transitionend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMousedisappear", function() { return ignoreMousedisappear; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


 // Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */

function rtl() {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */


function GetYoDigits(length, namespace) {
  length = length || 6;
  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-".concat(namespace) : '');
}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */


function RegExpEscape(str) {
  return str.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');
}

function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      end = transitions[t];
    }
  }

  if (end) {
    return end;
  } else {
    end = setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}
/**
 * Return an event type to listen for window load.
 *
 * If \`$elem\` is passed, an event will be triggered on \`$elem\`. If window is already loaded, the event will still be triggered.
 * If \`handler\` is passed, attach it to the event on \`$elem\`.
 * Calling \`onLoad\` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */


function onLoad($elem, handler) {
  var didLoad = document.readyState === 'complete';
  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

  var cb = function cb() {
    return $elem.triggerHandler(eventType);
  };

  if ($elem) {
    if (handler) $elem.one(eventType, handler);
    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
  }

  return eventType;
}
/**
 * Retuns an handler for the \`mouseleave\` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the \`ignoreLeaveWindow\` is \`true\`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the \`ignoreReappear\` is \`true\`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered \`mouseleave\` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the \`mouseleave\` event.
 */


function ignoreMousedisappear(handler) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
      _ref$ignoreReappear = _ref.ignoreReappear,
      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;

  return function leaveEventHandler(eLeave) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere

    if (eLeave.relatedTarget !== null) {
      return callback();
    } // Otherwise, check if the mouse actually left the window.
    // In firefox if the user switched between windows, the window sill have the focus by the time
    // the event is triggered. We have to debounce the event to test this case.


    setTimeout(function leaveEventDebouncer() {
      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
        return callback();
      } // Otherwise, wait for the mouse to reeapear outside of the element,


      if (!ignoreReappear) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
            // Fill where the mouse finally entered.
            eLeave.relatedTarget = eReenter.target;
            callback();
          }
        });
      }
    }, 0);
  };
}



//# sourceURL=webpack:///./js/foundation.core.utils.js?`)},"./js/foundation.drilldown.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drilldown", function() { return Drilldown; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */

var Drilldown =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Drilldown, _Plugin);

  function Drilldown() {
    _classCallCheck(this, Drilldown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
  }

  _createClass(Drilldown, [{
    key: "_setup",

    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
      this.className = 'Drilldown'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Drilldown', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close',
        'TAB': 'down',
        'SHIFT_TAB': 'up'
      });
    }
    /**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'drilldown');

      if (this.options.autoApplyClass) {
        this.$element.addClass('drilldown');
      }

      this.$element.attr({
        'role': 'tree',
        'aria-multiselectable': false
      });
      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)
      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

      this.$currentMenu = this.$element;
      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'drilldown'));

      this._prepareMenu();

      this._registerEvents();

      this._keyboardEvents();
    }
    /**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */

  }, {
    key: "_prepareMenu",
    value: function _prepareMenu() {
      var _this = this; // if(!this.options.holdOpen){
      //   this._menuLinkEvents();
      // }


      this.$submenuAnchors.each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $sub = $link.parent();

        if (_this.options.parentLink) {
          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
        }

        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
        $link.children('[data-submenu]').attr({
          'aria-hidden': true,
          'tabindex': 0,
          'role': 'group'
        });

        _this._events($link);
      });
      this.$submenus.each(function () {
        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $back = $menu.find('.js-drilldown-back');

        if (!$back.length) {
          switch (_this.options.backButtonPosition) {
            case "bottom":
              $menu.append(_this.options.backButton);
              break;

            case "top":
              $menu.prepend(_this.options.backButton);
              break;

            default:
              console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
          }
        }

        _this._back($menu);
      });
      this.$submenus.addClass('invisible');

      if (!this.options.autoHeight) {
        this.$submenus.addClass('drilldown-submenu-cover-previous');
      } // create a wrapper on element if it doesn't exist.


      if (!this.$element.parent().hasClass('is-drilldown')) {
        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
        this.$element.wrap(this.$wrapper);
      } // set wrapper


      this.$wrapper = this.$element.parent();
      this.$wrapper.css(this._getMaxDims());
    }
  }, {
    key: "_resize",
    value: function _resize() {
      this.$wrapper.css({
        'max-width': 'none',
        'min-height': 'none'
      }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

      this.$wrapper.css(this._getMaxDims());
    }
    /**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */

  }, {
    key: "_events",
    value: function _events($elem) {
      var _this = this;

      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
          e.stopImmediatePropagation();
          e.preventDefault();
        } // if(e.target !== e.currentTarget.firstElementChild){
        //   return false;
        // }


        _this._show($elem.parent('li'));

        if (_this.options.closeOnClick) {
          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
          $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
            if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {
              return;
            }

            e.preventDefault();

            _this._hideAll();

            $body.off('.zf.drilldown');
          });
        }
      });
    }
    /**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */

  }, {
    key: "_registerEvents",
    value: function _registerEvents() {
      if (this.options.scrollTop) {
        this._bindHandler = this._scrollTop.bind(this);
        this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);
      }

      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
    }
    /**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */

  }, {
    key: "_scrollTop",
    value: function _scrollTop() {
      var _this = this;

      var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, _this.options.animationDuration, _this.options.animationEasing, function () {
        /**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
      });
    }
    /**
     * Adds keydown event listener to \`li\`'s in the menu.
     * @private
     */

  }, {
    key: "_keyboardEvents",
    value: function _keyboardEvents() {
      var _this = this;

      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('li').parent('ul').children('li').children('a'),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1));
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            return;
          }
        });
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Drilldown', {
          next: function next() {
            if ($element.is(_this.$submenuAnchors)) {
              _this._show($element.parent('li'));

              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          previous: function previous() {
            _this._hide($element.parent('li').parent('ul'));

            $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
              setTimeout(function () {
                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
              }, 1);
            });
            return true;
          },
          up: function up() {
            $prevElement.focus(); // Don't tap focus on first element in root ul

            return !$element.is(_this.$element.find('> li:first-child > a'));
          },
          down: function down() {
            $nextElement.focus(); // Don't tap focus on last element in root ul

            return !$element.is(_this.$element.find('> li:last-child > a'));
          },
          close: function close() {
            // Don't close on element in root ul
            if (!$element.is(_this.$element.find('> li > a'))) {
              _this._hide($element.parent().parent());

              $element.parent().parent().siblings('a').focus();
            }
          },
          open: function open() {
            if (_this.options.parentLink && $element.attr('href')) {
              // Link with href
              return false;
            } else if (!$element.is(_this.$menuItems)) {
              // not menu item means back button
              _this._hide($element.parent('li').parent('ul'));

              $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                setTimeout(function () {
                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                }, 1);
              });
              return true;
            } else if ($element.is(_this.$submenuAnchors)) {
              // Sub menu item
              _this._show($element.parent('li'));

              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }

            e.stopImmediatePropagation();
          }
        });
      }); // end keyboardAccess
    }
    /**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */

  }, {
    key: "_hideAll",
    value: function _hideAll() {
      var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
      if (this.options.autoHeight) this.$wrapper.css({
        height: $elem.parent().closest('ul').data('calcHeight')
      });
      $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function (e) {
        $elem.removeClass('is-active is-closing');
      });
      /**
       * Fires when the menu is fully closed.
       * @event Drilldown#closed
       */

      this.$element.trigger('closed.zf.drilldown');
    }
    /**
     * Adds event listener for each \`back\` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add \`back\` event.
     */

  }, {
    key: "_back",
    value: function _back($elem) {
      var _this = this;

      $elem.off('click.zf.drilldown');
      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
        e.stopImmediatePropagation(); // console.log('mouseup on back');

        _this._hide($elem); // If there is a parent submenu, call show


        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

        if (parentSubMenu.length) {
          _this._show(parentSubMenu);
        }
      });
    }
    /**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */

  }, {
    key: "_menuLinkEvents",
    value: function _menuLinkEvents() {
      var _this = this;

      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        // e.stopImmediatePropagation();
        setTimeout(function () {
          _this._hideAll();
        }, 0);
      });
    }
    /**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (\`ul\` tag)
     * @param {boolean} trigger - trigger drilldown event
     */

  }, {
    key: "_setShowSubMenuClasses",
    value: function _setShowSubMenuClasses($elem, trigger) {
      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
      $elem.parent('li').attr('aria-expanded', true);

      if (trigger === true) {
        this.$element.trigger('open.zf.drilldown', [$elem]);
      }
    }
    /**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (\`ul\` tag)
     * @param {boolean} trigger - trigger drilldown event
     */

  }, {
    key: "_setHideSubMenuClasses",
    value: function _setHideSubMenuClasses($elem, trigger) {
      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
      $elem.parent('li').attr('aria-expanded', false);

      if (trigger === true) {
        $elem.trigger('hide.zf.drilldown', [$elem]);
      }
    }
    /**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (\`ul\` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */

  }, {
    key: "_showMenu",
    value: function _showMenu($elem, autoFocus) {
      var _this = this; // Reset drilldown


      var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
      $expandedSubmenus.each(function (index) {
        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      }); // Save the menu as the currently displayed one.

      this.$currentMenu = $elem; // If target menu is root, focus first link & exit

      if ($elem.is('[data-drilldown]')) {
        if (autoFocus === true) $elem.find('li[role="treeitem"] > a').first().focus();
        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
        return;
      } // Find all submenus on way to root incl. the element itself


      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root

      $submenus.each(function (index) {
        // Update height of first child (target menu) if autoHeight option true
        if (index === 0 && _this.options.autoHeight) {
          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
        }

        var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
        // Last child makes sure the event gets always triggered even if going through several menus

        if (isLastChild === true) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
            if (autoFocus === true) {
              $elem.find('li[role="treeitem"] > a').first().focus();
            }
          });
        }

        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
      });
    }
    /**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the \`li\` tag.
     */

  }, {
    key: "_show",
    value: function _show($elem) {
      var $submenu = $elem.children('[data-submenu]');
      $elem.attr('aria-expanded', true);
      this.$currentMenu = $submenu;
      $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

      if (this.options.autoHeight) {
        this.$wrapper.css({
          height: $submenu.data('calcHeight')
        });
      }
      /**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */


      this.$element.trigger('open.zf.drilldown', [$elem]);
    }
    /**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the \`ul\` tag.
     */

  }, {
    key: "_hide",
    value: function _hide($elem) {
      if (this.options.autoHeight) this.$wrapper.css({
        height: $elem.parent().closest('ul').data('calcHeight')
      });

      var _this = this;

      $elem.parent('li').attr('aria-expanded', false);
      $elem.attr('aria-hidden', true);
      $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
        $elem.removeClass('is-active is-closing');
        $elem.blur().addClass('invisible');
      });
      /**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */

      $elem.trigger('hide.zf.drilldown', [$elem]);
    }
    /**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */

  }, {
    key: "_getMaxDims",
    value: function _getMaxDims() {
      var maxHeight = 0,
          result = {},
          _this = this; // Recalculate menu heights and total max height


      this.$submenus.add(this.$element).each(function () {
        var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;
        var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].GetDimensions(this).height;
        maxHeight = height > maxHeight ? height : maxHeight;

        if (_this.options.autoHeight) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
        }
      });
      if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
      result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
      return result;
    }
    /**
     * Destroys the Drilldown Menu
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

      this._hideAll();

      this.$element.off('mutateme.zf.trigger');
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'drilldown');
      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
      this.$submenuAnchors.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
      });
      this.$element.find('[data-is-parent-link]').detach();
      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
      this.$element.find('a').each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        $link.removeAttr('tabindex');

        if ($link.data('savedHref')) {
          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
        } else {
          return;
        }
      });
    }
  }]);

  return Drilldown;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

Drilldown.defaults = {
  /**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the \`drilldown\` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolian}
   * @default true
   */
  autoApplyClass: true,

  /**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on \`destroy\` method, 'js-drilldown-back' class required. Remove the backslash (\`\\\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',

  /**
   * Position the back button either at the top or bottom of drilldown submenus. Can be \`'left'\` or \`'bottom'\`.
   * @option
   * @type {string}
   * @default top
   */
  backButtonPosition: 'top',

  /**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: \`is-drilldown\` is required. Remove the backslash (\`\\\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
  wrapper: '<div></div>',

  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,

  /**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  autoHeight: false,

  /**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  animateHeight: false,

  /**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
  scrollTop: false,

  /**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
  scrollTopElement: '',

  /**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
  scrollTopOffset: 0,

  /**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Scroll animation easing. Can be \`'swing'\` or \`'linear'\`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
  animationEasing: 'swing' // holdOpen: false

};


//# sourceURL=webpack:///./js/foundation.drilldown.js?`)},"./js/foundation.dropdown.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ "./js/foundation.positionable.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */

var Dropdown =
/*#__PURE__*/
function (_Positionable) {
  _inherits(Dropdown, _Positionable);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: "_setup",

    /**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
      this.className = 'Dropdown'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Dropdown', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var $id = this.$element.attr('id');
      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\\"".concat($id, "\\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\\"".concat($id, "\\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\\"".concat($id, "\\"]"));
      this.$anchors.attr({
        'aria-controls': $id,
        'data-is-focus': false,
        'data-yeti-box': $id,
        'aria-haspopup': true,
        'aria-expanded': false
      });

      this._setCurrentAnchor(this.$anchors.first());

      if (this.options.parentClass) {
        this.$parent = this.$element.parents('.' + this.options.parentClass);
      } else {
        this.$parent = null;
      } // Set [aria-labelledby] on the Dropdown if it is not set


      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
        // Get the anchor ID or create one
        if (typeof this.$currentAnchor.attr('id') === 'undefined') {
          this.$currentAnchor.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'dd-anchor'));
        }

        ;
        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
      }

      this.$element.attr({
        'aria-hidden': 'true',
        'data-yeti-box': $id,
        'data-resize': $id
      });

      _get(_getPrototypeOf(Dropdown.prototype), "_init", this).call(this);

      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

      if (position) {
        return position[0];
      } else {
        return 'bottom';
      }
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      // handle legacy float approach
      var horizontalPosition = /float-(\\S+)/.exec(this.$currentAnchor.attr('class'));

      if (horizontalPosition) {
        return horizontalPosition[1];
      }

      return _get(_getPrototypeOf(Dropdown.prototype), "_getDefaultAlignment", this).call(this);
    }
    /**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */

  }, {
    key: "_setPosition",
    value: function _setPosition() {
      this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));

      _get(_getPrototypeOf(Dropdown.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);

      this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
    }
    /**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */

  }, {
    key: "_setCurrentAnchor",
    value: function _setCurrentAnchor(el) {
      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    }
    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': this._setPosition.bind(this)
      });
      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function () {
        _this._setCurrentAnchor(this);
      });

      if (this.options.hover) {
        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
          _this._setCurrentAnchor(this);

          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();

          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.open();

              _this.$anchors.data('hover', true);
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function () {
            _this.close();

            _this.$anchors.data('hover', false);
          }, _this.options.hoverDelay);
        }));

        if (this.options.hoverPane) {
          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
            clearTimeout(_this.timeout);
          }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.close();

              _this.$anchors.data('hover', false);
            }, _this.options.hoverDelay);
          }));
        }
      }

      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(_this.$element);
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Dropdown', {
          open: function open() {
            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
              _this.open();

              _this.$element.attr('tabindex', -1).focus();

              e.preventDefault();
            }
          },
          close: function close() {
            _this.close();

            _this.$anchors.focus();
          }
        });
      });
    }
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
          _this = this;

      $body.off('click.zf.dropdown').on('click.zf.dropdown', function (e) {
        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
          return;
        }

        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
          return;
        }

        _this.close();

        $body.off('click.zf.dropdown');
      });
    }
    /**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */

  }, {
    key: "open",
    value: function open() {
      // var _this = this;

      /**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
      this.$anchors.addClass('hover').attr({
        'aria-expanded': true
      }); // this.$element/*.show()*/;

      this.$element.addClass('is-opening');

      this._setPosition();

      this.$element.removeClass('is-opening').addClass('is-open').attr({
        'aria-hidden': false
      });

      if (this.options.autoFocus) {
        var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(this.$element);

        if ($focusable.length) {
          $focusable.eq(0).focus();
        }
      }

      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }

      if (this.options.trapFocus) {
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].trapFocus(this.$element);
      }
      /**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */


      this.$element.trigger('show.zf.dropdown', [this.$element]);
    }
    /**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.$element.hasClass('is-open')) {
        return false;
      }

      this.$element.removeClass('is-open').attr({
        'aria-hidden': true
      });
      this.$anchors.removeClass('hover').attr('aria-expanded', false);
      /**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */

      this.$element.trigger('hide.zf.dropdown', [this.$element]);

      if (this.options.trapFocus) {
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].releaseFocus(this.$element);
      }
    }
    /**
     * Toggles the dropdown pane's visibility.
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.$element.hasClass('is-open')) {
        if (this.$anchors.data('hover')) return;
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Destroys the dropdown.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger').hide();
      this.$anchors.off('.zf.dropdown');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown');
    }
  }]);

  return Dropdown;
}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__["Positionable"]);

Dropdown.defaults = {
  /**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
  parentClass: null,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
  hoverDelay: 250,

  /**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
  hover: false,

  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
  hoverPane: false,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,

  /**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false,

  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false
};


//# sourceURL=webpack:///./js/foundation.dropdown.js?`)},"./js/foundation.dropdownMenu.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */

var DropdownMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(DropdownMenu, _Plugin);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
      this.className = 'DropdownMenu'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('DropdownMenu', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Feather(this.$element, 'dropdown');
      var subs = this.$element.find('li.is-dropdown-submenu-parent');
      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
      this.$menuItems = this.$element.find('[role="menuitem"]');
      this.$tabs = this.$element.children('[role="menuitem"]');
      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

      if (this.options.alignment === 'auto') {
        if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() || this.$element.parents('.top-bar-right').is('*')) {
          this.options.alignment = 'right';
          subs.addClass('opens-left');
        } else {
          this.options.alignment = 'left';
          subs.addClass('opens-right');
        }
      } else {
        if (this.options.alignment === 'right') {
          subs.addClass('opens-left');
        } else {
          subs.addClass('opens-right');
        }
      }

      this.changed = false;

      this._events();
    }
  }, {
    key: "_isVertical",
    value: function _isVertical() {
      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
    }
  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this.$element.hasClass('align-right') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() && !this.$element.hasClass('align-left');
    }
    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
          parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers


      var handleClickFn = function handleClickFn(e) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', ".".concat(parClass)),
            hasSub = $elem.hasClass(parClass),
            hasClicked = $elem.attr('data-is-click') === 'true',
            $sub = $elem.children('.is-dropdown-submenu');

        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
              return;
            } else {
              e.stopImmediatePropagation();
              e.preventDefault();

              _this._hide($elem);
            }
          } else {
            e.preventDefault();
            e.stopImmediatePropagation();

            _this._show($sub);

            $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
          }
        }
      };

      if (this.options.clickOpen || hasTouch) {
        this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
      } // Handle Leaf element Clicks


      if (_this.options.closeOnClickInside) {
        this.$menuItems.on('click.zf.dropdownmenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (!hasSub) {
            _this._hide();
          }
        });
      }

      if (!this.options.disableHover) {
        this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub) {
            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._show($elem.children('.is-dropdown-submenu'));
            }, _this.options.hoverDelay));
          }
        }).on('mouseleave.zf.dropdownMenu', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub && _this.options.autoclose) {
            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
              return false;
            }

            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._hide($elem);
            }, _this.options.closingTime));
          }
        }));
      }

      this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role="menuitem"]'),
            isTab = _this.$tabs.index($element) > -1,
            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(i - 1);
            $nextElement = $elements.eq(i + 1);
            return;
          }
        });

        var nextSibling = function nextSibling() {
          $nextElement.children('a:first').focus();
          e.preventDefault();
        },
            prevSibling = function prevSibling() {
          $prevElement.children('a:first').focus();
          e.preventDefault();
        },
            openSub = function openSub() {
          var $sub = $element.children('ul.is-dropdown-submenu');

          if ($sub.length) {
            _this._show($sub);

            $element.find('li > a:first').focus();
            e.preventDefault();
          } else {
            return;
          }
        },
            closeSub = function closeSub() {
          //if ($element.is(':first-child')) {
          var close = $element.parent('ul').parent('li');
          close.children('a:first').focus();

          _this._hide(close);

          e.preventDefault(); //}
        };

        var functions = {
          open: openSub,
          close: function close() {
            _this._hide(_this.$element);

            _this.$menuItems.eq(0).children('a').focus(); // focus to first element


            e.preventDefault();
          },
          handled: function handled() {
            e.stopImmediatePropagation();
          }
        };

        if (isTab) {
          if (_this._isVertical()) {
            // vertical menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: closeSub,
                previous: openSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: openSub,
                previous: closeSub
              });
            }
          } else {
            // horizontal menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                next: prevSibling,
                previous: nextSibling,
                down: openSub,
                up: closeSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                next: nextSibling,
                previous: prevSibling,
                down: openSub,
                up: closeSub
              });
            }
          }
        } else {
          // not tabs -> one sub
          if (_this._isRtl()) {
            // right aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: closeSub,
              previous: openSub,
              down: nextSibling,
              up: prevSibling
            });
          } else {
            // left aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: openSub,
              previous: closeSub,
              down: nextSibling,
              up: prevSibling
            });
          }
        }

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'DropdownMenu', functions);
      });
    }
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body),
          _this = this;

      $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
        var $link = _this.$element.find(e.target);

        if ($link.length) {
          return;
        }

        _this._hide();

        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
      });
    }
    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires Dropdownmenu#show
     */

  }, {
    key: "_show",
    value: function _show($sub) {
      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
      }));
      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

      this._hide($sibs, idx);

      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
      var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

      if (!clear) {
        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
        $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
        clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

        if (!clear) {
          $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
        }

        this.changed = true;
      }

      $sub.css('visibility', '');

      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }
      /**
       * Fires when the new dropdown pane is visible.
       * @event Dropdownmenu#show
       */


      this.$element.trigger('show.zf.dropdownmenu', [$sub]);
    }
    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */

  }, {
    key: "_hide",
    value: function _hide($elem, idx) {
      var $toClose;

      if ($elem && $elem.length) {
        $toClose = $elem;
      } else if (typeof idx !== 'undefined') {
        $toClose = this.$tabs.not(function (i, el) {
          return i === idx;
        });
      } else {
        $toClose = this.$element;
      }

      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

      if (somethingToClose) {
        $toClose.find('li.is-active').add($toClose).attr({
          'data-is-click': false
        }).removeClass('is-active');
        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

        if (this.changed || $toClose.find('opens-inner').length) {
          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
          this.changed = false;
        }
        /**
         * Fires when the open menus are closed.
         * @event Dropdownmenu#hide
         */


        this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
      }
    }
    /**
     * Destroys the plugin.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownmenu');
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Burn(this.$element, 'dropdown');
    }
  }]);

  return DropdownMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
 * Default settings for plugin
 */


DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,

  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,

  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,

  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
  closingTime: 500,

  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be \`'auto'\`, \`'left'\` or \`'right'\`.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,

  /**
   * Class applied to vertical oriented menus, Foundation default is \`vertical\`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',

  /**
   * Class applied to right-side oriented menus, Foundation default is \`align-right\`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',

  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};


//# sourceURL=webpack:///./js/foundation.dropdownMenu.js?`)},"./js/foundation.equalizer.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return Equalizer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */

var Equalizer =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Equalizer, _Plugin);

  function Equalizer() {
    _classCallCheck(this, Equalizer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));
  }

  _createClass(Equalizer, [{
    key: "_setup",

    /**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
      this.className = 'Equalizer'; // ie9 back compat

      this._init();
    }
    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var eqId = this.$element.attr('data-equalizer') || '';
      var $watched = this.$element.find("[data-equalizer-watch=\\"".concat(eqId, "\\"]"));

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
      this.$element.attr('data-resize', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
      this.$element.attr('data-mutate', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };
      var imgs = this.$element.find('img');
      var tooSmall;

      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
      } else {
        this._events();
      }

      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
        if (imgs.length) {
          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__["onImagesLoaded"])(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }
    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */

  }, {
    key: "_pauseEvents",
    value: function _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
      });
    }
    /**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */

  }, {
    key: "_onResizeMe",
    value: function _onResizeMe(e) {
      this._reflow();
    }
    /**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */

  }, {
    key: "_onPostEqualized",
    value: function _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }
    /**
     * Initializes events for Equalizer.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._pauseEvents();

      if (this.hasNested) {
        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
      }

      this.isOn = true;
    }
    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */

  }, {
    key: "_checkMQ",
    value: function _checkMQ() {
      var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].is(this.options.equalizeOn);

      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();

          this.$watched.css('height', 'auto');
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }

      return tooSmall;
    }
    /**
     * A noop version for the plugin
     * @private
     */

  }, {
    key: "_killswitch",
    value: function _killswitch() {
      return;
    }
    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css('height', 'auto');
          return false;
        }
      }

      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }
    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */

  }, {
    key: "_isStacked",
    value: function _isStacked() {
      if (!this.$watched[0] || !this.$watched[1]) {
        return true;
      }

      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */

  }, {
    key: "getHeights",
    value: function getHeights(cb) {
      var heights = [];

      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        heights.push(this.$watched[i].offsetHeight);
      }

      cb(heights);
    }
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */

  }, {
    key: "getHeightsByRow",
    value: function getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
          groups = [],
          group = 0; //group by Row

      groups[group] = [];

      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto'; //maybe could use this.$watched[i].offsetTop

        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;

        if (elOffsetTop != lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }

        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }

      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }

      cb(groups);
    }
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */

  }, {
    key: "applyHeight",
    value: function applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      /**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */

      this.$element.trigger('preequalized.zf.equalizer');
      this.$watched.css('height', max);
      /**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */

      this.$element.trigger('postequalized.zf.equalizer');
    }
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */

  }, {
    key: "applyHeightByRow",
    value: function applyHeightByRow(groups) {
      /**
       * Fires before the heights are applied
       */
      this.$element.trigger('preequalized.zf.equalizer');

      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length,
            max = groups[i][groupsILength - 1];

        if (groupsILength <= 2) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
            'height': 'auto'
          });
          continue;
        }
        /**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */


        this.$element.trigger('preequalizedrow.zf.equalizer');

        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
            'height': max
          });
        }
        /**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */


        this.$element.trigger('postequalizedrow.zf.equalizer');
      }
      /**
       * Fires when the heights have been applied
       */


      this.$element.trigger('postequalized.zf.equalizer');
    }
    /**
     * Destroys an instance of Equalizer.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this._pauseEvents();

      this.$watched.css('height', 'auto');
    }
  }]);

  return Equalizer;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);
/**
 * Default settings for plugin
 */


Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,

  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,

  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};


//# sourceURL=webpack:///./js/foundation.equalizer.js?`)},"./js/foundation.interchange.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interchange", function() { return Interchange; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */

var Interchange =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Interchange, _Plugin);

  function Interchange() {
    _classCallCheck(this, Interchange);

    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));
  }

  _createClass(Interchange, [{
    key: "_setup",

    /**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Interchange.defaults, options);
      this.rules = [];
      this.currentPath = '';
      this.className = 'Interchange'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'interchange');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      this._addBreakpoints();

      this._generateRules();

      this._reflow();
    }
    /**
     * Initializes events for Interchange.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this2 = this;

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
        return _this2._reflow();
      });
    }
    /**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      var match; // Iterate through each rule, but only save the last match

      for (var i in this.rules) {
        if (this.rules.hasOwnProperty(i)) {
          var rule = this.rules[i];

          if (window.matchMedia(rule.query).matches) {
            match = rule;
          }
        }
      }

      if (match) {
        this.replace(match.path);
      }
    }
    /**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */

  }, {
    key: "_addBreakpoints",
    value: function _addBreakpoints() {
      for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries.hasOwnProperty(i)) {
          var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries[i];
          Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
      }
    }
    /**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */

  }, {
    key: "_generateRules",
    value: function _generateRules(element) {
      var rulesList = [];
      var rules;

      if (this.options.rules) {
        rules = this.options.rules;
      } else {
        rules = this.$element.data('interchange');
      }

      rules = typeof rules === 'string' ? rules.match(/\\[.*?, .*?\\]/g) : rules;

      for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
          var rule = rules[i].slice(1, -1).split(', ');
          var path = rule.slice(0, -1).join('');
          var query = rule[rule.length - 1];

          if (Interchange.SPECIAL_QUERIES[query]) {
            query = Interchange.SPECIAL_QUERIES[query];
          }

          rulesList.push({
            path: path,
            query: query
          });
        }
      }

      this.rules = rulesList;
    }
    /**
     * Update the \`src\` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */

  }, {
    key: "replace",
    value: function replace(path) {
      if (this.currentPath === path) return;

      var _this = this,
          trigger = 'replaced.zf.interchange'; // Replacing images


      if (this.$element[0].nodeName === 'IMG') {
        this.$element.attr('src', path).on('load', function () {
          _this.currentPath = path;
        }).trigger(trigger);
      } // Replacing background images
      else if (path.match(/\\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
          path = path.replace(/\\(/g, '%28').replace(/\\)/g, '%29');
          this.$element.css({
            'background-image': 'url(' + path + ')'
          }).trigger(trigger);
        } // Replacing HTML
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(path, function (response) {
              _this.$element.html(response).trigger(trigger);

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
              _this.currentPath = path;
            });
          }
      /**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
      // this.$element.trigger('replaced.zf.interchange');

    }
    /**
     * Destroys an instance of interchange.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('resizeme.zf.trigger');
    }
  }]);

  return Interchange;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin
 */


Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the \`data-interchange\` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null
};
Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};


//# sourceURL=webpack:///./js/foundation.interchange.js?`)},"./js/foundation.magellan.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magellan", function() { return Magellan; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ "./js/foundation.smoothScroll.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */

var Magellan =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Magellan, _Plugin);

  function Magellan() {
    _classCallCheck(this, Magellan);

    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));
  }

  _createClass(Magellan, [{
    key: "_setup",

    /**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);
      this.className = 'Magellan'; // ie9 back compat

      this._init();

      this.calcPoints();
    }
    /**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'magellan');

      var _this = this;

      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
      this.$links = this.$element.find('a');
      this.$element.attr({
        'data-resize': id,
        'data-scroll': id,
        'id': id
      });
      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.scrollPos = parseInt(window.pageYOffset, 10);

      this._events();
    }
    /**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */

  }, {
    key: "calcPoints",
    value: function calcPoints() {
      var _this = this,
          body = document.body,
          html = document.documentElement;

      this.points = [];
      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
      this.$targets.each(function () {
        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            pt = Math.round($tar.offset().top - _this.options.threshold);
        $tar.targetPoint = pt;

        _this.points.push(pt);
      });
    }
    /**
     * Initializes events for Magellan.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body'),
          opts = {
        duration: _this.options.animationDuration,
        easing: _this.options.animationEasing
      };

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
        if (_this.options.deepLinking) {
          if (location.hash) {
            _this.scrollToLoc(location.hash);
          }
        }

        _this.calcPoints();

        _this._updateActive();
      });
      _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        _this.$element.on({
          'resizeme.zf.trigger': _this.reflow.bind(_this),
          'scrollme.zf.trigger': _this._updateActive.bind(_this)
        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
          e.preventDefault();
          var arrival = this.getAttribute('href');

          _this.scrollToLoc(arrival);
        });
      });

      this._deepLinkScroll = function (e) {
        if (_this.options.deepLinking) {
          _this.scrollToLoc(window.location.hash);
        }
      };

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
    }
    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */

  }, {
    key: "scrollToLoc",
    value: function scrollToLoc(loc) {
      this._inTransition = true;

      var _this = this;

      var options = {
        animationEasing: this.options.animationEasing,
        animationDuration: this.options.animationDuration,
        threshold: this.options.threshold,
        offset: this.options.offset
      };
      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__["SmoothScroll"].scrollToLoc(loc, options, function () {
        _this._inTransition = false;
      });
    }
    /**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */

  }, {
    key: "reflow",
    value: function reflow() {
      this.calcPoints();

      this._updateActive();
    }
    /**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */

  }, {
    key: "_updateActive",
    value: function _updateActive()
    /*evt, elem, scrollPos*/
    {
      var _this2 = this;

      if (this._inTransition) return;
      var newScrollPos = parseInt(window.pageYOffset, 10);
      var isScrollingUp = this.scrollPos > newScrollPos;
      this.scrollPos = newScrollPos;
      var activeIdx; // Before the first point: no link

      if (newScrollPos < this.points[0]) {}
      /* do nothing */
      // At the bottom of the page: last link
      else if (newScrollPos + this.winHeight === this.docHeight) {
          activeIdx = this.points.length - 1;
        } // Otherwhise, use the last visible link
        else {
            var visibleLinks = this.points.filter(function (p, i) {
              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
            });
            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
          } // Get the new active link


      var $oldActive = this.$active;
      var activeHash = '';

      if (typeof activeIdx !== 'undefined') {
        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
      } else {
        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      }

      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
      var isNewHash = activeHash !== window.location.hash; // Update the active link element

      if (isNewActive) {
        $oldActive.removeClass(this.options.activeClass);
        this.$active.addClass(this.options.activeClass);
      } // Update the hash (it may have changed with the same active link)


      if (this.options.deepLinking && isNewHash) {
        if (window.history.pushState) {
          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
          window.history.pushState(null, null, url);
        } else {
          window.location.hash = activeHash;
        }
      }

      if (isNewActive) {
        /**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
        this.$element.trigger('update.zf.magellan', [this.$active]);
      }
    }
    /**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

      if (this.options.deepLinking) {
        var hash = this.$active[0].getAttribute('href');
        window.location.hash.replace(hash, '');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);

  return Magellan;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin
 */


Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be \`'swing'\` or \`'linear'\`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  activeClass: 'is-active',

  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinking: false,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};


//# sourceURL=webpack:///./js/foundation.magellan.js?`)},"./js/foundation.offcanvas.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return OffCanvas; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */

var OffCanvas =
/*#__PURE__*/
function (_Plugin) {
  _inherits(OffCanvas, _Plugin);

  function OffCanvas() {
    _classCallCheck(this, OffCanvas);

    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
  }

  _createClass(OffCanvas, [{
    key: "_setup",

    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      var _this2 = this;

      this.className = 'OffCanvas'; // ie9 back compat

      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.contentClasses = {
        base: [],
        reveal: []
      };
      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.position = 'left';
      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
        _this2.contentClasses.base.push('has-transition-' + val);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
        _this2.contentClasses.base.push('has-position-' + val);

        _this2.contentClasses.reveal.push('has-reveal-' + val);
      }); // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

      this._init();

      this._events();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('OffCanvas', {
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element.attr('id');
      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

      if (this.options.contentId) {
        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
      } else if (this.$element.siblings('[data-off-canvas-content]').length) {
        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
      } else {
        this.$content = this.$element.closest('[data-off-canvas-content]').first();
      }

      if (!this.options.contentId) {
        // Assume that the off-canvas element is nested if it isn't a sibling of the content
        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
      } else if (this.options.contentId && this.options.nested === null) {
        // Warning if using content ID without setting the nested option
        // Once the element is nested it is required to work properly in this case
        console.warn('Remember to use the nested option if using the content ID option!');
      }

      if (this.nested === true) {
        // Force transition overlap if nested
        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

        this.$element.removeClass('is-transition-push');
      }

      this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

      if (this.options.contentOverlay === true) {
        var overlay = document.createElement('div');
        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);

        if (overlayPosition === 'is-overlay-fixed') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
        } else {
          this.$content.append(this.$overlay);
        }
      } // Get the revealOn option from the class.


      var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["RegExpEscape"])(this.options.revealClass) + '([^\\\\s]+)', 'g');
      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

      if (revealOnClass) {
        this.options.isRevealed = true;
        this.options.revealOn = this.options.revealOn || revealOnClass[1];
      } // Ensure the \`reveal-on-*\` class is set.


      if (this.options.isRevealed === true && this.options.revealOn) {
        this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

        this._setMQChecker();
      }

      if (this.options.transitionTime) {
        this.$element.css('transition-duration', this.options.transitionTime);
      } // Initally remove all transition/position CSS classes from off-canvas content container.


      this._removeContentClasses();
    }
    /**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.off('.zf.trigger .zf.offcanvas').on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
      });

      if (this.options.closeOnClick === true) {
        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
        $target.on({
          'click.zf.offcanvas': this.close.bind(this)
        });
      }
    }
    /**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */

  }, {
    key: "_setMQChecker",
    value: function _setMQChecker() {
      var _this = this;

      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        } else {
          _this.reveal(false);
        }
      });
    }
    /**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */

  }, {
    key: "_removeContentClasses",
    value: function _removeContentClasses(hasReveal) {
      if (typeof hasReveal !== 'boolean') {
        this.$content.removeClass(this.contentClasses.base.join(' '));
      } else if (hasReveal === false) {
        this.$content.removeClass("has-reveal-".concat(this.position));
      }
    }
    /**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */

  }, {
    key: "_addContentClasses",
    value: function _addContentClasses(hasReveal) {
      this._removeContentClasses(hasReveal);

      if (typeof hasReveal !== 'boolean') {
        this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
      } else if (hasReveal === true) {
        this.$content.addClass("has-reveal-".concat(this.position));
      }
    }
    /**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */

  }, {
    key: "reveal",
    value: function reveal(isRevealed) {
      if (isRevealed) {
        this.close();
        this.isRevealed = true;
        this.$element.attr('aria-hidden', 'false');
        this.$element.off('open.zf.trigger toggle.zf.trigger');
        this.$element.removeClass('is-closed');
      } else {
        this.isRevealed = false;
        this.$element.attr('aria-hidden', 'true');
        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
          'open.zf.trigger': this.open.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this)
        });
        this.$element.addClass('is-closed');
      }

      this._addContentClasses(isRevealed);
    }
    /**
     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
     * @private
     */

  }, {
    key: "_stopScrolling",
    value: function _stopScrolling(event) {
      return false;
    } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
    // Only really works for y, not sure how to extend to x or if we need to.

  }, {
    key: "_recordScrollable",
    value: function _recordScrollable(event) {
      var elem = this; // called from event handler context with this as elem
      // If the element is scrollable (content overflows), then...

      if (elem.scrollHeight !== elem.clientHeight) {
        // If we're at the top, scroll down one pixel to allow scrolling up
        if (elem.scrollTop === 0) {
          elem.scrollTop = 1;
        } // If we're at the bottom, scroll up one pixel to allow scrolling down


        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
        }
      }

      elem.allowUp = elem.scrollTop > 0;
      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      elem.lastY = event.originalEvent.pageY;
    }
  }, {
    key: "_stopScrollPropagation",
    value: function _stopScrollPropagation(event) {
      var elem = this; // called from event handler context with this as elem

      var up = event.pageY < elem.lastY;
      var down = !up;
      elem.lastY = event.pageY;

      if (up && elem.allowUp || down && elem.allowDown) {
        event.stopPropagation();
      } else {
        event.preventDefault();
      }
    }
    /**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires Offcanvas#opened
     * @todo also trigger 'open' event?
     */

  }, {
    key: "open",
    value: function open(event, trigger) {
      if (this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }

      var _this = this;

      if (trigger) {
        this.$lastTrigger = trigger;
      }

      if (this.options.forceTo === 'top') {
        window.scrollTo(0, 0);
      } else if (this.options.forceTo === 'bottom') {
        window.scrollTo(0, document.body.scrollHeight);
      }

      if (this.options.transitionTime && this.options.transition !== 'overlap') {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
      } else {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
      }

      this.$element.addClass('is-open').removeClass('is-closed');
      this.$triggers.attr('aria-expanded', 'true');
      this.$element.attr('aria-hidden', 'false');
      this.$content.addClass('is-open-' + this.position); // If \`contentScroll\` is set to false, add class and disable scrolling on touch devices.

      if (this.options.contentScroll === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
        this.$element.on('touchstart', this._recordScrollable);
        this.$element.on('touchmove', this._stopScrollPropagation);
      }

      if (this.options.contentOverlay === true) {
        this.$overlay.addClass('is-visible');
      }

      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.addClass('is-closable');
      }

      if (this.options.autoFocus === true) {
        this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
          if (!_this.$element.hasClass('is-open')) {
            return; // exit if prematurely closed
          }

          var canvasFocus = _this.$element.find('[data-autofocus]');

          if (canvasFocus.length) {
            canvasFocus.eq(0).focus();
          } else {
            _this.$element.find('a, button').eq(0).focus();
          }
        });
      }

      if (this.options.trapFocus === true) {
        this.$content.attr('tabindex', '-1');
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);
      }

      this._addContentClasses();
      /**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#opened
       */


      this.$element.trigger('opened.zf.offcanvas');
    }
    /**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires Offcanvas#closed
     */

  }, {
    key: "close",
    value: function close(cb) {
      if (!this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }

      var _this = this;

      this.$element.removeClass('is-open');
      this.$element.attr('aria-hidden', 'true')
      /**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#closed
       */
      .trigger('closed.zf.offcanvas');
      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If \`contentScroll\` is set to false, remove class and re-enable scrolling on touch devices.

      if (this.options.contentScroll === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
        this.$element.off('touchstart', this._recordScrollable);
        this.$element.off('touchmove', this._stopScrollPropagation);
      }

      if (this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-visible');
      }

      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-closable');
      }

      this.$triggers.attr('aria-expanded', 'false');

      if (this.options.trapFocus === true) {
        this.$content.removeAttr('tabindex');
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(this.$element);
      } // Listen to transitionEnd and add class when done.


      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function (e) {
        _this.$element.addClass('is-closed');

        _this._removeContentClasses();
      });
    }
    /**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */

  }, {
    key: "toggle",
    value: function toggle(event, trigger) {
      if (this.$element.hasClass('is-open')) {
        this.close(event, trigger);
      } else {
        this.open(event, trigger);
      }
    }
    /**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */

  }, {
    key: "_handleKeyboard",
    value: function _handleKeyboard(e) {
      var _this3 = this;

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'OffCanvas', {
        close: function close() {
          _this3.close();

          _this3.$lastTrigger.focus();

          return true;
        },
        handled: function handled() {
          e.stopPropagation();
          e.preventDefault();
        }
      });
    }
    /**
     * Destroys the offcanvas plugin.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.close();
      this.$element.off('.zf.trigger .zf.offcanvas');
      this.$overlay.off('.zf.offcanvas');
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);

  return OffCanvas;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Adds an overlay on top of \`[data-off-canvas-content]\`.
   * @option
   * @type {boolean}
   * @default true
   */
  contentOverlay: true,

  /**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
  contentId: null,

  /**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
  nested: null,

  /**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
  contentScroll: true,

  /**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default null
   */
  transitionTime: null,

  /**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
  transition: 'push',

  /**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
  forceTo: null,

  /**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
  isRevealed: false,

  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the \`revealClass\` option.
   * @option
   * @type {?string}
   * @default null
   */
  revealOn: null,

  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
  autoFocus: true,

  /**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are \`reveal-for-large\` & \`reveal-for-medium\`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
  revealClass: 'reveal-for-',

  /**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false
};


//# sourceURL=webpack:///./js/foundation.offcanvas.js?`)},"./js/foundation.orbit.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return Orbit; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.timer */ "./js/foundation.util.timer.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ "./js/foundation.util.touch.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */

var Orbit =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Orbit, _Plugin);

  function Orbit() {
    _classCallCheck(this, Orbit);

    return _possibleConstructorReturn(this, _getPrototypeOf(Orbit).apply(this, arguments));
  }

  _createClass(Orbit, [{
    key: "_setup",

    /**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Orbit.defaults, this.$element.data(), options);
      this.className = 'Orbit'; // ie9 back compat

      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Orbit', {
        'ltr': {
          'ARROW_RIGHT': 'next',
          'ARROW_LEFT': 'previous'
        },
        'rtl': {
          'ARROW_LEFT': 'next',
          'ARROW_RIGHT': 'previous'
        }
      });
    }
    /**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */

  }, {
    key: "_init",
    value: function _init() {
      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
      this._reset();

      this.$wrapper = this.$element.find(".".concat(this.options.containerClass));
      this.$slides = this.$element.find(".".concat(this.options.slideClass));
      var $images = this.$element.find('img'),
          initActive = this.$slides.filter('.is-active'),
          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__["GetYoDigits"])(6, 'orbit');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      if (!initActive.length) {
        this.$slides.eq(0).addClass('is-active');
      }

      if (!this.options.useMUI) {
        this.$slides.addClass('no-motionui');
      }

      if ($images.length) {
        Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"])($images, this._prepareForOrbit.bind(this));
      } else {
        this._prepareForOrbit(); //hehe

      }

      if (this.options.bullets) {
        this._loadBullets();
      }

      this._events();

      if (this.options.autoPlay && this.$slides.length > 1) {
        this.geoSync();
      }

      if (this.options.accessible) {
        // allow wrapper to be focusable to enable arrow navigation
        this.$wrapper.attr('tabindex', 0);
      }
    }
    /**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */

  }, {
    key: "_loadBullets",
    value: function _loadBullets() {
      this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find('button');
    }
    /**
    * Sets a \`timer\` object on the orbit, and starts the counter for the next slide.
    * @function
    */

  }, {
    key: "geoSync",
    value: function geoSync() {
      var _this = this;

      this.timer = new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](this.$element, {
        duration: this.options.timerDelay,
        infinite: false
      }, function () {
        _this.changeSlide(true);
      });
      this.timer.start();
    }
    /**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */

  }, {
    key: "_prepareForOrbit",
    value: function _prepareForOrbit() {
      var _this = this;

      this._setWrapperHeight();
    }
    /**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */

  }, {
    key: "_setWrapperHeight",
    value: function _setWrapperHeight(cb) {
      //rewrite this to \`for\` loop
      var max = 0,
          temp,
          counter = 0,
          _this = this;

      this.$slides.each(function () {
        temp = this.getBoundingClientRect().height;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter); // hide all slides but the active one

        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({
            'display': 'none'
          });
        }

        max = temp > max ? temp : max;
        counter++;
      });

      if (counter === this.$slides.length) {
        this.$wrapper.css({
          'height': max
        }); //only change the wrapper height property once.

        if (cb) {
          cb(max);
        } //fire callback with max height dimension.

      }
    }
    /**
    * Sets the max-height of each slide.
    * @function
    * @private
    */

  }, {
    key: "_setSlideHeight",
    value: function _setSlideHeight(height) {
      this.$slides.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);
      });
    }
    /**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this; //***************************************
      //**Now using custom event - thanks to:**
      //**      Yohai Ararat of Toronto      **
      //***************************************
      //


      this.$element.off('.resizeme.zf.trigger').on({
        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
      });

      if (this.$slides.length > 1) {
        if (this.options.swipe) {
          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
            e.preventDefault();

            _this.changeSlide(true);
          }).on('swiperight.zf.orbit', function (e) {
            e.preventDefault();

            _this.changeSlide(false);
          });
        } //***************************************


        if (this.options.autoPlay) {
          this.$slides.on('click.zf.orbit', function () {
            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);

            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
          });

          if (this.options.pauseOnHover) {
            this.$element.on('mouseenter.zf.orbit', function () {
              _this.timer.pause();
            }).on('mouseleave.zf.orbit', function () {
              if (!_this.$element.data('clickedOn')) {
                _this.timer.start();
              }
            });
          }
        }

        if (this.options.navButtons) {
          var $controls = this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass));
          $controls.attr('tabindex', 0) //also need to handle enter/return and spacebar key presses
          .on('click.zf.orbit touchend.zf.orbit', function (e) {
            e.preventDefault();

            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));
          });
        }

        if (this.options.bullets) {
          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
            if (/is-active/g.test(this.className)) {
              return false;
            } //if this is active, kick out of function.


            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),
                ltr = idx > _this.$slides.filter('.is-active').data('slide'),
                $slide = _this.$slides.eq(idx);

            _this.changeSlide(ltr, $slide, idx);
          });
        }

        if (this.options.accessible) {
          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
            // handle keyboard event with keyboard util
            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Orbit', {
              next: function next() {
                _this.changeSlide(true);
              },
              previous: function previous() {
                _this.changeSlide(false);
              },
              handled: function handled() {
                // if bullet is focused, make sure focus moves
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {
                  _this.$bullets.filter('.is-active').focus();
                }
              }
            });
          });
        }
      }
    }
    /**
     * Resets Orbit so it can be reinitialized
     */

  }, {
    key: "_reset",
    value: function _reset() {
      // Don't do anything if there are no slides (first run)
      if (typeof this.$slides == 'undefined') {
        return;
      }

      if (this.$slides.length > 1) {
        // Remove old events
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit'); // Restart timer if autoPlay is enabled

        if (this.options.autoPlay) {
          this.timer.restart();
        } // Reset all sliddes


        this.$slides.each(function (el) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
        }); // Show the first slide

        this.$slides.first().addClass('is-active').show(); // Triggers when the slide has finished animating

        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]); // Select first bullet if bullets are present

        if (this.options.bullets) {
          this._updateBullets(0);
        }
      }
    }
    /**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */

  }, {
    key: "changeSlide",
    value: function changeSlide(isLTR, chosenSlide, idx) {
      if (!this.$slides) {
        return;
      } // Don't freak out if we're in the middle of cleanup


      var $curSlide = this.$slides.filter('.is-active').eq(0);

      if (/mui/g.test($curSlide[0].className)) {
        return false;
      } //if the slide is currently animating, kick out of the function


      var $firstSlide = this.$slides.first(),
          $lastSlide = this.$slides.last(),
          dirIn = isLTR ? 'Right' : 'Left',
          dirOut = isLTR ? 'Left' : 'Right',
          _this = this,
          $newSlide;

      if (!chosenSlide) {
        //most of the time, this will be auto played or clicked from the navButtons.
        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a \`next\` or \`prev\` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select \`next\` or \`prev\`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
        this.options.infiniteWrap ? $curSlide.next(".".concat(this.options.slideClass)).length ? $curSlide.next(".".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(".".concat(this.options.slideClass)) : //pick next slide if moving left to right
        this.options.infiniteWrap ? $curSlide.prev(".".concat(this.options.slideClass)).length ? $curSlide.prev(".".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(".".concat(this.options.slideClass)); //pick prev slide if moving right to left
      } else {
        $newSlide = chosenSlide;
      }

      if ($newSlide.length) {
        /**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

        if (this.options.bullets) {
          idx = idx || this.$slides.index($newSlide); //grab index to update bullets

          this._updateBullets(idx);
        }

        if (this.options.useMUI && !this.$element.is(':hidden')) {
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn($newSlide.addClass('is-active'), this.options["animInFrom".concat(dirIn)], function () {
            $newSlide.css({
              'display': 'block'
            }).attr('aria-live', 'polite');
          });
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut($curSlide.removeClass('is-active'), this.options["animOutTo".concat(dirOut)], function () {
            $curSlide.removeAttr('aria-live');

            if (_this.options.autoPlay && !_this.timer.isPaused) {
              _this.timer.restart();
            } //do stuff?

          });
        } else {
          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();

          if (this.options.autoPlay && !this.timer.isPaused) {
            this.timer.restart();
          }
        }
        /**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */


        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
      }
    }
    /**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */

  }, {
    key: "_updateBullets",
    value: function _updateBullets(idx) {
      var $oldBullet = this.$element.find(".".concat(this.options.boxOfBullets)).find('.is-active').removeClass('is-active').blur(),
          span = $oldBullet.find('span:last').detach(),
          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
    }
    /**
    * Destroys the carousel and hides the element.
    * @function
    */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    }
  }]);

  return Orbit;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__["Plugin"]);

Orbit.defaults = {
  /**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
  bullets: true,

  /**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
  navButtons: true,

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
  animInFromRight: 'slide-in-right',

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
  animOutToRight: 'slide-out-right',

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
  animInFromLeft: 'slide-in-left',

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
  animOutToLeft: 'slide-out-left',

  /**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
  autoPlay: true,

  /**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
  timerDelay: 5000,

  /**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
  infiniteWrap: true,

  /**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
  swipe: true,

  /**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
  pauseOnHover: true,

  /**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
  accessible: true,

  /**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
  containerClass: 'orbit-container',

  /**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
  slideClass: 'orbit-slide',

  /**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
  boxOfBullets: 'orbit-bullets',

  /**
  * Class applied to the \`next\` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
  nextClass: 'orbit-next',

  /**
  * Class applied to the \`previous\` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
  prevClass: 'orbit-previous',

  /**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
  useMUI: true
};


//# sourceURL=webpack:///./js/foundation.orbit.js?`)},"./js/foundation.positionable.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positionable", function() { return Positionable; });
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var POSITIONS = ['left', 'right', 'top', 'bottom'];
var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
var ALIGNMENTS = {
  'left': VERTICAL_ALIGNMENTS,
  'right': VERTICAL_ALIGNMENTS,
  'top': HORIZONTAL_ALIGNMENTS,
  'bottom': HORIZONTAL_ALIGNMENTS
};

function nextItem(item, array) {
  var currentIdx = array.indexOf(item);

  if (currentIdx === array.length - 1) {
    return array[0];
  } else {
    return array[currentIdx + 1];
  }
}

var Positionable =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Positionable, _Plugin);

  function Positionable() {
    _classCallCheck(this, Positionable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));
  }

  _createClass(Positionable, [{
    key: "_init",

    /**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
    value: function _init() {
      this.triedPositions = {};
      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
      this.originalPosition = this.position;
      this.originalAlignment = this.alignment;
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      return 'bottom';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      switch (this.position) {
        case 'bottom':
        case 'top':
          return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() ? 'right' : 'left';

        case 'left':
        case 'right':
          return 'bottom';
      }
    }
    /**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */

  }, {
    key: "_reposition",
    value: function _reposition() {
      if (this._alignmentsExhausted(this.position)) {
        this.position = nextItem(this.position, POSITIONS);
        this.alignment = ALIGNMENTS[this.position][0];
      } else {
        this._realign();
      }
    }
    /**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */

  }, {
    key: "_realign",
    value: function _realign() {
      this._addTriedPosition(this.position, this.alignment);

      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
    }
  }, {
    key: "_addTriedPosition",
    value: function _addTriedPosition(position, alignment) {
      this.triedPositions[position] = this.triedPositions[position] || [];
      this.triedPositions[position].push(alignment);
    }
  }, {
    key: "_positionsExhausted",
    value: function _positionsExhausted() {
      var isExhausted = true;

      for (var i = 0; i < POSITIONS.length; i++) {
        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
      }

      return isExhausted;
    }
  }, {
    key: "_alignmentsExhausted",
    value: function _alignmentsExhausted(position) {
      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
    } // When we're trying to center, we don't want to apply offset that's going to
    // take us just off center, so wrap around to return 0 for the appropriate
    // offset in those alignments.  TODO: Figure out if we want to make this
    // configurable behavior... it feels more intuitive, especially for tooltips, but
    // it's possible someone might actually want to start from center and then nudge
    // slightly off.

  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      return this.options.vOffset;
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      return this.options.hOffset;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition($anchor, $element, $parent) {
      if ($anchor.attr('aria-expanded') === 'false') {
        return false;
      }

      var $eleDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($element),
          $anchorDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($anchor);

      if (!this.options.allowOverlap) {
        // restore original position & alignment before checking overlap
        this.position = this.originalPosition;
        this.alignment = this.originalAlignment;
      }

      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

      if (!this.options.allowOverlap) {
        var overlaps = {};
        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better

        var minCoordinates = {
          position: this.position,
          alignment: this.alignment
        };

        while (!this._positionsExhausted()) {
          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);

          if (overlap === 0) {
            return;
          }

          if (overlap < minOverlap) {
            minOverlap = overlap;
            minCoordinates = {
              position: this.position,
              alignment: this.alignment
            };
          }

          this._reposition();

          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        } // If we get through the entire loop, there was no non-overlapping
        // position available. Pick the version with least overlap.


        this.position = minCoordinates.position;
        this.alignment = minCoordinates.alignment;
        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
      }
    }
  }]);

  return Positionable;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

Positionable.defaults = {
  /**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0
};


//# sourceURL=webpack:///./js/foundation.positionable.js?`)},"./js/foundation.responsiveAccordionTabs.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return ResponsiveAccordionTabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ "./js/foundation.accordion.js");
/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ "./js/foundation.tabs.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // The plugin matches the plugin classes with these plugin instances.

var MenuPlugins = {
  tabs: {
    cssClass: 'tabs',
    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"]
  },
  accordion: {
    cssClass: 'accordion',
    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__["Accordion"]
  }
};
/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */

var ResponsiveAccordionTabs =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveAccordionTabs, _Plugin);

  function ResponsiveAccordionTabs() {
    _classCallCheck(this, ResponsiveAccordionTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).apply(this, arguments));
  }

  _createClass(ResponsiveAccordionTabs, [{
    key: "_setup",

    /**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @name ResponsiveAccordionTabs
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.$element.data(), options);
      this.rules = this.$element.data('responsive-accordion-tabs');
      this.currentMq = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat

      if (!this.$element.attr('id')) {
        this.$element.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsiveaccordiontabs'));
      }

      ;

      this._init();

      this._events();
    }
    /**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


      if (typeof this.rules === 'string') {
        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

        var rules = this.rules.split(' '); // Iterate through every rule found

        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }

        this.rules = rulesTree;
      }

      this._getAllOptions();

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      }
    }
  }, {
    key: "_getAllOptions",
    value: function _getAllOptions() {
      //get all defaults and options
      var _this = this;

      _this.allOptions = {};

      for (var key in MenuPlugins) {
        if (MenuPlugins.hasOwnProperty(key)) {
          var obj = MenuPlugins[key];

          try {
            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');
            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);

            for (var keyKey in tmpPlugin.options) {
              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
                var objObj = tmpPlugin.options[keyKey];
                _this.allOptions[keyKey] = objObj;
              }
            }

            tmpPlugin.destroy();
          } catch (e) {}
        }
      }
    }
    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
          _this = this; // Iterate through each rule and find the last matching rule


      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
          matchedMq = key;
        }
      }); // No match? No dice

      if (!matchedMq) return; // Plugin already initialized? We good

      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      }); // Add the CSS class for the new plugin

      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

      if (this.currentPlugin) {
        //don't know why but on nested elements data zfPlugin get's lost
        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
        this.currentPlugin.destroy();
      }

      this._handleMarkup(this.rules[matchedMq].cssClass);

      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
    }
  }, {
    key: "_handleMarkup",
    value: function _handleMarkup(toSet) {
      var _this = this,
          fromString = 'accordion';

      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
      if ($panels.length) fromString = 'tabs';

      if (fromString === toSet) {
        return;
      }

      ;
      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
      this.$element.removeAttr('role');
      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

      if (fromString === 'tabs') {
        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
      } else {
        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
      }

      ;
      $panels.css({
        display: '',
        visibility: ''
      });
      $liHeads.css({
        display: '',
        visibility: ''
      });

      if (toSet === 'accordion') {
        $panels.each(function (key, value) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
            height: ''
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
          $liHeadsA.addClass('accordion-title');
        });
      } else if (toSet === 'tabs') {
        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));

        if ($placeholder.length) {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
          $placeholder.remove();
        } else {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
        }

        ;
        $panels.each(function (key, value) {
          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);
          var hash = $liHeadsA.get(key).hash.slice(1);
          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'accordion');

          if (hash !== id) {
            if (hash !== '') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
            } else {
              hash = id;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
            }

            ;
          }

          ;
          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');

          if (isActive) {
            tempValue.addClass('is-active');
          }

          ;
        });
        $liHeads.addClass(tabsTitle);
      }

      ;
    }
    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.currentPlugin) this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
  }]);

  return ResponsiveAccordionTabs;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveAccordionTabs.defaults = {};


//# sourceURL=webpack:///./js/foundation.responsiveAccordionTabs.js?`)},"./js/foundation.responsiveMenu.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return ResponsiveMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ "./js/foundation.dropdownMenu.js");
/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ "./js/foundation.drilldown.js");
/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ "./js/foundation.accordionMenu.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MenuPlugins = {
  dropdown: {
    cssClass: 'dropdown',
    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"]
  },
  drilldown: {
    cssClass: 'drilldown',
    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__["Drilldown"]
  },
  accordion: {
    cssClass: 'accordion-menu',
    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__["AccordionMenu"]
  }
}; // import "foundation.util.triggers.js";

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var ResponsiveMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveMenu, _Plugin);

  function ResponsiveMenu() {
    _classCallCheck(this, ResponsiveMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));
  }

  _createClass(ResponsiveMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.rules = this.$element.data('responsive-menu');
      this.currentMq = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveMenu'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


      if (typeof this.rules === 'string') {
        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

        var rules = this.rules.split(' '); // Iterate through every rule found

        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }

        this.rules = rulesTree;
      }

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      } // Add data-mutate since children may need it.


      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsive-menu'));
    }
    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        _this._checkMediaQueries();
      }); // $(window).on('resize.zf.ResponsiveMenu', function() {
      //   _this._checkMediaQueries();
      // });
    }
    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
          _this = this; // Iterate through each rule and find the last matching rule


      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
          matchedMq = key;
        }
      }); // No match? No dice

      if (!matchedMq) return; // Plugin already initialized? We good

      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      }); // Add the CSS class for the new plugin

      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

      if (this.currentPlugin) this.currentPlugin.destroy();
      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    }
    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');
    }
  }]);

  return ResponsiveMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveMenu.defaults = {};


//# sourceURL=webpack:///./js/foundation.responsiveMenu.js?`)},"./js/foundation.responsiveToggle.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return ResponsiveToggle; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */

var ResponsiveToggle =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveToggle, _Plugin);

  function ResponsiveToggle() {
    _classCallCheck(this, ResponsiveToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));
  }

  _createClass(ResponsiveToggle, [{
    key: "_setup",

    /**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
      this.className = 'ResponsiveToggle'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      var targetID = this.$element.data('responsive-toggle');

      if (!targetID) {
        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
      }

      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetID));
      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
        return target === targetID || target === "";
      });
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes

      if (this.options.animate) {
        var input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      }

      this._update();
    }
    /**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._updateMqHandler = this._update.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
    }
    /**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */

  }, {
    key: "_update",
    value: function _update() {
      // Mobile
      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
        this.$element.show();
        this.$targetMenu.hide();
      } // Desktop
      else {
          this.$element.hide();
          this.$targetMenu.show();
        }
    }
    /**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this2 = this;

      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
        /**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
        if (this.options.animate) {
          if (this.$targetMenu.is(':hidden')) {
            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn(this.$targetMenu, this.animationIn, function () {
              _this2.$element.trigger('toggled.zf.responsiveToggle');

              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
            });
          } else {
            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(this.$targetMenu, this.animationOut, function () {
              _this2.$element.trigger('toggled.zf.responsiveToggle');
            });
          }
        } else {
          this.$targetMenu.toggle(0);
          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
          this.$element.trigger('toggled.zf.responsiveToggle');
        }
      }
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.responsiveToggle');
      this.$toggler.off('.zf.responsiveToggle');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
    }
  }]);

  return ResponsiveToggle;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
  hideFor: 'medium',

  /**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};


//# sourceURL=webpack:///./js/foundation.responsiveToggle.js?`)},"./js/foundation.reveal.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reveal", function() { return Reveal; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */

var Reveal =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Reveal, _Plugin);

  function Reveal() {
    _classCallCheck(this, Reveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));
  }

  _createClass(Reveal, [{
    key: "_setup",

    /**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Reveal.defaults, this.$element.data(), options);
      this.className = 'Reveal'; // ie9 back compat

      this._init(); // Triggers init is idempotent, just need to make sure it is initialized


      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Reveal', {
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

      this.id = this.$element.attr('id');
      this.isActive = false;
      this.cached = {
        mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].current
      };
      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\\"".concat(this.id, "\\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\\"".concat(this.id, "\\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\\"".concat(this.id, "\\"]"));
      this.$anchor.attr({
        'aria-controls': this.id,
        'aria-haspopup': true,
        'tabindex': 0
      });

      if (this.options.fullScreen || this.$element.hasClass('full')) {
        this.options.fullScreen = true;
        this.options.overlay = false;
      }

      if (this.options.overlay && !this.$overlay) {
        this.$overlay = this._makeOverlay(this.id);
      }

      this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
      });

      if (this.$overlay) {
        this.$element.detach().appendTo(this.$overlay);
      } else {
        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
        this.$element.addClass('without-overlay');
      }

      this._events();

      if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
        this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
          return _this2.open();
        });
      }
    }
    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */

  }, {
    key: "_makeOverlay",
    value: function _makeOverlay() {
      var additionalOverlayClasses = '';

      if (this.options.additionalOverlayClasses) {
        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
      }

      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
    }
    /**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */

  }, {
    key: "_updatePosition",
    value: function _updatePosition() {
      var width = this.$element.outerWidth();
      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      var height = this.$element.outerHeight();
      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
      var left,
          top = null;

      if (this.options.hOffset === 'auto') {
        left = parseInt((outerWidth - width) / 2, 10);
      } else {
        left = parseInt(this.options.hOffset, 10);
      }

      if (this.options.vOffset === 'auto') {
        if (height > outerHeight) {
          top = parseInt(Math.min(100, outerHeight / 10), 10);
        } else {
          top = parseInt((outerHeight - height) / 4, 10);
        }
      } else if (this.options.vOffset !== null) {
        top = parseInt(this.options.vOffset, 10);
      }

      if (top !== null) {
        this.$element.css({
          top: top + 'px'
        });
      } // only worry about left if we don't have an overlay or we have a horizontal offset,
      // otherwise we're perfectly in the middle


      if (!this.$overlay || this.options.hOffset !== 'auto') {
        this.$element.css({
          left: left + 'px'
        });
        this.$element.css({
          margin: '0px'
        });
      }
    }
    /**
     * Adds event handlers for the modal.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;

      var _this = this;

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': function closeZfTrigger(event, $element) {
          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {
            // only close reveal when it's explicitly called
            return _this3.close.apply(_this3);
          }
        },
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': function resizemeZfTrigger() {
          _this._updatePosition();
        }
      });

      if (this.options.closeOnClick && this.options.overlay) {
        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
            return;
          }

          _this.close();
        });
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
      }
    }
    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */

  }, {
    key: "_handleState",
    value: function _handleState(e) {
      if (window.location.hash === '#' + this.id && !this.isActive) {
        this.open();
      } else {
        this.close();
      }
    }
    /**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */

  }, {
    key: "_disableScroll",
    value: function _disableScroll(scrollTop) {
      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", -scrollTop);
      }
    }
    /**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by \`_disableScroll\`)
    */

  }, {
    key: "_enableScroll",
    value: function _enableScroll(scrollTop) {
      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", "");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);
      }
    }
    /**
     * Opens the modal controlled by \`this.$anchor\`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */

  }, {
    key: "open",
    value: function open() {
      var _this4 = this;

      // either update or replace browser history
      var hash = "#".concat(this.id);

      if (this.options.deepLink && window.location.hash !== hash) {
        if (window.history.pushState) {
          if (this.options.updateHistory) {
            window.history.pushState({}, '', hash);
          } else {
            window.history.replaceState({}, '', hash);
          }
        } else {
          window.location.hash = hash;
        }
      } // Remember anchor that opened it to set focus back later, have general anchors as fallback


      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;
      this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning

      this.$element.css({
        'visibility': 'hidden'
      }).show().scrollTop(0);

      if (this.options.overlay) {
        this.$overlay.css({
          'visibility': 'hidden'
        }).show();
      }

      this._updatePosition();

      this.$element.hide().css({
        'visibility': ''
      });

      if (this.$overlay) {
        this.$overlay.css({
          'visibility': ''
        }).hide();

        if (this.$element.hasClass('fast')) {
          this.$overlay.addClass('fast');
        } else if (this.$element.hasClass('slow')) {
          this.$overlay.addClass('slow');
        }
      }

      if (!this.options.multipleOpened) {
        /**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
        this.$element.trigger('closeme.zf.reveal', this.id);
      }

      this._disableScroll();

      var _this = this; // Motion UI method of reveal


      if (this.options.animationIn) {
        var afterAnimation = function afterAnimation() {
          _this.$element.attr({
            'aria-hidden': false,
            'tabindex': -1
          }).focus();

          _this._addGlobalClasses();

          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(_this.$element);
        };

        if (this.options.overlay) {
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$overlay, 'fade-in');
        }

        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$element, this.options.animationIn, function () {
          if (_this4.$element) {
            // protect against object having been removed
            _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(_this4.$element);
            afterAnimation();
          }
        });
      } // jQuery method of reveal
      else {
          if (this.options.overlay) {
            this.$overlay.show(0);
          }

          this.$element.show(this.options.showDelay);
        } // handle accessibility


      this.$element.attr({
        'aria-hidden': false,
        'tabindex': -1
      }).focus();
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);

      this._addGlobalClasses();

      this._addGlobalListeners();
      /**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */


      this.$element.trigger('open.zf.reveal');
    }
    /**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - \`.is-reveal-open\` - Prevents the scroll on document
     * - \`.zf-has-scroll\`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */

  }, {
    key: "_addGlobalClasses",
    value: function _addGlobalClasses() {
      var updateScrollbarClass = function updateScrollbarClass() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));
      };

      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
        return updateScrollbarClass();
      });
      updateScrollbarClass();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');
    }
    /**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */

  }, {
    key: "_removeGlobalClasses",
    value: function _removeGlobalClasses() {
      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');
    }
    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */

  }, {
    key: "_addGlobalListeners",
    value: function _addGlobalListeners() {
      var _this = this;

      if (!this.$element) {
        return;
      } // If we're in the middle of cleanup, don't freak out


      this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(this.$element);

      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
            return;
          }

          _this.close();
        });
      }

      if (this.options.closeOnEsc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {
          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Reveal', {
            close: function close() {
              if (_this.options.closeOnEsc) {
                _this.close();
              }
            }
          });
        });
      }
    }
    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.isActive || !this.$element.is(':visible')) {
        return false;
      }

      var _this = this; // Motion UI method of hiding


      if (this.options.animationOut) {
        if (this.options.overlay) {
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$overlay, 'fade-out');
        }

        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$element, this.options.animationOut, finishUp);
      } // jQuery method of hiding
      else {
          this.$element.hide(this.options.hideDelay);

          if (this.options.overlay) {
            this.$overlay.hide(0, finishUp);
          } else {
            finishUp();
          }
        } // Conditionals to remove extra event listeners added on open


      if (this.options.closeOnEsc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');
      }

      if (!this.options.overlay && this.options.closeOnClick) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.reveal');
      }

      this.$element.off('keydown.zf.reveal');

      function finishUp() {
        // Get the current top before the modal is closed and restore the scroll after.
        // TODO: use component properties instead of HTML properties
        // See https://github.com/zurb/foundation-sites/pull/10786
        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

        }

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(_this.$element);

        _this.$element.attr('aria-hidden', true);

        _this._enableScroll(scrollTop);
        /**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */


        _this.$element.trigger('closed.zf.reveal');
      }
      /**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */


      if (this.options.resetOnClose) {
        this.$element.html(this.$element.html());
      }

      this.isActive = false; // If deepLink and we did not switched to an other modal...

      if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
        // Remove the history hash
        if (window.history.replaceState) {
          var urlWithoutHash = window.location.pathname + window.location.search;

          if (this.options.updateHistory) {
            window.history.pushState({}, '', urlWithoutHash); // remove the hash
          } else {
            window.history.replaceState('', document.title, urlWithoutHash);
          }
        } else {
          window.location.hash = '';
        }
      }

      this.$activeAnchor.focus();
    }
    /**
     * Toggles the open/closed state of a modal.
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "_destroy",

    /**
     * Destroys an instance of a modal.
     * @function
     */
    value: function _destroy() {
      if (this.options.overlay) {
        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()

        this.$overlay.hide().off().remove();
      }

      this.$element.hide().off();
      this.$anchor.off('.zf');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(".zf.reveal:".concat(this.id));
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

      }
    }
  }]);

  return Reveal;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationIn: '',

  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationOut: '',

  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  showDelay: 0,

  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  hideDelay: 0,

  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Allows the modal to close if the user presses the \`ESCAPE\` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,

  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  multipleOpened: false,

  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',

  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',

  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,

  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,

  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  resetOnClose: false,

  /**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If \`deepLink\` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
  updateHistory: false,

  /**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
  appendTo: "body",

  /**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
  additionalOverlayClasses: ''
};


//# sourceURL=webpack:///./js/foundation.reveal.js?`)},"./js/foundation.slider.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ "./js/foundation.util.touch.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */

var Slider =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Slider, _Plugin);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "_setup",

    /**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Slider.defaults, this.$element.data(), options);
      this.className = 'Slider'; // ie9 back compat
      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.

      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Slider', {
        'ltr': {
          'ARROW_RIGHT': 'increase',
          'ARROW_UP': 'increase',
          'ARROW_DOWN': 'decrease',
          'ARROW_LEFT': 'decrease',
          'SHIFT_ARROW_RIGHT': 'increase_fast',
          'SHIFT_ARROW_UP': 'increase_fast',
          'SHIFT_ARROW_DOWN': 'decrease_fast',
          'SHIFT_ARROW_LEFT': 'decrease_fast',
          'HOME': 'min',
          'END': 'max'
        },
        'rtl': {
          'ARROW_LEFT': 'increase',
          'ARROW_RIGHT': 'decrease',
          'SHIFT_ARROW_LEFT': 'increase_fast',
          'SHIFT_ARROW_RIGHT': 'decrease_fast'
        }
      });
    }
    /**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      this.inputs = this.$element.find('input');
      this.handles = this.$element.find('[data-slider-handle]');
      this.$handle = this.handles.eq(0);
      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle.attr('aria-controls')));
      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

      var isDbl = false,
          _this = this;

      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
        this.options.disabled = true;
        this.$element.addClass(this.options.disabledClass);
      }

      if (!this.inputs.length) {
        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);
        this.options.binding = true;
      }

      this._setInitAttr(0);

      if (this.handles[1]) {
        this.options.doubleSided = true;
        this.$handle2 = this.handles.eq(1);
        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle2.attr('aria-controls')));

        if (!this.inputs[1]) {
          this.inputs = this.inputs.add(this.$input2);
        }

        isDbl = true; // this.$handle.triggerHandler('click.zf.slider');

        this._setInitAttr(1);
      } // Set handle positions


      this.setHandles();

      this._events();
    }
  }, {
    key: "setHandles",
    value: function setHandles() {
      var _this2 = this;

      if (this.handles[1]) {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val(), true);
        });
      } else {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
      }
    }
  }, {
    key: "_reflow",
    value: function _reflow() {
      this.setHandles();
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */

  }, {
    key: "_pctOfBar",
    value: function _pctOfBar(value) {
      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._logTransform(pctOfBar);
          break;

        case "log":
          pctOfBar = this._powTransform(pctOfBar);
          break;
      }

      return pctOfBar.toFixed(2);
    }
    /**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */

  }, {
    key: "_value",
    value: function _value(pctOfBar) {
      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._powTransform(pctOfBar);
          break;

        case "log":
          pctOfBar = this._logTransform(pctOfBar);
          break;
      }

      var value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
      return value;
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */

  }, {
    key: "_logTransform",
    value: function _logTransform(value) {
      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */

  }, {
    key: "_powTransform",
    value: function _powTransform(value) {
      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
    }
    /**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */

  }, {
    key: "_setHandlePos",
    value: function _setHandlePos($hndl, location, noInvert, cb) {
      // don't move if the slider has been disabled since its initialization
      if (this.$element.hasClass(this.options.disabledClass)) {
        return;
      } //might need to alter that slightly for bars that will have odd number selections.


      location = parseFloat(location); //on input change events, convert string to number...grumble.
      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max

      if (location < this.options.start) {
        location = this.options.start;
      } else if (location > this.options.end) {
        location = this.options.end;
      }

      var isDbl = this.options.doubleSided; //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
      //for click and drag events, it's weird due to the scale(-1, 1) css property

      if (this.options.vertical && !noInvert) {
        location = this.options.end - location;
      }

      if (isDbl) {
        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
        if (this.handles.index($hndl) === 0) {
          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
          location = location >= h2Val ? h2Val - this.options.step : location;
        } else {
          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
          location = location <= h1Val ? h1Val + this.options.step : location;
        }
      }

      var _this = this,
          vert = this.options.vertical,
          hOrW = vert ? 'height' : 'width',
          lOrT = vert ? 'top' : 'left',
          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
          elemDim = this.$element[0].getBoundingClientRect()[hOrW],
          //percentage of bar min/max value based on click or drag point
      pctOfBar = this._pctOfBar(location),
          //number of actual pixels to shift the handle, based on the percentage obtained above
      pxToMove = (elemDim - handleDim) * pctOfBar,
          //percentage of bar to shift the handle
      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value


      location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders

      var css = {};

      this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??


      if (isDbl) {
        var isLeftHndl = this.handles.index($hndl) === 0,
            //empty variable, will be used for min-height/width for fill bar
        dim,
            //percentage w/h of the handle compared to the slider bar
        handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar

        if (isLeftHndl) {
          //left or top percentage value to apply to the fill bar.
          css[lOrT] = "".concat(movement, "%"); //calculate the new min-height/width for the fill bar.

          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.

          if (cb && typeof cb === 'function') {
            cb();
          } //this is only needed for the initialization of 2 handled sliders

        } else {
          //just caching the value of the left/bottom handle's left/top property
          var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself

          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
        } // assign the min-height/width to our css object


        css["min-".concat(hOrW)] = "".concat(dim, "%");
      }

      this.$element.one('finished.zf.animate', function () {
        /**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
        _this.$element.trigger('moved.zf.slider', [$hndl]);
      }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.

      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
      Object(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Move"])(moveTime, $hndl, function () {
        // adjusting the left/top property of the handle, based on the percentage calculated above
        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
        // fall back to next best guess.
        if (isNaN(movement)) {
          $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
        } else {
          $hndl.css(lOrT, "".concat(movement, "%"));
        }

        if (!_this.options.doubleSided) {
          //if single-handled, a simple method to expand the fill bar
          _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
        } else {
          //otherwise, use the css object we created above
          _this.$fill.css(css);
        }
      });
      /**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.$element.trigger('changed.zf.slider', [$hndl]);
      }, _this.options.changedDelay);
    }
    /**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */

  }, {
    key: "_setInitAttr",
    value: function _setInitAttr(idx) {
      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
      var id = this.inputs.eq(idx).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'slider');
      this.inputs.eq(idx).attr({
        'id': id,
        'max': this.options.end,
        'min': this.options.start,
        'step': this.options.step
      });
      this.inputs.eq(idx).val(initVal);
      this.handles.eq(idx).attr({
        'role': 'slider',
        'aria-controls': id,
        'aria-valuemax': this.options.end,
        'aria-valuemin': this.options.start,
        'aria-valuenow': initVal,
        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
        'tabindex': 0
      });
    }
    /**
     * Sets the input and \`aria-valuenow\` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */

  }, {
    key: "_setValues",
    value: function _setValues($handle, val) {
      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
      this.inputs.eq(idx).val(val);
      $handle.attr('aria-valuenow', val);
    }
    /**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the \`event\` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */

  }, {
    key: "_handleEvent",
    value: function _handleEvent(e, $handle, val) {
      var value, hasVal;

      if (!val) {
        //click or drag events
        e.preventDefault();

        var _this = this,
            vertical = this.options.vertical,
            param = vertical ? 'height' : 'width',
            direction = vertical ? 'top' : 'left',
            eventOffset = vertical ? e.pageY : e.pageX,
            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
            barDim = this.$element[0].getBoundingClientRect()[param],
            windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();

        var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
        // best way to guess this is simulated is if clientY == pageY

        if (e.clientY === e.pageY) {
          eventOffset = eventOffset + windowScroll;
        }

        var eventFromBar = eventOffset - elemOffset;
        var barXY;

        if (eventFromBar < 0) {
          barXY = 0;
        } else if (eventFromBar > barDim) {
          barXY = barDim;
        } else {
          barXY = eventFromBar;
        }

        var offsetPct = percent(barXY, barDim);
        value = this._value(offsetPct); // turn everything around for RTL, yay math!

        if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["rtl"])() && !this.options.vertical) {
          value = this.options.end - value;
        }

        value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders

        hasVal = false;

        if (!$handle) {
          //figure out which handle it is, pass it to the next function.
          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
        }
      } else {
        //change event on input
        value = this._adjustValue(null, val);
        hasVal = true;
      }

      this._setHandlePos($handle, value, hasVal);
    }
    /**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */

  }, {
    key: "_adjustValue",
    value: function _adjustValue($handle, value) {
      var val,
          step = this.options.step,
          div = parseFloat(step / 2),
          left,
          prev_val,
          next_val;

      if (!!$handle) {
        val = parseFloat($handle.attr('aria-valuenow'));
      } else {
        val = value;
      }

      if (val >= 0) {
        left = val % step;
      } else {
        left = step + val % step;
      }

      prev_val = val - left;
      next_val = prev_val + step;

      if (left === 0) {
        return val;
      }

      val = val >= prev_val + div ? next_val : prev_val;
      return val;
    }
    /**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._eventsForHandle(this.$handle);

      if (this.handles[1]) {
        this._eventsForHandle(this.$handle2);
      }
    }
    /**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */

  }, {
    key: "_eventsForHandle",
    value: function _eventsForHandle($handle) {
      var _this = this,
          curHandle,
          timer;

      var handleChangeEvent = function handleChangeEvent(e) {
        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));

        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
      }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification
      // listen for the enter key and trigger a change
      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events


      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
        if (e.keyCode == 13) handleChangeEvent.call(this, e);
      });
      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);

      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
          if (_this.$element.data('dragging')) {
            return false;
          }

          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }

      if (this.options.draggable) {
        this.handles.addTouch();
        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
          $handle.addClass('is-dragging');

          _this.$fill.addClass('is-dragging'); //


          _this.$element.data('dragging', true);

          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
          $body.on('mousemove.zf.slider', function (e) {
            e.preventDefault();

            _this._handleEvent(e, curHandle);
          }).on('mouseup.zf.slider', function (e) {
            _this._handleEvent(e, curHandle);

            $handle.removeClass('is-dragging');

            _this.$fill.removeClass('is-dragging');

            _this.$element.data('dragging', false);

            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
        }) // prevent events triggered by touch
        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
          e.preventDefault();
        });
      }

      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
            oldValue = parseFloat(_this.inputs.eq(idx).val()),
            newValue; // handle keyboard event with keyboard util


        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Slider', {
          decrease: function decrease() {
            newValue = oldValue - _this.options.step;
          },
          increase: function increase() {
            newValue = oldValue + _this.options.step;
          },
          decrease_fast: function decrease_fast() {
            newValue = oldValue - _this.options.step * 10;
          },
          increase_fast: function increase_fast() {
            newValue = oldValue + _this.options.step * 10;
          },
          min: function min() {
            newValue = _this.options.start;
          },
          max: function max() {
            newValue = _this.options.end;
          },
          handled: function handled() {
            // only set handle pos when event was handled specially
            e.preventDefault();

            _this._setHandlePos(_$handle, newValue, true);
          }
        });
        /*if (newValue) { // if pressed key has special function, update value
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue);
        }*/
      });
    }
    /**
     * Destroys the slider plugin.
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.handles.off('.zf.slider');
      this.inputs.off('.zf.slider');
      this.$element.off('.zf.slider');
      clearTimeout(this.timeout);
    }
  }]);

  return Slider;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
  start: 0,

  /**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
  end: 100,

  /**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
  step: 1,

  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
  initialStart: 0,

  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
  initialEnd: 100,

  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
  binding: false,

  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  clickSelect: true,

  /**
   * Set to true and use the \`vertical\` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
  vertical: false,

  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  draggable: true,

  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with \`disabledClass\`.
   * @option
   * @type {boolean}
   * @default false
   */
  disabled: false,

  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
  doubleSided: false,

  /**
   * Potential future feature.
   */
  // steps: 100,

  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
  decimal: 2,

  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,

  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
  moveTime: 200,
  //update this if changing the transition time in the sass

  /**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
  disabledClass: 'disabled',

  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
  invertVertical: false,

  /**
   * Milliseconds before the \`changed.zf-slider\` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
  changedDelay: 500,

  /**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
  nonLinearBase: 5,

  /**
  * Basevalue for non-linear sliders, possible values are: \`'linear'\`, \`'pow'\` & \`'log'\`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
  positionValueFunction: 'linear'
};

function percent(frac, num) {
  return frac / num;
}

function absPosition($handle, dir, clickPos, param) {
  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
}

function baseLog(base, value) {
  return Math.log(value) / Math.log(base);
}



//# sourceURL=webpack:///./js/foundation.slider.js?`)},"./js/foundation.smoothScroll.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */

var SmoothScroll =
/*#__PURE__*/
function (_Plugin) {
  _inherits(SmoothScroll, _Plugin);

  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));
  }

  _createClass(SmoothScroll, [{
    key: "_setup",

    /**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
      this.className = 'SmoothScroll'; // ie9 back compat

      this._init();
    }
    /**
     * Initialize the SmoothScroll plugin
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'smooth-scroll');
      this.$element.attr({
        id: id
      });

      this._events();
    }
    /**
     * Initializes events for SmoothScroll.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.on('click.zf.smoothScroll', this._handleLinkClick);
      this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._handleLinkClick);
    }
    /**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */

  }, {
    key: "_handleLinkClick",
    value: function _handleLinkClick(e) {
      var _this = this;

      // Follow the link if it does not point to an anchor.
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]')) return;
      var arrival = e.currentTarget.getAttribute('href');
      this._inTransition = true;
      SmoothScroll.scrollToLoc(arrival, this.options, function () {
        _this._inTransition = false;
      });
      e.preventDefault();
    }
  }, {
    key: "_destroy",

    /**
     * Destroys the SmoothScroll instance.
     * @function
     */
    value: function _destroy() {
      this.$element.off('click.zf.smoothScroll', this._handleLinkClick);
      this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._handleLinkClick);
    }
  }], [{
    key: "scrollToLoc",

    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
    value: function scrollToLoc(loc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors

      if (!$loc.length) return false;
      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, options.animationDuration, options.animationEasing, function () {
        if (typeof callback === 'function') {
          callback();
        }
      });
    }
  }]);

  return SmoothScroll;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin.
 */


SmoothScroll.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be \`'swing'\` or \`'linear'\`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};


//# sourceURL=webpack:///./js/foundation.smoothScroll.js?`)},"./js/foundation.sticky.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var Sticky =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Sticky, _Plugin);

  function Sticky() {
    _classCallCheck(this, Sticky);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
  }

  _createClass(Sticky, [{
    key: "_setup",

    /**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
      this.className = 'Sticky'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();
    }
    /**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

      var $parent = this.$element.parent('[data-sticky-container]'),
          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'sticky'),
          _this = this;

      if ($parent.length) {
        this.$container = $parent;
      } else {
        this.wasWrapped = true;
        this.$element.wrap(this.options.container);
        this.$container = this.$element.parent();
      }

      this.$container.addClass(this.options.containerClass);
      this.$element.addClass(this.options.stickyClass).attr({
        'data-resize': id,
        'data-mutate': id
      });

      if (this.options.anchor !== '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
          'data-mutate': id
        });
      }

      this.scrollCount = this.options.checkEvery;
      this.isStuck = false;
      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        //We calculate the container height to have correct values for anchor points offset calculation.
        _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;

        _this.$container.css('height', _this.containerHeight);

        _this.elemHeight = _this.containerHeight;

        if (_this.options.anchor !== '') {
          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
        } else {
          _this._parsePoints();
        }

        _this._setSizes(function () {
          var scroll = window.pageYOffset;

          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.


          if (!_this.isStuck) {
            _this._removeSticky(scroll >= _this.topPoint ? false : true);
          }
        });

        _this._events(id.split('-').reverse().join('-'));
      });
    }
    /**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */

  }, {
    key: "_parsePoints",
    value: function _parsePoints() {
      var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
          pts = [top, btm],
          breaks = {};

      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
        var pt;

        if (typeof pts[i] === 'number') {
          pt = pts[i];
        } else {
          var place = pts[i].split(':'),
              anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));
          pt = anchor.offset().top;

          if (place[1] && place[1].toLowerCase() === 'bottom') {
            pt += anchor[0].getBoundingClientRect().height;
          }
        }

        breaks[i] = pt;
      }

      this.points = breaks;
      return;
    }
    /**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: "_events",
    value: function _events(id) {
      var _this = this,
          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

      if (this.isOn) {
        return;
      }

      if (this.canStick) {
        this.isOn = true;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {
          if (_this.scrollCount === 0) {
            _this.scrollCount = _this.options.checkEvery;

            _this._setSizes(function () {
              _this._calc(false, window.pageYOffset);
            });
          } else {
            _this.scrollCount--;

            _this._calc(false, window.pageYOffset);
          }
        });
      }

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });
      this.$element.on('mutateme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });

      if (this.$anchor) {
        this.$anchor.on('mutateme.zf.trigger', function (e, el) {
          _this._eventsHandler(id);
        });
      }
    }
    /**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: "_eventsHandler",
    value: function _eventsHandler(id) {
      var _this = this,
          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

      _this._setSizes(function () {
        _this._calc(false);

        if (_this.canStick) {
          if (!_this.isOn) {
            _this._events(id);
          }
        } else if (_this.isOn) {
          _this._pauseListeners(scrollListener);
        }
      });
    }
    /**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to \`window\`
     */

  }, {
    key: "_pauseListeners",
    value: function _pauseListeners(scrollListener) {
      this.isOn = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);
      /**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */

      this.$element.trigger('pause.zf.sticky');
    }
    /**
     * Called on every \`scroll\` event and on \`_init\`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to \`window.pageYOffset\`.
     */

  }, {
    key: "_calc",
    value: function _calc(checkSizes, scroll) {
      if (checkSizes) {
        this._setSizes();
      }

      if (!this.canStick) {
        if (this.isStuck) {
          this._removeSticky(true);
        }

        return false;
      }

      if (!scroll) {
        scroll = window.pageYOffset;
      }

      if (scroll >= this.topPoint) {
        if (scroll <= this.bottomPoint) {
          if (!this.isStuck) {
            this._setSticky();
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(false);
          }
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(true);
        }
      }
    }
    /**
     * Causes the $element to become stuck.
     * Adds \`position: fixed;\`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */

  }, {
    key: "_setSticky",
    value: function _setSticky() {
      var _this = this,
          stickTo = this.options.stickTo,
          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
          css = {};

      css[mrgn] = "".concat(this.options[mrgn], "em");
      css[stickTo] = 0;
      css[notStuckTo] = 'auto';
      this.isStuck = true;
      this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
      /**
       * Fires when the $element has become \`position: fixed;\`
       * Namespaced to \`top\` or \`bottom\`, e.g. \`sticky.zf.stuckto:top\`
       * @event Sticky#stuckto
       */
      .trigger("sticky.zf.stuckto:".concat(stickTo));
      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
        _this._setSizes();
      });
    }
    /**
     * Causes the $element to become unstuck.
     * Removes \`position: fixed;\`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */

  }, {
    key: "_removeSticky",
    value: function _removeSticky(isTop) {
      var stickTo = this.options.stickTo,
          stickToTop = stickTo === 'top',
          css = {},
          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
          notStuckTo = stickToTop ? 'bottom' : 'top',
          topOrBottom = isTop ? 'top' : 'bottom';
      css[mrgn] = 0;
      css['bottom'] = 'auto';

      if (isTop) {
        css['top'] = 0;
      } else {
        css['top'] = anchorPt;
      }

      this.isStuck = false;
      this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
      /**
       * Fires when the $element has become anchored.
       * Namespaced to \`top\` or \`bottom\`, e.g. \`sticky.zf.unstuckfrom:bottom\`
       * @event Sticky#unstuckfrom
       */
      .trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
    }
    /**
     * Sets the $element and $container sizes for plugin.
     * Calls \`_setBreakPoints\`.
     * @param {Function} cb - optional callback function to fire on completion of \`_setBreakPoints\`.
     * @private
     */

  }, {
    key: "_setSizes",
    value: function _setSizes(cb) {
      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.stickyOn);

      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        }
      }

      var _this = this,
          newElemWidth = this.$container[0].getBoundingClientRect().width,
          comp = window.getComputedStyle(this.$container[0]),
          pdngl = parseInt(comp['padding-left'], 10),
          pdngr = parseInt(comp['padding-right'], 10);

      if (this.$anchor && this.$anchor.length) {
        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
      } else {
        this._parsePoints();
      }

      this.$element.css({
        'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
      });
      var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;

      if (this.$element.css("display") == "none") {
        newContainerHeight = 0;
      }

      this.containerHeight = newContainerHeight;
      this.$container.css({
        height: newContainerHeight
      });
      this.elemHeight = newContainerHeight;

      if (!this.isStuck) {
        if (this.$element.hasClass('is-at-bottom')) {
          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
          this.$element.css('top', anchorPt);
        }
      }

      this._setBreakPoints(newContainerHeight, function () {
        if (cb && typeof cb === 'function') {
          cb();
        }
      });
    }
    /**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by \`_setSizes\`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */

  }, {
    key: "_setBreakPoints",
    value: function _setBreakPoints(elemHeight, cb) {
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        } else {
          return false;
        }
      }

      var mTop = emCalc(this.options.marginTop),
          mBtm = emCalc(this.options.marginBottom),
          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
          // topPoint = this.$anchor.offset().top || this.points[0],
      // bottomPoint = topPoint + this.anchorHeight || this.points[1],
      winHeight = window.innerHeight;

      if (this.options.stickTo === 'top') {
        topPoint -= mTop;
        bottomPoint -= elemHeight + mTop;
      } else if (this.options.stickTo === 'bottom') {
        topPoint -= winHeight - (elemHeight + mBtm);
        bottomPoint -= winHeight - mBtm;
      } else {//this would be the stickTo: both option... tricky
      }

      this.topPoint = topPoint;
      this.bottomPoint = bottomPoint;

      if (cb && typeof cb === 'function') {
        cb();
      }
    }
    /**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this._removeSticky(true);

      this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
        height: '',
        top: '',
        bottom: '',
        'max-width': ''
      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');

      if (this.$anchor && this.$anchor.length) {
        this.$anchor.off('change.zf.sticky');
      }

      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

      if (this.wasWrapped) {
        this.$element.unwrap();
      } else {
        this.$container.removeClass(this.options.containerClass).css({
          height: ''
        });
      }
    }
  }]);

  return Sticky;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',

  /**
   * Location in the view the element sticks to. Can be \`'top'\` or \`'bottom'\`.
   * @option
   * @type {string}
   * @default 'top'
   */
  stickTo: 'top',

  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
  anchor: '',

  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
  topAnchor: '',

  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
  btmAnchor: '',

  /**
   * Margin, in \`em\`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginTop: 1,

  /**
   * Margin, in \`em\`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginBottom: 1,

  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
  stickyOn: 'medium',

  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to \`sticky\`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
  stickyClass: 'sticky',

  /**
   * Class applied to sticky container. Foundation defaults to \`sticky-container\`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
  containerClass: 'sticky-container',

  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to \`0\` will cause it to recalc every scroll event, setting it to \`-1\` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
  checkEvery: -1
};
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */

function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}



//# sourceURL=webpack:///./js/foundation.sticky.js?`)},"./js/foundation.tabs.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */

var Tabs =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Tabs, _Plugin);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "_setup",

    /**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
      this.className = 'Tabs'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Tabs', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'previous',
        'ARROW_DOWN': 'next',
        'ARROW_LEFT': 'previous' // 'TAB': 'next',
        // 'SHIFT_TAB': 'previous'

      });
    }
    /**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      var _this = this;

      this._isInitializing = true;
      this.$element.attr({
        'role': 'tablist'
      });
      this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\\"".concat(this.$element[0].id, "\\"]"));
      this.$tabTitles.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $link = $elem.find('a'),
            isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
            linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
            $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));
        $elem.attr({
          'role': 'presentation'
        });
        $link.attr({
          'role': 'tab',
          'aria-controls': hash,
          'aria-selected': isActive,
          'id': linkId,
          'tabindex': isActive ? '0' : '-1'
        });
        $tabContent.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId
        }); // Save up the initial hash to return to it later when going back in history

        if (isActive) {
          _this._initialAnchor = "#".concat(hash);
        }

        if (!isActive) {
          $tabContent.attr('aria-hidden', 'true');
        }

        if (isActive && _this.options.autoFocus) {
          _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: $elem.offset().top
            }, _this.options.deepLinkSmudgeDelay, function () {
              $link.focus();
            });
          });
        }
      });

      if (this.options.matchHeight) {
        var $images = this.$tabContent.find('img');

        if ($images.length) {
          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__["onImagesLoaded"])($images, this._setHeight.bind(this));
        } else {
          this._setHeight();
        }
      } // Current context-bound function to open tabs on page load or history hashchange


      this._checkDeepLink = function () {
        var anchor = window.location.hash;

        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }

        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

        var $link = anchor && _this2.$element.find('[href$="' + anchor + '"]'); // Whether the anchor element that has been found is part of this element


        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, select it

        if ($anchor && $anchor.length && $link && $link.length) {
          _this2.selectTab($anchor, true);
        } // Otherwise, collapse everything
        else {
            _this2._collapse();
          }

        if (isOwnAnchor) {
          // Roll up a little to show the titles
          if (_this2.options.deepLinkSmudge) {
            var offset = _this2.$element.offset();

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: offset.top
            }, _this2.options.deepLinkSmudgeDelay);
          }
          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */


          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
        }
      }; //use browser to open a tab, if it exists in this tabset


      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();

      this._isInitializing = false;
    }
    /**
     * Adds event handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._addKeyHandler();

      this._addClickHandler();

      this._setHeightMqHandler = null;

      if (this.options.matchHeight) {
        this._setHeightMqHandler = this._setHeight.bind(this);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }
    /**
     * Adds click handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_addClickHandler",
    value: function _addClickHandler() {
      var _this = this;

      this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
        e.preventDefault();
        e.stopPropagation();

        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }
    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_addKeyHandler",
    value: function _addKeyHandler() {
      var _this = this;

      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
        if (e.which === 9) return;
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            if (_this.options.wrapOnKeys) {
              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
            } else {
              $prevElement = $elements.eq(Math.max(0, i - 1));
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            }

            return;
          }
        }); // handle keyboard event with keyboard util

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Tabs', {
          open: function open() {
            $element.find('[role="tab"]').focus();

            _this._handleTabChange($element);
          },
          previous: function previous() {
            $prevElement.find('[role="tab"]').focus();

            _this._handleTabChange($prevElement);
          },
          next: function next() {
            $nextElement.find('[role="tab"]').focus();

            _this._handleTabChange($nextElement);
          },
          handled: function handled() {
            e.stopPropagation();
            e.preventDefault();
          }
        });
      });
    }
    /**
     * Opens the tab \`$targetContent\` defined by \`$target\`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */

  }, {
    key: "_handleTabChange",
    value: function _handleTabChange($target, historyHandled) {
      // With \`activeCollapse\`, if the target is the active Tab, collapse it.
      if ($target.hasClass("".concat(this.options.linkActiveClass))) {
        if (this.options.activeCollapse) {
          this._collapse();
        }

        return;
      }

      var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
          $tabLink = $target.find('[role="tab"]'),
          target = $tabLink.attr('data-tabs-target'),
          anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
          $targetContent = this.$tabContent.find(anchor); //close old tab

      this._collapseTab($oldTab); //open new tab


      this._openTab($target); //either replace or update browser history


      if (this.options.deepLink && !historyHandled) {
        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
      /**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */


      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event

      $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
    }
    /**
     * Opens the tab \`$targetContent\` defined by \`$target\`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */

  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
          $targetContent = this.$tabContent.find("#".concat(hash));
      $target.addClass("".concat(this.options.linkActiveClass));
      $tabLink.attr({
        'aria-selected': 'true',
        'tabindex': '0'
      });
      $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
    }
    /**
     * Collapses \`$targetContent\` defined by \`$target\`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */

  }, {
    key: "_collapseTab",
    value: function _collapseTab($target) {
      var $target_anchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
        'aria-selected': 'false',
        'tabindex': -1
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($target_anchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
        'aria-hidden': 'true'
      });
    }
    /**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */

  }, {
    key: "_collapse",
    value: function _collapse() {
      var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));

      if ($activeTab.length) {
        this._collapseTab($activeTab);
        /**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */


        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
      }
    }
    /**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */

  }, {
    key: "selectTab",
    value: function selectTab(elem, historyHandled) {
      var idStr;

      if (_typeof(elem) === 'object') {
        idStr = elem[0].id;
      } else {
        idStr = elem;
      }

      if (idStr.indexOf('#') < 0) {
        idStr = "#".concat(idStr);
      }

      var $target = this.$tabTitles.has("[href$=\\"".concat(idStr, "\\"]"));

      this._handleTabChange($target, historyHandled);
    }
  }, {
    key: "_setHeight",

    /**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with \`data-match-height="true"\`, tabs sets to equal height
     * @function
     * @private
     */
    value: function _setHeight() {
      var max = 0,
          _this = this; // Lock down the \`this\` value for the root tabs object


      this.$tabContent.find(".".concat(this.options.panelClass)).css('height', '').each(function () {
        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

        if (!isActive) {
          panel.css({
            'visibility': 'hidden',
            'display': 'block'
          });
        }

        var temp = this.getBoundingClientRect().height;

        if (!isActive) {
          panel.css({
            'visibility': '',
            'display': ''
          });
        }

        max = temp > max ? temp : max;
      }).css('height', "".concat(max, "px"));
    }
    /**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();

      if (this.options.matchHeight) {
        if (this._setHeightMqHandler != null) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
        }
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }

      if (this.onLoadListener) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
      }
    }
  }]);

  return Tabs;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

Tabs.defaults = {
  /**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If \`deepLink\` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If \`deepLinkSmudge\` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If \`deepLink\` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,

  /**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
  wrapOnKeys: true,

  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
  matchHeight: false,

  /**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
  activeCollapse: false,

  /**
   * Class applied to \`li\`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
  linkClass: 'tabs-title',

  /**
   * Class applied to the active \`li\` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  linkActiveClass: 'is-active',

  /**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
  panelClass: 'tabs-panel',

  /**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  panelActiveClass: 'is-active'
};


//# sourceURL=webpack:///./js/foundation.tabs.js?`)},"./js/foundation.toggler.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return Toggler; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

var Toggler =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Toggler, _Plugin);

  function Toggler() {
    _classCallCheck(this, Toggler);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));
  }

  _createClass(Toggler, [{
    key: "_setup",

    /**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Toggler.defaults, element.data(), options);
      this.className = '';
      this.className = 'Toggler'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      this._events();
    }
    /**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var input; // Parse animation classes if they were set

      if (this.options.animate) {
        input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      } // Otherwise, parse toggle class
      else {
          input = this.$element.data('toggler'); // Allow for a . at the beginning of the string

          this.className = input[0] === '.' ? input.slice(1) : input;
        } // Add ARIA attributes to triggers:


      var id = this.$element[0].id,
          $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open~=\\"".concat(id, "\\"], [data-close~=\\"").concat(id, "\\"], [data-toggle~=\\"").concat(id, "\\"]")); // - aria-expanded: according to the element visibility.

      $triggers.attr('aria-expanded', !this.$element.is(':hidden')); // - aria-controls: adding the element id to it if not already in it.

      $triggers.each(function (index, trigger) {
        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);
        var controls = $trigger.attr('aria-controls') || '';
        var containsId = new RegExp("\\\\b".concat(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["RegExpEscape"])(id), "\\\\b")).test(controls);
        if (!containsId) $trigger.attr('aria-controls', controls ? "".concat(controls, " ").concat(id) : id);
      });
    }
    /**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
    }
    /**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
    }
  }, {
    key: "_toggleClass",
    value: function _toggleClass() {
      this.$element.toggleClass(this.className);
      var isOn = this.$element.hasClass(this.className);

      if (isOn) {
        /**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
        this.$element.trigger('on.zf.toggler');
      } else {
        /**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
        this.$element.trigger('off.zf.toggler');
      }

      this._updateARIA(isOn);

      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
    }
  }, {
    key: "_toggleAnimate",
    value: function _toggleAnimate() {
      var _this = this;

      if (this.$element.is(':hidden')) {
        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateIn(this.$element, this.animationIn, function () {
          _this._updateARIA(true);

          this.trigger('on.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      } else {
        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateOut(this.$element, this.animationOut, function () {
          _this._updateARIA(false);

          this.trigger('off.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      }
    }
  }, {
    key: "_updateARIA",
    value: function _updateARIA(isOn) {
      var id = this.$element[0].id;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\\"".concat(id, "\\"], [data-close=\\"").concat(id, "\\"], [data-toggle=\\"").concat(id, "\\"]")).attr({
        'aria-expanded': isOn ? true : false
      });
    }
    /**
     * Destroys the instance of Toggler on the element.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.toggler');
    }
  }]);

  return Toggler;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);

Toggler.defaults = {
  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};


//# sourceURL=webpack:///./js/foundation.toggler.js?`)},"./js/foundation.tooltip.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");
/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.positionable */ "./js/foundation.positionable.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */

var Tooltip =
/*#__PURE__*/
function (_Positionable) {
  _inherits(Tooltip, _Positionable);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "_setup",

    /**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);
      this.className = 'Tooltip'; // ie9 back compat

      this.isActive = false;
      this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();
    }
    /**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

      var elemId = this.$element.attr('aria-describedby') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'tooltip');
      this.options.tipText = this.options.tipText || this.$element.attr('title');
      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);

      if (this.options.allowHtml) {
        this.template.appendTo(document.body).html(this.options.tipText).hide();
      } else {
        this.template.appendTo(document.body).text(this.options.tipText).hide();
      }

      this.$element.attr({
        'title': '',
        'aria-describedby': elemId,
        'data-yeti-box': elemId,
        'data-toggle': elemId,
        'data-resize': elemId
      }).addClass(this.options.triggerClass);

      _get(_getPrototypeOf(Tooltip.prototype), "_init", this).call(this);

      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var position = this.$element[0].className.match(/\\b(top|left|right|bottom)\\b/g);
      return position ? position[0] : 'top';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      return 'center';
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      if (this.position === 'left' || this.position === 'right') {
        return this.options.hOffset + this.options.tooltipWidth;
      } else {
        return this.options.hOffset;
      }
    }
  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      if (this.position === 'top' || this.position === 'bottom') {
        return this.options.vOffset + this.options.tooltipHeight;
      } else {
        return this.options.vOffset;
      }
    }
    /**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */

  }, {
    key: "_buildTemplate",
    value: function _buildTemplate(id) {
      var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({
        'role': 'tooltip',
        'aria-hidden': true,
        'data-is-active': false,
        'data-is-focus': false,
        'id': id
      });
      return $template;
    }
    /**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */

  }, {
    key: "_setPosition",
    value: function _setPosition() {
      _get(_getPrototypeOf(Tooltip.prototype), "_setPosition", this).call(this, this.$element, this.template);
    }
    /**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */

  }, {
    key: "show",
    value: function show() {
      if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.showOn)) {
        // console.error('The screen is too small to display this tooltip');
        return false;
      }

      var _this = this;

      this.template.css('visibility', 'hidden').show();

      this._setPosition();

      this.template.removeClass('top bottom left right').addClass(this.position);
      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
      /**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */

      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
      this.template.attr({
        'data-is-active': true,
        'aria-hidden': false
      });
      _this.isActive = true; // console.log(this.template);

      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?
      });
      /**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */

      this.$element.trigger('show.zf.tooltip');
    }
    /**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */

  }, {
    key: "hide",
    value: function hide() {
      // console.log('hiding', this.$element.data('yeti-box'));
      var _this = this;

      this.template.stop().attr({
        'aria-hidden': true,
        'data-is-active': false
      }).fadeOut(this.options.fadeOutDuration, function () {
        _this.isActive = false;
        _this.isClick = false;
      });
      /**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */

      this.$element.trigger('hide.zf.tooltip');
    }
    /**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      var $template = this.template;
      var isFocus = false;

      if (!this.options.disableHover) {
        this.$element.on('mouseenter.zf.tooltip', function (e) {
          if (!_this.isActive) {
            _this.timeout = setTimeout(function () {
              _this.show();
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.tooltip', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["ignoreMousedisappear"])(function (e) {
          clearTimeout(_this.timeout);

          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
            _this.hide();
          }
        }));
      }

      if (this.options.clickOpen) {
        this.$element.on('mousedown.zf.tooltip', function (e) {
          e.stopImmediatePropagation();

          if (_this.isClick) {//_this.hide();
            // _this.isClick = false;
          } else {
            _this.isClick = true;

            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
              _this.show();
            }
          }
        });
      } else {
        this.$element.on('mousedown.zf.tooltip', function (e) {
          e.stopImmediatePropagation();
          _this.isClick = true;
        });
      }

      if (!this.options.disableForTouch) {
        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
          _this.isActive ? _this.hide() : _this.show();
        });
      }

      this.$element.on({
        // 'toggle.zf.trigger': this.toggle.bind(this),
        // 'close.zf.trigger': this.hide.bind(this)
        'close.zf.trigger': this.hide.bind(this)
      });
      this.$element.on('focus.zf.tooltip', function (e) {
        isFocus = true;

        if (_this.isClick) {
          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
          // a real focus, otherwise on hover and come back we get bad behavior
          if (!_this.options.clickOpen) {
            isFocus = false;
          }

          return false;
        } else {
          _this.show();
        }
      }).on('focusout.zf.tooltip', function (e) {
        isFocus = false;
        _this.isClick = false;

        _this.hide();
      }).on('resizeme.zf.trigger', function () {
        if (_this.isActive) {
          _this._setPosition();
        }
      });
    }
    /**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
      this.template.remove();
    }
  }]);

  return Tooltip;
}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__["Positionable"]);

Tooltip.defaults = {
  disableForTouch: false,

  /**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
  hoverDelay: 200,

  /**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeInDuration: 150,

  /**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeOutDuration: 150,

  /**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,

  /**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
  templateClasses: '',

  /**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
  tooltipClass: 'tooltip',

  /**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
  triggerClass: 'has-tip',

  /**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
  showOn: 'small',

  /**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
  template: '',

  /**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
  tipText: '',
  touchCloseText: 'Tap to close.',

  /**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
  clickOpen: true,

  /**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
  allowBottomOverlap: false,

  /**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,

  /**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
  tooltipHeight: 14,

  /**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
  tooltipWidth: 12,

  /**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
  allowHtml: false
};
/**
 * TODO utilize resize event trigger
 */



//# sourceURL=webpack:///./js/foundation.tooltip.js?`)},"./js/foundation.util.box.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");



var Box = {
  ImNotTouchingYou: ImNotTouchingYou,
  OverlapArea: OverlapArea,
  GetDimensions: GetDimensions,
  GetOffsets: GetOffsets,
  GetExplicitOffsets: GetExplicitOffsets
  /**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with \`window\`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */

};

function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
}

;

function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
  var eleDims = GetDimensions(element),
      topOver,
      bottomOver,
      leftOver,
      rightOver;

  if (parent) {
    var parDims = GetDimensions(parent);
    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - parDims.offset.top;
    leftOver = eleDims.offset.left - parDims.offset.left;
    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
  } else {
    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
  }

  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
  topOver = Math.min(topOver, 0);
  leftOver = Math.min(leftOver, 0);
  rightOver = Math.min(rightOver, 0);

  if (lrOnly) {
    return leftOver + rightOver;
  }

  if (tbOnly) {
    return topOver + bottomOver;
  } // use sum of squares b/c we care about overlap area.


  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */


function GetDimensions(elem) {
  elem = elem.length ? elem[0] : elem;

  if (elem === window || elem === document) {
    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
  }

  var rect = elem.getBoundingClientRect(),
      parRect = elem.parentNode.getBoundingClientRect(),
      winRect = document.body.getBoundingClientRect(),
      winY = window.pageYOffset,
      winX = window.pageXOffset;
  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + winY,
      left: rect.left + winX
    },
    parentDims: {
      width: parRect.width,
      height: parRect.height,
      offset: {
        top: parRect.top + winY,
        left: parRect.left + winX
      }
    },
    windowDims: {
      width: winRect.width,
      height: winRect.height,
      offset: {
        top: winY,
        left: winX
      }
    }
  };
}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with \`em\` values as well/instead of pixels
 */


function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
  console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");

  switch (position) {
    case 'top':
      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);

    case 'bottom':
      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);

    case 'center top':
      return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);

    case 'center bottom':
      return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);

    case 'center left':
      return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);

    case 'center right':
      return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);

    case 'left bottom':
      return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);

    case 'right bottom':
      return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
    // Backwards compatibility... this along with the reveal and reveal full
    // classes are the only ones that didn't reference anchor

    case 'center':
      return {
        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
        top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
      };

    case 'reveal':
      return {
        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
        top: $eleDims.windowDims.offset.top + vOffset
      };

    case 'reveal full':
      return {
        left: $eleDims.windowDims.offset.left,
        top: $eleDims.windowDims.offset.top
      };
      break;

    default:
      return {
        left: Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      };
  }
}

function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
  var $eleDims = GetDimensions(element),
      $anchorDims = anchor ? GetDimensions(anchor) : null;
  var topVal, leftVal; // set position related attribute

  switch (position) {
    case 'top':
      topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
      break;

    case 'bottom':
      topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
      break;

    case 'left':
      leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
      break;

    case 'right':
      leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
      break;
  } // set alignment related attribute


  switch (position) {
    case 'top':
    case 'bottom':
      switch (alignment) {
        case 'left':
          leftVal = $anchorDims.offset.left + hOffset;
          break;

        case 'right':
          leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
          break;

        case 'center':
          leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
          break;
      }

      break;

    case 'right':
    case 'left':
      switch (alignment) {
        case 'bottom':
          topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
          break;

        case 'top':
          topVal = $anchorDims.offset.top + vOffset;
          break;

        case 'center':
          topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
          break;
      }

      break;
  }

  return {
    top: topVal,
    left: leftVal
  };
}



//# sourceURL=webpack:///./js/foundation.util.box.js?`)},"./js/foundation.util.imageLoader.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return onImagesLoaded; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */

function onImagesLoaded(images, callback) {
  var self = this,
      unloaded = images.length;

  if (unloaded === 0) {
    callback();
  }

  images.each(function () {
    // Check if image is loaded
    if (this.complete && typeof this.naturalWidth !== 'undefined') {
      singleImageLoaded();
    } else {
      // If the above check failed, simulate loading on detached element.
      var image = new Image(); // Still count image as loaded if it finalizes with an error.

      var events = "load.zf.images error.zf.images";
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me(event) {
        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);
        singleImageLoaded();
      });
      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');
    }
  });

  function singleImageLoaded() {
    unloaded--;

    if (unloaded === 0) {
      callback();
    }
  }
}



//# sourceURL=webpack:///./js/foundation.util.imageLoader.js?`)},"./js/foundation.util.keyboard.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/




var keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  35: 'END',
  36: 'HOME',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
};
var commands = {}; // Functions pulled out to be referenceable from internals

function findFocusable($element) {
  if (!$element) {
    return false;
  }

  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
      return false;
    } //only have visible elements and those that have a tabindex greater or equal 0


    return true;
  });
}

function parseKey(event) {
  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for \`fromCharCode\` calls for CTRL only events

  key = key.replace(/\\W+/, '');
  if (event.shiftKey) key = "SHIFT_".concat(key);
  if (event.ctrlKey) key = "CTRL_".concat(key);
  if (event.altKey) key = "ALT_".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only \`CTRL_ALT\`)

  key = key.replace(/_$/, '');
  return key;
}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey: parseKey,

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey: function handleKey(event, component, functions) {
    var commandList = commands[component],
        keyCode = this.parseKey(event),
        cmds,
        command,
        fn;
    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') {
      // this component does not differentiate between ltr and rtl
      cmds = commandList; // use plain list
    } else {
      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
      if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["rtl"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);
    }

    command = cmds[keyCode];
    fn = functions[command];

    if (fn && typeof fn === 'function') {
      // execute function  if exists
      var returnValue = fn.apply();

      if (functions.handled || typeof functions.handled === 'function') {
        // execute function when event was handled
        functions.handled(returnValue);
      }
    } else {
      if (functions.unhandled || typeof functions.unhandled === 'function') {
        // execute function when event was not handled
        functions.unhandled();
      }
    }
  },

  /**
   * Finds all focusable elements within the given \`$element\`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within \`$element\`
   */
  findFocusable: findFocusable,

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
  register: function register(componentName, cmds) {
    commands[componentName] = cmds;
  },
  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
  //

  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus: function trapFocus($element) {
    var $focusable = findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);
    $element.on('keydown.zf.trapfocus', function (event) {
      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },

  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus: function releaseFocus($element) {
    $element.off('keydown.zf.trapfocus');
  }
};
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */

function getKeyCodes(kcs) {
  var k = {};

  for (var kc in kcs) {
    k[kcs[kc]] = kcs[kc];
  }

  return k;
}



//# sourceURL=webpack:///./js/foundation.util.keyboard.js?`)},"./js/foundation.util.mediaQuery.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return MediaQuery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // Default set of media queries

var defaultQueries = {
  'default': 'only screen',
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
}; // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

/* eslint-disable */

window.matchMedia || (window.matchMedia = function () {
  "use strict"; // For browsers that support matchMedium api such as IE 9 and webkit

  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium

  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;
    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    if (!script) {
      document.head.appendChild(style);
    } else {
      script.parentNode.insertBefore(style, script);
    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers


    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
    styleMedia = {
      matchMedium: function matchMedium(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers

        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        } // Test if media query is true or false


        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());
/* eslint-enable */

var MediaQuery = {
  queries: [],
  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function _init() {
    var self = this;
    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');

    if (!$meta.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq">').appendTo(document.head);
    }

    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
    var namedQueries;
    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      if (namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: "only screen and (min-width: ".concat(namedQueries[key], ")")
        });
      }
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} \`true\` if the breakpoint matches, \`false\` if it's smaller.
   */
  atLeast: function atLeast(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} \`true\` if the breakpoint matches, \`false\` if it does not.
   */
  is: function is(size) {
    size = size.trim().split(' ');

    if (size.length > 1 && size[1] === 'only') {
      if (size[0] === this._getCurrentSize()) return true;
    } else {
      return this.atLeast(size[0]);
    }

    return false;
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or \`null\` if the breakpoint doesn't exist.
   */
  get: function get(size) {
    for (var i in this.queries) {
      if (this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }

    return null;
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function _getCurrentSize() {
    var matched;

    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (_typeof(matched) === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function _watcher() {
    var _this = this;

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
      var newSize = _this._getCurrentSize(),
          currentSize = _this.current;

      if (newSize !== currentSize) {
        // Change the current media query
        _this.current = newSize; // Broadcast the media query change on the window

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
}; // Thank you: https://github.com/sindresorhus/query-string

function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key); // missing \`=\` should be \`null\`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    val = typeof val === 'undefined' ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }

    return ret;
  }, {});
  return styleObject;
}



//# sourceURL=webpack:///./js/foundation.util.mediaQuery.js?`)},"./js/foundation.util.motion.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");




/**
 * Motion module.
 * @module foundation.motion
 */

var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];
var Motion = {
  animateIn: function animateIn(element, animation, cb) {
    animate(true, element, animation, cb);
  },
  animateOut: function animateOut(element, animation, cb) {
    animate(false, element, animation, cb);
  }
};

function Move(duration, elem, fn) {
  var anim,
      prog,
      start = null; // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts) {
    if (!start) start = ts; // console.log(start, ts);

    prog = ts - start;
    fn.apply(elem);

    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }

  anim = window.requestAnimationFrame(move);
}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */


function animate(isIn, element, animation, cb) {
  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
  if (!element.length) return;
  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

  reset();
  element.addClass(animation).css('transition', 'none');
  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  }); // Start the animation

  requestAnimationFrame(function () {
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  }); // Clean up the animation when it finishes

  element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  } // Resets transitions and removes motion-specific classes


  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
  }
}



//# sourceURL=webpack:///./js/foundation.util.motion.js?`)},"./js/foundation.util.nest.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return Nest; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



var Nest = {
  Feather: function Feather(menu) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
    menu.attr('role', 'menubar');
    var items = menu.find('li').attr({
      'role': 'menuitem'
    }),
        subMenuClass = "is-".concat(type, "-submenu"),
        subItemClass = "".concat(subMenuClass, "-item"),
        hasSubClass = "is-".concat(type, "-submenu-parent"),
        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

    items.each(function () {
      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $sub = $item.children('ul');

      if ($sub.length) {
        $item.addClass(hasSubClass);
        $sub.addClass("submenu ".concat(subMenuClass)).attr({
          'data-submenu': ''
        });

        if (applyAria) {
          $item.attr({
            'aria-haspopup': true,
            'aria-label': $item.children('a:first').text()
          }); // Note:  Drilldowns behave differently in how they hide, and so need
          // additional attributes.  We should look if this possibly over-generalized
          // utility (Nest) is appropriate when we rework menus in 6.4

          if (type === 'drilldown') {
            $item.attr({
              'aria-expanded': false
            });
          }
        }

        $sub.addClass("submenu ".concat(subMenuClass)).attr({
          'data-submenu': '',
          'role': 'menubar'
        });

        if (type === 'drilldown') {
          $sub.attr({
            'aria-hidden': true
          });
        }
      }

      if ($item.parent('[data-submenu]').length) {
        $item.addClass("is-submenu-item ".concat(subItemClass));
      }
    });
    return;
  },
  Burn: function Burn(menu, type) {
    var //items = menu.find('li'),
    subMenuClass = "is-".concat(type, "-submenu"),
        subItemClass = "".concat(subMenuClass, "-item"),
        hasSubClass = "is-".concat(type, "-submenu-parent");
    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
  }
};


//# sourceURL=webpack:///./js/foundation.util.nest.js?`)},"./js/foundation.util.timer.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




function Timer(elem, options, cb) {
  var _this = this,
      duration = options.duration,
      //options is an object for easily adding features later.
  nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start,
      timer;

  this.isPaused = false;

  this.restart = function () {
    remain = -1;
    clearTimeout(timer);
    this.start();
  };

  this.start = function () {
    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function () {
      if (options.infinite) {
        _this.restart(); //rerun the timer.

      }

      if (cb && typeof cb === 'function') {
        cb();
      }
    }, remain);
    elem.trigger("timerstart.zf.".concat(nameSpace));
  };

  this.pause = function () {
    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger("timerpaused.zf.".concat(nameSpace));
  };
}



//# sourceURL=webpack:///./js/foundation.util.timer.js?`)},"./js/foundation.util.touch.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************

var Touch = {};
var startPosX,
    startPosY,
    startTime,
    elapsedTime,
    startEvent,
    isMoving = false,
    didMoved = false;

function onTouchEnd(e) {
  this.removeEventListener('touchmove', onTouchMove);
  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a "tap"

  if (!didMoved) {
    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
  }

  startEvent = null;
  isMoving = false;
  didMoved = false;
}

function onTouchMove(e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {
    e.preventDefault();
  }

  if (isMoving) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    var dx = startPosX - x;
    var dy = startPosY - y;
    var dir;
    didMoved = true;
    elapsedTime = new Date().getTime() - startTime;

    if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {
      dir = dx > 0 ? 'left' : 'right';
    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
    //   dir = dy > 0 ? 'down' : 'up';
    // }


    if (dir) {
      e.preventDefault();
      onTouchEnd.apply(this, arguments);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', e), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event("swipe".concat(dir), e));
    }
  }
}

function onTouchStart(e) {
  if (e.touches.length == 1) {
    startPosX = e.touches[0].pageX;
    startPosY = e.touches[0].pageY;
    startEvent = e;
    isMoving = true;
    didMoved = false;
    startTime = new Date().getTime();
    this.addEventListener('touchmove', onTouchMove, false);
    this.addEventListener('touchend', onTouchEnd, false);
  }
}

function init() {
  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
}

function teardown() {
  this.removeEventListener('touchstart', onTouchStart);
}

var SpotSwipe =
/*#__PURE__*/
function () {
  function SpotSwipe($) {
    _classCallCheck(this, SpotSwipe);

    this.version = '1.0.0';
    this.enabled = 'ontouchstart' in document.documentElement;
    this.preventDefault = false;
    this.moveThreshold = 75;
    this.timeThreshold = 200;
    this.$ = $;

    this._init();
  }

  _createClass(SpotSwipe, [{
    key: "_init",
    value: function _init() {
      var $ = this.$;
      $.event.special.swipe = {
        setup: init
      };
      $.event.special.tap = {
        setup: init
      };
      $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special["swipe".concat(this)] = {
          setup: function setup() {
            $(this).on('swipe', $.noop);
          }
        };
      });
    }
  }]);

  return SpotSwipe;
}();
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/


Touch.setupSpotSwipe = function ($) {
  $.spotSwipe = new SpotSwipe($);
};
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/


Touch.setupTouchHandler = function ($) {
  $.fn.addTouch = function () {
    this.each(function (i, el) {
      $(el).bind('touchstart touchmove touchend touchcancel', function (event) {
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function handleTouch(event) {
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      },
          type = eventTypes[event.type],
          simulatedEvent;

      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
        /*left*/
        , null);
      }

      first.target.dispatchEvent(simulatedEvent);
    };
  };
};

Touch.init = function ($) {
  if (typeof $.spotSwipe === 'undefined') {
    Touch.setupSpotSwipe($);
    Touch.setupTouchHandler($);
  }
};



//# sourceURL=webpack:///./js/foundation.util.touch.js?`)},"./js/foundation.util.triggers.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return Triggers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];

  for (var i = 0; i < prefixes.length; i++) {
    if ("".concat(prefixes[i], "MutationObserver") in window) {
      return window["".concat(prefixes[i], "MutationObserver")];
    }
  }

  return false;
}();

var triggers = function triggers(el, type) {
  el.data(type).split(' ').forEach(function (id) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
  });
};

var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};
Triggers.Listeners.Basic = {
  openListener: function openListener() {
    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
  },
  closeListener: function closeListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');

    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
    }
  },
  toggleListener: function toggleListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');

    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
    }
  },
  closeableListener: function closeableListener(e) {
    e.stopPropagation();
    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');

    if (animation !== '') {
      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
    }
  },
  toggleFocusListener: function toggleFocusListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
  }
}; // Elements with [data-open] will reveal a plugin that supports it when clicked.

Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
}; // Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.


Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.


Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
}; // Elements with [data-closable] will respond to close.zf.trigger events.


Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
}; // Elements with [data-toggle-focus] will respond to coming in and out of focus


Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
}; // More Global/complex listeners and triggers


Triggers.Listeners.Global = {
  resizeListener: function resizeListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
      });
    } //trigger all listening elements and signal a resize event


    $nodes.attr('data-events', "resize");
  },
  scrollListener: function scrollListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
      });
    } //trigger all listening elements and signal a scroll event


    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function closeMeListener(e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin, "]")).not("[data-yeti-box=\\"".concat(pluginId, "\\"]"));
    plugins.each(function () {
      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

      _this.triggerHandler('close.zf.trigger', [_this]);
    });
  } // Global, parses whole document.

};

Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
      plugNames.concat(pluginName);
    } else {
      console.error('Plugin names must be strings');
    }
  }

  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return "closeme.zf.".concat(name);
    }).join(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};

function debounceGlobalListener(debounce, trigger, listener) {
  var timer,
      args = Array.prototype.slice.call(arguments, 3);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}

Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');

  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};

Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');

  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};

Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }

  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback

  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type

    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        }

        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
        }

        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        }

        break;

      case "childList":
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        break;

      default:
        return false;
      //nothing
    }
  };

  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], {
        attributes: true,
        childList: true,
        characterData: false,
        subtree: true,
        attributeFilter: ["data-events", "style"]
      });
    }
  }
};

Triggers.Initializers.addSimpleListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};

Triggers.Initializers.addGlobalListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener();
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};

Triggers.init = function ($, Foundation) {
  Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])($(window), function () {
    if ($.triggersInitialized !== true) {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
      $.triggersInitialized = true;
    }
  });

  if (Foundation) {
    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.

    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};



//# sourceURL=webpack:///./js/foundation.util.triggers.js?`)},jquery:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

//# sourceURL=webpack:///external_%7B%22root%22:%5B%22jQuery%22%5D,%22amd%22:%22jquery%22,%22commonjs%22:%22jquery%22,%22commonjs2%22:%22jquery%22%7D?`)}})});(module.exports==null?{}:module.exports).default||module.exports;window.addEventListener("DOMContentLoaded",()=>{const P=document.querySelector(".root");use_root(jsxRuntimeExports.jsx(ErrorBoundary,{children:jsxRuntimeExports.jsxs(BrowserRouter,{children:[jsxRuntimeExports.jsx(Route,{exact:!0,path:MAIN_PATH,render:R=>jsxRuntimeExports.jsx(App,{})}),jsxRuntimeExports.jsx(Route,{exact:!0,path:EVENTS_PATH,render:R=>jsxRuntimeExports.jsx(MainMenu,{...R,children:jsxRuntimeExports.jsx(Events,{})})}),jsxRuntimeExports.jsx(Route,{exact:!0,path:CONFIRM_PATH,render:R=>jsxRuntimeExports.jsx(MainMenu,{...R,tag:"Confirm",children:jsxRuntimeExports.jsx(Confirm,{})})}),jsxRuntimeExports.jsx(Route,{exact:!0,path:ARTICLE_PATH,render:R=>jsxRuntimeExports.jsx(MainMenu,{...R,fixed:!0,tag:"Article",children:jsxRuntimeExports.jsx(Articles,{...R})})})]})}),P)});
