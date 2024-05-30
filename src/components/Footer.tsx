import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <img src="/social-media-links.svg" alt="links" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
