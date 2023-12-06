import { CalendarOutline, TimeOutline, MicOutline, LocationOutline } from 'react-ionicons'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./css/MeetingsDetail.css";
import {
  CalendarOutline,
  TimeOutline,
  MicOutline,
  LocationOutline,
  DocumentAttachOutline,
} from "react-ionicons";


const MeetingsDetail = ({ onPageChange }) => {
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
    <section className="section-meeting-details">
      <div className="container">
        <nav className="breadcrumb">
          <ul>
            <li>
                <Link className="breadcrumb-link" onClick={()=>onPageChange('home')}>
                    Home
                </Link>
            </li>
            <li>
                <Link className="breadcrumb-link" onClick={() => onPageChange('meetings')}>
                    Meetings
                </Link>
            </li>
            <li className="breadcrumb-link">
                Meeting Details
            </li>
          </ul>
        </nav>
        <h1 className="heading-meeting-details">Urban Farming</h1>

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
              <p>October 18, 2023</p>
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
              <p>Javad Mozafari</p>
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

        <p className="meeting-description">
          Javad Mozafari holds a PhD in Plant Genetics, University of Guelph,
          Canada; MSc in Plant Breeding, Massey University, New Zealand; and BSc
          in Crop Science, University of Tabriz, Iran. He is an expert, educator
          and community leader in sustainable agriculture, agrobiodiversity,
          food security, and their interfaces with climate change. <br />
          Javad’s work as professor in Iran’s Agricultural Research and
          Education Organization and Tarbiat Modares University has led to the
          conservation of thousands of accessions of genetic resources and
          publication of many research papers in international journals. He has
          also a long experience working with the United Nations agencies (e.g.,
          FAO, WIPO, CBD, UNEP, UNDP) where he has chaired UN-FAO Commission on
          Genetic Resources for Food and Agriculture; International Treaty on
          Plant Genetic Resources (IT-PGRFA); and many other international
          agrobiodiversity-related fora. <br />
          Since his return to Toronto in 2019, Javad has been teaching Vegetable
          Container Gardening and Vegetable Home Gardening, advocating for
          conservation of biodiversity, environmentally friendly foods of the
          future, and adapting urban food systems to climate change. He joined
          Foodshare in 2021 as Community Engagement Coordinator at Flemo Farm
          where he worked on building the capacity of the community for
          enhancing food security through developing: a community education
          platform on urban farming, local entrepreneurs in urban food
          production, local farmers’ market for providing access to affordable
          high-quality food, community compost exchange program, crop integrated
          conservation and environmentally sustainable community. Javad is,
          presently, coordinating CAMH Sunshine Garden and Community Gardens
          programs in Foodshare.
        </p>
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
          <a className="list-btn" href="">
            List
          </a>
        </div>
      </div>
    </section>
  );
};

MeetingsDetail.propTypes = {
    onPageChange: PropTypes.func,
};

export default MeetingsDetail;
