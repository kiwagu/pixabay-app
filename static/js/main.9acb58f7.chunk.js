(this["webpackJsonppixabay-app"]=this["webpackJsonppixabay-app"]||[]).push([[0],{146:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),r=a.n(n),i=a(35),s=a.n(i),o=(a(146),a(6)),d=a(139),l=a(7),j=Object(n.createContext)(null),b=j.Provider,u=[],O=function(e){var t=e.children,a=Object(n.useState)(u),r=Object(l.a)(a,2),i=r[0],s=r[1];return Object(c.jsx)(b,{value:[i,s],children:t})};O.context=j;var h=O,p=a(13),x=a.n(p),m=a(24),f=a(54),v=a.n(f),g=a(55),S=a.n(g),w=a(33),y={transitionDuration:0,columnWidth:".grid-sizer",itemSelector:".grid-item",percentPosition:!0,horizontalOrder:!0},N=a(256),_="".concat("https://pixabay.com","/api"),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return N.get("".concat(_,"/?page=").concat(e,"&key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/pixabay-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY))},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.get("".concat(_,"/?page=").concat(t,"&key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/pixabay-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,"&q=").concat(e))},T=function(e){return N.get("".concat(_,"/?key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/pixabay-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,"&id=").concat(e))};var C=function(){var e=Object(n.useContext)(j),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(1),s=Object(l.a)(i,2),o=s[0],d=s[1],b=Object(n.useState)(0),u=Object(l.a)(b,2),O=u[0],h=u[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),g=f[0],N=f[1],_=Object(n.useCallback)(Object(m.a)(x.a.mark((function e(){var t,c,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,E(o);case 3:c=e.sent,r(a.concat(c.data.hits)),h(c.data.total),t++,d(t);case 8:case"end":return e.stop()}}),e)}))),[a,o,r]);return Object(n.useEffect)((function(){g||(_(),N(!0))}),[g,_]),Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h1",{className:"text-center",children:"Home"}),Object(c.jsx)(v.a,{pageStart:1,loadMore:_,hasMore:O>a.length,children:Object(c.jsxs)(S.a,{className:"grid",elementType:"div",options:y,disableImagesLoaded:!1,updateOnEachImageLoad:!1,children:[Object(c.jsx)("div",{className:"grid-sizer"}),a.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(w.a,{to:"/image/".concat(e.id),children:Object(c.jsx)("img",{src:e.webformatURL,alt:"thumbnamil",className:"card grid-item"})})},t)}))]})})]})},P=a(140),L=a(28),R=a(61),I=a(138),A=a(95),D=A.a({keyword:A.b().required("Keyword is required")});var K=function(){var e=Object(n.useContext)(j),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),o=s[0],d=s[1],b=Object(n.useState)(1),u=Object(l.a)(b,2),O=u[0],h=u[1],p=Object(n.useState)(0),f=Object(l.a)(p,2),g=f[0],N=f[1],_=Object(n.useState)(!1),E=Object(l.a)(_,2),T=E[0],C=E[1],A=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.validate(t);case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:d(null===t||void 0===t?void 0:t.keyword),K(null===t||void 0===t?void 0:t.keyword,1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(m.a)(x.a.mark((function e(t){var a,c,n,i=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:1,C(!0),e.next=4,k(t,O);case 4:c=e.sent,n=c.data.hits,r(n),N(c.data.total),h(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O,t++,e.next=4,k(o,t);case 4:c=e.sent,r(a.concat(c.data.hits)),N(c.data.total),h(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"page container",children:[Object(c.jsx)("div",{className:"row text-center",children:Object(c.jsxs)("div",{className:"col-10 mx-auto",children:[Object(c.jsx)("h1",{className:"text-center",children:"Search"}),Object(c.jsx)(P.a,{validationSchema:D,onSubmit:A,initialValues:{keyword:""},children:function(e){var t=e.handleSubmit,a=e.handleChange,n=e.values,r=e.touched,i=e.errors;return Object(c.jsxs)(L.a,{noValidate:!0,onSubmit:t,children:[Object(c.jsx)(L.a.Row,{style:{margin:0},children:Object(c.jsxs)(L.a.Group,{as:R.a,md:"12",controlId:"keyword",children:[Object(c.jsx)(L.a.Label,{children:"Keyword"}),Object(c.jsx)(L.a.Control,{type:"text",name:"keyword",placeholder:"Keyword",value:n.keyword||"",onChange:a,isInvalid:r.keyword&&i.keyword}),Object(c.jsx)(L.a.Control.Feedback,{type:"invalid",children:i.keyword})]})}),Object(c.jsx)(I.a,{type:"submit",children:"Search"})]})}})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("br",{}),Object(c.jsx)(v.a,{pageStart:1,loadMore:H,hasMore:T&&g>a.length,children:Object(c.jsxs)(S.a,{className:"grid",elementType:"div",options:y,disableImagesLoaded:!1,updateOnEachImageLoad:!1,children:[Object(c.jsx)("div",{className:"grid-sizer"}),a.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(w.a,{to:"/image/".concat(e.id),children:Object(c.jsx)("img",{src:e.webformatURL,alt:"thumbnamil",className:"card grid-item"})})},t)}))]})})]})})]})};a(316);var H=function(e){var t=e.match,a=Object(n.useContext)(j),r=Object(l.a)(a,1)[0],i=t.params.imageId,s=Object(n.useState)(r.find((function(e){return String(e.id)===i}))),o=Object(l.a)(s,2),d=o[0],b=o[1];Object(n.useEffect)((function(){Object(m.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=12;break}return e.prev=1,e.next=4,T(i);case 4:t=e.sent,a=t.data.hits,b(a[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),b({largeImageURL:"https://pixabay.com/get/50e8dd4a4c57b10ff3d8992cc621317b143bd8e44e5077497c267fd0934ec3_640.png",tags:"Not found"});case 12:console.log("image",d);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}));var u=d&&Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-8",children:Object(c.jsx)("div",{className:"photo-img",children:Object(c.jsx)("img",{src:d.largeImageURL,alt:"photography"})})}),Object(c.jsx)("div",{className:"col-lg-4",children:Object(c.jsxs)("div",{className:"photo-details",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("i",{className:"fas fa-file-alt fa-fw","data-toggle":"tooltip","data-placement":"top",title:"Bio"}),"Tags: ",d.tags]}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"far fa-user fa-fw","data-toggle":"tooltip","data-placement":"top",title:"User"}),d.user]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"far fa-thumbs-up fa-fw","data-placement":"top",title:"Likes"}),d.likes]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"far fa-eye fa-fw","data-toggle":"tooltip","data-placement":"top",title:"Views"}),d.views]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-download fa-fw","data-toggle":"tooltip","data-placement":"top",title:"Download"}),d.downloads]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-arrows-alt fa-fw","data-toggle":"tooltip","data-placement":"top",title:"Original size"}),d.webformatHeight,"x",d.webformatWidth," pixel"]})]})]})})]})});return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-center",children:"Image details"}),u]})},F=a(40),U=a(66);var W=Object(o.e)((function(e){var t=e.location;return r.a.useEffect((function(){})),Object(c.jsxs)(F.a,{bg:"primary",expand:"lg",variant:"dark",children:[Object(c.jsx)(F.a.Brand,{href:"/",children:"Photo App"}),Object(c.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(F.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(U.a,{className:"mr-auto",children:[Object(c.jsx)(U.a.Link,{href:"/",active:"/"===t.pathname,children:"Home"}),Object(c.jsx)(U.a.Link,{href:"/imagesearch",active:"/imagesearch"===t.pathname,children:"Search"})]})})]})})),B=(a(317),Object(d.a)());var V=function(){return Object(c.jsx)(h,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.b,{history:B,children:[Object(c.jsx)(W,{}),Object(c.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(c.jsx)(o.a,{path:"/imagesearch",exact:!0,component:K}),Object(c.jsx)(o.a,{path:"/image/:imageId",exact:!0,component:H})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,320)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),z()}},[[318,1,2]]]);
//# sourceMappingURL=main.9acb58f7.chunk.js.map