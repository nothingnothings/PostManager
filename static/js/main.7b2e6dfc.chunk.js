(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(20).concat([function(e,t,a){},,,function(e,t,a){e.exports=a(83)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),i=a(88),s=(a(28),a(5)),c=a(6),u=a(8),m=a(7),d=a(9),h=a(89),p=a(42),f=a(87),g=a(90),E=(a(30),function(e){return o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"main-header"},e.header),e.mobileNav,o.a.createElement("main",{className:"content"},e.children))}),v=(a(32),function(e){return l.a.createPortal(o.a.createElement("div",{className:["backdrop",e.open?"open":""].join(" "),onClick:e.onClick}),document.getElementById("backdrop-root"))}),b=(a(34),function(e){return o.a.createElement("div",{className:"toolbar"},e.children)}),w=a(85),N=(a(36),function(e){return o.a.createElement("button",{className:"mobile-toggle",onClick:e.onOpen},o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}))}),y=(a(38),function(e){return o.a.createElement("h1",{className:"logo"},"PostManager")}),k=a(18),S=(a(40),[{id:"feed",text:"Feed",link:"/",auth:!0},{id:"login",text:"Login",link:"/",auth:!1}]),j=function(e){return[].concat(Object(k.a)(S.filter(function(t){return t.auth===e.isAuth}).map(function(t){return o.a.createElement("li",{key:t.id,className:["navigation-item",e.mobile?"mobile":""].join(" ")},o.a.createElement(w.a,{to:t.link,exact:!0,onClick:e.onChoose},t.text))})),[e.isAuth&&o.a.createElement("li",{className:"navigation-item",key:"logout"},o.a.createElement("button",{onClick:e.onLogout},"Logout"))])},P=(a(48),function(e){return o.a.createElement("nav",{className:"main-nav"},o.a.createElement(N,{onOpen:e.onOpenMobileNav}),o.a.createElement("div",{className:"main-nav__logo"},o.a.createElement(w.a,{to:"/"},o.a.createElement(y,null))),o.a.createElement("div",{className:"spacer"}),o.a.createElement("ul",{className:"main-nav__items"},o.a.createElement(j,{isAuth:e.isAuth,onLogout:e.onLogout})))}),C=(a(50),function(e){return o.a.createElement("nav",{className:["mobile-nav",e.open?"open":""].join(" ")},o.a.createElement("ul",{className:["mobile-nav__items",e.mobile?"mobile":""].join(" ")},o.a.createElement(j,{mobile:!0,onChoose:e.onChooseItem,isAuth:e.isAuth,onLogout:e.onLogout})))}),F=a(46),O=(a(52),function(e){return e.link?o.a.createElement(F.a,{className:["button","button--".concat(e.design),"button--".concat(e.mode)].join(" "),to:e.link},e.children):o.a.createElement("button",{className:["button","button--".concat(e.design),"button--".concat(e.mode)].join(" "),onClick:e.onClick,disabled:e.disabled||e.loading,type:e.type},e.loading?"Loading...":e.children)}),A=(a(54),function(e){return l.a.createPortal(o.a.createElement("div",{className:"modal2"},o.a.createElement("header",{className:"modal2__header"},o.a.createElement("h1",null,e.title)),o.a.createElement("div",{className:"modal2__content"},e.children),o.a.createElement("div",{className:"modal2__actions"},o.a.createElement(O,{design:"danger",mode:"flat",onClick:e.onCancelModal},"Cancel"),o.a.createElement(O,{mode:"raised",onClick:e.onAcceptModal,disabled:!e.acceptEnabled,loading:e.isLoading},"Accept"))),document.getElementById("modal-root"))}),I=function(e){return o.a.createElement(n.Fragment,null,e.error&&o.a.createElement(v,{onClick:e.onHandle}),e.error&&o.a.createElement(A,{title:"An Error Occurred",onCancelModal:e.onHandle,onAcceptModal:e.onHandle,acceptEnabled:!0},o.a.createElement("p",null,e.error.message)))},H=a(2),_=(a(56),function(e){return o.a.createElement("article",{className:"post"},o.a.createElement("header",{className:"post__header"},o.a.createElement("h3",{className:"post__meta"},"Posted by ",e.author," on ",e.date),o.a.createElement("h1",{className:"post__title"},e.title)),o.a.createElement("div",{className:"post__actions"},o.a.createElement(O,{mode:"flat",link:e.id},"View"),o.a.createElement(O,{mode:"flat",onClick:e.onStartEdit},"Edit"),o.a.createElement(O,{mode:"flat",design:"danger",onClick:e.onDelete},"Delete")))}),x=a(11),L=(a(20),function(e){return o.a.createElement("div",{className:"input"},e.label&&o.a.createElement("label",{htmlFor:e.id},e.label),"input"===e.control&&o.a.createElement("input",{className:[e.valid?"valid":"invalid",e.touched?"touched":"untouched"].join(" "),type:e.type,id:e.id,required:e.required,value:e.value,placeholder:e.placeholder,onChange:function(t){return e.onChange(e.id,t.target.value,t.target.files)},onBlur:e.onBlur}),"textarea"===e.control&&o.a.createElement("textarea",{className:[e.valid?"valid":"invalid",e.touched?"touched":"untouched"].join(" "),id:e.id,rows:e.rows,required:e.required,value:e.value,onChange:function(t){e.onChange(e.id,t.target.value,t.target.files)},onBlur:e.onBlur}))}),B=function(e){return o.a.createElement("div",{className:"input"},o.a.createElement("label",{htmlFor:e.id},e.label),o.a.createElement("input",{className:[e.valid?"valid":"invalid",e.touched?"touched":"untouched"].join(" "),type:"file",id:e.id,onChange:function(t){e.onChange(e.id,t.target.value,t.target.files)},onBlur:e.onBlur}))},D=(a(59),function(e){return o.a.createElement("div",{className:"image",style:{backgroundImage:"url('".concat(e.imageUrl,"')"),backgroundSize:e.contain?"contain":"cover",backgroundPosition:e.left?"left":"center"}})}),M=function(e){return""!==e.trim()},T=function(e){return function(t){var a=!0;return e.min&&(a=a&&t.trim().length>=e.min),e.max&&(a=a&&t.trim().length<=e.max),a}},z=function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},U=function(e){var t=new FileReader,a=new Promise(function(e,a){t.onload=function(t){return e(t.target.result)},t.onerror=function(e){return a(e)}});return t.readAsDataURL(e),a};a(61);function V(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw r}}}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var J={title:{value:"",valid:!1,touched:!1,validators:[M,T({min:6}),function(e){var t=!0;if(e.match(/^[a-zA-Z\s]+$/))return t;t=!1}]},image:{value:"",valid:!1,touched:!1,validators:[M]},content:{value:"",valid:!1,touched:!1,validators:[M,T({min:6})]},id:{value:"",valid:!0,touched:!0}},q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={postForm:J,formIsValid:!1,imagePreview:null},a.postInputChangedHandler=function(e,t,n){n&&U(n[0]).then(function(e){console.log("ENTERED"),a.setState({imagePreview:e})}).catch(function(e){console.log("ENTERED2"),a.setState({imagePreview:null})}),a.setState(function(a){var o,r=!0,l=V(a.postForm[e].validators);try{for(l.s();!(o=l.n()).done;){var i=o.value;r=r&&i(t)}}catch(m){l.e(m)}finally{l.f()}var s=Object(H.a)({},a.postForm,Object(x.a)({},e,Object(H.a)({},a.postForm[e],{valid:r,value:n?n[0]:t}))),c=!0;for(var u in s)c=c&&s[u].valid;return{postForm:s,formIsValid:c}})},a.inputBlurHandler=function(e){a.setState(function(t){return{postForm:Object(H.a)({},t.postForm,Object(x.a)({},e,Object(H.a)({},t.postForm[e],{touched:!0})))}})},a.cancelPostChangeHandler=function(){a.setState({postForm:J,formIsValid:!1}),a.props.onCancelEdit()},a.acceptPostChangeHandler=function(){var e={title:a.state.postForm.title.value,image:a.state.postForm.image.value,content:a.state.postForm.content.value,id:a.state.postForm.id.value};console.log(e),a.props.onFinishEdit(e),a.setState({postForm:J,formIsValid:!1,imagePreview:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(this.props.editing&&e.editing!==this.props.editing&&e.selectedPost!==this.props.selectedPost){var a={title:Object(H.a)({},t.postForm.title,{value:this.props.selectedPost.title,valid:!0}),image:Object(H.a)({},t.postForm.image,{value:this.props.selectedPost.imagePath,valid:!0}),content:Object(H.a)({},t.postForm.content,{value:this.props.selectedPost.content,valid:!0}),id:Object(H.a)({},t.postForm.id,{value:this.props.selectedPost._id,valid:!0})};this.setState({postForm:a,formIsValid:!0})}}},{key:"render",value:function(){return console.log("RENDERED"),console.log(this.props.editing),this.props.editing?o.a.createElement(n.Fragment,null,o.a.createElement(v,{onClick:this.cancelPostChangeHandler}),o.a.createElement(A,{title:"New Post",acceptEnabled:this.state.formIsValid,onCancelModal:this.cancelPostChangeHandler,onAcceptModal:this.acceptPostChangeHandler,isLoading:this.props.loading},o.a.createElement("form",null,o.a.createElement(L,{id:"title",label:"Title",control:"input",onChange:this.postInputChangedHandler,onBlur:this.inputBlurHandler.bind(this,"title"),valid:this.state.postForm.title.valid,touched:this.state.postForm.title.touched,value:this.state.postForm.title.value}),o.a.createElement(B,{id:"image",label:"Image",control:"input",onChange:this.postInputChangedHandler,onBlur:this.inputBlurHandler.bind(this,"image"),valid:this.state.postForm.image.valid,touched:this.state.postForm.image.touched}),o.a.createElement("div",{className:"new-post__preview-image"},!this.state.imagePreview&&o.a.createElement("p",null,"Please choose an image."),this.state.imagePreview&&o.a.createElement(D,{imageUrl:this.state.imagePreview,contain:!0,left:!0})),o.a.createElement(L,{id:"content",label:"Content",control:"textarea",onChange:this.postInputChangedHandler,onBlur:this.inputBlurHandler.bind(this,"content"),valid:this.state.postForm.content.valid,touched:this.state.postForm.content.touched,value:this.state.postForm.content.value})))):null}}]),t}(n.Component),$=(a(63),function(e){return o.a.createElement("div",{className:"paginator"},e.children,o.a.createElement("div",{className:"paginator__controls"},e.currentPage>1&&o.a.createElement("button",{className:"paginator__control",onClick:e.onPrevious},"Previous"),e.currentPage<e.lastPage&&o.a.createElement("button",{className:"paginator__control",onClick:e.onNext},"Next")))}),Y=(a(65),function(e){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}),W=(a(67),a(86)),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isEditing:!1,posts:[],totalPosts:0,editPost:null,status:"",postPage:1,showFeed:!1,postsLoading:!0,editLoading:!1},a.loadPosts=function(e){e&&a.setState({postsLoading:!0,posts:[]});var t=a.state.postPage;"next"===e&&(t++,a.setState({postPage:t})),"previous"===e&&(t--,a.setState({postPage:t})),fetch("https://postsmanager.herokuapp.com/feed/posts?page=".concat(t),{headers:{Authorization:"Bearer ".concat(a.props.token),Name:"".concat(a.props.name)}}).then(function(e){if(200!==e.status)throw new Error("Failed to fetch posts.");return e.json()}).then(function(e){a.setState({posts:e.posts.map(function(e){return Object(H.a)({},e,{imagePath:e.imageUrl})}),totalPosts:e.totalItems,showFeed:!0,postsLoading:!1})}).catch(a.catchError)},a.statusUpdateHandler=function(e){e.preventDefault(),fetch("https://postsmanager.herokuapp.com/feed/status",{method:"POST",headers:{Authorization:"Bearer ".concat(a.props.token),"Content-Type":"application/json",Name:"".concat(a.props.name)},body:JSON.stringify({newStatus:a.state.status})}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Can't update status in this demo version of the app!");return e.json()}).then(function(e){window.location.reload(!1)}).catch(a.catchError)},a.newPostHandler=function(){a.setState({isEditing:!0})},a.startEditPostHandler=function(e){a.setState(function(t){return{isEditing:!0,editPost:Object(H.a)({},t.posts.find(function(t){return t._id===e}))}})},a.cancelEditHandler=function(){a.setState({isEditing:!1,editPost:null})},a.finishEditHandler=function(e){a.setState({editLoading:!0}),console.log(a.props.name);var t=new FormData;t.append("title",e.title),t.append("content",e.content),t.append("image",e.image),t.append("name",a.props.name);var n="https://postsmanager.herokuapp.com/feed/post",o="POST";a.state.editPost&&(n="https://postsmanager.herokuapp.com/feed/post/".concat(e.id),o="PUT"),fetch(n,{method:o,body:t,headers:{Authorization:"Bearer ".concat(a.props.token),Name:"".concat(a.props.name)}}).then(function(e){if(400===e.status)throw new Error("Please input values that are valid and not equal to previous ones.");if(200!==e.status&&201!==e.status)throw new Error("Creating or editing a post failed!");return e.json()}).then(function(e){var t={_id:e.post._id,title:e.post.title,content:e.post.content,creator:e.post.creator,createdAt:e.post.createdAt};a.setState(function(e){var a=Object(k.a)(e.posts);e.editPosts?a[e.posts.findIndex(function(t){return t._id===e.editPost._id})]=t:e.posts.length<2&&(a=e.posts.concat(t));return{posts:a,isEditing:!1,editPost:null,editLoading:!1}}),a.loadPosts()}).catch(function(e){a.setState({isEditing:!1,editPost:null,editLoading:!1,error:e}),a.loadPosts()})},a.statusInputChangedHandler=function(e,t){a.setState({status:t})},a.errorHandler=function(){a.setState({error:null})},a.catchError=function(e){a.setState({error:e})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://postsmanager.herokuapp.com/feed/status",{headers:{Authorization:"Bearer ".concat(this.props.token),Name:"".concat(this.props.name)}}).then(function(e){if(200!==e.status)throw new Error("Failed to fetch user status.");return e.json()}).then(function(t){e.setState({status:t.userStatus})}).catch(this.catchError),this.loadPosts()}},{key:"render",value:function(){var e=this;return o.a.createElement(n.Fragment,null,o.a.createElement(I,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(q,{editing:this.state.isEditing,selectedPost:this.state.editPost,loading:this.state.editLoading,onCancelEdit:this.cancelEditHandler,onFinishEdit:this.finishEditHandler}),o.a.createElement("section",{className:"feed__status"},o.a.createElement("form",{onSubmit:this.statusUpdateHandler},o.a.createElement(L,{type:"text",placeholder:"Your status",control:"input",onChange:this.statusInputChangedHandler,value:this.state.status}),o.a.createElement(O,{mode:"flat",type:"submit"},"Update")),o.a.createElement("p",{className:"text-muted"},"Obs: changes made to the items of this page only modify the app's local state (no effect on the MongoDB database's data).")),o.a.createElement("section",{className:"feed__control"},o.a.createElement(O,{mode:"raised",design:"accent",onClick:this.newPostHandler},"New Post")),o.a.createElement(W.a,{timeout:800,classNames:"fade",in:this.state.showFeed},o.a.createElement("section",{className:"feed"},this.state.postsLoading&&o.a.createElement("div",{style:{textAlign:"center",marginTop:"2rem"}},o.a.createElement(Y,null)),this.state.posts.length<=0&&!this.state.postsLoading?o.a.createElement("p",{style:{textAlign:"center"}},"No posts found."):null,!this.state.postsLoading&&o.a.createElement($,{onPrevious:this.loadPosts.bind(this,"previous"),onNext:this.loadPosts.bind(this,"next"),lastPage:Math.ceil(this.state.totalPosts/5),currentPage:this.state.postPage},this.state.posts.map(function(t){return o.a.createElement(_,{key:t._id,id:t._id,author:t.creator.name,date:new Date(t.createdAt).toLocaleDateString("en-US"),title:t.title,image:t.imageUrl,content:t.content,onStartEdit:e.startEditPostHandler.bind(e,t._id)})})))))}}]),t}(n.Component),G=(a(69),a(71),function(e){return o.a.createElement("div",{className:"paginator"},o.a.createElement("div",{className:"paginator__controls"},o.a.createElement("button",{className:"paginator__control",onClick:e.onRedirectTohome},"Previous")))}),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",author:"",date:"",image:"",content:"",error:""},a.redirectToHome=function(){a.props.history.push("/")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;fetch("https://postsmanager.herokuapp.com/feed/post/".concat(t),{headers:{Authorization:"Bearer ".concat(this.props.token)}}).then(function(e){if(200!==e.status)throw new Error("Failed to fetch status");return e.json()}).then(function(t){e.setState({title:t.post.title,author:t.post.creator.name,date:new Date(t.post.createdAt).toLocaleDateString("en-US"),image:t.post.imageUrl,content:t.post.content})}).catch(function(t){e.setState({error:t})})}},{key:"render",value:function(){return o.a.createElement("section",{className:"single-post"},o.a.createElement("h1",null,this.state.title),o.a.createElement("h2",null,"Created by ",this.state.author," on ",this.state.date),o.a.createElement("div",{className:"single-post__image"},o.a.createElement(D,{contain:!0,imageUrl:"https://postsmanager.herokuapp.com/".concat(this.state.image)})),o.a.createElement("p",null,this.state.content),o.a.createElement(G,{onRedirectTohome:this.redirectToHome.bind(this)}))}}]),t}(n.Component),Q=(a(73),function(e){return o.a.createElement("section",{className:"auth-form"},e.children)});a(75);function X(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return ee(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ee(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw r}}}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={loginForm:{email:{value:"",valid:!1,touched:!1,validators:[M,z]},password:{value:"",valid:!1,touched:!1,validators:[M,T({min:5})]},formIsValid:!1},showForm:!1},a.inputChangedHandler=function(e,t){a.setState(function(a){var n,o=!0,r=X(a.loginForm[e].validators);try{for(r.s();!(n=r.n()).done;){var l=n.value;o=o&&l(t)}}catch(u){r.e(u)}finally{r.f()}var i=Object(H.a)({},a.loginForm,Object(x.a)({},e,Object(H.a)({},a.loginForm[e],{valid:o,value:t}))),s=!0;for(var c in i)s=s&&i[c].valid;return{loginForm:i,formIsValid:s}})},a.inputBlurHandler=function(e){a.setState(function(t){return{loginForm:Object(H.a)({},t.loginForm,Object(x.a)({},e,Object(H.a)({},t.loginForm[e],{touched:!0})))}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState(Object(H.a)({},this.state,{showForm:!0}))}},{key:"render",value:function(){var e=this;return o.a.createElement(W.a,{timeout:800,classNames:"fade",in:this.state.showForm},o.a.createElement(Q,null,o.a.createElement("form",{onSubmit:function(t){return e.props.onLogin(t,{email:e.state.loginForm.email.value,password:e.state.loginForm.password.value})}},o.a.createElement(L,{id:"email",label:"Your E-Mail (hint: exemplo@exemplo.com)",placeholder:"exemplo@exemplo.com",type:"email",control:"input",onChange:this.inputChangedHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.loginForm.email.value,valid:this.state.loginForm.email.valid,touched:this.state.loginForm.email.touched}),o.a.createElement(L,{id:"password",label:"Password (hint: exemplo)",type:"password",control:"input",placeholder:"exemplo",onChange:this.inputChangedHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.loginForm.password.value,valid:this.state.loginForm.password.valid,touched:this.state.loginForm.password.touched}),o.a.createElement(O,{design:"raised",type:"submit",loading:this.props.loading},"Login"))))}}]),t}(n.Component),ae=(a(77),function(e){return o.a.createElement("footer",null,o.a.createElement("div",{className:"container py-5"},o.a.createElement("div",{className:"row py-4"},o.a.createElement("div",{className:"col-lg-4 col-md-6 mb-4 mb-lg-0"},o.a.createElement("div",{className:"brands"},o.a.createElement("p",{className:"font-italic text-muted",style:{cursor:"default"}},"This site is meant to be a showcase of the kind of webapps that can be built using ReactJS and Node.js."),o.a.createElement("ul",{className:"brand-list"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/nothingnothings",title:"github"},o.a.createElement("i",{className:"fa fa-github"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://linkedin.com/in/arthur-dalla-corte-panazolo",title:"linkedin"},o.a.createElement("i",{className:"fa fa-linkedin"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.facebook.com/",title:"facebook"},o.a.createElement("i",{className:"fa fa-facebook"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.twitter.com/",title:"twitter"},o.a.createElement("i",{className:"fa fa-twitter"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/",title:"instagram"},o.a.createElement("i",{className:"fa fa-instagram"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.pinterest.com/",title:"pinterest"},o.a.createElement("i",{className:"fa fa-pinterest"})))))),o.a.createElement("div",{className:"col-lg-2 col-md-6 mb-4 mb-lg-0"},o.a.createElement("h6",{className:"text-uppercase font-weight-bold mb-4"},"The Basics"),o.a.createElement("ul",{className:"list-unstyled mb-0"},o.a.createElement("li",{className:"mb-2"},o.a.createElement("a",{href:"https://www.w3schools.com/html/",className:"text-muted"},"HTML")),o.a.createElement("li",{className:"mb-2"},o.a.createElement("a",{href:"https://www.w3schools.com/css/",className:"text-muted"},"CSS")),o.a.createElement("li",{className:"mb-2"},o.a.createElement("a",{href:"https://www.javascript.com/",className:"text-muted"},"JavaScript")))),o.a.createElement("div",{className:"col-lg-2 col-md-6 mb-4 mb-lg-0"},o.a.createElement("h6",{className:"text-uppercase font-weight-bold mb-4"},"Frameworks"),o.a.createElement("ul",{className:"list-unstyled mb-0"},o.a.createElement("li",{className:"mb-2"},o.a.createElement("a",{href:"https://reactjs.org/",className:"text-muted"},"React")),o.a.createElement("li",{className:"mb-2"},o.a.createElement("a",{href:"https://angular.io/",className:"text-muted"},"Angular")),o.a.createElement("li",{className:"mb-2"},o.a.createElement("a",{href:"https://vuejs.org/",className:"text-muted"},"Vue")))),o.a.createElement("div",{className:"col-lg-4 col-md-6 mb-lg-0"},o.a.createElement("h6",{className:"text-uppercase font-weight-bold mb-4"},"Newsletter"),o.a.createElement("p",{className:"text-muted mb-4",style:{cursor:"default"}},"This Newsletter doesn't really work, but if you want to keep yourself posted about the latest in Web Development, you can always check my site:"),o.a.createElement("div",{className:"p-1 rounded border"},o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"email",placeholder:"Placeholder","aria-describedby":"button-addon1",className:"form-control border-0 shadow-0"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{id:"button-addon1",type:"submit",className:"btn btn-link"},o.a.createElement("i",{className:"fa fa-paper-plane"})))))))),o.a.createElement("div",{className:"bg-black py-4"},o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"text-light mb-0 py-2 text-center"},"Built by ",o.a.createElement("a",{className:"footer-link",href:"https://github.com/nothingnothings"},"Arthur Panazolo")," in 2022"))))}),ne=(a(79),a(81),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showBackdrop:!1,showMobileNav:!1,isAuth:!1,token:null,userId:null,authLoading:!1,error:null,name:"",showFeed:!1},a.mobileNavHandler=function(e){a.setState({showMobileNav:e,showBackdrop:e})},a.backdropClickHandler=function(){a.setState({showMobileNav:!1,showBackdrop:!1,error:null})},a.logoutHandler=function(){a.setState({isAuth:!1,token:null}),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("name")},a.loginHandler=function(e,t){e.preventDefault(),a.setState({authLoading:!0}),fetch("https://postsmanager.herokuapp.com/auth/login",{body:JSON.stringify({email:t.email,password:t.password}),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){if(422===e.status)throw new Error("Validation failed.");if(200!==e.status&&201!==e.status)throw new Error("Could not authenticate you!");return e.json()}).then(function(e){a.setState({isAuth:!0,token:e.token,authLoading:!1,userId:e.userId,name:e.name}),localStorage.setItem("token",e.token),localStorage.setItem("userId",e.userId),localStorage.setItem("name",e.name);var t=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",t.toISOString()),a.setAutoLogout(36e5)}).catch(function(e){var t=e;"Failed to fetch"===e.message&&(e.message="Failed to log you in, please try again."),a.setState({isAuth:!1,authLoading:!1,error:t})})},a.setAutoLogout=function(e){setTimeout(function(){a.logoutHandler()},e)},a.errorHandler=function(){a.setState({error:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expiryDate");if(e&&t)if(new Date(t)<=new Date)this.logoutHandler();else{var a=localStorage.getItem("userId"),n=localStorage.getItem("name"),o=new Date(t).getTime()-(new Date).getTime();this.setState({showFeed:!0,isAuth:!0,token:e,name:n,userId:a}),this.setAutoLogout(o)}}},{key:"render",value:function(){var e=this,t=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return o.a.createElement(te,Object.assign({},t,{onLogin:e.loginHandler,loading:e.state.authLoading}))}}),o.a.createElement(f.a,{to:"/"}));return this.state.isAuth&&(t=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return o.a.createElement("div",null,o.a.createElement(Z,{userId:e.state.userId,token:e.state.token,name:e.state.name}),o.a.createElement(ae,null))}}),o.a.createElement(p.a,{path:"/:postId",render:function(t){return o.a.createElement(K,Object.assign({},t,{userId:e.state.userId,token:e.state.token}))}}),o.a.createElement(f.a,{to:"/"}))),o.a.createElement(n.Fragment,null,this.state.showBackdrop&&o.a.createElement(v,{onClick:this.backdropClickHandler}),o.a.createElement(I,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(E,{header:o.a.createElement(b,null,o.a.createElement(P,{onOpenMobileNav:this.mobileNavHandler.bind(this,!0),onLogout:this.logoutHandler,isAuth:this.state.isAuth})),mobileNav:o.a.createElement(C,{open:this.state.showMobileNav,mobile:!0,onChooseItem:this.mobileNavHandler.bind(this,!1),onLogout:this.logoutHandler,isAuth:this.state.isAuth})}),t)}}]),t}(n.Component)),oe=Object(g.a)(ne);l.a.render(o.a.createElement(i.a,{basename:"/PostManager"},o.a.createElement(oe,null)),document.getElementById("root"))}]),[[23,2,1]]]);
//# sourceMappingURL=main.7b2e6dfc.chunk.js.map