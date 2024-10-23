function Card(props) {
  return (
    <>
      <section className="card">
        <div className="card--container">
          <div className="card--img">
            <img src={props.imageUrl} />
          </div>
          <div className="card--info">
            <div className="card--location">
              <img src="../public/LocationPin.svg" />
              <h2>{props.location}</h2>

              <a href={props.googleMapsUrl}>
                <p>View on Google Maps</p>
              </a>
            </div>
            <h1>{props.title}</h1>
            <h3>
              {props.startDate} - {props.endDate}
            </h3>
            <p>{props.description}</p>
          </div>
        </div>
      </section>
      <div className="divider">
        <hr className="horizontal-line" />
      </div>
    </>
  );
}

export default Card;
