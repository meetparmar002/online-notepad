import './App.css';
import { React, Component } from 'react'
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {db} from './firebase.config' 
import Editor from './components/Editor/Editor';
import Sidebar from './components/Sidebar/Sidebar';

const notesCollectionRef=collection(db,'notes')
class App extends Component{
  state={
    selectedNoteIndex:null,
    selectedNote:null,
    notes:null
  };


  selectNote=(note,index)=>{
    this.setState({
      selectedNoteIndex:index,
      selectedNote:note
    })
  }

  deleteNote=async(id)=>{
    const noteRef=doc(db,'notes',id);
    const index=this.state.notes.findIndex(n=>n.id===id);
    await deleteDoc(noteRef);

    let currNotes=this.state.notes;
    currNotes.splice(index,1);
    if(this.state.selectedNoteIndex===index){
      await this.setState({
        selectedNote:null,
        selectedNoteIndex:null
      })
    }
    await this.setState({
      notes:currNotes
    })
  }

  createNote= async(newtitle)=>{
    let note={
      title:newtitle,
      content:''
    };
    const newNote=await addDoc(notesCollectionRef,{
      title:note.title,
      content:note.content,
    });
    const newID=newNote.id;
    note={...note,id:newID}
    
    await this.setState({
      notes:[...this.state.notes,note]
    })
    
    const newNoteIndex=this.state.notes.findIndex(n=>n.id===newID);
    await this.setState({
      selectedNote:this.state.notes[newNoteIndex],
      selectedNoteIndex:newNoteIndex
    })
  }

  updateNote=async (id,noteObj)=>{
    const noteRef=doc(db,'notes',id)
    await updateDoc(noteRef,{
      title:noteObj.title,
      content:noteObj.content,
    })

    let currNotes=this.state.notes;
    const updatedNoteIndex=currNotes.findIndex(n=>n.id===id)
    currNotes[updatedNoteIndex]={
      id:id,
      title:noteObj.title,
      content:noteObj.content
    }
    await this.setState({
      notes:currNotes,
    })
  }

  searchNote=(q)=>{
    const getNotes=async()=>{
      const data=await getDocs(notesCollectionRef)
      console.log(data);
      if(q!==''&&q!==null){
        this.setState({
          notes:this.state.notes.filter(n=>n.title.includes(q))
        })
      }
      else{
        this.setState({
          notes:data.docs.map(doc=>({...doc.data(),id:doc.id})) 
        })
      }
    }
    getNotes()
  }
  render(){
    return(
      <div className="app-container">
        <Sidebar 
          notes={this.state.notes} 
          selectedNoteIndex={this.state.selectedNoteIndex}
          selectNote={this.selectNote}
          deleteNote={this.deleteNote}
          createNote={this.createNote}
          searchNote={this.searchNote}>
        </Sidebar>
        {
          this.state.selectedNote?<Editor
          selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          updateNote={this.updateNote}/>:null
        }
        
      </div>
    )
  }

  componentDidMount=()=>{
    const getNotes=async ()=>{
      const data=await getDocs(notesCollectionRef)
      this.setState({
        notes:data.docs.map(doc=>({...doc.data(),id:doc.id}))
      })
      // console.log(data.docs.map(doc=>({...doc.data(),id:doc.id})));
    }
    getNotes()  
  }
}

export default App;