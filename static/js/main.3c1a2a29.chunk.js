(this.webpackJsonpnumbery=this.webpackJsonpnumbery||[]).push([[0],{11:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(6),r=s.n(c),l=(s(11),s(4)),i=s(2),b=s(3),d=s.n(b),u=s(0),j=function(){return Object(u.jsx)("nav",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-6",children:Object(u.jsxs)("div",{className:"flex items-center flex-shrink-0  mr-6",children:[Object(u.jsx)("svg",{className:"fill-current h-8 w-8 mr-2",width:"54",height:"54",viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"})}),Object(u.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"Numbery"})]})})},o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],m=function(e){var t=e.players,s=i.sortBy(i.map(t,(function(e,t){return{player:o[e],turn:t+1}})),(function(e){return e.player}));return Object(u.jsxs)("table",{className:"table-fixed w-full",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"w-1/2 px-4 py-2",children:"Player"}),Object(u.jsx)("th",{className:"w-auto px-4 py-2",children:"Turn"})]})}),Object(u.jsx)("tbody",{children:s.map((function(e,t){var s=t%2===1;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:d()({"bg-blue-50":s,"bg-white":!s},"border px-4 py-2"),children:e.player}),Object(u.jsx)("td",{className:d()({"bg-blue-50":s,"bg-white":!s},"border px-4 py-2"),children:e.turn})]},t)}))})]})},x=function(){var e=a.a.useState(0),t=Object(l.a)(e,2),s=t[0],n=t[1],c=a.a.useState(!0),r=Object(l.a)(c,2),b=r[0],o=r[1],x=a.a.useState([]),h=Object(l.a)(x,2),p=h[0],f=h[1],O=a.a.useState(""),g=Object(l.a)(O,2),y=g[0],w=g[1];return Object(u.jsxs)("div",{className:"p-5",children:[Object(u.jsx)(j,{}),Object(u.jsxs)("div",{className:"container mx-auto px-4",children:[Object(u.jsx)("form",{className:"w-full max-w-sm",onSubmit:function(e){e.preventDefault(),s<1||s>26?w("Total players should be a number between 1 and 26"):f(i.shuffle(i.range(s))),o(!0)},children:Object(u.jsxs)("div",{className:"flex items-center border-teal-500 py-2",children:[Object(u.jsx)("input",{className:"border w-3/4 mr-3 py-3 px-2 leading-tight focus:outline-none",name:"totalPlayers",type:"number",id:"email",placeholder:"0","aria-label":"Number of players",onChange:function(e){w(""),n(+e.target.value),o(!1)}}),Object(u.jsx)("button",{className:d()({"disabled:opacity-50 bg-blue-100 ":b,"bg-blue-700":!b},"w-1/4  text-white font-bold py-2 px-4 rounded"),type:"submit",disabled:b,children:"Roll"})]})}),Object(u.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg mt-5",children:y?Object(u.jsx)("div",{className:"text-red-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:y}):p&&Object(u.jsx)(m,{players:p})})]})]})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.3c1a2a29.chunk.js.map