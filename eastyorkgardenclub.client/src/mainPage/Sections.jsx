import { Component } from "react";
import PropTypes from "prop-types";
import SectionHero from "./SectionHero";
import SectionMeetings from "./SectionMeetings";
import SectionContacts from "./SectionContacts";

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
    };
  }
  render() {
    const { onPageChange } = this.props;
    return (
      <>
        <SectionHero navigate={onPageChange} />
        <SectionMeetings navigate={onPageChange} />
        <SectionContacts />
      </>
    );
  }
}

Sections.propTypes = {
  onPageChange: PropTypes.func,
};

export default Sections;
