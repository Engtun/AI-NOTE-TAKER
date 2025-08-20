import React, { useState } from 'react';

const MetadataForm: React.FC<{ onSubmit: (metadata: { createdDate: string; reviewDate?: string }) => void }> = ({ onSubmit }) => {
    const [createdDate, setCreatedDate] = useState('');
    const [reviewDate, setReviewDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ createdDate, reviewDate });
        setCreatedDate('');
        setReviewDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="metadata-form">
            <div>
                <label htmlFor="createdDate">Date Created:</label>
                <input
                    type="date"
                    id="createdDate"
                    value={createdDate}
                    onChange={(e) => setCreatedDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="reviewDate">Optional Review Date:</label>
                <input
                    type="date"
                    id="reviewDate"
                    value={reviewDate}
                    onChange={(e) => setReviewDate(e.target.value)}
                />
            </div>
            <button type="submit">Save Metadata</button>
        </form>
    );
};

export default MetadataForm;