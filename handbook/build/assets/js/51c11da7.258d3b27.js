"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8832],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7140:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],o={id:"dbcontext-sql-proxy",title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",sidebar_label:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406"},s=void 0,c={unversionedId:"dbcontext-sql-proxy",id:"dbcontext-sql-proxy",isDocsHomePage:!1,title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",description:"9.17.1 \u5173\u4e8e Sql \u4ee3\u7406",source:"@site/docs/dbcontext-sql-proxy.mdx",sourceDirName:".",slug:"/dbcontext-sql-proxy",permalink:"/furion/docs/dbcontext-sql-proxy",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-sql-proxy.mdx",tags:[],version:"current",lastUpdatedBy:"sgg",lastUpdatedAt:1629270643,formattedLastUpdatedAt:"8/18/2021",frontMatter:{id:"dbcontext-sql-proxy",title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",sidebar_label:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406"},sidebar:"docs",previous:{title:"9.16 Sql \u6a21\u677f",permalink:"/furion/docs/dbcontext-sql-template"},next:{title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728",permalink:"/furion/docs/dbcontext-multi-database"}},d=[{value:"9.17.1 \u5173\u4e8e <code>Sql</code> \u4ee3\u7406",id:"9171-\u5173\u4e8e-sql-\u4ee3\u7406",children:[],level:2},{value:"9.17.2 \u4e86\u89e3 <code>ISqlDispatchProxy</code>",id:"9172-\u4e86\u89e3-isqldispatchproxy",children:[],level:2},{value:"9.17.3 \u5f00\u59cb\u9886\u7565 <code>Sql</code> \u4ee3\u7406",id:"9173-\u5f00\u59cb\u9886\u7565-sql-\u4ee3\u7406",children:[{value:"9.17.3.1 \u6784\u9020\u51fd\u6570\u65b9\u5f0f",id:"91731-\u6784\u9020\u51fd\u6570\u65b9\u5f0f",children:[],level:3},{value:"9.17.3.2 \u65b9\u6cd5\u53c2\u6570\u6ce8\u5165",id:"91732-\u65b9\u6cd5\u53c2\u6570\u6ce8\u5165",children:[],level:3},{value:"9.17.3.3 <code>Db.GetSqlDispatchProxy&lt;ISql&gt;()</code>",id:"91733-dbgetsqldispatchproxyisql",children:[],level:3}],level:2},{value:"9.17.4 <code>Sql</code> \u64cd\u4f5c",id:"9174-sql-\u64cd\u4f5c",children:[{value:"9.17.4.1 \u8fd4\u56de <code>DataTable</code>",id:"91741-\u8fd4\u56de-datatable",children:[],level:3},{value:"9.17.4.2 \u8fd4\u56de <code>List&lt;T&gt;</code>",id:"91742-\u8fd4\u56de-listt",children:[],level:3},{value:"9.17.4.3 \u8fd4\u56de <code>DataSet</code>",id:"91743-\u8fd4\u56de-dataset",children:[],level:3},{value:"9.17.4.4 \u8fd4\u56de <code>Tuple&lt;T1,...T8&gt;</code>",id:"91744-\u8fd4\u56de-tuplet1t8",children:[],level:3},{value:"9.17.4.5 \u8fd4\u56de <code>\u5355\u884c\u5355\u5217</code>",id:"91745-\u8fd4\u56de-\u5355\u884c\u5355\u5217",children:[],level:3},{value:"9.17.4.6 \u65e0\u8fd4\u56de\u503c",id:"91746-\u65e0\u8fd4\u56de\u503c",children:[],level:3}],level:2},{value:"9.17.5 <code>\u5b58\u50a8\u8fc7\u7a0b</code> \u64cd\u4f5c",id:"9175-\u5b58\u50a8\u8fc7\u7a0b-\u64cd\u4f5c",children:[{value:"9.17.5.1 \u8fd4\u56de <code>DataTable</code>",id:"91751-\u8fd4\u56de-datatable",children:[],level:3},{value:"9.17.5.2 \u8fd4\u56de <code>List&lt;T&gt;</code>",id:"91752-\u8fd4\u56de-listt",children:[],level:3},{value:"9.17.5.3 \u8fd4\u56de <code>DataSet</code>",id:"91753-\u8fd4\u56de-dataset",children:[],level:3},{value:"9.17.5.4 \u8fd4\u56de <code>Tuple(T1,...T8)</code>",id:"91754-\u8fd4\u56de-tuplet1t8",children:[],level:3},{value:"9.17.5.5 \u8fd4\u56de <code>\u5355\u884c\u5355\u5217</code>",id:"91755-\u8fd4\u56de-\u5355\u884c\u5355\u5217",children:[],level:3},{value:"9.17.5.6 \u65e0\u8fd4\u56de\u503c",id:"91756-\u65e0\u8fd4\u56de\u503c",children:[],level:3},{value:"9.17.5.7 \u5e26 <code>OUTPUT/RETURN</code> \u8fd4\u56de",id:"91757-\u5e26-outputreturn-\u8fd4\u56de",children:[],level:3}],level:2},{value:"9.17.6 <code>\u51fd\u6570</code> \u64cd\u4f5c",id:"9176-\u51fd\u6570-\u64cd\u4f5c",children:[],level:2},{value:"9.17.7 <code>Sql</code> \u6a21\u677f\u66ff\u6362",id:"9177-sql-\u6a21\u677f\u66ff\u6362",children:[],level:2},{value:"9.17.8 \u5207\u6362\u6570\u636e\u5e93",id:"9178-\u5207\u6362\u6570\u636e\u5e93",children:[{value:"9.17.8.1 \u5355\u4e2a\u65b9\u6cd5\u65b9\u5f0f",id:"91781-\u5355\u4e2a\u65b9\u6cd5\u65b9\u5f0f",children:[],level:3},{value:"9.17.8.2 \u63a5\u53e3\u65b9\u5f0f",id:"91782-\u63a5\u53e3\u65b9\u5f0f",children:[],level:3},{value:"9.17.8.3 \u8fd0\u884c\u65f6 <code>.Change</code> \u65b9\u6cd5\u5207\u6362",id:"91783-\u8fd0\u884c\u65f6-change-\u65b9\u6cd5\u5207\u6362",children:[],level:3}],level:2},{value:"9.17.9 <code>Sql</code> \u4ee3\u7406\u62e6\u622a",id:"9179-sql-\u4ee3\u7406\u62e6\u622a",children:[],level:2},{value:"9.17.10 \u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4",id:"91710-\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4",children:[],level:2},{value:"9.17.11 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"91711-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"9171-\u5173\u4e8e-sql-\u4ee3\u7406"},"9.17.1 \u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"h2"},"Sql")," \u4ee3\u7406"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u64cd\u4f5c\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5927\u5927\u63d0\u9ad8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4e66\u5199\u6548\u7387\uff0c\u800c\u4e14\u540e\u671f\u6781\u6613\u7ef4\u62a4\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u5c5e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u4e00\u4e2a\u9ad8\u7ea7\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"9172-\u4e86\u89e3-isqldispatchproxy"},"9.17.2 \u4e86\u89e3 ",(0,i.kt)("inlineCode",{parentName:"h2"},"ISqlDispatchProxy")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ISqlDispatchProxy")," \u63a5\u53e3\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b9e\u73b0",(0,i.kt)("strong",{parentName:"p"},"\u88ab\u4ee3\u7406\u63a5\u53e3"),"\u7684\u552f\u4e00\u4f9d\u8d56\uff0c\u4efb\u4f55\u516c\u5f00\u7684\u63a5\u53e3\u4e00\u65e6\u96c6\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ISqlDispatchProxy")," \u63a5\u53e3\uff0c\u90a3\u4e48\u8fd9\u4e2a\u63a5\u53e3\u5c31\u662f",(0,i.kt)("strong",{parentName:"p"},"\u88ab\u6258\u7ba1\u62e6\u622a"),"\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u64cd\u4f5c\u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u7b80\u5355\u5b9a\u4e49\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Sql \u4ee3\u7406\u63a5\u53e3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,5}","{1,5}":!0},"using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n    }\n}\n")),(0,i.kt)("p",null,"\u4e00\u65e6\u8fd9\u4e2a\u63a5\u53e3\u7ee7\u627f\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ISqlDispatchProxy"),"\uff0c\u90a3\u4e48\u5b83\u5c31\u4f1a",(0,i.kt)("strong",{parentName:"p"},"\u52a8\u6001\u521b\u5efa\u63a5\u53e3\u5b9e\u4f8b\uff0c\u800c\u4e14\u652f\u6301\u4f9d\u8d56\u6ce8\u5165/\u63a7\u5236\u53cd\u8f6c\u83b7\u53d6\u5b9e\u4f8b"),"\u3002"),(0,i.kt)("h2",{id:"9173-\u5f00\u59cb\u9886\u7565-sql-\u4ee3\u7406"},"9.17.3 \u5f00\u59cb\u9886\u7565 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Sql")," \u4ee3\u7406"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u5c06\u901a\u8fc7\u591a\u4e2a\u4f8b\u5b50\u6765\u6f14\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u7684\u7528\u6cd5\uff0c\u4e3a\u4ec0\u4e48\u63a8\u8350\u8fd9\u79cd\u65b9\u5f0f\u64cd\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql"),"\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u5404\u79cd\u65b9\u5f0f\u83b7\u53d6\u5b9e\u4f8b\uff1a"),(0,i.kt)("h3",{id:"91731-\u6784\u9020\u51fd\u6570\u65b9\u5f0f"},"9.17.3.1 \u6784\u9020\u51fd\u6570\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1-2}","{1-2}":!0},"private readonly Isql _sql;\npublic FurionService(Isql sql)\n{\n    _sql = sql;\n}\n")),(0,i.kt)("h3",{id:"91732-\u65b9\u6cd5\u53c2\u6570\u6ce8\u5165"},"9.17.3.2 \u65b9\u6cd5\u53c2\u6570\u6ce8\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},"public async Task<List<PersonDto>> GetAll([FromServices] Isql, string keyword)\n{\n}\n")),(0,i.kt)("h3",{id:"91733-dbgetsqldispatchproxyisql"},"9.17.3.3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Db.GetSqlDispatchProxy<ISql>()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var sql = Db.GetSqlDispatchProxy<ISql>();\n")),(0,i.kt)("h2",{id:"9174-sql-\u64cd\u4f5c"},"9.17.4 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Sql")," \u64cd\u4f5c"),(0,i.kt)("h3",{id:"91741-\u8fd4\u56de-datatable"},"9.17.4.1 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"DataTable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{8,12,16,20}","{8,12,16,20}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u57fa\u5143\u7c7b\u578b\n        [SqlExecute("select * from person where id >@id and name like @name")]\n        DataTable GetPerson(int id, string name);\n\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u5bf9\u8c61\u7c7b\u578b\n        [SqlExecute("select * from person where id >@id and name like @name")]\n        DataTable GetPerson(MyParam paras);\n\n        // \u6267\u884c\u5b58\u50a8\u8fc7\u7a0b sql\uff0c\u652f\u6301\u8bbe\u7f6e\u53c2\u6570\u7c7b\u578b\n        [SqlExecute("exec PROP_NAME @id", CommandType = CommandType.StoredProcedure)]\n        DataTable GetPerson(int id);\n\n        // \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\n        [SqlExecute("select * from person"), SqlDbContextLocator(typeof(MySqlDbContextLocator))]\n        DataTable GetPerson();\n\n        // \u5f02\u6b65\u65b9\u5f0f\n        [SqlExecute("select * from person"), SqlDbContextLocator(typeof(MySqlDbContextLocator))]\n        Task<DataTable> GetPersonAsync();\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8e\u53c2\u6570")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u53c2\u6570\u67e5\u627e\u89c4\u5219\uff1a"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u65b9\u6cd5\u7684\u53c2\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u57fa\u5143\u7c7b\u578b"),"\uff08\u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u503c\u7c7b\u578b"),"\uff09\uff0c\u5219\u81ea\u52a8\u5c06\u8fd9\u4e9b\u7c7b\u578b\u7ec4\u5408\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary<string, object>")," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u53c2\u6570\u3002\u547d\u4ee4\u53c2\u6570\u53ef\u4f7f\u7528\u65b9\u6cd5\u540c\u540d\u53c2\u6570\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," \u7b26\u53f7\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u65b9\u6cd5\u7684\u53c2\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7c7b\u7c7b\u578b"),"\uff0c\u90a3\u4e48\u81ea\u52a8\u904d\u5386\u8be5\u7c7b\u516c\u5f00\u5b9e\u4f8b\u5c5e\u6027\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"DbParameter[]")," \u6570\u7ec4\uff0c\u6bcf\u4e00\u4e2a\u5c5e\u6027\u540d\u90fd\u5c06\u662f\u547d\u4ee4\u53c2\u6570\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyModel\n{\n    public int Id {get;set;}\n    public string Name {get; set;}\n}\n")),(0,i.kt)("p",{parentName:"div"},"\u90a3\u4e48 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5c5e\u6027\u540d\u4f5c\u4e3a\u53c2\u6570\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from person where id > @id and name = @name;\n")))),(0,i.kt)("h3",{id:"91742-\u8fd4\u56de-listt"},"9.17.4.2 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"List<T>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{8,12,16,20}","{8,12,16,20}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u57fa\u5143\u7c7b\u578b\n        [SqlExecute("select * from person where id >@id and name like @name")]\n        List<Person> GetPerson(int id, string name);\n\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u5bf9\u8c61\u7c7b\u578b\n        [SqlExecute("select * from person where id >@id and name like @name")]\n        List<Person> GetPerson(MyParam paras);\n\n        // \u6267\u884c\u5b58\u50a8\u8fc7\u7a0b sql\uff0c\u652f\u6301\u8bbe\u7f6e\u53c2\u6570\u7c7b\u578b\n        [SqlExecute("exec PROP_NAME @id", CommandType = CommandType.StoredProcedure)]\n        List<Person> GetPerson(int id);\n\n        // \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\n        [SqlExecute("select * from person"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\n        List<Person> GetPerson();\n\n        // \u5f02\u6b65\u65b9\u5f0f\n        [SqlExecute("select * from person"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\n        Task<List<Person>> GetPersonAsync();\n    }\n}\n')),(0,i.kt)("h3",{id:"91743-\u8fd4\u56de-dataset"},"9.17.4.3 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"DataSet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{8-10,14-16,20-22,26-28,32-35}","{8-10,14-16,20-22,26-28,32-35}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u57fa\u5143\u7c7b\u578b\n        [SqlExecute(@"\n            select * from person where id >@id and name like @name;\n            select top 10 * from student where Id >@id;")]\n        DataSet GetData(int id, string name);\n\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u5bf9\u8c61\u7c7b\u578b\n        [SqlExecute(@"\n            select * from person where id >@id and name like @name;\n            select top 10 * from student where Id >@id;")]\n        DataSet GetData(MyParam paras);\n\n        // \u6267\u884c\u5b58\u50a8\u8fc7\u7a0b sql\uff0c\u652f\u6301\u8bbe\u7f6e\u53c2\u6570\u7c7b\u578b\n        [SqlExecute(@"\n            exec PROP_NAME @id;\n            select * from person;", CommandType = CommandType.StoredProcedure)]\n        DataSet GetData(int id);\n\n        // \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\n        [SqlExecute(@"\n            select * from person;\n            select * from student;"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\n        DataSet GetData();\n\n        // \u5f02\u6b65\u65b9\u5f0f\n        [SqlExecute(@"\n            select * from person;\n            select * from student;\n            select 1;"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\n        Task<DataSet> GetDataAsync());\n    }\n}\n')),(0,i.kt)("h3",{id:"91744-\u8fd4\u56de-tuplet1t8"},"9.17.4.4 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"Tuple<T1,...T8>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{8-10,14-16,20-22,26-28,32-35}","{8-10,14-16,20-22,26-28,32-35}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u57fa\u5143\u7c7b\u578b\n        [SqlExecute(@"\n            select * from person where id >@id and name like @name;\n            select top 10 * from student where Id >@id;")]\n        (List<Person>,List<Student>) GetData(int id, string name);\n\n        // \u6267\u884csql\u5e76\u4f20\u5165\u53c2\u6570\uff0c\u5bf9\u8c61\u7c7b\u578b\n        [SqlExecute(@"\n            select * from person where id >@id and name like @name;\n            select top 10 * from student where Id >@id;")]\n        (List<Person>,List<Student>) GetData(MyParam paras);\n\n        // \u6267\u884c\u5b58\u50a8\u8fc7\u7a0b sql\uff0c\u652f\u6301\u8bbe\u7f6e\u53c2\u6570\u7c7b\u578b\n        [SqlExecute(@"\n            exec PROP_NAME @id;\n            select * from person;", CommandType = CommandType.StoredProcedure)]\n        (List<Person>,List<Student>) GetData(int id);\n\n        // \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\n        [SqlExecute(@"\n            select * from person;\n            select * from student;"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\n        (List<Person>,List<Student>) GetData();\n\n        // \u5f02\u6b65\u65b9\u5f0f\n        [SqlExecute(@"\n            select * from person;\n            select * from student;\n            select 1;"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\n        Task<(List<Person>,List<Student>,List<int>)> GetDataAsync();\n    }\n}\n')),(0,i.kt)("h3",{id:"91745-\u8fd4\u56de-\u5355\u884c\u5355\u5217"},"9.17.4.5 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"\u5355\u884c\u5355\u5217")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlExecute("select Name from person where id = @id")]\n        string GetValue(int id);\n\n        [SqlExecute("select age from person where id = @id")]\n        int GetValue(int id);\n\n        [SqlExecute("select Name from person where id = @id")]\n        Task<string> GetValueAsync(int id);\n    }\n}\n')),(0,i.kt)("h3",{id:"91746-\u65e0\u8fd4\u56de\u503c"},"9.17.4.6 \u65e0\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlExecute("insert into person(Name,Age) values(@name,@age)")]\n        void Insert(MyParam dto);\n\n        [SqlExecute("delete from person where id = @id")]\n        void Delete(int id);\n\n        [SqlExecute("update person set name=@name where id=@id")]\n        void Update(int id, string name);\n    }\n}\n')),(0,i.kt)("h2",{id:"9175-\u5b58\u50a8\u8fc7\u7a0b-\u64cd\u4f5c"},"9.17.5 ",(0,i.kt)("inlineCode",{parentName:"h2"},"\u5b58\u50a8\u8fc7\u7a0b")," \u64cd\u4f5c"),(0,i.kt)("h3",{id:"91751-\u8fd4\u56de-datatable"},"9.17.5.1 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"DataTable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        DataTable GetPersons(MyParam dto);\n\n        [SqlProcedure("PROC_Name")]\n        DataTable GetPersons(int id);\n\n        [SqlProcedure("PROC_Name")]\n        DataTable GetPersons(int id, string name);\n    }\n}\n')),(0,i.kt)("h3",{id:"91752-\u8fd4\u56de-listt"},"9.17.5.2 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"List<T>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        List<Person> GetPersons(MyParam dto);\n\n        [SqlProcedure("PROC_Name")]\n        List<Person> GetPersons(int id);\n\n        [SqlProcedure("PROC_Name")]\n        List<Person> GetPersons(int id, string name);\n    }\n}\n')),(0,i.kt)("h3",{id:"91753-\u8fd4\u56de-dataset"},"9.17.5.3 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"DataSet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        DataSet GetData(MyParam dto);\n\n        [SqlProcedure("PROC_Name")]\n        DataSet GetData(int id);\n\n        [SqlProcedure("PROC_Name")]\n        DataSet GetData(int id, string name);\n    }\n}\n')),(0,i.kt)("h3",{id:"91754-\u8fd4\u56de-tuplet1t8"},"9.17.5.4 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"Tuple(T1,...T8)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        (List<Person>, List<Student>) GetData(MyParam dto);\n\n        [SqlProcedure("PROC_Name")]\n        (List<Person>, List<Student>) GetData(int id);\n\n        [SqlProcedure("PROC_Name")]\n        (List<Person>, List<Student>, Person, int) GetData(int id, string name);\n    }\n}\n')),(0,i.kt)("h3",{id:"91755-\u8fd4\u56de-\u5355\u884c\u5355\u5217"},"9.17.5.5 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"\u5355\u884c\u5355\u5217")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        object GetValue(MyParam dto);\n\n        [SqlProcedure("PROC_Name")]\n        string GetValue(int id);\n\n        [SqlProcedure("PROC_Name")]\n        int GetValue(int id, string name);\n    }\n}\n')),(0,i.kt)("h3",{id:"91756-\u65e0\u8fd4\u56de\u503c"},"9.17.5.6 \u65e0\u8fd4\u56de\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        void GetValue(MyParam dto);\n\n        [SqlProcedure("PROC_Name")]\n        void GetValue(int id);\n\n        [SqlProcedure("PROC_Name")]\n        void GetValue(int id, string name);\n    }\n}\n')),(0,i.kt)("h3",{id:"91757-\u5e26-outputreturn-\u8fd4\u56de"},"9.17.5.7 \u5e26 ",(0,i.kt)("inlineCode",{parentName:"h3"},"OUTPUT/RETURN")," \u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10,13}","{7,10,13}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlProcedure("PROC_Name")]\n        ProcedureOutputResult GetOutput(ProcOutputModel pams);\n\n        [SqlProcedure("PROC_Name")]\n        ProcedureOutputResult GetOutput(ProcOutputModel pams);\n\n        [SqlProcedure("PROC_Name")]\n        ProcedureOutputResult<(List<Person>, List<Student>)> GetOutput(ProcOutputModel pams);\n    }\n}\n')),(0,i.kt)("h2",{id:"9176-\u51fd\u6570-\u64cd\u4f5c"},"9.17.6 ",(0,i.kt)("inlineCode",{parentName:"h2"},"\u51fd\u6570")," \u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7,10}","{7,10}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Application\n{\n    public interface ISql : ISqlDispatchProxy\n    {\n        [SqlFunction("FN_Name")]    // \u6807\u91cf\u51fd\u6570\n        string GetValue(MyParam dto);\n\n        [SqlProcedure("FN_Name")]   // \u8868\u503c\u51fd\u6570\n        List<Person> GetPersons(int id);\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u4f1a\u81ea\u52a8\u5224\u65ad\u8fd4\u56de\u503c\u7136\u540e\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u51fd\u6570\u7c7b\u578b\u3002"))),(0,i.kt)("h2",{id:"9177-sql-\u6a21\u677f\u66ff\u6362"},"9.17.7 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f\u66ff\u6362"),(0,i.kt)("p",null,"\u5728\u6700\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"1.18.3")," \u7248\u672c\u4e2d\u63d0\u4f9b\u4e86\u6a21\u677f\u66ff\u6362\u529f\u80fd\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'[SqlExecute("select * from person where id > {id} and name like {name} and age > {user.Age}")]\nList<Person> GetPerson(int id, string name, User user);\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4e24\u8005\u533a\u522b")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6a21\u677f\u5b57\u7b26\u4e32\u6709\u522b\u4e8e\u547d\u4ee4\u53c2\u6570\u66ff\u6362\uff0c\u6a21\u677f\u5b57\u7b26\u4e32\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"{ }")," \u65b9\u5f0f\uff0c\u8fd0\u884c\u65f6\u76f4\u63a5\u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u5185\u5bb9\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," \u800c\u662f\u8f6c\u6362\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"DbParameter")," \u53c2\u6570\u3002"))),(0,i.kt)("h2",{id:"9178-\u5207\u6362\u6570\u636e\u5e93"},"9.17.8 \u5207\u6362\u6570\u636e\u5e93"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u65b9\u5f0f\u7684\u652f\u6301\u4e09\u79cd\u5207\u6362\u6570\u636e\u5e93\u7684\u65b9\u5f0f\uff1a"),(0,i.kt)("h3",{id:"91781-\u5355\u4e2a\u65b9\u6cd5\u65b9\u5f0f"},"9.17.8.1 \u5355\u4e2a\u65b9\u6cd5\u65b9\u5f0f"),(0,i.kt)("p",null,"\u4e3b\u8981\u901a\u8fc7\u5728\u65b9\u6cd5\u4e0a\u8d34 ",(0,i.kt)("inlineCode",{parentName:"p"},"[SqlDbContextLocator]")," \u7279\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},'[SqlExecute("select * from person"), SqlDbContextLocator(typeof(MySqlDbContextLocator)]\nList<Person> GetPerson();\n')),(0,i.kt)("h3",{id:"91782-\u63a5\u53e3\u65b9\u5f0f"},"9.17.8.2 \u63a5\u53e3\u65b9\u5f0f"),(0,i.kt)("p",null,"\u5728\u63a5\u53e3\u4e2d\u8d34 ",(0,i.kt)("inlineCode",{parentName:"p"},"[SqlDbContextLocator]")," \u7279\u6027\uff0c\u6b64\u65b9\u5f0f\u4e0b\uff0c\u63a5\u53e3\u6240\u6709\u65b9\u6cd5\u5c06\u91c7\u7528\u6307\u5b9a\u7684\u6570\u636e\u5e93\u6267\u884c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},'[SqlDbContextLocator(typeof(MySqlDbContextLocator)]\npublic interface ISql : ISqlDispatchProxy\n{\n    [SqlFunction("FN_Name")]    // \u6807\u91cf\u51fd\u6570\n    string GetValue(MyParam dto);\n\n    [SqlProcedure("FN_Name")]   // \u8868\u503c\u51fd\u6570\n    List<Person> GetPersons(int id);\n}\n')),(0,i.kt)("h3",{id:"91783-\u8fd0\u884c\u65f6-change-\u65b9\u6cd5\u5207\u6362"},"9.17.8.3 \u8fd0\u884c\u65f6 ",(0,i.kt)("inlineCode",{parentName:"h3"},".Change")," \u65b9\u6cd5\u5207\u6362"),(0,i.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u4e24\u79cd ",(0,i.kt)("inlineCode",{parentName:"p"},"\u9759\u6001")," \u914d\u7f6e\u65b9\u5f0f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u8fd8\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001")," \u65b9\u5f0f\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,6}","{2,6}":!0},"// \u5c06 sql \u4ee3\u7406\u6570\u636e\u5e93\u5207\u6362\u6210\u7279\u5b9a\u6570\u636e\u5e93\n_sql.Change<MySqlDbContextLocator>();\n_sql.GetPerson();\n\n// \u591a\u6b21\u5207\u6362\n_sql.Change<OracleDbContextLocator>();\n_sql.GetPerson();\n\n// \u8fd8\u652f\u6301\u91cd\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u4e3a\u521d\u59cb\u72b6\u6001\n_sql.ResetIt();\n_sql.GetPerson();\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8e\u4f18\u5148\u7ea7\u95ee\u9898")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},".Change<>")," \u4f18\u5148\u7ea7\u5927\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"\u65b9\u6cd5\u8d34 [SqlDbContextLocator]")," \u5927\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"\u63a5\u53e3\u8d34 [SqlDbContextLocator]"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContextLocator")," \u5c5e\u6027\uff0c\u5219\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"MasterDbContextLocator"),"\u3002"))),(0,i.kt)("h2",{id:"9179-sql-\u4ee3\u7406\u62e6\u622a"},"9.17.9 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Sql")," \u4ee3\u7406\u62e6\u622a"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion v2.13 +")," \u7248\u672c\u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u62e6\u622a\u529f\u80fd\uff0c\u53ef\u4ee5\u7be1\u6539\u7279\u5b9a\u65b9\u6cd5\u6216\u6240\u6709\u4ee3\u7406\u65b9\u6cd5\u5b9e\u9645\u6267\u884c\u7684\u53c2\u6570\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql\u8bed\u53e5\u3001\u53c2\u6570\u3001\u6267\u884c\u5bf9\u8c61\u7b49\u7b49"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u82e5\u5728 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Sql")," \u4ee3\u7406\u4e2d\u5b9e\u73b0\u62e6\u622a\u529f\u80fd\uff0c\u5fc5\u987b\u6ee1\u8db3\u4e24\u4e2a\u6761\u4ef6"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," \u9759\u6001\u65b9\u6cd5\u4e14\u8fd4\u56de\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"void")," \u4e14\u53ea\u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"SqlProxyMethod")," \u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u5fc5\u987b\u8d34 ",(0,i.kt)("inlineCode",{parentName:"li"},"[Interceptor]")," \u7279\u6027")),(0,i.kt)("p",null,"\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9,13-17,20-24,26-30,32-36}","{9,13-17,20-24,26-30,32-36}":!0},'public interface ISql : ISqlDispatchProxy\n{\n    [SqlFunction("FN_Name")]\n    string GetValue(MyParam dto);\n\n    [SqlProcedure("FN_Name")]\n    List<Person> GetPersons(int id);\n\n    [SqlExecute("select name from person", InterceptorId = "GetPersonsByName")] // \u901a\u8fc7 InterceptorId \u89e3\u51b3\u65b9\u6cd5\u540d\u91cd\u8f7d\u95ee\u9898\n    Task<List<string>> GetPersons();\n\n    // \u53ea\u62e6\u622a GetValue \u65b9\u6cd5\n    [Interceptor(nameof(GetValue))]\n    static void \u62e6\u622a1(SqlProxyMethod method)\n    {\n        method.FinalSql += " where id > 1"; // \u7be1\u6539\u6700\u7ec8\u6267\u884c sql\n    }\n\n    // \u62e6\u622a GetValue \u548c GetPersons \u65b9\u6cd5\n    [Interceptor(nameof(GetValue), nameof(GetPersons))]\n    static void \u62e6\u622a2(SqlProxyMethod method)\n    {\n        method.FinalSql += " where id > 1"; // \u7be1\u6539\u6700\u7ec8\u6267\u884c sql\n    }\n\n    [Interceptor("GetPersonsByName")]   // \u5bf9\u5e94\u4e0a\u9762\u7684 InterceptorId \u914d\u7f6e\n    static void \u89e3\u51b3\u65b9\u6cd5\u540d\u91cd\u8f7d\u62e6\u622a(SqlProxyMethod method)\n    {\n        // \u3002\u3002\u3002\n    }\n\n    [Interceptor]\n    static void \u5168\u5c40\u62e6\u622a(SqlProxyMethod method)\n    {\n        // \u8fd9\u91cc\u4f1a\u62e6\u622a\u6240\u6709\u7684\u65b9\u6cd5\n    }\n}\n')),(0,i.kt)("h2",{id:"91710-\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"},"9.17.10 \u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'[Timeout(1000)]\npublic interface ISql : ISqlDispatchProxy\n{\n    [SqlFunction("FN_Name"), Timeout(500)]   // \u5355\u4f4d\u79d2\n    string GetValue(MyParam dto);\n}\n')),(0,i.kt)("h2",{id:"91711-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.17.11 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);