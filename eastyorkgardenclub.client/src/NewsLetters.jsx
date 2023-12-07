import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/NewsLetters.css";
import { FunnelOutline } from "react-ionicons";

const NewsLetters = () => {
    const [news, setNews] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [pdfName, setPdfName] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredNews, setFilteredNews] = useState(news);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const handlePdfClick = async (newsletterId, newsletterName) => {
    try {
        const response = await fetch(
        `https://localhost:44345/api/NewsLetters/${newsletterId}`
        );
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blob = await response.blob();
        const pdfUrl = URL.createObjectURL(blob);
        setPdfName(newsletterName);
        setSelectedPdf(pdfUrl);
    } catch (error) {
        console.error("Fetch error: " + error.message);
    }
    };

    useEffect(() => {
    async function fetchNews() {
        try {
        const response = await fetch("https://localhost:44345/api/NewsLetters");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.length > 0) {
            handlePdfClick(data[0].id, data[0].name);
            setPdfName(data[0].name);
            setNews(data);
        } else {
            console.error("No news data available");
        }
        } catch (error) {
        console.error("Fetch error: " + error.message);
        }
    }

    fetchNews();
    }, []);

    const PdfViewer = () => {
    useEffect(() => {
        const loadScript = () => {
        const script = document.createElement("script");
        script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
        script.async = true;
        document.body.appendChild(script);
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
        script.onload = () => {
            if (window.AdobeDC) {
            var adobeDCView = new window.AdobeDC.View({
                clientId: "c3020d79845b4af984c540bf6043d682",
            });
            adobeDCView.previewFile(
                {
                content: { location: { url: selectedPdf } },
                metaData: { fileName: pdfName },
                },
                previewConfig
            );
            }
        };
        };

        loadScript();
    }, []);

        return (
          <div id="adobe-dc-view" style={{ width: "100%", height: "87rem" }} />
        );
    };

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    useEffect(() => {
        if (searchTerm) {
            const filtered = news.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredNews(filtered);
        } else {
            setFilteredNews(news);
        }
    }, [searchTerm, news]);
    
    return (
    <section className="section-newsletters">
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
                News letters
                </a>
            </li>
            </ul>
        </nav>
        <h1 className="heading-newsletters">News letters</h1>
        <div className="grid newsletter-grid">
            <div className="news-pdfviewer">
            {selectedPdf ? <PdfViewer /> : null}
            </div>
            <div className="news-sidebar">
            <div className="list-info">
                <p className="list-total">
                    Total <span>{news.length.toString()}</span>
                </p>
                <div>
                {isFilterVisible && (
                <input
                    className="search-box"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Filter news"
                />
                )}
                <FunnelOutline
                    onClick={toggleFilterVisibility}
                    color={"#00000"}
                    title={""}
                    height="2rem"
                    width="2rem"
                />
                </div>
            </div>
            <ul className="newsletter-list">
                <li className="newsletter-title">Title</li>
                {filteredNews.map((news, index) => (
                <li className="newsletter-item" key={index}>
                    <Link onClick={() => handlePdfClick(news.id, news.name)}>
                    {news.name}
                    </Link>
                </li>
                ))}
            </ul>

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
                    <a className="page-link Next" href="#">
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
    </section>
    );
};

export default NewsLetters;
