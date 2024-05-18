import React from "react";
import Navber from "./../Components/Navber/Navber";
import useAppContex from "../Hook/useContext";
import useFetch from "./../Hook/useFetch";

function Profile() {
  const { user } = useAppContex();

  const url = `http://localhost:5001/userData?email=${user.email}`;
  const { data, isLodding, error,refetch } = useFetch(url);


  const handleCencle = (id) => {

    fetch(`http://localhost:5001/deleteItem/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        refetch();
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="wrap">
      <Navber />
      <div className="profile-wrap">
        {isLodding && <h3>Lodding...</h3>}
        {error && <h3 className="red"> Information NOT load ! </h3>}
        {data &&
          data.map((data) => (
            <div className="profile-content" key={data._id}>
              <div className="left">
                <img src={data.volunteerImg} alt="" />
              </div>
              <div className="right">
                <h3>{data.title}</h3>
                <h5>{data.date}</h5>
                <button
                  className="btn cancle"
                  onClick={() => handleCencle(data._id)}
                >
                  Cancle
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Profile;
