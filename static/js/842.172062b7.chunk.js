"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[842],{3842:(e,r,n)=>{n.r(r),n.d(r,{default:()=>j});var s=n(2791),t=n(4420);const o="Login_formSummaryError__0Z-Xs";var i=n(704),l=n(2272),d=n(5304),h=n(7689),a=n(184);const c=(0,i.Z)({form:"login"})((e=>(0,a.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,l.vh)(l.II,"email",{validate:d.z.required,placeholder:"Email"}),(0,l.vh)(l.II,"password",{placeholder:"Password",validate:d.z.required,type:"password"}),(0,l.vh)(l.II,"rememberMe",{type:"checkbox",text:"remember me"}),e.error&&(0,a.jsxs)("div",{className:o,children:["ERROR: ",e.error]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{children:"Enter"})})]}))),m=e=>e.isAuth?(0,a.jsx)(h.Fg,{to:"/profile"}):(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Login"}),(0,a.jsx)(c,{onSubmit:r=>{console.log(r),e.login(r.email,r.password,r.rememberMe)}})]});var u=n(9266);class x extends s.Component{componentDidMount(){}render(){return(0,a.jsx)(m,{...this.props})}}const p={login:u.x4,logout:u.kS},j=(0,t.$j)((e=>({isAuth:e.auth.isAuth})),p)(x)},2272:(e,r,n)=>{n.d(r,{II:()=>h,gx:()=>d,vh:()=>a});n(2791);const s="FormsControls_formControl__DjFsL",t="FormsControls_error__GiRUL";var o=n(6139),i=(n(5304),n(184));const l=e=>{let{input:r,meta:n,child:o,element:l,...d}=e;const h=n.touched&&n.error;return(0,i.jsxs)("div",{className:s+" "+(h?t:""),children:[(0,i.jsx)("div",{children:d.children}),h&&(0,i.jsx)("span",{children:n.error})]})},d=e=>{const{input:r,meta:n,child:s,element:t,...o}=e;return(0,i.jsx)(l,{...e,children:(0,i.jsx)("textarea",{...r,...o})})},h=e=>{const{input:r,meta:n,child:s,element:t,...o}=e;return(0,i.jsx)(l,{...e,children:(0,i.jsx)("input",{...r,...o})})},a=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{component:e,name:r,...n}),n.text]})}},5304:(e,r,n)=>{n.d(r,{z:()=>s});const s={required(e){if(!e)return"error message"},maxLength15(e){if(e&&e.length>15)return"Max length is 15 symbols"},minLength2(e){if(e&&e.length<2)return"Min length is 2 symbols"}}}}]);
//# sourceMappingURL=842.172062b7.chunk.js.map