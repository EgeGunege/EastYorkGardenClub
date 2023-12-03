import { useEffect, useState } from 'react'
import "./css/NewsLetters.css";

const NewsLetters = () => {
    const [news, setNews] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [pdfName, setPdfName] = useState(null)

    const handlePdfClick = async (newsletterId) => {
        try {
            const response = await fetch(`https://localhost:44345/api/NewsLetters/${newsletterId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const blob = await response.blob();
            const pdfUrl = URL.createObjectURL(blob);
            setPdfName()
            setSelectedPdf(pdfUrl);
        } catch (error) {
            console.error("Fetch error: " + error.message);
        }
    };

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('https://localhost:44345/api/NewsLetters');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (data && data.length > 0) {
                    handlePdfClick(data[0].id);
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
                const script = document.createElement('script');
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
                }
                script.onload = () => {
                    if (window.AdobeDC) {
                        var adobeDCView = new window.AdobeDC.View({ clientId: 'c3020d79845b4af984c540bf6043d682' });
                        console.log(selectedPdf);
                        adobeDCView.previewFile({
                            content: { location: { url: selectedPdf } },
                            metaData: { fileName: pdfName }
                        }, previewConfig);
                    }
                };
            };

            loadScript();
        }, []);

        return <div id="adobe-dc-view" style={{ width: "100%", height: "100%" }} />;
    };
  return (
    <section className="section-newsletter">
          <div className="news-page-container">
              <main className="news-main">
                  { <PdfViewer />}
              </main>
              <aside className="news-sidebar">
                  <nav className="news-sidebar-nav">
                      <ul>
                          {news.map((news, index) => (
                              <li key={index}>
                                  <button onClick={() => handlePdfClick(news.id)}>
                                      {news.name}
                                  </button>
                              </li>
                          ))}
                      </ul>
                  </nav>
              </aside>
          </div>
    </section>
  );
};

export default NewsLetters;
