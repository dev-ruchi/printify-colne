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
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow">
        <div className="text-4xl font-bold text-green-500 mb-4 md:mb-0">
          Printfy
        </div>
        <div className="flex justify-center text-green-600 text-3xl space-x-4">
          {[
            {
              icon: faFacebook,
              link: "https://www.facebook.com/Printify/",
              color: "hover:text-blue-500",
            },
            {
              icon: faInstagram,
              link: "https://www.instagram.com/printify/",
              color: "hover:text-pink-500",
            },
            {
              icon: faLinkedin,
              link: "https://www.linkedin.com/company/printify/",
              color: "hover:text-blue-700",
            },
            {
              icon: faTwitter,
              link: "https://x.com/printify",
              color: "hover:text-blue-400",
            },
            {
              icon: faYoutube,
              link: "https://www.youtube.com/c/printify",
              color: "hover:text-red-600",
            },
            {
              icon: faTiktok,
              link: "https://tiktok.com",
              color: "hover:text-black",
            },
            {
              icon: faReddit,
              link: "https://www.reddit.com/r/Printify/",
              color: "hover:text-orange-600",
            },
          ].map(({ icon, link, color }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={color}
            >
              <FontAwesomeIcon
                icon={icon}
                className="transition duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="p-8 my-16 flex flex-col md:flex-row justify-between">
        {[
          {
            title: "Integrations",
            items: [
              "Shopify",
              "Etsy",
              "eBay",
              "Amazon",
              "TikTok Shop",
              "PrestaShop",
              "BigCommerce",
              "Wix",
              "WooCommerce",
              "Squarespace",
              "Printify API",
              "Printify Pop-Up Store",
              "Shutterstock",
            ],
          },
          {
            title: "Discover",
            items: [
              "Blog",
              "Guides",
              "Products",
              "Etsy Print-on-Demand",
              "Shopify Print-on-Demand",
              "WooCommerce Print-on-Demand",
              "Wix Print-on-Demand",
              "Squarespace Print-on-Demand",
              "Make Your Own Shirt",
              "Brands",
              "Pricing",
              "Shipping Rates",
              "Mockup Generator",
            ],
          },
          {
            title: "Start Selling",
            items: [
              "Custom T-shirts",
              "Custom Hoodies",
              "Custom Mugs",
              "Custom Socks",
              "Custom Backpacks",
              "Custom Branding",
              "Sell on Etsy",
              "Sell on Social Media",
              "Free T-shirt Designs",
              "Custom Products",
              "Custom All-Over-Print Hoodies",
              "Start a Clothing Line",
              "Start POD Business",
              "Bulk Orders",
              "Transferring to Printify",
            ],
          },
          {
            title: "Printify",
            items: [
              "Printify",
              "Print on Demand",
              "Print Providers",
              "Experts Program",
              "Printify Express Delivery",
              "Become a Partner",
              "About",
              "Printify Quality Promise",
              "Jobs",
              "Webinars",
              "Printing Profits Podcast",
              "Contact Us",
              "Affiliate",
              "Contact Sales",
              "POD Glossary",
              "Network Fulfillment Status",
              "Merchant Protection",
              "Security",
              "Sitemap",
            ],
          },
        ].map(({ title, items }, index) => (
          <div key={index} className="mb-8 flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            <ul className="list-none text-sm space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer className="py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 text-sm">
          {[
            "Intellectual Property Policy",
            "Terms of Service",
            "Privacy Policy",
            "Security",
          ].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-400 hover:text-green-600"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-center">
          © 2024 Printify, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
