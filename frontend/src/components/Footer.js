import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            ASR
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
