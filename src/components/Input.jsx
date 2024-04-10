import { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ data, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(data[0].value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (selectedValue) => {
    setValue(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className=" ">
      <button
        id="dropdownDelayButton"
        onClick={toggleDropdown}
        className="shadow-sm text-center  justify-between inline-flex items-center  bg-gray-50 border border-gray-400  text-sm rounded-sm focus:ring-[#08246c] focus:border-[#08246c]  w-full px-2.5 py-1   "
        type="button"
      >
        <span className="flex flex-col  text-xs lg:text-sm text-start items-start">
          <span className="text-gray-500 ">{label}</span> {value}
        </span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownDelay"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
        >
          <ul
            className="py-2  text-gray-700 "
            aria-labelledby="dropdownDelayButton"
          >
            {data.map((item, index) => (
              <li
                onClick={() => handleOptionSelect(item.value)}
                key={index}
                className="block px-4 py-2 hover:bg-[#2596bf] rounded-sm hover:text-white "
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// PropTypes validation
Input.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired, // Assuming value is a string
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
