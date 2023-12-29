import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/FlowerShowRules.css";

class FlowerShowsHints extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPageChange } = this.props;
    return (
      <section className="section-flowershows-rules">
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
              <li>
                <Link
                  className="breadcrumb-link"
                  onClick={() => onPageChange("shows")}
                >
                  Flower Shows
                </Link>
              </li>
              <li className="breadcrumb-link">Flower Show Hints</li>
            </ul>
          </nav>
          <h1 className="heading-meetings">Flower Show Hints</h1>
          <td valign="top">
            <ol className="ruleList">
              <li>
                Always read the show schedule carefully before the show to be
                able to plan your entries.
              </li>
              <li>
                Keep your tools sharpened. Cut your flowers on the evening prior
                to the show or early in the morning. Never cut specimens when
                the sun is shining strongly. Have a pail of warm water handy to
                set the stem in immediately. Cut the ends of the stems at an
                angle to help the flower take up water. Flowers drink the most
                water the day after picking.
              </li>
              <li>
                Hardening flowers after cutting is important. Remove the lower
                foliage and place the stems in hot water (110ºF / just under
                45ºC) for 12 hours before exhibiting then place in deep, cool
                water. They can be stored in light or dark, unless they have
                fruit. The air temperature should ideally be between 40-50ºF/
                5-10ºC.
              </li>
              <li>
                Conditioning refers to standing flowers in a suggested solution,
                for not more than 12 hours, after which they are put in plain
                cold water. When using chemicals in various solutions, never use
                metal containers. Porcelain or glass is best.
              </li>
              <li>
                Splitting a stem of woody plants for the bottom 10 cm (4 in.) is
                preferable to hammering. If you are using a clear container, dip
                the ends in boiling water.
              </li>
              <li>
                Judges look for uniformity in size, colour and perfection. Try
                to avoid mismatches in size and colours.
              </li>
              <li>
                Check all foliage and remove blemishes or damaged leaves. Faded
                or black petals should be removed. Also, remove foliage from
                under water.
              </li>
              <li>
                If using floral foam, try not to take a flower out and then
                replace it. The block will break if full of holes.
              </li>
              <li>
                Keep your containers full of water and change the water in
                arrangements every two to four days.
              </li>
              <li>
                {" "}
                Do not remove foliage from carnations. Cut their stems just
                below a node (where the leaves join the stem).
              </li>
              <li>
                {" "}
                Cut dahlias after sunset and condition in two quarts
                (approximately two litres) of ice water and five tablespoons of
                alcohol.
              </li>
              <li>
                {" "}
                Condition delphiniums in a mixture of one tablespoon (15 ml) of
                alcohol and one pint (about half a litre) of water, then place
                in water 1/3 up the stem.
              </li>
              <li>
                {" "}
                The end of stems of euphorbia, forget-me-nots, poppies,
                sunflowers, Shasta daisies and dahlias should be placed in a
                flame immediately after cutting and then put in deep cold water.
              </li>
              <li>
                {" "}
                Cut peonies when almost full-blown. Condition in one quart (1.1
                litres) of water and three tablespoons (45 ml) of sugar, then
                arrange in deep water.
              </li>
              <li>
                {" "}
                Roses and irises should be cut just as the outer petals begin to
                unfold. Gladiolus should be cut a day or two before the show and
                kept in a cool and shaded location.
              </li>
              <li>
                {" "}
                Many flowers such as roses enlarge by a 1/4 to a 1/3 in size
                during hardening. The bottom 1/2 inch (a little over one cm) of
                all stems should be cut off with a slanted cut after hardening.
                Make a fresh cut before putting in water. Fresh roses are firm
                to touch at the base of their petals.
              </li>
              <li>
                {" "}
                Roses will benefit by having the stem placed in water as hot as
                your hand can bear before standing in cold water. You can open a
                rose by gently blowing into the bud.
              </li>
              <li>
                {" "}
                Piercing the stem of tulips with a pin and immersing the stem in
                cold water for several hours will keep them in an upright
                condition.
              </li>
            </ol>
          </td>
        </div>
      </section>
    );
  }
}

FlowerShowsHints.propTypes = {
  onPageChange: PropTypes.func,
};

export default FlowerShowsHints;
