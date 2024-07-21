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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Vui lòng nhập tên";
    if (!formData.lastName) newErrors.lastName = "Vui lòng nhập họ";
    if (!formData.email) newErrors.email = "Vui lòng nhập email";
    if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Xử lý logic khi form hợp lệ
      console.log("Form hợp lệ:", formData);
    }
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
                    <span>3</span> phòng cho <span>5 </span>người
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
                <div className={`number-room-detail ${isOpen ? "active" : ""}`}>
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
            <div className="price-of-total-room">
              <div className="content">
                <h5 className="small-text">Tóm tắt giá</h5>
                <div className="price">
                  <div className="flex-price">
                    <h6>Giá gốc:</h6>
                    <h6>250.000 VNĐ</h6>
                  </div>
                  <div className="flex-price">
                    <h6>Ưu đãi:</h6>
                    <h6> - 50.000 VNĐ</h6>
                  </div>
                  <div className="flex-price">
                    <h6>Giá đã áp dụng:</h6>
                    <h6>200.000 VNĐ</h6>
                  </div>
                </div>
                <div className="toatal-price">
                  <h4>Tổng cộng</h4>
                  <div>
                    <h3>220.000 VNĐ</h3>
                    <h6>Giá đã bao gồm thuế</h6>
                  </div>
                </div>
                <div className="about-price-vat">
                  <h5 className="small-text">Thông tin giá</h5>
                  <div className="row">
                    <div className="col-md-2">
                      <i className="fa-solid fa-money-bills"></i>
                    </div>
                    <div className="col-md-10">
                      <h6>
                        Bao gồm <span className="vat-price">20.000 VNĐ</span>{" "}
                        thuế
                      </h6>
                      <div className="about-vat">
                        <span>10% Thuế GTGT</span>
                        <span>20.000 VNĐ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right" style={{ flexGrow: 9 }}>
            <div className="detail-info-you">
              <div className="content">
                <h3>Nhập thông tin chi tiết của bạn</h3>
                <div className="warning-user">
                  <div className="row">
                    <div className="col-md-1">
                      <i className="fa-solid fa-circle-info"></i>
                    </div>
                    <div className="col-md-11">
                      <p>
                        Gần xong rồi ! Chỉ cần điền phần thông tin{" "}
                        <span className="star-require">*</span> bắt buộc
                      </p>
                      <p>
                        Vui lòng điền thông tin bằng Tiếng Việt hoặc Tiếng Anh
                      </p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="form-info">
                  <div className="name">
                    <div className="flex-info">
                      <label htmlFor="firstName">
                        Tên <span className="star-require">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : "is-valid"
                        }`}
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="flex-info">
                      <label htmlFor="lastName">
                        Họ <span className="star-require">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : "is-valid"
                        }`}
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="contact">
                    <div className="flex-info">
                      <label htmlFor="email">
                        Email <span className="star-require">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : "is-valid"
                        }`}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="flex-info">
                      <label htmlFor="phone">
                        Số điện thoại <span className="star-require">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className={`form-control ${
                          errors.phone ? "is-invalid" : "is-valid"
                        }`}
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHotel;
