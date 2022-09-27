import React, { useState,useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default function ArticleEditor(props) {
  const [editorState, SetedItorState] = useState("");

  useEffect(()=>{
    const html = props.content;
    if(html === undefined) return 
    const contentBlock = htmlToDraft(html);
    if(contentBlock){
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState)
      console.log(editorState)
      SetedItorState(editorState)
    }
  },[props.content])
  return (
    <Editor 
      editorState={editorState} 
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName" 
      editorClassName="editorClassName" 
      style={{
        minHeight: '600px',
        minWith: '1000px',
      }} 
      onEditorStateChange={(editorState => {
        SetedItorState(editorState)
      })} 
      onBlur={()=>{
        var descrCount=draftToHtml(convertToRaw(editorState.getCurrentContent()));
        props.getContent(descrCount)
      }}
      />
  )
}
