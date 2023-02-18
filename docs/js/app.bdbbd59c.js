(function(){"use strict";var o={4965:function(o,t,n){var e=n(9242),i=n(7139);const s=(0,i.MT)({state:()=>({logs:[]}),getters:{logs:o=>o.logs},mutations:{addLog(o,t){const n=[t,...o.logs];o.logs=n.slice(0,30)}}});var r=n(3396);function c(o,t,n,e,i,s){const c=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(c)}var a=n(4870),m=n(2268),u=n(3153);const h=o=>((0,r.dD)("data-v-80503ff0"),o=o(),(0,r.Cn)(),o),_=h((()=>(0,r._)("div",{id:"map"},null,-1))),l={class:"log"},d={name:"HelloWorld"};var p=Object.assign(d,{setup(o){const t=(0,i.oR)(),n=(0,r.Fl)((()=>t.getters.logs)),e=o=>{t.commit("addLog",o)};return(0,r.bv)((async()=>{await(0,r.Y3)();const o=[[-120,120],[0,0]];var t=(0,u.map)("map",{crs:u.CRS.Simple,scrollWheelZoom:!1,minZoom:-.8,maxBounds:o,touchZoom:!1,touchZoom_custom:!0});t.setView([-120,120],-.5),console.log({touchZoomHandlerEnabled:t.touchZoom.enabled()}),console.log({touchZoom_customHandler:t.touchZoom_custom.enabled()}),(0,u.tileLayer)("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:3,minZoom:-.8,attribution:'&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t),t.on("zoomend",(()=>{const o=t.getZoom();e(`zoom: ${o}`)}))})),(o,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[_,(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(n),((o,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},(0,m.zw)(t)+", "+(0,m.zw)(o),1)))),128))])],64))}}),v=n(89);const f=(0,v.Z)(p,[["__scopeId","data-v-80503ff0"]]);var g=f,Z={name:"App",components:{HelloWorld:g}};const z=(0,v.Z)(Z,[["render",c]]);var T=z;const b=o=>{s.commit("addLog",o)};u.Map.mergeOptions({touchZoom_custom:u.Browser.touch,bounceAtZoomLimits_custom:!0});const w=u.Handler.extend({addHooks(){this._map._container.classList.add("leaflet-touch-zoom"),u.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks(){this._map._container.classList.remove("leaflet-touch-zoom"),u.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart(o){b("_onTouchStart start");const t=this._map;if(!o.touches||2!==o.touches.length||t._animatingZoom||this._zooming)return;const n=t.mouseEventToContainerPoint(o.touches[0]),e=t.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),"center"!==t.options.touchZoom&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(e)._divideBy(2))),this._startDist=n.distanceTo(e),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),u.DomEvent.on(document,"touchmove",this._onTouchMove,this),u.DomEvent.on(document,"touchend touchcancel",this._onTouchEnd,this),u.DomEvent.preventDefault(o),b("_onTouchStart end")},_onTouchMove(o){if(b("_onTouchMove start"),!o.touches||2!==o.touches.length||!this._zooming)return;const t=this._map,n=t.mouseEventToContainerPoint(o.touches[0]),e=t.mouseEventToContainerPoint(o.touches[1]),i=n.distanceTo(e)/this._startDist;if(this._zoom=t.getScaleZoom(i,this._startZoom),!t.options.bounceAtZoomLimits_custom&&(this._zoom<t.getMinZoom()&&i<1||this._zoom>t.getMaxZoom()&&i>1)&&(this._zoom=t._limitZoom(this._zoom)),"center"===t.options.touchZoom){if(this._center=this._startLatLng,1===i)return}else{const o=n._add(e)._divideBy(2)._subtract(this._centerPoint);if(1===i&&0===o.x&&0===o.y)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||(t._moveStart(!0,!1),this._moved=!0),u.Util.cancelAnimFrame(this._animRequest);const s=t._move.bind(t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=u.Util.requestAnimFrame(s,this,!0),u.DomEvent.preventDefault(o),b("_onTouchMove end")},_onTouchEnd(){b("_onTouchEnd start"),this._moved&&this._zooming?(this._zooming=!1,u.Util.cancelAnimFrame(this._animRequest),u.DomEvent.off(document,"touchmove",this._onTouchMove,this),u.DomEvent.off(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?(b("_animateZoom"),this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap)):(b("_resetView"),this._map._resetView(this._center,this._map._limitZoom(this._zoom))),b("_onTouchEnd end")):this._zooming=!1}});u.Map.addInitHook("addHandler","touchZoom_custom",w);const L=(0,e.ri)(T).use(s);L.mount("#app")}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}};return o[e].call(s.exports,s,s.exports,n),s.exports}n.m=o,function(){var o=[];n.O=function(t,e,i,s){if(!e){var r=1/0;for(u=0;u<o.length;u++){e=o[u][0],i=o[u][1],s=o[u][2];for(var c=!0,a=0;a<e.length;a++)(!1&s||r>=s)&&Object.keys(n.O).every((function(o){return n.O[o](e[a])}))?e.splice(a--,1):(c=!1,s<r&&(r=s));if(c){o.splice(u--,1);var m=i();void 0!==m&&(t=m)}}return t}s=s||0;for(var u=o.length;u>0&&o[u-1][2]>s;u--)o[u]=o[u-1];o[u]=[e,i,s]}}(),function(){n.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return n.d(t,{a:t}),t}}(),function(){n.d=function(o,t){for(var e in t)n.o(t,e)&&!n.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};n.O.j=function(t){return 0===o[t]};var t=function(t,e){var i,s,r=e[0],c=e[1],a=e[2],m=0;if(r.some((function(t){return 0!==o[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(a)var u=a(n)}for(t&&t(e);m<r.length;m++)s=r[m],n.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return n.O(u)},e=self["webpackChunkleaflet_pinch_zoom"]=self["webpackChunkleaflet_pinch_zoom"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(4965)}));e=n.O(e)})();
//# sourceMappingURL=app.bdbbd59c.js.map