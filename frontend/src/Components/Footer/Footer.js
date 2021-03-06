import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  
  
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: 10,
          borderTop: "1px solid lightgray",
          height: 100,
          backgroundColor: "#f1f1f1",
          justifyContent: "space-around",
          display: "flex"
        }}
      >
      
        {/* buy column */}
        <div>
          <div style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }} >
            Buy
          </div>
          <NavLink
            to={"/payment"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Terms of payment</div>
          </NavLink>
          <NavLink
            to={"/delivery"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Delivery</div>
          </NavLink>
        </div>
      
        {/* about us column */}
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            About us
          </div>
          <NavLink
            to={"/info"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Company Info</div>
          </NavLink>
        </div>
      
        {/* Social Media column */}
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Social Media
          </div>
          <a
            href="http://www.facebook.com"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(312, 32, 34)"
            }}
          >
            <div className="footerItem">Facebook</div>
          </a>
        </div>
        {/* Credits column */}
        <div>
            <div
              style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
            >
              Credits Media
            </div>
            
            <a
              href="https://www.flaticon.com/authors/gregor-cresnar"
              target="blank"
              style={{
                textDecoration: "none",
              }}
            >
              <div className="footerItem">click me to see who create thumbs up icon</div>
            </a>
            <a
              href="https://www.flaticon.com/authors/freepik"
              target="blank"
              style={{
                textDecoration: "none",
              }}
            >
              <div className="footerItem">click me to see who create thumbs down icon</div>
            </a>
            
          </div>
        
      </div>
    );
  }
}

export default Footer;
