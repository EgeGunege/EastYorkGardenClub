import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import "./css/FlowerShows.css";
import { ChevronForwardOutline } from "react-ionicons";

class FlowerShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      selectedPdf: null,
      pdfName: null,
      searchTerm: "",
      filteredNews: [],
      years: [],
      selectedYear: "",
      currentPage: 1,
      itemsPerPage: 15,
    };
  }

  componentDidMount() {
    this.fetchNews();
    this.loadScript();
  }

  fetchNews = async () => {
    try {
      const response = await fetch("https://localhost:44345/api/NewsLetters");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const years = Array.from(
        new Set(data.map((item) => new Date(item.uploadDate).getFullYear())),
      ).sort((a, b) => b - a);
      this.setState(
        {
          news: data,
          filteredNews: data,
          years: years,
        },
        () => {
          if (data && data.length > 0) {
            this.handlePdfClick(data[0].id, data[0].name);
          }
        },
      );
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };

  handlePdfClick = async (newsletterId, newsletterName) => {
    try {
      const response = await fetch(
        `https://localhost:44345/api/NewsLetters/${newsletterId}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      this.setState(
        {
          selectedPdf: pdfUrl,
          pdfName: newsletterName,
        },
        () => {
          const viewerContainer = document.getElementById("adobe-dc-view");
          if (viewerContainer) {
            while (viewerContainer.firstChild) {
              viewerContainer.removeChild(viewerContainer.firstChild);
            }
          }

          this.initAdobeViewer();
        },
      );
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };

  loadScript = () => {
    const isScriptLoaded = document.querySelector(
      'script[src="https://acrobatservices.adobe.com/view-sdk/viewer.js"]',
    );
    if (isScriptLoaded) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      this.initAdobeViewer();
    };
  };

  initAdobeViewer = () => {
    const { selectedPdf, pdfName } = this.state;
    const previewConfig = {
      embedMode: "FULL_WINDOW",
      defaultViewMode: "FIT_WIDTH",
      showDownloadPDF: true,
      showZoomControl: true,
      showAnnotationTools: false,
      enableFormFilling: false,
      includePDFAnnotations: false,
      showThumbnails: true,
      showPrintPDF: true,
    };

    if (window.AdobeDC) {
      var adobeDCView = new window.AdobeDC.View({
        clientId: "c3020d79845b4af984c540bf6043d682",
      });
      adobeDCView.previewFile(
        {
          content: { location: { url: selectedPdf } },
          metaData: { fileName: pdfName },
        },
        previewConfig,
      );
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
              <p className="flowershow-description">
                The May Flower Show takes place at our monthly meeting held on
                Monday, May 15. Entry time is 6:30 p.m. to 7:15 p.m. Judging
                begins at 7:30 p.m. sharp. Maximum of one entry per class per
                entrant. Listed below are the categories for the show.
              </p>
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
                <a className="flowershow-btn" href="">
                  May Show
                </a>

                <a className="flowershow-btn" href="">
                  Jun Show
                </a>

                <a className="flowershow-btn" href="">
                  Annual Show
                </a>
                <a className="flowershow-btn" href="">
                  September Show
                </a>
              </nav>
              <div className="flowershow-description-box">
                {this.state.selectedPdf && (
                  <div
                    id="adobe-dc-view"
                    style={{ width: "100%", height: "87rem" }}
                  ></div>
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
