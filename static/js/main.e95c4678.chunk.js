(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"ana",image:"./images/ana.png",clicked:"false"},{id:2,name:"ashe",image:"./images/ashe.png",clicked:"false"},{id:3,name:"bastion",image:"./images/bastion.png",clicked:"false"},{id:4,name:"brigitte",image:"./images/brigitte.png",clicked:"false"},{id:5,name:"doomfist",image:"./images/doomfist.png",clicked:"false"},{id:6,name:"dva",image:"./images/dva.png",clicked:"false"},{id:7,name:"genji",image:"./images/genji.png",clicked:"false"},{id:8,name:"hanzo",image:"./images/hanzo.png",clicked:"false"},{id:9,name:"junkrat",image:"./images/junkrat.png",clicked:"false"},{id:10,name:"lucio",image:"./images/lucio.png",clicked:"false"},{id:11,name:"mccree",image:"./images/mccree.png",clicked:"false"},{id:12,name:"mei",image:"./images/mei.png",clicked:"false"},{id:13,name:"mercy",image:"./images/mercy.png",clicked:"false"},{id:14,name:"moira",image:"./images/moira.png",clicked:"false"},{id:15,name:"orisa",image:"./images/orisa.png",clicked:"false"},{id:16,name:"pharah",image:"./images/pharah.png",clicked:"false"},{id:17,name:"reaper",image:"./images/reaper.png",clicked:"false"},{id:18,name:"reinhardt",image:"./images/reinhardt.png",clicked:"false"},{id:19,name:"roadhog",image:"./images/roadhog.png",clicked:"false"},{id:20,name:"soldier",image:"./images/soldier.png",clicked:"false"},{id:21,name:"sombra",image:"./images/sombra.png",clicked:"false"},{id:22,name:"symmetra",image:"./images/symmetra.png",clicked:"false"},{id:23,name:"torbjorn",image:"./images/torbjorn.png",clicked:"false"},{id:24,name:"tracer",image:"./images/tracer.png",clicked:"false"},{id:25,name:"widowmaker",image:"./images/widowmaker.png",clicked:"false"},{id:26,name:"winston",image:"./images/winston.png",clicked:"false"},{id:27,name:"wreckingball",image:"./images/wreckingball.png",clicked:"false"},{id:28,name:"zarya",image:"./images/zarya.png",clicked:"false"},{id:29,name:"zenyatta",image:"./images/zenyatta.png",clicked:"false"}]},,,function(e,a,i){e.exports=i(27)},,,,,,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){"use strict";i.r(a);var n=i(0),t=i.n(n),c=i(8),r=i.n(c),m=(i(15),i(1)),l=i(2),s=i(4),o=i(3),d=i(5),g=(i(17),function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"jumbo"},this.props.children,t.a.createElement("div",{className:"container-fluid"},t.a.createElement("h1",{className:"display-3"},"Overwatch Heroes Memory Game"),t.a.createElement("p",{className:"lead"},"Click an Ovewatch hero image to start the game. Memorize who you clicked, as you don't want to click them again!")))}}]),a}(n.Component)),u=(i(19),function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return t.a.createElement("main",{id:"heroescontainer",className:"container-fluid"},this.props.children)}}]),a}(n.Component)),f=(i(21),function(e){return t.a.createElement("div",null,t.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},t.a.createElement("ul",{className:"nav justify-content-center"},t.a.createElement("li",{className:"nav-item"},"Current Score: ",t.a.createElement("strong",{id:"scores"}," ",e.currentScore," ")),t.a.createElement("li",{className:"nav-item"},"Top Score: ",t.a.createElement("strong",{id:"scores"}," ",e.topScore," ")))))}),p=(i(23),function(e){return t.a.createElement("div",{onClick:function(){return e.handleClick(e.id)}},t.a.createElement("img",{className:"img-thumbnail",id:e.id,src:e.image,alt:e.name,clicked:"false"}))}),k=i(6),h=(i(25),function(e){function a(){var e,i;Object(m.a)(this,a);for(var n=arguments.length,t=new Array(n),c=0;c<n;c++)t[c]=arguments[c];return(i=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(t)))).state={currentScore:0,topScore:0,heroes:k},i.handleClick=function(e){console.log("Image ID #"+e+" was clicked!"),i.setState({currentScore:i.state.currentScore+1,topScore:i.state.topScore+1,clicked:"true"===i.state.clicked,heroes:i.shuffle(k)})},i.shuffle=function(e){for(var a,i,n=e.length;n;)i=Math.floor(Math.random()*n--),a=e[n],e[n]=e[i],e[i]=a;return e},i}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return t.a.createElement("div",{className:"App"},t.a.createElement(f,{currentScore:this.state.currentScore,topScore:this.state.topScore}),t.a.createElement(g,null),t.a.createElement(u,null,this.state.heroes.map(function(a){return t.a.createElement(p,{id:a.id,image:a.image,name:a.name,key:a.id,handleClick:e.handleClick,shuffle:e.shuffle})})))}}]),a}(n.Component));r.a.render(t.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.e95c4678.chunk.js.map