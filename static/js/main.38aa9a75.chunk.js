(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{22:function(e,t,n){e.exports={common_row:"DisplayEachRow_common_row__3GFVr",imageStyle:"DisplayEachRow_imageStyle__3t01m",image_container:"DisplayEachRow_image_container__3Nq4n",description:"DisplayEachRow_description__3GmqT",position:"DisplayEachRow_position__2Nx1_",pos1:"DisplayEachRow_pos1__2XyG4",pos2:"DisplayEachRow_pos2__12rXc",pos3:"DisplayEachRow_pos3__1Eydp"}},27:function(e,t,n){e.exports={common_row:"DisplayEachItem_common_row__3hS3Z",imageStyle:"DisplayEachItem_imageStyle__1l-JW",description:"DisplayEachItem_description__2vc6G",position:"DisplayEachItem_position__8uyoj",pos1:"DisplayEachItem_pos1__3jnNP",pos2:"DisplayEachItem_pos2__hyH_Y",pos3:"DisplayEachItem_pos3__D0FJ7"}},29:function(e,t,n){e.exports={buttonsContainer:"ShowPositionButton_buttonsContainer__3k_7e",active:"ShowPositionButton_active__uGTUY"}},36:function(e,t,n){e.exports={formContainer:"LoginScreen_formContainer__3TS6K",boxshadow:"LoginScreen_boxshadow__3Mjox",form:"LoginScreen_form__1L5dU"}},45:function(e,t,n){e.exports={common:"LoginSuccess_common__1JiYa"}},50:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(12),i=n.n(c),o=(n(50),n(26)),r=n.n(o),a=n(32),s=n(6),d=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json");case 3:if((t=e.sent).ok){e.next=6;break}throw t.status;case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(0),console.log(),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),l=d,j=function(e,t,n){var c=n.filter((function(t){return t.username===e}));return 1===c.length?c[0].password===t?{bool:!0,username_wrong:!1}:{bool:!1,username_wrong:!1}:{bool:!1,username_wrong:!0}},u=n(0),b=n(36),m=n.n(b),h=n(1),p=function(e){var t=Object(u.useRef)(null),n=Object(u.useRef)(null);return Object(h.jsx)("div",{className:m.a.formContainer,children:Object(h.jsx)("div",{className:m.a.boxshadow,children:Object(h.jsxs)("form",{className:m.a.form,onSubmit:function(c){c.preventDefault();var i=t.current.value,o=n.current.value;0===i.length||0===o.length?0===i.length?t.current.focus():n.current.focus():e.submitHandler(i,o)}.bind(undefined),children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("hr",{}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("label",{htmlFor:"username",children:"\xa0 Username: "})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{id:"username",ref:t,placeholder:"Enter username",required:!0})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("label",{htmlFor:"password",children:"\xa0 Password: "})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{id:"password",ref:n,type:"password",placeholder:"Enter password",required:!0})})]}),Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"2",style:{textAlign:"center"},children:Object(h.jsx)("button",{type:"submit",children:"Login"})})})]})}),Object(h.jsx)("br",{})]})})})},f=(n(53),n(67)),O=n(65),x=n(68),g=n(41),_=n(66),y=n(19),v=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f.a,{bg:"dark",variant:"dark",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(f.a.Brand,{children:Object(h.jsx)(x.a.Link,{as:y.b,to:"/home",children:"DishPoll"})}),Object(h.jsxs)(x.a,{className:"me-auto",children:[Object(h.jsx)(g.a,{eventkey:1,children:Object(h.jsx)(x.a.Link,{as:y.b,to:"/dishes",children:"Dish-List"})}),Object(h.jsx)(g.a,{eventkey:2,children:Object(h.jsx)(x.a.Link,{as:y.b,to:"/scores",children:"Scores"})})]}),Object(h.jsx)(_.a,{variant:"outline-danger",onClick:e.logoutHandler,children:"Logout"})]})})})},w=n(3),I=n(27),N=n.n(I),k=n(14),S=function(e){var t=Object(k.c)((function(e){return e})),n=Object(u.useState)(null),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(u.useEffect)((function(){var n=t.filter((function(t){return t.username===e.loggedIn}));e.itemInfo.id===n[0].first?o("1"):e.itemInfo.id===n[0].second?o("2"):e.itemInfo.id===n[0].third?o("3"):o(null)}),[e.itemInfo.id,t,e.loggedIn]),Object(h.jsxs)("div",{className:N.a.common_row,children:[Object(h.jsx)("img",{src:e.itemInfo.image,alt:"display pic",className:N.a.imageStyle}),Object(h.jsxs)("div",{className:N.a.description,children:[Object(h.jsx)("h3",{children:e.itemInfo.dishName}),Object(h.jsx)("p",{children:e.itemInfo.description})]}),Object(h.jsx)("button",{className:"".concat(N.a.position," ").concat(N.a["pos".concat(i)]," "),onClick:e.button.bind(undefined,e.itemInfo.id),children:i||"\u274c"})]})},E=n(29),D=n.n(E),C=void 0,P=function(e){return Object(h.jsxs)("div",{className:D.a.buttonsContainer,children:[Object(h.jsxs)("span",{children:["Select the position to set ",Object(h.jsx)("i",{className:"fas fa-arrow-right"})," \xa0"]}),Object(h.jsx)("button",{onClick:e.buttonClick.bind(C,1),className:1===e.currentNumber?"".concat(D.a.active):"",children:"1"}),Object(h.jsx)("button",{onClick:e.buttonClick.bind(C,2),className:2===e.currentNumber?"".concat(D.a.active):"",children:"2"}),Object(h.jsx)("button",{onClick:e.buttonClick.bind(C,3),className:3===e.currentNumber?"".concat(D.a.active):"",children:"3"})]})},R=n(40),F=Object(R.b)({name:"everyUserData",initialState:[{id:1,username:"admin",password:"admin",first:0,second:0,third:0},{id:2,username:"ronaldo",password:"admin",first:0,second:0,third:0},{id:3,username:"light",password:"admin",first:0,second:0,third:0},{id:4,username:"loki",password:"admin",first:0,second:0,third:0}],reducers:{setPositionHandler:function(e,t){var n=e.findIndex((function(e){return e.username===t.payload.loggedIn}));1===t.payload.activePosition&&(e[n].second===t.payload.id&&(e[n].second=0),e[n].third===t.payload.id&&(e[n].third=0),e[n].first=t.payload.id),2===t.payload.activePosition&&(e[n].first===t.payload.id&&(e[n].first=0),e[n].third===t.payload.id&&(e[n].third=0),e[n].second=t.payload.id),3===t.payload.activePosition&&(e[n].first===t.payload.id&&(e[n].second=0),e[n].second===t.payload.id&&(e[n].second=0),e[n].third=t.payload.id)}}}),L=F.actions,H=Object(R.a)({reducer:F.reducer}),G=function(e){var t=Object(k.b)(),n=Object(u.useState)(0),c=Object(s.a)(n,2),i=c[0],o=c[1],r=function(n){0!==i&&(t(L.setPositionHandler({id:n,loggedIn:e.loggedIn,activePosition:i})),o(0))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P,{buttonClick:function(e){o(e!==i?e:0)},currentNumber:i}),Object(h.jsx)("div",{children:e.data.map((function(t){return Object(h.jsx)(S,{itemInfo:t,button:r,loggedIn:e.loggedIn},"item#".concat(t.id))}))})]})},J=n(45),q=n.n(J),B=function(e){return Object(h.jsxs)("div",{className:q.a.common,children:[Object(h.jsxs)("h1",{children:["Hey ",e.loggedIn,"!"]}),Object(h.jsx)("h3",{children:"Lets start voting!"})]})},U=n(2),A=n(22),T=n.n(A),Y=function(e){var t=Object(k.c)((function(e){return e})).filter((function(t){return t.username===e.loggedIn}));return Object(h.jsxs)("div",{className:"".concat(T.a.common_row," ").concat(T.a["pos".concat(e.index+1)]),children:[Object(h.jsxs)("div",{className:T.a.image_container,children:[Object(h.jsx)("img",{src:e.itemInfo.image,alt:"display pic",className:T.a.imageStyle}),(e.idForRef===t[0].first||e.idForRef===t[0].second||e.idForRef===t[0].third)&&Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"fas fa-user fa-2x"})})]}),Object(h.jsxs)("div",{className:T.a.description,children:[Object(h.jsx)("h3",{children:e.itemInfo.dishName}),Object(h.jsx)("p",{children:e.itemInfo.description})]}),Object(h.jsx)("button",{className:T.a.position,children:e.points})]})},X=function(e){var t=Object(k.c)((function(e){return e})),n=Object(u.useState)([]),c=Object(s.a)(n,2),i=c[0],o=c[1],r=e.data.map((function(e){return Object(U.a)(Object(U.a)({},e),{},{point:0})}));return Object(u.useEffect)((function(){var e=new Array(31).fill(0);t.map((function(t){return e[t.first]+=30,e[t.second]+=20,e[t.third]+=10,t}));var n=r.map((function(t,n){var c=t;return c.point=e[n+1],c})).sort((function(e,t){return e.point<t.point?1:e.point>t.point?-1:0}));o(n)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:i.map((function(t,n){return Object(h.jsx)(Y,{itemInfo:t,loggedIn:e.loggedIn,points:t.point,index:n,idForRef:t.id},"item#".concat(t.id))}))})})},K=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{logoutHandler:e.logoutHandler}),Object(h.jsxs)(w.c,{children:[Object(h.jsx)(w.a,{path:"dishes",element:Object(h.jsx)(G,{data:e.data,loggedIn:e.loggedIn})}),Object(h.jsx)(w.a,{path:"scores",element:Object(h.jsx)(X,{data:e.data,loggedIn:e.loggedIn})}),Object(h.jsx)(w.a,{path:"*",element:Object(h.jsx)(B,{loggedIn:e.loggedIn})})]})]})};var M=function(){var e=Object(w.f)(),t=Object(u.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(k.c)((function(e){return e})),d=Object(u.useState)(null),b=Object(s.a)(d,2),m=b[0],f=b[1],O=Object(u.useState)({bool:!1,name:""}),x=Object(s.a)(O,2),g=x[0],_=x[1],y=Object(u.useCallback)(Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:"number"===typeof(t=e.sent)?f(t):i(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(u.useEffect)((function(){y()}),[y]),Object(h.jsxs)(h.Fragment,{children:[m&&Object(h.jsx)("div",{style:{textAlign:"center",width:"100vw",height:"100vh",display:"flex",alignItems:"center"},children:Object(h.jsxs)("h1",{children:["Error: ",m," Please try again later"]})}),!m&&!g.bool&&Object(h.jsx)(p,{submitHandler:function(t,n){var c=j(t,n,o);c.bool?(_({bool:!0,name:t}),e("/home")):c.username_wrong?window.alert("Please check your username"):window.alert("Please check your password")}}),!m&&g.bool&&Object(h.jsx)(K,{data:c,loggedIn:g.name,logoutHandler:function(){_({bool:!1,name:""})}})]})};i.a.render(Object(h.jsx)(k.a,{store:H,children:Object(h.jsx)(y.a,{children:Object(h.jsx)(M,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.38aa9a75.chunk.js.map