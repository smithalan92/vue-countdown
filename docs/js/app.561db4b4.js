(function(e){function t(t){for(var a,c,r=t[0],u=t[1],d=t[2],l=0,m=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-countdown/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var s=u;o.push(["a1ec","chunk-vendors"]),n()})({"006a":function(e,t,n){"use strict";n("e2a2")},a1ec:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=Object(a["d"])("header",{class:"header"},[Object(a["d"])("h1",null,"Vue Countdown"),Object(a["d"])("div",{class:"codeblock"}," npm i --save @smithalan2/vue-countdown "),Object(a["d"])("a",{href:"https://github.com/smithalan92/vue-countdown",target:"_blank"}," github.com/smithalan92/vue-countdown ")],-1),o={key:0,class:"countdown-data"},c={class:"countdown-progress"},r={class:"countdown-time"},u={class:"countdown-time"},d={class:"countdown-time"},s={class:"countdown-time"},l={class:"countdown-time"},m={class:"countdown-time"},f={class:"countdown-time"},b={class:"until-date"},p={key:1},v={class:"row"},h={class:"row"};function j(e,t,n,j,w,O){var g=Object(a["i"])("vue-countdown");return Object(a["f"])(),Object(a["c"])(a["a"],null,[i,Object(a["d"])("div",null,[Object(a["d"])(g,{ref:"countdown","end-date-time":w.endDateTime,"start-immediately":!0,onFinished:O.onCountdownFinished},{default:Object(a["m"])((function(e){var t=e.countdown;return[w.hasCountdownFinished?(Object(a["f"])(),Object(a["c"])("div",p," Countdown finished! ")):(Object(a["f"])(),Object(a["c"])("div",o,[Object(a["d"])("div",c,[Object(a["d"])("div",r,Object(a["j"])(t.remainingYears.text),1),Object(a["d"])("div",u,Object(a["j"])(t.remainingMonths.text),1),Object(a["d"])("div",d,Object(a["j"])(t.remainingWeeks.text),1),Object(a["d"])("div",s,Object(a["j"])(t.remainingDays.text),1),Object(a["d"])("div",l,Object(a["j"])(t.remainingHours.text),1),Object(a["d"])("div",m,Object(a["j"])(t.remainingMinutes.text),1),Object(a["d"])("div",f,Object(a["j"])(t.remainingSeconds.text),1)]),Object(a["d"])("div",b," until "+Object(a["j"])(O.formatedEndDateTime),1)]))]})),_:1},8,["end-date-time","onFinished"]),Object(a["d"])("div",v,[Object(a["d"])("button",{class:"run",onClick:t[1]||(t[1]=function(){return O.runCountdown.apply(O,arguments)})}," Run Countdown "),Object(a["d"])("button",{class:"cancel",onClick:t[2]||(t[2]=function(){return O.cancelCountdown.apply(O,arguments)})}," Cancel Countdown ")]),Object(a["d"])("div",h,[Object(a["n"])(Object(a["d"])("input",{type:"datetime-local","onUpdate:modelValue":t[3]||(t[3]=function(e){return w.inputEndDateTime=e})},null,512),[[a["k"],w.inputEndDateTime]]),Object(a["d"])("button",{class:"cancel",onClick:t[4]||(t[4]=function(){return O.changeCountdownDate.apply(O,arguments)})}," Change Countdown Date ")])])],64)}var w=n("b166"),O=n("f7f1"),g=(n("b0c0"),n("a9e3"),n("4160"),n("b64b"),n("159b"),n("96cf"),n("1da1")),y=n("25b6");n("99af"),n("13d5"),n("07ac");function D(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);return 0===t}function C(e,t){var n="".concat(t).concat(1===e?"":"s");return"".concat(e," ").concat(n)}function T(e){return"".concat(e.substring(0,1).toUpperCase()).concat(e.substring(1))}var x={getHasCountdownFinished:D,getFormatString:C,capitaliseFirstletter:T},k=function(e,t){var n=Object(a["g"])({remainingSeconds:{value:0,text:""},remainingMinutes:{value:0,text:""},remainingHours:{value:0,text:""},remainingDays:{value:0,text:""},remainingWeeks:{value:0,text:""},remainingMonths:{value:0,text:""},remainingYears:{value:0,text:""}}),i=Object(a["h"])(!1),o=null,c=function(){var a=Object(g["a"])(regeneratorRuntime.mark((function a(){var r,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i.value||t.emit("start"),i.value=!0,r=e.startDateTime?e.startDateTime:new Date,!(r>=e.endDateTime)){a.next=7;break}return t.emit("finished"),i.value=!1,a.abrupt("return");case 7:if(u=Object(y["a"])({start:r,end:e.endDateTime}),u.weeks=Math.floor(u.days/7),u.days%=7,Object.keys(u).forEach((function(e){var t="remaining".concat(x.capitaliseFirstletter(e)),a=u[e],i=x.getFormatString(a,e.substring(0,e.length-1));n[t].value=a,n[t].text=i})),!x.getHasCountdownFinished(n)){a.next=15;break}return t.emit("finished"),i.value=!1,a.abrupt("return");case 15:t.emit("tick",n),o=setTimeout((function(){c()}),e.tickDelay);case 17:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),r=function(){clearTimeout(o),i.value=!1,t.emit("cancelled")};return{countdown:n,run:c,cancel:r,isRunning:i}},M={name:"VueCountdown",props:{startDateTime:{type:Date,required:!1,default:null},endDateTime:{type:Date,required:!0},startImmediately:{type:Boolean,required:!1,default:!0},tickDelay:{type:Number,required:!1,default:1e3}},setup:function(e,t){var n=k(e,t),i=n.countdown,o=n.run,c=n.cancel,r=n.isRunning;return Object(a["l"])(e,(function(){(r.value||e.startImmediately)&&(c(),o())})),e.startImmediately&&o(),{countdown:i,run:o,cancel:c}},render:function(){var e=this.$slots.default?this.$slots.default({countdown:this.countdown}):[];return Object(a["e"])("div",{id:"vue-countdown"},e)}},F=function(e){e.component(M.name,M)};M.install=F;var S=M,E={name:"App",components:{VueCountdown:S},data:function(){return{inputEndDateTime:"",endDateTime:null,hasCountdownFinished:!1}},computed:{formatedEndDateTime:function(){return Object(w["a"])(this.endDateTime,"do MMMM yyyy HH:mm:ss")}},methods:{onTick:function(e){console.log(e.remainingSeconds)},runCountdown:function(){this.$refs.countdown.run()},cancelCountdown:function(){this.$refs.countdown.cancel()},changeCountdownDate:function(){this.hasCountdownFinished=!1,this.endDateTime=new Date(this.inputEndDateTime)},onCountdownFinished:function(){this.hasCountdownFinished=!0}},created:function(){this.endDateTime=Object(O["a"])(new Date,10),this.inputEndDateTime=Object(w["a"])(this.endDateTime,"yyyy-MM-dd'T'HH:mm")}};n("006a");E.render=j;var H=E;Object(a["b"])(H).mount("#app")},e2a2:function(e,t,n){}});
//# sourceMappingURL=app.561db4b4.js.map