import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { ArrowUndoOutline, ArrowRedoOutline, TrashOutline, CreateOutline } from 'react-ionicons'
import '/src/admin/css/AdminMessages.css';

const AdminMessage = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState([]);
    const [selectedId, setSelectedId] = useState('');

    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await fetch('https://localhost:44345/api/Message');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error("Fetch error: " + error.message);
            }
        }

        fetchMessages();
    }, []);

    function getMessage(messageId) {
        setSelectedId(messageId);
        fetchMessageDetails(messageId);
    }

    function deleteMessage(messageId) {
        fetch(`https://localhost:44345/api/meetings/${messageId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    setMessages(messages.filter(message => message.id !== messageId));
                } else {
                    alert('The meeting could not be deleted');
                }
            })
            .catch(error => console.error('There was an error:', error));
    }

    const formatDate = (dateString) => {
        const now = new Date();
        const messageDate = new Date(dateString);
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const timeFormatter = new Intl.DateTimeFormat('en', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        
        const dateFormatter = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });

        if (messageDate.toDateString() === now.toDateString()) {
            return timeFormatter.format(messageDate);
        } else if (messageDate.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return dateFormatter.format(messageDate);
        }
    };

    const formatMessageDate = (dateString) => {
        if (dateString) {
            const now = new Date();
            const messageDate = new Date(dateString);
            const yesterday = new Date(now);
            yesterday.setDate(yesterday.getDate() - 1);

            const timeFormatter = new Intl.DateTimeFormat('en', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });

            const dateFormatter = new Intl.DateTimeFormat('en', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });

            if (messageDate.toDateString() === now.toDateString()) {
                return timeFormatter.format(messageDate);
            } else if (messageDate.toDateString() === yesterday.toDateString()) {
                return 'Yesterday at ' + timeFormatter.format(messageDate);
            } else {
                return dateFormatter.format(messageDate) + timeFormatter.format(messageDate);
            }
        } else {
            return null
        }
    };

    const fetchMessageDetails = async (messageId) => {
        try {
            const response = await fetch(`https://localhost:44345/api/Message/${messageId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const messageDetails = await response.json();
            setMessage(messageDetails);
        } catch (error) {
            console.error(`Could not fetch message: ${error}`);
        }
    }

    const sanitizeAndFormatMessage = (message) => {
        if (message)
            return DOMPurify.sanitize(message.replace(/\n/g, '<br />'), { USE_PROFILES: { html: true } });
    };

    return (
        <div className="message-page-container">
            <aside className="message-sidebar">
                <nav className="message-sidebar-nav">
                    <ul className="messsage-sidebar-menu">
                        {messages.map(item => (
                            <li key={item.id}>
                                <a className={`message-item ${selectedId === item.id ? 'active' : ''}`} id={item.id} onClick={() => getMessage(item.id)}>
                                    <span className="message-name">{item.name}</span>
                                    <span className="message-date">{formatDate(item.date)}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div className="message-view">
                <div className="message-controls">
                    <a>
                        <ArrowUndoOutline
                            color={'#00000'}
                            title={''}
                            height="2rem"
                            width="2rem"    
                        />
                    </a>
                    <a>
                        <ArrowRedoOutline
                            color={'#00000'}
                            title={''}
                            height="2rem"
                            width="2rem"
                        />
                    </a>
                    <a>
                        <TrashOutline
                            color={'#00000'}
                            title={''}
                            height="2rem"
                            width="2rem"
                        />
                    </a>
                    <a>
                        <CreateOutline
                            color={'#00000'}
                            title={''}
                            height="2rem"
                            width="2rem"
                        />
                    </a>
                </div>
                <div className="message-body">
                    <div className="message-header">
                        <div className="header-top">
                            <span className="name" key={'name'}>{message.name}</span>
                            <span className="date" key={'date'}>{formatMessageDate(message.messageDate)}</span>
                        </div>
                        <div className="header-bottom">
                            <span key={'from'}>{message.email && 'From:'+message.email}</span>
                        </div>
                    </div>
                    <div className="message">
                        <div dangerouslySetInnerHTML={{ __html: sanitizeAndFormatMessage(message.messageText) }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMessage;
