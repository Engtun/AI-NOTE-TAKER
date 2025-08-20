import React, { useState } from 'react';

const CourseList: React.FC = () => {
    const [courses, setCourses] = useState<string[]>([]);
    const [newCourse, setNewCourse] = useState<string>('');

    const handleAddCourse = () => {
        if (newCourse.trim()) {
            setCourses([...courses, newCourse]);
            setNewCourse('');
        }
    };

    return (
        <div className="course-list">
            <h2>Your Courses</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                placeholder="Add new course"
            />
            <button onClick={handleAddCourse}>Add Course</button>
        </div>
    );
};

export default CourseList;