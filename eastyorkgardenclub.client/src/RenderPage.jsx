import PropTypes from "prop-types";
import Sections from "./mainPage/Sections";
import JoinUs from "./JoinUs";
import Meetings from "./Meetings";
import NewsLetters from "./NewsLetters";
import About from "./About";
import MeetingsDetail from "./MeetingsDetail";

const RenderPage = ({ currentPage, meetingId }) => {
    switch (currentPage) {
        case "home":
            return <Sections />;
        case "about":
            return <About />;
        case "meetings":
            return <Meetings />;
        case "news":
            return <NewsLetters />;
        case "shows":
            return <MeetingsDetail />;
        case "joinus":
            return <JoinUs />;
        case "meetingDetail":
            return <MeetingsDetail meetingId={meetingId} />;
        default:
            return <Sections />;
    }
};
RenderPage.propTypes = {
    currentPage: PropTypes.any,
    meetingId: PropTypes.any
};
export default RenderPage;