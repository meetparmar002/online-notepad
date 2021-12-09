import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import debounce from '../../helper'
import styles from './styles'
import '../../../node_modules/react-quill/dist/quill.snow.css'
import {modules} from './Settings'
import BorderColorIcon from '@mui/icons-material/BorderColor'


class Editor extends Component {
    state={
        title: '',
        content:'',
        id:''
    }
    
    componentDidMount=()=>{
        this.setState({
            title:this.props.selectedNote.title,
            content:this.props.selectedNote.content,
            id:this.props.selectedNote.id
        })
    }

    componentDidUpdate=()=>{
        if(this.props.selectedNote.id!==this.state.id){
            this.setState({
                title:this.props.selectedNote.title,
                content:this.props.selectedNote.content,
                id:this.props.selectedNote.id
            })  
        }
    }

    updateDb=debounce(()=>{
        this.props.updateNote(this.state.id,{
            title:this.state.title,
            content:this.state.content
        })
    },500)

    updateContent=(val)=>{
        this.setState({
            content:val
        })
        this.updateDb()
    }

    updateTitle=async (title)=>{
        await this.setState({
            title:title
        })
        this.updateDb()
    }
    
    render() {
        const {classes}=this.props
        return (
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}/>
                <input type="text" 
                className={classes.titleInput}
                placeholder='Add title...'
                value={this.state.title}    
                onChange={(e)=>this.updateTitle(e.target.value)}
                />
                <ReactQuill
                    placeholder='Start writing your note...'
                    value={this.state.content}
                    onChange={this.updateContent}
                    modules={modules}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Editor)
