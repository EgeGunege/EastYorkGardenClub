import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/MeetingsDetail.css";
import {
  CalendarOutline,
  TimeOutline,
  MicOutline,
  LocationOutline,
  DocumentAttachOutline,
} from "react-ionicons";

class MeetingsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingDetails: [],
    };
  }

  fetchMeetingDetails = async (meetingID) => {
    try {
      const response = await fetch(
        `https://localhost:44345/api/Meetings/${meetingID}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const meetingDetails = await response.json();
      this.setState({ meetingDetails });
    } catch (error) {
      console.error(`Could not fetch meeting: ${error}`);
    }
  };

  componentDidMount() {
    const { meetingID } = this.props;
    if (meetingID) {
      this.fetchMeetingDetails(meetingID);
    }
  }

  render() {
    const { onPageChange } = this.props;
    const { meetingDetails } = this.state;

    return (
      <section className="section-meeting-details">
        {
          <div className="container">
            <nav className="breadcrumb">
              <ul>
                <li>
                  <Link
                    className="breadcrumb-link"
                    onClick={() => onPageChange("home")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="breadcrumb-link"
                    onClick={() => onPageChange("meetings")}
                  >
                    Meetings
                  </Link>
                </li>
                <li className="breadcrumb-link">Meeting Details</li>
              </ul>
            </nav>
            <h1 className="heading-meeting-details">{meetingDetails.title}</h1>

            <div className="meeting-detail-box">
              <div className="meeting-detail">
                <CalendarOutline
                  color={"#808080"}
                  title={""}
                  height="2.4rem"
                  width="2.4rem"
                />
                <div>
                  <span className="meeting-detail-title">Date</span>
                  <p>
                    {new Date(meetingDetails.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="meeting-detail">
                <TimeOutline
                  color={"#808080"}
                  title={""}
                  height="2.4rem"
                  width="2.4rem"
                />
                <div>
                  <span className="meeting-detail-title">Time</span>
                  <p>07:30PM - 09:00PM</p>
                </div>
              </div>
              <div className="meeting-detail">
                <MicOutline
                  color={"#808080"}
                  title={""}
                  height="2.4rem"
                  width="2.4rem"
                />
                <div>
                  <span className="meeting-detail-title">Speaker</span>
                  <p>{meetingDetails.speaker}</p>
                </div>
              </div>
              <div className="meeting-detail">
                <LocationOutline
                  color={"#808080"}
                  title={""}
                  height="2.4rem"
                  width="2.4rem"
                />
                <div>
                  <span className="meeting-detail-title">Location</span>
                  <p>Stan Wadlow Clubhouse, 373 Cedarvale</p>
                </div>
              </div>
            </div>

            <p
              className="meeting-description"
              dangerouslySetInnerHTML={{ __html: meetingDetails.details }}
            />
            <div className="attatch-file-box">
              <div className="attatch-file-wrap">
                <DocumentAttachOutline
                  color={"#808080"}
                  title={""}
                  height="2.4rem"
                  width="2.4rem"
                />

                <a className="attatch-file-name" href="">
                  September flower show schedule (12KB)
                </a>
              </div>
            </div>
            <div className="navigatepage-box">
              <div className="navigatepage-wrap">
                <div className="next">Next</div>
                <p>Sustainable Design</p>
              </div>
              <div className="navigatepage-wrap">
                <div className="previous">Previous</div>
                <p>Sustainable Design</p>
              </div>
            </div>
            <div className="list-btn-box">
              <Link
                className="list-btn"
                onClick={() => onPageChange("meetings")}
              >
                List
              </Link>
            </div>
          </div>
        }
      </section>
    );
  }
}

MeetingsDetail.propTypes = {
  onPageChange: PropTypes.func,
  meetingID: PropTypes.string,
};

export default MeetingsDetail;
