import React from "react";

function Footer() {
  return (
    <footer className="footer d-flex align-items-end">
      <div className="d-flex flex-column" style={{ height: 70 }}>
        <div>
          
        </div>
      </div>
      <div className="d-flex align-items-start">
        <div>© {new Date().getFullYear()} Tokenaro.com</div>
      </div>
    </footer>
  );
}

export { Footer };
