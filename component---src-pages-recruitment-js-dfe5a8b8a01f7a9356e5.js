(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9],{Mwx9:function(e,a,t){e.exports=t.p+"static/home-4cc26d6ba30512494c2b1b4664e823a8.mp4"},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"SIGShowcase",(function(){return E}));var n=t("q1tI"),l=t.n(n),c=t("Wbzz"),r=t("Bl7J"),s=t("vrFN"),i=t("b57U"),o=t.n(i),m=t("oxxs"),d=t("Mwx9"),u=t.n(d);var E=function(e){var a=e.sigs,t=e.sig_images,n=e.hide_link,r=Object(m.b)(t);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row justify-content-center"},a.map((function(e,a){return l.a.createElement("div",{key:a,className:"col-md-5 col-lg-4",style:{marginBottom:"1em"}},l.a.createElement("div",{className:"clean-pricing-item",style:{height:"100%"}},l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("img",{alt:"",src:r[""+e.name],style:{width:"150px",height:"auto!important",display:"block",marginLeft:"auto",marginRight:"auto"}})),l.a.createElement("p",null,e.description),!1===e.no_link&&!1!==n?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{to:"sigs/"+e.name.toLowerCase(),className:"btn btn-outline-primary btn-block"},"Read More")):null))}))))};a.default=function(e){var a=e.location,t=e.data;return l.a.createElement(r.a,{location:a.pathname,title:"Main"},l.a.createElement(s.a,{title:"We are IET NITK"}),l.a.createElement("main",{className:"page landing-page"},l.a.createElement("div",{className:"video-overlay-wrap"},l.a.createElement("div",{id:"video-overlay",style:{width:"100%",height:"100vh",position:"absolute",zIndex:2}}),l.a.createElement("video",{loop:!0,style:{width:"100%",zIndex:"1",backgroundColor:"black"},autoPlay:!0,muted:!0,id:"hero-video"},l.a.createElement("source",{src:u.a,type:"video/mp4"}),"Your browser does not support HTML video.")),l.a.createElement("section",{className:"clean-block about-us",id:"about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"block-heading mobile-marginx2"},l.a.createElement("h2",{className:"text-primary"},"Who are we?")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement("img",{alt:"IET",src:o.a,style:{width:"100%",height:"auto",paddingBottom:"1em"}})),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},"The Institute of Engineering Technology - National Institute of Technology Karnataka (IET-NITK) Student Chapter is actively involved in inculcating a passion for innovation and appreciation temperament in the minds of those who have potential to change the future. We conduct workshops and seminars throughout the academic calendar striving to impact relevant skills to the students. Apart from this, we strive to invite eminent personalities to conduct lectures for the benefit of the club members and keeping doors opened for others interested. We are affiliated to IET London, which is one of the world’s leading professional societies for the engineering and technology community, with more than 168,000 members in 150 countries and offices in Europe, North America and Asia-Pacific. The IET provides a global knowledge network to facilitate the exchange of ideas and promote the positive role of science, engineering and technology in the world.")))),l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"block-heading"},l.a.createElement("h2",{className:"text-primary"},"Our SIGs"),l.a.createElement("p",null,"IET NITK consists of three different Special Interest Groups:")),l.a.createElement(E,{sigs:t.sigdetails.nodes,sig_images:t&&t.sig.nodes}))),l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"article-list"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro"},l.a.createElement("h2",{className:"text-primary text-center",style:{fontWeight:"500"}},"Latest Articles"),l.a.createElement("p",{className:"text-center"},"We love to write!")),l.a.createElement("div",{className:"row articles",style:{paddingTop:"2em"}},t.blog.nodes.map((function(e,a){var n=e.childMarkdownRemark.frontmatter.image;return n=(n=n&&n.childImageSharp.fixed.srcWebp)||t.ietlogo.fixed.srcWebp,l.a.createElement("div",{key:a,className:"col-sm-6 col-md-4 item"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{alt:e.childMarkdownRemark.frontmatter.title,className:"card-img-top w-100 d-block",src:n}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},e.childMarkdownRemark.frontmatter.title),l.a.createElement("h6",{className:"text-muted card-subtitle mb-2"},"By"," ",Object(m.a)(e.childMarkdownRemark.frontmatter.authors,"")," ",l.a.createElement("br",null),e.childMarkdownRemark.frontmatter.date),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(c.a,{className:"",style:{textDecoration:"none"},to:"blog/"+e.relativeDirectory},"Read More",l.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"}))))))}))))))),l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"article-list"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro"},l.a.createElement("h2",{className:"text-primary text-center",style:{fontWeight:"500",paddingBottom:"-1em"}},"Our Projects"),l.a.createElement("p",{className:"text-center"},"Find more ",l.a.createElement(c.a,{to:"/projects"},"here"))),l.a.createElement("div",{className:"articles row",style:{paddingTop:"2em"}},function(e,a){var t=new Array(a),n=e.length,l=new Array(n);if(a>n)throw new RangeError("getRandom: more elements taken than available");for(;a--;){var c=Math.floor(Math.random()*n);t[a]=e[c in l?l[c]:c],l[c]=--n in l?l[n]:n}return t}(t.projects.nodes,4).map((function(e,a){return l.a.createElement("div",{key:a,className:"col-lg-6 col-md-6 mt-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",{className:"card-title"}," ",l.a.createElement(c.a,{to:"/projects/"+e.title.toLowerCase().split(" ").join(""),className:"card-link text-capitalize"},e.title)),e.sig?l.a.createElement(c.a,{to:"/sigs/"+e.sig.toLowerCase(),className:"badge badge-info text-uppercase mr-2"},e.sig):null,e.label?l.a.createElement("div",{className:"badge badge-primary "},e.label):null,l.a.createElement("p",{className:"card-text"},"Built by",Object(m.a)(e.builtBy||[],"")))))}))))))),t.events.nodes.length>1?l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"article-list"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"articles row",style:{paddingTop:"2em"}},l.a.createElement("div",{className:"col-lg-6 col-md-6 mt-4"},l.a.createElement("div",{className:"intro"},l.a.createElement("h2",{className:"text-primary text-center",style:{fontWeight:"500",paddingBottom:"-1em"}},"Our Events"),l.a.createElement("p",{className:"text-center"},"Find more ",l.a.createElement(c.a,{to:"/events"},"here")))),t.events.nodes.map((function(e,a){return l.a.createElement("div",{key:a,className:"col-lg-6 col-md-6 mt-4"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",{className:"card-title"},l.a.createElement(c.a,{to:"/events/"+e.title.toLowerCase().split(" ").join(""),className:"card-link text-capitalize"},e.title)),l.a.createElement(c.a,{to:"/sigs/"+e.sig.toLowerCase().split(" ").join("")},l.a.createElement("small",{className:"text-uppercase text-muted card-subtitle mb-2"},e.sig)),l.a.createElement("p",{className:"card-text"},"Built by",Object(m.a)(e.builtBy||[],"")))))}))))))):null))}},YygR:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("Bl7J"),r=t("vrFN"),s=t("RXBc"),i=t("Wbzz");a.default=function(e){var a=e.location,t=e.data,o=t.sigdata,m=t.rec_questions,d=t.siglogo;return Object(n.useEffect)((function(){!0!==t.site_data.siteMetadata.join.allow&&Object(i.d)("/")})),l.a.createElement(c.a,{location:a.pathname},l.a.createElement(r.a,{title:"Join Us!"}),l.a.createElement("main",{className:"page faq-page"},l.a.createElement("section",{className:"clean-block about-us"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"block-heading"},l.a.createElement("h2",{className:"text-primary"},"We're Looking For You!"),l.a.createElement("p",null,"IET NITK is looking for smart people willing to reach out to others! Check out where we're recruiting:")),l.a.createElement(s.SIGShowcase,{sigs:o.nodes,hide_link:!1,sig_images:d.nodes}))),l.a.createElement("div",{className:"clean-block text-center text-light",style:{backgroundColor:"#803391",padding:"30px 0px",marginTop:"2em"}},l.a.createElement("h2",null,"Fill the Application Forms Now"),l.a.createElement("a",{href:"https://forms.gle/TjVQ7YFAFZWQaVSV6",className:"btn btn-light btn-lg ml-5",type:"button"},"Join Us")),l.a.createElement("section",{className:"clean-block clean-faq dark"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"block-heading"},l.a.createElement("h2",{className:"text-primary"},"Recruitments FAQ"),l.a.createElement("p",null,(new Date).getFullYear()," Recruitment FAQs and Details")),l.a.createElement("div",{className:"block-content"},l.a.createElement("div",{className:"faq-item"},m.nodes.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("b",{className:"question mb-0"},e.question),l.a.createElement("div",{className:"answer mt-0 mb-2"},e.answer))}))),l.a.createElement("p",{className:"text-primary mt-5"},"Please stay tuned to our social media pages for updates."))))))}},b57U:function(e,a,t){e.exports=t.p+"static/iet-upview-16cc920193b04c7d9269099dd7bb4e30.jpg"},oxxs:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return s}));var n=t("Wbzz"),l=t("q1tI"),c=t.n(l),r=function(e){var a={};return e&&e.forEach((function(e){a[e.name]=e.childImageSharp.fixed.srcWebp})),a},s=function(e,a){return e.map((function(a,t){return c.a.createElement(c.a.Fragment,null," ",c.a.createElement(n.a,{key:"x"+t,to:"/members/"+a.toLowerCase().split(" ").join("")},a),t+2===e.length?" and":t+1!==e.length?",":"")}))}}}]);
//# sourceMappingURL=component---src-pages-recruitment-js-dfe5a8b8a01f7a9356e5.js.map