// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/slider";

// apne assets ke exact naam/path use karein
import cameraIcon from "../assets/icon-camera.png";
import travelicon from "../assets/icon-1.png";


const categories = [
  { title: "City Tours", count: "10 Tours+" },
  { title: "Beaches", count: "10 Tours+" },
  { title: "Boat Tours", count: "10 Tours+" },
  { title: "Adventure", count: "10 Tours+" },
  { title: "Food", count: "10 Tours+" },
  { title: "hiking", count: "10 Tours+" },
];

export default function Home() {
  return (
    <main>
      <Carousel />

      {/* CATEGORY SECTION */}
      <section className="category-section"> {/* note: correct spelling */}
        <div className="container">
          <div className="category-header">
            <div className="category__shap-icon" aria-hidden="true">
              <img src={cameraIcon} alt="" />
            </div>

            <h4 className="section__sub-title">Browse By Category</h4>
            <h3 className="section-heading">Pick A Tour Type</h3>
          </div>

          <div className="category-grid">
            {categories.map((c) => (
              <div className="category-card" key={c.title}>
                <div className="category-icon">
                  <img src={travelicon} alt="" />
                </div>
                <h5 className="category-title">{c.title}</h5>
                <p className="category-meta">{c.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /CATEGORY SECTION */}
    </main>
  );
}
