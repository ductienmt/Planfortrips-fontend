import "./bookingHotel.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookingHotel = () => {
  const steps = ["Bạn chọn", "Nhập thông tin của bạn", "Bước cuối cùng"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <Stepper activeStep={1}>
          {steps.map((label) => {
            const labelProps = {};

            return (
              <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="flex-container-booking">
          <div className="col-left" style={{ flexGrow: 3 }}>
            <div className="hotel-book">
              <div className="content">
                <span className="type-of-hotel">Khách sạn</span>
                <h4>Khách sạn 1</h4>
                <h6>Quận 1, Thành phố Hồ Chí Minh</h6>
                <div className="review">
                  <button disabled="true">4.9</button>
                  <span>Xuất sắc</span>
                </div>
                <div className="amenities-booking d-flex mt-3">
                  <small>
                    <i className="fa-solid fa-square-parking"></i>Bãi đỗ xe
                  </small>
                  <small>
                    <i className="fa-solid fa-wifi"></i>Wifi
                  </small>
                </div>
              </div>
            </div>
            <div className="deatail-your-room mt-3">
              <div className="content">
                <h4 className="title">Chi tiết phòng của bạn</h4>
                <div className="check-in">
                  <div className="in">
                    <h6>Nhận phòng</h6>
                    <h5>Thứ 2, 21/07/2024</h5>
                    <span>12:00 - 24:00</span>
                  </div>
                  <div className="out">
                    <h6>Trả phòng</h6>
                    <h5>Thứ 3, 22/07/2024</h5>
                    <span>06:00 - 12:00</span>
                  </div>
                </div>
                <div className="time-stay-in">
                  <h6>Tổng thời gian lưu trú:</h6>
                  <span>1 đêm</span>
                </div>
                <hr />
                <h6>Bạn đã chọn</h6>
                <div className="number-room">
                  <h5>
                    3 phòng cho <span>5 người</span>
                  </h5>
                  <div
                    className="menu-icons"
                    onClick={toggleIcon}
                    style={{ cursor: "pointer" }}
                  >
                    {isOpen ? (
                      <i className="fa-solid fa-angle-up"></i>
                    ) : (
                      <i className="fa-solid fa-angle-down"></i>
                    )}
                  </div>
                </div>
                <div className="number-room-detail">
                  <h6>
                    <span>1</span> x Phòng đơn
                  </h6>
                  <h6>
                    <span>2</span> x Phòng đôi
                  </h6>
                </div>
                <Link>Bạn muốn thêm phòng ?</Link>
              </div>
            </div>
          </div>
          <div className="col-right" style={{ flexGrow: 9 }}>
            right
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotel;
