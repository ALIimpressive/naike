import React from "react";
import "./Sero.css";
import StorageIcon from "@mui/icons-material/Storage";

const Sero = ({ dark }) => {
  return (
    <div className="sas">

    <div id="sero">
      <div className="container">
        <div className="sero">
          <div className="sero-text">
            <h1>New Releases(1265)</h1>
          </div>
          <div className="sero-btn">
            <button>
              Show Filters
              <StorageIcon />
            </button>
            <select name="" id="">
              <option value="">Sort By</option>
              <option value="">Featured</option>
              <option value="">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Sero;
