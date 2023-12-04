import { useState, useEffect } from 'react';
import '/src/admin/css/AdminMeetings.css';

const AdminNews = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('https://localhost:44345/api/NewsLetters');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error("Fetch error: " + error.message);
            }
        }

        fetchNews();
    }, []);

    function deleteNews(newsId) {
        fetch(`https://localhost:44345/api/NewsLetters/${newsId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    setErrorMessage('');
                    setNews(news.filter(meeting => meeting.id !== newsId));
                } else {
                    setErrorMessage('The meeting could not be deleted');
                }
            })
            .catch(error => console.error('There was an error:', error));
    }


    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleNewsFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('File', file);

        try {
            const response = await fetch('https://localhost:44345/api/NewsLetters', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setName('');
                setFile(null);
                setErrorMessage('');
                const updatedResponse = await fetch('https://localhost:44345/api/NewsLetters');
                if (updatedResponse.ok) {
                    const updatedNews = await updatedResponse.json();
                    setNews(updatedNews);
                }
            } else {
                setErrorMessage('Failed to upload news. Please try again.');
                console.error('Response not OK:', response);
                const responseText = await response.text();
                console.error('Response text:', responseText);
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form className="admin-form-container" onSubmit={handleNewsFormSubmit}>
            <div className="field-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="field-group">
                <div
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById('pdf-upload').click()}
                >
                    {file ? file.name : ("Drag and drop an file here or click to select")}
                </div>
                <input
                    id="pdf-upload"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: 'none' }}
                    accept="application/pdf"
                />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="field-group">
                <button className="btn" type="submit">Upload</button>
            </div>
            <table style={{ borderCollapse: 'separate', borderSpacing: '10px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((news) => (
                        <tr key={news.id}>
                            <td>{news.name}</td>
                            <td><button onClick={() => deleteNews(news.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </form>
    );
};

export default AdminNews;
