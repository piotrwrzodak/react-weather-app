(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{41:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(17),r=c.n(n),o=c(10),s=c(9),i=c(26),h=c(29),u=c(28),d=c(19),j=c(11),l="data",b=c(23),p="set weather",O={weather:{}};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{weather:t.payload});default:return e}}var x=function(e){return Object(s.c)(Object(d.a)({router:Object(j.b)(e)},l,f))},m=Object(h.a)(),_=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d)(s.a.apply(void 0,[u.a,Object(i.a)(m)])),v=Object(s.e)(x(m),{},_),y=(c(41),function(e){return function(e){return e.data}(e).weather}),w=c(6),g="76aaec50cc7d0c284a86e64120a172a3",N="https://api.openweathermap.org/data/2.5/",S=function(e){return function(t){t(Object(w.d)(e))}},E=function(e){return function(t,c){var a=c();fetch("".concat(N,"weather?q=").concat(e,"&units=metric&appid=").concat(g)).then((function(e){return e.json()})).then((function(e){"404"===e.cod?t(Object(w.e)(a.router.location.state,{errorStatusCode:e.cod})):t({type:p,payload:e})}))}},C=c(31),D=c(12),M=c(3),P=c(1);function k(e){var t,c=e.props,n=e.dateBuilder,r=e.query,o=e.setQuery,s=Object(M.h)().cityId,i=Object(M.g)(),h=c.fetchApi;return Object(a.useEffect)((function(){h(s)}),[h,s]),Object(P.jsx)(P.Fragment,{children:(null===(t=c.weather)||void 0===t?void 0:t.id)&&Object(P.jsxs)("div",{className:"weather",children:[Object(P.jsx)("div",{className:"weather__search-box",children:Object(P.jsx)("input",{type:"text",className:"search-box__input",placeholder:"Search...",onChange:function(e){return o(e.target.value)},value:r,onKeyPress:function(e){"Enter"===e.key&&(c.changePath("/current-weather/".concat(r)),i.push("/current-weather/".concat(r)),o(""))}})}),Object(P.jsxs)("div",{className:"weather__general-info",children:[Object(P.jsxs)("div",{className:"general-info__location",children:[c.weather.name,", ",c.weather.sys.country]}),Object(P.jsx)("div",{className:"general-info__date",children:n(new Date)})]}),Object(P.jsxs)("div",{className:"weather__info",children:[Object(P.jsxs)("div",{className:"info__temperature",children:[Math.round(c.weather.main.temp),"\xb0C"]}),Object(P.jsx)("div",{className:"info__weather",children:c.weather.weather[0].main})]})]})})}function q(e){var t=e.props,c=e.query,a=e.setQuery,n=Object(M.g)();return Object(P.jsxs)("div",{className:"home",children:[Object(P.jsxs)("div",{className:"home__heading",children:[Object(P.jsx)("h1",{className:"home__heading--one",children:"Weather App"}),Object(P.jsx)("h3",{className:"home__heading--two",children:"Check current weather in any place in the world!"})]}),Object(P.jsx)("div",{className:"home__search-box",children:Object(P.jsx)("input",{type:"text",className:"search-box__input",placeholder:"Search...",onChange:function(e){return a(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&(t.changePath("/current-weather/".concat(c)),n.push("/current-weather/".concat(c)),a(""))}})})]})}function A(e){var t=e.props;return Object(P.jsx)("div",{className:"not-found",children:Object(P.jsxs)("div",{className:"not-found__container",children:[Object(P.jsx)("h1",{className:"not-found__heading",children:"404 Not Found"}),Object(P.jsx)(D.b,{className:"not-found__heading",to:"/",onClick:function(){t.changePath("/")},children:"Go to menu"})]})})}var F=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(c," ").concat(a," ").concat(n)},J=c(30),I=function(e){var t=e.children,c=e.props;switch(Object(J.get)(c.location.state,"errorStatusCode")){case"404":return Object(P.jsx)(A,{props:c});default:return t}};var Q=function(e){var t,c=Object(a.useState)(""),n=Object(C.a)(c,2),r=n[0],o=n[1];return Object(P.jsx)(D.a,{children:Object(P.jsx)(I,{props:e,children:Object(P.jsx)("div",{className:10>(new Date).getMonth()>4||(null===(t=e.weather.main)||void 0===t?void 0:t.temp)>16?"app":"app app--cold",children:Object(P.jsxs)(M.d,{children:[Object(P.jsx)(M.b,{exact:!0,path:"/",children:Object(P.jsx)(q,{props:e,query:r,setQuery:o})}),Object(P.jsx)(M.b,{path:"/current-weather/:cityId",children:Object(P.jsx)(k,{dateBuilder:F,props:e,query:r,setQuery:o})}),Object(P.jsx)(M.b,{path:"/place-not-found",children:Object(P.jsx)(A,{props:e})}),Object(P.jsx)(M.a,{to:"/"})]})})})})},T=Object(s.d)(Object(o.c)((function(e,t){return{weather:y(e),location:e.router.location}}),(function(e,t){return{fetchApi:function(t){return e(E(t))},changePath:function(t){return e(S(t))}}})))(Q);r.a.render(Object(P.jsx)(o.a,{store:v,context:o.b,children:Object(P.jsx)(j.a,{history:m,context:o.b,children:Object(P.jsx)(T,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b50ba7e1.chunk.js.map