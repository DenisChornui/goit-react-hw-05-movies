"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{1687:function(t,r,n){n.d(r,{AR:function(){return i},Bt:function(){return f},WK:function(){return h},YL:function(){return o},y:function(){return p}});var e=n(5861),a=n(7757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="89db2f55b059f24c4a46a29b0f92fcb1",i=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},4219:function(t,r,n){n.r(r),n.d(r,{default:function(){return w}});var e,a,c=n(5861),u=n(9439),s=n(7757),i=n.n(s),o=n(1687),p=n(2791),f=n(7689),h=n(7635),l=n(6491),d=n(168),v=n(5867),x=v.ZP.ul(e||(e=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding: 20px;\n"]))),m=v.ZP.li(a||(a=(0,d.Z)(["\n  flex-basis: calc(100vh / 3);\n"]))),Z=n(184);function w(){var t=(0,f.UO)().movieId,r=(0,p.useState)([]),n=(0,u.Z)(r,2),e=n[0],a=n[1],s=(0,p.useState)(!1),d=(0,u.Z)(s,2),v=d[0],w=d[1],b=(0,p.useState)(!1),k=(0,u.Z)(b,2),g=k[0],y=k[1];(0,p.useEffect)((function(){if(t){var r=function(){var r=(0,c.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,w(!0),y(!1),r.next=5,(0,o.y)(t);case 5:n=r.sent,a(n),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),y(!0);case 12:return r.prev=12,w(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}}),[t]);return(0,Z.jsxs)("div",{children:[v&&(0,Z.jsx)(h.a,{}),g&&(0,Z.jsx)(l.B,{children:"Whoops! Error! Please reload this page!"}),0===e.length?(0,Z.jsx)("p",{children:"There is not information on cast for this movie"}):(0,Z.jsx)(x,{children:e.map((function(t){return(0,Z.jsxs)(m,{children:[(0,Z.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://i.ibb.co/gZcSZG5/avatar.jpg",alt:t.name,width:100,loading:"lazy"}),(0,Z.jsx)("p",{children:t.name}),(0,Z.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})]})}},6491:function(t,r,n){n.d(r,{B:function(){return c}});var e,a=n(168),c=n(5867).ZP.b(e||(e=(0,a.Z)(["\n  color: red;\n"])))}}]);
//# sourceMappingURL=219.f34b19a8.chunk.js.map