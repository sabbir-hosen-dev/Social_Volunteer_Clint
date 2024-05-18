import React from "react";
import Navber from "../Components/Navber/Navber";
import HomeTop from "../Components/HomeTop/HomeTop";
import Card from "../Components/Card/Card";
import useFetch from "../Hook/useFetch";


function Home() {
  const url = "https://social-volunteer-server.onrender.com/allData";

  const {data,isLodding,error} = useFetch(url);


  return (
    <section className="home-wrap" id="home">
      <div className="wrap">
        <Navber />
        <HomeTop />
        <div className="message">
          {isLodding && <h2>Data is Loadding...</h2>}
          {error && <h2 style={{color:"red"}}>Data NOT Found !</h2>}
        </div>
        <div className="card-wrap">
          {data && data.map((data) => (
            <Card key={data.key} card={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
