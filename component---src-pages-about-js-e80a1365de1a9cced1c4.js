(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3XHS":function(e,a,t){"use strict";t.r(a),t.d(a,"About",(function(){return p}));var n=t("q1tI"),l=t.n(n),c=t("Bl7J"),i=t("vrFN"),r=t("Wbzz"),s=t("Nfle"),o=t.n(s),m=t("dDCJ"),u=t("AINe"),d=t("+YzT"),f=t("GWEY"),E=function(e){var a=e.author,t=e.index,n="Executive Member"!==a.position,c=!0!==a.alumni,i=n&&c?"bg-gradient-primary":c?"":"bg-gradient-alumni",s=n?"text-light":"";return l.a.createElement("div",{to:"/members/"+a.name.toLowerCase().split(" ").join(""),className:"col-sm-6 col-md-4 col-lg-3",style:{paddingBottom:"3em"},id:a.name,key:t},l.a.createElement("div",{className:"h-100 card clean-card text-center  "+i,id:a.name},l.a.createElement("div",{className:"card-body info"},l.a.createElement(r.a,{to:"/members/"+a.name.toLowerCase().split(" ").join("")},l.a.createElement("h5",{className:"card-title "+s},a.name)),l.a.createElement("p",{className:"card-text "+s},a.position),l.a.createElement("div",{className:"icon"},a.social&&a.social.email?l.a.createElement(m.a,{placement:"bottom",delay:{show:250,hide:400},overlay:function(e){return l.a.createElement(u.a,e,a.social.email.replace("@"," [at] ").split(".").join(" [dot] "))}},l.a.createElement("i",{className:"fa fa-envelope "+s})):null,a.social&&a.social.facebook?l.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.facebook.com/"+a.social.facebook}," ",l.a.createElement("i",{className:"fa fa-facebook "+s})):null,a.social&&a.social.linkedin?l.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.linkedin.com/in/"+a.social.linkedin}," ",l.a.createElement("i",{className:"fa fa-linkedin "+s})):null,a.social&&a.social.github?l.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.github.com/"+a.social.github}," ",l.a.createElement("i",{className:"fa fa-github "+s})):null))))},p=function(e){var a,t=e.location,r=e.data,s=Object(n.useState)("Core 2021"),m=s[0],u=s[1],p=((a={})["Core 2021"]=r.members.nodes.filter((function(e){return"Executive Member"!==e.position&&!0!==e.alumni})),a["Executive Members 2021"]=r.members.nodes.filter((function(e){return"Executive Member"===e.position&&!0!==e.alumni})),a);return r.passouts.group.map((function(e){return p["Alumni-"+e.fieldValue]=r.members.nodes.filter((function(a){return!0===a.alumni&&a.passoutYr===parseInt(e.fieldValue)}))})),l.a.createElement(c.a,{location:t.pathname,title:"About Us"},l.a.createElement(i.a,{title:"About Us"}),l.a.createElement("main",{className:"page"},l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container",style:{marginTop:"5em"}},l.a.createElement("div",{className:" clean-card",style:{boxShadow:"0px!important"}},l.a.createElement("div",{className:"card-body info"},l.a.createElement("div",{className:"card-text"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement("img",{alt:"",src:o.a,style:{width:"100%",height:"auto"}})),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement("h2",{className:"text-primary"},"About Us"),l.a.createElement("p",null,"IET NITK Chapter is a exclusive technical club under IET Bangalore Division. We are actively involved in inculcating a passion for innovation and appreciation for scientific temperament in the minds of those who have the potential to change the future. We conducts seminars and workshops throughout the academic calendar striving to impart technical , social and managerial skills to the students."),l.a.createElement("p",null,"IET also plays an integral role in planning and organizing various events in the techno-cultural fests of the institute ie ENGINEER and INCIDENT.")))))))),l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"block-heading"},l.a.createElement("h2",{className:"text-primary"},"Our Family")),l.a.createElement(d.a,{className:"mb-5",variant:"pills",justify:!0,activeKey:m},l.a.createElement(f.a,{title:m.split("-").length>1?"Batch of "+m.split("-")[1]:"Alumni"},r.passouts.group.map((function(e){return l.a.createElement(f.a.Item,{onClick:function(){return u("Alumni-"+e.fieldValue)},eventKey:e.fieldValue},"Batch of ",e.fieldValue)}))),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{onClick:function(){return u("Core 2021")},eventKey:"Core 2021"},"Core 2021")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{eventKey:"Executive Members 2021",title:"Executive Members 2021",onClick:function(){return u("Executive Members 2021")}},"Executive Members 2021"))),l.a.createElement("div",{className:"row justify-content-center"},p[m].map((function(e,a){return l.a.createElement(E,{author:e,key:a})})))))))};a.default=p},Nfle:function(e,a,t){e.exports=t.p+"static/beach-7ca38aaf54f73009a64afaf44ef2a96c.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-e80a1365de1a9cced1c4.js.map