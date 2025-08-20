import React from 'react';
import CourseList from '../components/CourseList';
import Layout from '../components/Layout';

const Courses: React.FC = () => {
    return (
        <Layout>
            <h1>Manage Your Courses</h1>
            <CourseList />
        </Layout>
    );
};

export default Courses;