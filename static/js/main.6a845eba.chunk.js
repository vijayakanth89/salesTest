(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),l=(a(15),a(1)),s=a(2),o=a(5),u=a(4),m=a(3),d=a(6),h=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"mySlides ".concat(this.props.active?"active":"fade"),style:{display:this.props.active?"block":void 0}},c.a.createElement("div",{className:"numbertext"},"".concat(this.props.index+1,"/").concat(this.props.total)),c.a.createElement("img",{src:this.props.src,style:{width:"100%"}}))}}]),t}(n.Component)),p=[{src:"/img1.jpeg"},{src:"/img2.jpeg"},{src:"/img3.jpeg"},{src:"/img4.jpeg"},{src:"/img5.jpeg"},{src:"/img6.jpeg"},{src:"/img7.jpeg"}],E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activeSlide:0},a.currentSlide=a.currentSlide.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"currentSlide",value:function(e){e>=p.length?e=0:e<0&&(e=p.length-1),this.setState(function(t){return{activeSlide:e}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,c.a.createElement("span",{style:{color:"green",textShadow:"-2px -1px 10px green"}},"Gypwell"),c.a.createElement("span",{style:{color:"black",textShadow:"-2px -1px 10px black"}},"Decor")),c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"#about-us"},"About Us"),c.a.createElement("a",{href:"#contact-us"},"Contact Us"),c.a.createElement("a",{href:"#worksites"},"Our Work Sites"))),c.a.createElement("div",{id:"about-us",className:"about-us content"},c.a.createElement("h3",null,"About Us"),c.a.createElement("p",null,"We at ",c.a.createElement("span",{style:{fontStyle:"italic",fontWeight:"bold"}},"Gypwell Decors")," focus more on quality of work delivered, though we are less in number"),c.a.createElement("p",null,"Our employees strive to deliver the best at a minimum cost to the customers "),c.a.createElement("p",null,"This makes a unique stand for us among our competitors")),c.a.createElement("div",{id:"worksites",className:"content"},c.a.createElement("h3",null,"Work Sites"),c.a.createElement("p",null,"Here is a few worksites we have completed as of now")),c.a.createElement("div",{id:"slides",className:"slideshow-container"},p.map(function(e,t){return c.a.createElement(h,{key:"slide_"+t,total:p.length,src:e.src,index:t,active:t===this.state.activeSlide})}.bind(this)),c.a.createElement("a",{className:"prev",onClick:function(){this.currentSlide(this.state.activeSlide-1)}.bind(this)},"\u276e"),c.a.createElement("a",{className:"next",onClick:function(){this.currentSlide(this.state.activeSlide+1)}.bind(this)},"\u276f")),c.a.createElement("div",{style:{display:"none",textAlign:"center"}},p.map(function(e,t){return c.a.createElement("span",{key:"dot "+t,className:"dot",onClick:function(){console.log("here....."),this.currentSlide(t)}.bind(this)})}.bind(this))),c.a.createElement("div",{id:"contact-us",className:"contact-us content"},c.a.createElement("h3",null,"Contact Us"),c.a.createElement("p",null,"885c/3, Near popular Hyundai, Thirurkkad, Perinthalmanna, Malappuram-679321"),c.a.createElement("a",{href:"tel:8606858236"},"More queries reach, Dinesh ",c.a.createElement("span",null,"@8606858236")),c.a.createElement("a",{href:"tel:9961666472"}," or Manoj ",c.a.createElement("span",null,"@9961666472"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6a845eba.chunk.js.map