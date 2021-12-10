import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import styles from './styles'
import {Button,List,Divider} from '@material-ui/core'
import SidebarItem from '../SidebarItem/Sidebaritem'
import AddBoxIcon from '@mui/icons-material/AddBox';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

class Sidebar extends Component {
    state={
        addingNote:false,
        title:null
    }

    newNoteBtnClickHandler=()=>{
        const newAddingNote=!this.state.addingNote
        this.setState({
            addingNote:newAddingNote,
            title:null
        })
    }

    updateTitleHandler=(currTitle)=>{
        this.setState({
            title:currTitle
        })
    }

    newNoteSubmitHandler=(title)=>{
        if(title===null || title===''){
            window.alert('Please Enter The Title')
            this.setState({addingNote:true})
        }else{
            this.props.createNote(title)
            this.setState({
                title:null,
                addingNote:false,
            })
        }
    }

    searchNote=(query)=>this.props.searchNote(query)
    selectNoteHandler=(note,index)=>this.props.selectNote(note,index)
    deleteNoteHandler=(note)=>this.props.deleteNote(note)
    render() {
        const {notes, classes, selectedNoteIndex}=this.props
        let newNoteInput=this.state.addingNote?
                    (<div>
                        <input type="text" 
                        className={classes.newNoteInput}
                        placeholder='Enter Note Title...'
                        onKeyUp={e=>this.updateTitleHandler(e.target.value)}/>
                        <Button
                        className={classes.newNoteSubmitBtn}
                        onClick={()=>this.newNoteSubmitHandler(this.state.title)}><CheckCircleIcon/></Button>
                    </div>):
                    null;

        let noteList=(notes!==null)?notes.map((note,i)=>{
            return (
                <div key={i}>
                    <SidebarItem
                    note={note}
                    index={i}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNoteHandler}
                    deleteNote={this.deleteNoteHandler}
                    />
                    <Divider/>
                </div>
            )
        }):<div>Fatching Notes...</div>;
        return (
            <div className={classes.sidebarContainer}>
                <Button
                onClick={this.newNoteBtnClickHandler}
                className={!this.state.addingNote
                ?classes.newNoteBtn:classes.cancelNoteBtn}
                >{!this.state.addingNote
                ?<AddBoxIcon/>:<CancelIcon/>}</Button>
                {newNoteInput}
                <input 
                    className={classes.newNoteInput}
                    type='text'
                    placeholder="Search your notes..."
                    onKeyUp={(e)=>this.searchNote(e.target.value)}
                />
                <List>
                    {noteList}
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar)
