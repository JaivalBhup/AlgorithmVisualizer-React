(this.webpackJsonpalgorithm_visualizer=this.webpackJsonpalgorithm_visualizer||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(2),i=n.n(s),r=n(9),o=n.n(r),c=(n(15),n(3)),u=n(4),l=n(6),d=n(5),h=n(1),f=(n(16),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.isEnd,n=t.isStart,s=t.col,i=t.row,r=t.isWall,o=t.onMouseDown,c=t.onMouseEnter,u=t.onMouseUp,l=t.onMouseLeave,d=n?"node-start":e?"node-end":r?"node-wall":"";return Object(a.jsx)("td",{id:"node-".concat(i,"-").concat(s),className:"node ".concat(d),onMouseDown:function(){return o(i,s)},onMouseEnter:function(){return c(i,s)},onMouseUp:function(){return u()},onMouseLeave:function(){return l(i,s)}})}}]),n}(i.a.Component)),g=n(7);function v(t,e,n){if(!e||!n||e===n)return!1;var a=[];e.distance=0;for(var s=function(t){var e,n=[],a=Object(g.a)(t);try{for(a.s();!(e=a.n()).done;){var s,i=e.value,r=Object(g.a)(i);try{for(r.s();!(s=r.n()).done;){var o=s.value;n.push(o)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){a.e(c)}finally{a.f()}return n}(t);s.length;){s.sort((function(t,e){return t.distance-e.distance}));var i=s.shift();if(!i.isWall){if(i.distance===1/0)return-1;if(i.isVisited=!0,a.push(i),i===n)return a;m(i,t)}}}function m(t,e){var n,a=function(t,e){var n=[],a=t.row,s=t.col;a>0&&n.push(e[a-1][s]);a<e.length-1&&n.push(e[a+1][s]);s>0&&n.push(e[a][s-1]);s<e[0].length-1&&n.push(e[a][s+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),s=Object(g.a)(a);try{for(s.s();!(n=s.n()).done;){var i=n.value;i.distance=t.distance+1,i.previous=t}}catch(r){s.e(r)}finally{s.f()}}function j(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previous;return e}function b(t,e){return Math.abs(t.row-e.row)+Math.abs(t.col-e.col)}function p(t,e){var n=[],a=t.row,s=t.col;return a>0&&n.push(e[a-1][s]),a<e.length-1&&n.push(e[a+1][s]),s>0&&n.push(e[a][s-1]),s<e[0].length-1&&n.push(e[a][s+1]),n.filter((function(t){return!t.isVisited}))}n(17);var O=10,y=15,k=10,S=35;function w(t,e){for(var n=[],a=0;a<e;a++){for(var s=[],i=0;i<t;i++)s.push(x(a,i));n.push(s)}return n}function x(t,e){return{row:t,col:e,isStart:t===O&&e===y,isEnd:t===k&&e===S,distance:1/0,previous:null,isVisited:!1,isWall:!1,h:0,g:0,f:0}}function E(t,e,n){var a=t.slice(),s=a[e][n],i=Object(h.a)(Object(h.a)({},s),{},{isWall:!s.isWall});return a[e][n]=i,a}function N(t,e,n){var a=t.slice(),s=a[e][n],i=Object(h.a)(Object(h.a)({},s),{},{isStart:!1});return a[e][n]=i,a}function M(t,e,n){var a=t.slice(),s=a[e][n],i=Object(h.a)(Object(h.a)({},s),{},{isEnd:!1});return a[e][n]=i,a}var D=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={grid:[],mousePressed:!1,startPicked:!1,endPicked:!1,message:"Drag and drop Start and End nodes to change their position. Drag through the grid to create walls"},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=w(50,30);this.setState({grid:t})}},{key:"clearAnimation",value:function(){for(var t=0;t<this.state.grid.length;t++)for(var e=0;e<this.state.grid[0].length;e++)this.state.grid[t][e].isStart||this.state.grid[t][e].isEnd||this.state.grid[t][e].isWall||(document.getElementById("node-".concat(t,"-").concat(e)).className="node")}},{key:"clear",value:function(){var t=w(50,30);this.setState({grid:t});for(var e=0;e<this.state.grid.length;e++){for(var n=0;n<this.state.grid[0].length;n++)this.state.grid[e][n].isStart&&(document.getElementById("node-".concat(e,"-").concat(n)).className="node node-start"),this.state.grid[e][n].isEnd&&(document.getElementById("node-".concat(e,"-").concat(n)).className="node node-end"),this.state.grid[e][n].isStart||this.state.grid[e][n].isEnd||(document.getElementById("node-".concat(e,"-").concat(n)).className="node");this.setState({message:"Drag and drop Start and End nodes to change their position. Drag through the grid to create walls"})}}},{key:"handleMouseDown",value:function(t,e){var n=this.state.grid[t][e];if(n.isStart){var a=N(this.state.grid,t,e);this.setState({mousePressed:!0,startPicked:!0,grid:a})}else if(n.isEnd){var s=M(this.state.grid,t,e);this.setState({mousePressed:!0,endPicked:!0,grid:s})}else{var i=E(this.state.grid,t,e);this.setState({grid:i,mousePressed:!0})}}},{key:"handleMouseEnter",value:function(t,e){if(this.state.mousePressed)if(this.state.startPicked){O=t,y=e;var n=function(t,e,n){var a=t.slice(),s=a[e][n],i=Object(h.a)(Object(h.a)({},s),{},{isStart:!0,isWall:!1});return a[e][n]=i,a}(this.state.grid,t,e);this.setState({grid:n})}else if(this.state.endPicked){k=t,S=e;var a=function(t,e,n){var a=t.slice(),s=a[e][n],i=Object(h.a)(Object(h.a)({},s),{},{isEnd:!0,isWall:!1});return a[e][n]=i,a}(this.state.grid,t,e);this.setState({grid:a})}else{var s=E(this.state.grid,t,e);this.setState({grid:s})}}},{key:"handleMouseLeave",value:function(t,e){if(this.state.mousePressed)if(this.state.startPicked){var n=N(this.state.grid,t,e);this.setState({grid:n})}else if(this.state.endPicked){var a=M(this.state.grid,t,e);this.setState({grid:a})}}},{key:"handleMouseUp",value:function(){this.setState({startPicked:!1,endPicked:!1,mousePressed:!1})}},{key:"animate",value:function(t,e){var n=this;if(-1!==t)for(var a=function(a){if(a===t.length)return setTimeout((function(){n.animateShortestPath(e)}),10*a),{v:void 0};setTimeout((function(){var e=t[a];e.isStart||e.isEnd||(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited")}),10*a)},s=0;s<=t.length;s++){var i=a(s);if("object"===typeof i)return i.v}else this.setState({message:"No Solution"})}},{key:"animateShortestPath",value:function(t){for(var e=this,n=function(e){setTimeout((function(){var n=t[e];n.isStart||n.isEnd||(document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest")}),10*e)},a=0;a<t.length;a++)n(a);this.setState({message:"Found the shortest path."}),setTimeout((function(){e.setState({message:"Clear the grid"})}),3e3)}},{key:"visualizeDijkstra",value:function(){this.setState({message:"Searching..."});var t=this.state.grid,e=t[O][y],n=t[k][S],a=v(t,e,n),s=j(n);this.animate(a,s)}},{key:"visualizeAStar",value:function(){this.setState({message:"Searching..."});var t=this.state.grid,e=t[O][y],n=t[k][S],a=function(t,e,n){if(!e||!n||e===n)return!1;var a=[],s=[];for(a.push(e);;){if(!(a.length>0))return-1;for(var i=0,r=0;r<a.length;r++)a[r].f<a[i].f&&(i=r);var o=a[i];if(o===n)return s;s.push(o),o.isVisited=!0;var c=a.indexOf(o);c>-1&&a.splice(c,1);var u,l=p(o,t),d=Object(g.a)(l);try{for(d.s();!(u=d.n()).done;){var h=u.value;if(!h.isWall&&!s.includes(h)){var f=o.g+1;a.includes(h)?h.g>f&&(h.h=b(h,n),h.g=f,h.f=h.g+h.h):(h.h=b(h,n),h.g=f,h.f=h.g+h.h,a.push(h)),h.previous=o}}}catch(v){d.e(v)}finally{d.f()}}}(t,e,n),s=j(n);this.animate(a,s)}},{key:"render",value:function(){var t=this,e=this.state.grid;return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h6",{children:this.state.message}),Object(a.jsx)("table",{className:"grid",children:Object(a.jsx)("tbody",{children:e.map((function(e,n){return Object(a.jsx)("tr",{className:"row",children:e.map((function(e,n){var s=e.row,i=e.col,r=e.isEnd,o=e.isStart,c=e.isWall,u=e.isVisited;return Object(a.jsx)(f,{col:i,row:s,isStart:o,isEnd:r,isWall:c,isVisited:u,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()},onMouseLeave:function(e,n){return t.handleMouseLeave(e,n)}},n)}))},n)}))})})]})}}]),n}(i.a.Component),P=(n(18),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={currentAlgo:"Dijkstra"},a.child=i.a.createRef(),a}return Object(u.a)(n,[{key:"chageAlgo",value:function(t){this.setState({currentAlgo:t})}},{key:"clear",value:function(t){t.preventDefault(),this.child.current.clear(t)}},{key:"Visualize",value:function(t){t.preventDefault();var e=this.state.currentAlgo;console.log(e),"Dijkstra"===e&&this.child.current.visualizeDijkstra(),"A*"===e&&this.child.current.visualizeAStar()}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("img",{src:"./logo.png",width:"30",height:"30",style:{marginRight:"10px"},alt:""}),Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Algo Visualizer"}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"https://github.com/JaivalBhup/AlgorithmVisualizer-React",children:"GitHub Repo"})}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:this.state.currentAlgo}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(a.jsx)("button",{className:"dropdown-item",onClick:function(e){return t.chageAlgo("Dijkstra")},children:"Dijkstra"}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(e){return t.chageAlgo("A*")},children:"A*"})]})]})]}),Object(a.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(a.jsx)("button",{style:{marginRight:"10px"},className:"btn btn-danger my-2 my-sm-0",onClick:function(e){return t.clear(e)},children:"Clear Grid"}),Object(a.jsxs)("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:function(e){return t.Visualize(e)},children:["Visualize ",this.state.currentAlgo]})]})]})]}),Object(a.jsx)(D,{ref:this.child,currentAlgo:this.state.currentAlgo})]})}}]),n}(i.a.Component)),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),i(t),r(t)}))};o.a.render(Object(a.jsx)(P,{}),document.getElementById("root")),A()}},[[19,1,2]]]);
//# sourceMappingURL=main.aafba08c.chunk.js.map