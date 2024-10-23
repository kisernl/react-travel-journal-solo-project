// import { useState } from "react";
import TravelData from "./travel-data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const cardElements = TravelData.map((data) => {
    return (
      <Card
        key={data.id}
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
        imageUrl={data.imageUrl}
      />
    );
  });
  return (
    <>
      <Navbar />
      <section>{cardElements}</section>
    </>
  );
}

export default App;
