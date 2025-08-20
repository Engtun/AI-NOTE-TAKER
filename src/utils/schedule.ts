import { useState } from 'react';

export interface ReviewDate {
    id: string;
    noteId: string;
    date: Date;
}

export const useSchedule = () => {
    const [reviewDates, setReviewDates] = useState<ReviewDate[]>([]);

    const addReviewDate = (noteId: string, date: Date) => {
        const newReviewDate: ReviewDate = {
            id: `${noteId}-${date.toISOString()}`,
            noteId,
            date,
        };
        setReviewDates((prev) => [...prev, newReviewDate]);
    };

    const removeReviewDate = (id: string) => {
        setReviewDates((prev) => prev.filter((date) => date.id !== id));
    };

    const getReviewDatesForNote = (noteId: string) => {
        return reviewDates.filter((date) => date.noteId === noteId);
    };

    return {
        reviewDates,
        addReviewDate,
        removeReviewDate,
        getReviewDatesForNote,
    };
};