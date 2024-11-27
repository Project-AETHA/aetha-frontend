export default function ChapterTable() {

    const initialChapters = [
        { id: 1, name: 'Chapter 1', status: 'Published', wordCount: 2000, scheduledDate: '2024-07-01' },
        { id: 2, name: 'Chapter 2', status: 'Published', wordCount: 1800, scheduledDate: '2024-07-01' },
        { id: 3, name: 'Chapter 3', status: 'Published', wordCount: 1200, scheduledDate: '2024-07-03' },
        { id: 4, name: 'Chapter 4', status: 'Published', wordCount: 2200, scheduledDate: '2024-07-15' },
        { id: 5, name: 'Chapter 5', status: 'Published', wordCount: 1900, scheduledDate: '2024-07-15' },
        { id: 6, name: 'Chapter 6', status: 'Published', wordCount: 2100, scheduledDate: '2024-07-21' },
        { id: 7, name: 'Chapter 7', status: 'Published', wordCount: 1700, scheduledDate: '2024-07-28' },
        { id: 8, name: 'Chapter 8', status: 'Waiting', wordCount: 2300, scheduledDate: '2024-08-05' },
        { id: 9, name: 'Chapter 9', status: 'Waiting', wordCount: 2000, scheduledDate: '2024-08-12' },
        { id: 10, name: 'Chapter 10', status: 'Waiting', wordCount: 1800, scheduledDate: '2024-08-19' },
    ];

    const statusColorMap = {
        Published: "success",
        Waiting: "warning",
        Draft: "default",
    };

    return (
        <div>Chapter Table</div>
    );
}