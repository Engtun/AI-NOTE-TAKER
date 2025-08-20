import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const NoteEditor = () => {
    const [editorState, setEditorState] = useState();

    const handleEditorStateChange = (state) => {
        setEditorState(state);
    };

    const handleSaveNote = () => {
        const contentState = convertToRaw(editorState.getCurrentContent());
        // Logic to save the note contentState
    };

    return (
        <div className="note-editor">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorStateChange}
                toolbar={{
                    options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image'],
                }}
            />
            <button onClick={handleSaveNote}>Save Note</button>
        </div>
    );
};

export default NoteEditor;