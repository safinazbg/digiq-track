"use strict";(self["webpackChunkdigiq_track"]=self["webpackChunkdigiq_track"]||[]).push([[89],{4089:function(e,t,l){l.r(t),l.d(t,{default:function(){return ft}});var s=l(3396);const i={class:"resources"};function a(e,t,l,a,r,o){const c=(0,s.up)("Courses"),n=(0,s.up)("CourseDetails"),d=(0,s.up)("LResourceCards"),u=(0,s.up)("LTabs");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(u,{labels:e.tabLabels,selected:e.selectedTab,update:e.onSelectTab},{one:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"mt-16"},{cards:(0,s.w5)((()=>[(0,s.Wm)(c,{onSelect:e.onSelectItem},null,8,["onSelect"])])),details:(0,s.w5)((()=>[e.selectedItem?((0,s.wg)(),(0,s.j4)(n,{key:0,course:e.selectedItem},null,8,["course"])):(0,s.kq)("",!0)])),_:1})])),two:(0,s.w5)((()=>[(0,s.Uk)(" Internships ")])),three:(0,s.w5)((()=>[(0,s.Uk)(" Networks ")])),_:1},8,["labels","selected","update"])])}var r=l(4870),o=l(7139);const c={class:"lTabs h-full"},n={class:"w-full pt-4 flex h8:border-b h8:border-gray-300 relative flex-col h8:flex-row"},d=["onClick"],u={class:"w-full h-full flex flex-col items-stretcb"},p={class:"h-full"};function f(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.slotLabels,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:(0,o.C_)(["flex-1 px-4 h8:text-center font-medium pb-3 border-b-4 cursor-pointer hover:text-blue-400",{"text-blue-400":i.selectedTab===t,"-mb-px":i.selectedTab===t,"opacity-100":i.selectedTab===t,"border-blue-400":i.selectedTab===t,"text-neutral-500":i.selectedTab!==t,"opacity-50":i.selectedTab!==t,"border-neutral-500":i.selectedTab!==t}]),onClick:e=>i.onSelect(t)},(0,o.zw)(e),11,d)))),128))]),(0,s._)("div",u,[((0,s.wg)(),(0,s.j4)(s.Ob,null,[(0,s._)("div",p,[0===i.selectedTab?(0,s.WI)(e.$slots,"one",{key:0}):(0,s.kq)("",!0),1===i.selectedTab?(0,s.WI)(e.$slots,"two",{key:1}):(0,s.kq)("",!0),2===i.selectedTab?(0,s.WI)(e.$slots,"three",{key:2}):(0,s.kq)("",!0),3===i.selectedTab?(0,s.WI)(e.$slots,"four",{key:3}):(0,s.kq)("",!0),4===i.selectedTab?(0,s.WI)(e.$slots,"five",{key:4}):(0,s.kq)("",!0),5===i.selectedTab?(0,s.WI)(e.$slots,"six",{key:5}):(0,s.kq)("",!0),6===i.selectedTab?(0,s.WI)(e.$slots,"seven",{key:6}):(0,s.kq)("",!0),7===i.selectedTab?(0,s.WI)(e.$slots,"eight",{key:7}):(0,s.kq)("",!0),8===i.selectedTab?(0,s.WI)(e.$slots,"nine",{key:8}):(0,s.kq)("",!0),9===i.selectedTab?(0,s.WI)(e.$slots,"ten",{key:9}):(0,s.kq)("",!0),10===i.selectedTab?(0,s.WI)(e.$slots,"eleven",{key:10}):(0,s.kq)("",!0),11===i.selectedTab?(0,s.WI)(e.$slots,"twelve",{key:11}):(0,s.kq)("",!0)])],1024))])])}var w=l(328),m={name:"LTabs",emits:["select"],props:{labels:{type:Array,required:!0,validator:e=>(0,w.kJ)(e)&&e.reduce(((e,t)=>e&&t&&(0,w.HD)(t)),!0)},selected:{type:Number,default:-1},update:{type:Number,default:0}},setup(e,{emit:t}){const l=(0,s.Fl)((()=>{const t=new Set(e.labels);return[...t]})),i=(0,r.iH)(0),a=(0,s.Fl)((()=>e.update));(0,s.YP)(a,(()=>i.value=e.selected));const o=e=>{i.value!==e&&(i.value=e,t("select",{index:e,label:l.value[e]}))};return{selectedTab:i,slotLabels:l,onSelect:o}}},v=l(89);const H=(0,v.Z)(m,[["render",f]]);var g=H;const b={class:"lResourceCards bg-gray-200"},h={class:"flex flex-col h8:flex-row"},x={class:"flex-none h8:flex-1"},V={class:"flex p-4 gap-4 flex-shrink-0 w-96"};function _(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",h,[(0,s._)("div",x,[(0,s.WI)(e.$slots,"cards",{class:"p-4"},(()=>[(0,s.Uk)(" cards ")]))]),(0,s._)("div",V,[(0,s.WI)(e.$slots,"details")])])])}var C=(0,s.aZ)({name:"LResourceCards"});const k=(0,v.Z)(C,[["render",_]]);var y=k;const M={class:"courseDetails p-4 bg-white"},T={class:"my-4 text-right text-digiPurple underline"},z={class:"text-xl font-bold"},D={class:"flex flex-col"},I={class:"w-full flex mb-6"},S={class:"text-sm w-20"},L={class:"w-full text-sm border-l border-l-black pl-2"},W={class:"w-full flex mb-2"},Z={class:"w-1/2 flex gap-4 items-center"},$=(0,s._)("span",null,"Points Awarded",-1),q={class:"text-sm"},B={class:"w-1/2 flex gap-4 items-center"},O=(0,s._)("span",null,"Date Available",-1),N={class:"text-sm"},R=(0,s._)("div",{class:"w-full mb-2"},[(0,s._)("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cupiditate iste officiis recusandae rem tempore voluptatem. Aperiam, dolor praesentium. ")],-1),A={class:"mb-2"},E=(0,s._)("div",{class:"flex gap-4 items-center"},[(0,s._)("span",null,"Prerequisites"),(0,s._)("div",null,"Quantum Mechanics, Basic solid state physics")],-1),F={class:"flex gap-4 items-center"},P=(0,s._)("span",null,"Teacher",-1),j={class:"text-sm"};function G(e,t,l,i,a,r){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",T,[(0,s.Wm)(c,{to:{name:"course",params:{id:e.course.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)("Go to Course")])),_:1},8,["to"])]),(0,s._)("div",z,(0,o.zw)(e.course.title),1),(0,s._)("div",D,[(0,s._)("div",I,[(0,s._)("div",S,(0,o.zw)(e.course.area),1),(0,s._)("div",L,(0,o.zw)(e.course.organisation),1)]),(0,s._)("div",W,[(0,s._)("div",Z,[$,(0,s._)("div",q,(0,o.zw)(e.course.ECTS)+" ECTS ",1)]),(0,s._)("div",B,[O,(0,s._)("div",N,(0,o.zw)(e.course.homework),1)])]),R,(0,s._)("div",A,[E,(0,s._)("div",F,[P,(0,s._)("div",j,(0,o.zw)(e.course.teacher),1)])])])])}var U=(0,s.aZ)({name:"CourseDetails",props:{course:{type:Object,required:!0}}});const Y=(0,v.Z)(U,[["render",G]]);var K=Y,J=l(9242);const Q={class:"courses flex flex-col gap-4 p-4"};function X(e,t,l,i,a,r){const o=(0,s.up)("Course"),c=(0,s.up)("LResourceCard");return(0,s.wg)(),(0,s.iD)("div",Q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.courses,((t,l)=>((0,s.wg)(),(0,s.j4)(c,{key:l,"is-selected":t.title===e.selectedItem?.title,onClick:(0,J.iM)((()=>e.onSelect(t)),["stop"])},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{course:t},null,8,["course"])])),_:2},1032,["is-selected","onClick"])))),128))])}function ee(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["lResourceCard p-4 bg-white border",{"border-digiPurple":e.isSelected,"border-white":!e.isSelected}])},[(0,s.WI)(e.$slots,"default")],2)}var te=(0,s.aZ)({name:"LResourceCard",props:{isSelected:{type:Boolean,default:!1}}});const le=(0,v.Z)(te,[["render",ee]]);var se=le;const ie={class:"course"},ae={class:"text-xl font-bold"},re={class:"flex flex-col"},oe={class:"w-full flex mb-6"},ce={class:"text-sm w-20"},ne={class:"w-full text-sm border-l border-l-black pl-2"},de={class:"w-full flex mb-2"},ue={class:"w-1/2 flex gap-4 items-center"},pe={class:"text-sm"},fe={class:"w-1/2 flex gap-4 items-center"},we={class:"text-sm"},me={class:"w-full flex mb-2"},ve={class:"w-1/2 flex gap-4 items-center"},He={class:"text-sm"},ge={class:"w-1/2 flex gap-4 items-center"},be={class:"text-sm"},he={class:"flex gap-4 items-center"},xe={class:"text-sm"};function Ve(e,t,l,i,a,r){const c=(0,s.up)("CertificateOutline"),n=(0,s.up)("FileClockOutline"),d=(0,s.up)("Domain"),u=(0,s.up)("TextBoxOutline"),p=(0,s.up)("CastEducation");return(0,s.wg)(),(0,s.iD)("div",ie,[(0,s._)("div",ae,(0,o.zw)(e.course.title),1),(0,s._)("div",re,[(0,s._)("div",oe,[(0,s._)("div",ce,(0,o.zw)(e.course.area),1),(0,s._)("div",ne,(0,o.zw)(e.course.organisation),1)]),(0,s._)("div",de,[(0,s._)("div",ue,[(0,s.Wm)(c),(0,s._)("div",pe,(0,o.zw)(e.course.ECTS)+" ECTS ",1)]),(0,s._)("div",fe,[(0,s.Wm)(n),(0,s._)("div",we,(0,o.zw)(e.course.homework),1)])]),(0,s._)("div",me,[(0,s._)("div",ve,[(0,s.Wm)(d),(0,s._)("div",He,(0,o.zw)(e.course.inPerson?"In person":"Online"),1)]),(0,s._)("div",ge,[(0,s.Wm)(u),(0,s._)("div",be,(0,o.zw)(e.course.examType),1)])]),(0,s._)("div",he,[(0,s.Wm)(p),(0,s._)("div",xe,(0,o.zw)(e.course.schedule),1)])])])}const _e=["aria-hidden","aria-label"],Ce=["fill","width","height"],ke={d:"M13 21L15 20L17 21V14H13M17 9V7L15 8L13 7V9L11 10L13 11V13L15 12L17 13V11L19 10M20 3H4A2 2 0 0 0 2 5V15A2 2 0 0 0 4 17H11V15H4V5H20V15H19V17H20A2 2 0 0 0 22 15V5A2 2 0 0 0 20 3M11 8H5V6H11M9 11H5V9H9M11 14H5V12H11Z"};function ye(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("span",(0,s.dG)({"aria-hidden":l.decorative},e.$attrs,{"aria-label":l.title,class:"material-design-icon certificate-outline-icon",role:"img"}),[((0,s.wg)(),(0,s.iD)("svg",{fill:l.fillColor,xmlns:"http://www.w3.org/2000/svg",class:"material-design-icon__svg",width:l.size,height:l.size,viewBox:"0 0 24 24"},[(0,s._)("path",ke,[(0,s._)("title",null,(0,o.zw)(l.title),1)])],8,Ce))],16,_e)}var Me={name:"CertificateOutlineIcon",props:{title:{type:String,default:"Certificate outline icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const Te=(0,v.Z)(Me,[["render",ye]]);var ze=Te;const De=["aria-hidden","aria-label"],Ie=["fill","width","height"],Se={d:"M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"};function Le(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("span",(0,s.dG)({"aria-hidden":l.decorative},e.$attrs,{"aria-label":l.title,class:"material-design-icon cast-education-icon",role:"img"}),[((0,s.wg)(),(0,s.iD)("svg",{fill:l.fillColor,xmlns:"http://www.w3.org/2000/svg",class:"material-design-icon__svg",width:l.size,height:l.size,viewBox:"0 0 24 24"},[(0,s._)("path",Se,[(0,s._)("title",null,(0,o.zw)(l.title),1)])],8,Ie))],16,De)}var We={name:"CastEducationIcon",props:{title:{type:String,default:"Cast education icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const Ze=(0,v.Z)(We,[["render",Le]]);var $e=Ze;const qe=["aria-hidden","aria-label"],Be=["fill","width","height"],Oe={d:"M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"};function Ne(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("span",(0,s.dG)({"aria-hidden":l.decorative},e.$attrs,{"aria-label":l.title,class:"material-design-icon domain-icon",role:"img"}),[((0,s.wg)(),(0,s.iD)("svg",{fill:l.fillColor,xmlns:"http://www.w3.org/2000/svg",class:"material-design-icon__svg",width:l.size,height:l.size,viewBox:"0 0 24 24"},[(0,s._)("path",Oe,[(0,s._)("title",null,(0,o.zw)(l.title),1)])],8,Be))],16,qe)}var Re={name:"DomainIcon",props:{title:{type:String,default:"Domain icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const Ae=(0,v.Z)(Re,[["render",Ne]]);var Ee=Ae;const Fe=["aria-hidden","aria-label"],Pe=["fill","width","height"],je={d:"M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"};function Ge(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("span",(0,s.dG)({"aria-hidden":l.decorative},e.$attrs,{"aria-label":l.title,class:"material-design-icon file-clock-outline-icon",role:"img"}),[((0,s.wg)(),(0,s.iD)("svg",{fill:l.fillColor,xmlns:"http://www.w3.org/2000/svg",class:"material-design-icon__svg",width:l.size,height:l.size,viewBox:"0 0 24 24"},[(0,s._)("path",je,[(0,s._)("title",null,(0,o.zw)(l.title),1)])],8,Pe))],16,Fe)}var Ue={name:"FileClockOutlineIcon",props:{title:{type:String,default:"File clock outline icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const Ye=(0,v.Z)(Ue,[["render",Ge]]);var Ke=Ye;const Je=["aria-hidden","aria-label"],Qe=["fill","width","height"],Xe={d:"M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17"};function et(e,t,l,i,a,r){return(0,s.wg)(),(0,s.iD)("span",(0,s.dG)({"aria-hidden":l.decorative},e.$attrs,{"aria-label":l.title,class:"material-design-icon text-box-outline-icon",role:"img"}),[((0,s.wg)(),(0,s.iD)("svg",{fill:l.fillColor,xmlns:"http://www.w3.org/2000/svg",class:"material-design-icon__svg",width:l.size,height:l.size,viewBox:"0 0 24 24"},[(0,s._)("path",Xe,[(0,s._)("title",null,(0,o.zw)(l.title),1)])],8,Qe))],16,Je)}var tt={name:"TextBoxOutlineIcon",props:{title:{type:String,default:"Text box outline icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const lt=(0,v.Z)(tt,[["render",et]]);var st=lt,it=(0,s.aZ)({name:"cCourse",components:{CastEducation:$e,CertificateOutline:ze,Domain:Ee,FileClockOutline:Ke,TextBoxOutline:st},props:{course:{type:Object,required:!0}}});const at=(0,v.Z)(it,[["render",Ve]]);var rt=at,ot=l(2335),ct=(0,s.aZ)({emits:["select"],name:"cCourses",components:{Course:rt,LResourceCard:se},setup(e,{emit:t}){const l=(0,s.Fl)((()=>Object.values(ot.S.assets).filter((e=>"Course"===e.dataType)))),i=(0,r.iH)(null),a=e=>{i.value=l.value.find((t=>t.title===e.title)),t("select",e)};return{courses:l,onSelect:a,selectedItem:i}}});const nt=(0,v.Z)(ct,[["render",X]]);var dt=nt,ut=(0,s.aZ)({name:"cResources",components:{CourseDetails:K,Courses:dt,LResourceCards:y,LTabs:g},props:{type:{type:String,default:"courses"}},setup(e){const t=["Courses","Internships","Networks"],l=(0,r.iH)(0);(0,s.YP)((()=>e.type),(e=>{e=e||"courses",l.value=t.map((e=>e.toLowerCase())).indexOf(e)}),{immediate:!0});const i=(0,r.iH)(null),a=e=>{l.value=e},o=e=>{i.value=e};return{tabLabels:t,selectedTab:l,onSelectItem:o,onSelectTab:a,resources:{internships:[],networks:[]},selectedItem:i}}});const pt=(0,v.Z)(ut,[["render",a]]);var ft=pt}}]);
//# sourceMappingURL=89.46cf5bb1.js.map