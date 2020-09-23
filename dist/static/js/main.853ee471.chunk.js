(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{327:function(e,t,a){e.exports=a(667)},332:function(e,t,a){},667:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(119),i=a.n(c),l=(a(332),a(6)),o=a(3),s=a(30),u=a(31),m=a(32),d=a(34),p=a(33),h=a(7),E=a(20),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,"Login Error"):null))))}}]),a}(n.Component),b=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",error:t})}))}));var a}}}))(f),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component),v=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",error:e})}))}}(t))}}}))(g),N=a(57),j=a.n(N),O=function(e){var t=e.project;return r.a.createElement("div",null,r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content Grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate()).calendar()))))},y=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(O,{project:e}))})))},C=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))}))))))},S=a(17),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(y,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(C,{notifications:n})))):r.a.createElement(o.a,{to:"/signin"})}}]),a}(n.Component),R=Object(S.d)(Object(h.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(E.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),F=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(t){t.preventDefault(),e.signOut()},to:"/"},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),k=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Log In"))))},I=Object(h.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(F,{profile:a}):r.a.createElement(k,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),P=a(18),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(m.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{className:"materialize-textarea",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signin"})}}]),a}(n.Component),U=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(P.a)(Object(P.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(x),A=Object(S.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(E.firestoreConnect)([{collection:"project"}]))((function(e){var t=e.project,a=e.auth;return console.log(t),a.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorLastName," ",t.authorFirsName),r.a.createElement("div",null,j()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project...")):r.a.createElement(o.a,{to:"/signin"})}));var L=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:R}),r.a.createElement(o.b,{path:"/project/:id",component:A}),r.a.createElement(o.b,{path:"/signin",component:b}),r.a.createElement(o.b,{path:"/signup",component:v}),r.a.createElement(o.b,{path:"/create",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login failed"),Object(P.a)(Object(P.a)({},e),{},{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)(Object(P.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)(Object(P.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(P.a)(Object(P.a)({},e),{},{authError:t.error.message});default:return e}},G={projects:[{id:"1",title:"menyapu",content:"menyapu rumah tetangga"},{id:"2",title:"menyiram",content:"menyiram bunga"},{id:"3",title:"makan",content:"masak dulu ding"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("porject created",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.error),e;default:return e}},D=a(58),J=Object(S.c)({auth:T,project:z,firestore:D.firestoreReducer,firebase:E.firebaseReducer}),B=a(326),W=a(80),H=a.n(W);a(662),a(665);H.a.initializeApp({apiKey:"AIzaSyCq_hC9CbX5KVudPvkNhNf-p98Kif73sLE",authDomain:"mario-plan-2fb4b.firebaseapp.com",databaseURL:"https://mario-plan-2fb4b.firebaseio.com",projectId:"mario-plan-2fb4b",storageBucket:"mario-plan-2fb4b.appspot.com",messagingSenderId:"305748219116",appId:"1:305748219116:web:86efc29d9cb95df7fa01c9",measurementId:"G-3HTYJTH63H"});var K=H.a,q=Object(S.e)(J,Object(S.d)(Object(S.a)(B.a.withExtraArgument({getFirestore:D.getFirestore,getFirebase:E.getFirebase})),Object(D.reduxFirestore)(K,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}))),M={firebase:H.a,config:K,dispatch:q.dispatch,createFirestoreInstance:D.createFirestoreInstance,userProfile:"users",presence:"presence",sessions:"sessions"};function V(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(E.isLoaded)(a)?t:r.a.createElement("div",null,"Loading Screen...")}i.a.render(r.a.createElement(h.a,{store:q},r.a.createElement(E.ReactReduxFirebaseProvider,M,r.a.createElement(V,null,r.a.createElement(L,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[327,1,2]]]);
//# sourceMappingURL=main.853ee471.chunk.js.map