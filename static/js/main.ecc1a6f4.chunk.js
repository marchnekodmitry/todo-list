(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){t.exports=n(25)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(9),l=n.n(r),c=n(7),i=n(10),s=n(6),u=n(1),m=n(2),d=n(4),f=n(3),h=n(5),b=(n(18),function(t){var e=t.todo,n=t.done;return o.a.createElement("div",{className:"app-header"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("p",null,"".concat(e," more to do, ").concat(n," done")))}),p=n(11),g=(n(19),function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.data,n=t.onDeleted,a=t.onToggleDone,r=t.onToggleImportant,l="todo-list-item-text";return e.done&&(l+=" done"),e.important&&(l+=" important"),o.a.createElement("div",{className:"todo-list-item-inner"},o.a.createElement("span",{className:l,onClick:a},e.label),o.a.createElement("button",{className:"todo-list-button btn btn-outline-danger",onClick:n},o.a.createElement("svg",{width:"1em",height:"1em","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"tomato",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}))),o.a.createElement("button",{className:"todo-list-button btn btn-outline-success",onClick:r},o.a.createElement("svg",{width:"1em",height:"1em","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation",className:"svg-inline--fa fa-exclamation fa-w-6",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},o.a.createElement("path",{fill:"#28a745",d:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"}))))}}]),e}(o.a.Component)),v=(n(20),function(t){var e=t.todos,n=t.onDeleted,a=t.onToggleDone,r=t.onToggleImportant,l=e.map(function(t){var e=t.id,l=Object(p.a)(t,["id"]);return o.a.createElement("li",{className:"todo-list-item list-group-item",key:e},o.a.createElement(g,{data:l,onDeleted:function(){n(e)},onToggleDone:function(){return a(e)},onToggleImportant:function(){return r(e)}}))});return o.a.createElement("ul",{className:"todo-list list-group"},l)}),O=(n(21),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={term:""},n.onChange=function(t){var e=t.target.value;n.setState({term:e}),n.props.setTerm(e)},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{className:"form-control search-panel",type:"text",placeholder:"search",onChange:this.onChange,value:this.state.label})}}]),e}(o.a.Component)),j=(n(22),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={filter:"All"},n.buttons=[{name:"All",label:"All"},{name:"Active",label:"Active"},{name:"Done",label:"Done"}],n.onButtonsClick=function(t){var e=t.target.name;n.setState({filter:e}),n.props.setFilter(e)},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this,e=this.buttons.map(function(e){var n=e.name,a=e.label;return o.a.createElement("button",{className:t.state.filter===n?"btn btn-outline-info active":"btn btn-outline-secondary",name:n,key:n},a)});return o.a.createElement("div",{className:"btn-group",onClick:this.onButtonsClick},e)}}]),e}(o.a.Component)),E=(n(23),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={label:""},n.onSubmit=function(t){t.preventDefault(),""!==n.state.label&&(n.props.addItem(n.state.label),n.setState({label:""}))},n.onInputChange=function(t){n.setState({label:t.target.value})},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-item",onSubmit:this.onSubmit},o.a.createElement("input",{className:"add-item-search-panel form-control",type:"text",placeholder:"todo",onChange:this.onInputChange,value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-info"},"Add"))}}]),e}(o.a.Component)),w=(n(24),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).maxId=100,n.state={todoData:[{label:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438",important:!1,done:!1,id:1},{label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u043e\u0439",important:!0,done:!1,id:2},{label:"\u041a\u043e\u043c\u043c\u0438\u0442\u044b",important:!1,done:!1,id:3}],term:"",filter:"All"},n.deleteItem=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t});return{todoData:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}})},n.addItem=function(t){n.setState(function(e){var a=e.todoData,o={label:t,important:!1,done:!1,id:n.maxId++};return{todoData:[].concat(Object(s.a)(a),[o])}})},n.toggleProperty=function(t,e,n){var a=t.findIndex(function(t){return t.id===e}),o=t[a],r=Object(i.a)({},o,Object(c.a)({},n,!o[n]));return[].concat(Object(s.a)(t.slice(0,a)),[r],Object(s.a)(t.slice(a+1)))},n.onToggleImportant=function(t){n.setState(function(e){var a=e.todoData;return{todoData:n.toggleProperty(a,t,"important")}})},n.onToggleDone=function(t){n.setState(function(e){var a=e.todoData;return{todoData:n.toggleProperty(a,t,"done")}})},n.setTerm=function(t){n.setState({term:t})},n.search=function(t,e){return""===n.state.term?t:t.filter(function(t){return-1!==t.label.toLowerCase().indexOf(n.state.term.toLowerCase())})},n.setFilter=function(t){n.setState({filter:t})},n.statusFilter=function(t,e){switch(e){case"All":return t;case"Done":return t.filter(function(t){return t.done});case"Active":return t.filter(function(t){return!t.done});default:return console.error("Wrong filter property"),t}},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this,e=this.state.todoData,n=this.search(e,this.state.term),a=this.statusFilter(n,this.state.filter),r=e.filter(function(t){return!1===t.done}).length,l=e.length-r;return o.a.createElement("div",{className:"container"},o.a.createElement(b,{todo:r,done:l}),o.a.createElement("div",{className:"filter-wrapper"},o.a.createElement(O,{setTerm:function(e){return t.setTerm(e)}}),o.a.createElement(j,{setFilter:function(e){return t.setFilter(e)}})),o.a.createElement(v,{todos:a,onDeleted:function(e){return t.deleteItem(e)},onToggleDone:function(e){return t.onToggleDone(e)},onToggleImportant:function(e){return t.onToggleImportant(e)}}),o.a.createElement(E,{addItem:function(e){return t.addItem(e)}}))}}]),e}(o.a.Component));l.a.render(o.a.createElement(w,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.ecc1a6f4.chunk.js.map