import "./css/Meetings.css";

const Meetings = () => {
  return (
    <section className="section-meetings">
      <div className="container">
        <nav className="breadcrumb">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Meetings</a>
            </li>
          </ul>
        </nav>
        <h1 className="heading-meetings">Meetings</h1>
        <ul>
          <li>
            <span>Date</span>
            <p>October 18, 2023</p>
          </li>
          <li>
            <span>Speaker</span>
            <p>Javad Mozafari</p>
          </li>
          <li>
            <span>Location</span>
            <p>Stan Wadlow Clubhouse, 373 Cedarvale</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Meetings;
