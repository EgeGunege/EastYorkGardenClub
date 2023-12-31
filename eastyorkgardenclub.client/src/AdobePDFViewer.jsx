import { Component } from "react";
import PropTypes from "prop-types";

class AdobePDFViewer extends Component {
  componentDidMount() {
    this.loadScript();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pdfUrl !== prevProps.pdfUrl) {
      this.clearViewerContainer();
      this.initAdobeViewer();
    }
  }

  clearViewerContainer = () => {
    const viewerContainer = document.getElementById(this.props.uniqueId);
    while (viewerContainer && viewerContainer.firstChild) {
      viewerContainer.removeChild(viewerContainer.firstChild);
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
    const { pdfUrl, pdfName, uniqueId } = this.props;
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
        divId: uniqueId,
      });
      adobeDCView.previewFile(
        {
          content: { location: { url: pdfUrl } },
          metaData: { fileName: pdfName },
        },
        previewConfig,
      );
    }
  };

  render() {
    const { uniqueId } = this.props;

    return <div id={uniqueId} style={{ width: "100%", height: "87rem" }}></div>;
  }
}
AdobePDFViewer.propTypes = {
  uniqueId: PropTypes.string,
  pdfUrl: PropTypes.any,
  pdfName: PropTypes.string,
};
export default AdobePDFViewer;
