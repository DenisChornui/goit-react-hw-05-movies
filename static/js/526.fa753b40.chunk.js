"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{1687:function(n,t,r){r.d(t,{AR:function(){return i},Bt:function(){return p},WK:function(){return v},YL:function(){return o},y:function(){return f}});var e=r(5861),a=r(7757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="89db2f55b059f24c4a46a29b0f92fcb1",i=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6491:function(n,t,r){r.d(t,{B:function(){return u}});var e,a=r(168),u=r(5867).ZP.b(e||(e=(0,a.Z)(["\n  color: red;\n"])))},2429:function(n,t,r){r.d(t,{O:function(){return c}});var e=r(7689),a=r(1087),u=r(184),c=function(n){var t=n.movies,r=(0,e.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})}},4526:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,u=r(5861),c=r(9439),s=r(7757),i=r.n(s),o=r(1687),f=r(2791),p=r(2429),v=r(7635),d=r(6491),h=r(168),l=r(5867),m=l.ZP.div(e||(e=(0,h.Z)(["\n  padding: 30px;\n"]))),x=l.ZP.h2(a||(a=(0,h.Z)(["\n  margin-bottom: 25px;\n"]))),Z=r(184);function k(){var n=(0,f.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(!1),s=(0,c.Z)(a,2),h=s[0],l=s[1],k=(0,f.useState)(!1),w=(0,c.Z)(k,2),b=w[0],y=w[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),y(!1),n.next=5,(0,o.AR)();case 5:t=n.sent,e(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),y(!0);case 12:return n.prev=12,l(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,Z.jsxs)(m,{children:[h&&(0,Z.jsx)(v.a,{}),b&&(0,Z.jsx)(d.B,{children:"Whoops! Error! Please reload this page!"}),(0,Z.jsx)(x,{children:"Trending Movies"}),(0,Z.jsx)(p.O,{movies:r})]})}}}]);
//# sourceMappingURL=526.fa753b40.chunk.js.map