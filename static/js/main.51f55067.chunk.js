(this["webpackJsonpnew-app1"]=this["webpackJsonpnew-app1"]||[]).push([[0],{47:function(e,n,t){"use strict";t.r(n);var r,i,c,a,l,d,o,s,b,h,j,p,x,u=t(0),O=t.n(u),f=t(19),g=t.n(f),w=t(2),v=t(3),m=t(1),y=v.a.h1(r||(r=Object(w.a)(["\n   width: 100%;\n   line-height: 48px;\n   text-align: center;\n   font-size: 18px;\n"]))),k=function(){return Object(m.jsx)(y,{children:"Heco\u751f\u6001\u5e01 Mdex\u884c\u60c5\u62a5\u4ef7 HUSD\u5151\u6362\u4ef7"})},C=t(5),S=t(23),F=t.n(S),H=v.a.div(i||(i=Object(w.a)(["\n  margin-left: 10%;\n  width: 100%;\n"]))),D=v.a.table(c||(c=Object(w.a)(["\n  width: 80%;\n  font-size: 14px;\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  box-sizing: border-box;\n  text-indent: initial;\n  border-color: grey;\n  :focus{\n    outline: -webkit-focus-ring-color auto 1px;\n  }\n"]))),I=v.a.thead(a||(a=Object(w.a)(["\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n  background: #2a2d32;\n"]))),z=v.a.tbody(l||(l=Object(w.a)(["\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n"]))),L=v.a.tr(d||(d=Object(w.a)(["\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n"]))),U=v.a.tr(o||(o=Object(w.a)(["\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n  color: red;\n"]))),B=v.a.td(s||(s=Object(w.a)(["\npadding: 5px 15px;\n  line-height: 24px;\n  border: 1px solid #333333;\n  vertical-align: middle;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;}\n"]))),E=v.a.td(b||(b=Object(w.a)(["\n  padding: 5px 15px;\n  line-height: 24px;\n  border: 1px solid #333333;\n  vertical-align: middle;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;}\n"]))),J=v.a.td(h||(h=Object(w.a)(["\n  padding: 5px 15px;\n    line-height: 24px;\n    border: 1px solid #333333;\n    vertical-align: middle;\n    text-align: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n"]))),M=v.a.td(j||(j=Object(w.a)(["\npadding: 5px 15px;\n    line-height: 24px;\n    border: 1px solid #333333;\n    vertical-align: middle;\n    text-align: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n"]))),P=v.a.td(p||(p=Object(w.a)(["\n  padding: 5px 15px;\n  line-height: 24px;\n  border: 1px solid #333333;\n  vertical-align: middle;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),T=function(){var e=Object(u.useState)([]),n=Object(C.a)(e,2),t=n[0],r=n[1],i=Object(u.useState)([]),c=Object(C.a)(i,2),a=c[0],l=c[1],d=Object(u.useState)(0),o=Object(C.a)(d,2),s=o[0],b=o[1],h=Object(u.useState)(new Array(69).fill(!1)),j=Object(C.a)(h,2),p=j[0],x=j[1];Object(u.useEffect)((function(){x(p),F.a.get("https://mdex123.com/record/currentprice/?platform=mdex").then((function(e){for(var n=e.data.data,t=[],i=0;i<n.length;i++){var c={isCheck:p[i],symbol:n[i].symbol,price:n[i].price,address:n[i].address};t.push(c)}r(t),l(t.filter((function(e){return!0===e.isCheck})))})).catch((function(e){console.log("error:"+e)}));var e=setInterval((function(){b((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[s,p]);var O=function(e){return void 0===e?"error":e.replace(/-HUSD/i,"")},f=function(e){return void 0===e?-1:parseFloat(e).toFixed(4)},g=function(e){return void 0===e?"#":"https://ht.mdex.com/#/swap?inputCurrency="+e+"&outputCurrency=0x0298c2b32eae4da002a15f36fdf7615bea3da047"};return Object(m.jsxs)(H,{children:[Object(m.jsxs)("div",{children:["\u672c\u6b21\u4f7f\u7528\u65f6\u957f ",s," s"]}),Object(m.jsxs)(D,{children:[Object(m.jsx)(I,{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{style:{width:"40px"},children:"\u7f6e\u9876"}),Object(m.jsx)("th",{children:"Heco\u4ee3\u5e01"}),Object(m.jsx)("th",{children:"HUSD\u5151\u6362\u4ef7"}),Object(m.jsx)("th",{children:"\u4ea4\u6613"})]})}),Object(m.jsx)(z,{children:a.map((function(e){return Object(m.jsxs)(U,{children:[Object(m.jsx)(M,{children:"\u5df2\u7f6e\u9876"}),Object(m.jsx)(E,{children:O(e.symbol)}),Object(m.jsx)(J,{children:f(e.price)}),Object(m.jsx)(P,{children:Object(m.jsx)("a",{href:g(e.address),target:"blank",children:"\u4ea4\u6613"})})]})}))}),Object(m.jsx)(z,{children:0!==t.length?t.map((function(e,n){return Object(m.jsxs)(L,{children:[Object(m.jsx)(B,{children:Object(m.jsx)("input",{type:"checkbox",onChange:function(){return p[n]=!p[n]},defaultChecked:p[n]})}),Object(m.jsx)(E,{children:O(e.symbol)}),Object(m.jsx)(J,{children:f(e.price)}),Object(m.jsx)(P,{children:Object(m.jsx)("a",{href:g(e.address),target:"blank",children:"\u4ea4\u6613"})})]})})):Object(m.jsx)("tr",{children:"Loading..."})})]})]})},A=v.a.div(x||(x=Object(w.a)(["\n  padding: 8px;\n  width: 100%;\n  color: #fff;\n  background: #12161b;\n"]))),q=function(){return Object(m.jsxs)(A,{children:[Object(m.jsx)(k,{}),Object(m.jsx)(T,{})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};g.a.render(Object(m.jsx)(O.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),G()}},[[47,1,2]]]);
//# sourceMappingURL=main.51f55067.chunk.js.map