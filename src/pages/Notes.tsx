import React from 'react';
import CourseList from '../components/CourseList';
import NoteEditor from '../components/NoteEditor';
import PDFUpload from '../components/PDFUpload';
import SummaryView from '../components/SummaryView';
import MetadataForm from '../components/MetadataForm';
import AIChatAssistant from '../components/AIChatAssistant';
import CalendarView from '../components/CalendarView';

const Notes: React.FC = () => {
    return (
        <div className="notes-page">
            <h1>Course Notes</h1>
            <CourseList />
            <NoteEditor />
            <PDFUpload />
            <SummaryView />
            <MetadataForm />
            <AIChatAssistant />
            <CalendarView />
        </div>
    );
};

export default Notes;