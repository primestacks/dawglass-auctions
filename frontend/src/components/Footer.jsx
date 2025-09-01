import React from "react";

function Footer() {
  return (
    <div className=" w-full bg-[#111827] ">
      <footer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 footer sm:footer-horizontal  bg-[#111827] text-[#ffffff] py-10 px-5 justify-evenly">
        <nav>
          <h2>Dawglass Auctions</h2>
          <p>
            Your premier destination for online auctions. Find cars,
            electronics, clothing, and more at incredible prices.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="max-w-6xl mx-auto py-4 px-10 flex flex-col md:flex-row justify-between items-center text-[#9CA3AF] border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Premier Auctions. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
