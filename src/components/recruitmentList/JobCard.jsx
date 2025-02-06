import React from "react";
import "/src/assets/styles/jobCard.css";
import { useNavigate } from "react-router-dom";
const JobCard = ({ title, company, location, time, type, description }) => {
  const navigate = useNavigate();
  
  return (
    <div className="card mb-4 border-0 shadow-sm job-card">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body d-flex justify-content-between align-items-center border">
           
            <div>
              <h5 style={{cursor:"pointer"}} onClick={() => navigate("/postdetail")} className="card-title mb-2 text-primary">{title}</h5>
              <p className="card-text text-muted mb-2">
                <i className="fas fa-building me-2 text-secondary"></i>
                <strong>{company}</strong>
              </p>
              <p className="card-text text-muted mb-2">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                {location}
              </p>
              <p className="card-text text-muted mb-3">
                <i className="fas fa-clock me-2 text-secondary"></i>
                {time}
              </p>
              <p className="card-text text-dark">{description}</p>
            </div>
            
            <div className="text-end">
              <span className={`badge ${type === "Full-time" ? "bg-success" : "bg-warning"} me-3`}>
                {type}
              </span>
              <button className="btn btn-primary btn-sm shadow-sm apply-btn">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
