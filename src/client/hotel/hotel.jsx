// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./hotel.css";
import provinces from "./provinces";

const Hotel = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

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
    document.addEventListener("click", handleClickOutside);
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
              <input type="text" placeholder="Ngày đi" />
            </div>
            <div className="input-custom-hotel">
              <i className="far fa-calendar-alt"></i>
              <input type="text" placeholder="Ngày về" />
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
      </section>
    </>
  );
};

export default Hotel;
