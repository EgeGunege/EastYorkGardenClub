import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/FlowerShowDefinitions.css";

class FlowerShowDefinitions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPageChange } = this.props;
    return (
      <section className="section-flowershows-definitions">
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
              <li className="breadcrumb-link">Flower Show Definitions</li>
            </ul>
          </nav>
          <h1 className="heading-meetings">Flower Show Definitions</h1>
          <dl>
            <dt>Annual</dt>
            <dd>
              A plant which survives for one growing season only from
              germination to death.
            </dd>
            <dt>Basket</dt>
            <dd>A container that can be picked up, usually with a handle.</dd>
            <dt>Biennial</dt>
            <dd>
              A plant sown one year to flower or fruit the next, before dying.
            </dd>
            <dt>Bloom</dt>
            <dd>An individual flower, with one on a stem.</dd>
            <dt>
              <a name="Boutonniere"></a>Boutonnière
            </dt>
            <dd>A spray of flowers worn in a buttonhole.</dd>
            <dt>Bowl</dt>
            <dd>A container that is broader than it is high.</dd>
            <dt>Collection</dt>
            <dd>
              A specified number of cut flowers, potted plants, fruits, and/or
              vegetables exhibited for horticultural perfection.
            </dd>
            <dt>Complementary Colour Harmony</dt>
            <dd>
              Two colours that lie opposite each other on the colour wheel,
              e.g., blue and orange.
            </dd>
            <dt>
              <a name="Crescent"></a>Crescent Design
            </dt>
            <dd>A design in the shape of a partial circle.</dd>
            <dt>Cultivar</dt>
            <dd>
              Short for ‘cultivated variety’. A variety of plant of cultivated
              origin.
            </dd>
            <dt>Daffodil</dt>
            <dd>
              A narcissus with a long trumpet in the centre, longer than the
              outer petals. All daffodils are narcissus, but not all narcissus
              are daffodils.
            </dd>
            <dt>Disbudding</dt>
            <dd>
              Removal of surplus buds along stem or in axil of plant to promote
              growth of terminal bud. The buds can be rubbed out with a finger
              when they are tiny, e.g., hybrid tea rose, specimen dahlia.
            </dd>
            <dt>
              <a name="dishgarden"></a>Dish Garden
            </dt>
            <dd>
              A miniature landscape in an open shallow container. Plants should
              have similar cultural requirements. May include accessories to
              scale.
            </dd>
            <dt>Foliage Design</dt>
            <dd>
              Design with interest in the foliage. Foliage is to predominate.
              Flowers and/or fruits may be present, but must be inconspicuous.
            </dd>
            <dt>
              <a name="gloriosa"></a>Gloriosa Daisy
            </dt>
            <dd>
              is scientifically <em>Rudbeckia hirta gloriosa</em>. They are
              large daisies with shaggy orange/yellow outer petals, sometimes
              double and often with brown markings. The centre is dark brown.
              Rudbeckias are coneflowers that are some shade of yellow with a
              darker centre. Other coneflowers are in the <em>Echinacea</em>{" "}
              group. These have colours other than yellow. If a Gloriosa Daisy
              is entered in the annual show it must be the correct specie. All
              Rudbeckias are coneflowers but not all coneflowers are Rudbeckias!
              Ask one of the Show Committee when entering.
            </dd>
            <dt>Hardening Off</dt>
            <dd>
              Adjust plants to lower temperatures, a process of acclimatization,
              usually after plants are taken out from the house or greenhouse.
              Also, a natural process that occurs as the temperature gradually
              falls in the autumn.
            </dd>
            <dt>Herb</dt>
            <dd>
              Group of plants with savory, medicinal or aromatic properties,
              used for medicine, food, flavour or fragrance. Herb is also a
              botanical term for non-woody plants that die to the ground at the
              end of the growing season.
            </dd>
            <dt>Hogarth Design</dt>
            <dd>
              A radial composition with a distinctive &quot;S&quot; curve.
            </dd>
            <dt>Interpretive Design</dt>
            <dd>
              A design where a given theme, idea, occasion, mood, atmosphere,
              etc. is suggested by the selection and organization of the design
              elements.
            </dd>
            <dt>Line Design</dt>
            <dd>A design in which a linear pattern is dominant.</dd>
            <dt>Mass Design</dt>
            <dd>
              A design with a large quantity of plant material arranged in a
              closed silhouette with few or no voids.
            </dd>
            <dt>Miniature Design</dt>
            <dd>
              Design must not exceed 12.5 cm (5 in.) in any dimension including
              the container, base and accessories. For good proportion, the
              container should not exceed 3.75 cm (1.5 in.) in height.
            </dd>
            <dt>Narcissus</dt>
            <dd>
              Includes daffodils. The centre may be a tube as in daffodils, a
              small or large cup or even open to look like another circle of
              petals, but if the outer petals are longer than the inner cup
              shape, a flower cannot be entered as a daffodil.
            </dd>
            <dt>Novice</dt>
            <dd>
              A person who has not yet won a first place ribbon in a design
              category at an EYGC flower show.
            </dd>
            <dt>Parallel Design</dt>
            <dd>
              A creative design with the dominant characteristic being three or
              more vertical groupings in, or appearing to be in, a single
              container, with sufficient space between each group to illustrate
              the parallel effect.
            </dd>
            <dt>Pavé</dt>
            <dd>
              In jewellery-making, a term that refers to setting stones so close
              together that no metal shows. In flower design pave is a technique
              of placing groups of plant material that have been cut very short,
              close together to form undulating mounds of colours, textures,
              shapes and sizes. Any plant material, e.g., flowers, foliage, cut
              stems, fruits, vegetables, moss can be used.
            </dd>
            <dt>Perennial</dt>
            <dd>
              A plant that lives more than two years or three seasons and
              normally flowers annually. Many die down during the winter but the
              roots are unaffected by frost and new growth appears as the
              weather improves and the temperature rises. The term usually
              applies to non-woody plants.
            </dd>
            <dt>Pinching Out</dt>
            <dd>
              The removing of the tip of a stem, either a flower bud or a leafy
              tip. This allows the side buds (found in the leaf axils below) to
              start to grow. There will be more flowers of an even, but smaller
              size, e.g., floribunda roses, or more bushy plants such as bedding
              chrysanthemums.
            </dd>
            <dt>Pot et Fleur</dt>
            <dd>
              An exhibit of growing plants, in or out of pots, packed lightly
              with moisture-retaining material, plus cut flowers in tubes of
              water, oasis, or other material, all assembled in one container.
              Moss, decorative wood and rock may be included. No cut foliage is
              permitted. However, cut flowering and/or fruited branches may be
              used.
            </dd>
            <dt>Small Design</dt>
            <dd>
              Design ranging from 13.9 - 25.4 cm (5.5 - 10 in.) and must not
              exceed 25.4 cm in any direction, including the container, base and
              accessories.
            </dd>
            <dt>Spike</dt>
            <dd>
              An arrangement of flowers on a stalk directly without stems.
            </dd>
            <dt>Spray</dt>
            <dd>
              A slender stalk bearing flowers or leaves cut from the main stem.
            </dd>
            <dt>Stalk</dt>
            <dd>The stem or main axis of a plant.</dd>
            <dt>Stem</dt>
            <dd>A slender stalk bearing flowers, leaves or fruit.</dd>
            <dt>Topiary</dt>
            <dd>
              A growing plant that is trained or pruned to a certain form or
              shape.
            </dd>
            <dt>Under Water Design</dt>
            <dd>
              A design with part(s) placed under water to create interest.
              Although the design must have part(s) under water, no definite
              percentage is required. The entire design may not be under water.
            </dd>
            <dt>Waterviewing Design</dt>
            <dd>
              Usually a line design in a shallow container(s) with one-half to
              two-thirds of the container surface showing water.
            </dd>
            <dt>Weathered Wood</dt>
            <dd>
              A type of decorative wood that is altered in form, colour and/or
              texture by the forces of nature.
            </dd>
          </dl>
        </div>
      </section>
    );
  }
}

FlowerShowDefinitions.propTypes = {
  onPageChange: PropTypes.func,
};

export default FlowerShowDefinitions;
