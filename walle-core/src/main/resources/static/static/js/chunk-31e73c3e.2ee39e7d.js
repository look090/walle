(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31e73c3e"],{"22e6":function(t,e,a){"use strict";var s=a("b71e"),r=a.n(s);r.a},"3cbc":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),t._v(" "),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},r=[],n=(a("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),i=n,o=(a("22e6"),a("2877")),c=Object(o["a"])(i,s,r,!1,null,"3981553a",null);e["a"]=c.exports},4616:function(t,e,a){"use strict";var s=a("ac07"),r=a.n(s);r.a},aa77:function(t,e,a){var s=a("5ca1"),r=a("be13"),n=a("79e5"),i=a("fdef"),o="["+i+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,a){var r={},o=n((function(){return!!i[t]()||c[t]()!=c})),l=r[t]=o?e(p):i[t];a&&(r[a]=l),s(s.P+s.F*o,"String",r)},p=d.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},ac07:function(t,e,a){},b71e:function(t,e,a){},c5f6:function(t,e,a){"use strict";var s=a("7726"),r=a("69a8"),n=a("2d95"),i=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,f="Number",m=s[f],v=m,b=m.prototype,g=n(a("2aeb")(b))==f,h="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():p(e,3);var a,s,r,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+e}for(var i,c=e.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>r)return NaN;return parseInt(c,s)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(g?c((function(){b.valueOf.call(a)})):n(a)!=f)?i(new v(_(e)),a,m):_(e)};for(var w,y=a("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)r(v,w=y[I])&&!r(m,w)&&d(m,w,u(v,w));m.prototype=b,b.constructor=m,a("2aba")(s,f,m)}},ecac:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.userInfo?a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,xs:24}},[a("user-card",{attrs:{userInfo:t.userInfo}})],1),t._v(" "),a("el-col",{attrs:{span:18,xs:24}},[a("el-card",[a("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"账号设置",name:"account"}},[a("account",{attrs:{userInfo:t.userInfo}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"时间线",name:"timeline"}},[a("timeline",{attrs:{userInfo:t.userInfo}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"安全设置",name:"security"}},[a("security",{attrs:{userInfo:t.userInfo}})],1)],1)],1)],1)],1)],1):t._e()])},r=[],n=a("db72"),i=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("我的信息")])]),t._v(" "),a("div",{staticClass:"user-profile"},[a("div",{staticClass:"box-center"},[a("pan-thumb",{attrs:{image:t.userInfo.avatar,height:"100px",width:"100px",hoverable:!1}},[a("div",{staticStyle:{"margin-top":"10px"}},[t._v("哈哈")]),t._v(" "),a("span",{staticStyle:{"font-size":"10px","margin-top":"4px"}},[t._v("这里还是我")])])],1),t._v(" "),a("div",{staticClass:"box-center"},[a("div",{staticClass:"user-name text-center"},[t._v(t._s(t.userInfo.account))])])]),t._v(" "),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"education"}}),a("span",[t._v("我能做什么")])],1),t._v(" "),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[t._v("\n          你可以修改账号信息，查看账号注册时间、最后登录时间，以及AK/SK的信息\n        ")])])]),t._v(" "),a("div",{staticClass:"user-skills user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"skill"}}),a("span",[t._v("瓦力能做什么")])],1),t._v(" "),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"progress-item"},[a("span",[t._v("模板管理")]),t._v(" "),a("el-progress",{attrs:{percentage:100,status:"success"}})],1),t._v(" "),a("div",{staticClass:"progress-item"},[a("span",[t._v("群消息发送")]),t._v(" "),a("el-progress",{attrs:{percentage:100,status:"success"}})],1),t._v(" "),a("div",{staticClass:"progress-item"},[a("span",[t._v("页面操作")]),t._v(" "),a("el-progress",{attrs:{percentage:100,status:"success"}})],1),t._v(" "),a("div",{staticClass:"progress-item"},[a("span",[t._v("开放接口")]),t._v(" "),a("el-progress",{attrs:{percentage:30}})],1)])])])])},c=[],l=a("3cbc"),u={components:{PanThumb:l["a"]},props:{userInfo:{type:Object,default:function(){return{account:"",email:"",avatar:"",roles:"",gmtCreate:"",lastLogin:""}}}}},d=u,p=(a("4616"),a("2877")),f=Object(p["a"])(d,o,c,!1,null,"17b0eaea",null),m=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"updatePwdForm",attrs:{model:t.updatePwdForm,rules:t.updatePwdRules}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.updatePwdForm.account,callback:function(e){t.$set(t.updatePwdForm,"account","string"===typeof e?e.trim():e)},expression:"updatePwdForm.account"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"原密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"原密码"},model:{value:t.updatePwdForm.password,callback:function(e){t.$set(t.updatePwdForm,"password","string"===typeof e?e.trim():e)},expression:"updatePwdForm.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[a("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:t.updatePwdForm.newPassword,callback:function(e){t.$set(t.updatePwdForm,"newPassword","string"===typeof e?e.trim():e)},expression:"updatePwdForm.newPassword"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-top":"30px"}},[a("el-button",{attrs:{type:"primary",loading:t.loading,disabled:t.loading},on:{click:t.submit}},[t._v(t._s(t.loading?"修改中...":"修改密码"))])],1)],1)},b=[],g=a("3a2d"),h={props:{userInfo:{type:Object,default:function(){return{account:""}}}},data:function(){var t=this,e=function(e,a,s){if(!a)return s(new Error("新密码不能为空"));a==t.updatePwdForm.password?s(new Error("新密码不能和原密码相同")):s()};return{loading:!1,updatePwdForm:{account:"",password:"",newPassword:""},updatePwdRules:{password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newPassword:[{required:!0,validator:e,trigger:"blur"}]}}},created:function(){this.updatePwdForm.account=this.userInfo.account},methods:{submit:function(){var t=this;this.$refs.updatePwdForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,Object(g["f"])(t.updatePwdForm).then((function(e){t.$store.dispatch("user/resetStateAction"),t.$alert("密码更新成功，现在去重新登录","操作成功",{confirmButtonText:"确定",callback:function(e){t.$router.push({path:"/login"})}}),t.loading=!1})).catch((function(e){t.$notify({title:"提示",type:"info",message:e.errorMsg}),t.loading=!1}))}))}}},_=h,w=Object(p["a"])(_,v,b,!1,null,null,null),y=w.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("el-timeline",t._l(t.timeline,(function(e,s){return a("el-timeline-item",{key:s,attrs:{timestamp:e.timestamp,placement:"top"}},[a("el-card",[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.content))])])],1)})),1)],1)},x=[],C={data:function(){return{timeline:[{timestamp:this.getDate(this.userInfo.lastLogin),title:"最后登录",content:"最后登录于："+this.userInfo.lastLogin},{timestamp:this.getDate(this.userInfo.gmtCreate),title:"注册账号",content:"账号注册于："+this.userInfo.gmtCreate}]}},props:{userInfo:{type:Object,default:function(){return{account:"",email:"",avatar:"",roles:"",gmtCreate:"",lastLogin:""}}}},methods:{getDate:function(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1;s=s<10?"0"+s:s;var r=e.getDate();return r=r<10?"0"+r:r,r=r<10?"0"+r:r,a+"-"+s+"-"+r}}},P=C,F=Object(p["a"])(P,I,x,!1,null,null,null),k=F.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.userInfo.account,callback:function(e){t.$set(t.userInfo,"account","string"===typeof e?e.trim():e)},expression:"userInfo.account"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"AccessKey"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.userInfo.accessKey,callback:function(e){t.$set(t.userInfo,"accessKey","string"===typeof e?e.trim():e)},expression:"userInfo.accessKey"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"SecurityKey"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.securityKey,callback:function(e){t.securityKey=e},expression:"securityKey"}},[a("el-button",{attrs:{slot:"append",type:"primary",icon:t.show?"el-icon-unlock":"el-icon-lock"},on:{click:t.toggleSK},slot:"append"})],1)],1)],1)},S=[],N={data:function(){return{securityKey:"************",show:!1}},props:{userInfo:{type:Object,default:function(){return{account:"",accessKey:""}}}},methods:{validatePassword:function(t){return!(void 0==t||t.length<1)||"密码不能为空"},toggleSK:function(){var t=this;this.show?(this.show=!1,this.securityKey="************"):this.$prompt("请输入你的密码以验证身份","身份验证",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password",inputValidator:this.validatePassword}).then((function(e){var a=e.value;Object(g["a"])(a).then((function(e){t.securityKey=e,t.show=!0})).catch((function(e){t.$notify({title:"操作失败("+e.errorCode+")",type:"error",message:e.errorMsg})}))})).catch((function(t){}))}}},$=N,A=Object(p["a"])($,E,S,!1,null,null,null),O=A.exports,T={name:"Profile",components:{UserCard:m,Account:y,Timeline:k,Security:O},data:function(){return{activeTab:"account"}},computed:Object(n["a"])({},Object(i["b"])(["userInfo","avatar"])),created:function(){this.setAvatar()},methods:{setAvatar:function(){this.userInfo.avatar=this.avatar}}},K=T,j=Object(p["a"])(K,s,r,!1,null,null,null);e["default"]=j.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);