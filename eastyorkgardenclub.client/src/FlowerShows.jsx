import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/FlowerShows.css";
import { DocumentAttachOutline } from "react-ionicons";

class FlowerShows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPageChange } = this.props;
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
          <p className="flowershow-description">
            Three will be held during our monthly meetings in May, June and
            September. The other is our Annual Show which is held in August.
            <br /> Categories vary from show to show, in order to recognize the
            flowers and other plants that are available as the summer
            progresses.
          </p>
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
            <p className="each-flowershow-description">
              The May Flower Show takes place at our monthly meeting held on
              Monday, May 15. Entry time is 6:30 p.m. to 7:15 p.m. Judging
              begins at 7:30 p.m. sharp. Maximum of one entry per class per
              entrant. Listed below are the categories for the show. <br />
              <strong> SECTION A – CUT SPECIMENS</strong> <br />
              Bleeding Heart, 1 stem Helleborus, 1 stem Hyacinth, any colour, 1
              spike Iris, dwarf, 1 stalk Lily of the valley, 5 stems Muscari
              (Grape Hyacinth), 1 stem Narcissus, trumpet, 1 stem Narcissus,
              large cup, 1 stem Narcissus, small cup, 1 stem Narcissus, any
              other variety, 1 stem Polygonatum (Solomon’s seal), 1 stem Tulip,
              single, red, 1 stem Tulip, single, any other colour, 1 stem Tulip,
              double, any colour, 1 stem Tulip, any other variety Any other
              flowering bulb, corm or rhizome, under 15 cm, 1 stem Any other
              flowering bulb, corm or rhizome, 15 cm and over, 1 stem Violas,
              (Pansies, Johnny jump-ups), 5 blooms Collection of flowers, under
              15 cm, 3 or more kinds, must be named Collection of flowers, 15 cm
              and over, 3 or more kinds, must be named Any other flowering
              perennial, <br />
              <strong>1 stem SECTION B – HOUSEPLANTS</strong> <br />
              African violet, 1 crown, 1 pot Cactus or succulent, 1 pot Foliage
              house plant, 1 pot Orchid, 1 pot Any other house plant, flowering,
              1 pot Cell pack of seedlings, grown by exhibitor, must be named{" "}
              <br /> <strong>SECTION C – DESIGN CATEGORIES</strong>
              <br />
              May Design Theme: "Queen of Hearts" Playing Cards- a line design
              a) Experienced exhibitors b) Novice exhibitors (A person who has
              not yet won a first-place ribbon in a design category at any OHA
              scoiety flower show.) Red Queen - a design using red flowers
              Cheshire Cat - a crescent design Flamingos & Hedgehogs - an
              interpretive design The Gryphon - a dried miniature design
              (maximum dimensions 12.7 cm)
            </p>
          </div>

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
        </div>
      </section>
    );
  }
}
FlowerShows.propTypes = {
    onPageChange: PropTypes.func,
};

export default FlowerShows;
