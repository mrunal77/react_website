(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(16),a(1)),s=a(2),o=a(4),u=a(3),m=(a(17),a(9)),p=a.n(m),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"https://facebook.com/dragon7794",target:"_blank"},r.a.createElement("i",{class:"fa fa-facebook-square","aria-hidden":"true"})),"\xa0",r.a.createElement("a",{href:"https://twitter.com/mrunal7794",target:"_blank"},r.a.createElement("i",{class:"fa fa-twitter-square","aria-hidden":"true"})),"\xa0",r.a.createElement("a",{href:"https://linkedin.com/in/mrunal7794",target:"_blank"},r.a.createElement("i",{class:"fa fa-linkedin-square","aria-hidden":"true"})),"\xa0",r.a.createElement("a",{href:"https://github.com/mrunal77",target:"_blank"},r.a.createElement("i",{class:"fa fa-github-square","aria-hidden":"true"})))}}]),a}(r.a.Component),h=a(10),f=a.n(h),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleType=function(){var e=n.props.dataText,t=n.state,a=t.isDeleting,r=t.loopNum,l=t.text,c=t.typingSpeed,i=e[r%e.length];n.setState({text:a?i.substring(0,l.length-1):i.substring(0,l.length+1),typingSpeed:a?30:150}),a||l!==i?a&&""===l&&n.setState({isDeleting:!1,loopNum:r+1}):setTimeout((function(){return n.setState({isDeleting:!0})}),500),setTimeout(n.handleType,c)},n.state={text:"",isDeleting:!1,loopNum:0,typingSpeed:130},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,this.state.text),r.a.createElement("span",{id:"cursor"}))}}]),a}(r.a.Component);b.defaultProps={dataText:[]};var g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("card",{className:"card"},r.a.createElement("img",{className:"rounded-circle",src:p.a,alt:"Mrunal"}),r.a.createElement("br",null),r.a.createElement("h1",null,"Mrunal Meshram"),r.a.createElement("h4",null,r.a.createElement(b,{dataText:["Hi I am Mrunal!","This is my website","I am a web developer."]})),r.a.createElement("div",{className:"awsome"},r.a.createElement(d,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a.p+"static/media/bannerImage.58eb5b98.jpg"}},[[11,1,2]]]);
//# sourceMappingURL=main.e1ed834a.chunk.js.map