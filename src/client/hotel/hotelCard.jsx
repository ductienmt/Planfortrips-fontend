// import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "./hotelCard.css";
import imghotel from "../../assets/img/hotel2.jpg";

const HotelCard = ({ name }) => {
  return (
    <div className="card custom-card-hotel mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imghotel}
            className="img-fluid rounded-start custom-img-hotel-card"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <h5 className="card-title ">{name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <h6 className="col-md-4">
                <div className="row">Chỉ từ</div>
                <span className="price row">250,000 VNĐ</span>
                <span className="row">cho 1 đêm</span>
              </h6>
            </div>

            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HotelCard;
