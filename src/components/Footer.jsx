import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
      <p>
        All right reserved: <a href="https://www.sourav4u.in">sourav4u.in</a>
      </p>
    </footer>
  );
}

export default Footer;
