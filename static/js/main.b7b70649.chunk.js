(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],{27:function(e,n,t){e.exports=t(43)},32:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(20),i=t.n(l),c=(t(32),t(2)),o=t(18),u={background:{primary:"linear-gradient(30deg, ".concat(Object(o.a)(.2,"#1c77c3"),", ").concat(Object(o.b)(.2,"#40bcd8"),")"),secondary:"#fff",tertiary:""},text:{white:"#fff",lightgray:"#c0c0c0",gray:"#808080",black:"#000000"},emphasis:{high:"opacity: 0.87;",medium:"opacity: 0.6;",low:"opacity: .38;"},anchor:"#1c77c3",materialShadow:function(e){var n;switch(.12,e){case 2:n="0px 1px 5px 0px";break;case 4:n="0px 1px 10px 0px";break;case 8:n="0px 3px 14px 2px";break;case 16:n="0px 6px 30px 5px";break;default:n="0px 0px 0px 0px"}return"\n      box-shadow: ".concat(n," ").concat("black",";\n      opacity: ").concat(.12,";  \n    ")}},m=t(3),s=t(10),f=t(7);function b(){var e=Object(m.a)(["\n  padding: .5em 1em;\n  font-weight: 500;\n  color: ",";\n  ",";\n  transition: opacity 200ms ease-in-out;\n  border-bottom: 1px solid transparent;\n  &:hover{\n    ",";\n  }\n  ",";\n"]);return b=function(){return e},e}function d(){var e=Object(m.a)(["\n  &&&{\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return d=function(){return e},e}var p=Object(c.b)(s.b)(d()),h=c.b.div(b(),(function(e){return e.theme.text.black}),(function(e){return e.theme.emphasis.medium}),(function(e){return e.theme.emphasis.high}),(function(e){var n=e.active,t=e.theme;return n&&"\n    ".concat(t.emphasis.high,";\n    border-bottom: 1px solid ").concat(t.text.black,";\n  ")})),E=function(e){var n=e.to,t=e.label,a=e.exact,l=Object(f.f)({path:n,exact:a});return r.a.createElement(h,{active:l},r.a.createElement(p,{to:n},t))},g=t(11);function x(){var e=Object(m.a)(["\n  &&&{\n    color: blue;\n    height: 2em;\n    width: 2em;\n  }\n"]);return x=function(){return e},e}function v(){var e=Object(m.a)(["\n  &&&{\n    color: #FF4500;\n    height: 2em;\n    width: 2em;\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(m.a)(["\n  &&&{\n    color: yellow;\n    height: 2em;\n    width: 2em;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(m.a)(["\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  grid-gap: .5em;\n  padding: 1em;\n  color: white;\n  height: 3em;\n"]);return w=function(){return e},e}var O=c.b.div(w()),j=Object(c.b)(g.c)(y()),k=Object(c.b)(g.b)(v()),S=Object(c.b)(g.a)(x()),z=function(){return r.a.createElement(O,null,r.a.createElement(j,null),r.a.createElement(k,null),r.a.createElement(S,null))};function C(){var e=Object(m.a)(["\n  grid-area: body;\n"]);return C=function(){return e},e}function L(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return L=function(){return e},e}function M(){var e=Object(m.a)(["\n  height: 100vh;\n  width: 100%;\n  background: ",";\n\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n  'nav'\n  'body'\n  'footer';\n"]);return M=function(){return e},e}var B=c.b.div(M(),(function(e){return e.theme.background.primary})),T=c.b.div(L()),A=c.b.div(C()),K=function(e){var n=e.children;return r.a.createElement(B,null,r.a.createElement(T,null,r.a.createElement(E,{to:"/",label:"Home",exact:!0}),r.a.createElement(E,{to:"/about",label:"About"}),r.a.createElement(E,{to:"/resume",label:"Resume"})),r.a.createElement(A,null,n),r.a.createElement(z,null))};function I(){var e=Object(m.a)(["\n  padding-left: 1em;\n  width: 100%;\n"]);return I=function(){return e},e}function J(){var e=Object(m.a)(["\n  margin: 0;\n  font-size: ",";\n  font-weight: ",";\n"]);return J=function(){return e},e}function P(){var e=Object(m.a)(["\n  align-self: flex-start;\n  list-style-position: outside;\n  padding-inline-start: 2em;\n  margin-block-start: 0px;\n  margin-block-end: 0px;\n  margin: 0;\n  ",";\n  ",";\n"]);return P=function(){return e},e}function R(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return R=function(){return e},e}function F(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  margin-top: 1em;\n  font-size: 18px;\n  font-weight: 700;\n"]);return F=function(){return e},e}function H(){var e=Object(m.a)(["\n  color: ",";\n  transition: opacity 200ms ease-in-out;\n  font-weight: 700;\n  &:link{\n    opacity: 0.8;\n  }\n  &:visited, :active{\n    opacity: 1;\n  }\n  &:hover{\n    opacity: 1;\n  }\n"]);return H=function(){return e},e}function W(){var e=Object(m.a)(["\n  font-weight: 700;\n  margin-right: .25em;\n"]);return W=function(){return e},e}function U(){var e=Object(m.a)(["\n  display: flex;\n  font-size: 14px;\n  ","{\n    border-right: 1px solid;\n    &:last-of-type{border: none}\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(m.a)(["\n  padding: 0 .5em;\n"]);return V=function(){return e},e}function D(){var e=Object(m.a)(["\n  margin: 0;\n"]);return D=function(){return e},e}function Q(){var e=Object(m.a)(["\n  margin: 0;\n"]);return Q=function(){return e},e}function G(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Segoe UI', 'Roboto', arial, sans-serif;\n  margin: 1em auto 0;\n  padding: 1em;\n  max-width: 768px;\n  min-width: 560px;\n"]);return G=function(){return e},e}var N=c.b.div(G()),X=c.b.h2(Q()),$=c.b.h4(D()),q=c.b.div(V()),Y=c.b.div(U(),q),Z=c.b.label(W()),_=c.b.a(H(),(function(e){return e.theme.anchor})),ee=c.b.section(F()),ne=c.b.div(R()),te=c.b.ul(P(),(function(e){return e.noBullet&&"list-style: none"}),(function(e){var n=e.size;return n&&"font-size: ".concat(n)})),ae=c.b.p(J(),(function(e){return e.size||"12px"}),(function(e){return e.bold?700:500})),re=c.b.div(I()),le=function(){return r.a.createElement(N,null,r.a.createElement(X,null,"Kyle Lowe"),r.a.createElement($,null,"Senior Software Engineer"),r.a.createElement(Y,null,r.a.createElement(q,null,r.a.createElement(Z,null,"Phone:"),"(913)744-5238"),r.a.createElement(q,null,r.a.createElement(Z,null,"Email:"),"Kyle.Lowe323@gmail.com"),r.a.createElement(q,null,r.a.createElement(_,{href:"https://www.linkedin.com/in/kyle-lowe-64366057/"},"LinkedIn"))),r.a.createElement(ee,null,"Summary"),r.a.createElement(te,null,r.a.createElement("li",null,"I have 6+ years of experience developing business critical tools at the intersection of healthcare and Information Technology."),r.a.createElement("li",null,"Proficient in both client and server side web architectures.")),r.a.createElement(ee,null,"Work Experience"),r.a.createElement(ne,null,r.a.createElement(ae,{size:"18px",bold:!0},"Cerner Corporation"),r.a.createElement(ae,{size:"18px",bold:!0},"Kansas City, MO")),r.a.createElement(re,null),r.a.createElement(ee,null,"Technical Skills"),r.a.createElement(te,null,r.a.createElement("li",null,r.a.createElement(Z,null,"SCM:"),"github, TFS"),r.a.createElement("li",null,r.a.createElement(Z,null,"Languages:"),"Javascript, HTML5, CSS3, C#, SQL, TSQL, VBA, XML,"),r.a.createElement("li",null,r.a.createElement(Z,null,"Frameworks:"),"React, Redux, Socket.io, Node, PM2, Husky, React Testing Library"),r.a.createElement("li",null,r.a.createElement(Z,null,"OS:"),"Windows, Linux"),r.a.createElement("li",null,r.a.createElement(Z,null,"Software:"),"Visual Studio, VSCode, Jenkins, Crucible, SSMS, Microsoft Office")),r.a.createElement(ee,null,"Education"),r.a.createElement(ne,null,r.a.createElement(ae,{size:"14px",bold:!0},"Johnson County Community College"),r.a.createElement(ae,{size:"14px",bold:!0},"Overland Park, KS")),r.a.createElement(te,{noBullet:!0,size:"14px"},r.a.createElement("li",null,"Associate of Science Degree"),r.a.createElement("li",null,"Computer Aided Drafting Certificate")),r.a.createElement(ne,null,r.a.createElement(ae,{size:"14px",bold:!0},"University of Kansas"),r.a.createElement(ae,{size:"14px",bold:!0},"Lawrence, KS")),r.a.createElement(te,{noBullet:!0,size:"14px"},r.a.createElement("li",null,"School of Engineering"),r.a.createElement("li",null,"Emphasis in Mechanical/Structural Engineering")))};var ie=function(){return r.a.createElement(s.a,null,r.a.createElement(K,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/resume"},r.a.createElement(le,null)),r.a.createElement(f.a,{path:"/about"},r.a.createElement("h2",null,"ABOUT")),r.a.createElement(f.a,{path:"/"},r.a.createElement("h2",null,"HOME PAGE")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{theme:u},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b7b70649.chunk.js.map