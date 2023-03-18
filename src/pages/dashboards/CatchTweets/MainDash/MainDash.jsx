import React, { useEffect } from "react";
import Cards from "../Main/Cards/Cards";
import "./MainDash.css";
import search from "../Data/search.json";

const MainDash = () => {
  useEffect(() => { }, [search]);
  return (
    <div className="MainDash">
      <div className="cloud flex">
        <h1>
          {
            search.typeSearch === "user" ?
              (
                " " + search.userName
              ) : (
                " " + search.search
              )
          }
        </h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default MainDash;
