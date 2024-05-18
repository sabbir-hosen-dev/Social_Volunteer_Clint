import { AiOutlineDelete } from "react-icons/ai";
import React from "react";
import useFetch from "../../Hook/useFetch";
import "./AllEvent.css"



function AllEvent() {

  const url = `https://social-volunteer-server.onrender.com/attendEvent`;
  const { data, isLoading, error, refetch } = useFetch(url);


  const handleCencle = (id) => {
    fetch(`https://social-volunteer-server.onrender.com/deleteAttendEvent/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => refetch())
      .catch((err) => console.log(err));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registering date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Data Is Lodding.... </td>
            </tr>
          )}
          {error && (
            <tr className="red">
              <td>DATA NOT LOAD ! </td>
            </tr>
          )}
          {data &&
            data.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.date}</td>
                <td>{data.title}</td>
                <td>
                  <AiOutlineDelete
                    className="cencle"
                    onClick={() => handleCencle(data._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllEvent;
