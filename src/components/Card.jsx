function Card(props) {
  let dividerTag;
  if (props.id !== "1") {
    dividerTag = <hr className="horizontal-line" />;
  } else {
    dividerTag = <></>;
  }

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
      <div className="divider">{dividerTag}</div>
    </>
  );
}

export default Card;
