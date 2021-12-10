(this["webpackJsonponline-notepad"]=this["webpackJsonponline-notepad"]||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(29),c=n.n(r),i=n(16),s=n(43),l=n(0),d=n.n(l),u=n(4),p=n(1),b=n(3),h=n(7),x=n(8),f=(n(96),n(31)),j=n(80),N=n(52),O=Object(j.a)({apiKey:"AIzaSyCrodWJQMiVXJTU0QUS9zaVUFwhJ2O_bE0",authDomain:"online-notepad-e0ac4.firebaseapp.com",projectId:"online-notepad-e0ac4",storageBucket:"online-notepad-e0ac4.appspot.com",messagingSenderId:"221144266706",appId:"1:221144266706:web:5192f7e356cd6be11bba0b",measurementId:"G-N2PZHP8BNF"}),g=Object(N.f)(O),v=n(203),m=n(81),w=n.n(m);function k(e,t,n){var o,a;return function(){function r(){o=null,n||(a=e.apply(c,i))}var c=this,i=arguments;return clearTimeout(o),o=setTimeout(r,t),n&&!o&&(a=e.apply(c,i)),a}}var I=function(e){return{root:{backgroundColor:"red",height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},titleInput:{height:"50px",boxSizing:"border-box",border:"none",padding:"5px",fontSize:"24px",width:"calc(100% - 300px)",backgroundColor:"#29487d",color:"white",paddingLeft:"50px"},editIcon:{position:"absolute",left:"310px",top:"12px",color:"white",width:"10",height:"10"},editorContainer:{height:"720px",boxSizing:"border-box"}}},S=(n(171),{toolbar:[[{font:[]}],[{header:1},{header:2}],[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],[{align:[]}],["clean"]]}),C=n(82),y=n.n(C),B=n(10),H=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:"",content:"",id:""},e.componentDidMount=function(){e.setState({title:e.props.selectedNote.title,content:e.props.selectedNote.content,id:e.props.selectedNote.id})},e.componentDidUpdate=function(){e.props.selectedNote.id!==e.state.id&&e.setState({title:e.props.selectedNote.title,content:e.props.selectedNote.content,id:e.props.selectedNote.id})},e.updateDb=k((function(){e.props.updateNote(e.state.id,{title:e.state.title,content:e.state.content})}),500),e.updateContent=function(t){e.setState({content:t}),e.updateDb()},e.updateTitle=function(){var t=Object(u.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({title:n});case 2:e.updateDb();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(B.jsxs)("div",{className:t.editorContainer,children:[Object(B.jsx)(y.a,{className:t.editIcon}),Object(B.jsx)("input",{type:"text",className:t.titleInput,placeholder:"Add title...",value:this.state.title,onChange:function(t){return e.updateTitle(t.target.value)}}),Object(B.jsx)(w.a,{placeholder:"Start writing your note...",value:this.state.content,onChange:this.updateContent,modules:S})]})}}]),n}(o.Component),T=Object(v.a)(I)(H),D=n(18),z=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},newNoteBtn:{width:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#29487d",color:"white","&:hover":{backgroundColor:"#88a2ce"}},cancelNoteBtn:{width:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#ff1f2e",color:"white","&:hover":{backgroundColor:"#f7656f"}},sidebarContainer:{marginTop:"5px",width:"300px",height:"720px",boxSizing:"border-box",float:"left",overflowY:"scroll",overflowX:"hidden"},newNoteInput:{width:"100%",margin:"2px",height:"35px",outline:"none",border:"none",paddingLeft:"5px","&:focus":{outline:"2px solid rgba(81, 203, 238, 1)"}},newNoteSubmitBtn:{width:"100%",backgroundColor:"#28787c",borderRadius:"0px","&:hover":{backgroundColor:"#6ff29f"}}}},A=n(200),J=n(201),M=n(202),U=function(e){return{listItem:{cursor:"pointer"},textSection:{maxWidth:"85%"},deleteIcon:{position:"absolute",right:"5px",top:"calc(50% - 15px)","&:hover":{color:"red"}}}},E=n(204),R=n(205),F=n(83),P=n.n(F),K=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).selectNote=function(t,n){e.props.selectNote(t,n)},e.deleteNote=function(t){window.confirm('Delete "'.concat(t.title,'"?'))&&e.props.deleteNote(t.id)},e}return Object(b.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.note,a=n.index,r=n.classes,c=n.selectedNoteIndex;return Object(B.jsx)("div",{children:Object(B.jsxs)(E.a,{className:r.listItem,selected:c===a,alignItems:"flex-start",children:[Object(B.jsx)("div",{className:r.textSection,onClick:function(){return t.selectNote(o,a)},children:Object(B.jsx)(R.a,{primary:null===o.title||""===o.title?"untitled":o.title,secondary:(e=o.content.substring(0,50),e.replace(/<[^>]*>?/gm,"")+"...")})}),Object(B.jsx)(P.a,{onClick:function(){return t.deleteNote(o)},className:r.deleteIcon})]})},a)}}]),n}(o.Component),L=Object(v.a)(U)(K),Q=n(85),V=n.n(Q),W=n(86),X=n.n(W),q=n(84),G=n.n(q),Y=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={addingNote:!1,title:null},e.newNoteBtnClickHandler=function(){var t=!e.state.addingNote;e.setState({addingNote:t,title:null})},e.updateTitleHandler=function(t){e.setState({title:t})},e.newNoteSubmitHandler=function(t){null===t||""===t?(window.alert("Please Enter The Title"),e.setState({addingNote:!0})):(e.props.createNote(t),e.setState({title:null,addingNote:!1}))},e.selectNoteHandler=function(t,n){return e.props.selectNote(t,n)},e.deleteNoteHandler=function(t){return e.props.deleteNote(t)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notes,o=t.classes,a=t.selectedNoteIndex,r=this.state.addingNote?Object(B.jsxs)("div",{children:[Object(B.jsx)("input",{type:"text",className:o.newNoteInput,placeholder:"Enter Note Title...",onKeyUp:function(t){return e.updateTitleHandler(t.target.value)}}),Object(B.jsx)(A.a,{className:o.newNoteSubmitBtn,onClick:function(){return e.newNoteSubmitHandler(e.state.title)},children:Object(B.jsx)(G.a,{})})]}):null,c=null!==n?n.map((function(t,n){return Object(B.jsxs)("div",{children:[Object(B.jsx)(L,{note:t,index:n,selectedNoteIndex:a,selectNote:e.selectNoteHandler,deleteNote:e.deleteNoteHandler}),Object(B.jsx)(J.a,{})]},n)})):Object(B.jsx)("div",{children:"Fatching Notes..."});return Object(B.jsxs)("div",{className:o.sidebarContainer,children:[Object(B.jsx)(A.a,{onClick:this.newNoteBtnClickHandler,className:this.state.addingNote?o.cancelNoteBtn:o.newNoteBtn,children:this.state.addingNote?Object(B.jsx)(X.a,{}):Object(B.jsx)(V.a,{})}),r,Object(B.jsx)(M.a,{children:c})]})}}]),n}(o.Component),Z=Object(D.a)(z)(Y),_=Object(f.b)(g,"notes"),$=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={selectedNoteIndex:null,selectedNote:null,notes:null},e.selectNote=function(t,n){e.setState({selectedNoteIndex:n,selectedNote:t})},e.deleteNote=function(){var t=Object(u.a)(d.a.mark((function t(n){var o,a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(f.d)(g,"notes",n),a=e.state.notes.findIndex((function(e){return e.id===n})),t.next=4,Object(f.c)(o);case 4:if((r=e.state.notes).splice(a,1),e.state.selectedNoteIndex!==a){t.next=9;break}return t.next=9,e.setState({selectedNote:null,selectedNoteIndex:null});case 9:return t.next=11,e.setState({notes:r});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.createNote=function(){var t=Object(u.a)(d.a.mark((function t(n){var o,a,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={title:n,content:""},t.next=3,Object(f.a)(_,{title:o.title,content:o.content});case 3:return a=t.sent,r=a.id,o=Object(s.a)(Object(s.a)({},o),{},{id:r}),t.next=8,e.setState({notes:[].concat(Object(i.a)(e.state.notes),[o])});case 8:return c=e.state.notes.findIndex((function(e){return e.id===r})),t.next=11,e.setState({selectedNote:e.state.notes[c],selectedNoteIndex:c});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateNote=function(){var t=Object(u.a)(d.a.mark((function t(n,o){var a,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(f.d)(g,"notes",n),t.next=3,Object(f.f)(a,{title:o.title,content:o.content});case 3:return r=e.state.notes,c=r.findIndex((function(e){return e.id===n})),r[c]={id:n,title:o.title,content:o.content},t.next=8,e.setState({notes:r});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.componentDidMount=function(){var t=function(){var t=Object(u.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.e)(_);case 2:n=t.sent,e.setState({notes:n.docs.map((function(e){return Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id})}))});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("div",{className:"app-container",children:[Object(B.jsx)(Z,{notes:this.state.notes,selectedNoteIndex:this.state.selectedNoteIndex,selectNote:this.selectNote,deleteNote:this.deleteNote,createNote:this.createNote}),this.state.selectedNote?Object(B.jsx)(T,{selectedNote:this.state.selectedNote,selectedNoteIndex:this.state.selectedNoteIndex,notes:this.state.notes,updateNote:this.updateNote}):null]})}}]),n}(o.Component),ee=$;c.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(ee,{})}),document.getElementById("root"))},96:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.b8234ea4.chunk.js.map