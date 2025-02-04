import React from "react";

const SidebarFilter = ({ title, options }) => {
  return (
    <div className="card mb-4">
      
      <div className="card-header bg-light fw-bold">{title}</div>

      
      <div className="card-body">
        {options.map((option, index) => (
          <div className="form-check mb-2" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={title}
              id={`${title}-${index}`}
            />
            <label className="form-check-label" htmlFor={`${title}-${index}`}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFilter;
