"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[607],{607:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,a=r(861),c=r(885),u=r(757),i=r.n(u),o=r(791),s=r(470),f=r(247),p=r(168),v=r(444).ZP.ul(e||(e=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: ","px;\n"])),(function(n){return n.theme.space[3]})),d=r(184);function h(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],u=(0,s.UO)().id;return(0,o.useEffect)((function(){var n=new AbortController,t={signal:n.signal};return(0,a.Z)(i().mark((function n(){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.tx)(u,t);case 3:r=n.sent,a=r.results,e(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))(),function(){n.abort()}}),[u]),(0,d.jsx)(v,{children:0===r.length?(0,d.jsx)("p",{children:"We don't have any reviews for this movie"}):r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h4",{children:["Author: ",r]}),(0,d.jsx)("p",{children:e})]},t)}))})}},247:function(n,t,r){r.d(t,{Hg:function(){return s},Im:function(){return f},TP:function(){return p},bV:function(){return o},tx:function(){return d},zv:function(){return v}});var e=r(861),a=r(757),c=r.n(a),u=r(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="b57d518fc10de59d42b7f695d79e0fa4",o="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/trending/all/day?api_key=".concat(i),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(t),r);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"?api_key=").concat(i),r);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(i),r);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(i),r);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.e658059c.chunk.js.map