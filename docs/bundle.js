var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function p(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function m(t,e,n){t.classList[n?"add":"remove"](e)}let $;function g(t){$=t}function v(){const t=$;return(e,n)=>{const o=t.$$.callbacks[e];if(o){const c=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,c)})}}}const b=[],w=[],y=[],x=[],_=Promise.resolve();let k=!1;function H(t){y.push(t)}function A(){const t=new Set;do{for(;b.length;){const t=b.shift();g(t),C(t.$$)}for(;w.length;)w.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];t.has(n)||(n(),t.add(n))}y.length=0}while(b.length);for(;x.length;)x.pop()();k=!1}function C(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(H))}const E=new Set;let U;function N(t,e){t&&t.i&&(E.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),U.c.push(()=>{E.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function j(t,n,r){const{fragment:i,on_mount:a,on_destroy:s,after_update:u}=t.$$;i.m(n,r),H(()=>{const n=a.map(e).filter(c);s?s.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(H)}function L(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function M(t,e){t.$$.dirty||(b.push(t),k||(k=!0,_.then(A)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function P(e,c,r,i,a,s){const u=$;g(e);const l=c.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let f=!1;var h;d.ctx=r?r(e,l,(t,n,o=n)=>(d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),f&&M(e,t)),n)):l,d.update(),f=!0,o(d.before_update),d.fragment=i(d.ctx),c.target&&(c.hydrate?d.fragment.l((h=c.target,Array.from(h.childNodes))):d.fragment.c(),c.intro&&N(e.$$.fragment),j(e,c.target,c.anchor),A()),g(u)}class R{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const S=[];function q(e,n=t){let o;const c=[];function i(t){if(r(e,t)&&(e=t,o)){const t=!S.length;for(let t=0;t<c.length;t+=1){const n=c[t];n[1](),S.push(n,e)}if(t){for(let t=0;t<S.length;t+=2)S[t][0](S[t+1]);S.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,a=t){const s=[r,a];return c.push(s),1===c.length&&(o=n(i)||t),r(e),()=>{const t=c.indexOf(s);-1!==t&&c.splice(t,1),0===c.length&&(o(),o=null)}}}}function B(t){var e,n,o;return{c(){h(e=u("img"),"class","container svelte-gj8o4t"),h(e,"src",n=`https://place-hold.it/${t.width}x${t.width})`),h(e,"alt","placeholder"),m(e,"at-home",!!t.atHome),o=f(e,"click",t.handleClick)},m(t,n){a(t,e,n)},p(t,o){t.width&&n!==(n=`https://place-hold.it/${o.width}x${o.width})`)&&h(e,"src",n),t.atHome&&m(e,"at-home",!!o.atHome)},d(t){t&&s(e),o()}}}function D(t){var e,n;return{c(){h(e=u("img"),"class","container svelte-gj8o4t"),h(e,"src",t.$src),p(e,"max-width",t.width+"px"),h(e,"alt","uploaded image"),m(e,"at-home",!!t.atHome),n=f(e,"click",t.handleClick)},m(t,n){a(t,e,n)},p(t,n){t.$src&&h(e,"src",n.$src),t.width&&p(e,"max-width",n.width+"px"),t.atHome&&m(e,"at-home",!!n.atHome)},d(t){t&&s(e),n()}}}function F(e){var n;function o(t,e){return e.$src?D:B}var c=o(0,e),r=c(e);return{c(){r.c(),n=l("")},m(t,e){r.m(t,e),a(t,n,e)},p(t,e){c===(c=o(0,e))&&r?r.p(t,e):(r.d(1),(r=c(e))&&(r.c(),r.m(n.parentNode,n)))},i:t,o:t,d(t){r.d(t),t&&s(n)}}}function I(t,e,n){let o,{src:c,width:r,atHome:i=!1}=e;var a,s;a=c,s=(t=>{n("$src",o=t)}),t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(a,s));const u=v();return t.$set=(t=>{"src"in t&&n("src",c=t.src),"width"in t&&n("width",r=t.width),"atHome"in t&&n("atHome",i=t.atHome)}),{src:c,width:r,atHome:i,handleClick:function(t){u("click",t)},$src:o}}class T extends R{constructor(t){super(),P(this,t,I,F,r,["src","width","atHome"])}}function z(e){var n,c,r,p,$,g,v,b,w,y,x,_,k,H,A,C,E=new T({props:{src:e.source,width:"100"}});E.$on("click",e.handleClick);var U=new T({props:{src:e.source,width:"100"}});U.$on("click",e.handleClick);var M=new T({props:{src:e.source,width:"100"}});M.$on("click",e.handleClick);var P=new T({props:{atHome:!0,src:e.sourceAtHome,width:"500"}});return P.$on("click",e.handleClick),{c(){n=u("p"),c=l("Me: Can I have "),E.$$.fragment.c(),r=d(),p=u("p"),$=l('Mom: "No, we have already '),U.$$.fragment.c(),g=l(' at home"'),v=d(),b=u("p"),M.$$.fragment.c(),w=l(" at home:"),y=d(),P.$$.fragment.c(),x=d(),_=u("input"),k=d(),H=u("input"),h(n,"class","svelte-149yv5e"),h(p,"class","svelte-149yv5e"),h(b,"class","svelte-149yv5e"),h(_,"type","file"),h(_,"accept","image/*"),h(_,"class","svelte-149yv5e"),m(_,"at-home",!0),h(H,"type","file"),h(H,"accept","image/*"),h(H,"class","svelte-149yv5e"),C=[f(_,"change",e.handleUpload),f(H,"change",e.handleUpload)]},m(t,o){a(t,n,o),i(n,c),j(E,n,null),a(t,r,o),a(t,p,o),i(p,$),j(U,p,null),i(p,g),a(t,v,o),a(t,b,o),j(M,b,null),i(b,w),a(t,y,o),j(P,t,o),a(t,x,o),a(t,_,o),e.input0_binding(_),a(t,k,o),a(t,H,o),e.input1_binding(H),A=!0},p:t,i(t){A||(N(E.$$.fragment,t),N(U.$$.fragment,t),N(M.$$.fragment,t),N(P.$$.fragment,t),A=!0)},o(t){O(E.$$.fragment,t),O(U.$$.fragment,t),O(M.$$.fragment,t),O(P.$$.fragment,t),A=!1},d(t){t&&s(n),L(E),t&&(s(r),s(p)),L(U),t&&(s(v),s(b)),L(M),t&&s(y),L(P,t),t&&(s(x),s(_)),e.input0_binding(null),t&&(s(k),s(H)),e.input1_binding(null),o(C)}}}function G(t,e,n){let o,c;const r=q(null),i=q(null);return{miniUploader:o,uploaderAtHome:c,source:r,sourceAtHome:i,handleUpload:function(t){t.target.files[0].name;const e=new FileReader;e.readAsDataURL(t.target.files[0]),e.onload=(e=>{(-1!==t.target.getAttribute("class").indexOf("at-home")?i:r).update(t=>e.target.result)})},handleClick:function(t){(-1!==t.detail.target.getAttribute("class").indexOf("at-home")?c:o).click(t)},input0_binding:function(t){w[t?"unshift":"push"](()=>{n("uploaderAtHome",c=t)})},input1_binding:function(t){w[t?"unshift":"push"](()=>{n("miniUploader",o=t)})}}}return new class extends R{constructor(t){super(),P(this,t,G,z,r,["source","sourceAtHome"])}get source(){return this.$$.ctx.source}get sourceAtHome(){return this.$$.ctx.sourceAtHome}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
