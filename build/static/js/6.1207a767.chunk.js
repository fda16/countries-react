(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{30:function(e,t,r){"use strict";r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return f}));var n=r(31),a=r.n(n),s=r(32),c=r(33);function i(e,t,r){localStorage.setItem("user",JSON.stringify({accessToken:e,refreshToken:t,expires:r}))}function u(e){return o.apply(this,arguments)}function o(){return(o=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.a)({method:"post",url:"/Auth/register",data:{lastName:t.lastName,firstName:t.firstName,patronymic:t.patronymic,userName:t.userName,password:t.password,confirmPassword:t.confirmPassword,phoneNumber:t.phoneNumber,email:t.email}});case 3:return i((r=e.sent).data.accessToken,r.data.refreshToken,r.data.expires),e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e,t){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.a)({method:"post",url:"/Auth/login",data:{userName:t,password:r}});case 3:return i((n=e.sent).data.accessToken,n.data.refreshToken,n.data.expires),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(){localStorage.removeItem("user")}function f(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")).refreshToken,r="/Auth/tokens/"+t+"/refresh",e.prev=2,e.next=5,Object(c.a)({method:"post",url:r});case 5:return i((n=e.sent).data.accessToken,n.data.refreshToken,n.data.expires),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}},33:function(e,t,r){"use strict";var n=r(35),a=r.n(n).a.create({baseURL:"https://api.bo.aa44.ru/api"});t.a=a},34:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},36:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},37:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return a}))},38:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return i}));var s=r(34);function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(s.a)(e):t}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=n(e);if(t){var s=n(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return c(this,r)}}},39:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return a}))},75:function(e,t,r){},76:function(e,t,r){},79:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r(31),a=r.n(n),s=r(32),c=r(36),i=r(37),u=r(34),o=r(39),l=r(38),p=r(0),h=r.n(p),f=(r(75),r(30)),b=r(1),m=r(3),d=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={userData:{lastName:"",firstName:"",patronymic:"",userName:"",password:"",confirmPassword:"",phoneNumber:"",email:""},loggedIn:!1,error:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.submit=n.submit.bind(Object(u.a)(n)),n}return Object(i.a)(r,[{key:"handleChange",value:function(e){var t=this.state.userData;t[e.target.name]=e.target.value,this.setState({userData:t})}},{key:"submit",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(f.d)(this.state.userData);case 3:200===(r=e.sent).status?this.setState({loggedIn:!0}):this.setState({error:r.data.Detail});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("form",{className:"register",onSubmit:this.submit,children:[Object(m.jsxs)("fieldset",{className:"register__fieldset",children:[Object(m.jsx)("legend",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(m.jsx)("input",{className:"register__input",type:"text",name:"lastName",value:this.state.userData.lastName,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u0418\u043c\u044f"}),Object(m.jsx)("input",{className:"register__input",type:"text",name:"firstName",value:this.state.userData.firstName,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(m.jsx)("input",{className:"register__input",type:"text",name:"patronymic",value:this.state.userData.patronymic,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(m.jsx)("input",{className:"register__input",type:"text",name:"userName",value:this.state.userData.userName,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)("input",{className:"register__input",type:"password",name:"password",value:this.state.userData.password,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)("input",{className:"register__input",type:"password",name:"confirmPassword",value:this.state.userData.confirmPassword,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(m.jsx)("input",{className:"register__input",type:"tel",name:"phoneNumber",value:this.state.userData.phoneNumber,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"register__label",children:[Object(m.jsx)("span",{children:"Email"}),Object(m.jsx)("input",{className:"register__input",type:"email",name:"email",value:this.state.userData.email,onChange:this.handleChange})]}),Object(m.jsx)("button",{type:"submit",className:"register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),this.state.error&&Object(m.jsx)("div",{children:this.state.erorr})]}),this.state.loggedIn&&Object(m.jsx)(b.a,{to:"/"})]})}}]),r}(h.a.Component),j=r(13);r(76);function g(){return JSON.parse(localStorage.getItem("user"))?Object(m.jsx)(b.a,{to:"/"}):Object(m.jsxs)("div",{className:"register-page",children:[Object(m.jsx)(d,{}),Object(m.jsx)("span",{children:"\u0418\u043b\u0438"}),Object(m.jsx)(j.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})}}}]);
//# sourceMappingURL=6.1207a767.chunk.js.map