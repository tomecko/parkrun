(window.webpackJsonpparkrun=window.webpackJsonpparkrun||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(12),n(2)),l=n(6),u=n(3),s=n(1),d=n.n(s);function f(){var e=Object(i.a)(["\n        background: #222;\n        display: flex;\n        justify-content: center;\n        max-height: 50vh;\n        width: 100vw;\n        position: relative;\n        & canvas {\n          position: absolute;\n          top: 0;\n          left: 50%;\n          transform: translateX(-50%);\n          max-height: 100%;\n          max-width: 100%;\n        }\n      "]);return f=function(){return e},e}function m(e){var t=e.onDetected;return Object(a.useEffect)((function(){console.log("useEffect"),d.a.init({numOfWorkers:2,locate:!0,locator:{patchSize:"large",halfSample:!1},frequency:5,inputStream:{name:"Live",type:"LiveStream",target:document.querySelector("#scanner")},decoder:{readers:["code_128_reader"]}},(function(e){e?console.log(e):(console.log("Initialization finished. Ready to start"),d.a.start(),d.a.onProcessed((function(e){console.log("onProcessed");var t=d.a.canvas.ctx.overlay,n=d.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,parseInt(n.getAttribute("width")),parseInt(n.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){d.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&d.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&d.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),d.a.onDetected((function(e){console.log("onDetected",e),t(e)})))}))}),[]),o.a.createElement("div",{id:"scanner",className:Object(u.a)(f())})}function h(e){var t=e.records;return o.a.createElement("div",null,o.a.createElement("h2",null,"Detected"),o.a.createElement("ul",null,t.map((function(e,t){return o.a.createElement("li",{key:t},e.codeResult.code)}))))}var v=function(e){return/A[0-9]{1,8}/.test(e)};function g(){var e=Object(i.a)(["\n      height: 100%;\n    "]);return g=function(){return e},e}var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:Object(u.a)(g())},o.a.createElement(m,{onDetected:function(e){v(e)&&r(n.concat(e))}}),o.a.createElement(h,{records:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.cfcd95c2.chunk.js.map