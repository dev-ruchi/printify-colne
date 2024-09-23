import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faTiktok,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold text-green-500">Printfy</div>
        <div className="flex justify-center text-green-600 text-3xl space-x-4">
          <a
            href="https://www.facebook.com/Printify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-blue-500 transition duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/printify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-pink-500 transition duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/printify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-blue-700 transition duration-300"
            />
          </a>
          <a
            href="https://x.com/printify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-blue-400 transition duration-300"
            />
          </a>
          <a
            href="https://www.youtube.com/c/printify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="hover:text-red-600 transition duration-300"
            />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="hover:text-black transition duration-300"
            />
          </a>
          <a
            href="https://www.reddit.com/r/Printify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faReddit}
              className="hover:text-orange-600 transition duration-300"
            />
          </a>
        </div>
      </div> 
      <div className="p-8 my-16 flex justify-between items-start">
  <div className="mb-8 flex-1">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Integrations</h2>
    <ul className="list-none text-sm p-4 space-y-2">
      {["Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop", "PrestaShop", "BigCommerce", "Wix", "WooCommerce", "Squarespace", "Printify API", "Printify Pop-Up Store", "Shutterstock"].map((item) => (
        <li key={item}>
          <a
            href={`https://${item.toLowerCase().replace(' ', '')}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>

  <div className="mb-8 flex-1">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Discover</h2>
    <ul className="list-none text-sm p-4 space-y-2">
      {["Blog", "Guides", "Products", "Etsy Print-on-Demand", "Shopify Print-on-Demand", "WooCommerce Print-on-Demand", "Wix Print-on-Demand", "Squarespace Print-on-Demand", "Make Your Own Shirt", "Brands", "Pricing", "Shipping Rates", "Mockup Generator"].map((item) => (
        <li key={item}>
          <a
            href={`/${item.toLowerCase().replace(/ /g, '-')}`}
            rel="noopener noreferrer"
            className="hover:text-green-600 transition duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>

  <div className="mb-8 flex-1">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Start Selling</h2>
    <ul className="list-none text-sm p-4 space-y-2">
      {["Custom T-shirts", "Custom Hoodies", "Custom Mugs", "Custom Socks", "Custom Backpacks", "Custom Branding", "Sell on Etsy", "Sell on Social Media", "Free T-shirt Designs", "Custom Products", "Custom All-Over-Print Hoodies", "Start a Clothing Line", "Start POD Business", "Bulk Orders", "Transferring to Printify"].map((item) => (
        <li key={item}>
          <a
            href={`/${item.toLowerCase().replace(/ /g, '-')}`}
            rel="noopener noreferrer"
            className="hover:text-green-600  transition duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>

  <div className="mb-8 flex-1">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Printify</h2>
    <ul className="list-none text-sm p-4 space-y-2">
      {["Printify", "Print on Demand", "Print Providers", "Experts Program", "Printify Express Delivery", "Become a Partner", "About", "Printify Quality Promise", "Jobs", "Webinars", "Printing Profits Podcast", "Contact Us", "Affiliate", "Contact Sales", "POD Glossary", "Network Fulfillment Status", "Merchant Protection", "Security", "Sitemap"].map((item) => (
        <li key={item}>
          <a
            href={`/${item.toLowerCase().replace(/ /g, '-')}`}
            rel="noopener noreferrer"
            className="hover:text-green-600  transition duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>

<footer className="py-6">
  <div className="">
    <div className="space-x-4 mb-4 md:mb-0 container mx-auto flex flex-col md:flex-row text-sm justify-center items-center">
      <a href="/intellectual-property" className="text-gray-400 hover:text-green-600">Intellectual Property Policy</a>
      <a href="/terms-of-service" className="text-gray-400 hover:text-green-600">Terms of Service</a>
      <a href="/privacy-policy" className="text-gray-400 hover:text-green-600">Privacy Policy</a>
      <a href="/security" className="text-gray-400 hover:text-green-600">Security</a>
    </div>
   
  </div>
  <p className="items-center justify-center md:text-center mt-4 text-sm">
      © 2024 Printify, Inc. All rights reserved.
    </p>
</footer>
    </div>
  );
};

export default Footer;
