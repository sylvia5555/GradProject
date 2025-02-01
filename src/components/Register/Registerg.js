import React, { useEffect, useState } from "react";
import "./Register.css"; // Ensure your styles are linked to the component
import create from "../../Assets/gallery/gust.jpg";
import '../../App.css'
export default function CreateAccount() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300); // Delays the animation for smooth entry
  }, []);

  return (
    <div
      className="create-account-container"
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // Using the CSS custom property here
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className={`content-wrapper ${showContent ? "show" : ""}`}>
        {/* Left Side Image */}
        <div className="image-side">
          <img
            src={create} // Replace with your actual image URL
            alt="Create Account"
            className="account-image"
          />
        </div>

        {/* Right Side Form */}
        <div className="form-side">
          <div
            style={{
              background: "#ffffff",
              padding: "50px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              width: "400px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color:"rgb(12, 124, 244)",
                fontWeight: "bold",
                marginBottom: "30px",
                fontSize: "1.8rem",
              }}
            >
             Register AS Aguist
            </h2>
            <form>
              {/* Username */}
              <div className="mb-3" style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="username"
                  className="form-label"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Choose a username"
                  required
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px",
                    background: "#f7f7f7",
                    width: "100%",
                    fontSize: "1rem",
                    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>

              {/* Email */}
              <div className="mb-3" style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px",
                    background: "#f7f7f7",
                    width: "100%",
                    fontSize: "1rem",
                    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>

              {/* Password */}
              <div className="mb-3" style={{ marginBottom: "30px" }}>
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Create a password"
                  required
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px",
                    background: "#f7f7f7",
                    width: "100%",
                    fontSize: "1rem",
                    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{
                  background: "var(--linear2)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
