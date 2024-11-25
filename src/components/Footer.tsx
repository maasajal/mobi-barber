import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-5 text-center">
      <p>
        Mobi Barber || Copyright © {new Date().getFullYear()} - All right
        reserved by{" "}
        <Link
          href="https://maasajal-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAASajal
        </Link>
      </p>
    </div>
  );
};

export default Footer;
