(this.webpackJsonpalgorithm_visualizer=this.webpackJsonpalgorithm_visualizer||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(3),r=n.n(s),i=n(9),o=n.n(i),c=(n(15),n(4)),l=n(5),u=n(7),h=n(6),d=n(1),f=n(2),v=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isEnd,n=e.isStart,s=e.col,r=e.row,i=e.isWall,o=e.onMouseDown,c=e.onMouseEnter,l=e.onMouseUp,u=e.onMouseLeave,h=n?"node-start":t?"node-end":i?"node-wall":"";return Object(a.jsx)("td",{id:"node-".concat(r,"-").concat(s),className:"node ".concat(h),onMouseDown:function(){return o(r,s)},onMouseEnter:function(){return c(r,s)},onMouseUp:function(){return l()},onMouseLeave:function(){return u(r,s)}})}}]),n}(r.a.Component));function g(e,t,n){if(!t||!n||t===n)return!1;!function(e){var t,n=Object(d.a)(e);try{for(n.s();!(t=n.n()).done;){var a,s=t.value,r=Object(d.a)(s);try{for(r.s();!(a=r.n()).done;){a.value.f=1/0}}catch(i){r.e(i)}finally{r.f()}}}catch(i){n.e(i)}finally{n.f()}}(e);var a=[];t.f=0;for(var s=function(e){var t,n=[],a=Object(d.a)(e);try{for(a.s();!(t=a.n()).done;){var s,r=t.value,i=Object(d.a)(r);try{for(i.s();!(s=i.n()).done;){var o=s.value;n.push(o)}}catch(c){i.e(c)}finally{i.f()}}}catch(c){a.e(c)}finally{a.f()}return n}(e);s.length;){s.sort((function(e,t){return e.f-t.f}));var r=s.shift();if(!r.isWall){if(r.f===1/0)return-1;if(r.isVisited=!0,a.push(r),r===n)return a;p(r,e)}}}function p(e,t){var n,a=function(e,t){var n=[],a=e.row,s=e.col;a>0&&n.push(t[a-1][s]);a<t.length-1&&n.push(t[a+1][s]);s>0&&n.push(t[a][s-1]);s<t[0].length-1&&n.push(t[a][s+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),s=Object(d.a)(a);try{for(s.s();!(n=s.n()).done;){var r=n.value;r.f=e.f+1,r.previous=e}}catch(i){s.e(i)}finally{s.f()}}function b(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previous;return t}function m(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function j(e,t){var n=[],a=e.row,s=e.col;return a>0&&n.push(t[a-1][s]),a<t.length-1&&n.push(t[a+1][s]),s>0&&n.push(t[a][s-1]),s<t[0].length-1&&n.push(t[a][s+1]),n.filter((function(e){return!e.isVisited}))}function S(e,t,n){n.push(t);var a,s=function(e,t){var n=[],a=e.row,s=e.col;s>0&&n.push(t[a][s-1]);a>0&&n.push(t[a-1][s]);a<t.length-1&&n.push(t[a+1][s]);s<t[0].length-1&&n.push(t[a][s+1]);return n}(t,e).filter((function(e){return!n.includes(e)})),r=Object(d.a)(s);try{for(r.s();!(a=r.n()).done;){var i=a.value;i.isWall||(i.previous=t,S(e,i,n))}}catch(o){r.e(o)}finally{r.f()}return n}function y(e,t,n){var a,s=S(e,t,[]),r=[],i=Object(d.a)(s);try{for(i.s();!(a=i.n()).done;){var o=a.value;if(o===n)return r;r.push(o)}}catch(c){i.e(c)}finally{i.f()}return-1}function O(e,t,n){var a,s=function(e,t){var n=[],a=[];for(t.isVisited=!0,n.push(t);n.length>0;){var s=n.shift();a.push(s);var r,i=w(s,e),o=Object(d.a)(i);try{for(o.s();!(r=o.n()).done;){var c=r.value;c.isVisited||c.isWall||(n.push(c),c.previous=s,c.isVisited=!0)}}catch(l){o.e(l)}finally{o.f()}}return a}(e,t),r=[],i=Object(d.a)(s);try{for(i.s();!(a=i.n()).done;){var o=a.value;if(o===n)return r;r.push(o)}}catch(c){i.e(c)}finally{i.f()}return-1}function w(e,t){var n=[],a=e.row,s=e.col;return a>0&&n.push(t[a-1][s]),a<t.length-1&&n.push(t[a+1][s]),s>0&&n.push(t[a][s-1]),s<t[0].length-1&&n.push(t[a][s+1]),n.filter((function(e){return!e.isVisited}))}function k(e,t){var n=[],a=e.row,s=e.col;return a>0&&n.push(t[a-1][s]),a<t.length-1&&n.push(t[a+1][s]),s>0&&n.push(t[a][s-1]),s<t[0].length-1&&n.push(t[a][s+1]),n.filter((function(e){return!e.isVisited}))}function x(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function N(e,t){var n=[],a=e.row,s=e.col;return a-1>0&&n.push(t[a-2][s]),a+1<t.length-1&&n.push(t[a+2][s]),s-1>0&&n.push(t[a][s-2]),s+1<t[0].length-1&&n.push(t[a][s+2]),n.filter((function(e){return!e.isVisited}))}n(17);var D=10,M=15,W=10,E=35;function B(e,t){for(var n=[],a=0;a<t;a++){for(var s=[],r=0;r<e;r++)s.push(z(a,r));n.push(s)}return n}function z(e,t){return{row:e,col:t,isStart:e===D&&t===M,isEnd:e===W&&t===E,distance:1/0,previous:null,isVisited:!1,isWall:!1,h:0,g:0,f:0}}function A(e,t,n){var a=e.slice(),s=a[t][n],r=Object(f.a)(Object(f.a)({},s),{},{isWall:!s.isWall});return a[t][n]=r,a}function F(e,t,n){var a=e.slice(),s=a[t][n],r=Object(f.a)(Object(f.a)({},s),{},{isStart:!1});return a[t][n]=r,a}function P(e,t,n){var a=e.slice(),s=a[t][n],r=Object(f.a)(Object(f.a)({},s),{},{isEnd:!1});return a[t][n]=r,a}var T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={grid:[],mousePressed:!1,startPicked:!1,endPicked:!1,message:"Drag and drop Start and End nodes to change their position. Drag through the grid to create walls",showScores:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=B(50,30);this.setState({grid:e})}},{key:"clearAnimation",value:function(){for(var e=0;e<this.state.grid.length;e++)for(var t=0;t<this.state.grid[0].length;t++)this.state.grid[e][t].isStart||this.state.grid[e][t].isEnd||this.state.grid[e][t].isWall||(document.getElementById("node-".concat(e,"-").concat(t)).className="node")}},{key:"clear",value:function(){var e=B(50,30);this.setState({grid:e});for(var t=0;t<this.state.grid.length;t++){for(var n=0;n<this.state.grid[0].length;n++)this.state.grid[t][n].isStart&&(document.getElementById("node-".concat(t,"-").concat(n)).className="node node-start"),this.state.grid[t][n].isEnd&&(document.getElementById("node-".concat(t,"-").concat(n)).className="node node-end"),this.state.grid[t][n].isStart||this.state.grid[t][n].isEnd||(document.getElementById("node-".concat(t,"-").concat(n)).className="node",document.getElementById("node-".concat(t,"-").concat(n)).innerHTML="");this.setState({message:"Drag and drop Start and End nodes to change their position. Drag through the grid to create walls"})}}},{key:"handleMouseDown",value:function(e,t){var n=this.state.grid[e][t];if(n.isStart){var a=F(this.state.grid,e,t);this.setState({mousePressed:!0,startPicked:!0,grid:a})}else if(n.isEnd){var s=P(this.state.grid,e,t);this.setState({mousePressed:!0,endPicked:!0,grid:s})}else{var r=A(this.state.grid,e,t);this.setState({grid:r,mousePressed:!0})}}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mousePressed)if(this.state.startPicked){D=e,M=t;var n=function(e,t,n){var a=e.slice(),s=a[t][n],r=Object(f.a)(Object(f.a)({},s),{},{isStart:!0,isWall:!1});return a[t][n]=r,a}(this.state.grid,e,t);this.setState({grid:n})}else if(this.state.endPicked){W=e,E=t;var a=function(e,t,n){var a=e.slice(),s=a[t][n],r=Object(f.a)(Object(f.a)({},s),{},{isEnd:!0,isWall:!1});return a[t][n]=r,a}(this.state.grid,e,t);this.setState({grid:a})}else{var s=A(this.state.grid,e,t);this.setState({grid:s})}}},{key:"handleMouseLeave",value:function(e,t){if(this.state.mousePressed)if(this.state.startPicked){var n=F(this.state.grid,e,t);this.setState({grid:n})}else if(this.state.endPicked){var a=P(this.state.grid,e,t);this.setState({grid:a})}}},{key:"handleMouseUp",value:function(){this.setState({startPicked:!1,endPicked:!1,mousePressed:!1})}},{key:"animate",value:function(e,t,n){var a=this;if(-1!==e)for(var s=function(s){if(s===e.length)return setTimeout((function(){a.animateShortestPath(t)}),10*s),{v:void 0};setTimeout((function(){var t=e[s];t.isStart||t.isEnd||(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited",n&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).innerHTML='<p class = "score">'.concat(t.f,"</p>")))}),10*s)},r=0;r<=e.length;r++){var i=s(r);if("object"===typeof i)return i.v}else this.setState({message:"No Solution"})}},{key:"animateShortestPath",value:function(e){for(var t=this,n=function(t){setTimeout((function(){var n=e[t];n.isStart||n.isEnd||(document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest")}),10*t)},a=0;a<e.length;a++)n(a);this.setState({message:"Found the shortest path."}),setTimeout((function(){t.setState({message:"Clear the grid"})}),3e3)}},{key:"visualizeDijkstra",value:function(e){this.setState({message:"Searching..."});var t=this.state.grid,n=t[D][M],a=t[W][E],s=g(t,n,a),r=b(a);this.animate(s,r,e)}},{key:"visualizeAStar",value:function(e){this.setState({message:"Searching..."});var t=this.state.grid,n=t[D][M],a=t[W][E],s=function(e,t,n){if(!t||!n||t===n)return!1;var a=[],s=[];for(a.push(t);;){if(!(a.length>0))return-1;for(var r=0,i=0;i<a.length;i++)a[i].f<a[r].f&&(r=i);var o=a[r];if(o===n)return s;s.push(o),o.isVisited=!0;var c=a.indexOf(o);c>-1&&a.splice(c,1);var l,u=j(o,e),h=Object(d.a)(u);try{for(h.s();!(l=h.n()).done;){var f=l.value;if(!f.isWall&&!s.includes(f)){var v=o.g+1;a.includes(f)?f.g>v&&(f.h=m(f,n),f.g=v,f.f=f.g+f.h):(f.h=m(f,n),f.g=v,f.f=f.g+f.h,a.push(f)),f.previous=o}}}catch(g){h.e(g)}finally{h.f()}}}(t,n,a),r=b(a);this.animate(s,r,e)}},{key:"visualizeDFS",value:function(){this.setState({message:"Searching..."});var e=this.state.grid,t=e[D][M],n=e[W][E],a=y(e,t,n),s=b(n);this.animate(a,s,!1)}},{key:"visualizeBFS",value:function(){this.setState({message:"Searching..."});var e=this.state.grid,t=e[D][M],n=e[W][E],a=O(e,t,n),s=b(n);this.animate(a,s,!1)}},{key:"visualizeGBS",value:function(e){console.log("GBS"),this.setState({message:"Searching..."});var t=this.state.grid,n=t[D][M],a=t[W][E],s=function(e,t,n){var a=[],s=[];for(t.f=x(t,n),t.isVisited=!0,a.push(t);a.length>0;){a.sort((function(e,t){return e.f-t.f}));var r=a.shift();if(s.push(r),r===n)return s;var i,o=k(r,e),c=Object(d.a)(o);try{for(c.s();!(i=c.n()).done;){var l=i.value;l.isWall||(a.push(l),l.f=x(l,n),l.previous=r,l.isVisited=!0)}}catch(u){c.e(u)}finally{c.f()}}return-1}(t,n,a),r=b(a);this.animate(s,r,e)}},{key:"visualizeRandomDFSMaze",value:function(){this.clear();var e=this.state.grid,t=function(e,t,n){var a,s=[],r=Object(d.a)(e);try{for(r.s();!(a=r.n()).done;){var i,o=a.value,c=Object(d.a)(o);try{for(c.s();!(i=c.n()).done;){var l=i.value;l!==t&&l!==n&&(l.isWall=!0)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){r.e(y)}finally{r.f()}var u=t,h=[];for(u.isVisited=!0;;){var f=N(u,e);if(f.length>0){var v=f[Math.floor(Math.random()*f.length)];v.isVisited=!0,v.row>u.row?e[u.row+1][u.col].isWall=!1:v.row<u.row?e[u.row-1][u.col].isWall=!1:v.col<u.col?e[u.row][u.col-1].isWall=!1:v.col>u.col&&(e[u.row][u.col+1].isWall=!1),h.push(u),v.isWall=!1,u=v}else{if(!(h.length>0))break;u=h.shift()}}var g,p=Object(d.a)(e);try{for(p.s();!(g=p.n()).done;){var b,m=g.value,j=Object(d.a)(m);try{for(j.s();!(b=j.n()).done;){var S=b.value;!S.isWall||S.isStart||S.isEnd||s.push(S)}}catch(y){j.e(y)}finally{j.f()}}}catch(y){p.e(y)}finally{p.f()}return s}(e,e[D][M],e[W][E]);this.animateWalls(t)}},{key:"animateWalls",value:function(e){for(var t=this,n=function(n){if(n===e.length)return setTimeout((function(){var n=function(e,t){var n,a=e.slice(),s=Object(d.a)(t);try{for(s.s();!(n=s.n()).done;){var r=n.value,i=r.row,o=r.col,c=a[i][o],l=Object(f.a)(Object(f.a)({},c),{},{isWall:!c.isWall});a[i][o]=l}}catch(u){s.e(u)}finally{s.f()}return a}(t.state.grid,e);t.setState({grid:n})}),10*n),{v:void 0};setTimeout((function(){document.getElementById("node-".concat(e[n].row,"-").concat(e[n].col)).className="node node-wall"}),10*n)},a=0;a<=e.length;a++){var s=n(a);if("object"===typeof s)return s.v}}},{key:"render",value:function(){var e=this,t=this.state.grid;return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h6",{children:this.state.message}),Object(a.jsx)("table",{className:"grid",children:Object(a.jsx)("tbody",{children:t.map((function(t,n){return Object(a.jsx)("tr",{className:"row",children:t.map((function(t,n){var s=t.row,r=t.col,i=t.isEnd,o=t.isStart,c=t.isWall,l=t.isVisited;return Object(a.jsx)(v,{col:r,row:s,isStart:o,isEnd:i,isWall:c,isVisited:l,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},onMouseLeave:function(t,n){return e.handleMouseLeave(t,n)}},n)}))},n)}))})})]})}}]),n}(r.a.Component),V=(n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={currentAlgo:"Dijkstra",algoTypeWeighted:!0,showScores:!1},a.child=r.a.createRef(),a}return Object(l.a)(n,[{key:"changeShowScores",value:function(){this.setState((function(e){return{showScores:!e.showScores}}))}},{key:"chageAlgo",value:function(e){var t=this;this.setState({currentAlgo:e}),setTimeout((function(){console.log(t.state.currentAlgo);var e=t.state.currentAlgo;"Dijkstra"===e&&t.setState({algoTypeWeighted:!0}),"A*"===e&&t.setState({algoTypeWeighted:!0}),"DFS"===e&&t.setState({algoTypeWeighted:!1}),"BFS"===e&&t.setState({algoTypeWeighted:!1}),"GBS"===e&&t.setState({algoTypeWeighted:!0})}),100)}},{key:"clear",value:function(e){e.preventDefault(),this.child.current.clear(e)}},{key:"Visualize",value:function(e,t){e.preventDefault();var n=this.state.currentAlgo;console.log(n),"Dijkstra"===n&&this.child.current.visualizeDijkstra(t),"A*"===n&&this.child.current.visualizeAStar(t),"DFS"===n&&this.child.current.visualizeDFS(),"BFS"===n&&this.child.current.visualizeBFS(),"GBS"===n&&this.child.current.visualizeGBS(t)}},{key:"createMaze",value:function(e){"RDFS"===e&&this.child.current.visualizeRandomDFSMaze()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("img",{src:"./logo.png",width:"30",height:"30",style:{marginRight:"10px"},alt:""}),Object(a.jsx)("a",{className:"navbar-brand",href:"https://github.com/JaivalBhup/AlgorithmVisualizer-React",children:"GitHub Repo"}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:this.state.currentAlgo}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return e.chageAlgo("Dijkstra")},children:"Dijkstra"}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return e.chageAlgo("A*")},children:"A*"}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return e.chageAlgo("GBS")},children:"Greedy Best Search"}),Object(a.jsx)("div",{className:"dropdown-divider",children:"Unweighted"}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return e.chageAlgo("BFS")},children:"Breadth First Search"}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return e.chageAlgo("DFS")},children:"Depth First Search"})]})]}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Create Maze"}),Object(a.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return e.createMaze("RDFS")},children:"Random Depth First Search"})})]}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups",children:[Object(a.jsx)("div",{style:{marginTop:"7px",marginRight:"3px",marginLeft:"4px",fontSize:"15px"},children:"Show Scores"}),Object(a.jsxs)("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"First group",children:[Object(a.jsx)("button",{type:"button",className:this.state.showScores?"btn btn-success":"btn btn-secondary",onClick:function(){return e.changeShowScores()},disabled:!this.state.algoTypeWeighted,children:"Yes"}),Object(a.jsx)("button",{type:"button",className:this.state.showScores?"btn btn-secondary":"btn btn-success",onClick:function(){return e.changeShowScores()},disabled:!this.state.algoTypeWeighted,children:"No"})]})]})})]}),Object(a.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(a.jsx)("button",{style:{marginRight:"10px"},className:"btn btn-danger my-2 my-sm-0",onClick:function(t){return e.clear(t)},children:"Clear Grid"}),Object(a.jsxs)("button",{className:"btn btn-primary sm",onClick:function(t){return e.Visualize(t,e.state.showScores)},children:["Visualize ",this.state.currentAlgo]})]})]})]}),Object(a.jsx)(T,{ref:this.child,currentAlgo:this.state.currentAlgo})]})}}]),n}(r.a.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(V,{}),document.getElementById("root")),C()}},[[19,1,2]]]);
//# sourceMappingURL=main.1a423e0b.chunk.js.map