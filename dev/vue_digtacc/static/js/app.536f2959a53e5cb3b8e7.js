webpackJsonp([2],{"4ml/":function(e,t){},C7hH:function(e,t){},GFAW:function(e,t){!function(){!function e(){var n=document.documentElement.clientWidth||document.body.clientWidth;n>750&&(n=750),n<320&&(n=320),document.documentElement.style.fontSize=n*(100/350)+"px",window.onresize||(window.onresize=function(){t(e)})}();var e=void 0,t=function(t){e&&clearTimeout(e),e=setTimeout(function(){t()},300)}}()},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("GFAW");var a=n("Lw6n"),i=n.n(a),o=n("7+uW"),s=n("Fd2+");n("4ml/"),n("sEnP");o.a.use(s.j),o.a.use(s.k),o.a.use(s.m),o.a.use(s.a),o.a.use(s.d),o.a.use(s.e),o.a.use(s.r),o.a.use(s.x),o.a.use(s.f),o.a.use(s.u),o.a.use(s.l),o.a.use(s.v),o.a.use(s.w),o.a.use(s.s),o.a.use(s.i),o.a.use(s.b),o.a.use(s.c),o.a.use(s.C),o.a.use(s.D),o.a.use(s.z),o.a.use(s.g),o.a.use(s.p),o.a.use(s.t),o.a.use(s.E),o.a.use(s.q),o.a.use(s.h),o.a.use(s.B),o.a.use(s.o).use(s.n),o.a.use(s.y),o.a.use(s.A);var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("loading")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"App",data:function(){return{}},components:{}},r,!1,function(e){n("WA/g")},null,null).exports,c=(n("C7hH"),n("xkGL"),n("/ocq"));o.a.use(c.a);var d=new c.a({routes:[{path:"/news",name:"news",component:function(e){return n.e(0).then(function(){var t=[n("iVMw")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),l=n("NYxO");o.a.use(l.a);var h=new l.a.Store({state:{isLoading:!1,loadText:"",initData:"",rqs_Jrnl_No:"",dataC100:{},Avl_Bal:"",openAnAccount:!1,modFornmData:{},deleteFlag:!1,addressesData:{}},mutations:{showLoading:function(e,t){e.isLoading=t},loadTextChange:function(e,t){e.loadText=t},initDataSave:function(e,t){e.initData=t},rqs_Jrnl_No_Change:function(e,t){e.rqs_Jrnl_No=t},DataC100_Change:function(e,t){e.dataC100=t},Avl_Bal_Change:function(e,t){e.Avl_Bal=t},openAnAccount_Change:function(e,t){e.openAnAccount=t},modFornmData_Change:function(e,t){e.modFornmData=t},deleteFlag_Change:function(e,t){e.deleteFlag=t},addressesData_Change:function(e,t){e.addressesData=t}},actions:{}});Date.prototype.format=function(e){var t={"y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var n in t){var a=t[n];if(new RegExp("("+n+")").test(e)){for(var i=RegExp.$1.length,o="",s=0;s<i;s++)o+="0";e=e.replace(RegExp.$1,(o+a).substr((""+a).length))}}return e};var f={isDebug:!1,chars:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],startTime:"",setupWebViewJavascriptBridge:function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);document.addEventListener("WebViewJavascriptBridgeReady",function(){WebViewJavascriptBridge.init(function(e,t){t(data)}),e(WebViewJavascriptBridge)},!1),window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)},showCCBSKMsg:function(e,t,n){n=n+":"+e+"\n"+t;window.WebViewJavascriptBridge.callHandler("invoke",{action:"showToast",msg:n},function(e){})},isnull:function(e){return void 0===e||null==e||""==e},randomMixed:function(e){for(var t="",n=0;n<e;n++){var a=Math.ceil(35*Math.random());t+=f.chars[a]}return t},generateRqsJrnlNo:function(){return(new Date).format("yyyyMMddhhmmssSSS")+this.randomMixed(15)},closeCurrWindows:function(){window.WebViewJavascriptBridge.callHandler("invoke",{action:"closeWebView"},function(e){})},checkTimeOut:function(){return this.isnull(this.startTime)?(this.startTime=new Date,!0):(new Date).getTime()-this.startTime.getTime()>=3e5?(mui.alert("由于您长时间未操作，系统超时，请重新登录！","系统超时",function(){this.closeCurrWindows()}),!1):(this.startTime=new Date,!0)},formatAmount:function(e){return this.isnull(e)?"0.00":this.formatMoney(e,1)},formatMoney:function(e,t){if(/[^0-9\.]/.test(e))return"0.00";if(null==e||"null"==e||""==e)return"0.00";e=(e=((e=e.toString().replace(/^(\d*)$/,"$1."))+"00").replace(/(\d*\.\d\d)\d*/,"$1")).replace(".",",");for(var n=/(\d)(\d{3},)/;n.test(e);)e=e.replace(n,"$1,$2");if(e=e.replace(/,(\d\d)$/,".$1"),0==t){var a=e.split(".");"00"==a[1]&&(e=a[0])}return e},checkPhone:function(e){return!!/^\d{11}$/.test(e)},getWeek:function(e){var t;return this.isnull(e)||8!=e.length?"":(month=e.substring(4,6),month=parseInt(month)-1,t=new Date(e.substring(0,4),month,e.substring(6,8)),"周"+"日一二三四五六".charAt(t.getDay()))},hideMblPhNo:function(e){return this.isnull(e)?"":(11!=e.length&&mui.alert("您输入的手机号信息错误，请重新输入"),len=e.length,e.substring(0,3)+"****"+e.substring(len-4,len))}},m=n("//Fk"),p=n.n(m),g=function(e,t,n,a,i){return a&&(h.commit("loadTextChange","正在加载"),h.commit("showLoading",!0)),new p.a(function(o,s){var r={Url:e,Head:{SYS_TX_CODE:t,Rqs_Jrnl_No:h.state.Rqs_Jrnl_No},Data:n};try{window.WebViewJavascriptBridge.callHandler("send",r,function(e){a&&h.commit("showLoading",!1);var t=e.Head.Txn_Rsp_Cd_Dsc,n=e.Head.Txn_Rsp_Inf;"success"==n?o(e):"XTLP5UNKWN02"==t||"XTLP5UNKWN04"==t?(i&&d.push("/timeOut"),s(e)):"YDCTS1001008"==t||"YDCTS1001009"==t?s(e):(s(e),i&&d.push({path:"/loadErr",query:{rspCdDsc:t,rqs_Jrnl_No:h.state.Rqs_Jrnl_No,rspInf:n}}))})}catch(e){a&&h.commit("showLoading",!1),s(responseData)}})},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"textmodel"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isLoading,expression:"$store.state.isLoading"}],staticClass:"loading"},[t("div",{staticClass:"mask"}),this._v(" "),t("div",{staticClass:"loadcont"},[t("van-loading",{attrs:{type:"spinner",color:"#fff",size:"30px"}}),this._v(" "),t("span",[this._v(this._s(this.$store.state.loadText))])],1)])])},staticRenderFns:[]};var w=n("VU/8")({name:"",data:function(){return{}},components:{},props:{},created:function(){},mounted:function(){},watch:{},beforeUpdate:function(){},updated:function(){},beforeDestory:function(){},destoryed:function(){},methods:{}},v,!1,function(e){n("fRWq")},"data-v-572380b0",null).exports,_={install:function(e){e.component("Loading",w)}};new i.a;o.a.use(_),o.a.prototype.$ccbskObj=f,o.a.prototype.$http=g,o.a.prototype.$openLoading=function(e){this.$store.commit("showLoading",!0),this.$store.commit("loadTextChange",e||"正在加载")},o.a.prototype.$closeLoading=function(){this.$store.commit("showLoading",!1)},o.a.config.productionTip=!1,new o.a({el:"#app",router:d,store:h,components:{App:u},template:"<App/>"})},"WA/g":function(e,t){},fRWq:function(e,t){},sEnP:function(e,t){},xkGL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.536f2959a53e5cb3b8e7.js.map