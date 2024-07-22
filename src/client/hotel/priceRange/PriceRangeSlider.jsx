import React, { useState, useEffect } from "react";
import "./PriceRangeSlider.css";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(200);
  const [maxValue, setMaxValue] = useState(2000);
  const [sliderMinValue] = useState(200);
  const [sliderMaxValue] = useState(5000);
  const minGap = 1500;

  useEffect(() => {
    setArea();
  }, [minValue, maxValue]);

  function setArea() {
    const range = document.querySelector(".slider-track");
    const minVal = document.querySelector(".min-val");
    const maxVal = document.querySelector(".max-val");
    const minTooltip = document.querySelector(".min-tooltip");
    const maxTooltip = document.querySelector(".max-tooltip");

    range.style.left = `${
      ((minValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
    minTooltip.style.left = `${
      ((minValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
    range.style.right = `${
      100 -
      ((maxValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
    maxTooltip.style.right = `${
      100 -
      ((maxValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
  }

  function handleMinInputChange(event) {
    let value = parseInt(event.target.value);
    if (value < sliderMinValue) {
      value = sliderMinValue;
    }
    setMinValue(value);
  }

  function handleMaxInputChange(event) {
    let value = parseInt(event.target.value);
    if (value > sliderMaxValue) {
      value = sliderMaxValue;
    }
    setMaxValue(value);
  }

  const formatPrice = (price) => {
    // Chuyển đổi giá thành chuỗi và đảm bảo nó là số
    const formattedPrice = Number(price).toString();

    // Tách phần nguyên và phần thập phân
    const parts = formattedPrice.split(".");
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? "." + parts[1] : "";

    // Thêm dấu chấm sau mỗi 3 số trong phần nguyên
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const formattedIntegerPart = integerPart.replace(regex, ".");

    // Thêm số 0 vào phần thập phân nếu cần
    let formattedDecimalPart = "";
    if (decimalPart) {
      formattedDecimalPart = decimalPart.padEnd(3, "0");
    } else {
      formattedDecimalPart = ".000";
    }

    // Kết hợp phần nguyên và phần thập phân để tạo giá trị hoàn chỉnh
    const formattedPriceWithDecimal =
      formattedIntegerPart + formattedDecimalPart + " VNĐ";

    return formattedPriceWithDecimal;
  };

  return (
    <div className="double-slider-box">
      <div className="range-slider">
        <span className="slider-track"></span>
        <input
          type="range"
          className="min-val"
          name="min_val"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={minValue}
          step="50"
          onChange={(e) => setMinValue(parseInt(e.target.value))}
          onInput={(e) => setMinValue(parseInt(e.target.value))}
        />
        <input
          type="range"
          className="max-val"
          name="max_val"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={maxValue}
          step="50"
          onChange={(e) => setMaxValue(parseInt(e.target.value))}
          onInput={(e) => setMaxValue(parseInt(e.target.value))}
        />
        <div className="tooltip min-tooltip">{minValue}</div>
        <div className="tooltip max-tooltip">{maxValue}</div>
      </div>
      <div className="input-box">
        <div className="min-box">
          <div className="input-wrap">
            {/* <span className="input-addon">VND</span> */}
            <input
              type="text"
              name="min_input"
              className="input-field min-input"
              value={formatPrice(minValue)}
              onChange={handleMinInputChange}
              disabled
            />
          </div>
        </div>
        <div className="max-box">
          <div className="input-wrap">
            {/* <span className="input-addon">VND</span> */}
            <input
              type="text"
              name="max_input"
              className="input-field max-input"
              value={formatPrice(maxValue)}
              onChange={handleMaxInputChange}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
