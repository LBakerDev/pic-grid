(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=(a(22),a(2)),i=a(3),l=a(4),u=a(5),m=(a(23),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.search(e.state.term)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,action:"",className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:""},"Search for Dope Pics"),r.a.createElement("div",{className:"ui input"},r.a.createElement("input",{value:this.state.term,placeholder:"Lambo...",onChange:function(t){return e.setState({term:t.target.value})},type:"text"}),r.a.createElement("br",null),r.a.createElement("br",null))))))}}]),a}(n.Component)),h=a(16),p=a.n(h).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID F7U7vvPTUka3TqO1Ps8jSMW00XALRsI8O_Wwvq8XTDo"}}),f=(a(41),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.photo,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(r.a.Component)),v=function(e){var t=e.photos.map((function(e){return r.a.createElement(f,{key:e.id,photo:e})}));return r.a.createElement("div",{className:"image-list"},t)},d=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={photos:[]},e.onSearch=function(t){p.get("/search/photos",{params:{query:t,per_page:30}}).then((function(t){var a=t.data.results;console.log(a),e.setState({photos:a})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(m,{search:this.onSearch}),r.a.createElement(v,{photos:this.state.photos}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0743ab0a.chunk.js.map