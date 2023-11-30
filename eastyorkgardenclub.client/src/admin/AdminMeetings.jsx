import { useState } from 'react';
import '/src/admin/css/AdminMeetings.css';

const AdminMeetings = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [readMoreLink, setReadMoreLink] = useState('');
    const [speaker, setSpeaker] = useState('');

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setImage(e.dataTransfer.files[0]);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('image', image);
        formData.append('readMoreLink', readMoreLink);
        formData.append('speaker', speaker);

        const response = await fetch('/api/meetings', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Handle success
        } else {
            // Handle error
        }
    };

    return (
        <form className="admin-form-container" onSubmit={handleFormSubmit}>
            <div className="field-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="field-group">
                <input
                    className="form-control"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="field-group">
                <div
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById('image-upload').click()}
                >
                    {image ? image.name : "Drag and drop an image here or click to select"}
                </div>
                <input
                    id="image-upload"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ display: 'none' }}
                    accept="image/*"
                />
            </div>
            <div className="field-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Read More Link"
                    value={readMoreLink}
                    onChange={(e) => setReadMoreLink(e.target.value)}
                />
            </div>
            <div className="field-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Speaker"
                    value={speaker}
                    onChange={(e) => setSpeaker(e.target.value)}
                />
            </div>
            <div className="field-group">
                <button className="btn" type="submit">Upload</button>
            </div>
        </form>
    );
};

export default AdminMeetings;
