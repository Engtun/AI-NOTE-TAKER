import React, { useState } from 'react';
import { uploadPDF, summarizePDF } from '../utils/pdf';

const PDFUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [summary, setSummary] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError(null);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        setError(null);

        try {
            await uploadPDF(file);
            const pdfSummary = await summarizePDF(file);
            setSummary(pdfSummary);
        } catch (err) {
            setError('Failed to upload and summarize PDF. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pdf-upload">
            <h2>Upload PDF</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading || !file}>
                {loading ? 'Uploading...' : 'Upload and Summarize'}
            </button>
            {error && <p className="error">{error}</p>}
            {summary && (
                <div className="summary">
                    <h3>Summary</h3>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default PDFUpload;