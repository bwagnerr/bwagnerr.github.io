_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var s=n("TqRt");t.__esModule=!0,t.default=void 0;var c=s(n("q1tI")),d=s(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var g=function(e){l(n,e);var t=u(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:p.error},c.default.createElement(d.default,null,c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:p.h1},e):null,c.default.createElement("div",{style:p.desc},c.default.createElement("h2",{style:p.h2},t,"."))))}}]),n}(c.default.Component);t.default=g,g.displayName="ErrorPage",g.getInitialProps=f,g.origGetInitialProps=f;var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1VCc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("3slx")}])},"3slx":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return P})),n.d(t,"default",(function(){return q}));var a=n("q1tI"),r=n.n(a),l=n("nOHt"),i=n("eomm"),o=n.n(i),u=n("vUxr"),s=n("qtBi"),c=n.n(s),d=r.a.createElement;function m(e){var t=e.content;return d("div",{className:"max-w-2xl mx-auto"},d("div",{className:c.a.markdown,dangerouslySetInnerHTML:{__html:t}}))}var f=n("YFqc"),g=n.n(f),p=n("YSmr"),h=r.a.createElement;function v(){return h("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"},h(g.a,{href:"/"},h("a",{className:"hover:underline"},p.a)))}var x=n("i2FJ"),y=n("p9OW"),b=n("zK7a"),_=r.a.createElement;function w(e){var t=e.children;return _("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"},t)}var E=r.a.createElement;function N(e){var t=e.title,n=e.coverImage;e.date,e.author;return E(r.a.Fragment,null,E(w,null,t),E("div",{className:"mb-8 md:mb-16 sm:mx-0"},E(b.a,{title:t,src:n})))}var k=r.a.createElement;function I(e){var t=e.date,n=e.author;return k(r.a.Fragment,null,k("hr",{className:"mb-4"}),k("div",{className:"max-w-2xl mx-auto my-auto flex flex-row justify-between flex-wrap"},k("div",{className:"mb-4"},k(x.a,{name:n.name,picture:n.picture})),k("div",{className:"mb-4 text-md self-center"},"Posted"," ",k(y.a,{customClasses:"font-semibold",dateString:t}))))}var S=n("CafY"),C=n("8Kt/"),R=n.n(C),F=r.a.createElement,P=!0;function q(e){var t=e.post,n=(e.morePosts,e.preview),a=Object(l.useRouter)();return a.isFallback||(null===t||void 0===t?void 0:t.slug)?F(S.a,{preview:n},F(u.a,null,F(v,null),a.isFallback?F(w,null,"Loading\u2026"):F(r.a.Fragment,null,F("article",{className:"mb-32"},F(R.a,null,F("title",null,t.title),F("meta",{property:"og:image",content:t.ogImage.url})),F(N,{title:t.title,coverImage:t.coverImage}),F(m,{content:t.content}),F(I,{date:t.date,author:t.author}))))):F(o.a,{statusCode:404})}},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["1VCc",0,2,1,3]]]);