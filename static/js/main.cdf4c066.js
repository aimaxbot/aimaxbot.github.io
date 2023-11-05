(()=>{"use strict";var e={2199:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var n=r(5004),o=r(5222),a=r(1666),i=r(9385),l=r(1054),s=r(5288),c=r(5722),u=r(6792),f=r(3287),d=r(1318),p=r(9514),h=r(7153),g=r(2629),b=u.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff",marginTop:"-200px"},title:{fontSize:30,fontWeight:"bold"},subtitle:{fontSize:20,marginTop:"10px",color:"#666"},buttonContainer:{flexDirection:"row",justifyContent:"space-between",marginTop:20},button:{flexDirection:"row",alignItems:"center",padding:10,backgroundColor:"#ddd",marginHorizontal:10,borderRadius:"18px"},buttonText:{fontSize:20,marginLeft:10},footer:{position:"absolute",bottom:10},footerText:{marginBottom:"12px"}});const y=function(){var e=(0,d.useNavigation)();return(0,g.jsxs)(i.default,{style:b.container,children:[(0,g.jsx)(f.default,{source:r(7270),style:{width:"150px",height:"150px",borderRadius:"18px",marginBottom:"20px"}}),(0,g.jsx)(l.default,{style:b.title,children:"Ai Max"}),(0,g.jsx)(l.default,{style:b.subtitle,children:"free ai chatbot app"}),(0,g.jsx)(i.default,{style:b.buttonContainer,children:(0,g.jsxs)(s.default,{style:b.button,onPress:function(){return e.navigate("Chat")},children:[(0,g.jsx)(p.default,{name:"comments",size:20,color:"#000"}),(0,g.jsx)(l.default,{style:b.buttonText,children:"Open AiMax"})]})}),(0,g.jsx)(i.default,{style:b.buttonContainer,children:(0,g.jsxs)(s.default,{style:b.button,onPress:function(){return c.default.openURL("https://lclearnac.net")},children:[(0,g.jsx)(p.default,{name:"globe",size:20,color:"#000"}),(0,g.jsx)(l.default,{style:b.buttonText,children:"Open Website"})]})}),(0,g.jsxs)(i.default,{style:b.footer,children:[(0,g.jsxs)(l.default,{style:b.footerText,children:["Powered by ",(0,g.jsx)(h.default,{name:"node-js",brand:!0,size:20,color:"#339933"})," Node.js"]}),(0,g.jsx)(l.default,{style:b.footerText,children:'Developed by "Land of Codes Academy"'})]})]})};var m=r(4942),x=r(5861),j=r(885),v=r(229),O=r(4448),w=r(8352),C=r(4472),S=r.n(C);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,m.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(){var e=(0,n.useState)([]),t=(0,j.default)(e,2),o=t[0],a=t[1],l=(0,n.useState)(!1),c=(0,j.default)(l,2),u=c[0],d=c[1];(0,n.useEffect)((function(){p()}),[]),(0,n.useEffect)((function(){h(o)}),[o]);var p=function(){var e=(0,x.default)((function*(){try{var e=yield S().getItem("messages");null!==e&&a(e)}catch(t){console.error("Failed to retrieve messages",t)}}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,x.default)((function*(e){try{yield S().setItem("messages",e)}catch(t){console.error("Failed to store messages",t)}}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,x.default)((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(""!==e[0].text.trim()){d(!0),a((function(t){return O.GiftedChat.append(t,e)}));try{var t=yield fetch("https://aimax.onrender.com/",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({text:e[0].text})});if(!t.ok)throw new Error("Failed to get response from chatbot");var n=yield t.json(),o={_id:Math.random().toString(36).substring(7),text:n.message,createdAt:(new Date).toISOString(),user:{_id:2,name:"AiMax",avatar:r(7270)}};d(!1),a((function(e){return O.GiftedChat.append(e,o)}))}catch(l){d(!1),alert("Error: "+l.message);var i={_id:Math.random().toString(36).substring(7),text:"Failed to send message. Please try again.",createdAt:(new Date).toISOString(),user:{_id:2,name:"AiMax",avatar:r(7270)}};a((function(e){return O.GiftedChat.append(e,i)}))}}else alert("Message cannot be empty")}));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)(i.default,{style:[I.container,{backgroundColor:"#fff"}],children:[(0,g.jsxs)(i.default,{style:I.header,children:[(0,g.jsx)(f.default,{source:r(7270),style:{width:30,height:30,borderRadius:20}}),(0,g.jsx)(i.default,{style:{flexDirection:"row",alignItems:"center"},children:(0,g.jsx)(s.default,{onPress:function(){if(window.confirm("Are you sure you want to delete this chat?"))try{S().removeItem("messages").then((function(){a([])})).catch((function(e){console.error("Failed to delete chat",e)}))}catch(e){console.error("Failed to delete chat",e)}},children:(0,g.jsx)(w.default,{name:"trash-outline",size:24,color:"#000"})})})]}),(0,g.jsx)(O.GiftedChat,{messages:o,onSend:function(e){return b(e)},user:{_id:1},renderBubble:function(e){return(0,g.jsx)(O.Bubble,P(P({},e),{},{wrapperStyle:{right:{backgroundColor:"#000"}},textStyle:{right:{color:"#fff"}},timeTextStyle:{right:{color:"rgba(255,255,255,0.5)"}}}))},renderSend:u?function(e){return(0,g.jsx)(O.Send,P(P({},e),{},{children:(0,g.jsx)(i.default,{style:I.sendingContainer,children:(0,g.jsx)(v.default,{size:"small",color:"#007aff"})})}))}:null,renderLoading:function(){return(0,g.jsx)(i.default,{style:I.loadingContainer,children:(0,g.jsx)(v.default,{size:"large",color:"#007aff"})})},renderTime:function(e){return(0,g.jsx)(O.Time,P(P({},e),{},{timeTextStyle:{left:{color:"grey"},right:{color:"grey"}},format:"HH:mm"}))},renderInputToolbar:function(e){return(0,g.jsx)(O.InputToolbar,P(P({},e),{},{containerStyle:{backgroundColor:"#fff",borderTopColor:"#000",borderTopWidth:1}}))},renderComposer:function(e){return(0,g.jsx)(O.Composer,P(P({},e),{},{textInputStyle:{color:"#000",backgroundColor:"#f0f0f0",paddingTop:12,paddingBottom:12,paddingHorizontal:12,marginLeft:0}}))}})]})}var I=u.default.create({container:{flex:1},header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10,borderBottomWidth:1,borderBottomColor:"#ccc"},headerTitle:{fontSize:20,fontWeight:"bold"},loadingContainer:{flex:1,alignItems:"center",justifyContent:"center"},sendingContainer:{justifyContent:"center",alignItems:"center"}}),k=(0,a.default)();const M=function(){return(0,g.jsx)(o.default,{children:(0,g.jsxs)(k.Navigator,{initialRouteName:"Home",children:[(0,g.jsx)(k.Screen,{name:"Home",component:y,options:{title:"AiMax - Home Page"}}),(0,g.jsx)(k.Screen,{name:"Chat",component:_,options:{title:"AiMax - Chat Bot"}})]})})}},7270:(e,t,r)=>{e.exports=r.p+"static/media/icon.a1e957fb232109e3f985.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[897],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.cdf4c066.js.map