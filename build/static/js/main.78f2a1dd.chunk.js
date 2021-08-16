(this.webpackJsonpvbpools=this.webpackJsonpvbpools||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(17),a=n.n(c),i=(n(30),n(12)),s=n(4),o=n(14),u=n.n(o),d="skejul",l={showIntro:!0},j=function(){var e=Object(s.a)({},l);try{var t=JSON.parse(u.a.get(d)||"{}");e=Object(s.a)(Object(s.a)({},l),t)}catch(n){}return e},h=n(0),v=Object(r.createContext)(void 0);function b(e,t){var n={};return"showIntro"in t&&(n=Object(s.a)(Object(s.a)({},n||{}),{},{showIntro:t.showIntro})),n&&function(e){var t=j(),n=Object(s.a)(Object(s.a)({},t),e);u.a.set(d,JSON.stringify(n),{domain:document.domain})}(n),Object(s.a)(Object(s.a)({},e),t)}var O={day:0,intro:!1,category:"",loading:!0,showIntro:!0};function f(e){var t=e.children,n=j(),c=Object(r.useReducer)(b,Object(s.a)(Object(s.a)({},O),n)),a=Object(i.a)(c,2),o=a[0],u=a[1];return Object(h.jsx)(v.Provider,{value:{state:o,dispatch:u},children:t})}function m(){var e=Object(r.useContext)(v);if(void 0===e)throw new Error("use must be used within a Provider");return e}var y=n(15),p=n.n(y),x=n(18),g=n(5),w=n(11),N=new(function(){function e(){Object(g.a)(this,e),this._events=[],this._categories=[],this._loaded=!1,this._title="Scheduler",this._intro="This app lets you easily view schedules so you can easily find which event occurs on each day."}return Object(w.a)(e,[{key:"events",get:function(){return this._events}},{key:"categories",get:function(){return this._categories}},{key:"title",get:function(){return this._title}},{key:"intro",get:function(){return this._intro}},{key:"init",value:function(){var e=Object(x.a)(p.a.mark((function e(t){var n,r,c,a,i,s,o=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._loaded){e.next=2;break}return e.abrupt("return");case 2:return t({loading:!0}),e.prev=3,e.next=6,fetch("/data.json");case 6:return e.next=8,e.sent.json();case 8:return n=e.sent,r=n.events,c=n.title,a=n.intro,this._title=c,this._intro=a,this._events=r.sort((function(e,t){return e.start>t.start?1:-1})),this._categories=this._events.reduce((function(e,t){var n=t.category;return e.concat(e.includes(n)?[]:[n])}),[]).sort(),i=r.find((function(e){return e.day===O.day}))?O.day:r[0].day,s=this._categories[1],e.abrupt("return",new Promise((function(e,n){setTimeout((function(){o._loaded=!0,t({loading:!1,day:i,category:s}),e(!0)}),750)})));case 21:e.prev=21,e.t0=e.catch(3);case 23:return e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,this,[[3,21]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),k=n(1);var M=function(e){e%100===60&&(e+=40);var t=e>=1200?"pm":"am",n=e%100,r=(e-n)/100;return"".concat(r=r>12?r-12:r,":").concat(n.toString().padStart(2,"0")," ").concat(t)};var _=function(e){var t=e%100,n=e?(e-t)/100:0;return{minutes:t,hours:n,totalMinutes:60*n+t}},T=function(e){return N.events.filter((function(t){return t.category===e.category&&t.day===e.day})).map((function(e,t,n){var r,c,a=_(e.start-600),i=function(e,t){var n=_(e);return _(t).totalMinutes-n.totalMinutes}(e.start,e.end),o=e.end===(null===(r=n[t+1])||void 0===r?void 0:r.start),u=e.start===(null===(c=n[t-1])||void 0===c?void 0:c.end);return Object(s.a)(Object(s.a)({},e),{},{items:e.items,lengthInMinutes:i,startTime:M(e.start),endTime:o?"":M(e.end),sameTime:u,top:(60*a.hours+a.minutes)/15+"em",height:i/15-.1+"em"})}))};function S(){var e=Object(r.useRef)(function(){for(var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=[],c=1;c<8;c++){var a=[e.getMonth(),e.getDate(),e.getDay()],i=a[0],s=a[1],o=a[2],u=n[o];1===c&&(u="Today"),2===c&&(u="Tomorrow"),r.push({month:t[i],dayOfMonth:s,weekDay:u,dayOfWeek:o}),e.setDate(e.getDate()+1)}return r}()),t=m(),n=t.dispatch,c=t.state;function a(e){var t=e.children,r=e.stateKey,a=e.value;return Object(h.jsx)("button",{type:"button",className:c[r]===a?"selected":"",onClick:function(){return n(Object(k.a)({},r,a))},children:t})}return Object(h.jsxs)("header",{className:"app-header",children:[Object(h.jsx)("nav",{className:"days",children:Object(h.jsx)("ul",{children:e.current.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)(a,{stateKey:"day",value:e.dayOfWeek,children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"day-week",children:e.weekDay}),Object(h.jsx)("div",{className:"day-month",children:e.dayOfMonth}),Object(h.jsx)("div",{className:"month",children:e.month})]})})},t)}))})}),Object(h.jsx)("nav",{className:"categories",children:Object(h.jsx)("ul",{children:N.categories.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)(a,{stateKey:"category",value:e,children:e})},t)}))})})]})}var I=n(23);var D=function(e){var t=e.children,n=e.onClose,r=e.title;return Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("div",{className:"backdrop"}),Object(h.jsxs)("div",{className:"dialog",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h2",{children:r}),Object(h.jsx)("button",{type:"button",onClick:n,children:Object(h.jsx)("svg",{viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})]}),Object(h.jsx)("div",{className:"body",children:t})]})]})};var C=function(){var e=m().dispatch;return Object(h.jsx)(D,{title:N.title,onClose:function(){return e({showIntro:!1})},children:Object(h.jsx)(I.a,{children:N.intro})})};var J=function(){return Object(h.jsxs)("div",{id:"loader",children:[Object(h.jsx)("h2",{children:"Loading..."}),Object(h.jsx)("svg",{viewBox:"0 0 100 100",children:Object(h.jsx)("path",{d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:Object(h.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})]})};var E=function(){var e=m().state,t=T(e),n=Object(r.useRef)(),c=Object(r.useState)(new Date),a=Object(i.a)(c,2),s=a[0],o=a[1],u=function(e){var t,n,r=100*e.getHours()+e.getMinutes(),c=_(r),a=_(600),i=c.totalMinutes-a.totalMinutes;return{top:(t=i/15,n=2,Math.round(t*Math.pow(10,n))/100),time:r,timePretty:M(r)}}(s),d=t.length?t[t.length-1].end:0,l=u.time<d;return Object(r.useEffect)((function(){var e;if(l){var t,r=0;if(n.current&&l)r=n.current.querySelector(".now").offsetHeight*(u.top-1);null===(t=n.current)||void 0===t||t.scroll({top:r,behavior:"smooth"}),e=setInterval((function(){o(new Date)}),6e4)}return function(){return e&&clearInterval(e)}}),[d,u.top,l]),Object(h.jsx)("div",{className:"times-events",ref:function(e){return n.current=e},children:Object(h.jsxs)("div",{className:"scroll-window",children:[l&&Object(h.jsx)("div",{className:"now",style:{top:u.top+"em"},children:Object(h.jsx)("div",{className:"time",children:u.timePretty})}),t.map((function(e,t){return Object(h.jsxs)("div",{className:"time-event",style:{top:e.top,height:e.height},children:[Object(h.jsxs)("div",{className:"time",children:[Object(h.jsx)("div",{className:"start ".concat(e.sameTime?"share":""),children:e.startTime}),e.endTime&&Object(h.jsx)("div",{className:"end",children:e.endTime}),Object(h.jsx)("pre",{style:{display:"none"},children:JSON.stringify(e,null,"\t")})]}),Object(h.jsx)("div",{className:"event",children:Object(h.jsx)("div",{children:e.items.map((function(e,t){return Object(h.jsxs)("span",{children:[e,Object(h.jsx)("br",{})]},t)}))})}),Object(h.jsx)("pre",{style:{display:"none"},children:JSON.stringify(e,null,"\t")})]},t)}))]})})};var F=function(){var e=m(),t=e.state,n=e.dispatch;return Object(r.useEffect)((function(){var e;N.init(n);var t=function(e){var t;e.preventDefault();var n=null===(t=e.target)||void 0===t?void 0:t.href;n&&window.open(n,"_blank")};return null===(e=document.getElementById("root"))||void 0===e||e.addEventListener("click",t),function(){var e;null===(e=document.getElementById("root"))||void 0===e||e.removeEventListener("click",t)}}),[]),t.loading?Object(h.jsx)(J,{}):Object(h.jsxs)(h.Fragment,{children:[t.showIntro&&Object(h.jsx)(C,{}),Object(h.jsx)(S,{}),Object(h.jsx)(E,{}),Object(h.jsx)("div",{className:"app-footer",children:Object(h.jsx)("div",{})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};a.a.render(Object(h.jsx)(r.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),L()}},[[37,1,2]]]);
//# sourceMappingURL=main.78f2a1dd.chunk.js.map