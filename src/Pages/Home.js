import React from "react";
import Navber from "../Components/Navber/Navber";
import HomeTop from "../Components/HomeTop/HomeTop";
import fakeData from "../FakeData/FakeData.json";
import Card from "../Components/Card/Card";


function Home() {

  return (
    <section className="home-wrap" id="home">
      <div className="wrap">
        <Navber />
        <HomeTop />
        <div className="card-wrap">
          {fakeData.map((data) => (
            <Card key={data.key} card={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
