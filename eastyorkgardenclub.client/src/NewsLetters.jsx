import { useEffect } from 'react'
import PropTypes from 'prop-types';
import "./css/NewsLetters.css";

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
                showAnnotationTools:false,
                enableFormFilling: false,
                includePDFAnnotations:false,
                showThumbnails:true,
                showPrintPDF: true,
            }
            script.onload = () => {
                if (window.AdobeDC) {
                    var adobeDCView = new window.AdobeDC.View({ clientId: 'c3020d79845b4af984c540bf6043d682' });
                    adobeDCView.previewFile({
                        content: { location: { url: '' } },
                        metaData: { fileName: 'EYGCNews202305.pdf' }
                    }, previewConfig );
                }
            };
        };

        loadScript();
    }, []);

    return <div id="adobe-dc-view" style={{ width: "100%", height: "100%" }} />;
};
PdfViewer.propTypes = {
    pdfUrl: PropTypes.string.isRequired,
};
const NewsLetters = () => {
  return (
    <section className="section-newsletter">
          <div className="news-page-container">
              <main className="news-main">
                  <PdfViewer/>
              </main>
              <aside className="news-sidebar">
                  <nav className="news-sidebar-nav">
                      
                  </nav>
              </aside>
          </div>
    </section>
  );
};

export default NewsLetters;
