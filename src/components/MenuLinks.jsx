import React from 'react';
import { Link } from 'react-router-dom';

const MenuLinks = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pagination</h5>
              <p className="card-text">
                React Pagination example.(JSON placeholder)
              </p>
              <Link to="/pagination" className="btn btn-primary">
                Go to Page
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Drag And Drop</h5>
              <p className="card-text">Drag element (pure javascript)</p>
              <Link to="/draganddrop" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pagination</h5>
              <p className="card-text">
                React Pagination example.(JSON placeholder)
              </p>
              <Link to="/pagination" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
