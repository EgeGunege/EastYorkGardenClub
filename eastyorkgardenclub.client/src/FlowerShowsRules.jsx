import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/FlowerShowRules.css";
class FlowerShowsRules extends Component {
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
              <li className="breadcrumb-link">Flower Show Rules</li>
            </ul>
          </nav>
          <h1 className="heading-meetings">Flower Show Rules</h1>
          <td valign="top">
            <ol className="ruleList">
              <li>
                {" "}
                Paid-up members of 30 days or more ONLY are eligible to exhibit
                at any show and paid-up membership card MUST be shown before
                entry if requested by show committee.
              </li>
              <li>
                In classes calling for blooms, no buds that show any colour are
                allowed. Sprays, vases or containers of flowers may contain
                buds.
              </li>
              <li>
                Entries requiring a specific number of blooms or sprays will
                qualify only when the exact number is used.
              </li>
              <li>
                No flower in a vase or basket may be tied or wired. Wiring is
                allowed in making corsages and boutonni&apos;res in floral
                design categories. The wire must not be visible.
              </li>
              <li>
                In miniature arrangements, tiny florets of larger flowers may be
                used. Examples are: arabis, verbena, coral bells or similar
                small flowers.
              </li>
              <li>
                No artificial material may be used, with the exception of the
                judicious use of sprayed leaves or branches. Fresh plant
                material that is dyed is not permitted in a flower show.
              </li>
              <li>Accessories are permitted in design categories.</li>
              <li>
                All roots of vegetables are to be washed and the tops removed to
                2.5 cm (1 in.).
              </li>
              <li>
                Full onus of classifications, proper placing and everything
                pertaining to the entry rests on the exhibitor.
              </li>
              <li>
                No two people may exhibit in the same class from the same garden
                except in arrangements&nbsp;and potted plants.
              </li>
              <li>
                Exhibitors may place a maximum of one entry in any one class in
                monthly shows, and up to two entries in any one class in the
                Annual Show, provided they are of different cultivars. Only one
                entry per exhibitor is permitted in any design category.
                Exhibitors may retain cut flower specimens if previous notice
                has been given to show committee. However, it is expected that
                entries will be donated to the club for disposal. Arrangements
                are at exhibitor&apos;s discretion.
              </li>
              <li>
                {" "}
                Any houseplant may receive only one prize in a year with the
                exception of the Annual Show.
              </li>
              <li>Judges&apos; decisions are final.</li>
              <li>
                {" "}
                Protests must be in writing, signed and in the hands of the show
                committee the day of the show. If the protest is regarding the
                authenticity of one or more specimens, the Exhibitor must allow
                a visit to their garden by 3 Board members within 7 days, to
                identify the plant from which the exhibit was taken. The 3 Board
                members will, at that time, decide if the award stands or is
                forfeit by a majority vote. If the Exhibitor does not allow a
                visit, or cannot produce the plant, the award for the challenged
                Exhibit is forfeited.
              </li>
              <li>
                A prize might not be awarded in a class with only one entry
              </li>
              <li>
                Prize money must be picked up within 90 days of presentation or
                it will revert to the treasury.
              </li>
              <li>
                Marked Club containers are available to display your cut
                specimens. Personal containers should be similar to Club
                containers.
              </li>
              <li>
                {" "}
                Any violation of club rules may result in the forfeiture of all
                prizes and prevent the exhibitor from participation in future
                shows of the club.
              </li>
              <li>
                {" "}
                The use of scarce, protected or endangered native plants such as
                wild orchid, trillium, etc., requires that the exhibit be
                disqualified by the Show Committee.
              </li>
              <li>
                {" "}
                All entries for the monthly shows must be in place by 7:20 p.m.
                Judging begins at 7:30&nbsp;p.m. sharp. This rule will be
                strictly enforced. Entries must be left until 9:00 p.m. in order
                to allow all members to view the show.
              </li>
              <li>
                Show points and prizes for Horticulture and Design classes will
                be awarded as follows:
              </li>
              <table className="prizeTable">
                <tbody>
                  <tr>
                    <td width="51" valign="top">
                      <p>Prizes</p>
                    </td>
                    <td width="48" valign="top">
                      <p>Points</p>
                    </td>
                    <td width="72" valign="top">
                      <p>Horticulture</p>
                    </td>
                    <td width="81" valign="top">
                      <p>Design</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="51" valign="top">
                      <p>1st</p>
                    </td>
                    <td width="48" valign="top">
                      <p>3</p>
                    </td>
                    <td width="72" valign="top">
                      <p>$ 1.00</p>
                    </td>
                    <td width="81" valign="top">
                      <p>$ 3.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="51" valign="top">
                      <p>2nd</p>
                    </td>
                    <td width="48" valign="top">
                      <p>2</p>
                    </td>
                    <td width="72" valign="top">
                      <p>$ 0.75</p>
                    </td>
                    <td width="81" valign="top">
                      <p>$ 2.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="51" valign="top">
                      <p>3rd</p>
                    </td>
                    <td width="48" valign="top">
                      <p>1</p>
                    </td>
                    <td width="72" valign="top">
                      <p>$ 0.50</p>
                    </td>
                    <td width="81" valign="top">
                      <p>$ 1.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="51" valign="top">
                      <p>HM</p>
                    </td>
                    <td width="48" valign="top">
                      <p>0.5</p>
                    </td>
                    <td width="72" valign="top">
                      <p>$ 0.25</p>
                    </td>
                    <td width="81" valign="top">
                      <p>$ 0.50</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <span className="tableNote">
                Cash prizes of $40, $25, and $10 will be awarded to the
                individuals with the first, second and third highest aggregate
                amount of points in the annual and monthly shows. Total cash
                prizes awarded to any individual competitor in one year cannot
                exceed $100.
              </span>
              <li>
                The <strong>George S. Henry Trophy</strong> will be awarded to
                the member with the highest number of aggregate points in the
                both Horticulture and Design classes in the monthly and annual
                shows.
              </li>
              <li>
                The<strong> Anna Leggatt Novice Award</strong> is awarded to the
                Novice who wins the highest number of point in the the month and
                annual shows. To be eligible, an member cannot have won a first
                prize in an EYGC flower show prior to the current year.
              </li>
              <li>
                The Club is not responsible for any personal injury or for
                property lost, stolen or damaged at any function of the Club.
              </li>
            </ol>
          </td>
        </div>
      </section>
    );
  }
}

FlowerShowsRules.propTypes = {
  onPageChange: PropTypes.func,
};

export default FlowerShowsRules;
