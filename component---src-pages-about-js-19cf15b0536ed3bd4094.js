(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[682],{7124:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),n=a(1974),c=a(3751),r=a(5444),i=a.p+"static/beach-1dbbeff35ed27b113cde05746831685e.jpg",m=a(4276),s=a(9474),o=a(8435),u=a(6725),d=a(5769),f="Alumni",E="Executive Members 2021",b="Core 2021",p=function(e){var t=e.author,a=e.index,n="Executive Member"!==t.position&&!0!==t.alumni?"bg-gradient-primary":!0!==t.alumni?"":"bg-gradient-alumni",c="Executive Member"!==t.position||!0===t.alumni?"text-light":"";return l.createElement("div",{to:"/members/"+t.name.toLowerCase().split(" ").join(""),className:"col-sm-6 col-md-4 col-lg-3",style:{paddingBottom:"3em"},id:t.name,key:a},l.createElement("div",{className:"h-100 card clean-card text-center  "+n,id:t.name},l.createElement("div",{className:"card-body info"},l.createElement(r.rU,{to:"/members/"+t.name.toLowerCase().split(" ").join("")},l.createElement("h5",{className:"card-title "+c},t.name)),l.createElement("p",{className:"card-text "+c},t.position),l.createElement("div",{className:"icon"},t.social&&t.social.email?l.createElement(m.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:function(e){return l.createElement(s.Z,e,t.social.email.replace("@"," [at] ").split(".").join(" [dot] "))}},l.createElement("i",{className:"fa fa-envelope "+c})):null,t.social&&t.social.facebook?l.createElement(d.MS,{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.facebook.com/"+t.social.facebook}," ",l.createElement("i",{className:"fa fa-facebook "+c})):null,t.social&&t.social.linkedin?l.createElement(d.MS,{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.linkedin.com/in/"+t.social.linkedin}," ",l.createElement("i",{className:"fa fa-linkedin "+c})):null,t.social&&t.social.github?l.createElement(d.MS,{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.github.com/"+t.social.github}," ",l.createElement("i",{className:"fa fa-github "+c})):null))))},h=function(e){var t,a=e.location,r=e.data,m=(0,l.useState)(b),s=m[0],d=m[1],h=((t={})["Core 2021"]=r.members.nodes.filter((function(e){return"Executive Member"!==e.position&&!0!==e.alumni})),t[E]=r.members.nodes.filter((function(e){return"Executive Member"===e.position&&!0!==e.alumni})),t);return r.passouts.group.map((function(e){return h["Alumni-"+e.fieldValue]=r.members.nodes.filter((function(t){return!0===t.alumni&&t.passoutYr===parseInt(e.fieldValue)}))})),l.createElement(n.Z,{location:a.pathname,title:"About Us"},l.createElement(c.Z,{title:"About Us"}),l.createElement("main",{className:"page"},l.createElement("section",{className:"clean-block about-us"},l.createElement("div",{className:"container",style:{marginTop:"5em"}},l.createElement("div",{className:" clean-card",style:{boxShadow:"0px!important"}},l.createElement("div",{className:"card-body info"},l.createElement("div",{className:"card-text"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.createElement("img",{alt:"",src:i,style:{width:"100%",height:"auto"}})),l.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.createElement("h2",{className:"text-primary"},"About Us"),l.createElement("p",null,r.about.info)))))))),l.createElement("section",{className:"clean-block about-us"},l.createElement("div",{className:"container"},l.createElement("div",{className:"block-heading"},l.createElement("h2",{className:"text-primary"},"Our Family")),l.createElement(o.Z,{className:"mb-5",variant:"pills",justify:!0,activeKey:s},l.createElement(u.Z,{title:s.split("-").length>1?"Batch of "+s.split("-")[1]:f},r.passouts.group.map((function(e){return l.createElement(u.Z.Item,{onClick:function(){return d("Alumni-"+e.fieldValue)},eventKey:e.fieldValue},"Batch of ",e.fieldValue)}))),l.createElement(o.Z.Item,null,l.createElement(o.Z.Link,{onClick:function(){return d(b)},eventKey:b},b)),l.createElement(o.Z.Item,null,l.createElement(o.Z.Link,{eventKey:E,title:E,onClick:function(){return d(E)}},E))),l.createElement("div",{className:"row justify-content-center"},h[s].map((function(e,t){return l.createElement(p,{author:e,key:t})})))))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-19cf15b0536ed3bd4094.js.map