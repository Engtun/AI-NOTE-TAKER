import React from 'react';

const SummaryView: React.FC<{ summaries: string[]; onDrop: (summary: string) => void }> = ({ summaries, onDrop }) => {
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const summary = event.dataTransfer.getData('text/plain');
        onDrop(summary);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="summary-view" onDrop={handleDrop} onDragOver={handleDragOver}>
            <h2>Summary View</h2>
            <ul>
                {summaries.map((summary, index) => (
                    <li key={index} draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', summary)}>
                        {summary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SummaryView;