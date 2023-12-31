import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import AdobePDFViewer from "./AdobePDFViewer";
import "./css/FlowerShows.css";
import { ChevronForwardOutline } from "react-ionicons";

class FlowerShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      selectedPdf: null,
      pdfName: null,
      description: null,
    };
  }

  componentDidMount() {
    this.fetchShows();
  }

  fetchShows = async () => {
    try {
      const response = await fetch("https://localhost:44345/api/FlowerShow");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.setState(
        {
          shows: data,
        },
        () => {
          if (data && data.length > 0) {
            this.handleShowPdfClick(
              data[0].id,
              data[0].name,
              data[0].showDescription,
            );
          }
        },
      );
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };

  handleShowPdfClick = async (showId, showName, showDesc) => {
    try {
      const response = await fetch(
        `https://localhost:44345/api/FlowerShow/${showId}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      this.setState({
        selectedPdf: pdfUrl,
        pdfName: showName,
        description: showDesc,
      });
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };

  sanitizeAndFormatMessage = (message) => {
    if (message)
      return DOMPurify.sanitize(message.replace(/\n/g, "<br />"), {
        USE_PROFILES: { html: true },
      });
  };

  render() {
    const { onPageChange } = this.props;
    const content = `Three will be held during our monthly meetings in May, June and September. The other is our Annual Show which is held in August.
    
    Categories vary from show to show, in order to recognize the flowers and other plants that are available as the summer
    progresses.`;
    const links = [
      { label: "Flower Show Rules", id: "flowerRules", to: "flowerRules" },
      {
        label: "Definitions",
        id: "flowerDefinitions",
        to: "flowerDefinitions",
      },
      { label: "Helpful Hints", id: "flowerHints", to: "flowerHints" },
    ];
    return (
      <section className="section-flowershows">
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
              <li className="breadcrumb-link">Flower Show</li>
            </ul>
          </nav>
          <h1 className="heading-meetings">Flower Show</h1>
          <div className="page-sections">
            <div className="information-section">
              <p
                className="flowershow-description"
                dangerouslySetInnerHTML={{
                  __html: this.sanitizeAndFormatMessage(content),
                }}
              />
              <p
                className="flowershow-description"
                dangerouslySetInnerHTML={{
                  __html: this.sanitizeAndFormatMessage(this.state.description),
                }}
              ></p>
              <ul className="rules-link">
                {links.map((ruleLink) => (
                  <li key={ruleLink.id}>
                    <Link
                      className="custom-link"
                      onClick={() => onPageChange(ruleLink.to)}
                    >
                      <div>
                        <span>{ruleLink.label}</span>
                        <ChevronForwardOutline
                          color={"#00000"}
                          title={""}
                          height="1.6rem"
                          width="1.6rem"
                          className="icon"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="view-section">
              <nav className="flowershow-nav">
                {this.state.shows.map((show) => (
                  <Link
                    className="flowershow-btn"
                    key={show.id}
                    onClick={() =>
                      this.handleShowPdfClick(
                        show.id,
                        show.name,
                        show.showDescription,
                      )
                    }
                  >
                    {show.name}
                  </Link>
                ))}
              </nav>
              <div className="flowershow-description-box">
                {this.state.selectedPdf && (
                  <AdobePDFViewer
                    uniqueId="adobe-dc-view-shows"
                    pdfUrl={this.state.selectedPdf}
                    pdfName={this.state.pdfName}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
FlowerShows.propTypes = {
  onPageChange: PropTypes.func,
};

export default FlowerShows;
