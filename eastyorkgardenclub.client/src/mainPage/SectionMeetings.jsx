import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SectionMeetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
    };
  }

  componentDidMount() {
    this.fetchMeetings();
  }

  fetchMeetings = async () => {
    try {
      const response = await fetch("https://localhost:44345/api/Meetings");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ meetings: data });
    } catch (error) {
      throw new Error(`HTTP error! Status: ${error}`);
    }
  };

  render() {
    const { navigate } = this.props;
    const { meetings } = this.state;

    return (
      <section className="section-meetings">
        <div className="container">
          <h1 className="heading-primary">Meetings</h1>
          <p className="heading-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quisquam aliquam, dolorem voluptates obcaecati pariatur.
          </p>
          <div className="grid grid--4-cols">
            {meetings.slice(0, 4).map((meeting) => (
              <div key={meeting.id} className="meeting-slide">
                <div className="meeting-card">
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
                    <Link
                      className="meeting-link"
                      onClick={() => navigate("meetingDetail", meeting.id)}
                    >
                      Continue reading &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

SectionMeetings.propTypes = {
  navigate: PropTypes.func,
};

export default SectionMeetings;
