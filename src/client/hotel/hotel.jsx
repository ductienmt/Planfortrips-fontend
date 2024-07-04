// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hotel.css";

const Hotel = () => {
  return (
    <>
      <div className="container-fluid container-hotel gx-0">
        <div className="background-hotel">
          <form action="" className="form-hotel">
            <div className="input-custom-hotel">
              <input type="text" required />
              <span>Chọn điểm đến</span>
            </div>
            <div className="input-custom-hotel">
              <input type="date" />
              <span>Chọn ngày đi</span>
            </div>
            <div className="input-custom-hotel">
              <input type="date" />
              <span>Chọn ngày về</span>
            </div>
            <div className="input-custom-hotel">
              <input type="text" required />
              <span>Đi bao nhiêu người</span>
            </div>
            <button type="submit" className="btn custom-btn-hotel">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className="hide-text-search-hotel"> Search</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hotel;
