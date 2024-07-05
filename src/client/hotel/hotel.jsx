// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./hotel.css";
import provinces from "./provinces";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import CSS for flatpickr
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const Hotel = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [valuePrice, setValuePrice] = useState(0);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);
    if (query) {
      const filtered = provinces.filter((province) =>
        province.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProvinces(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (province) => {
    setInputValue(province);
    setShowSuggestions(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".input-custom-hotel")) {
      setShowSuggestions(false);
      setShowGuestOptions(false);
    }
  };

  const totalGuests = adults + children + infants;

  const handleInputClick = () => {
    setShowGuestOptions(!showGuestOptions);
  };

  const handleGuestChange = (type, operation, event) => {
    // Added event parameter here
    event.preventDefault(); // Prevent default form submission behavior
    if (type === "adults") {
      setAdults(
        operation === "increment" ? adults + 1 : Math.max(0, adults - 1)
      );
    } else if (type === "children") {
      setChildren(
        operation === "increment" ? children + 1 : Math.max(0, children - 1)
      );
    } else if (type === "infants") {
      setInfants(
        operation === "increment" ? infants + 1 : Math.max(0, infants - 1)
      );
    }
  };

  useEffect(() => {
    const Vietnamese = {
      weekdays: {
        shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        longhand: [
          "Chủ Nhật",
          "Thứ Hai",
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Năm",
          "Thứ Sáu",
          "Thứ Bảy",
        ],
      },
      months: {
        shorthand: [
          "Th1",
          "Th2",
          "Th3",
          "Th4",
          "Th5",
          "Th6",
          "Th7",
          "Th8",
          "Th9",
          "Th10",
          "Th11",
          "Th12",
        ],
        longhand: [
          // "Tháng Một",
          // "Tháng Hai",
          // "Tháng Ba",
          // "Tháng Tư",
          // "Tháng Năm",
          // "Tháng Sáu",
          // "Tháng Bảy",
          // "Tháng Tám",
          // "Tháng Chín",
          // "Tháng Mười",
          // "Tháng Mười Một",
          // "Tháng Mười Hai",
          "Th1",
          "Th2",
          "Th3",
          "Th4",
          "Th5",
          "Th6",
          "Th7",
          "Th8",
          "Th9",
          "Th10",
          "Th11",
          "Th12",
        ],
      },
      firstDayOfWeek: 1, // Tuần bắt đầu từ thứ Hai
      rangeSeparator: " đến ",
      weekAbbreviation: "Tuần",
      scrollTitle: "Cuộn để tăng giảm",
      toggleTitle: "Nhấp để chuyển đổi",
      ordinal: (nth) => {
        if (nth > 1) return "th";
        return "";
      },
    };
    const today = new Date();
    const maxDate = new Date(new Date().setFullYear(today.getFullYear() + 1)); // Tính toán ngày 12 tháng sau
    document.addEventListener("click", handleClickOutside);

    // Khởi tạo flatpickr cho input "Ngày đi" với locale tiếng Việt
    flatpickr("#date-depart", {
      altInput: true,
      altFormat: "d-m-Y",
      dateFormat: "Y-m-d",
      locale: Vietnamese, // Sử dụng locale tiếng Việt
      minDate: today, // Ngày nhỏ nhất có thể chọn là ngày hiện tại
      maxDate: maxDate,
    });

    // Khởi tạo flatpickr cho input "Ngày về" với locale tiếng Việt
    flatpickr("#date-return", {
      altInput: true,
      altFormat: "d-m-Y",
      dateFormat: "Y-m-d",
      locale: Vietnamese, // Sử dụng locale tiếng Việt
      minDate: today, // Ngày nhỏ nhất có thể chọn là ngày hiện tại
      maxDate: maxDate,
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="container-fluid container-hotel gx-0">
        <div className="background-hotel">
          <form action="" className="form-hotel">
            <div className="input-custom-hotel">
              <i className="fas fa-map-marker-alt"></i>
              <input
                type="text"
                placeholder="Chọn nơi bạn đến"
                value={inputValue}
                onChange={handleInputChange}
              />
              {showSuggestions && (
                <ul className="suggestions-list">
                  {filteredProvinces.map((province, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(province)}
                    >
                      {province}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="input-custom-hotel">
              <i className="far fa-calendar-alt"></i>
              <input id="date-depart" placeholder="Ngày đi" />
            </div>
            <div className="input-custom-hotel">
              <i className="far fa-calendar-alt"></i>
              <input id="date-return" placeholder="Ngày về" />
            </div>
            <div className="input-custom-hotel">
              <i className="fas fa-user-check"></i>
              <input
                type="text"
                placeholder="Số người"
                required
                readOnly
                value={totalGuests > 0 ? totalGuests : ""}
                onClick={handleInputClick}
              />
              {showGuestOptions && (
                <div className="guest-options">
                  <div className="guest-option">
                    <span>Người lớn</span>
                    <button
                      onClick={(event) =>
                        handleGuestChange("adults", "decrement", event)
                      }
                    >
                      -
                    </button>
                    <span>{adults}</span>
                    <button
                      onClick={(event) =>
                        handleGuestChange("adults", "increment", event)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="guest-option">
                    <span>Trẻ em</span>
                    <button
                      onClick={(event) =>
                        handleGuestChange("children", "decrement", event)
                      }
                    >
                      -
                    </button>
                    <span>{children}</span>
                    <button
                      onClick={(event) =>
                        handleGuestChange("children", "increment", event)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="guest-option">
                    <span>Em bé</span>
                    <button
                      onClick={(event) =>
                        handleGuestChange("infants", "decrement", event)
                      }
                    >
                      -
                    </button>
                    <span>{infants}</span>
                    <button
                      onClick={(event) =>
                        handleGuestChange("infants", "increment", event)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button type="submit" className="btn custom-btn-hotel">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className="hide-text-search-hotel"> Search</span>
            </button>
          </form>
        </div>
        <div className="col-md-12 row m-0">
          <div className="col-md-3 bg-dark">
            <div className="col-md-12 text-white">
              <h1>Bộ lọc</h1>
              <div>
                <h5>Giá</h5>
                <RangeSlider
                  value={valuePrice}
                  onChange={(changeEvent) =>
                    setValuePrice(changeEvent.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-9 bg-danger">List</div>
        </div>
      </section>
    </>
  );
};

export default Hotel;
