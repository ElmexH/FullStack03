(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),c=(t(19),t(2)),o=function(e){var n=e.person,t=e.deleteThis;return r.a.createElement("tr",null,r.a.createElement("th",null,n.name),r.a.createElement("th",null,n.number),r.a.createElement("th",null,r.a.createElement("button",{onClick:t(n)},"Delete")))},i=function(e){var n=e.persons,t=e.filterStr,a=e.deleteThis;return r.a.createElement("table",null,r.a.createElement("tbody",null,n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e,n){return r.a.createElement(o,{key:n,person:e,deleteThis:a})})))},m=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,u=e.newNumber,l=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.filterStr,t=e.handleFilterChange;return r.a.createElement("div",null,"Filter:",r.a.createElement("input",{value:n,onChange:t}))},f=t(3),h=t.n(f),s="/api/persons",b=function(){return h.a.get(s).then(function(e){return e.data})},E=function(e){return h.a.post(s,e).then(function(e){return e.data})},p=function(e,n){return h.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},v=function(e){return h.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(""),o=Object(c.a)(l,2),f=o[0],h=o[1],s=Object(a.useState)(""),w=Object(c.a)(s,2),g=w[0],C=w[1],N=Object(a.useState)(""),j=Object(c.a)(N,2),O=j[0],S=j[1],y=Object(a.useState)(null),k=Object(c.a)(y,2),T=k[0],D=k[1];Object(a.useEffect)(function(){b().then(function(e){u(e)})},[]);var F=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;D(e),setTimeout(function(){D(null)},1e3*n)},A=function(){b().then(function(e){u(e),h(""),C("")})};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(function(){return null===T?null:r.a.createElement("div",{className:"error"},T)},null),r.a.createElement("h3",null,"Add new"),r.a.createElement(m,{addName:function(e){if(e.preventDefault(),t.some(function(e){return e.name===f})){if(window.confirm("".concat(f," is already added to phonebook. Do you want to replace the number?"))){var n={name:f,number:g},a=t.filter(function(e){return e.name===f})[0].id;p(a,n).then(function(e){A(),F("".concat(f," updated"))}).catch(function(e){A(),F(e.response.data)})}}else E({name:f,number:g}).then(function(e){u(t.concat(e)),h(""),C(""),F("".concat(f," added"))})},newName:f,handleNameChange:function(e){h(e.target.value)},newNumberm:g,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{filterStr:O,handleFilterChange:function(e){S(e.target.value)}}),r.a.createElement(i,{persons:t,filterStr:O,deleteThis:function(e){return function(){window.confirm("Are you sure you want to delete ".concat(e.name))&&v(e.id).then(function(n){b().then(function(n){u(n),F("".concat(e.name," deleted"),3)})}).catch(function(n){A(),F("".concat(e.name," has been already removed from the server"))})}}}))};l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dfdd786e.chunk.js.map