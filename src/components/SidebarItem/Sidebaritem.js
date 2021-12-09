import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import styles from './styles'
import {removeHTMLTags} from '../../helper'
import { ListItem, ListItemText } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';

class Sidebaritem extends Component {

    selectNote=(note,index)=>{
        this.props.selectNote(note,index)
    }

    deleteNote=(note)=>{
        if(window.confirm(`Delete "${note.title}"?`))
            this.props.deleteNote(note.id)
    }
    render() {
        const {note, index, classes, selectedNoteIndex}=this.props;
        return (
            <div key={index}>
               <ListItem
                className={classes.listItem}
                selected={selectedNoteIndex===index}
                alignItems='flex-start'>
                    <div
                    className={classes.textSection}
                    onClick={()=>this.selectNote(note,index)}>
                        <ListItemText
                        primary={
                            note.title===null || note.title===''?
                            'untitled':
                            note.title
                        }
                        secondary={removeHTMLTags(note.content.substring(0,50))+'...'}/>
                    </div>
                    {/* <small>Created: {note.createdAt}</small><p></p>
                    <small>Last Modified: {note.modifiedAt}</small> */}
                    
                    <DeleteIcon 
                    onClick={()=>this.deleteNote(note)}
                    className={classes.deleteIcon}
                    />
               </ListItem>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebaritem)
