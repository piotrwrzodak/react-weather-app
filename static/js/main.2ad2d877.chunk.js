(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),o=(t(9),t(1)),u="47da0b083f4ecbe8d6c74fb7453b40b5",m="https://api.openweathermap.org/data/2.5/";var s=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)({}),s=Object(o.a)(l,2),i=s[0],d=s[1];return c.a.createElement("div",{className:"undefined"!=typeof i.main?i.main.temp>16?"App":"App cold":"App"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(m,"weather?q=").concat(t,"&units=metric&appid=").concat(u)).then((function(e){return e.json()})).then((function(e){r(""),d(e)}))}})),"undefined"!=typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},i.name,", ",i.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(i.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},i.weather[0].main))):c.a.createElement("div",{className:"logo"},c.a.createElement("h1",null,"Weather App"),c.a.createElement("h3",null,"Check current weather in any place in the world!"))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.2ad2d877.chunk.js.map