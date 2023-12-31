import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/NewsLetters.css";
import { FunnelOutline } from "react-ionicons";
import AdobePDFViewer from "./AdobePDFViewer";

class NewsLetters extends Component {
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
      this.setState({
        selectedPdf: pdfUrl,
        pdfName: newsletterName,
      });
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };

  handleYearChange = (event) => {
    const year = event.target.value;
    this.setState({ selectedYear: year }, this.filterNews);
  };

  filterNews = () => {
    const { news, selectedYear } = this.state;
    const filteredNews = selectedYear
      ? news.filter(
          (item) =>
            new Date(item.uploadDate).getFullYear() === parseInt(selectedYear),
        )
      : news;
    this.setState({ filteredNews, currentPage: 1 });
  };

  handlePageChange = (newPage, event) => {
    event.preventDefault();
    this.setState({ currentPage: newPage });
  };

  renderPagination = () => {
    const { filteredNews, itemsPerPage, currentPage } = this.state;
    const pageCount = Math.ceil(filteredNews.length / itemsPerPage);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <a
            onClick={(e) => this.handlePageChange(i, e)}
            href="#"
            className="page-link"
          >
            {i}
          </a>
        </li>,
      );
    }
    return (
      <nav className="pagination">
        <ul>
          {currentPage > 1 && (
            <li className="page-item">
              <a
                onClick={(e) => this.handlePageChange(currentPage - 1, e)}
                href="#"
                className="page-link Previous"
              >
                &laquo;
              </a>
            </li>
          )}
          {pages.length === 1 ? null : pages}
          {currentPage < pageCount && (
            <li className="page-item">
              <a
                onClick={(e) => this.handlePageChange(currentPage + 1, e)}
                href="#"
                className="page-link Next"
              >
                &raquo;
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  render() {
    const { filteredNews, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNewsItems = filteredNews.slice(
      indexOfFirstItem,
      indexOfLastItem,
    );
    const { onPageChange } = this.props;
    return (
      <section className="section-newsletters">
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
              <li className="breadcrumb-link">News letters</li>
            </ul>
          </nav>
          <h1 className="heading-newsletters">News letters</h1>
          <div className="grid newsletter-grid">
            <div className="news-pdfviewer">
              {this.state.selectedPdf && (
                <AdobePDFViewer
                  uniqueId="adobe-dc-view-news"
                  pdfUrl={this.state.selectedPdf}
                  pdfName={this.state.pdfName}
                />
              )}
            </div>
            <div className="news-sidebar">
              <div className="list-info">
                <p className="list-total">
                  Total <span>{filteredNews.length.toString()}</span>
                </p>
                <div className="list-search">
                  <FunnelOutline
                    onClick={this.toggleFilterVisibility}
                    color={"#00000"}
                    title={""}
                    height="2rem"
                    width="2rem"
                  />
                  <select
                    value={this.state.selectedYear}
                    onChange={this.handleYearChange}
                    className="year-filter"
                  >
                    <option value="">All Years</option>
                    {this.state.years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <ul className="newsletter-list">
                <li className="newsletter-title">Title</li>
                {currentNewsItems.map((news, index) => (
                  <li className="newsletter-item" key={index}>
                    <Link
                      onClick={() => this.handlePdfClick(news.id, news.name)}
                    >
                      {news.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {this.renderPagination()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
NewsLetters.propTypes = {
  onPageChange: PropTypes.func,
};

export default NewsLetters;
