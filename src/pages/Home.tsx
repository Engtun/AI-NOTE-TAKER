import React from 'react';
import Layout from '../components/Layout';
import CourseList from '../components/CourseList';
import NoteEditor from '../components/NoteEditor';
import AIChatAssistant from '../components/AIChatAssistant';
import CalendarView from '../components/CalendarView';

const Home: React.FC = () => {
    return (
        <Layout>
            <h1>Welcome to Course Notes AI</h1>
            <CourseList />
            <NoteEditor />
            <AIChatAssistant />
            <CalendarView />
        </Layout>
    );
};

export default Home;