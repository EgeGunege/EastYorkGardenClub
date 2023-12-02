import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Meetings.css";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    async function fetchMeetings() {
      try {
        const response = await fetch("https://localhost:44345/api/Meetings");
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
  return (
    <section className="section-meetings">
      <div className="container">
        <nav className="breadcrumb">
          <ul>
            <li>
              <a className="breadcrumb-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="breadcrumb-link" href="#">
                Meetings
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="heading-meetings">Meetings</h1>
        <p class="heading-description">
          Our meetings will be hybrids: in-person at Stan Wadlow, and virtual,
          via Zoom. <br></br>Members will be informed of the logon information.
        </p>
        <div className="grid grid--4-cols">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="meeting-card">
              <img
                className="meeting-img"
                src={`data:${meeting.imageContentType};base64,${meeting.imageData}`}
                alt={meeting.title}
              />
              <div className="meeting-content">
                <p className="meeting-subtitle">Topic</p>
                <p className="meeting-title">{meeting.title}</p>
                <p className="meeting-date">
                  {new Date(meeting.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <Link className="meeting-link" to={meeting.readMoreLink}>
                  Continue reading &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="pagination">
        <ul>
          <li className="page-item">
            <a className="page-link Previous" href="#">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link Next" href="#">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Meetings;
