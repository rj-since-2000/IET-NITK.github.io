(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[7],{516:function(e,t,a){"use strict";a.d(t,{Vt:function(){return r},u:function(){return i},f9:function(){return c}});var n=a(5444),l=a(7294),r=function(e){var t={};return e&&e.forEach((function(e){t[e.name]=e.childImageSharp.fixed.srcWebp})),t},i=function(e,t){return e.map((function(t,a){return l.createElement(l.Fragment,null," ",l.createElement(n.rU,{key:"x"+a,to:"/members/"+t.toLowerCase().split(" ").join("")},t),a+2===e.length?" and":a+1!==e.length?",":"")}))},c=function(e,t){return e.map((function(t,a){var r=t.name;return l.createElement(l.Fragment,null," ",l.createElement(n.rU,{key:"x"+a,to:"/members/"+r.toLowerCase().split(" ").join("")},r),a+2===e.length?" and":a+1!==e.length?",":"")}))}},277:function(e,t,a){"use strict";var n=a(18),l=a(7294),r=a(4260);function i(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,a=e.list,c=e.item,s=e.noneMessage,o=e.filterBy,m=e.filterLabel,u=(0,l.useState)({pno:1,list_state:a,filterType:null,filterCategories:(0,n.Z)(new Set(a.map((function(e){return e[o]}))))}),p=u[0],d=u[1];return p.list_state&&0===p.list_state.length?l.createElement("div",{className:"text-center"},s):l.createElement(l.Fragment,null,o&&p.list_state?l.createElement(r.Z,null,l.createElement(r.Z.Toggle,{className:"mr-4",variant:"outline-primary",id:"dropdown-"+o,size:"sm"},p.filterType?p.filterType:m),l.createElement(r.Z.Menu,null,p.filterCategories&&p.filterCategories.map((function(e,t){return l.createElement(r.Z.Item,{name:e,key:t,onClick:function(e){return d(Object.assign({},p,{list_state:a.filter((function(t){return t[o]===e.target.name})),filterType:e.target.name}))}},e)})),p.filterType?l.createElement(r.Z.Item,{onClick:function(e){d(Object.assign({},p,{list_state:a,filterType:null}))}},"Clear Filters"):null),p.list_state.length," Items",l.createElement("hr",null)):null,1!==p.pno?l.createElement(l.Fragment,null,l.createElement("h6",{className:"text-primary"},"Page ",p.pno),l.createElement("hr",null),l.createElement("br",null)):null,p.list_state&&p.list_state.slice((p.pno-1)*t,(p.pno-1)*t+t).map(c),l.createElement("nav",{"aria-label":"Page navigation example"},l.createElement("ul",{className:"pagination justify-content-center"},l.createElement("li",{className:"page-item "+(1===p.pno?"disabled":"")},l.createElement("button",{className:"page-link",onClick:function(){i(),d(Object.assign({},p,{pno:p.pno-1}))}},"Previous")),p.list_state&&(0,n.Z)(Array(Math.ceil(p.list_state.length/t))).map((function(e,t){return l.createElement("li",{className:"page-item "+(p.pno===t+1?"active":""),key:t},l.createElement("button",{className:"page-link","data-toggle":"tooltip",title:"Page "+(t+1),onClick:function(){i(),d(Object.assign({},p,{pno:t+1}))}},t+1))})),l.createElement("li",{className:"page-item "+(p.list_state&&p.pno===Math.ceil(p.list_state.length/t)?"disabled":"")},l.createElement("button",{className:"page-link",onClick:function(){i(),d(Object.assign({},p,{pno:p.pno+1}))}},"Next")))))}},223:function(e,t,a){"use strict";a.r(t);var n=a(5444),l=a(7294),r=a(1974),i=a(3751),c=a(516),s=a(277);t.default=function(e){var t=e.data,a=e.location;return l.createElement(r.Z,{location:a.pathname,title:"Main"},l.createElement(i.Z,{title:"Blog"}),l.createElement("main",{className:"page blog-post-list"},l.createElement("section",{className:"clean-block clean-blog-list dark"},l.createElement("div",{className:"container"},l.createElement("div",{className:"block-heading"},l.createElement("h2",{className:"text-primary"},"Official IET-NITK Blog"),l.createElement("p",null,"We post cool stuff. Subscribe to our Newsletter to stay updated!")),l.createElement("div",{className:"block-content"},l.createElement(s.Z,{max:5,list:t.allFile.nodes,item:function(e,a){var r=e.childMarkdownRemark.frontmatter.image;return r=r?r.childImageSharp?r.childImageSharp.fixed.srcWebp:r.publicURL:t.ietlogo.fixed.srcWebp,l.createElement("div",{key:a,className:"clean-blog-post"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-5"},l.createElement("img",{alt:e.childMarkdownRemark.frontmatter.title,className:"rounded img-fluid",src:r,style:{width:"100%",height:"auto"}})),l.createElement("div",{className:"col-lg-7"},l.createElement("h3",{"data-toggle":"tooltip",title:e.childMarkdownRemark.timeToRead+" minute read"},e.childMarkdownRemark.frontmatter.title),l.createElement("div",{className:"info"},l.createElement("span",{className:"text-muted"},"By ",(0,c.u)(e.childMarkdownRemark.frontmatter.authors,""),l.createElement("br",null),e.childMarkdownRemark.frontmatter.date)),l.createElement("p",null,e.childMarkdownRemark.excerpt),l.createElement(n.rU,{to:"/blog/"+e.relativeDirectory,className:"btn btn-outline-primary btn-sm",type:"button"},"Read More"))))}}))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-2bfec4b99aa1adda2c23.js.map