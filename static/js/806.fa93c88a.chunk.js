"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1687:function(n,t,r){r.d(t,{AR:function(){return i},Bt:function(){return f},WK:function(){return v},YL:function(){return o},y:function(){return p}});var e=r(5861),a=r(7757),c=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="89db2f55b059f24c4a46a29b0f92fcb1",i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6491:function(n,t,r){r.d(t,{B:function(){return c}});var e,a=r(168),c=r(5867).ZP.b(e||(e=(0,a.Z)(["\n  color: red;\n"])))},1806:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c=r(5861),u=r(9439),s=r(7757),i=r.n(s),o=r(1687),p=r(2791),f=r(7689),v=r(7635),d=r(6491),h=r(168),l=r(5867),x=l.ZP.ul(e||(e=(0,h.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),m=l.ZP.h2(a||(a=(0,h.Z)(["\n  margin-bottom: 7px;\n"]))),Z=r(184);function k(){var n=(0,f.UO)().movieId,t=(0,p.useState)([]),r=(0,u.Z)(t,2),e=r[0],a=r[1],s=(0,p.useState)(!1),h=(0,u.Z)(s,2),l=h[0],k=h[1],w=(0,p.useState)(!1),b=(0,u.Z)(w,2),y=b[0],g=b[1];return(0,p.useEffect)((function(){if(n){var t=function(){var t=(0,c.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(!0),g(!1),t.next=5,(0,o.Bt)(n);case 5:r=t.sent,a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),g(!0);case 12:return t.prev=12,k(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[n]),(0,Z.jsxs)("div",{children:[l&&(0,Z.jsx)(v.a,{}),y&&(0,Z.jsx)(d.B,{children:"Whoops! Error! Please reload this page!"}),0===e.length?(0,Z.jsx)("p",{children:"There are no reviews for this movie"}):(0,Z.jsx)(x,{children:e.map((function(n){return(0,Z.jsxs)("li",{children:[(0,Z.jsx)(m,{children:n.author}),(0,Z.jsx)("p",{children:n.content})]},n.id)}))}),";"]})}}}]);
//# sourceMappingURL=806.fa93c88a.chunk.js.map