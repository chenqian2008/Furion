"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1736],{3007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(1402),["components"]),l={slug:"fileupload-download",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","upload","download"]},s=void 0,c={permalink:"/furion/blog/fileupload-download",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-02-02-fileupload-download.mdx",source:"@site/blog/2021-02-02-fileupload-download.mdx",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",description:"",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"furion",permalink:"/furion/blog/tags/furion"},{label:"furos",permalink:"/furion/blog/tags/furos"},{label:".net",permalink:"/furion/blog/tags/net"},{label:".netcore",permalink:"/furion/blog/tags/netcore"},{label:".net5",permalink:"/furion/blog/tags/net-5"},{label:"upload",permalink:"/furion/blog/tags/upload"},{label:"download",permalink:"/furion/blog/tags/download"}],readingTime:1.435,truncated:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://www.chinadot.net",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"fileupload-download",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","upload","download"]},prevItem:{title:"3. .NET 6 Preview 5 \u5c1d\u9c9c",permalink:"/furion/blog/net6-preview5"},nextItem:{title:"1. HttpContext \u5e94\u7528",permalink:"/furion/blog/httpcontext"}},p={authorsImageUrls:[void 0]},u=[{value:"\u6587\u4ef6\u4e0b\u8f7d",id:"\u6587\u4ef6\u4e0b\u8f7d",level:2},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6587\u4ef6\u4e0b\u8f7d"},"\u6587\u4ef6\u4e0b\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'[HttpGet, NonUnify]\npublic IActionResult FileDownload(string path, string fileName)\n{\n    string filePath = "\u8fd9\u91cc\u83b7\u53d6\u5b8c\u6574\u7684\u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84";\n    return new FileStreamResult(new FileStream(filePath, FileMode.Open), "application/octet-stream") { FileDownloadName = fileName };\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u524d\u7aef\u83b7\u53d6\u6587\u4ef6\u540d")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u524d\u7aef\u83b7\u53d6\u4e0d\u5230\u6587\u4ef6\u5939\uff0c\u53ef\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'_httpContextAccessor.HttpContext.Response.Headers.Add("Content-Disposition", $"attachment; filename={\u6587\u4ef6\u540d}");\n_httpContextAccessor.HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");\n')))),(0,o.kt)("h2",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'[HttpPost, NonUnify]\npublic async Task<IActionResult> UploadFileAsync(List<IFormFile> files)\n{\n    // \u4fdd\u5b58\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 uploads \u76ee\u5f55\n    var savePath = Path.Combine(App.HostEnvironment.ContentRootPath, "uploads");\n    if(!Directory.Exists(savePath)) Directory.CreateDirectory(savePath);\n\n    long size = files.Sum(f => f.Length);\n\n    foreach (var formFile in files)\n    {\n        if (formFile.Length > 0)\n        {\n            // \u907f\u514d\u6587\u4ef6\u540d\u91cd\u590d\uff0c\u91c7\u7528 GUID \u751f\u6210\n            var filePath = Path.Combine(savePath, Guid.NewGuid().ToString("N") + Path.GetExtension(formFile.FileName));  // \u53ef\u4ee5\u66ff\u4ee3\u4e3a\u4f60\u9700\u8981\u5b58\u50a8\u7684\u771f\u5b9e\u8def\u5f84\n\n            using (var stream = System.IO.File.Create(filePath))\n            {\n                await formFile.CopyToAsync(stream);\n            }\n        }\n    }\n\n    // \u5728\u52a8\u6001 API \u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700 OK \u548c IActionResult\n    return Ok(new { count = files.Count, size });\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u4f7f\u7528axios\u4e0a\u4f20\u6587\u4ef6,\u65b9\u6cd5\u83b7\u53d6\u5230\u53c2\u6570files.Count=0")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"axios\u8bf7\u6c42\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'    let formData = new FormData();\n    formData.append("files", this.file); //files\u9700\u4e0e\u65b9\u6cd5\u91cc\u7684\u53c2\u6570files\u540d\u79f0\u4e00\u6837\n    let config = {\n      headers: {\n        "Content-Type": "multipart/form-data",\n      },\n    };\n    axios.post(this.uploadURL, formData, config).then((res) => {//\u9700\u5f15\u5165axios\n      console.log(res);\n    });\n')))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);