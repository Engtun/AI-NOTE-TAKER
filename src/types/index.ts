export interface Course {
    id: string;
    title: string;
    description?: string;
    createdAt: Date;
}

export interface Note {
    id: string;
    title: string;
    content: string;
    courseId: string;
    createdAt: Date;
    reviewDate?: Date;
}

export interface Metadata {
    createdAt: Date;
    reviewDate?: Date;
    tags?: string[];
}