import{o as l,b as d,a as t,e as p,t as i,k as h,_ as u,c as x,w as c,r as f,F as y}from"./C_Ds-yx7.js";import{_ as b}from"./DUCZmjOQ.js";const k={class:"bg-white max-w-[300px] shadow-xl hover:shadow-2xl transition-shadow rounded-xl overflow-hidden"},g={class:"bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 flex justify-center"},w={class:"p-8"},v={class:"text-black font-bold text-xl opacity-70 mb-4"},L={__name:"NCard",props:{title:String,icon:String},setup(n){return(a,r)=>{const o=u;return l(),d("div",k,[t("div",g,[p(o,{class:"w-8 h-8 text-white",name:n.icon},null,8,["name"])]),t("div",w,[t("h3",v,i(n.title),1),h(a.$slots,"default")])])}}},S={class:"flex flex-wrap gap-8 justify-center"},$=["href"],j={class:"bg-gray-100 rounded-md inline-block px-3 py-1"},C={__name:"goodies",setup(n){const a=[{title:"Landkarte Lyranthia",type:"map",series:"Leonhard Mondsturm",link:"/goodies/maps/lyranthia.jpg"},{title:"Landkarte Eichenthal",type:"map",series:"Leonhard Mondsturm",link:"/goodies/maps/eichenthal.jpg"}],r={map:"Landkarte"},o={map:"tabler:compass"};return(B,e)=>{const _=L,m=b;return l(),x(m,{class:"bg-gray-100"},{default:c(()=>[e[2]||(e[2]=t("h2",{class:"text-4xl font-bold mt-16 mb-32 text-center"},"Zusätzliche Materialien",-1)),t("div",S,[(l(),d(y,null,f(a,s=>t("a",{href:s.link},[p(_,{title:s.title,link:s.link,icon:o[s.type],class:"min-w-[300px]"},{default:c(()=>[e[0]||(e[0]=t("h4",{class:"font-bold opacity-70 mb-2"},"Serie",-1)),t("p",null,i(s.series),1),e[1]||(e[1]=t("h4",{class:"font-bold opacity-70 mt-4 mb-2"},"Typ",-1)),t("div",j,[t("p",null,i(r[s.type]),1)])]),_:2},1032,["title","link","icon"])],8,$)),64))])]),_:1})}}};export{C as default};
