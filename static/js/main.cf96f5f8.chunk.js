(this.webpackJsonpveloloco=this.webpackJsonpveloloco||[]).push([[0],{39:function(e,a,t){e.exports=t(83)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(44),t(45),t(7)),i=t(8),m=(t(46),t(11)),u=t(34),s=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"copyright"},"Copyright 2019-2020 VeloLoco"),l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/VELO-LOCO-2133231516796322/"},l.a.createElement(m.a,{icon:u.a}))))},w=t(16),E=t(17),p=t(19),z=t(18),d=(t(52),t(14)),k=(t(53),t(9),function(e){Object(p.a)(t,e);var a=Object(z.a)(t);function t(e){var n;return Object(w.a)(this,t),(n=a.call(this,e)).toggleMenu=function(){n.setState({menuActive:!n.state.menuActive})},n.state={menuActive:!1},n}return Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"logo"},l.a.createElement("h1",null,l.a.createElement("a",{href:"/"},l.a.createElement("span",null,"velo"),"loco"))),l.a.createElement("nav",null,l.a.createElement(m.a,{className:"hamburger_icon",icon:d.a,onClick:this.toggleMenu}),l.a.createElement("ul",{className:this.state.menuActive?"hamburger_links hamburger_links-visible":"hamburger_links"},l.a.createElement(m.a,{className:"times_icon",icon:d.c,onClick:this.toggleMenu}),l.a.createElement("div",{id:"where"},"dok\u0105d zatem idziemy?"),l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",exact:!0,to:"/",onClick:this.toggleMenu},"aktualno\u015bci")),l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/offer",onClick:this.toggleMenu},"oferta")),l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/bike_service",onClick:this.toggleMenu},"serwis rower\xf3w")),l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/ski_service",onClick:this.toggleMenu},"serwis zimowy")),l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/winter_storage",onClick:this.toggleMenu},"przechowalnia")),l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/map",onClick:this.toggleMenu},"kontakt"))))))}}]),t}(l.a.Component)),g=t(13),y=(t(56),t(57),function(e){var a=e.post,t=Object(n.useState)(null),r=Object(g.a)(t,2),c=r[0],o=r[1],i=Object(n.useState)(!1),m=Object(g.a)(i,2),u=m[0];m[1];return Object(n.useEffect)((function(){fetch("http://veloloco.pl/wp-json/wp/v2/media/".concat(a.featured_media)).then((function(e){return e.json()})).then((function(e){o(e.source_url)}))}),[u]),l.a.createElement("article",{className:"news",key:a.id},l.a.createElement("h3",{className:"news_data-title"},a.title.rendered),l.a.createElement("div",{className:"news_data-date"},"opublikowano: ",new Date(a.date).getDay()+"."+new Date(a.date).getMonth()+"."+new Date(a.date).getFullYear()),l.a.createElement("div",{className:"news_data"},l.a.createElement("img",{className:"news_img",src:c,alt:a.title.rendered}),l.a.createElement("div",{className:"news_data-content"}," ",a.content.rendered.replace(/<\/?[^>]+>/gi,""))))}),h=(t(58),function(e){var a=e.posts;return l.a.createElement("div",{className:"posts"},a.map((function(e){return l.a.createElement(y,{post:e,key:e.id})})))}),f=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(g.a)(c,2),i=o[0];o[1];return Object(n.useEffect)((function(){fetch("http://veloloco.pl/wp-json/wp/v2/posts/").then((function(e){return e.json()})).then((function(e){r(e)}))}),[i]),l.a.createElement("div",{className:"wrapper"},l.a.createElement(h,{posts:t}))},b=(t(59),function(){return l.a.createElement("div",{className:"offer"},"oferta")}),j=function(){return l.a.createElement("article",{className:"bike_service"},l.a.createElement("p",null,"Serwis rowerowy to nasza specjalno\u015b\u0107. Oferujemy pomoc praktycznie w ka\u017cdym zakresie. Od serwis\xf3w konserwacyjnych, poprzez kompleksowe naprawy, na serwisie amortyzator\xf3w sko\u0144czywszy. Ka\u017cdy rower przyjmowany na serwis, jest w Waszej obecno\u015bci wyceniany. Omawiamy z Wami stan roweru, sugerujemy co nale\u017cy zrobi\u0107 i omawiamy koszty."),l.a.createElement("p",null," Cennik serwisowy:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Przegl\u0105d REGULACYJNY \u2013 99z\u0142"),l.a.createElement("li",null,"Przegl\u0105d ROZSZERZONY \u2013 139z\u0142"),l.a.createElement("li",null,"Przegl\u0105d GENERALNY \u2013 239z\u0142")),l.a.createElement("p",null,"Poni\u017cej prezentujemy szczeg\xf3\u0142owy zakres czynno\u015bci serwisowych wchodz\u0105cych w sk\u0142ad przegl\u0105d\xf3w:"),l.a.createElement("ul",null," Przegl\u0105d regulacyjny",l.a.createElement("li",null,"Regulacja przerzutek"),l.a.createElement("li",null,"Regulacja hamulc\xf3w"),l.a.createElement("li",null,"Centrowanie k\xf3\u0142 (na rowerze)"),l.a.createElement("li",null,"Kasowanie luz\xf3w ster\xf3w"),l.a.createElement("li",null,"Kasowanie luz\xf3w piast"),l.a.createElement("li",null,"Kasowanie luz\xf3w na korbie"),l.a.createElement("li",null,"Kontrola po\u0142\u0105cze\u0144 \u015brubowych"),l.a.createElement("li",null,"Kontrola stanu nap\u0119du, klock\xf3w hamulcowych, ogumienia"),l.a.createElement("li",null,"Smarowanie nap\u0119du"),l.a.createElement("li",null,"Smarowanie amortyzatora (microlube)"),l.a.createElement("li",null,"Pompowanie k\xf3\u0142")),l.a.createElement("ul",null,"Przegl\u0105d regulacyjny plus",l.a.createElement("li",null,"Regulacja przerzutek"),l.a.createElement("li",null,"Regulacja hamulc\xf3w"),l.a.createElement("li",null,"Centrowanie k\xf3\u0142 (na rowerze)"),l.a.createElement("li",null,"Kasowanie luz\xf3w ster\xf3w"),l.a.createElement("li",null,"Kasowanie luz\xf3w piast"),l.a.createElement("li",null,"Kasowanie luz\xf3w na korbie"),l.a.createElement("li",null,"Kontrola po\u0142\u0105cze\u0144 \u015brubowych"),l.a.createElement("li",null,"Kontrola stanu nap\u0119du, klock\xf3w hamulcowych, ogumienia"),l.a.createElement("li",null,"Demonta\u017c i mycie nap\u0119du"),l.a.createElement("li",null,"Smarowanie nap\u0119du"),l.a.createElement("li",null,"Smarowanie amortyzatora (microlube)"),l.a.createElement("li",null,"Pompowanie k\xf3\u0142")),l.a.createElement("ul",null,"Przegl\u0105d generalny",l.a.createElement("li",null,"Regulacja przerzutek"),l.a.createElement("li",null,"Regulacja hamulc\xf3w"),l.a.createElement("li",null,"Centrowanie k\xf3\u0142 precyzyjne"),l.a.createElement("li",null,"Kasowanie luz\xf3w ster\xf3w"),l.a.createElement("li",null,"Kasowanie luz\xf3w piast"),l.a.createElement("li",null,"Kasowanie luz\xf3w na korbie"),l.a.createElement("li",null,"Kasowanie luz\xf3w na suporcie"),l.a.createElement("li",null,"Kontrola po\u0142\u0105cze\u0144 \u015brubowych"),l.a.createElement("li",null,"Kontrola stanu nap\u0119du, klock\xf3w hamulcowych, ogumienia"),l.a.createElement("li",null,"Demonta\u017c i mycie nap\u0119du"),l.a.createElement("li",null,"Smarowanie nap\u0119du"),l.a.createElement("li",null,"Smarowanie amortyzatora (microlube)"),l.a.createElement("li",null,"Smarowanie piast"),l.a.createElement("li",null,"Smarowanie ster\xf3w"),l.a.createElement("li",null,"Smarowanie \u015brodka suportowego"),l.a.createElement("li",null,"Pompowanie k\xf3\u0142")))},v=(t(60),function(){return l.a.createElement("article",{className:"ski_service"},l.a.createElement("p",null,"R\u0119czny serwis narciarski VeloLoco to gwarancja najwy\u017cszej precyzji ostrzenia i idealnego nasmarowania. Dzia\u0142amy w oparciu o najlepsze narz\u0119dzia najbardziej uznanych marek na \u015bwiecie: ",l.a.createElement("strong",null,"Kunzmann, Swix, Holmenkol, Toko"),". Nasi pracownicy maj\u0105 wiedz\u0119 i do\u015bwiadczenie kt\xf3re zapewni Ci bezpiecze\u0144stwo i ca\u0142kowit\u0105 kontrol\u0119 na stoku."),l.a.createElement("p",null,"Dojazd do klienta? Nie ma sprawy. Poznaj szczeg\xf3\u0142y oferty."),l.a.createElement("p",null,"Zapraszamy m.in. na:",l.a.createElement("ul",null,l.a.createElement("li",null,"Smarowanie nart biegowych (tak\u017ce bez \u0142uski \u2013 mamy pe\u0142n\u0105 gam\u0119 klistr\xf3wi)"),l.a.createElement("li",null,"Du\u017cy serwis nart zjazdowych \u2013 80-120z\u0142 (uzupe\u0142nienie i r\xf3wnanie \u015blizgu, ostrzenie, smarowanie)"),l.a.createElement("li",null,"Du\u017cy serwis snowboard\xf3w \u2013 90-130z\u0142 (uzupe\u0142nienie i r\xf3wnanie \u015blizgu, ostrzenie, smarowanie)"))))}),N=(t(61),function(){return l.a.createElement("div",null,"przechowalnia zimowa rower\xf3w")}),O=(t(62),t(38)),_=t.n(O),C=function(){return l.a.createElement("div",{className:"pointer"},l.a.createElement(m.a,{className:"map_marker",icon:d.b}))},K=function(e){Object(p.a)(t,e);var a=Object(z.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"timetable"},l.a.createElement("p",{className:"contact"},l.a.createElement("span",null,"dane kontaktowe"),l.a.createElement("br",null),"ul. W\u0105wozowa 2",l.a.createElement("br",null),"02-796 Warszawa",l.a.createElement("br",null),l.a.createElement("strong",null,"tel. 22 126 35 83"),l.a.createElement("br",null),l.a.createElement("strong",null,"sklep@veloloco.pl"),l.a.createElement("br",null)),l.a.createElement("p",{className:"opening_hours"},l.a.createElement("span",null,"godziny otwarcia:"),l.a.createElement("br",null),"poniedzia\u0142ek-pi\u0105tek: ",l.a.createElement("strong",null,"11:00-19:00"),l.a.createElement("br",null),"sobota: ",l.a.createElement("strong",null,"10:00-15:00"),l.a.createElement("br",null),"niedziela: ",l.a.createElement("strong",null,"nieczynne"),l.a.createElement("br",null))),l.a.createElement("div",{className:"googlemap"},l.a.createElement(_.a,{bootstrapURLKeys:{key:"AIzaSyAI6WJqTRvLdjNyTIkttjylCwN1QKTWoos"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},l.a.createElement(C,{lat:52.1335482,lng:21.0744158,text:""}))))}}]),t}(l.a.Component);K.defaultProps={center:{lat:52.1335482,lng:21.0744158},zoom:17};var S=K;t(82);function R(){return l.a.createElement("h1",null,"404")}var P=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(k,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:f}),l.a.createElement(i.a,{exact:!0,path:"/offer",component:b}),l.a.createElement(i.a,{exact:!0,path:"/bike_service",component:j}),l.a.createElement(i.a,{exact:!0,path:"/ski_service",component:v}),l.a.createElement(i.a,{exact:!0,path:"/winter_storage",component:N}),l.a.createElement(i.a,{exact:!0,path:"/map",component:S}),l.a.createElement(i.a,{component:R})),l.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.cf96f5f8.chunk.js.map