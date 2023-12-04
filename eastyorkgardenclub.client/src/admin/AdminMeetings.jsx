import { useState, useEffect } from 'react';
import '/src/admin/css/AdminMeetings.css';

const AdminMeetings = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [details, setDetails] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        async function fetchMeetings() {
            try {
                const response = await fetch('https://localhost:44345/api/Meetings');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMeetings(data);
            } catch (error) {
                console.error("Fetch error: " + error.message);
            }
        }

        fetchMeetings();
    }, []);

    function deleteMeeting(meetingId) {
        fetch(`https://localhost:44345/api/meetings/${meetingId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    setMeetings(meetings.filter(meeting => meeting.id !== meetingId));
                } else {
                    alert('The meeting could not be deleted');
                }
            })
            .catch(error => console.error('There was an error:', error));
    }


    function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];

        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            const sizeInKB = file.size / 1024;
            const maxAllowedSize = 500; // Max size in KB

            if (sizeInKB > maxAllowedSize) {
                alert(`The image size should be less than ${maxAllowedSize} KB`);
                return;
            } else {
                setImage(file);
            }
        } else {
            alert('Please drop a JPEG or PNG image.');
        }
    }
}

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleMeetingFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('image', image);
        formData.append('details', details);
        formData.append('speaker', speaker);

        const response = await fetch('https://localhost:44345/api/meetings', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setTitle('');
            setDate('');
            setImage(null);
            setDetails('');
            setSpeaker('');
            setErrorMessage('');
            const updateResponse = await fetch('https://localhost:44345/api/Meetings');
            if (!updateResponse.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const updateData = await updateResponse.json();
            setMeetings(updateData);
        } else {
            setErrorMessage('Failed to upload news. Please try again.');
        }
    };

    return (
        <form className="admin-form-container" onSubmit={handleMeetingFormSubmit}>
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
                    type="text"
                    placeholder="Speaker"
                    value={speaker}
                    onChange={(e) => setSpeaker(e.target.value)}
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
                    {image ? image.name : ("Drag and drop an image here or click to select<br />Recommended size 1024 X 682 px<br />Max file size: 500kb<br />(JPEG and PNG)").split('<br />').map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < 3 && <br />}
                        </span>
                    ))
                    }
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
                <textarea
                    className="textArea"
                    placeholder="Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="field-group">
                <button className="btn" type="submit">Upload</button>
            </div>
            <table style={{ borderCollapse: 'separate', borderSpacing: '10px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Topic</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Speaker</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {meetings.map((meetings) => (
                        <tr key={meetings.id}>
                            <td>{meetings.title}</td>
                            <td>{meetings.speaker}</td>
                            <td>{new Date(meetings.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}</td>
                            <td><button onClick={() => deleteMeeting(meetings.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </form>
    );
};

export default AdminMeetings;
