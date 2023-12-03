import "./css/NewsLetters.css";

const NewsLetters = () => {
  return (
    <section class="section-newsletter">
      <div class="container">
        <nav className="breadcrumb">
          <ul>
            <li>
              <a className="breadcrumb-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="breadcrumb-link" href="#">
                News Letters
              </a>
            </li>
          </ul>
        </nav>
        <h1 class="heading-newsletter">News Letters</h1>
        <p class="heading-description">
          The newsletter of the East York Garden Club, is published six times a
          year.
        </p>

        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
            <tr class="first-row">
              <td class="no">01</td>
              <td class="title">Sept/Oct 2023</td>
              <td class="date">Sept 17, 2023</td>
            </tr>
          </tbody>
        </table>
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
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                7
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                8
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                7
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                8
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
    </section>
  );
};

export default NewsLetters;
