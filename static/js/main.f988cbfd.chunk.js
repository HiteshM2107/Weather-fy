(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),i=t.n(c),o=(t(9),t(1)),s="31bbf2082775b43acfb9f14c5ece3794",l="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)({}),m=Object(o.a)(i,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>16?"app-warm":"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=metric&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){c(""),d(e)}))}})),"undefined"!=typeof u.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},u.name,",",u.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0C"),r.a.createElement("div",{className:"weather"},u.weather[0].main),r.a.createElement("div",{className:"humidity"},"Humidity: ",u.main.humidity,"%"),r.a.createElement("div",{className:"humidity"},"Wind Speed: ",u.wind.speed," km/hr"),r.a.createElement("div",{className:"humidity"},"Pressure: ",u.main.pressure," hPa"))):r.a.createElement("div",{className:"greeting"},"Hey There! ",r.a.createElement("br",null),"Please search the location you want to know the weather details for."),r.a.createElement("div",{className:"link"},"Designed by Hitesh ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.f988cbfd.chunk.js.map