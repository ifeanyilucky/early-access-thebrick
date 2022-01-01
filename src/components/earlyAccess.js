import React from "react";

const EarlyAccess = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="subscribe">
        <h2 className="fs-1">Join The Waitlist</h2>
        <p class="subscribe__copy">
          Be the first set of people to use Thebrick
        </p>
        <div class="form">
          <input
            type="email"
            class="form__email"
            placeholder="Enter your email address"
          />
          <button class="form__button">Request Access</button>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
