import{p as x,g as o,c as s,d,w as b,f as a,b as l,e as n,t as i,a as f,k as w,j as g,_ as y}from"./PkHZY6CZ.js";import{f as v,_}from"./THq8p1qS.js";const k=x("/covers/book_placeholder.png"),D={class:"max-w-xs grow-0 shrink-0"},p=["src"],B={key:1,class:"relative"},N={key:2,class:"relative"},U={class:"absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},V={class:"text-black font-bold text-xl opacity-70 mb-1"},j={key:3,class:"text-black font-bold text-md opacity-50 mb-4"},A={key:4,class:"font-bold mt-6 mb-2 opacity-70"},C={key:5,class:"opacity-70 mb-4"},$={key:6,class:"opacity-70"},E={key:8,class:"flex flex-row gap-4 items-center mt-2"},I={key:9,class:"pt-8 flex gap-4 flex-wrap"},R={__name:"NBook",props:{book:Object},setup(t){return(r,e)=>{const m=w,c=g,u=_,h=y;return o(),s("div",D,[t.book.img?(o(),d(m,{key:0,to:t.book.detailsUrl},{default:b(()=>[a("img",{class:"shadow-xl rounded-xl mb-12 hover:shadow-2xl transition-shadow",src:t.book.img},null,8,p)]),_:1},8,["to"])):!t.book.img&&!t.book.wip?(o(),s("div",B,e[0]||(e[0]=[a("img",{class:"shadow-xl rounded-xl mb-12 hover:shadow-2xl transition-shadow",src:k},null,-1)]))):t.book.wip?(o(),s("div",N,[e[2]||(e[2]=a("img",{class:"shadow-xl rounded-xl mb-12 hover:shadow-2xl transition-shadow",src:k},null,-1)),a("div",U,[l(c,{name:"tabler:clock",class:"w-8 h-8"}),e[1]||(e[1]=a("p",null,"Work in progress",-1))])])):n("",!0),a("h3",V,i(t.book.title),1),t.book.subtitle?(o(),s("h4",j,i(t.book.subtitle),1)):n("",!0),t.book.seriesDescription?(o(),s("p",A,i(t.book.seriesDescription),1)):n("",!0),t.book.published?(o(),s("h4",C,i(("formatDate"in r?r.formatDate:f(v))(t.book.published)),1)):n("",!0),t.book.shortDescription?(o(),s("p",$,i(t.book.shortDescription),1)):n("",!0),t.book.wip?n("",!0):(o(),d(u,{key:7,rating:t.book.rating,class:"mt-8"},null,8,["rating"])),t.book.wip?(o(),s("div",E,[l(c,{name:"tabler:info-circle"}),e[3]||(e[3]=a("p",null,"An diesem Buch wird gearbeitet.",-1))])):n("",!0),t.book.published?(o(),s("div",I,[l(h,{link:t.book.detailsUrl,variant:"black-outline"},{default:b(()=>[l(c,{class:"mr-4 w-5 h-5",name:"tabler:eyeglass"}),e[4]||(e[4]=a("p",null,"Details",-1))]),_:1},8,["link"])])):n("",!0)])}}};export{R as _};
