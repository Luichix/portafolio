import React from "react";
import Typed from "./typed";

function Story() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container">
        <h1>Luis Reynaldo</h1>
        <p>
          <span className="typed">
            <Typed />
          </span>
        </p>
      </div>
    </section>
  );
}
export default Story;
