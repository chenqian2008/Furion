(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(199)),c={id:"auth-control",title:"15. \u5b89\u5168\u9274\u6743",sidebar_label:"15. \u5b89\u5168\u9274\u6743"},o={unversionedId:"auth-control",id:"auth-control",isDocsHomePage:!1,title:"15. \u5b89\u5168\u9274\u6743",description:"15.1 \u4ec0\u4e48\u662f\u9274\u6743",source:"@site/docs\\auth-control.mdx",slug:"/auth-control",permalink:"/docs/auth-control",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/auth-control.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1614742250,sidebar_label:"15. \u5b89\u5168\u9274\u6743",sidebar:"docs",previous:{title:"14. \u5206\u5e03\u5f0f\u7f13\u5b58",permalink:"/docs/cache"},next:{title:"16. CORS \u8de8\u57df",permalink:"/docs/cors"}},b=[{value:"15.1 \u4ec0\u4e48\u662f\u9274\u6743",id:"151-\u4ec0\u4e48\u662f\u9274\u6743",children:[{value:"15.1.1 \u5e38\u89c1\u7684\u9274\u6743\u65b9\u5f0f",id:"1511-\u5e38\u89c1\u7684\u9274\u6743\u65b9\u5f0f",children:[]}]},{value:"15.2 \u5982\u4f55\u4f7f\u7528",id:"152-\u5982\u4f55\u4f7f\u7528",children:[{value:"15.2.1 \u6dfb\u52a0 <code>Cookie</code> \u6388\u6743",id:"1521-\u6dfb\u52a0-cookie-\u6388\u6743",children:[]},{value:"15.2.2 \u6dfb\u52a0 <code>Jwt</code> \u6388\u6743",id:"1522-\u6dfb\u52a0-jwt-\u6388\u6743",children:[]},{value:"15.2.3 \u6df7\u5408\u6388\u6743",id:"1523-\u6df7\u5408\u6388\u6743",children:[]}]},{value:"15.3 \u9ad8\u7ea7\u81ea\u5b9a\u4e49\u6388\u6743",id:"153-\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u6388\u6743",children:[{value:"15.3.1 <code>AppAuthorizeHandler</code>",id:"1531-appauthorizehandler",children:[]},{value:"15.3.2 \u5b8c\u5168\u81ea\u5b9a\u4e49\u6388\u6743",id:"1532-\u5b8c\u5168\u81ea\u5b9a\u4e49\u6388\u6743",children:[]}]},{value:"15.4 \u6388\u6743\u7279\u6027\u53ca\u5168\u5c40\u6388\u6743",id:"154-\u6388\u6743\u7279\u6027\u53ca\u5168\u5c40\u6388\u6743",children:[{value:"15.4.1 \u5168\u5c40\u6388\u6743",id:"1541-\u5168\u5c40\u6388\u6743",children:[]},{value:"15.4.2 \u533f\u540d\u8bbf\u95ee",id:"1542-\u533f\u540d\u8bbf\u95ee",children:[]}]},{value:"15.5 \u81ea\u52a8\u5237\u65b0 Token",id:"155-\u81ea\u52a8\u5237\u65b0-token",children:[{value:"15.5.1 \u540e\u7aef\u767b\u5f55\u90e8\u5206",id:"1551-\u540e\u7aef\u767b\u5f55\u90e8\u5206",children:[]},{value:"15.5.2 \u540e\u7aef\u6388\u6743 <code>Handler</code> \u90e8\u5206",id:"1552-\u540e\u7aef\u6388\u6743-handler-\u90e8\u5206",children:[]},{value:"15.5.3 \u5ba2\u6237\u7aef\u90e8\u5206",id:"1553-\u5ba2\u6237\u7aef\u90e8\u5206",children:[]}]},{value:"15.6 \u83b7\u53d6 <code>Jwt</code> \u5b58\u50a8\u7684\u4fe1\u606f",id:"156-\u83b7\u53d6-jwt-\u5b58\u50a8\u7684\u4fe1\u606f",children:[]},{value:"15.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"157-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"151-\u4ec0\u4e48\u662f\u9274\u6743"},"15.1 \u4ec0\u4e48\u662f\u9274\u6743"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u9274\u6743\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u79cd\u8eab\u4efd\u8ba4\u8bc1"),"\u3002"),Object(r.b)("p",null,"\u7531\u7528\u6237\u63d0\u4f9b\u51ed\u636e\uff0c\u7136\u540e\u5c06\u5176\u4e0e\u5b58\u50a8\u5728\u64cd\u4f5c\u7cfb\u7edf\u3001\u6570\u636e\u5e93\u3001\u5e94\u7528\u6216\u8d44\u6e90\u4e2d\u7684\u51ed\u636e\u8fdb\u884c\u6bd4\u8f83\u3002 \u5728\u6388\u6743\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u51ed\u636e\u5339\u914d\uff0c\u5219\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u6210\u529f\uff0c\u53ef\u6267\u884c\u5df2\u5411\u5176\u6388\u6743\u7684\u64cd\u4f5c\u3002 \u6388\u6743\u6307\u5224\u65ad\u5141\u8bb8\u7528\u6237\u6267\u884c\u7684\u64cd\u4f5c\u7684\u8fc7\u7a0b\u3002\n\u4e5f\u53ef\u4ee5\u5c06\u8eab\u4efd\u9a8c\u8bc1\u7406\u89e3\u4e3a\u8fdb\u5165\u7a7a\u95f4\uff08\u4f8b\u5982\u670d\u52a1\u5668\u3001\u6570\u636e\u5e93\u3001\u5e94\u7528\u6216\u8d44\u6e90\uff09\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u800c\u6388\u6743\u662f\u7528\u6237\u53ef\u4ee5\u5bf9\u8be5\u7a7a\u95f4\uff08\u670d\u52a1\u5668\u3001\u6570\u636e\u5e93\u6216\u5e94\u7528\uff09\u5185\u7684\u54ea\u4e9b\u5bf9\u8c61\u6267\u884c\u54ea\u4e9b\u64cd\u4f5c\u3002"),Object(r.b)("h3",{id:"1511-\u5e38\u89c1\u7684\u9274\u6743\u65b9\u5f0f"},"15.1.1 \u5e38\u89c1\u7684\u9274\u6743\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HTTP Basic Authentication"))),Object(r.b)("p",null,"\u8fd9\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP")," \u534f\u8bae\u5b9e\u73b0\u7684\u57fa\u672c\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u6211\u4eec\u5728\u6d4f\u89c8\u7f51\u9875\u65f6\uff0c\u4ece\u6d4f\u89c8\u5668\u6b63\u4e0a\u65b9\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u8981\u6c42\u6211\u4eec\u8f93\u5165\u8d26\u53f7\u5bc6\u7801\uff0c\u6b63\u662f\u4f7f\u7528\u4e86\u8fd9\u79cd\u8ba4\u8bc1\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Session + Cookie"))),Object(r.b)("p",null,"\u5229\u7528\u670d\u52a1\u5668\u7aef\u7684 session\uff08\u4f1a\u8bdd\uff09\u548c\u6d4f\u89c8\u5668\u7aef\u7684 cookie \u6765\u5b9e\u73b0\u524d\u540e\u7aef\u7684\u8ba4\u8bc1\uff0c\u7531\u4e8e http \u8bf7\u6c42\u65f6\u662f\u65e0\u72b6\u6001\u7684\uff0c\u670d\u52a1\u5668\u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u77e5\u9053\u5f53\u524d\u8bf7\u6c42\u4e4b\u524d\u6709\u6ca1\u6709\u6765\u8fc7\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5982\u679c\u8981\u8bb0\u5f55\u72b6\u6001\uff0c\u5c31\u9700\u8981\u5728\u670d\u52a1\u5668\u7aef\u521b\u5efa\u4e00\u4e2a\u4f1a\u8bdd(seesion),\u5c06\u540c\u4e00\u4e2a\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u90fd\u7ef4\u62a4\u5728\u5404\u81ea\u7684\u4f1a\u8bdd\u4e2d\uff0c\u6bcf\u5f53\u8bf7\u6c42\u5230\u8fbe\u670d\u52a1\u5668\u7aef\u7684\u65f6\u5019\uff0c\u5148\u53bb\u67e5\u4e00\u4e0b\u8be5\u5ba2\u6237\u7aef\u6709\u6ca1\u6709\u5728\u670d\u52a1\u5668\u7aef\u521b\u5efa seesion\uff0c\u5982\u679c\u6709\u5219\u5df2\u7ecf\u8ba4\u8bc1\u6210\u529f\u4e86\uff0c\u5426\u5219\u5c31\u6ca1\u6709\u8ba4\u8bc1\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Token"))),Object(r.b)("p",null,"\u5ba2\u6237\u7aef\u5728\u9996\u6b21\u767b\u9646\u4ee5\u540e\uff0c\u670d\u52a1\u7aef\u518d\u6b21\u63a5\u6536 ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u5c31\u53ea\u8ba4 ",Object(r.b)("inlineCode",{parentName:"p"},"Token")," \u4e86\uff0c\u8bf7\u6c42\u53ea\u8981\u6bcf\u6b21\u628a ",Object(r.b)("inlineCode",{parentName:"p"},"Token")," \u5e26\u4e0a\u5c31\u884c\u4e86\uff0c\u670d\u52a1\u5668\u7aef\u4f1a\u62e6\u622a\u6240\u6709\u7684\u8bf7\u6c42\uff0c\u7136\u540e\u6821\u9a8c ",Object(r.b)("inlineCode",{parentName:"p"},"Token")," \u7684\u5408\u6cd5\u6027\uff0c\u5408\u6cd5\u5c31\u653e\u884c\uff0c\u4e0d\u5408\u6cd5\u5c31\u8fd4\u56de 401\uff08\u9274\u6743\u5931\u8d25\uff09"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Token"),"\u9a8c\u8bc1\u6bd4\u8f83\u7075\u6d3b\uff0c\u9002\u7528\u4e8e\u5927\u90e8\u5206\u573a\u666f\u3002\u5e38\u7528\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Token")," \u9274\u6743\u65b9\u5f0f\u7684\u89e3\u51b3\u65b9\u6848\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"JWT"),"\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"JWT")," \u662f\u901a\u8fc7\u5bf9\u5e26\u6709\u76f8\u5173\u7528\u6237\u4fe1\u606f\u7684\u8fdb\u884c\u52a0\u5bc6\uff0c\u52a0\u5bc6\u7684\u65b9\u5f0f\u6bd4\u8f83\u7075\u6d3b\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u5177\u4f53\u8bbe\u8ba1\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OAuth"))),Object(r.b)("p",null,"OAuth\uff08\u5f00\u653e\u6388\u6743\uff09\u662f\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\uff0c\u5141\u8bb8\u7528\u6237\u6388\u6743\u7b2c\u4e09\u65b9\u7f51\u7ad9\u8bbf\u95ee\u4ed6\u4eec\u5b58\u50a8\u5728\u53e6\u5916\u7684\u670d\u52a1\u63d0\u4f9b\u8005\u4e0a\u7684\u4fe1\u606f\uff0c\u800c\u4e0d\u9700\u8981\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u63d0\u4f9b\u7ed9\u7b2c\u4e09\u65b9\u7f51\u7ad9\u6216\u5206\u4eab\u4ed6\u4eec\u6570\u636e\u7684\u6240\u6709\u5185\u5bb9\uff0c\u4e3a\u4e86\u4fdd\u62a4\u7528\u6237\u6570\u636e\u7684\u5b89\u5168\u548c\u9690\u79c1\uff0c\u7b2c\u4e09\u65b9\u7f51\u7ad9\u8bbf\u95ee\u7528\u6237\u6570\u636e\u524d\u90fd\u9700\u8981\u663e\u5f0f\u7684\u5411\u7528\u6237\u5f81\u6c42\u6388\u6743\u3002\u6211\u4eec\u5e38\u89c1\u7684\u63d0\u4f9b OAuth \u8ba4\u8bc1\u670d\u52a1\u7684\u5382\u5546\u6709\u652f\u4ed8\u5b9d\u3001QQ \u548c\u5fae\u4fe1\u3002"),Object(r.b)("p",null,"OAuth \u534f\u8bae\u53c8\u6709 1.0 \u548c 2.0 \u4e24\u4e2a\u7248\u672c\u3002\u76f8\u6bd4\u8f83 1.0 \u7248\uff0c2.0 \u7248\u6574\u4e2a\u6388\u6743\u9a8c\u8bc1\u6d41\u7a0b\u66f4\u7b80\u5355\u66f4\u5b89\u5168\uff0c\u4e5f\u662f\u76ee\u524d\u6700\u4e3b\u8981\u7684\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u65b9\u5f0f\u3002"),Object(r.b)("h2",{id:"152-\u5982\u4f55\u4f7f\u7528"},"15.2 \u5982\u4f55\u4f7f\u7528"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u914d\u7f6e\u4e4b\u524d")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5728\u6dfb\u52a0\u6388\u6743\u670d\u52a1\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd ",Object(r.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d ",Object(r.b)("inlineCode",{parentName:"p"},"Configure")," \u662f\u5426\u6dfb\u52a0\u4e86\u4ee5\u4e0b\u4e24\u4e2a\u4e2d\u95f4\u4ef6\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"app.UseAuthentication();\napp.UseAuthorization();\n")))),Object(r.b)("h3",{id:"1521-\u6dfb\u52a0-cookie-\u6388\u6743"},"15.2.1 \u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"h3"},"Cookie")," \u6388\u6743"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// Cookies\u5355\u72ec\u6388\u6743\nservices.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)\n        .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, b =>\n        {\n            b.LoginPath = "/Home/Login";\n        });\n')),Object(r.b)("h3",{id:"1522-\u6dfb\u52a0-jwt-\u6388\u6743"},"15.2.2 \u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"h3"},"Jwt")," \u6388\u6743"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"services.AddJwt();\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"JWT")," \u9274\u6743\u5e76\u672a\u5305\u542b\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9700\u8981\u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion.Extras.Authentication.JwtBearer")," \u62d3\u5c55\u5305\u3002"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 ",Object(r.b)("inlineCode",{parentName:"li"},"Jwt")," \u914d\u7f6e\uff08\u9ed8\u8ba4\u65e0\u9700\u914d\u7f6e\uff09")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "JWTSettings": {\n    "ValidateIssuerSigningKey": true, // \u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "IssuerSigningKey": "\u4f60\u7684\u5bc6\u94a5", // \u5bc6\u94a5\uff0cstring \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e16\n    "ValidateIssuer": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidIssuer": "\u7b7e\u53d1\u65b9", // \u7b7e\u53d1\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateAudience": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidAudience": "\u7b7e\u6536\u65b9", // \u7b7e\u6536\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateLifetime": true, // \u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\uff0c\u5efa\u8baetrue\n    "ExpiredTime": 20, // \u8fc7\u671f\u65f6\u95f4\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba420\u5206\u949f\n    "ClockSkew": 5 // \u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 5\u79d2\n  }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u751f\u6210 ",Object(r.b)("inlineCode",{parentName:"li"},"Token"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u751f\u6210 token\nvar accessToken = JWTEncryption.Encrypt(new Dictionary<string, object>()\n            {\n                { "UserId", user.Id },  // \u5b58\u50a8Id\n                { "Account",user.Account }, // \u5b58\u50a8\u7528\u6237\u540d\n            });\n')),Object(r.b)("h3",{id:"1523-\u6df7\u5408\u6388\u6743"},"15.2.3 \u6df7\u5408\u6388\u6743"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// JWT \u548c Cookies \u540c\u65f6\u6388\u6743\nservices.AddJwt(options =>\n{\n      options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;\n      options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;\n})\n.AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, b =>\n{\n       b.LoginPath = "/Home/Login";\n});\n')),Object(r.b)("h2",{id:"153-\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u6388\u6743"},"15.3 \u9ad8\u7ea7\u81ea\u5b9a\u4e49\u6388\u6743"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u7684\u9ad8\u7ea7\u7b56\u7565\u9274\u6743\u548c\u6388\u6743\u65b9\u5f0f\uff0c\u901a\u8fc7\u8be5\u7b56\u7565\u6388\u6743\u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u4efb\u4f55\u81ea\u5b9a\u4e49\u6388\u6743\u3002"),Object(r.b)("h3",{id:"1531-appauthorizehandler"},"15.3.1 ",Object(r.b)("inlineCode",{parentName:"h3"},"AppAuthorizeHandler")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"AppAuthorizeHandler")," \u7b56\u7565\u6388\u6743\u5904\u7406\u7a0b\u5e8f\u63d0\u4f9b\u57fa\u7c7b\uff0c\u53ea\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Handler")," \u7ee7\u627f\u5b83\u5373\u53ef\u3002\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"JwtHandler"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{20,12}","{20,12}":!0}),'using Furion.Authorization;\nusing Furion.Core;\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.IdentityModel.JsonWebTokens;\n\nnamespace Furion.Web.Core\n{\n    /// <summary>\n    /// JWT \u6388\u6743\u81ea\u5b9a\u4e49\u5904\u7406\u7a0b\u5e8f\n    /// </summary>\n    public class JwtHandler : AppAuthorizeHandler\n    {\n        /// <summary>\n        /// \u8bf7\u6c42\u7ba1\u9053\n        /// </summary>\n        /// <param name="context"></param>\n        /// <param name="httpContext"></param>\n        /// <returns></returns>\n        public override Task<bool> PipelineAsync(AuthorizationHandlerContext context, DefaultHttpContext httpContext)\n        {\n            // \u6b64\u5904\u5df2\u7ecf\u81ea\u52a8\u9a8c\u8bc1 Jwt token\u7684\u6709\u6548\u6027\u4e86\uff0c\u65e0\u9700\u624b\u52a8\u9a8c\u8bc1\n\n            // \u68c0\u67e5\u6743\u9650\uff0c\u5982\u679c\u65b9\u6cd5\u65f6\u5f02\u6b65\u7684\u5c31\u4e0d\u7528 Task.FromResult \u5305\u88f9\uff0c\u76f4\u63a5\u4f7f\u7528 async/await \u5373\u53ef\n            return Task.FromResult(CheckAuthorzie(httpContext));\n        }\n\n        /// <summary>\n        /// \u68c0\u67e5\u6743\u9650\n        /// </summary>\n        /// <param name="httpContext"></param>\n        /// <returns></returns>\n        private static bool CheckAuthorzie(DefaultHttpContext httpContext)\n        {\n            // \u83b7\u53d6\u6743\u9650\u7279\u6027\n            var securityDefineAttribute = httpContext.GetMetadata<SecurityDefineAttribute>();\n            if (securityDefineAttribute == null) return true;\n\n            return App.GetService<IAuthorizationManager>().CheckSecurity(securityDefineAttribute.ResourceId);\n        }\n    }\n}\n')),Object(r.b)("p",null,"\u4e4b\u540e\u6ce8\u518c ",Object(r.b)("inlineCode",{parentName:"p"},"JwtHandler")," \u5373\u53ef\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"services.AddJwt<JwtHandler>();\n")),Object(r.b)("h3",{id:"1532-\u5b8c\u5168\u81ea\u5b9a\u4e49\u6388\u6743"},"15.3.2 \u5b8c\u5168\u81ea\u5b9a\u4e49\u6388\u6743"),Object(r.b)("p",null,"\u6709\u4e9b\u65f6\u5019\u53ef\u80fd\u9488\u5bf9\u4e0d\u540c\u7684\u5e73\u53f0\u91c7\u7528\u4e0d\u4e00\u6837\u7684\u6388\u6743\u65b9\u5f0f\uff0c\u6bd4\u5982\u5408\u4f5c\u4fe1\u4efb\u7684\u7b2c\u4e09\u65b9\u673a\u6784\u53ef\u4ee5\u514d\u6388\u6743\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u91cd\u5199 ",Object(r.b)("inlineCode",{parentName:"p"},"HandleAsync")," \u65b9\u6cd5\u5373\u53ef\u3002\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{11-25}","{11-25}":!0}),"using Furion.Authorization;\nusing Furion.Core;\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Http;\nusing System.Threading.Tasks;\n\nnamespace Furion.Web.Core\n{\n    public class JwtHandler : AppAuthorizeHandler\n    {\n        public override async Task HandleAsync(AuthorizationHandlerContext context)\n        {\n            // \u5e38\u89c4\u6388\u6743\uff08\u53ef\u4ee5\u5224\u65ad\u4e0d\u662f\u7b2c\u4e09\u65b9\uff09\n            var isAuthenticated = context.User.Identity.IsAuthenticated;\n\n            // \u7b2c\u4e09\u65b9\u6388\u6743\u81ea\u5b9a\u4e49\n            if(\u662f\u7b2c\u4e09\u65b9){\n                foreach (var requirement in pendingRequirements)\n                {\n                    // \u6388\u6743\u6210\u529f\n                   context.Succeed(requirement);\n                }\n            }\n            // \u6388\u6743\u5931\u8d25\n            else context.Fail();\n        }\n    }\n}\n")),Object(r.b)("h2",{id:"154-\u6388\u6743\u7279\u6027\u53ca\u5168\u5c40\u6388\u6743"},"15.4 \u6388\u6743\u7279\u6027\u53ca\u5168\u5c40\u6388\u6743"),Object(r.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7684\u8def\u7531\u90fd\u662f\u5141\u8bb8\u533f\u540d\u8bbf\u95ee\u7684\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u5bf9\u67d0\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"Action")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"Controller")," \u8bbe\u5b9a\u6388\u6743\u8bbf\u95ee\uff0c\u53ea\u9700\u8981\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Action")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"Controller")," \u8d34 ",Object(r.b)("inlineCode",{parentName:"p"},"[AppAuthorize]")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"[Authorize]")," \u7279\u6027\u5373\u53ef\u3002"),Object(r.b)("p",null,"\u5982\u679c\u9700\u8981\u5bf9\u7279\u5b9a\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Action")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"Controller")," \u5141\u8bb8\u533f\u540d\u8bbf\u95ee\uff0c\u5219\u8d34 ",Object(r.b)("inlineCode",{parentName:"p"},"[AllowAnonymous]")," \u5373\u53ef\u3002"),Object(r.b)("h3",{id:"1541-\u5168\u5c40\u6388\u6743"},"15.4.1 \u5168\u5c40\u6388\u6743"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"services.AddJwt<JwtHandler>(enableGlobalAuthorize:true);\n")),Object(r.b)("h3",{id:"1542-\u533f\u540d\u8bbf\u95ee"},"15.4.2 \u533f\u540d\u8bbf\u95ee"),Object(r.b)("p",null,"\u5982\u679c\u9700\u8981\u5bf9\u7279\u5b9a\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Action")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"Controller")," \u5141\u8bb8\u533f\u540d\u8bbf\u95ee\uff0c\u5219\u8d34 ",Object(r.b)("inlineCode",{parentName:"p"},"[AllowAnonymous]")," \u5373\u53ef\u3002"),Object(r.b)("h2",{id:"155-\u81ea\u52a8\u5237\u65b0-token"},"15.5 \u81ea\u52a8\u5237\u65b0 Token"),Object(r.b)("h3",{id:"1551-\u540e\u7aef\u767b\u5f55\u90e8\u5206"},"15.5.1 \u540e\u7aef\u767b\u5f55\u90e8\u5206"),Object(r.b)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u6210\u529f\u4e4b\u540e\uff0c\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"p"},"accessToken")," \u5b57\u7b26\u4e32\uff0c\u4e4b\u540e\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"JWTEncryption.GenerateRefreshToken()")," \u83b7\u53d6 ",Object(r.b)("inlineCode",{parentName:"p"},"\u5237\u65b0Token"),"\uff0c\u5e76\u901a\u8fc7\u54cd\u5e94\u62a5\u6587\u5934\u8fd4\u56de\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{9}","{9}":!0}),'// token\nvar accessToken = JWTEncryption.Encrypt(new Dictionary<string, object>()\n            {\n                { "UserId", user.Id },  // \u5b58\u50a8Id\n                { "Account",user.Account }, // \u5b58\u50a8\u7528\u6237\u540d\n            });\n\n// \u83b7\u53d6\u5237\u65b0 token\nvar refreshToken = JWTEncryption.GenerateRefreshToken(accessToken, 30); // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5237\u65b0 token \u7684\u6709\u6548\u671f\uff0c\u9ed8\u8ba4\u4e09\u5341\u5929\n\n// \u8bbe\u7f6e\u8bf7\u6c42\u62a5\u6587\u5934\nhttpContextAccessor.HttpContext.Response.Headers["access-token"] = accessToken;\nhttpContextAccessor.HttpContext.Response.Headers["x-access-token"] = refreshToken;\n')),Object(r.b)("p",null,"\u7528\u6237\u767b\u5f55\u6210\u529f\u4e4b\u540e\u628a ",Object(r.b)("inlineCode",{parentName:"p"},"accessToken")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"refreshToken")," \u4e00\u8d77\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u5b58\u50a8\u8d77\u6765\u3002"),Object(r.b)("h3",{id:"1552-\u540e\u7aef\u6388\u6743-handler-\u90e8\u5206"},"15.5.2 \u540e\u7aef\u6388\u6743 ",Object(r.b)("inlineCode",{parentName:"h3"},"Handler")," \u90e8\u5206"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{16-28}","{16-28}":!0}),'using Furion.Authorization;\nusing Furion.Core;\nusing Furion.DataEncryption;\nusing Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.DependencyInjection;\nusing System.Threading.Tasks;\n\nnamespace Furion.Web.Core\n{\n    /// <summary>\n    /// JWT \u6388\u6743\u81ea\u5b9a\u4e49\u5904\u7406\u7a0b\u5e8f\n    /// </summary>\n    public class JwtHandler : AppAuthorizeHandler\n    {\n        /// <summary>\n        /// \u91cd\u5199 Handler \u6dfb\u52a0\u81ea\u52a8\u5237\u65b0\u6536\u53d6\u903b\u8f91\n        /// </summary>\n        /// <param name="context"></param>\n        /// <returns></returns>\n        public override async Task HandleAsync(AuthorizationHandlerContext context)\n        {\n            // \u81ea\u52a8\u5237\u65b0 token\n            if (JWTEncryption.AutoRefreshToken(context, context.GetCurrentHttpContext()))\n            {\n                await AuthorizeHandleAsync(context);\n            }\n            else context.Fail();    // \u6388\u6743\u5931\u8d25\n        }\n\n        /// <summary>\n        /// \u9a8c\u8bc1\u7ba1\u9053\uff0c\u4e5f\u5c31\u662f\u9a8c\u8bc1\u6838\u5fc3\u4ee3\u7801\n        /// </summary>\n        /// <param name="context"></param>\n        /// <param name="httpContext"></param>\n        /// <returns></returns>\n        public override Task<bool> PipelineAsync(AuthorizationHandlerContext context, DefaultHttpContext httpContext)\n        {\n            // \u68c0\u67e5\u6743\u9650\uff0c\u5982\u679c\u65b9\u6cd5\u65f6\u5f02\u6b65\u7684\u5c31\u4e0d\u7528 Task.FromResult \u5305\u88f9\uff0c\u76f4\u63a5\u4f7f\u7528 async/await \u5373\u53ef\n            return Task.FromResult(true);\n        }\n    }\n}\n')),Object(r.b)("h3",{id:"1553-\u5ba2\u6237\u7aef\u90e8\u5206"},"15.5.3 \u5ba2\u6237\u7aef\u90e8\u5206"),Object(r.b)("p",null,"\u5ba2\u6237\u7aef\u6bcf\u6b21\u8bf7\u6c42\u9700\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"accessToken")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"refreshToken")," \u653e\u5230\u8bf7\u6c42\u62a5\u6587\u5934\u4e2d\u4f20\u9001\u5230\u670d\u52a1\u7aef\uff0c\u683c\u5f0f\u4e3a\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Authorization: Bearer \u4f60\u7684token\nX-Authorization: Bearer \u4f60\u7684\u5237\u65b0token\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5728\u6b63\u5e38\u5f00\u53d1\u4e2d\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"refreshToken")," \u65e0\u9700\u6bcf\u6b21\u8bf7\u6c42\u643a\u5e26\uff0c\u800c\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"accessToken")," \u5373\u5c06\u8fc7\u671f\u4e4b\u540e\u643a\u5e26\u5373\u53ef\u3002\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u81ea\u884c\u5224\u65ad ",Object(r.b)("inlineCode",{parentName:"p"},"accessToken")," \u662f\u5426\u5373\u5c06\u8fc7\u671f\u3002"))),Object(r.b)("p",null,"\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"p"},"Token")," \u8fc7\u671f\uff0c\u90a3\u4e48 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u5c06\u81ea\u52a8\u6839\u636e\u6709\u6548\u671f\u5185\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"refreshToken")," \u81ea\u52a8\u751f\u6210\u65b0\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"AceessToken"),"\uff0c\u5e76\u5728 ",Object(r.b)("strong",{parentName:"p"},"\u54cd\u5e94\u62a5\u6587")," \u4e2d\u8fd4\u56de\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"access-token: \u65b0\u7684token\nx-access-token: \u65b0\u7684\u5237\u65b0token\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5b58\u50a8\u65b0\u7684 Token")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u524d\u7aef\u9700\u8981\u83b7\u53d6 ",Object(r.b)("strong",{parentName:"p"},"\u54cd\u5e94\u62a5\u6587")," \u65b0\u7684 token \u548c\u5237\u65b0 token \u66ff\u6362\u4e4b\u524d\u5728\u5ba2\u6237\u5904\u5b58\u50a8\u65e7\u7684 token \u548c\u5237\u65b0 token\u3002"))),Object(r.b)("h2",{id:"156-\u83b7\u53d6-jwt-\u5b58\u50a8\u7684\u4fe1\u606f"},"15.6 \u83b7\u53d6 ",Object(r.b)("inlineCode",{parentName:"h2"},"Jwt")," \u5b58\u50a8\u7684\u4fe1\u606f"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u83b7\u53d6 `Jwt` \u5b58\u50a8\u7684\u4fe1\u606f\nvar userId = App.User?.FindFirstValue("\u952e");\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6ce8\u610f\u5f15\u5165 ",Object(r.b)("inlineCode",{parentName:"strong"},"System.Security.Claims")," \u547d\u540d\u7a7a\u95f4")),Object(r.b)("h2",{id:"157-\u53cd\u9988\u4e0e\u5efa\u8bae"},"15.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(r.b)("inlineCode",{parentName:"p"},"\u9274\u6743\u6388\u6743")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/aspnet/core/security/?view=aspnetcore-5.0"}),"ASP.NET Core - \u5b89\u5168\u548c\u6807\u8bc6")," \u7ae0\u8282\u3002"))))}p.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||r;return t?i.a.createElement(m,o(o({ref:n},l),{},{components:t})):i.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);