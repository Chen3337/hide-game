(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(4),s=n.n(o),r=(n(12),n(13),n(1)),c=n(2),h=n(5),l=n(6),u=function(){function e(){Object(r.a)(this,e),this.x=0,this.y=0}return Object(c.a)(e,[{key:"render",value:function(e){var t=e.context;t.save(),t.translate(e.x,e.y),t.beginPath(),t.arc(0,0,12,0,2*Math.PI),t.fillStyle="green",t.fill(),t.closePath(),t.restore()}}]),e}(),d=function(){function e(){Object(r.a)(this,e),this.degrees=0,this.direction="add"}return Object(c.a)(e,[{key:"render",value:function(e){"add"===this.direction&&(this.degrees+=1,85===this.degrees&&(this.direction="minus")),"minus"===this.direction&&(this.degrees-=1,-85===this.degrees&&(this.direction="add"));var t=e.context;t.save(),t.translate(e.screenWidth/2,0),t.beginPath(),t.arc(0,0,15,0,2*Math.PI),t.fillStyle="black",t.fill(),t.closePath(),t.beginPath(),t.rotate(this.degrees*Math.PI/180),t.lineWidth="6",t.moveTo(0,0),t.lineTo(0,40),t.stroke(),t.restore()}}]),e}(),f=function(){function e(t){Object(r.a)(this,e),this.x=window.innerWidth/2,this.y=0,this.speed=40,this.angle=t-Math.PI,this.bounceX=!1,this.bounceY=!1}return Object(c.a)(e,[{key:"moving",value:function(){var e=this.speed*Math.cos(this.angle-Math.PI/2),t=this.speed*Math.sin(this.angle-Math.PI/2);this.speed=3,this.bounceX?this.x-=e:this.x+=e,this.bounceY?this.y-=t:this.y+=t}},{key:"render",value:function(e){this.moving(),(this.x<0||this.x>window.innerWidth)&&(this.bounceX=!this.bounceX),(this.y<0||this.y>window.innerHeight)&&(this.bounceY=!this.bounceY);var t=e.context;t.save(),t.translate(this.x,this.y),t.beginPath(),t.arc(0,0,3,0,2*Math.PI),t.fillStyle="black",t.fill(),t.closePath(),t.restore()}}]),e}(),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).update=function(){if(e.state.context){e.state.context.clearRect(0,0,e.state.screenWidth,e.state.screenHeight),e.state.mainchar.render(e.state),e.state.shootertank.render(e.state);for(var t=0;t<e.state.bullet.length;t++)e.state.bullet[t].render(e.state)}requestAnimationFrame((function(){e.update()}))},e.makeBullet=function(){console.log(e.state.shootertank.degrees);var t=new f(e.state.shootertank.degrees*Math.PI/180),n=e.state.bullet.concat(t);e.setState({bullet:n})},e.state={screenWidth:window.innerWidth,screenHeight:window.innerHeight,context:null,x:window.innerWidth/2,y:window.innerHeight-30,mainchar:new u,shootertank:new d,bullet:[],timer:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.refs.canvas.getContext("2d");window.addEventListener("touchmove",(function(t){t.preventDefault(),t.stopImmediatePropagation();var n=t.touches[0].clientX,i=t.touches[0].clientY;20>Math.sqrt((e.state.x-n)*(e.state.x-n)+(e.state.y-i)*(e.state.y-i))&&e.setState({x:n,y:i})}),{passive:!1}),window.addEventListener("touchstart",(function(e){e.preventDefault(),e.stopImmediatePropagation()}),{passive:!1}),window.addEventListener("touchforcechange",(function(e){e.preventDefault(),e.stopImmediatePropagation()}),{passive:!1}),this.setState({context:t,timer:setInterval((function(){e.makeBullet()}),1e3)}),requestAnimationFrame((function(){e.update()}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("canvas",{ref:"canvas",width:this.state.screenWidth,height:this.state.screenHeight,style:{backgroundColor:"skyblue"}}))}}]),n}(i.Component);var g=function(){return a.a.createElement("div",null,a.a.createElement(v,null))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hide-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hide-game","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3d246982.chunk.js.map